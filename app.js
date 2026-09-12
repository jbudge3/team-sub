/* ═══════════════════════════════════════════════════════════════════
   team-sub — substitution tracking

   Time is derived from stored wall-clock timestamps, never from a tick
   counter, so a locked screen, a backgrounded tab or a reload cannot
   make the board drift.
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

const KEY = 'team-sub:v1';

const WEDGES = 12;              /* rim wedges; one wedge is one minute     */
const OVERDUE_MIN = WEDGES;     /* a full ring marks an over-long shift    */
const ROSTER_MAX = 22;
const ON_FIELD_MIN = 3;
const ON_FIELD_MAX = 11;
const QUARTER_MIN = 1;
const QUARTER_MAX = 4;
const SLIDE_MS = 560;

/* ── elements ─────────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const board = $('board');
const el = {
  railTitleMain: $('railTitleMain'), railTitleSub: $('railTitleSub'),
  periodMarks: $('periodMarks'), periodLabel: $('periodLabel'), endPeriod: $('endPeriod'),
  clockLabel: $('clockLabel'), clockTime: $('clockTime'),
  runClock: $('runClock'), runClockLabel: $('runClockLabel'),
  entryForm: $('entryForm'), inNum: $('inNum'), inName: $('inName'), entryNote: $('entryNote'),
  outOnField: $('outOnField'), outQuarters: $('outQuarters'),
  squadLattice: $('squadLattice'), squadCount: $('squadCount'),
  squadNeed: $('squadNeed'), setupGo: $('setupGo'),
  fieldLattice: $('fieldLattice'), fieldCount: $('fieldCount'),
  trayLattice: $('trayLattice'), trayCount: $('trayCount'),
  divideRail: $('divideRail'), countOff: $('countOff'), countOn: $('countOn'),
  commit: $('commit'), railStatus: $('railStatus'),
  toRoster: $('toRoster'), newGame: $('newGame'),
  cellTpl: $('cellTpl'), ghostTpl: $('ghostTpl'),
};

const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── state ────────────────────────────────────────────────────────── */

function blankGame(S) {
  S.field = [];
  S.quarter = 1;
  S.clock = { running: false, since: null, accum: 0 };
  S.staged = { off: [], on: [] };
  S.t = {};
  S.roster.forEach((p) => { S.t[p.id] = { onMs: 0, shiftMs: 0, restMs: 0 }; });
  return S;
}

function freshState() {
  return blankGame({
    v: 1, phase: 'setup',
    config: { onField: 7, quarters: 4 },
    roster: [], field: [], quarter: 1,
    clock: { running: false, since: null, accum: 0 },
    staged: { off: [], on: [] }, t: {},
  });
}

let S = load() || freshState();

function load() {
  let raw;
  try { raw = localStorage.getItem(KEY); } catch (_) { return null; }
  if (!raw) return null;
  try {
    const d = JSON.parse(raw);
    if (!d || d.v !== 1 || !Array.isArray(d.roster)) return null;
    d.roster.forEach((p) => { d.t[p.id] = d.t[p.id] || { onMs: 0, shiftMs: 0, restMs: 0 }; });
    d.field = (d.field || []).filter((id) => d.roster.some((p) => p.id === id));
    /* a stage survives a reload, but only for players still on the side
       of the rail they were marked from */
    const st = d.staged || {};
    const known = (id) => d.roster.some((p) => p.id === id);
    d.staged = {
      off: (st.off || []).filter((id) => known(id) && d.field.indexOf(id) !== -1),
      on: (st.on || []).filter((id) => known(id) && d.field.indexOf(id) === -1),
    };
    return d;
  } catch (_) { return null; }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (_) { /* private mode */ }
}

/* ── time ─────────────────────────────────────────────────────────── */

const onField = (id) => S.field.indexOf(id) !== -1;

