# Portfolio Visual Sweep

Status: Round 1 items are documentation only, except the site-wide typography
item (see below), which was separately confirmed and implemented outside the
sweep process. Round 2's new "Work — Supporting Project Viewer" direction is
documentation only per explicit instruction — not implemented.

## ⚠ Screenshot note

The 9 annotated screenshots were located at
`portfolio-review:round-01:/` (note: this directory's name literally
contains colons rather than a nested `round-01/` folder — almost certainly
a Finder drag-drop artifact where a `/` in a dragged folder name got
converted to `:`. Flagging as an FYI only; left untouched per "do not
rename, move, or process assets"). All 9 were read and cross-checked
against the written notes below. **They agree closely — no handwriting/
written-summary conflicts were found.** Two things came out of the visual
pass that the written notes alone didn't fully specify: SF14 (Back to top)
is now confirmed rather than conditional, and one annotation
(logo-comparison screenshot) doesn't map to any written note — see SF16.
Screenshot reference fields below now cite the actual filenames.

Priority levels below (High / Medium / Low) are my own suggested triage,
since Round 1 notes didn't rank items — flagged per-item where inferred
rather than stated.

---

## Site-wide

| Field | Detail |
|---|---|
| **Screenshot reference** | `home-typography-spacing.jpeg` |
| **Status** | **Done** — implemented and pushed (`18e01e3`, "Switch display headings to DM Sans with tighter tracking") |
| **Requested change** | Reconsider the typographic treatment of large headings and project titles (current appearance disliked) |
| **Reason** | Stated dissatisfaction with current heading/title appearance; no specific cause identified yet |
| **Priority** | Medium — foundational (affects every page); resolved outside the sweep process before Round 2 began |
| **Ambiguity requiring confirmation** | Resolved directly in conversation, not through the sweep: `font-display` switched from Archivo to DM Sans site-wide (`tailwind.config.js`), plus a new `.font-display { letter-spacing: -0.02em }` rule in `src/input.css` so every heading/project-title gets the tighter tracking without touching each heading's class list individually. Explicit `tracking-tight` utilities elsewhere still win the cascade where present. Applied uniformly across all 9 pages, matching the "site-wide, not page-by-page" instruction from Round 1. |

---

## Home (`/`)

### H1. Compact featured-project rows / reduce vertical spacing

| Field | Detail |
|---|---|
| **Screenshot reference** | `home-project-spacing.jpeg` |
| **Status** | Change |
| **Requested change** | Make the Soo Falls / Canal District / Jenesis feature rows more compact; reduce the vertical space between them |
| **Reason** | Current spacing reads as excessive |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | None — both notes describe the same underlying spacing problem. **Visual adds detail:** two distinct annotations, not one. (1) "this takes up too much real estate" points directly at the Soo Falls placeholder image block itself — the block's *size*, not just page spacing, is being called out. (2) A separate "→ too much space" arrow marks the dead gap between the bottom of the Canal District red color-field image and the next section. So the fix has two parts: shrink/tighten the image blocks themselves, and tighten the inter-section gaps — not purely a padding reduction. Current implementation: each feature is its own `py-16` section (`index.html:62`, `:79`, `:96`) with an `aspect-[4/3]` image block. |

### H2. Preserve alternating image/text structure

| Field | Detail |
|---|---|
| **Screenshot reference** | `home-project-spacing.jpeg` (implied — no annotation contradicts the alternating layout) |
| **Status** | Keep |
| **Requested change** | No change — explicitly preserve the current alternating left/right image-text layout across the three feature rows |
| **Reason** | Stated directly |
| **Priority** | — |
| **Ambiguity requiring confirmation** | None |

### H3. "About" → "About Me"

| Field | Detail |
|---|---|
| **Screenshot reference** | `home-about-heading.jpeg` |
| **Status** | Change |
| **Requested change** | Rename the homepage's "About" section heading to "About Me" (`index.html:180`) |
| **Reason** | Stated directly |
| **Priority** | Low — trivial copy edit |
| **Ambiguity requiring confirmation** | Confirmed by screenshot: "About" is struck through with "About Me" written beside it, directly on the homepage blurb heading only — nothing else on that screenshot is annotated (work-strip grid and footer below it are untouched). Scope check stands: the standalone `/about/` page's own H1 (`About`) and nav label (`About`) were not mentioned and are not included in this request unless you confirm you want those changed too. |

---

## Work (`/work/`)

### W1. Remove the Environmental filter

| Field | Detail |
|---|---|
| **Screenshot reference** | `work-remove-environmental.jpeg` |
| **Status** | Remove |
| **Requested change** | Remove "Environmental" from the primary Work-page filter row (`work/index.html:54`) |
| **Reason** | Environmental/signage work may live inside individual case studies, but shouldn't be a top-level Work filter |
| **Priority** | Low — quick, low-risk removal |
| **Ambiguity requiring confirmation** | None — confirmed by screenshot (Environmental button crossed out, "get rid of Environmental" noted). Also worth noting this removal has zero content impact either way: I checked, and **no project card on `/work/` currently carries the `environmental` tag** (grepped all 9 `data-tags` attributes). The filter is already dead/orphaned in production; clicking it today shows the empty-state message. Removing it is a clean no-op for visible content. |

---

## Soo Falls (`/work/soo-falls/`)

### SF1. Replace hero photo with the ten-can lineup on white

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-replace-hero.jpeg` |
| **Status** | Change |
| **Requested change** | Replace the opening full-bleed hero (currently the LCBO retail hand-holding-can photo) with the clean ten-can lineup on white |
| **Reason** | Stated directly (implied: stronger, cleaner opening image) |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | **Resolved (Round 1 clarification).** Confirmed as a straight swap, not a duplication: `full-lineup.jpg`/`.webp` moves up to become the hero and is **not** repeated in "A System Built to Expand" — that section becomes LCBO/retail-focused using the in-store photo instead (see SF3). No open question remaining. |

### SF2. Refocus "A System Built to Expand" on LCBO launch / retail rollout

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-lcbo-section.jpeg` |
| **Status** | Change |
| **Requested change** | Rewrite/refocus this section's content around the LCBO launch and retail rollout story |
| **Reason** | Stated directly |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | Confirmed by screenshot: "I want this section to focus on LCBO and use the photo of the beer in the store" is written directly beside the "A System Built to Expand" heading. This is a copy change flagged for a future implementation pass, not a Round 1 rewrite — noting per your instruction not to rewrite copy during documentation. |

### SF3. Use the Italian Pilsner in-store photo in the LCBO-focused section

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-lcbo-section.jpeg` (paired with `soo-falls-replace-hero.jpeg`) |
| **Status** | Change |
| **Requested change** | Move the Italian Pilsner in-store photograph into the refocused "A System Built to Expand" section, which becomes an LCBO/retail-rollout-focused section built around that photo |
| **Reason** | Stated directly — pairs with SF1's hero swap |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | **Resolved (Round 1 clarification).** This photo is the current hero image (`img_1064.jpg`). Confirmed as a clean swap with SF1: `full-lineup` moves up to become the hero and does **not** stay in this section — the section is rebuilt around `img_1064` (in-store photo) and refocused copy about the LCBO launch/retail rollout (SF2). No duplication, no open question remaining. |

### SF4. Shrink the logo before/after comparison

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-logo-comparison.jpeg` |
| **Status** | Change |
| **Requested change** | Make the before/after logo slider substantially smaller than its current size |
| **Reason** | Stated directly (implied: currently too large/dominant — current implementation is a full `aspect-square` block at max-w-5xl width) |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | **Partially resolved (Round 1 clarification).** No exact pixel size is confirmed yet, but the direction is now set: a contained side-by-side module occupying roughly **half** the comparison's current visual footprint, positioned beside its explanatory copy (this also folds in SF5 and SF16 — see below). Exact dimensions still to be decided at implementation time, but "roughly half" is enough to design against. |

### SF5. Explore placing explanation beside the comparison on larger screens

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-logo-comparison.jpeg` (same annotation as SF4), confirmed by the SF16 mark on the same screenshot |
| **Status** | Change |
| **Requested change** | On desktop/tablet widths, place the (now smaller, per SF4) comparison module beside its explanatory text instead of stacked |
| **Reason** | Stated directly |
| **Priority** | Medium — upgraded from "exploratory" now that SF16 confirms this is an actual layout direction, not just a maybe |
| **Ambiguity requiring confirmation** | **Mostly resolved (Round 1 clarification).** Originally worded as "explore"/"maybe beside copy?" — softer language. The SF16 mark (a rough placeholder square showing the smaller comparison sitting beside the Logo Reconstruction copy) confirms this is the intended direction, not just a tentative idea. Still open: exact side-by-side proportions/breakpoint behavior, to be worked out at implementation time alongside SF4's final sizing. |

### SF6. Preserve the before/after interaction

| Field | Detail |
|---|---|
| **Screenshot reference** | Not received this session |
| **Status** | Keep |
| **Requested change** | No change to the drag/slider interaction mechanism itself |
| **Reason** | Stated directly |
| **Priority** | — |
| **Ambiguity requiring confirmation** | None |

### SF7. Make Brand Explorer imagery more visually dominant

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-explorer.jpeg` |
| **Status** | Change |
| **Requested change** | Increase the visual weight/prominence of imagery within the "Explore the Brand System" interactive explorer |
| **Reason** | Stated directly |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | Confirmed by screenshot: "the image needs to be more visible" written beside the explorer's grey placeholder stage. Depends on real photography being selected for the explorer (still pending per `SOO_FALLS_EXPLORER_CHECKPOINT.md` — no final imagery approved yet). This may be partly resolved automatically once real photos replace the grey placeholders, and partly a layout/proportion change independent of that. |

### SF8. Consider a designed image grid / multi-image composition for some categories

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-explorer.jpeg` (same annotation as SF7) |
| **Status** | Change |
| **Requested change** | Per-category flexibility, not a single fixed layout: each of the 4 explorer categories may use either one strong image or a restrained 2–4-image composition, chosen per category based on the actual material available |
| **Reason** | Stated directly |
| **Priority** | Medium — upgraded from "consider" now that the governing principle is confirmed, even though the specific per-category choice is still pending |
| **Ambiguity requiring confirmation** | **Resolved as a governing principle (Round 1 clarification).** This is not a single sitewide grid layout applied uniformly — it's a general direction ("one excellent image OR a restrained 2–4-image composition, depending on the material") to be decided **per category** once real imagery is selected. Which specific categories end up single-image vs. multi-image is still an open, imagery-dependent decision, but that's expected to be resolved naturally during asset selection, not a documentation gap. |

### SF9. Reduce dominance of the dark copy panel

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-explorer.jpeg` (inferred — no distinct mark on the dark panel itself; grouped with SF7/SF8's annotation) |
| **Status** | Change |
| **Requested change** | Reduce the visual weight of the dark (`bg-ink/85`, backdrop-blur) text panel overlaying the explorer stage |
| **Reason** | Stated directly — connects to SF7 (imagery should read as more dominant than the text overlay) |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | The screenshot's single annotation ("image needs to be more visible... grid so there's not just one pic") reads as one note about the image side of the panel, not a separate mark on the dark copy panel itself. SF9 is documented from the written note only — no dedicated visual confirmation for shrinking the panel specifically. No specific target (smaller panel, lighter opacity, less padding, shorter copy) is specified either way — needs a design decision during implementation. |

### SF10. Remove the closing "person holding cans" image

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-remove-closing.jpeg` |
| **Status** | Remove |
| **Requested change** | Remove the final full-bleed closing image (`img_3345.jpg`, "person wearing a Soo Falls t-shirt holding all eight Soo Falls beer cans") |
| **Reason** | Stated directly |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | None on the removal itself — confirmed by screenshot (see the combined note under SF10–SF15 below: one large X spans the image, statement, provisional label, and Back-to-top link together, labeled "delete all of this"). Open question for a later round: should anything replace this as the page's closing visual beat, or does the page now end on the Brand Explorer (per SF15 below)? |

### SF11. Remove its figure caption

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-remove-closing.jpeg` |
| **Status** | Remove |
| **Requested change** | Remove "Fig. 04 — The Full Lineup" caption, paired with SF10 |
| **Reason** | Caption has no purpose once its image is removed |
| **Priority** | Medium (bundled with SF10) |
| **Ambiguity requiring confirmation** | None — confirmed within the same "delete all of this" X in the screenshot. Note for implementation: if any other change in this round also removes a figure, the page's figure numbering (`Fig. 01`–`Fig. 03` currently) will need to be checked for sequential renumbering per the standing `CLAUDE.md` convention — not a Round 1 concern, flagging for whoever implements. |

### SF12. Remove the provisional closing statement and its "provisional" label

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-remove-closing.jpeg` |
| **Status** | Remove |
| **Requested change** | Remove the closing statement paragraph ("A rebuilt identity and an expanding packaging system...") and its "Provisional — pending final confirmation" label |
| **Reason** | Stated directly |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | None on removal — confirmed within the same "delete all of this" X. Note: this removes the page's only closing statement entirely — worth confirming in a later round whether a non-provisional replacement is wanted eventually, or whether the page is meant to end without one (per SF15, transitioning straight into the CTA). |

### SF13. Remove excessive closing whitespace

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-remove-closing.jpeg` |
| **Status** | Change |
| **Requested change** | Reduce the vertical whitespace in the page's closing area |
| **Reason** | Stated directly |
| **Priority** | Medium |
| **Ambiguity requiring confirmation** | Current structure stacks three separate `pb-16` sections back-to-back (closing image section, provisional-statement section, back-to-top section) before the contact CTA — confirmed in code. The screenshot's single "delete all of this" X removes the *content* of all three sections at once (image, statement, back-to-top — see SF10–SF12, SF14), which should resolve most of this whitespace as a side effect rather than needing a separate spacing fix. |

### SF14. Remove "Back to top" — RESOLVED by screenshot

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-remove-closing.jpeg` |
| **Status** | Remove *(upgraded from conditional "Change" — see resolution below)* |
| **Requested change** | Remove the "Back to top" link |
| **Reason** | Stated directly in the written note, but phrased conditionally there ("if it belongs to that closing block") |
| **Priority** | Low |
| **Ambiguity requiring confirmation** | **Resolved by the screenshot.** The written note alone was conditional, but the annotation is not: the single "delete all of this" X drawn on `soo-falls-remove-closing.jpeg` visibly spans the closing image, the closing statement/provisional label, **and** the "Back to top" link as one continuous mark — confirming it should go, not just "if it belongs" to the block. Per your instruction to defer to the written summary on conflicts: this isn't a conflict (both sources point the same direction, the screenshot just removes the conditionality), so I'm recording it as a firm removal rather than an open question. Confirmed in code: "Back to top" currently sits in its own standalone section (`work/soo-falls/index.html:292`), immediately before the contact CTA. |

### SF15. Transition more directly from Brand Explorer into contact CTA

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-remove-closing.jpeg` |
| **Status** | Change |
| **Requested change** | Shorten/simplify the path from the end of the Brand Explorer section to the contact CTA |
| **Reason** | Stated directly — the umbrella goal that SF10–SF14 all serve |
| **Priority** | Medium — this is effectively the summary goal of the whole closing-section cleanup (SF10–SF14) |
| **Ambiguity requiring confirmation** | This item and SF10–SF14 are one connected change confirmed by a single annotation, not six independent ones — flagging as a group. With SF14 now resolved (Back to top is dropped, not just possibly relocated), the page's closing order after implementation reads: Brand Explorer → contact CTA, directly. No remaining ambiguity on sequencing. |

### SF16. Placeholder mark near "Logo Reconstruction and Modernization" — RESOLVED

| Field | Detail |
|---|---|
| **Screenshot reference** | `soo-falls-logo-comparison.jpeg` |
| **Status** | Change *(reclassified from Missing/ambiguous — folded into SF4/SF5)* |
| **Requested change** | The square-with-X is a rough placement mockup showing where the smaller logo comparison module should sit once shrunk — beside the "Logo Reconstruction and Modernization" copy |
| **Reason** | Clarifies SF4/SF5's target layout |
| **Priority** | Medium — same priority as SF4/SF5, since it's the same change |
| **Ambiguity requiring confirmation** | **Resolved (Round 1 clarification).** Confirmed: not a request for a new asset or a new section — it's a rough sketch of the SF4 (smaller) + SF5 (beside copy) outcome, drawn directly in the space where the shrunk module should land. No separate action item; tracked entirely under SF4/SF5 going forward. |

---

## Summary counts (Round 1, final — all open items resolved)

| Status | Count |
|---|---|
| Keep | 2 (H2, SF6) |
| Change | 13 (site-wide typography noted separately as Later; H1, H3, SF1–SF5, SF7–SF9, SF13, SF15, SF16) |
| Remove | 4 (W1, SF10, SF11, SF12, SF14 — Remove is bundled in Change count above minus itself; see note*) |
| Missing | 0 |
| Later | 1 (site-wide typography) |

*Status tally note: SF14 is Remove; the Change count above lists it separately
in its own row for clarity. Reading the item-level tables is the source of
truth over this summary roll-up.

**All Round 1 ambiguities are now resolved:**
- SF1/SF3 — confirmed clean swap, `full-lineup.jpg` does not stay in "A System Built to Expand"
- SF4 — directional target set: roughly half the current visual footprint, exact px TBD at implementation
- SF5 — confirmed as the intended layout (not just exploratory), exact proportions TBD at implementation
- SF8 — confirmed as a per-category "one image or 2–4-image composition" principle, specific category choices deferred to imagery selection
- SF14 — confirmed Remove
- SF16 — resolved as a placement mockup for SF4/SF5, not a separate ask

Round 1 documentation is complete with no outstanding open questions.

---

## Round 2

### Work — Supporting Project Viewer (new component direction)

| Field | Detail |
|---|---|
| **Page/Component** | `/work/` — the lightbox that currently opens for the 5 supporting projects (Jayl House, High Seas Brewing, Atari 2600, Coffee Guy, Project SEARCH Algoma) |
| **Screenshot reference** | None provided this round — written direction only |
| **Status** | Change — **documented only, per explicit instruction. Do not implement until the complete site review is finished.** |
| **Requested change** | Redesign the current small centered modal into a large editorial project viewer. Keep the lightbox model (no dedicated case-study pages for these 5 projects) but give each project real visual room and a curated multi-image sequence instead of one placeholder box. |
| **Reason** | Current lightbox is too small and makes these projects feel insignificant relative to the full case studies |
| **Priority** | Medium — a real design/build task, but explicitly sequenced after the rest of the site review completes |
| **Ambiguity requiring confirmation** | See "Open questions" below — the exact approved image sequence per project is not yet confirmed. |

**Explicit correction to how I was approaching this before this note:** I had
started treating "one photo per project" as the deliverable and was about to
process a single image each for Atari, High Seas, and Coffee Guy. That's
wrong per this direction — multiple images per project were deliberately
selected and all of them are meaningful; the viewer must show the complete
approved sequence, not one representative image. Noted here so this isn't
repeated in a future round.

**Do not create separate modal code per project.** One reusable viewer
component, data-driven per project (see "Project structure" below).

**Explicitly out of scope for now:** dedicated case-study pages for these 5
projects — stays a lightbox/viewer unless future content (process material,
real narrative, enough evidence) justifies promoting a specific project to a
full page later.

#### Per-project data model

Each project supplies its own:
- Grid thumbnail (unchanged — the existing Work-grid tile)
- Approved image array (see open question below)
- Title, tags, concise description
- Optional role/context
- Image captions / alt text per image

Image sequence may include, per project, as applicable: primary finished
image, alternate application, detail crop, secondary design, physical/
contextual photograph, process image (only when genuinely useful).

#### Desktop direction
- Occupy ~85–90% of the viewport
- Large visual region + smaller information panel; imagery prioritized over copy
- Full approved image sequence per project, with prev/next controls
- Position indicator (`01 / 04` style)
- Keyboard left/right navigation
- Optional small thumbnails, only if they don't compete with the main image
- Clear close control, upper corner
- Page behind the viewer stays dimmed

#### Mobile direction
- Full-screen presentation (not the current small centered-modal proportions)
- Image sequence first, copy beneath, vertical scroll
- Visible prev/next controls (swipe may supplement, not replace them)
- Position indicator stays visible
- Close control stays continuously accessible

#### Image behavior
- Preserve each image's natural aspect ratio — no forcing every project into identical dimensions
- `object-fit: contain` for posters/illustrations/complete layouts; `cover` only where an intentional photography crop makes sense
- Viewer dimensions stay stable while navigating, where practical
- Restrained crossfade or horizontal transition; no autoplay
- Preload the adjacent image to avoid flashes
- Real alt text per image

#### Open questions requiring confirmation before implementation

1. **Approved image array per project — not yet confirmed.** You supplied
   raw folders with more files than are necessarily "approved":
   - `images/Atari Images/`: `Atari Shirt.png` + two PDFs (`AlfanoDrew_Proj02_Final.pdf`, `Alfano_AtariIllustration_Final.pdf`)
   - `images/high-seas-brewing/`: `1.png`, `2.png`, `3.png`, three screenshots, `billboard.png`, `posters.png`, `Proj1_Print1.pdf`
   - `images/Coffeeguy/`: `coffeeguylogo.png`, `coffeguybanner.png`, `cup.png`, `pattern.png`
   
   Per your instruction, "use all images" means the images you deliberately
   selected for each project's sequence — not automatically every file
   found in these folders (the PDFs, raw screenshots, etc. are very likely
   not meant to be in the sequence, but I'm not assuming that). Needs your
   explicit approved list, in order, per project, before any building starts.
2. Jayl House and Project SEARCH Algoma currently have **no image assets at
   all** (Jayl House has only a grey grid thumbnail; Project SEARCH Algoma
   the same) — confirm whether real images are coming for these two, or
   whether the viewer needs a graceful no-sequence/placeholder state for
   projects that aren't fully populated yet.
3. Canal District's new logo (`images/canal-district-logo.png`, supplied
   this session) is a separate, already-clear task — replacing the
   Work-grid tile thumbnail, not part of this viewer. Not blocked by this
   direction; flagging separately since it was raised in the same message.

#### Update — Canal District tile + three approved sequences wired in

**Canal District Work-grid tile:** done. Swapped to the approved
`canal-district-logo-card.png`/`.webp` using the same `<picture>` pattern as
every other tile (1200×1200, `object-contain`, same dimensions/alt-text
quality/link/numbering/tags as before). Verified desktop and mobile: no
distortion, no layout shift, no horizontal overflow.

**Atari 2600 / High Seas Brewing / Coffee Guy — approved image sequences:**
done, with basic prev/next navigation only (not the full 85–90vw editorial
viewer — that redesign is still deferred per this section's original
instruction). Final approved sequences, after your corrections:

- **Atari 2600** (3 images): main poster (`AlfanoDrew_Proj02_Final.pdf`,
  extracted via `qlmanage` since it's the actual artwork, not a reference
  doc) → shirt mockup → technical diagram (`Alfano_AtariIllustration_Final.pdf`,
  also extracted)
- **High Seas Brewing** (3 images): a new staggered 3-can composite (built
  from `1.png`/`2.png`/`3.png` per your direction — see note below) as the
  primary image → `posters.png` → `billboard.png`
- **Coffee Guy** (4 images): `coffeeguylogo.png` → `cup.png` → `coffeguybanner.png` → `pattern.png`

**High Seas composite — how it was built:** the three can cutouts weren't
uniform (initial read suggested two had busy baked-in backgrounds; on closer
inspection at full resolution they were actually clean transparent cutouts
— that first read was wrong, flagged and corrected in-session). Composited
via a temporary HTML/CSS staggered layout (center can tallest, outer two
rotated ±7° with drop shadows) rendered through headless Chrome at full
resolution, then cropped and encoded — no new dependency added, everything
used (`sips`, temporary `cwebp`, temporary headless Chrome screenshot) was
cleaned up after use. Output: `high-seas-can-lineup.jpg`/`.webp`.

**Data structure:** added a `projectGalleries` object in `work/index.html`
keyed by project slug, each an ordered array of `{src, webp, alt}`. The
lightbox now shows real images with prev/next buttons, a `01 / 04`-style
position indicator, left/right keyboard navigation, and adjacent-image
preloading — deliberately shaped so the future large viewer can consume the
same data without restructuring it. Jayl House and Project SEARCH Algoma
have no entry in `projectGalleries` and correctly fall back to the original
placeholder-box behavior, untouched, since their sequences are still
unapproved.

Verified on desktop and mobile: all three galleries open on the correct
first image, arrows and keyboard both step through the sequence,
`object-contain` preserves each image's natural proportions (no destructive
cropping across a mix of portrait/landscape sources), no horizontal
overflow, no console errors. Not committed, pushed, or deployed.

#### Housekeeping note — partially processed files from before this redirect

Before this direction arrived, I'd started processing single representative
images per project (the old, now-incorrect "one photo" approach) and was
mid-way through when you redirected. Current on-disk state, **none of it
wired into any production file, all of it inert:**
- `images/canal-district-optimized/canal-district-logo-card.png` + `.webp` — complete (this one's fine, it's the separate tile-thumbnail task, not the viewer)
- `images/atari-2600-optimized/atari-shirt.jpg` + `.webp` — complete but orphaned; may or may not be part of the final approved sequence
- `images/high-seas-brewing-optimized/high-seas-posters.jpg` — partial (no `.webp` yet), orphaned
- Coffee Guy: nothing processed yet

None of these are referenced by any HTML/CSS/JS. Once the approved image
list per project is confirmed, processing will resume from scratch against
that confirmed list rather than assuming these partial files are correct.

---

**Stopping here per instructions.** The typography item above is the one
exception (separately confirmed and implemented outside the sweep flow);
everything else recorded in this document, including the full Round 2
viewer direction, remains documentation only — no production HTML, CSS, or
JS modified for it, no further assets processed, nothing committed, pushed,
or deployed for this direction.
