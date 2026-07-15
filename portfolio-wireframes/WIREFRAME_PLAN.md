# Portfolio Wireframe Plan — Phase 1 (Audit & Planning Only)

Status: Planning report only. No SVGs generated, no production files touched.
Audit date: 2026-07-15. Source: local repository state at commit `c077f0c` plus
working-tree audit docs.

---

## 1. Route Inventory

| # | Route | Page title | Page type | Content state |
|---|---|---|---|---|
| 1 | `/` | Drew Alfano — Graphic Designer & Brand Lead | Home / marketing landing | Real copy; 2 of 3 feature sections use grey image placeholders (Soo Falls has real logo card in the work strip, Canal District uses a real SVG wordmark, Jenesis is a placeholder) |
| 2 | `/work/` | Work — Drew Alfano | Filterable index + lightbox | Real for 4 linked case studies; 5 additional projects exist only as lightbox modal content (no route) |
| 3 | `/work/soo-falls/` | Soo Falls Brewing Co. — Drew Alfano | Full case study | Real photography, real facts, unique interactive explorer |
| 4 | `/work/canal-district/` | Canal District — Drew Alfano | Full case study | Real photography, real facts, no placeholders |
| 5 | `/work/growtogether/` | GrowTogether — Drew Alfano | Full case study (UX process) | Real diagrams/screens; Reflection section explicitly marked "Provisional — pending Drew's review" |
| 6 | `/work/jenesis-medical-aesthetics/` | Jenesis Medical Aesthetics — Drew Alfano | Case study, placeholder-heavy | Role/Timeline both `TBA`; hero, Digital Presence, and Process sections are all grey placeholders |
| 7 | `/about/` | About — Drew Alfano | Content / bio page | Real copy and real portrait image |
| 8 | `/contact/` | Contact — Drew Alfano | Utility / contact page | Real, fully built (copy-to-clipboard interaction) |
| 9 | `/404.html` | Page Not Found — Drew Alfano | Error / utility page | Real, fully built |

**No genuinely obsolete or unlinked HTML routes exist in the repository.** Only
these 9 files exist under version control; there is no orphaned page to flag.
`sitemap.xml` was previously deleted intentionally (site is in a deliberate
`noindex, nofollow` pre-launch state per `CLAUDE.md`) — not a wireframing
concern.

**Not real routes, but a state worth documenting:** 5 projects (Jayl House,
High Seas, Atari 2600, Coffee Guy, Project SEARCH Algoma) exist only as
`data-title`/`data-description` attributes on lightbox-trigger buttons inside
`/work/`. They have no URL, no case-study page, and currently render a shared
generic modal (image placeholder + title + description + meta tags). Treat
these as **modal content states of the Work index**, not separate wireframes.

---

## 2. Layout Templates — What's Actually Shared

| Template | Routes using it | Notes |
|---|---|---|
| **A. Home / marketing shell** | `/` only | Fully unique: intro hero, 3 alternating-side feature sections (each with its own `--accent`), 6-item selected-work grid, About blurb, embedded contact CTA, footer. Not reused anywhere else. |
| **B. Work index shell** | `/work/` only | Fully unique: H1 + intro, filter button row, responsive project grid mixing real `<a>` case-study cards and `<button>` lightbox-trigger cards, lightbox modal, footer. **No dark contact-CTA band** — this page goes straight from grid to footer, unlike every other content page. Flag as an intentional-or-not inconsistency. |
| **C. Case-study shared shell** | All 4 case studies (`soo-falls`, `canal-district`, `growtogether`, `jenesis`) | Back-link → accent-colored metadata row (`NN · Category`) → H1 → intro paragraph → **facts block** (Role/Timeline/Disciplines 3-col grid + Selected Applications chip row) → full-bleed hero → Challenge/Approach two-up → **one full-bleed colour-field bold-statement section** (present on all 4, this is a confirmed standing pattern) → back-to-top link → dark contact CTA → footer. This is the one true reusable template in the site. |
| **D. Simple content page** | `/about/`, `/contact/` | Share only the outer skeleton (header, single hero-style section, footer). Internal content is not reusable between them (About: portrait two-up + capability list; Contact: email/copy-button + location/availability grid) — each still needs its own wireframe, but the chrome is identical to every other page. |
| **E. Error / utility page** | `/404.html` | Smallest structural footprint: header, one centered message block with two CTA buttons, footer (no dark CTA band, no accent color). Distinct from D only in having no form/list content. |

