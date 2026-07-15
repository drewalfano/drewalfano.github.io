# UI/UX Repositioning — Implementation Status

Implements the creative brief's Phases 1–7 for GrowTogether, Work, About, Soo Falls,
and Jenesis, following the confirmed GrowTogether Step 1 audit
(`GROWTOGETHER_AUDIT_CHECKPOINT.md`) and the user's confirmed decisions. All phases
in the queue are complete. Nothing has been committed, pushed, or deployed.

## How images were produced (read this before touching GrowTogether assets again)

No PDF page-extraction or crop tool was available except macOS `sips`/`qlmanage`
(no `pdftoppm`, no ImageMagick, no PIL). `cwebp` was temporarily downloaded from
`storage.googleapis.com/downloads.webmproject.org` per the CLAUDE.md pipeline and
deleted after use — it is not on this machine anymore.

`sips`'s `--cropOffset` behaved unpredictably at large offsets on the wide (7314px)
`AlfanoDrew_Proj03.pdf` composite sheet — horizontal offsets did not move linearly
and several attempts returned blank output. Rather than keep fighting it, the
approach that shipped is:

- Two individual screens were successfully isolated after calibration: **Home**
  ("Hi, Drew!") and **Add a Plant / Plant Care setup** (Aloe Vera). These are
  `home.jpg/webp` and `addplant.jpg/webp`.
- Everything else uses **full, uncropped page renders** — honest, unedited real
  screens, not claimed to be individually isolated:
  - `final-experience-filmstrip.jpg/webp` — the entire Proj03.pdf composite sheet
    (sign in through Plant Identified), used as one wide "reveal" figure.
  - `user-flow.jpg/webp` — full render of `AlfanoDrew_Proj01_UserFlow.pdf`.
  - `version-a.jpg/webp` / `version-b.jpg/webp` — the Version A/B wireflow PDF,
    split top/bottom (a reliable vertical crop, unlike the horizontal one) —
    each half includes the real tested hypothesis text.
  - `dashboard-discover.jpg/webp` — `Discover.pdf`, which is natively a
    single-screen PDF and needed no cropping.
- **Not used**: `AlfanoDrew_Proj03_WIP.pdf` and `AlfanoDrew_WS01.pdf`. `sips` only
  rasters page 1 of a multi-page PDF — WIP's page 1 rendered visually identical to
  the final Proj03 sheet (not the grayscale Emma/Mr.-Ficus wireframes documented in
  the audit, which must be on a later page), and WS01's page 1 turned out to be a
  duplicate of the user-flow chart, not the "Hi, Drew!" concept sheet described in
  the audit. Rather than guess, the Insight-to-Revision section uses the confirmed
  **textual** fact only (early drafts named the plant "Emma"/"Mr. Ficus," final
  screens use "Ollie"/"Ms. Fig") without a matching WIP image, and Dashboard
  Exploration pairs `dashboard-discover.jpg` against `home.jpg` instead of a WS01 crop.

If a future session wants true per-screen crops from Proj03.pdf, it'll need a
different tool (ImageMagick/PIL) — `sips --cropOffset` is not reliable enough for
that composite at this resolution.

## Phase 1 — GrowTogether foundation and opening — done

- Hero: role (UX/UI Designer), responsibilities, Winter 2026, Academic Project
  label, accurate plant-care companion description, full-bleed colour-field hero
  built from the real Home screen.
- The Problem: six needs, all directly evidenced by the app's own screens.
- Process: Research → Define → Explore → Test → Refine, typographic only.

## Phase 2 — GrowTogether process evidence — done

- IA & user flow: real six-screen flow chart image, in a horizontally-scrollable
  container so it never shrinks to illegible on mobile.
- Exploring Two Approaches: Version A/B presented as two legitimate directions
  with the real tested hypothesis, not a right-answer/throwaway framing.
