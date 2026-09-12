---
name: team-sub
description: The coach's enamelled magnetic tactics board, where the discs keep their own time.
colors:
  enamel: "#0A4732"
  enamel-hi: "#0C5239"
  enamel-lo: "#063524"
  graphite: "#2A2E2B"
  graphite-hi: "#3B413C"
  chalk: "#F2EFE4"
  chalk-soft: "#A9C0B4"
  steel-soft: "#A7AEA3"
  ink-time: "#F5D020"
  ink-alert: "#E8412C"
  black: "#14100E"
  key-edge: "#B9B3A2"
  disc-face-hi: "#FFFEF8"
  disc-face-lo: "#D9D4C2"
  disc-rest-hi: "#F3F0E6"
  disc-rest-mid: "#E4E0D3"
  disc-rest-lo: "#C6C2B1"
  glare-low: "rgba(255, 255, 255, 0.02)"
  glare-mid: "rgba(255, 255, 255, 0.055)"
  glare-high: "rgba(255, 255, 255, 0.085)"
  bevel-lit: "rgba(255, 255, 255, 0.28)"
  shade-09: "rgba(0, 0, 0, 0.09)"
  shade-12: "rgba(0, 0, 0, 0.12)"
  shade-16: "rgba(0, 0, 0, 0.16)"
  shade-24: "rgba(0, 0, 0, 0.24)"
  shade-30: "rgba(0, 0, 0, 0.3)"
  shade-32: "rgba(0, 0, 0, 0.32)"
  shade-34: "rgba(0, 0, 0, 0.34)"
  shade-60: "rgba(0, 0, 0, 0.6)"
  scratch: "rgba(242, 239, 228, 0.16)"
  scratch-hard: "rgba(242, 239, 228, 0.3)"
typography:
  display:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 15vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.045em"
    fontFeature: "'tnum' 1"
  headline:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum' 1"
  title:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  figure-lg:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum' 1"
  figure:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum' 1"
  figure-sm:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'tnum' 1"
  body:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  caption:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
  label:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.13em"
  micro:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.16em"
rounded:
  none: "0"
  hair: "1px"
  hairline: "0.125rem"
  rail: "0.1875rem"
  key: "0.25rem"
  disc: "50%"
spacing:
  xs: "0.3rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "0.875rem"
  xl: "1rem"
  2xl: "1.25rem"
  3xl: "1.5rem"
components:
  disc-field:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.black}"
    rounded: "{rounded.disc}"
    size: "4.25rem"
  disc-rest:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.black}"
    rounded: "{rounded.disc}"
    size: "4.25rem"
  disc-ghost:
    backgroundColor: "{colors.enamel-lo}"
    rounded: "{rounded.disc}"
    size: "4.25rem"
  clock-run:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.black}"
    rounded: "{rounded.key}"
    width: "8.25rem"
    height: "5.25rem"
    typography: "{typography.body}"
  clock-run-running:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.key}"
  commit-rail-armed:
    backgroundColor: "{colors.ink-alert}"
    textColor: "{colors.black}"
    rounded: "{rounded.rail}"
    height: "3.25rem"
  commit-rail-ready:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.black}"
    rounded: "{rounded.rail}"
    height: "3.25rem"
  button-chalk:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.black}"
    rounded: "{rounded.hairline}"
    padding: "0 0.875rem"
    height: "2.75rem"
    typography: "{typography.label}"
  button-scratch:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.hairline}"
    padding: "0 0.875rem"
    height: "2.75rem"
    typography: "{typography.label}"
  button-armed:
    backgroundColor: "{colors.ink-alert}"
    textColor: "{colors.black}"
    rounded: "{rounded.hairline}"
  input-milled:
    backgroundColor: "{colors.enamel-lo}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.hairline}"
    padding: "0 0.625rem"
    height: "3rem"
    typography: "{typography.body}"
  count-chip:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "0 0.32rem"
    typography: "{typography.caption}"
---

# Design System: team-sub

## Overview

**Creative North Star: "The Enamelled Magnet Board, where the discs keep their own time"**