### Genuinely unique structures within Template C (do not force into the shared template)

- **Soo Falls**: before/after logo comparison slider (range input + clip-path)
  and the 4-category "Explore the Brand System" interactive tab explorer —
  the single most complex custom component on the site.
- **GrowTogether**: process arrow-diagram, IA/user-flow figure, two-version
  wireflow side-by-side comparison (with horizontal-scroll hint), 3-column
  usability-testing participant grid, 3-column insight-to-revision grid,
  2-up dashboard exploration, final-experience grid + horizontally-scrolling
  filmstrip, and a prose Reflection block. This is the longest, most
  content-dense page on the site.
- **Canal District**: no structurally unique components — its "unique"
  sections (merch-repeat 3-up, campaign two-up, menu/production pair,
  Whiskey River text block, social text block, unattributed photo grid) are
  all compositions of already-shared patterns (image grid, two-up
  image+text, plain text block). Does **not** need a dedicated wireframe
  beyond the shared template + a content-order annotation.
- **Jenesis**: no structurally unique components — it is the shared
  template with every non-chrome section rendered as a grey placeholder
  (`aspect-[21/9]`, `aspect-video`, `aspect-[3/4]`, `aspect-square` blocks).
  Does not need a dedicated wireframe; needs only a placeholder-state
  annotation on the shared template.

---

## 3. Shared Components (candidate component sheet entries)

1. Header / nav bar (active-link state varies per page)
2. Footer — 2 variants (plain vs. `border-t` on Contact/404)
3. Dark "Let's work together" contact CTA band (absent only on `/work/`)
4. Case-study page-header pattern (back-link + metadata row + H1 + intro)
5. Case-study facts block (Role/Timeline/Disciplines grid + chip row)
6. Full-bleed hero image treatment (`.full-bleed`)
7. Colour-field bold-statement section (full-bleed `background-color: var(--accent)`)
8. Challenge/Approach two-up grid
9. Figure + figcaption pattern (`Fig. NN — Label`, sequential per page)
10. Work-grid project card — 2 variants: real `<a>` case-study card vs.
    `<button>` lightbox-trigger card (visually near-identical, behaviorally different)
11. Filter button row (Work index, with `is-active` state)
12. Lightbox modal (Work index only)
13. Before/after comparison slider (Soo Falls only, but a reusable pattern)
14. Interactive tab explorer (Soo Falls only — desktop vertical-list/overlay
    vs. mobile horizontal-row/stacked-panel variants)
15. Capability row list item (About "What I do")
16. Copy-to-clipboard button + `aria-live` status text (Contact only)
17. Availability status dot (Contact only — the site's one intentional
    exception to the "no rounded corners" rule)

---

## 4. Breakpoints Actually In Use

Grepped every `sm:`/`md:`/`lg:`/`xl:`/`2xl:` utility across all 9 pages:

- `md:` (768px) — **129 uses**, the dominant and near-universal desktop switch
- `sm:` (640px) — **10 uses**, minor grid adjustments only (facts block
  1-col→3-col, Work grid 2-col→3-col)
- `lg:` / `xl:` / `2xl:` — **0 uses anywhere in the codebase**

**Practical conclusion: this is a two-state responsive system**, not a
multi-tier one. Design for:
- **Mobile** (reference ~375–428px) — the default, unprefixed styles
- **Desktop** (reference ~1280px, ≥768px) — the `md:` state

The 640–767px sliver only affects two grids and does not warrant its own
artboard set. The one place a breakpoint change is a genuine **structural**
change (not just reflow) is the Soo Falls explorer, which swaps between a
horizontal tab row/stacked panel (mobile) and a vertical tab list/absolute
overlay panel (desktop) — this must be shown as two distinct explorer
wireframes, not one wireframe with a responsive note.

---

## 5. Major Interactions Requiring Annotation

1. Sitewide scroll-reveal fade-up (`data-reveal` / `data-reveal-soft`,
   IntersectionObserver-driven, two timing variants)
2. Work index: filter buttons, URL-synced via `?filter=` for 5 of 9 filter
   values, live grid show/hide, empty-state message