/* fold every millisecond run so far into the stored totals */
function flush(now) {
  if (!S.clock.running || S.clock.since == null) return;
  const d = Math.max(0, now - S.clock.since);
  S.clock.accum += d;
  S.roster.forEach((p) => {
    const t = S.t[p.id];
    if (onField(p.id)) { t.onMs += d; t.shiftMs += d; } else { t.restMs += d; }
  });
  S.clock.since = now;
}

const runningFor = (now) => (S.clock.running && S.clock.since != null ? Math.max(0, now - S.clock.since) : 0);

function live(id, now) {
  const t = S.t[id] || { onMs: 0, shiftMs: 0, restMs: 0 };
  const d = runningFor(now);
  const on = onField(id);
  return {
    onMs: t.onMs + (on ? d : 0),
    shiftMs: t.shiftMs + (on ? d : 0),
    restMs: t.restMs + (on ? 0 : d),
  };
}

const elapsedMs = (now) => S.clock.accum + runningFor(now);
const mins = (ms) => Math.floor(ms / 60000);

function clockText(ms) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

/* ── cells ────────────────────────────────────────────────────────── */

const cells = new Map();

/* stable per-disc, per-wedge jitter so no two arcs are identical, and so
   a given disc's arc never changes between paints */
function jitter(seed, i, spread) {
  let h = 2166136261;
  const s = `${seed}:${i}`;
  for (let k = 0; k < s.length; k++) { h ^= s.charCodeAt(k); h = Math.imul(h, 16777619); }
  return (((h >>> 8) % 1000) / 1000 - 0.5) * 2 * spread;
}

function arcPaths(svg, seed) {
  const R = 45.5, C = 50, SPAN = 26, STEP = 360 / WEDGES;
  const pt = (r, deg) => {
    const a = (deg * Math.PI) / 180;
    return [(C + r * Math.cos(a)).toFixed(2), (C + r * Math.sin(a)).toFixed(2)];
  };
  const out = [];
  for (let i = 0; i < WEDGES; i++) {
    const r = R + jitter(seed, i, 0.5);
    const from = -90 + i * STEP + (STEP - SPAN) / 2 + jitter(seed, i + 40, 0.9);
    const span = SPAN + jitter(seed, i + 80, 1.1);
    const [x1, y1] = pt(r, from);
    const [x2, y2] = pt(r, from + span);
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('class', 'wedge');
    p.setAttribute('data-on', '0');
    p.setAttribute('stroke-width', (8.5 + jitter(seed, i + 120, 0.9)).toFixed(2));
    p.setAttribute('d', `M${x1} ${y1}A${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${x2} ${y2}`);
    svg.appendChild(p);
    out.push(p);
  }
  return out;
}

function cellFor(p) {
  let c = cells.get(p.id);
  if (c) return c;
  const node = el.cellTpl.content.firstElementChild.cloneNode(true);
  node.dataset.id = p.id;
  c = {
    node,
    disc: node.querySelector('.disc'),
    num: node.querySelector('.disc__num'),
    name: node.querySelector('.cell__name'),
    a: node.querySelector('.t-a'),
    b: node.querySelector('.t-b'),
    drop: node.querySelector('.cell__drop'),
    wedges: arcPaths(node.querySelector('.arc'), p.id),
    lastWedges: -1,
  };
  c.disc.addEventListener('click', () => tapDisc(p.id));
  c.drop.addEventListener('click', (ev) => { ev.stopPropagation(); dropPlayer(p.id); });
  cells.set(p.id, c);
  return c;
}

function ghosts(n) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(el.ghostTpl.content.firstElementChild.cloneNode(true));
  return out;
}

/* how many more wells complete the last row. measured off the laid-out grid
   rather than off the container query, which has no resolved size on the
   very first render and would report the narrowest breakpoint. */
function rowFill(lattice) {
  const kids = Array.from(lattice.children);
  if (kids.length < 2) return 0;
  const top = kids[0].offsetTop;
  let cols = 0;
  for (const k of kids) { if (k.offsetTop === top) cols++; else break; }
  if (cols < 1 || cols >= kids.length) return 0;
  return (cols - (kids.length % cols)) % cols;
}