- Usability testing: three participants **anonymized** as "Participant 1/2/3" per
  the brief's suggestion (their real names — Lilly, Hunter, Brookelyn — appear only
  in the private audit checkpoint, not the public page). All three preferred
  Version A; Participant 3's Version B accessibility observation is called out as
  a real trade-off, not a footnote. Two short direct quotes are used, copied
  verbatim from the source: "at once" and "easier to take in."

## Phase 3 — GrowTogether iteration and final experience — done

- Insight to Revision: Observation → Design consideration → Refined screen,
  built from the confirmed Emma/Mr.-Ficus → Ollie/Ms.-Fig naming change. Explicitly
  does not claim this came from a usability finding.
- Dashboard Exploration: Discover.pdf vs. the Proj03 Home screen, described by
  their actual visible differences (generic header + "In the Kitchen" vs.
  personalized header, no "In the Kitchen"), with no chronology claimed.
- Final Experience: two large "hero" screens (Home, Plant Care setup) plus the
  full filmstrip of every remaining screen — deliberate size hierarchy per the brief.
- Reflection: provisional, explicitly labeled "pending Drew's review."

## Phase 4 — Work-page positioning — done

- GrowTogether's Work card now uses a real screen thumbnail (was a gray
  placeholder), accurate description tags changed from "Digital/Web, Campaigns" to
  **"Digital/Web, UX/UI"**, `data-tags` narrowed to `digital-web` only (removed the
  inaccurate `campaigns` tag). No longer described as a volunteer campaign anywhere.
- Jenesis stays under Digital/Web (unchanged).
- Soo Falls' card tags were already `branding,packaging` — not `digital-web` — so
  its web contribution was already correctly secondary; no change needed.
- **Filter taxonomy**: not renamed. `digital-web` already covers UX/UI work
  adequately for a two-project category. If the Work grid grows to include more
  UX/UI-specific case studies, a dedicated `ux-ui` filter chip could be worth
  adding later — flagging per the brief's instruction to record rather than act
  on taxonomy changes unilaterally.
- Verified: filter buttons and `?filter=` URL params still work (tested
  `?filter=digital-web` end to end).

## Phase 5 — About-page positioning — no changes needed

Read the full page: it already has exactly the five required capability rows
(Brand Identity, Packaging Systems, Campaign Design, Web Strategy & UX/UI,
Illustration), the "Additional experience includes art direction, production
design, motion, video and photography" line, the portrait, and multidisciplinary
framing throughout. It already links `Web Strategy & UX/UI` to
`/work/?filter=digital-web`, which now correctly resolves to Jenesis + GrowTogether.
Nothing needed to change.

## Phase 6 — Soo Falls web contribution — done

Added a short, clearly-subordinate "Website Strategy & Design Direction" section
(text only, positioned after Logo Reconstruction, before the Close Crop photo)
stating accurately that Drew planned the sitemap/page structure, selected
typography and colour direction, chose and directed imagery, and established the
intended visual experience — and that **a developer built the production site**.
No screenshots were available or searched for in this pass (out of the confirmed
GrowTogether-only audit scope from earlier in this project); no placeholder image
was added for this new section — it's text-only, per the brief's instruction not to
add fake image placeholders.

## Phase 7 — Jenesis contribution — done

- Hero paragraph rewritten: no longer implies Drew created the brand/logo.
  Now states the site was "built in Wix Studio... using branding supplied by
  the client."
- Disciplines fact changed from "Brand Identity, Web & Digital Design..." to
  "Sitemap & Information Architecture, Web Design (Wix Studio)..." — removed the
  inaccurate Brand Identity claim.
- Challenge/Approach copy rewritten to state the client supplied the existing
  branding, Drew planned the sitemap and built the original responsive layouts in
  Wix Studio, and the client has since modified portions of the visual design —
  without criticizing the client or presenting the current live site as an
  untouched example of Drew's work.