3. Work index: lightbox modal open/close (click trigger, Escape key,
   backdrop click)
4. Work-grid card hover-crop (`.card-image` 1.12× → 1× scale on hover/focus-within)
5. Soo Falls: before/after slider (drag/range input, clip-path reveal, handle position)
6. Soo Falls: 4-category Brand Explorer — ARIA tabs pattern, crossfade
   background layers, prev/next controls (desktop hover arrows vs. mobile
   inline duplicate buttons), full keyboard support (arrows + Home/End +
   wraparound), stage-height-locked across category switches
7. About: capability-row hover/focus (coordinated divide-y border darkening
   on the row above **and** below the hovered row, arrow translate, staggered
   scroll-entrance delay per row)
8. About-only CTA hover: explicit `background-color` swap, while the
   *identical* CTA block on every other page uses `hover:opacity-90` —
   **documented inconsistency**, flag for design decision, not a bug to
   silently wireframe around
9. Contact: copy-to-clipboard button (Clipboard API + `execCommand`
   fallback, 2s auto-reset label, `aria-live="polite"` announcement)
10. Sitewide animated link-underline, scoped to `@media (hover: hover)` plus
    always-on `:focus-visible`
11. Sitewide `hoverOnlyWhenSupported` (Tailwind future flag) — hover states
    are categorically suppressed on touch, not just visually redundant
12. Sitewide `prefers-reduced-motion` override zeroing all transition/
    animation durations **and** delays
13. GrowTogether: horizontally-scrollable wide diagrams (wireflow
    comparisons, user-flow chart, final filmstrip) with an explicit "scroll
    horizontally" hint label
14. **Cross-page inconsistency**: the homepage's "Selected Work" strip links
    Jayl House / High Seas / Atari 2600 straight to `/work/` (no lightbox),
    while the identical projects on `/work/` itself open the lightbox modal
    — same content, two different interaction models depending on entry
    point. Worth flagging to Drew before wireframing rather than picking one
    silently.

---

## 6. Route Grouping

**Main pages**
- `/` (Home)
- `/about/`
- `/contact/`

**Work index**
- `/work/` (filter grid + lightbox)

**Full case studies** (real content, committed to the shared case-study shell)
- `/work/soo-falls/`
- `/work/canal-district/`
- `/work/growtogether/` *(Reflection section explicitly provisional)*

**Supporting projects**
- `/work/jenesis-medical-aesthetics/` (placeholder-heavy, same shell as above)
- Jayl House, High Seas, Atari 2600, Coffee Guy, Project SEARCH Algoma
  (lightbox-only, no route — represented as modal states, not pages)

**Utility, obsolete, or unlinked pages**
- `/404.html` (utility — required, keep)
- *No obsolete or unlinked pages found in this audit.*

---

## 7. Recommended Minimum Wireframe Set

To represent the full site **without duplicating structurally identical
pages**, the minimum set treats Canal District and Jenesis as annotations on
the shared case-study template rather than dedicated wireframes, and gives
Soo Falls and GrowTogether their own artboards only for the parts that are
genuinely unique (not the shared shell they also use).

### Phase 1 — Sitemap
One diagram: all 9 routes + the 5 no-route lightbox items, showing the
grouping above and every internal link (nav, footer, in-page CTAs, homepage
feature-section links, About → Work `?filter=` deep links). No artboard
size/breakpoint applies.

### Phase 2 — Shared Component Sheet
One reference sheet (desktop-oriented, single artboard) cataloguing the 17
components in Section 3, each shown once with its interactive states
(default / hover / focus / active) labeled. This sheet is referenced by
every later wireframe instead of being redrawn.

### Phase 3 — Core-Page Wireframes
Desktop + mobile pair for each:
1. Home
2. Work index (default grid state; filter-active and lightbox-open states
   annotated as callouts on the same artboard, not separate artboards)
3. About
4. Contact
5. 404

= 5 pages × 2 breakpoints = **10 artboards**

### Phase 4 — Unique Case-Study Templates
- **Case-study master shell** (desktop + mobile): the full Template C
  structure with real Soo Falls content as the reference fill. This single
  pair also stands in for Canal District (content-order annotation only)
  and Jenesis (placeholder-state annotation only) — neither gets its own
  artboard.
