# Soo Falls Brand Explorer — Checkpoint

Status: Interactive placeholder implementation complete, locally verified, **not committed**.
Last real commit on `main` is `420c4656bc0f122d87016580e60c5c44f3697263` ("Add real
logo-card thumbnails for five Work-grid projects") — everything below is uncommitted
working-tree state on top of that.

## Objective

Restructure the Soo Falls case study to reduce scroll fatigue while preserving full
brand depth, using an Apple-inspired content hierarchy: establish the essential story
clearly up front, then let readers progressively explore individual parts of the
system through one interactive feature rather than a long linear scroll or a generic
FAQ accordion.

## What was implemented

- Removed the standalone "Project Scale" colour-field section (its content was
  redundant with the hero's Selected Applications chips and with what now lives in
  the explorer).
- Reordered the page so Logo Reconstruction comes before the packaging lineup.
- Trimmed the packaging-lineup copy to one concise sentence; moved detailed
  Doppelbock/Shipwreck Sour discussion into the explorer.
- Removed four sections from the always-visible flow (Website Strategy, Close Crop,
  Paired Details, Grid-Breaking Zamboni image) — their content is now anticipated
  explorer material, currently placeholder-only. **The four real images those
  sections used are temporarily off the live page** (see Known Limitations).
- Added a new provisional closing statement (exact approved wording, no can-count
  claim).
- Built "Explore the Brand System" — a four-category interactive stage with grey
  placeholder imagery, replacing the six-chapter expanding-grid concept from the
  earlier planning pass (that concept was explicitly rejected in favor of this one).

## Files changed

**Modified:**
- `work/soo-falls/index.html` — full page restructure + explorer build
- `src/input.css` — new `.explorer-bg`, `.explorer-content`, `.explorer-tab` component
  styles (crossfade, content fade/rise, tab active states)
- `dist/output.css` — rebuilt via `npm run build`

**Not part of this task, already uncommitted before this session's Soo Falls work
started** (do not attribute to this checkpoint, but must be preserved — see
"Uncommitted changes" below):
- `index.html`, `work/canal-district/index.html`, `work/index.html` — Canal District
  restructure work from earlier in this session
- `CANAL_DISTRICT_AUDIT.md`, `CANAL_DISTRICT_IMAGE_INDEX.md`,
  `GROWTOGETHER_AUDIT_CHECKPOINT.md` — untracked audit docs
- `images/canal-district-optimized/*`, `images/Untitled-1-0*.png`, `images/Untitled-4.png`
  — untracked Canal District assets

## Current page structure

```
Header / nav
─────────────────────────────
1. Hero + project facts (Role, Timeline, Disciplines, Selected Applications)
2. Full-bleed real hero photo (retail launch, img_1064)
3. Challenge / Approach two-up
4. Logo before/after slider
5. Full packaging lineup + one-sentence supporting statement
6. Explore the Brand System (interactive, 4 categories, placeholder imagery)
7. Closing brand-family photo (img_3345, real, unchanged)
8. Provisional closing statement
─────────────────────────────
Back to top / Contact CTA / Footer
```

## How the four-tab brand explorer works

Four persistent category controls (`role="tablist"`) sit beside/above a single
visual stage. Selecting a category swaps: the stage's background layer (crossfade),
the title, ~30–60 words of copy, a caption, and the `01 / 04`-style position
indicator. Only one category is shown at a time; the stage's aspect-ratio is fixed,
so switching categories never changes the stage's height or pushes surrounding page
content.

**Categories (standing decision, do not rename without approval):**
1. **Packaging & Releases**
2. **Campaigns & Social**
3. **Brand in the World**
4. **Digital, Production & Rollout**

Category 2 explicitly states that Soo Falls' social presence was independently
built and managed from the ground up — this line is already in place and does not
need to be re-added later.

## Desktop and mobile behaviour

- **Desktop / tablet (≥768px):** fixed 16:9 stage. Category controls run down the
  left in a vertical list. The text panel is absolutely positioned, overlaying the
  bottom of the stage (`bg-ink/85` translucent card). Prev/next arrow buttons sit at
  the stage's left/right edges.
- **Mobile (<768px):** 4:3 stage. Category controls render as a horizontally
  scrollable row of tabs above the stage. The text panel is in normal document flow
  *below* the image (not overlaid), so it never obscures the placeholder. Prev/next
  buttons are duplicated inline next to the position indicator so they stay visible
  without depending on hover.
- Verified via computed styles at 375px, 768px, and 1280px: zero horizontal
  overflow at any width; stage height is pixel-identical before and after a
  category switch (tested: 407.25px unchanged at 1280px).

## Accessibility and reduced-motion support

- Semantic ARIA tabs pattern: `role="tablist"` / `role="tab"` with `aria-selected`,
  `aria-controls`, roving `tabindex` (0 on the active tab, -1 on the rest); single
  `role="tabpanel"` whose `aria-labelledby` updates to track the active tab.
- Keyboard: ArrowRight/ArrowDown and ArrowLeft/ArrowUp move and activate adjacent
  tabs (with wraparound), Home/End jump to first/last. Tested and confirmed working.
- Visible focus states inherited from the sitewide `:focus-visible` rule — not
  overridden or suppressed anywhere in the explorer.
- Prev/next buttons are real `<button>` elements with `aria-label`s, not styled
  divs.
- No `aria-live` region on the panel — deliberate, to avoid excessive screen-reader
  announcements on every category change, per the brief.
- Reduced motion: the explorer uses plain CSS `transition` properties only (no
  JS-driven animation, no scroll hijacking). The sitewide
  `prefers-reduced-motion: reduce` rule in `src/input.css` already zeroes all
  transition durations globally via `*, *::before, *::after` — no separate
  exception was needed for the explorer. Content still functions fully with motion
  disabled.

## Tests completed

- All 4 category tabs (click)
- Prev/next buttons, including wraparound in both directions
- Keyboard arrow-key navigation and focus movement
- Stage height stability across category switches (measured, not just visual)
- Desktop (1280px), tablet (768px), and mobile (375px) layout and overflow checks
- Confirmed zero real `<img>` tags inside the explorer — placeholders only
- Confirmed only 5 images exist on the whole page, all pre-approved
- Heading hierarchy (single H1, ordered H2s, one H3 inside the explorer panel)

**Not directly tested this session:** live `prefers-reduced-motion` emulation
(verified by code review instead, since the browser tool used didn't expose a
reduced-motion toggle) and a screen reader pass (verified via ARIA attributes and
DOM structure, not an actual AT run).

## Known limitations

- **Four real images are currently missing from the live page**, not broken —
  removed on purpose when their sections were retired in favor of the explorer:
  the website-strategy paragraph's context, the close-crop glass photo
  (`soo-falls-glass.jpg`), the canning-line photo (`italian-pilsner-canning.jpg`),
  the Shipwreck Sour pair (`img_1850.jpg`), and the Zamboni wrap photo
  (`img_3238.jpg`). These are candidates for the explorer once real imagery is
  approved, not lost content.
- The browser tool's screenshot renderer was intermittently unreliable this
  session (unrelated to the page itself — confirmed via DOM/computed-style checks
  instead, and via clean screenshots that did succeed on mobile and tablet).
- No screen-reader software was run against the explorer; ARIA correctness was
  verified structurally, not audibly.

## Placeholder and imagery confirmations

- **Grey placeholders are intentional**, not a bug or an oversight. Every explorer
  state currently shows a neutral grey diagonal-stripe placeholder with an internal
  dev label (`PACKAGING IMAGE 01`, `CAMPAIGN IMAGE 01`, `BRAND IN THE WORLD IMAGE 01`,
  `PRODUCTION IMAGE 01`), built with plain CSS — no generated or fake photography
  anywhere.
- **No final explorer photography has been approved or wired in.** The unused real
  photography identified earlier in this project (tap handles, neon signage, trade
  show table, festival tent, retail placement, canning line, etc.) has not been
  selected, processed, or attached to any category. That remains a fully open,
  future decision.

## Standing decisions (carry forward, do not re-litigate without explicit direction)

- Typography stays **Archivo** (display) and **Work Sans** (body) — no Instrument
  Sans, no Roboto Mono, no site-wide font change was made or proposed.
- Logo before/after slider and the full packaging lineup image remain
  **always visible** — never move behind the explorer interaction.
- Explorer categories are fixed as **Packaging & Releases, Campaigns & Social,
  Brand in the World, Digital, Production & Rollout** — four, not six, no separate
  thin Social category.
- Final explorer states will eventually use **changing photographic backgrounds**
  in place of the grey placeholders — the crossfade mechanism is already built to
  support that swap directly (replace the placeholder `background-image` /
  add an `<img>` per state) without restructuring the interaction.
- **Do not add final imagery to the explorer without Drew's explicit approval.**
- **Do not commit, push, or deploy** any of this until Drew separately authorizes it.

## Next recommended steps

1. Drew reviews the current placeholder implementation (interaction, proportions,
   responsive behaviour) and approves or requests changes.
2. If approved: select and process real imagery per category (packaging shots,
   campaign/trade-show/festival photos, environmental/retail photos, production
   photos) — this was explicitly deferred, not started.
3. Decide the fate of the four now-hidden real images (fold into the explorer,
   restore elsewhere, or retire) — flagged above, not yet decided.
4. Re-run the full verification pass (all tests listed above) once real imagery
   replaces the placeholders, since image weight/aspect ratios may behave
   differently than the CSS gradients.
5. Only then: commit, and separately, only on explicit request: push/deploy.

## Uncommitted changes that must be preserved

The working tree currently holds **two separate bodies of uncommitted work** —
do not discard, stash-and-drop, or `git checkout --` any of the following:

1. This session's Soo Falls explorer work (`work/soo-falls/index.html`,
   `src/input.css`, `dist/output.css`).
2. Earlier, separate uncommitted Canal District restructure work already in the
   tree before this task began (`index.html`, `work/canal-district/index.html`,
   `work/index.html`, the `CANAL_DISTRICT_*` docs, and everything under
   `images/canal-district-optimized/`), plus the still-untracked
   `GROWTOGETHER_AUDIT_CHECKPOINT.md` and the `images/Untitled-1-0*.png` /
   `images/Untitled-4.png` source-derived files.

Run `git status` before any destructive git operation to confirm both sets are
still intact.