The whole product is one physical object seen head-on: a deep enamel board held in a graphite steel frame, with chalk-enamel discs sitting on it. Every surface in the build is one of three materials — enamel ground, graphite rail and tray, chalk disc — and nothing exists that is not made of one of them. The board's division is field versus tray, never a halfway line, because the product tracks on and off rather than positions. Depth is literal: a disc on the field is proud of the enamel with a real cast shadow, a disc at rest is recessed into a milled well in the steel, and an empty slot is a well with no disc in it.

The ink set is closed and each ink owns exactly one meaning. Grease-pencil yellow is elapsed time and nothing else. Alert red is overdue and the commit, and nothing else. Chalk white is identity. Secondary text is never grey: it is tinted out of the surface it sits on, green-tinted on enamel and warm-grey-tinted on graphite. One type family, Chivo, self-hosted for a field with no network, at three weights and always with tabular figures, carries an extreme size contrast between the clock and its labels.

The density is high and glare-hostile by design: this is read at arm's length in sunlight, in one glance, without reading words. Confirmed rejections: the dark app with a neon-green accent and rounded player cards, and the top-down pitch diagram with positional dots. There are no halfway lines, no pitch markings, no positions.

**Key Characteristics:**
- Three materials only: enamel ground, graphite frame and tray, chalk disc.
- A closed ink set where each ink owns exactly one meaning.
- Nothing floats: every disc sits on a fixed shared lattice.
- One scale rules every disc, so comparison needs no arithmetic.
- Depth carries state; colour is never asked to carry on-versus-rest alone.
- One authored moment of motion, a 560ms commit that propagates through the whole board.

## Colors

Three materials and four inks, closed: deep pitch enamel and graphite steel as ground, chalk as identity, and two signal inks that each own exactly one fact.

### Primary
- **Pitch Enamel** (`{colors.enamel}`): the board itself, one continuous ground under the field and the setup sheet. It is never a card, a panel or a button — it is the object's surface. Rendered with a raking sheen from the upper left and a faint fractal tooth at 5.5% overlay so it reads as fired enamel rather than flat fill. Its high and low tints (`{colors.enamel-hi}`, `{colors.enamel-lo}`) exist only to shape that single ground and to mill the input wells.
- **The Glare Band** (`{colors.glare-mid}` rising to `{colors.glare-high}` and falling to `{colors.glare-low}`): the three white translucencies of the 101° sheen raked across the enamel, plus a 5% white wash down the top 14%. This is the only place white appears as light rather than as chalk, and the three stops are the complete set — the band rises, peaks and falls in one pass and never repeats elsewhere.

### Secondary
- **Grease-Pencil Yellow** (`{colors.ink-time}`): elapsed time, exclusively. It is the stepped arc on a disc's rim, the shift figure beneath it, the staged-change dashes, the caret in an input, the paused clock label, and the selection highlight. If a value is not a duration, it is not this colour.
- **Alert Red** (`{colors.ink-alert}`): overdue, and the commit action. It is the only colour in the system that escalates.

### Tertiary
- **Graphite Steel** (`{colors.graphite}`): the frame rails and the resting tray. Its lifted tint (`{colors.graphite-hi}`) is the top of a rail's bevel. Graphite reads as the part of the object that holds the board rather than the board itself, which is why resting lives here.

### Neutral
- **Chalk** (`{colors.chalk}`): identity. Disc faces, player names, the running clock, and the ready state of the commit rail. It is the brightest thing on the board and it always means "this is a person or this is the time".
- **Disc Enamel, proud** (`{colors.disc-face-hi}` → `{colors.chalk}` → `{colors.disc-face-lo}`): the three stops of a field disc's face, lit off-centre from the upper left. Chalk is the mid stop, which is why a disc reads as chalk rather than as a gradient.
- **Disc Enamel, recessed** (`{colors.disc-rest-hi}` → `{colors.disc-rest-mid}` → `{colors.disc-rest-lo}`): the same three-stop face, dimmed and cooled, for a disc at rest in the tray. It is the counterpart set to the proud disc, one stop for one stop, so the two discs are the same object under different light and not two different colours of token.
- **Lit Bevel** (`{colors.bevel-lit}`): the top bevel of the armed commit rail — the one white translucency strong enough to read as a lit edge on a saturated plate. On graphite rails the equivalent edge is a chalk translucency, not this.
- **Disc Black** (`{colors.black}`): numerals cut into a disc's enamel, and the text of any chalk or red plate. It is never used as a background.
- **Chalk Soft** (`{colors.chalk-soft}`) and **Steel Soft** (`{colors.steel-soft}`): secondary text, tinted from the surface it sits on — green-tinted on enamel, warm-grey on graphite.
- **Key Edge** (`{colors.key-edge}`): the extruded side of a chalk key, visible only as the press depth of a physical control.
- **Scratch** (`{colors.scratch}`, `{colors.scratch-hard}`): chalk translucencies used for hairline inset strokes — the outline of a ghost control, a count chip, a milled input edge.