- **Soo Falls explorer detail** (desktop + mobile): the 4-tab interactive
  component only, shown in its default state with one alternate-tab
  callout and full interaction annotation (this is the one component too
  structurally different between breakpoints to fold into the master shell).
- **GrowTogether unique content** (desktop + mobile): the process diagram
  through Reflection block — everything that isn't the shared shell.

= 3 template groups × 2 breakpoints = **6 artboards**

### Phase 5 — Route-to-Template Mapping
A table (delivered as part of this same Figma file, not a separate
artboard) mapping all 9 routes + 5 modal items to the exact wireframe
artboard(s) that represent them:

| Route / item | Wireframe artboard(s) used |
|---|---|
| `/` | Home (Phase 3) |
| `/work/` | Work index (Phase 3), incl. lightbox callout |
| `/about/` | About (Phase 3) |
| `/contact/` | Contact (Phase 3) |
| `/404.html` | 404 (Phase 3) |
| `/work/soo-falls/` | Case-study master shell + Soo Falls explorer detail (Phase 4) |
| `/work/canal-district/` | Case-study master shell only, content-order annotated (Phase 4) |
| `/work/growtogether/` | Case-study master shell + GrowTogether unique content (Phase 4) |
| `/work/jenesis-medical-aesthetics/` | Case-study master shell only, placeholder-state annotated (Phase 4) |
| Jayl House / High Seas / Atari 2600 / Coffee Guy / Project SEARCH Algoma | Work index lightbox callout (Phase 3) |

---

## 8. Artboard Estimate

| Group | Desktop | Mobile | Breakpoint-agnostic |
|---|---|---|---|
| Sitemap | — | — | 1 |
| Component sheet | — | — | 1 |
| Core pages (Home, Work index, About, Contact, 404) | 5 | 5 | — |
| Case-study master shell | 1 | 1 | — |
| Soo Falls explorer detail | 1 | 1 | — |
| GrowTogether unique content | 1 | 1 | — |
| **Total** | **8** | **8** | **2** |

**Approximately 18 SVG artboards total** (8 desktop + 8 mobile + 2
breakpoint-agnostic reference sheets) are necessary to represent the full
site once shared templates and components are factored out — versus 9 routes
× 2 breakpoints = 18 if every page were wireframed independently with no
reuse, and closer to 26+ if every case study were also drawn separately
without recognizing the shared shell. The savings come entirely from *not*
re-drawing Canal District and Jenesis as dedicated case-study wireframes.

---

## 9. Open Questions For Drew (before Phase 2 begins)

1. Should the homepage's Jayl House/High Seas/Atari 2600 tiles link to
   `/work/` plain, or open the same lightbox they use on `/work/` itself?
   (Section 5, item 14 — currently inconsistent.)
2. Should `/work/` gain the dark contact-CTA band that every other content
   page has, or is its omission intentional?
3. Should the About-page CTA's unique `background-color` hover treatment be
   applied sitewide, or should About's CTA be reverted to match the shared
   `hover:opacity-90` pattern? (Section 5, item 8.)

---

**Stopping here per instructions.** No SVGs generated, no production HTML/CSS
touched, no copy rewritten, no categories changed, no imagery added, nothing
committed, pushed, or deployed.

---

## 10. Closing Summary (Phase 2 Cancelled — Audit Confirmed as Final)

Phase 2 (SVG sitemap, SVG component sheet, page-level wireframes) was
scoped and approved in principle, then explicitly stopped before any visual
file was generated. This section closes out the planning work with the
decisions that were reached, so this document alone is sufficient as the
structural audit — nothing else needs to be produced to act on it later.

### 10.1 Confirmed Sitemap (text tree)