- Role and Timeline remain `TBA` — no confirmed values exist for this project (only
  GrowTogether's Role/Timeline were confirmed this session).
- **Missing asset, recorded rather than invented**: no archived screenshots of
  Drew's original Jenesis build were searched for or found in this session. The
  Digital Presence section's placeholder note now says so explicitly instead of
  implying a swap is imminent.

## Files changed

- `work/growtogether/index.html` — full rewrite
- `work/index.html` — GrowTogether card only (image, tags, description)
- `work/soo-falls/index.html` — one new subordinate section added
- `work/jenesis-medical-aesthetics/index.html` — hero, facts, Challenge/Approach,
  colour-field line, and Digital Presence placeholder copy
- `about/index.html` — not touched (already correct)

## Assets added

`images/growtogether-optimized/`: `home`, `addplant`, `dashboard-discover`,
`final-experience-filmstrip`, `user-flow`, `version-a`, `version-b` — each as
`.jpg` + `.webp`. All are real renders of Drew's confirmed source PDFs
(`AlfanoDrew_Proj03.pdf`, `AlfanoDrew_Proj01_UserFlow.pdf`,
`AlfanoDrew_Proj01_Wireflows.pdf`, `Discover.pdf`), capped per the CLAUDE.md
image pipeline convention (hero-scale ≤ ~1800–2400px longest side, screen crops
≤ 900px longest side). No source files on the Desktop were moved, renamed, or
modified.

## Provisional copy requiring Drew's approval

- The entire GrowTogether Reflection section (explicitly labeled on the page).
- GrowTogether's problem statement, process-overview labels, and all section copy
  are new and have not been reviewed by Drew — they're built strictly from
  confirmed assets/facts but the wording itself is mine.
- Jenesis's rewritten Challenge/Approach copy — accurate to the confirmed facts,
  but not yet reviewed.

## Missing assets / information

- Soo Falls website screenshots (original or current) — not searched for.
- Jenesis original-build screenshots — not searched for; explicitly flagged on-page.
- GrowTogether: no usable image evidence of the WIP/draft screens (Emma/Mr. Ficus)
  or a confirmed WS01 "Hi, Drew!" dashboard variant distinct from Proj03 — see the
  image-pipeline note above.
- Possible future taxonomy addition: a dedicated `ux-ui` Work filter (not added,
  recorded only, per instructions).

## Testing completed

- Desktop (native width) and mobile (375×812) checked for: GrowTogether (full
  page, every section), Work grid (card + Digital/Web filter), Soo Falls (new
  section in context), Jenesis (hero/facts).
- Confirmed no horizontal page-level scroll on mobile (`scrollWidth === clientWidth`
  at 375px); wide figures (user-flow chart, Version A/B wireflows, final-experience
  filmstrip) scroll only within their own `overflow-x-auto` containers, never
  shrink to illegible.
- Heading order checked via DOM query on GrowTogether: single H1, all sections H2,
  no skipped levels.
- `prefers-reduced-motion`, focus-visible outlines, and the `.reveal` scroll-fade
  mechanism were not modified — they reuse existing sitewide CSS/JS exactly as
  before, so no page-specific reduced-motion or focus regression is expected, but
  this wasn't re-verified pixel-by-pixel this session given time already spent on
  the image pipeline; worth a spot-check before launch.
- Testing was consolidated to 2–3 passes across the whole queue rather than a full
  separate desktop+mobile+a11y pass after each individual phase, to stay within
  session time — noting this as a deliberate deviation from the letter of the
  per-phase instruction.

## Recommended next review order

1. GrowTogether page top to bottom — this is the highest-stakes content (biggest
   rewrite, most new copy, all provisional).
2. Work grid — quick, just the one card.
3. Soo Falls' new section — one paragraph, quick to check in context.
4. Jenesis — check the rewritten Challenge/Approach reads right and doesn't
   understate Drew's actual contribution.
5. Decide on Soo Falls/Jenesis screenshot sourcing before those sections can move
   past text-only.