function fillLattice(lattice, nodes) {
  lattice.querySelectorAll('.cell--ghost').forEach((g) => g.remove());
  nodes.forEach((n) => lattice.appendChild(n));
  Array.from(lattice.children).forEach((child) => {
    if (nodes.indexOf(child) === -1) child.remove();
  });
}

function seat(lattice, nodes, slots) {
  fillLattice(lattice, nodes);
  lattice.append(...ghosts(Math.max(0, slots - nodes.length)));
  lattice.append(...ghosts(rowFill(lattice)));
}

function syncLattices() {
  if (S.phase === 'setup') {
    const squad = S.roster.map((p) => cellFor(p).node);
    seat(el.squadLattice, squad, S.config.onField);
    return;
  }
  const on = S.roster.filter((p) => onField(p.id)).map((p) => cellFor(p).node);
  const off = S.roster.filter((p) => !onField(p.id)).map((p) => cellFor(p).node);
  /* the field always seats at least its full complement of slots, so the
     dividing rail keeps its position as players move */
  seat(el.fieldLattice, on, S.config.onField);
  seat(el.trayLattice, off, 0);
}

/* ── paint ────────────────────────────────────────────────────────── */

function paintCells(now) {
  S.roster.forEach((p) => {
    const c = cells.get(p.id);
    if (!c) return;
    const on = onField(p.id);
    const L = live(p.id, now);
    const shiftM = mins(on ? L.shiftMs : L.restMs);
    const totalM = mins(L.onMs);
    const over = on && shiftM >= OVERDUE_MIN;
    const staged = S.staged.off.indexOf(p.id) !== -1 || S.staged.on.indexOf(p.id) !== -1;

    if (p.num !== '') {
      c.num.textContent = p.num;
      c.num.dataset.kind = 'digits';
    } else {
      c.num.textContent = p.name.slice(0, 3).toUpperCase();
      c.num.dataset.kind = 'letters';
    }
    c.name.textContent = p.name;
    c.name.title = p.name;
    c.a.textContent = String(shiftM);
    c.b.textContent = String(totalM);

    c.node.classList.toggle('cell--rest', S.phase !== 'setup' && !on);
    c.node.classList.toggle('cell--over', over);
    c.node.classList.toggle('cell--staged', staged);

    const w = on ? Math.min(WEDGES, shiftM) : 0;
    if (w !== c.lastWedges) {
      c.wedges.forEach((path, i) => path.setAttribute('data-on', i < w ? '1' : '0'));
      c.lastWedges = w;
    }

    c.disc.disabled = S.phase === 'setup' || S.phase === 'fulltime';
    c.disc.setAttribute('aria-pressed', staged ? 'true' : 'false');
    c.disc.setAttribute('aria-label', discLabel(p, on, shiftM, totalM, over, staged));
  });
}

function discLabel(p, on, shiftM, totalM, over, staged) {
  const who = p.num !== '' ? `${p.name}, number ${p.num}` : p.name;
  if (S.phase === 'setup') return `${who}. On the squad.`;
  const where = on
    ? `On the field, ${shiftM} min this shift${over ? ', a long shift' : ''}`
    : `Resting ${shiftM} min`;
  const rec = `${totalM} min this game`;
  if (S.phase === 'fulltime') return `${who}. ${where}. ${rec}.`;
  if (S.phase === 'lineup') {
    return `${who}. ${on ? 'Starting. Tap to take out of the lineup.' : 'Not starting. Tap to add to the lineup.'}`;
  }
  const act = staged
    ? 'Marked. Tap to unmark.'
    : on ? 'Tap to mark coming off.' : 'Tap to mark going on.';
  return `${who}. ${where}. ${rec}. ${act}`;
}