### Named Rules
**The Closed Ink Rule.** The set above is complete. No new hue enters the board, and no existing ink takes a second meaning. Yellow is duration; red is overdue and commit; chalk is identity.

**The Red-Is-A-Plate Rule.** Alert red is always a fill carrying `{colors.black}` on top, never thin ink on the ground. As text on enamel it measures 2.66:1; as a plate under disc black it measures 4.70:1. On a glare-lit sideline screen only the plate is legible, so the overdue shift figure gets a red plate and the commit rail turns red as a whole surface.

**The White-Is-Light Rule.** White translucencies (the glare band, the lit bevel, the inset top highlight on a disc) are light falling on a material. Opaque near-white is always chalk, the identity ink. Never mix the two roles: a surface does not get "a lighter chalk", it gets a highlight.

**The Tinted-Not-Grey Rule.** Secondary text is tinted out of its own surface. On enamel use chalk-soft; on graphite use steel-soft. Never a neutral grey, because a neutral grey on enamel reads as dirt.

**The Paused Keeps Its Inks Rule.** The paused state dulls the ground (enamel to `#24382F`, graphite to `#31352F`) and flattens the disc shadow to a 2px seat, and touches no ink. A stoppage is exactly when the coach reads who is overdue, so the signals stay at full strength while the material goes quiet.

## Typography

**Display Font:** Chivo (self-hosted variable, weight axis 300–900, with `system-ui, sans-serif` fallback)
**Body Font:** Chivo
**Label Font:** Chivo

One family throughout, at three weights only: 400, 700, 900. It is self-hosted from `fonts/chivo-latin.woff2` and `fonts/chivo-latin-ext.woff2` because the product must work with no network at the field; there is no CDN link anywhere in the build, and `font-display: block` is deliberate so a numeral never renders in a fallback face.

**Character:** A grotesque with flat terminals and wide, square tabular figures — a scoreboard voice rather than an editorial one. Its personality is entirely in the size contrast: a clock ten times the height of its own label.

### Hierarchy
- **Display** (900, `clamp(2.75rem, 15vw, 3.75rem)`, line-height 0.92, tracking -0.045em): the running clock in the top rail. One per screen.
- **Headline** (900, 1.75rem, tracking -0.04em): setup stepper values. The heaviest figure outside the clock.
- **Title** (900, 1.5rem, tracking -0.03em): the rail heading during setup and lineup.
- **Figure Large** (900, 1.375rem, tracking -0.04em): the game total beneath a disc at full time, when the board re-weights from the live shift to the record and the two figures swap size and order.
- **Figure** (900, 1.25rem, tracking -0.04em): the shift minutes beneath a disc on the field. A disc’s own numeral is sized off the disc, at 46% of its diameter (26% when it falls back to letters), so one scale rules every disc.
- **Figure Small** (900, 1.0625rem, tracking -0.03em): the staged count numeral on the dividing rail, set inside its uppercase label so the number outweighs the word it belongs to.
- **Body** (700, 1.125rem): input values, the commit rail's verb, and the setup's go key.
- **Caption** (400, 0.8125rem): the one line of explanatory prose in the rail, and the count chip.
- **Label** (700–900, 0.75rem, tracking 0.13–0.14em, uppercase): region names, legends, field labels, rail status.
- **Micro** (700, 0.6875rem, tracking 0.16em, uppercase): the clock's state word and the end-of-quarter control.

### Named Rules
**The Tabular Figures Rule.** Tabular numerals are on at the body root (`font-variant-numeric: tabular-nums`, `'tnum' 1`) and never turned off. Every number on the board is a quantity that changes in place; proportional digits would make it jitter.