```
/ (Home)
├── nav → /work/, /about/, /contact/
├── feature: Soo Falls Brewing Co. ─────────→ /work/soo-falls/
├── feature: Canal District ────────────────→ /work/canal-district/
├── feature: Jenesis Medical Aesthetics ────→ /work/jenesis-medical-aesthetics/
├── Selected Work strip
│   ├── Soo Falls (card) ───────────────────→ /work/soo-falls/
│   ├── Jenesis (card) ─────────────────────→ /work/jenesis-medical-aesthetics/
│   ├── GrowTogether (card) ────────────────→ /work/growtogether/
│   ├── Jayl House (tile) ──────────────────→ [proposed] supporting-project lightbox
│   │                                           (currently: plain link to /work/)
│   ├── High Seas (tile) ───────────────────→ [proposed] supporting-project lightbox
│   │                                           (currently: plain link to /work/)
│   └── Atari 2600 (tile) ──────────────────→ [proposed] supporting-project lightbox
│                                                (currently: plain link to /work/)
├── About blurb → /about/
└── Contact CTA → /contact/

/work/ (Work index)
├── nav → /, /about/, /contact/
├── filter row (9 filters; 5 URL-deep-linkable via ?filter=)
├── grid
│   ├── Soo Falls (card) ───────────────────→ /work/soo-falls/
│   ├── Canal District (card) ──────────────→ /work/canal-district/
│   ├── Jenesis (card) ─────────────────────→ /work/jenesis-medical-aesthetics/
│   ├── GrowTogether (card) ────────────────→ /work/growtogether/
│   ├── Jayl House (button) ────────────────→ supporting-project lightbox
│   ├── High Seas (button) ─────────────────→ supporting-project lightbox
│   ├── Atari 2600 (button) ────────────────→ supporting-project lightbox
│   ├── Coffee Guy (button) ────────────────→ supporting-project lightbox
│   └── Project SEARCH Algoma (button) ─────→ supporting-project lightbox
├── [proposed] dark contact CTA band (currently absent — see 10.4)
└── footer → /, /work/, /about/, /contact/, mailto

/work/soo-falls/ (full case study)
├── shared case-study shell (facts, hero, challenge/approach, colour field)
├── before/after logo slider (unique)
├── 4-tab Brand Explorer (unique, most complex component on site)
└── contact CTA → /contact/

/work/canal-district/ (full case study)
└── shared case-study shell only — no structurally unique components

/work/growtogether/ (full case study, Reflection marked provisional)
└── shared case-study shell + unique UX-process content
    (process diagram, user-flow figure, A/B wireflow comparison,
    usability-testing grid, dashboard exploration, final filmstrip)

/work/jenesis-medical-aesthetics/ (supporting / placeholder-heavy case study)
└── shared case-study shell only, all non-chrome sections are placeholders

/about/
├── nav, portrait + bio two-up, "What I do" capability list
│   (5 rows → /work/?filter=branding|packaging|campaigns|digital-web|illustration)
└── contact CTA → /contact/

/contact/
├── nav, email + copy-to-clipboard, location/availability
└── footer (border-top variant)

/404.html
├── nav, message, CTA → /, CTA → /work/
└── footer (border-top variant)

Supporting-project lightbox (modal state, not a route)
├── triggered from: /work/ grid (5 items) — existing
└── triggered from: / Selected Work strip (3 of those 5 items) — proposed
    reusable component, one modal structure, content swapped per project
    (Jayl House / High Seas / Atari 2600 / Coffee Guy / Project SEARCH Algoma)
```

No obsolete or unlinked HTML pages were found. `404.html` is the only
utility page and is correctly reachable only via broken/removed links, not
via nav.

### 10.2 Shared Component Inventory (final list, 17 components)

1. Header / nav bar (active-link state per page)
2. Footer — plain variant / `border-t` variant (Contact, 404)
3. Dark "Let's work together" contact CTA band
4. Case-study page-header pattern (back-link + metadata row + H1 + intro)
5. Case-study facts block (Role/Timeline/Disciplines grid + chip row)
6. Full-bleed hero image treatment
7. Colour-field bold-statement section
8. Challenge/Approach two-up grid
9. Figure + figcaption pattern (`Fig. NN — Label`)
10. Work-grid project card — real `<a>` case-study variant / `<button>` lightbox-trigger variant
11. Filter button row
12. Supporting-project lightbox modal (see 10.4 — to become the single reusable structure for all 5 lightbox-only projects, triggerable from two entry points)
13. Before/after comparison slider (Soo Falls)
14. Interactive tab explorer (Soo Falls — desktop and mobile structural variants)
15. Capability row list item (About)
16. Copy-to-clipboard button + `aria-live` status (Contact)
17. Availability status dot (Contact — sole exception to "no rounded corners")

### 10.3 Route-to-Template Mapping (final)