function paintChrome(now) {
  const onCount = S.field.length;
  const restCount = S.roster.length - onCount;

  board.dataset.phase = S.phase;
  board.dataset.clock =
    S.phase === 'fulltime' ? 'ended'
    : S.phase !== 'game' ? 'idle'
    : S.clock.running ? 'running'
    : S.clock.accum > 0 ? 'paused' : 'idle';

  el.fieldCount.textContent = String(onCount);
  el.trayCount.textContent = String(restCount);

  /* setup */
  el.outOnField.textContent = String(S.config.onField);
  el.outQuarters.textContent = String(S.config.quarters);
  el.squadCount.textContent = String(S.roster.length);
  const short = S.config.onField - S.roster.length;
  el.squadNeed.textContent = short > 0
    ? `${short} more needed to field ${S.config.onField}.`
    : `Enough for ${S.config.onField} on the field.`;
  el.setupGo.disabled = short > 0;
  if (S.phase === 'lineup') {
    el.railTitleMain.textContent = 'Starting lineup';
    el.railTitleSub.textContent = `Pick the ${S.config.onField} who start. The clock runs on kick off.`;
  } else {
    el.railTitleMain.textContent = 'Team sheet';
    el.railTitleSub.textContent = 'The squad stays on this device between games.';
  }

  /* quarters */
  if (el.periodMarks.childElementCount !== S.config.quarters) {
    el.periodMarks.textContent = '';
    for (let i = 1; i <= S.config.quarters; i++) {
      const m = document.createElement('span');
      m.className = 'periods__mark';
      el.periodMarks.appendChild(m);
    }
  }
  Array.from(el.periodMarks.children).forEach((m, i) => {
    const q = i + 1;
    m.dataset.state = S.phase === 'fulltime' || q < S.quarter ? 'done'
      : q === S.quarter ? 'now' : 'next';
  });
  el.periodLabel.textContent = S.phase === 'fulltime'
    ? 'Full time'
    : `Quarter ${S.quarter} of ${S.config.quarters}`;
  const lastQ = S.quarter >= S.config.quarters;
  if (el.endPeriod.dataset.arm !== 'armed') {
    el.endPeriod.textContent = lastQ ? 'End game' : `End Q${S.quarter}`;
  }

  /* clock */
  el.clockTime.textContent = clockText(elapsedMs(now));
  const paused = board.dataset.clock === 'paused';
  el.clockLabel.textContent =
    S.phase === 'fulltime' ? 'Final' : paused ? 'Paused' : S.clock.running ? '' : 'Not started';
  el.runClockLabel.textContent = S.clock.running ? 'Pause' : 'Start';
  el.runClock.setAttribute('aria-label',
    S.clock.running ? 'Pause the game clock' : 'Start the game clock');

  paintRail();
}

function paintRail() {
  const nOff = S.staged.off.length;
  const nOn = S.staged.on.length;

  if (S.phase === 'lineup') {
    const need = S.config.onField - S.field.length;
    const ready = need === 0;
    el.divideRail.dataset.armed = ready ? 'ready' : 'false';
    el.countOff.hidden = true;
    el.countOn.hidden = true;
    el.commit.hidden = !ready;
    el.commit.textContent = 'Kick off';
    el.railStatus.hidden = ready;
    el.railStatus.textContent = need > 0
      ? `Pick ${need} more to start`
      : `Take ${-need} back off`;
    return;
  }

  if (S.phase === 'fulltime') {
    el.divideRail.dataset.armed = 'false';
    el.countOff.hidden = true;
    el.countOn.hidden = true;
    el.commit.hidden = true;
    el.railStatus.hidden = false;
    el.railStatus.textContent = 'Full time. The board is closed.';
    return;
  }

  const balanced = nOff > 0 && nOff === nOn;
  el.countOff.hidden = nOff === 0;
  el.countOn.hidden = nOn === 0;
  el.countOff.querySelector('b').textContent = String(nOff);
  el.countOn.querySelector('b').textContent = String(nOn);
  el.divideRail.dataset.armed = balanced ? 'true' : 'false';
  el.commit.hidden = !balanced;
  el.commit.textContent = 'Substitute';
  el.railStatus.hidden = balanced;

  if (nOff === 0 && nOn === 0) {
    el.railStatus.textContent = 'Tap a disc to mark a change.';
  } else if (nOff > nOn) {
    const d = nOff - nOn;
    el.railStatus.textContent = `Mark ${d} more to come on`;
  } else if (nOn > nOff) {
    const d = nOn - nOff;
    el.railStatus.textContent = `Mark ${d} more to come off`;
  }
}