**The Extreme Contrast Rule.** Between the clock and its label there is no intermediate step. Heavy weight 900 with negative tracking for anything numeric; 700 with wide positive tracking and uppercase for anything that names. There is no 500 and no 600 in this system.

**The Figure-Outweighs-Its-Label Rule.** Wherever a number sits with a word — the clock and "Elapsed", the staged count and "on", the shift figure and its legend — the number is 900 with negative tracking at two or more steps the label's size. The four figure steps (1.75 / 1.375 / 1.25 / 1.0625rem) exist to give that pairing room at four different densities, not to grade importance.

**The Weight-Three Rule.** 400 for prose, 700 for labels and names, 900 for figures and verbs. Nothing else, even though the variable axis would allow it.

## Layout

The board is a single capped column: `max-width: 32rem`, centred, `min-height: 100svh`, stacked as top rail → field → dividing rail → tray, with the setup sheet replacing field-and-tray in its own phase. On a wide screen the board does not grow; it stays an object on a graphite ground.

Because the board is capped, column counts are **container queries on each region**, never viewport media queries. The lattice is 4 columns by default; below a 20.5rem region it drops to 3; above 27.5rem it goes to 5 and the disc grows from 4.25rem to 4.75rem. The field, tray and squad are each their own containment context, so a region answers to its own width.

The lattice is a fixed grid with `1rem` row gap and `0.5rem` column gap, items centred, shared by field and tray so a disc lands in the same rhythm on both sides of the rail. Empty field slots are filled with ghost wells rather than left blank, so the grid never collapses.

Spacing rhythm runs on a 0.25rem base, with the reused steps being 0.5 / 0.75 / 0.875 / 1 / 1.25 / 1.5rem. Region padding is `0.875rem 0.75rem`; rails are `0.4–0.7rem` vertical by `0.75rem` horizontal. Both the top rail and the tray absorb `env(safe-area-inset-*)` so the object meets the hardware edges. The top rail is sticky.

Two textures carry the materials, both authored inline as SVG turbulence data URIs so nothing is fetched at the field. The enamel's tooth is a 160px isotropic fractal noise at 5.5% opacity in `overlay` blend. The steel's grain is a single `--grain` token on `:root` — a 140px turbulence stretched along one axis (`baseFrequency: .014 .85`) at 17% — consumed by both the frame rails and the tray, so every graphite surface is brushed in the same direction.

### Named Rules
**The Nothing-Floats Rule.** Every disc sits on the shared lattice. No free positioning, no overlap, no drag-anywhere. If an element cannot be placed on the lattice, it is not a disc.

**The Container-Not-Viewport Rule.** Responsive column counts come from container queries on the region. A 1024px window must not buy the board extra columns.

## Elevation & Depth

This system is materially deep, not tonally layered, and the depth is load-bearing: it is one of three non-colour signals for on-field versus resting. A field disc sits proud of the enamel with a real cast shadow plus an inset top highlight, so it looks like an object lying on a surface. A resting disc is recessed: its shadow set inverts to an inset, and it sits in a milled well drawn behind it. An empty slot is the well alone. Rails are lit from above with a 1px chalk inset at the top and a black inset at the bottom, and drop a tight shadow onto whatever is below.

Depth is built from one closed set of black translucencies rather than from loose per-component values. Treat these as the recess scale, and reach for a step on it before inventing an alpha.

### Recess Translucency Scale
- **`{colors.shade-09}`**: the outer stop of a milled well and of a ghost slot — the faintest shade in the system, where a recess fades back into its surface.
- **`{colors.shade-12}`**: the outer stop of the well behind a resting disc.
- **`{colors.shade-16}`**: the tray floor's mid fall-off, and the pressed state of the armed commit rail.
- **`{colors.shade-24}`**: the sunk panel of a setup stepper, the one component that is a recess rather than a plate or an outline.
- **`{colors.shade-30}`**: the inner stop of a ghost slot, and the underside bevel of the ready commit rail.
- **`{colors.shade-32}`**: the cut side of the current quarter mark.
- **`{colors.shade-34}`**: the inner stop of the well behind a resting disc — the deepest point of any recess.
- **`{colors.shade-60}`**: the cut of an unmarked quarter mark, and the diffuse cast under a chalk key.

