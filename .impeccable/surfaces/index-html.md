---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["app.js","styles.css"]
---

## Status: built, reviewed, documented

The visual world is **decided and confirmed by the user**. Do not run a new direction round, concept tournament, or world workshop. The surface is built, the finish review ran, and the documenter wrote `DESIGN.md` from the shipped artifact. **`DESIGN.md` is now the visual authority.** The `## Direction contract` at the bottom of this file is retained as the record of the chosen world, not as a live spec to build against.

Completed: PRODUCT.md via `init`, then `shape` through discovery, direction seed, and the decision page, then the build, the finish review, and `DESIGN.md`. `index.html`, `app.js`, and `styles.css` all exist and carry the full flow described in `## Scope`.

For further work on this surface, read `DESIGN.md` for the design system and the sections below for the task model, constraints, and the decisions that stay open.

## Scope

The full game flow for the sideline substitution tracker, as one page: roster setup, pre-game lineup, the live game screen, and full time. Visitor mode is **Operate**. Product truth lives in PRODUCT.md and is not repeated here.

Platform is web, built as plain HTML, CSS, and JavaScript with no framework, no build step, and no backend. State persists in `localStorage`.

## Audience and job

A volunteer youth rec soccer coach on an open touchline, phone at chest height, glancing down for under a second between plays. Their task is to know who is on, who is resting, and how long each has been there, and to make the next substitution without stopping to think.

## Task model

Confirmed during discovery and binding on the build:

- **Format** is configurable, designed around the U10 default: roster of about 10 to 12, seven on the field, four quarters.
- **Substitutions stage as a batch, then commit.** The coach marks players going off and coming on while play continues, then commits the whole change at the next stoppage.
- **Guidance surfaces the signal, never an order.** Time is visually weighted so the most overdue player is obvious. The app never names a substitution.
- **The clock is coach-run game time.** Player minutes accrue only while the clock runs, so stoppages and halftime cost nobody.
- **Full time just stops.** No summary screen, no export, no sharing. The board freezes and stays readable.

## Memorable moment

The stage-and-commit rail. Marked discs carry provisional grease-pencil rings on both sides of the rail; the rail arms only when the counts balance and the field stays legal; committing slides every marked disc across in one synchronized motion and wipes the rings.

## Constraints

- **Daylight first.** Direct sun, glare, gloves, cold, one hand. Maximum contrast, large targets, nothing that needs a second look.
- **On versus resting is never encoded by color alone.** The squad wears one kit, so state reads through region, elevation, and arc. Three non-color signals.
- **Time computes from stored wall-clock timestamps, never a tick counter,** so a locked screen, a backgrounded tab, or a reload cannot drift.
- **Discs never reorder.** Identity is the number and position is stable, so muscle memory survives the whole game.
- Touch targets at least 44pt; the clock control much larger. AA contrast against the enamel ground. Reduced motion removes the slide and seats discs instantly.

## Ranges and states

| Dimension | Minimum | Typical | Maximum |
|---|---|---|---|
| Roster | 1 | 10 to 12 | 22 |
| On field | 3 | 7 | 11 |
| Bench | 0 | 3 to 5 | 19 |
| Periods | 1 | 4 | 4 |
| Elapsed | 0 min | 50 min | 90 min |
| Name length | 2 chars | 6 chars | 20 chars |

Numbers run 0 to 99 and may be duplicated or absent in rec leagues. Material states: first run with an empty roster, lineup not yet set, clock stopped before kickoff, clock running, clock paused, batch staged, batch unbalanced, full time, and mid-game reload.

**Paused must be loud.** A coach who forgets to restart the clock corrupts the whole record, so the board reads dormant from arm's length: the enamel dulls and every arc stops.

## Anti-goals

No positions, formations, or pitch diagram. No recommendation engine naming the next substitution. No post-game summary, sharing, or export. No accounts, network, or analytics. No fairness grade on the coach. No sound.

## Unresolved decisions

A builder must not invent these. They were left open deliberately and stay open:

- Whether stoppage time is added to a period.
- What happens when a period ends with players still on the field.
- Whether a player can be marked unavailable or injured mid-game.
- Whether multiple teams or past games are saved.

## Direction contract

**THESIS:** The coach's enamelled magnetic tactics board, where the discs keep their own time. It refuses the category's two defaults: the dark app with a neon-green accent and rounded player cards, and the top-down pitch diagram with positional dots. This product tracks on and off, not positions, so the board's division is field versus tray, never a halfway line.

**OWN-WORLD:** Deep pitch-enamel green `#0A4732` carries the surface as one continuous ground; a graphite steel tray `#2A2E2B` holds resting discs below a frame rail. Discs are chalk enamel `#F2EFE4` with black tabular numerals, sitting proud of the board with real cast shadow. A closed ink set, each owning exactly one meaning: grease-pencil yellow `#F5D020` is elapsed time, alert red `#E8412C` is overdue and the commit action, chalk white is identity. One family throughout, Chivo, weights 400/700/900, tabular figures, extreme size contrast. Discs sit on a fixed lattice shared by field and tray; nothing floats.

**STORY:** The coach sees who is on and who has been on too long in one glance, without reading. They mark a batch while play continues, commit it at the stoppage, and trust the record afterward.

**FIRST VIEWPORT:** Portrait phone. A top frame rail carries the running clock in large chalk numerals with four quarter marks scratched beside it; the start/pause control is the largest target on screen. Below it the enamel field holds seven discs on the lattice, each with a stepped grease-pencil arc sweeping its rim and minutes in chalk beneath. The frame rail divides, carrying the staged count both ways and arming only when balanced. The graphite tray sits below with the resting discs. The commit rail is the primary action.

**FORM:** The Magnet Board, candidate 1 of my ordered grounded list, taken as the IMPECCABLE'S PICK card over the assigned Team Sheet. Seed key `d17db8ee`. Build path is code-led: no image generation exists, so there is no comp, and the ambition lives in this contract. The split-flap Departure Board was judged competitive and stays adoptable. Five disciplines were donated by declined challengers and are binding: nothing off-grid; each ink owns one meaning; a commit propagates through the whole board in one motion; one scale rules every disc so comparison needs no arithmetic; the time arc is stepped into discrete wedges, never a smooth ramp.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
