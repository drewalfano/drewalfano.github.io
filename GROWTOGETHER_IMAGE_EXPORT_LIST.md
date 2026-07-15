# GrowTogether Image Export Index

Read-only index of confirmed source files for manual, high-quality export. **No
extraction, cropping, conversion, or rendering was performed for this list** —
all source PDFs on the Desktop remain untouched. This supersedes the low-quality
`sips`-rendered derivatives currently live in `images/growtogether-optimized/`
(see "Low-quality derivatives still referenced" at the end).

All source files are at:
`/Users/drew/Desktop/Archive/School Year 2 - Sem 2/Interactive Design/`

**Excluded per the completed audit** (confirmed unrelated or non-original):
`AlfanoDrew_AccessiblePersonas.pdf` (restaurant accessibility project, different
semester folder), `AlfanoDrew_WS2_Flow1/2/3.pdf` (a different project, "Farmboy"),
`test 1.png` / `test2.png` / `test3.png` (isolated stock/reference plant renders —
usable only as background reference, never as Drew's original photography).

**Open uncertainty flagged honestly below:** `AlfanoDrew_Proj03.pdf` is 13 pages;
only page 1 (a flattened composite of every screen) has been viewed this session.
Pages 2–13 have not been inventoried and may contain higher-resolution individual
artboards — recommend Drew check these first, as they may make several "extract
from the composite" recommendations below unnecessary. Same caveat applies to
`AlfanoDrew_Proj03_WIP.pdf` and `AlfanoDrew_WS01.pdf`: this session's page-1
renders of both did not match what the earlier audit's text-read described (WIP's
page 1 looked like the finished screens, not the grayscale Emma/Mr.-Ficus
wireframes; WS01's page 1 was a duplicate of the user-flow chart, not the "Hi,
Drew!" dashboard sheet) — meaning the actually-relevant content for those two is
most likely on a later, unexplored page.

---

### 1. Hero

- **Source:** `AlfanoDrew_Proj03.pdf`, page 1 (composite sheet, column 2 of the
  main row — the screen reading "Hi, Drew!")
- **Content:** The personalized Home screen — greeting, My Plants card (Spike the
  Snake Plant, watering status), Sault Ste. Marie weather widget, Trending Plants,
  Tip of the Day.
- **Type:** Individual screen
- **Crop boundary (plain language):** The second phone mockup from the left in
  the main horizontal row of screens, cropped tight to the device frame — top
  edge at the status bar, bottom edge at the tab bar, left/right edges hugging
  the phone outline with no neighboring screens included.
- **Aspect ratio:** ~9:19.5 (portrait phone)
- **Recommended pixel dimensions (2×):** ~1170×2532
- **Format:** PNG (flat UI, not photography)
- **Suggested filename:** `home-hero.png` / `.webp`
- **Priority:** Essential
- **Reason:** Strongest, most complete single screen — greeting, live status, and
  three distinct content modules in one frame. Best candidate to lead the page.

---

### 2. Core user flow

- **Source:** `AlfanoDrew_Proj01_UserFlow.pdf` (single page/artboard, confirmed
  duplicate of `AlfanoDrew_Proj01_Wireflow.pdf` singular — either file works)
- **Content:** Full "GrowTogether App – User Flow Chart" — Launch → Discover →
  Virtual Garden → Search/Select/Scan Plant → Plant Info Setup & Care → New Plant
  Confirmation → Virtual Garden, with legend and step notes.
- **Type:** Diagram
- **Crop boundary:** Full page — the whole flow chart including its legend box
  in the bottom right; nothing to crop out, this is a complete diagram at native
  resolution.
- **Aspect ratio:** ~8:5 (landscape, matches current 1634×1037 native render)
- **Recommended pixel dimensions (2×):** ~3268×2074
- **Format:** PNG
- **Suggested filename:** `user-flow-chart.png` / `.webp`
- **Priority:** Essential
- **Reason:** Only clean IA evidence on file; already used and works well at
  native resolution — a straight higher-res re-export is the only improvement needed.

---

### 3. Version A wireflow

- **Source:** `AlfanoDrew_Proj01_Wireflows.pdf` (plural — the usability-test
  document containing both versions and the tested hypothesis), the "Version A"
  labeled row
- **Content:** Sign In → Home → My Virtual Garden (empty state) → Add a Plant
  (category browse) → Results for "Aloe vera" → Plant Care (single scrolling
  form) → Review Your New Plant modal → My Virtual Garden (populated) — 8 screens
  in one horizontal row, plus the hypothesis text block above it.
- **Type:** Comparison / flow (one row of a two-row comparison document)
- **Crop boundary:** Crop to just the "Version A" row of screens — start at the
  "Version A" tab/label on the left, end after the final "My Virtual Garden"
  screen on the right. The hypothesis text block above can be exported
  separately as its own supporting image, or included as a header strip if the
  export tool allows a clean two-part crop.
- **Aspect ratio:** ~3:1 (wide row of 8 phone screens)
- **Recommended pixel dimensions (2×):** ~3600×1200 (row only, at a size where
  individual screen text stays legible without the page needing to scroll)
- **Format:** PNG
- **Suggested filename:** `version-a-wireflow.png` / `.webp`
- **Priority:** Essential
- **Reason:** The current derivative was cropped from the same source but
  downscaled for a 2-row split — a fresh export at a size chosen for legibility
  (rather than "whatever fits after a vertical split") will read far better.

---

### 4. Version B wireflow

- **Source:** `AlfanoDrew_Proj01_Wireflows.pdf`, the "Version B" labeled row
  (same document as #3, second row)
- **Content:** Sign In → Home → My Virtual Garden (empty) → Add a Plant
  (category browse) → Results for "Aloe vera" → Plant Details (step 1 of 3) →
  Environment (step 2 of 3) → Watering Routine (step 3 of 3) → My Virtual Garden
  (populated) — 9 screens.
- **Type:** Comparison / flow
- **Crop boundary:** Same approach as Version A — crop to just the "Version B"
  row, from its tab/label through the final populated Virtual Garden screen.
- **Aspect ratio:** ~3.4:1
- **Recommended pixel dimensions (2×):** ~3800×1120
- **Format:** PNG
- **Suggested filename:** `version-b-wireflow.png` / `.webp`
- **Priority:** Essential
- **Reason:** Same as Version A — this is the evidence for the tested design
  question and needs to be legible without excessive scrolling.

---

### 5. Usability-testing support

- **Source:** `AlfanoDrew_Proj01_UsabillityTesting.pages` — text document, not an
  image source. No image export applies here.
- **Content:** N/A
- **Type:** N/A
- **Priority:** N/A
- **Reason:** Flagging explicitly so this isn't mistaken for a missed image —
  the usability section is evidenced by direct quotation from this document, not
  a screenshot. If Drew has photos/screen-recordings of the actual test sessions,
  those would be new source material outside the currently confirmed set.

---

### 6. Early Add-a-Plant flow (draft)

- **Source:** `AlfanoDrew_Proj03_WIP.pdf` — **page unconfirmed**. This session's
  page-1 render did not show the grayscale Emma/Mr.-Ficus wireframes the earlier
  audit's text-read described; that content is likely on a different page of
  this same file.
- **Content:** GrowTogether home, empty Virtual Garden ("Let's get growing!"),
  Add a Plant (category filters, search results for "Aloe vera"), Plant Care
  form (nickname, light conditions, location, watering frequency, reminders),
  Review Your New Plant, and an updated Virtual Garden showing 3 plants — Emma
  the Aloe Vera, Spike the Snake Plant, Mr. Ficus the Fiddle Leaf Fig.
- **Type:** Individual screen or short flow (recommend just the Plant Care form
  screen, since that's the one directly compared against the refined version)
- **Crop boundary:** Once the correct page is located — crop to the single Plant
  Care form screen showing "Emma" as the plant nickname, same framing as #7 below
  for a clean side-by-side.
- **Aspect ratio:** ~9:19.5 (match #7 for direct comparison)
- **Recommended pixel dimensions (2×):** ~1170×2532
- **Format:** PNG
- **Suggested filename:** `add-a-plant-early.png` / `.webp`
- **Priority:** Supporting
- **Reason:** Would make the Insight-to-Revision section's Observation → Design
  consideration → Refined screen structure concrete with an actual before
  image instead of only the "refined" side. Currently the page states this
  fact in text only, with no matching image — accurate, but weaker than a
  real before/after.

---

### 7. Refined Add-a-Plant flow (final)

- **Source:** `AlfanoDrew_Proj03.pdf`, page 1 composite, column 7 of the main
  row (the "Aloe Vera" plant-nickname/setup screen — confirmed, already
  successfully isolated once this session)
- **Content:** Plant nickname field, Room selector, Room Light Conditions,
  Watering Frequency, Reminders, Reminder Time, "Add Plant to My Garden" button —
  the finished, polished version of the same screen as #6, using "Ollie."
- **Type:** Individual screen
- **Crop boundary:** Same phone-frame-only crop as #1 — this is the exact screen
  already successfully isolated in this session (verified clean, full frame, no
  neighboring content) at `images/growtogether-optimized/addplant.jpg` /
  `.webp`, just needs a higher-resolution re-export from source rather than the
  `sips`-derived version.
- **Aspect ratio:** ~9:19.5
- **Recommended pixel dimensions (2×):** ~1164×1800
- **Format:** PNG
- **Suggested filename:** `add-a-plant-refined.png` / `.webp`
- **Priority:** Essential
- **Reason:** Directly evidences the Insight-to-Revision section; already proven
  legible at the current lower resolution, so a clean re-export is a quality
  upgrade, not a rescue.

---

### 8. Generic dashboard exploration

- **Source:** `Discover.pdf` (single-screen PDF, entire file is this one screen —
  no page/artboard selection needed)
- **Content:** "GrowTogether" branded header (not personalized), search bar,
  filter chips, My Garden (Ollie the Aloe Vera), Sault Ste. Marie weather widget,
  Trending Plants, Tip of the Day, "In the Kitchen" section (Cherry Tomatoes,
  Snake Plant, Chili Peppers), bottom nav.
- **Type:** Individual screen
- **Crop boundary:** None needed — the source PDF is already a single, tightly
  cropped screen at native resolution. A direct high-quality export of the whole
  page is the correct approach; nothing to trim.
- **Aspect ratio:** ~9:19.5 (source is already this ratio at 375×1180 native)
- **Recommended pixel dimensions (2×):** ~750×2360 (this is close to the
  source's actual native resolution — do not upscale beyond it)
- **Format:** PNG
- **Suggested filename:** `dashboard-generic.png` / `.webp`
- **Priority:** Essential
- **Reason:** This is the weakest-resolution confirmed asset on the page (the
  current derivative is only 238px wide because the source itself is small) — a
  fresh export directly from the PDF at its true native resolution, rather than
  through an intermediate `sips` raster-then-resize pass, should recover
  meaningfully more sharpness even though the ceiling is the source's own size.

---

### 9. Personalized "Hi, Drew!" dashboard

- **Source:** Same as #1 (`AlfanoDrew_Proj03.pdf`, page 1, column 2) — this is
  the same screen used for the Hero. No separate export needed; reuse #1's
  export for both placements.
- **Content / crop / dimensions:** See #1.
- **Format:** PNG
- **Suggested filename:** Reuse `home-hero.png` / `.webp` (do not export a
  duplicate under a second filename).
- **Priority:** Essential
- **Reason:** The Dashboard Exploration section's second comparison image is the
  same screen as the Hero — one export, two placements.

---

### 10. Final Home screen

- Same as #1 / #9. No additional export needed.

---

### 11. Final My Garden screen

- **Source:** `AlfanoDrew_Proj03.pdf`, page 1 composite, column 4 of the main row
  (labeled "My Garden" — confirmed present, not yet isolated this session)
- **Content:** Ollie the Aloe Vera, Spike the Snake Plant, Ms. Fig the Fiddle
  Leaf Fig — three populated plant cards with watering status.
- **Type:** Individual screen
- **Crop boundary:** Fourth phone mockup from the left in the main row — same
  tight device-frame crop as #1/#7.
- **Aspect ratio:** ~9:19.5
- **Recommended pixel dimensions (2×):** ~1170×2532
- **Format:** PNG
- **Suggested filename:** `my-garden.png` / `.webp`
- **Priority:** Supporting
- **Reason:** Currently only visible inside the wide filmstrip overview (#15) at
  reduced size — a dedicated crop would let it stand as its own Final Experience
  figure alongside Home and Plant Care Setup, the way the page's stated
  hierarchy (Final Experience should size a few "key" screens larger than
  supporting ones) already intends.

---

### 12. Final Add-a-Plant sequence

- **Source:** `AlfanoDrew_Proj03.pdf`, page 1 composite, columns 5–7 (Add a
  Plant category browse → Add a Plant search results for "Aloe vera" → Aloe
  Vera setup screen)
- **Content:** The full add-flow in sequence, not just the final setup screen.
- **Type:** Complete flow (3 screens)
- **Crop boundary:** Three consecutive phone mockups, columns 5 through 7 of the
  main row, each cropped individually to its own device frame (export as three
  separate files, not one wide strip, so each can be shown at a legible
  individual size rather than shrunk to fit a row).
- **Aspect ratio:** ~9:19.5 each
- **Recommended pixel dimensions (2×):** ~1170×2532 each
- **Format:** PNG
- **Suggested filenames:** `add-a-plant-browse.png`, `add-a-plant-results.png`,
  plus reuse #7's `add-a-plant-refined.png` for the third.
- **Priority:** Optional
- **Reason:** Would strengthen the Final Experience section's "sequence" framing
  beyond the single setup screen currently used, but the page functions without
  it — the setup screen alone already carries the Insight-to-Revision section.

---

### 13. Dr. Grow

- **Source:** `AlfanoDrew_Proj03.pdf`, page 1 composite, columns 8–10 (three Dr.
  Grow states: initial prompt, diagnosis chat, camera/photo capture for diagnosis)
- **Content:** Plant diagnosis chat feature — "Don't know what's wrong?" prompt,
  conversational diagnosis flow, camera capture for visual diagnosis.
- **Type:** Individual screen or short flow — recommend the single most complete
  state (the diagnosis chat screen, middle of the three) rather than all three.
- **Crop boundary:** The middle Dr. Grow screen in the row (the one showing an
  active diagnosis conversation, not the empty prompt or the bare camera view).
- **Aspect ratio:** ~9:19.5
- **Recommended pixel dimensions (2×):** ~1170×2532
- **Format:** PNG
- **Suggested filename:** `dr-grow.png` / `.webp`
- **Priority:** Supporting
- **Reason:** Dr. Grow is a named, distinct feature mentioned in the audit and
  in "The Problem" section's "diagnosis support" point, but currently has no
  dedicated image anywhere on the page — only visible in the small filmstrip.

---

### 14. Identify Plant camera flow

- **Source:** `AlfanoDrew_Proj03.pdf`, page 1 composite, columns 12–14 (Identify
  Plant capture screen, Identify Plant scanning/analyzing screen, Plant
  Identified result screen showing "Monstera")
- **Content:** Camera-based plant identification, ending in a result screen with
  plant details and "Looks Similar to" suggestions.
- **Type:** Complete flow (2–3 screens) — recommend at minimum the capture
  screen and the result screen as a pair, showing input → output.
- **Crop boundary:** Two individual device-frame crops: the camera capture
  screen (column 12) and the "Plant Identified: Monstera" result screen
  (column 14).
- **Aspect ratio:** ~9:19.5 each
- **Recommended pixel dimensions (2×):** ~1170×2532 each
- **Format:** PNG
- **Suggested filenames:** `identify-plant-camera.png`, `identify-plant-result.png`
- **Priority:** Supporting
- **Reason:** "Identifying an unfamiliar plant on sight" is one of the six
  stated problem points and a named feature in Final Experience's copy, but
  like Dr. Grow it currently has no dedicated image — only the filmstrip.

---

### 15. Closing / final-experience image

- **Source:** `AlfanoDrew_Proj03.pdf`, page 1, full composite (all screens
  together, as currently used)
- **Content:** The entire screen sequence in one wide strip — sign in through
  plant identification.
- **Type:** Complete flow (full composite)
- **Crop boundary:** No crop — this is intentionally the whole composite as one
  wide "reveal" image, the way it's currently used. A higher-resolution direct
  export of the full page (rather than the current `sips`-resized 2400px-wide
  JPEG) would sharpen it without changing its role.
- **Aspect ratio:** ~3.7:1 (matches current 2400×645)
- **Recommended pixel dimensions (2×):** ~4800×1290, or export at whatever the
  source's true native resolution supports without upscaling
- **Format:** PNG source, WebP for delivery (this one is large enough that a
  WebP-only web delivery — skipping a JPEG fallback — may be worth considering
  given file size, but that's Drew's call, not a change to make unilaterally)
- **Suggested filename:** `final-experience-filmstrip.png` / `.webp` (same name
  as current, replace in place)
- **Priority:** Essential
- **Reason:** Already doing its job as the page's "large visual reveal" closing
  moment; the only improvement needed is source resolution.

---

## Priority summary

**Essential (6):** Hero/Home (#1, reused for #9/#10), Core user flow (#2),
Version A (#3), Version B (#4), Refined Add-a-Plant (#7), Generic dashboard
(#8), Final-experience filmstrip (#15).

**Supporting (4):** Early Add-a-Plant draft (#6, page location still unconfirmed),
Final My Garden (#11), Dr. Grow (#13), Identify Plant flow (#14).

**Optional (1):** Full Add-a-Plant sequence as three separate crops (#12).

**No image applies (1):** Usability-testing support (#5) — text quotation, not
an image source.

---

## Low-quality derivatives still referenced on the live page

These remain in use (not deleted, per instruction) but should be swapped out
once real exports land:

- `home.jpg` / `.webp` — usable at current size (verified legible), but is a
  `sips`-resized raster from a flattened composite render, not a direct crop —
  softer than a real export would be.
- `addplant.jpg` / `.webp` — same caveat as above.
- `dashboard-discover.jpg` / `.webp` — the weakest derivative on the page at
  238px native width; legible but visibly the lowest-resolution image in use.
- `user-flow.jpg` / `.webp` — usable, same intermediate-raster caveat.
- `version-a.jpg` / `.webp`, `version-b.jpg` / `.webp` — now shown at full
  native size (1800px) after this repair pass rather than force-downscaled, so
  they're legible, but they were split out of one oversized combined render and
  carry a lot of baked-in empty space that a fresh, tighter export would remove.
- `final-experience-filmstrip.jpg` / `.webp` — usable as an overview; would
  benefit from a sharper source export per #15 above.

None of these are illegible at their current display size, so none were
replaced with an "export needed" placeholder block this pass — they stay live
until real exports are ready, per instruction not to create fake finished
placeholders or pull working (if imperfect) images without a replacement in hand.