### Shadow Vocabulary
- **Disc proud** (`box-shadow: 0 7px 11px -3px rgba(0,0,0,.55), 0 2px 3px rgba(0,0,0,.45), inset 0 2px 0 rgba(255,255,255,.7), inset 0 -3px 2px rgba(0,0,0,.13)`): a disc on the field.
- **Disc seated (paused)** (`box-shadow: 0 2px 3px -1px rgba(0,0,0,.5)`): the flattened shadow of the paused board.
- **Disc recessed** (`box-shadow: inset 0 3px 5px rgba(0,0,0,.4), inset 0 -2px 0 rgba(255,255,255,.45), 0 1px 0 rgba(255,255,255,.14)`): a disc resting in the tray.
- **Milled well** (`box-shadow: inset 0 3px 6px rgba(0,0,0,.45), inset 0 -2px 3px rgba(242,239,228,.09), 0 1px 0 rgba(242,239,228,.08)` over a closest-side black radial): the seat a resting disc or a ghost sits in.
- **Rail bevel** (`box-shadow: inset 0 1px 0 rgba(242,239,228,.15), inset 0 -1px 0 rgba(0,0,0,.55), 0 8px 18px -8px rgba(0,0,0,.7)`): every frame rail.
- **Tray mouth** (`box-shadow: inset 0 10px 18px -12px rgba(0,0,0,.95)`): the shadow the frame casts into the tray.
- **Key edge** (`box-shadow: 0 4px 0 {colors.key-edge}, 0 9px 16px -6px rgba(0,0,0,.7)` on the clock control; `0 3px 0 {colors.key-edge}, 0 7px 13px -5px {colors.shade-60}` on a chalk button): the extruded side of a physical chalk key plus the shadow that extrusion casts. Both parts are always present. On press the edge collapses to 1px and the cast tightens with it (`0 1px 0 {colors.key-edge}, 0 3px 7px -4px {colors.shade-60}`) while the key travels down the edge's height.
- **Scratched outline** (`box-shadow: inset 0 0 0 2px {colors.scratch-hard}`): a control with no plate, cut into the ground rather than placed on it.

### Named Rules
**The Three-Signal Rule.** On-field versus resting is carried three non-colour ways at once — region (above or below the dividing rail), elevation (proud with cast shadow versus recessed into a well), and the arc (present on the field, absent in the tray). Never let colour alone carry it.

**The Press-Is-Physical Rule.** Every key with an extruded edge travels down by the height of that edge on `:active`, and its edge and its diffuse cast collapse together in the same beat. An extrusion always carries a cast — an edge with no shadow under it is a flat offset, not a physical key — and there is no shadow in this build that fails to respond to touch.

**The Paused-Flattens-Only-Material Rule.** When the clock is paused, elevation and ground go quiet; the inks do not.

## Shapes

Two silhouettes, and nothing between them. The **disc** is a perfect circle (`50%`) at one size per lattice, the only round form in the system. Everything else is a rail, a plate or a well: rectangles on a four-step near-square scale — `0` on a count chip, `1px` on the overdue plate and the quarter marks, `0.125rem` on buttons, inputs and stepper panels, `0.1875rem` on the commit rail, `0.25rem` on the clock key. The `1px` step is deliberate and is the world's tightest corner: it is the radius of something stamped or cut rather than moulded, which is why the overdue plate and the scratched tally marks share it. Rails run the full width of the board and are hard-edged, because they are the frame of a physical object.

Strokes are hairlines cut into a surface: inset `1.5px` or `2px` chalk translucency, never a mid-grey border. The one dashed form in the system is the staged marker — two offset dashed rings in grease-pencil yellow, the second rotated 9° at 55% opacity, so a provisional mark looks drawn rather than rendered.

Iconography is authored SVG on a 24 viewBox at a single stroke weight (`stroke-width: 2.25`, round caps, no fill): the remove cross and the two stepper glyphs. There are no emoji and no unicode characters standing in for icons anywhere in the build.

### Named Rules
**The Near-Square Rule.** Radius outside the disc never exceeds `0.25rem`, and the scale is `0 / 1px / 0.125rem / 0.1875rem / 0.25rem`. A larger radius turns a stamped plate into a soft app card, which is the world this build refuses.