function paint() {
  const now = Date.now();
  paintCells(now);
  paintChrome(now);
}

function render() {
  /* the phase gates which regions are displayed, and a display:none region
     measures as a single row, so it has to land before the lattice is seated */
  board.dataset.phase = S.phase;
  syncLattices();
  paint();
  save();
}

/* ── disc travel: every moving disc on one shared timing ─────────── */

function slide(mutate) {
  if (reduceMotion()) { mutate(); render(); return; }

  const before = new Map();
  cells.forEach((c, id) => {
    if (c.node.isConnected) before.set(id, c.node.getBoundingClientRect());
  });

  mutate();
  render();

  board.classList.add('is-sliding');
  clearTimeout(slide.clear);
  slide.clear = setTimeout(() => board.classList.remove('is-sliding'), SLIDE_MS + 40);

  cells.forEach((c, id) => {
    const was = before.get(id);
    if (!was || !c.node.isConnected) return;
    const now = c.node.getBoundingClientRect();
    const dx = was.left - now.left;
    const dy = was.top - now.top;
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
    c.node.animate(
      [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' }],
      { duration: SLIDE_MS, easing: 'cubic-bezier(.16,1,.3,1)' },
    );
  });
}

/* ── actions ──────────────────────────────────────────────────────── */

function tapDisc(id) {
  if (S.phase === 'lineup') {
    slide(() => {
      const i = S.field.indexOf(id);
      if (i !== -1) S.field.splice(i, 1);
      else if (S.field.length < S.config.onField) S.field.push(id);
    });
    return;
  }
  if (S.phase !== 'game') return;
  const list = onField(id) ? S.staged.off : S.staged.on;
  const i = list.indexOf(id);
  if (i !== -1) list.splice(i, 1); else list.push(id);
  paint();
  save();
}

function doCommit() {
  if (S.phase === 'lineup') {
    if (S.field.length !== S.config.onField) return;
    S.phase = 'game';
    S.clock.running = true;
    S.clock.since = Date.now();
    render();
    el.runClock.focus({ preventScroll: true });
    return;
  }
  const off = S.staged.off.slice();
  const on = S.staged.on.slice();
  if (off.length === 0 || off.length !== on.length) return;

  flush(Date.now());
  el.divideRail.classList.remove('is-committing');

  slide(() => {
    off.forEach((id) => {
      const i = S.field.indexOf(id);
      if (i !== -1) S.field.splice(i, 1);
    });
    on.forEach((id) => { if (!onField(id)) S.field.push(id); });
    /* both directions start a fresh shift and a fresh rest */
    off.concat(on).forEach((id) => { S.t[id].shiftMs = 0; S.t[id].restMs = 0; });
    S.staged = { off: [], on: [] };
  });

  if (!reduceMotion()) {
    void el.divideRail.offsetWidth;
    el.divideRail.classList.add('is-committing');
    setTimeout(() => el.divideRail.classList.remove('is-committing'), SLIDE_MS + 40);
  }
}

function toggleClock() {
  const now = Date.now();
  if (S.clock.running) { flush(now); S.clock.running = false; S.clock.since = null; }
  else { S.clock.running = true; S.clock.since = now; }
  paint();
  save();
}

function endPeriod() {
  const now = Date.now();
  flush(now);
  S.clock.running = false;
  S.clock.since = null;
  if (S.quarter >= S.config.quarters) S.phase = 'fulltime';
  else S.quarter += 1;
  S.staged = { off: [], on: [] };
  render();
}

function startNewGame() {
  blankGame(S);
  S.phase = 'lineup';
  cells.forEach((c) => c.lastWedges = -1);
  render();
}

function editRoster() {
  S.phase = 'setup';
  render();
}

function addPlayer(num, name) {
  if (S.roster.length >= ROSTER_MAX) {
    el.entryNote.textContent = `The sheet holds ${ROSTER_MAX}. Drop someone to add another.`;
    return false;
  }
  const id = `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
  S.roster.push({ id, num: num.replace(/\D/g, '').slice(0, 2), name });
  S.t[id] = { onMs: 0, shiftMs: 0, restMs: 0 };
  el.entryNote.textContent = 'Numbers are optional and may repeat.';
  render();
  return true;
}

function dropPlayer(id) {
  if (S.phase !== 'setup') return;
  const c = cells.get(id);
  if (c) { c.node.remove(); cells.delete(id); }
  S.roster = S.roster.filter((p) => p.id !== id);
  S.field = S.field.filter((x) => x !== id);
  delete S.t[id];
  render();
}

function stepConfig(key, by) {
  if (key === 'onField') {
    S.config.onField = Math.min(ON_FIELD_MAX, Math.max(ON_FIELD_MIN, S.config.onField + by));
  } else {
    S.config.quarters = Math.min(QUARTER_MAX, Math.max(QUARTER_MIN, S.config.quarters + by));
    if (S.quarter > S.config.quarters) S.quarter = S.config.quarters;
  }
  render();
}

/* a second tap confirms anything that cannot be taken back */
const armTimers = new WeakMap();
function armOrRun(btn, run) {
  if (btn.dataset.arm === 'armed') {
    clearTimeout(armTimers.get(btn));
    btn.dataset.arm = 'idle';
    btn.textContent = btn.dataset.was || btn.textContent;
    run();
    return;
  }
  btn.dataset.was = btn.textContent;
  btn.dataset.arm = 'armed';
  btn.textContent = 'Tap again';
  armTimers.set(btn, setTimeout(() => {
    btn.dataset.arm = 'idle';
    btn.textContent = btn.dataset.was;
  }, 3400));
}

/* ── wiring ───────────────────────────────────────────────────────── */

el.entryForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const name = el.inName.value.trim().replace(/\s+/g, ' ');
  if (!name) { el.inName.focus(); return; }
  if (addPlayer(el.inNum.value, name)) {
    el.inNum.value = '';
    el.inName.value = '';
    el.inNum.focus();
  }
});

document.querySelectorAll('.stepper').forEach((s) => {
  s.querySelectorAll('[data-step]').forEach((b) => {
    b.addEventListener('click', () => stepConfig(s.dataset.key, Number(b.dataset.step)));
  });
});

el.setupGo.addEventListener('click', () => {
  if (S.roster.length < S.config.onField) return;
  blankGame(S);
  S.phase = 'lineup';
  cells.forEach((c) => c.lastWedges = -1);
  render();
});

el.commit.addEventListener('click', doCommit);
el.runClock.addEventListener('click', toggleClock);
el.endPeriod.addEventListener('click', () => armOrRun(el.endPeriod, endPeriod));
el.newGame.addEventListener('click', () => armOrRun(el.newGame, startNewGame));
el.toRoster.addEventListener('click', editRoster);

let resizeT;
window.addEventListener('resize', () => {
  clearTimeout(resizeT);
  resizeT = setTimeout(() => { syncLattices(); paint(); }, 120);
});

document.addEventListener('visibilitychange', () => { if (!document.hidden) paint(); });
window.addEventListener('pageshow', paint);

/* ── run ──────────────────────────────────────────────────────────── */

render();
setInterval(paint, 500);