| Route / item | Template(s) |
|---|---|
| `/` | Home shell (unique) |
| `/work/` | Work index shell (unique) + supporting-project lightbox (shared) |
| `/about/` | Simple content-page shell (About variant) |
| `/contact/` | Simple content-page shell (Contact variant) |
| `/404.html` | Error/utility shell (unique, smallest footprint) |
| `/work/soo-falls/` | Case-study shared shell + before/after slider + Brand Explorer |
| `/work/canal-district/` | Case-study shared shell only |
| `/work/growtogether/` | Case-study shared shell + unique UX-process content |
| `/work/jenesis-medical-aesthetics/` | Case-study shared shell only, placeholder-state |
| Jayl House / High Seas / Atari 2600 (home tiles) | Supporting-project lightbox (proposed trigger point) |
| Jayl House / High Seas / Atari 2600 / Coffee Guy / Project SEARCH Algoma (Work-index cards) | Supporting-project lightbox (existing trigger point) |

### 10.4 Consistency Decisions Approved

These three decisions were reached during Phase 2 scoping and are approved
as the **target design direction**. None have been implemented in the
production site — this section records the decision only, for whoever
picks this up next (human or future session).

1. **Homepage supporting-project tiles → lightbox.** Jayl House, High Seas,
   and Atari 2600 should eventually open the same supporting-project
   lightbox already used on `/work/`, instead of linking out to `/work/`
   and requiring a second click. One reusable lightbox component/structure
   should serve both entry points, with project-specific image/text
   documented as content variations, not separate modal structures.
   *Current production behaviour is unchanged: these tiles still link to
   `/work/`.*
2. **Work index gains the contact CTA band.** `/work/` should get the same
   dark "Let's work together" band every other content page has, rather
   than going straight from the grid to the footer.
   *Current production behaviour is unchanged: `/work/` still has no CTA band.*
3. **CTA hover unifies on the background-color treatment.** About's
   `hover:bg-[#B72226]` / `focus-visible:bg-[#B72226]` becomes the sitewide
   target for every "Let's work together" CTA button, replacing
   `hover:opacity-90` elsewhere.
   *Current production behaviour is unchanged: only About uses the
   background-color hover today.*

### 10.5 Sections That May Benefit From Future Focused Wireframing

- **Soo Falls Brand Explorer** — the one component whose desktop/mobile
  structures genuinely diverge (not just reflow) and that will need real
  photography wired into 4 crossfading states; worth a dedicated,
  higher-fidelity pass once imagery is selected.
- **GrowTogether's long-form UX content** — process diagram through
  Reflection is dense enough, and the Reflection copy is explicitly
  provisional, that it would benefit from a focused review pass whenever
  Drew finalizes that section's language.
- **The proposed supporting-project lightbox unification** (10.4 #1) — once
  approved for implementation, this is small enough to prototype directly
  in code rather than requiring a dedicated wireframe pass.
- **Jenesis Medical Aesthetics** — currently placeholder-heavy; once real
  assets and Role/Timeline facts exist, it should get the same
  "tighten to match Soo Falls" treatment already flagged in `CLAUDE.md`'s
  "Known gaps" section, at which point it may be worth a fresh structural
  look (not necessarily a full wireframe).

### 10.6 Sections That Are Already Stable — Do Not Recreate

- **Global header/nav and footer** — consistent across all 9 pages, no
  open questions.
- **Case-study shared shell** (facts block, full-bleed hero, Challenge/
  Approach two-up, colour-field moment, back-to-top, contact CTA) —
  proven across 4 real implementations, no structural changes anticipated.
- **Canal District** — uses only already-shared components in a stable
  order; does not need its own wireframe now or later unless its content
  changes materially.
- **About and Contact pages** — both fully built with real content and
  no open structural questions beyond the CTA hover unification already
  decided in 10.4.
- **Work index filtering and URL-sync logic** — functionally complete and
  already exercised (5 deep-linkable filters, empty state, `?filter=` sync
  with About's capability links); no redesign anticipated.
- **404 page** — minimal, complete, no open questions.

---

**Final status:** Planning and audit work for this project is complete.
Phase 2 visual production (SVG sitemap, SVG component sheet, page
wireframes) was intentionally not produced, per explicit instruction. No
production files were modified. Nothing was committed, pushed, or deployed.