**The Circle-Is-The-Disc Rule.** Round means "a person on the board". Nothing else in the system is round — not an avatar, not a badge, not a button.

**The One-Stroke-Weight Rule.** Every icon is authored SVG at 2.25 stroke with round caps. Glyph fonts, emoji and icon packs are out.

## Components

### The Disc (signature)
A chalk-enamel token carrying a player, sized off `--disc` (4.25rem, 4.75rem in a wide region) so one scale rules every disc on the board.
- **Face:** an off-centre radial from `#FFFEF8` through chalk to `#D9D4C2`, lit from the upper left. Resting discs use a dimmer, cooler pull (`#F3F0E6` → `#C6C2B1`).
- **Numeral:** disc black at 46% of the disc diameter, weight 900, tracking -0.05em; 26% when the roster entry has no number and initials stand in.
- **Elevation:** proud on the field, recessed in the tray (see Elevation & Depth).
- **Arc:** twelve stepped wedges on the rim, one wedge per minute, on the field only.
- **Staged:** the disc scales to 0.94 and takes two offset dashed grease-pencil rings.
- **Press:** `translateY(2px) scale(0.97)` over 0.14s.
- **Caption:** name in chalk 700 at 0.75rem, then the shift figure in grease-pencil yellow 900 at 1.25rem beside a smaller game total in the surface's soft tint. At full time the two swap size and order: the game total rises to 1.375rem/900 chalk, the shift figure drops to 0.75rem/700 in the soft tint, the row reverses, and the overdue red plate is dropped entirely, because at full time there is no shift left to be overdue.
- **Overdue plate:** the shift figure takes an alert-red fill with disc-black text at `1px` radius and `0.06rem 0.28rem 0.1rem` padding — the smallest plate in the system, sized to the numeral.

### The Stepped Arc (signature)
The rim clock. Twelve wedges to the ring, one wedge is one minute, and a completed ring means a shift has run long — at which point the lit wedges turn alert red and the shift figure below takes a red plate. Wedges are drawn on a 100-unit viewBox at radius 45.5 with a 26° nominal span and 8.5 nominal stroke width, `stroke-linecap: butt`, unlit wedges at `rgba(20,16,14,.13)`. Each disc carries a stable per-disc, per-wedge jitter in radius (±0.5), start angle (±0.9°), span (±1.1°) and stroke width (±0.9) at 0.93 stroke opacity, so the ring reads as hand-laid rather than machine-uniform. It is never a smooth ramp; the step is the unit of meaning.

### Buttons
- **Shape:** near-square (0.125rem), minimum 2.75rem tall, uppercase label at 0.8125rem/900 with 0.07em tracking.
- **Chalk key (primary):** chalk plate, disc-black text, extruded key edge; presses down 2px.
- **Scratch (secondary):** no plate, a 2px inset chalk-translucent outline; on press it fills at 14% chalk and the outline goes solid chalk.
- **Disabled:** never faded to a lower opacity — it keeps full opacity and drops to chalk-soft text with the softer scratch outline, so it stays readable in sun.
- **Armed:** any control that is one tap from a destructive or committing act takes an alert-red plate with disc-black text.
- **Focus:** a single global treatment, `outline: 3px solid {colors.chalk}` at 3px offset. There is no per-component focus style.

### The Clock Control
The largest target on the board: 8.25rem wide, 5.25rem tall, chalk key with disc-black text at rest. While the clock runs it recedes to a transparent plate with a scratched outline and chalk text, because a running board should be showing the game, not its own button. At full time it is removed rather than disabled.

### The Dividing Rail (signature)
The boundary the discs cross, and the commit. It carries the staged count both ways — off on the left, on on the right — with a centred status line in steel-soft when nothing is staged. It arms only when the batch balances: `ready` gives it a chalk plate, `armed` gives it the alert-red plate with disc-black text. Discs crossing it pass over its face, never behind it.

