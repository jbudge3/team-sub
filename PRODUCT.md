# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain HTML, CSS, and JavaScript. No framework, no build step, no backend. Confirmed by the user during init.

## Users

The primary user is a volunteer youth recreational soccer coach, standing on the sideline during a live game, holding a phone in one hand. They are not a trained analyst and did not choose this role for the paperwork. Their job in the moment is to know who is currently on the field, who is resting, and how long each has been there, so they can make the next substitution without stopping to think.

Parents and players are affected by the outcome of substitutions but are not confirmed users of the product.

## Product Purpose

Track substitutions live, during play, on a phone. The product holds the state a coach would otherwise hold in their head or on a damp paper roster: who is on, who is off, and elapsed time for each. Success is the coach getting through a full game making confident substitution calls without losing track of a player and without taking their attention off the field for more than a glance.

## Positioning

Built for the live sideline moment rather than for planning or record-keeping. The product's mechanism is continuous real-time tracking of on-field and resting state during play, not a rotation schedule authored in advance and followed. A neighboring product that generates a pre-game rotation plan is solving a different job.

## Operating Context

- The usage scene is the sideline of a youth recreational soccer game, outdoors, in progress.
- The phone is held in one hand, often the non-dominant one. The other hand is doing something else.
- The screen is viewed in direct daylight and read in glances between plays, not studied.
- Conditions include cold hands, gloves, rain, and glare.
- Sessions are the length of a game, with the app in the foreground and the screen repeatedly locking and waking.
- Youth recreational soccer allows free substitution, so substitutions are frequent and not limited to a fixed count.
- Rosters are small and largely stable across a season.

## Capabilities and Constraints

**Confirmed:**
- Live in-game tracking of which players are on the field, which are resting, and elapsed time for each.
- Data persists on the device using `localStorage`. Game state and roster survive a page refresh and a locked screen.
- No server, no accounts, and no sign-in. All data is local to the one device and one browser it was entered on. It does not sync, transfer between devices, or survive clearing browser data.
- Because there is no backend, the product functions with no network connectivity at the field. This is a consequence of the confirmed stack, not a separately specified offline mode.

**Explicitly undecided — do not assume either way in future work:**
- Whether the product produces a shareable or exportable post-game record of minutes played.
- Whether equal playing time is enforced, recommended, or merely made visible.
- Whether position or formation coverage is tracked alongside on/off state.
- Whether period or quarter structure is modeled, and whether a game clock is part of the product.
- Whether more than one team or multiple saved games are supported.

## Brand Commitments

None. "team-sub" is the folder name only. No product name, logo, colors, typography, voice, or identity assets exist, and none are binding. Naming is open.

## Evidence on Hand

None. There is no existing code, copy, imagery, roster data, league affiliation, user research, testimonial, or usage data in this project. The directory was empty at init. Future work must not fabricate club names, league partnerships, coach quotes, download counts, or any other proof.

## Product Principles

1. **The game does not pause for the app.** Every action a coach takes during play must be completable in a glance and a tap. Anything that requires reading, deciding, or correcting is a failure of the product, not the coach.
2. **Current state is the product.** Who is on and how long they have been on is the one thing that must always be immediately true and immediately visible. Everything else is secondary to it.
3. **The coach's attention belongs on the field.** The product competes with the game for attention and should lose on purpose. It is glanced at, not watched.
4. **Setup is paid once.** The roster is stable across a season. A coach should not re-enter it before each game.
5. **Built for bad conditions, not ideal ones.** Daylight glare, gloves, cold, rain, and one hand are the normal case. A design that only works indoors on a clean screen does not work.

## Accessibility & Inclusion

No formal standard was established during init. Two product-specific needs follow directly from the confirmed usage scene and must be preserved: text and state must remain legible in direct outdoor daylight, and touch targets must be operable one-handed with cold or gloved fingers. Color alone must never be the only signal distinguishing an on-field player from a resting one.