### Inputs
- **Panel (stepper):** a sunk panel rather than a plate — `{colors.shade-24}` with a 1.5px scratch inset at `0.125rem` radius, holding a 0.75rem/700 label, two scratch glyph keys and a 1.75rem/900 chalk value.
- **Style:** milled into the enamel — the deep enamel low tint, a 2px inset black shadow and a 1.5px scratch inset, radius 0.125rem, 3rem tall, value at 1.125rem/700 chalk.
- **Caret:** grease-pencil yellow.
- **Placeholder:** chalk-soft at full opacity, weight 400, so it never reads as a disabled field.
- **Focus:** the global chalk focus ring.

### The Quarter Marks
Four (or fewer) tally marks scratched into the top rail beside the clock: 4px by 19px, each rotated ±1.5–2.5° so no two are parallel. A done quarter fills steel-soft; the current one grows to 25px, fills chalk, and takes a faint chalk halo.

### Motion
One authored moment: the commit. Every moving disc runs the same FLIP at `560ms cubic-bezier(.16,1,.3,1)` and the dividing rail runs a matching chalk sweep on the same timing, so the substitution reads as a single gesture propagating through the whole board. Everything else is a 0.12–0.14s press response on the same easing. Under `prefers-reduced-motion: reduce` all animation and transition durations collapse to 0.01ms and the discs seat instantly.

## Do's and Don'ts

### Do:
- **Do** build every surface from the three materials: enamel ground, graphite rail or tray, chalk disc.
- **Do** give alert red a full plate with disc-black text whenever it appears (4.70:1), per the Red-Is-A-Plate Rule.
- **Do** tint secondary text from its own surface: chalk-soft on enamel, steel-soft on graphite.
- **Do** signal on-field versus resting three non-colour ways at once: region, elevation, arc.
- **Do** size a disc's numeral off the disc so one scale rules every disc.
- **Do** keep tabular figures on for every number.
- **Do** use container queries on the region for column counts; the board is capped at 32rem.
- **Do** step the time arc into discrete one-minute wedges, twelve to the ring.
- **Do** compute every duration from stored wall-clock timestamps, so a locked screen cannot make the board drift.
- **Do** author every icon as SVG at a single 2.25 stroke weight with round caps.
- **Do** make a key with an extruded edge travel down by that edge's height on press, and pair every extrusion with the diffuse cast it would throw.
- **Do** take depth from the recess translucency scale (0.09 / 0.12 / 0.16 / 0.24 / 0.30 / 0.32 / 0.34 / 0.60 black) rather than inventing a new alpha.
- **Do** keep radius outside the disc on the near-square scale: 0 / 1px / 0.125rem / 0.1875rem / 0.25rem.
- **Do** reuse the `--grain` token for any graphite surface, so all steel is brushed the same way.
- **Do** let the number outweigh its label wherever the two sit together.

### Don't:
- **Don't** add a hue to the ink set, or give an existing ink a second meaning.
- **Don't** set alert red as thin text on the enamel (2.66:1).
- **Don't** use a neutral grey for secondary text.
- **Don't** weaken an ink in the paused state; dull the ground and flatten the shadow instead.
- **Don't** float anything off the lattice, or let a disc overlap another.
- **Don't** use viewport media queries for the lattice's column count.
- **Don't** draw the elapsed arc as a smooth sweep, and don't let two discs use different minute scales.
- **Don't** make anything other than a disc a circle.
- **Don't** ship emoji, an icon font, or a unicode glyph standing in for an icon.
- **Don't** introduce a font weight outside 400 / 700 / 900, or a second family.
- **Don't** load a webfont from a network; the field has none.
- **Don't** draw a halfway line, pitch marking, or positional dot — the division is field versus tray.
- **Don't** fade a disabled control with opacity; drop it to chalk-soft on a soft scratch outline.
- **Don't** give anything a radius above 0.25rem, and don't round a rail.
- **Don't** treat a white translucency as a lighter chalk; white is light, chalk is identity.
- **Don't** ship an extruded edge with no cast shadow under it.

### The world's next increment
The grease-pencil arc is present and no longer machine-uniform — the stable per-disc, per-wedge jitter in radius, start angle, span and stroke width at 0.93 stroke opacity is real — but it still reads as an irregular vector arc rather than as wax laid on enamel. The next increment on this world is the arc's material: a wedge that has the drag, the broken coverage and the granular edge of a grease pencil on a fired surface. Treat this as the open frontier of the system, not as a licence to loosen any other rule.
