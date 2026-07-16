# Drew Alfano Portfolio

A static portfolio site for a graphic designer/brand lead. Plain HTML + Tailwind CSS, no JS framework, no build tool beyond the Tailwind CLI. Deployed on GitHub Pages.

## Stack & commands

- **Styling:** Tailwind CSS (utility classes in markup + a small set of custom components in `src/input.css`)
- **Build CSS:** `npm run build` (one-shot) or `npm run watch` (watches for changes) — compiles `src/input.css` → `dist/output.css`
- **Local preview:** use the `static-server` launch config (`.claude/launch.json` → runs `node scripts/dev-server.js`, serves the whole repo on port 4173, resolves `/foo/` → `/foo/index.html`, falls back to `404.html`). Always use the Browser tool's `preview_start`, never run a dev server via Bash.
- **No package beyond Tailwind/PostCSS/Autoprefixer** — deliberately kept minimal, no React/Vite/etc.

## Design system

- **Colors:** `paper` #FFFFFF (pure white — was briefly a warm off-white `#F7F3ED`, reverted per explicit feedback), `ink` #111111, `brand` #D0272B (site-wide chrome: nav active state, CTA buttons, focus rings, footer — never used for project-specific content)
- **Fonts:** DM Sans (`font-display`, weights 500/800) for headings, Work Sans (`font-body`, weights 400/500) for everything else. Loaded via Google Fonts `<link>` in every page's `<head>`.
- **Visual rules:** sharp corners only, no `rounded-*` anywhere. Motion is restrained — 250ms transitions everywhere (`.reveal` scroll fade-up, `.card-image` hover crop, `.link-underline`), all wrapped in a `prefers-reduced-motion` override in `src/input.css`.
- **Per-project accent color system** (`src/input.css`): set `--accent` (true brand hex) and `--accent-text` (a darkened, WCAG-AA-safe variant of the same hue) as inline CSS custom properties on a scoping element (a page's `<body>`, or an individual card). Utility classes `.text-accent` / `.border-accent` / `.bg-accent` (true hex, for rules/chips/color-field backgrounds) and `.text-accent-safe` (darkened, for any text — labels, links, titles) read these, falling back to brand red if unset. **Never use the true accent hex for text** unless you've verified ≥4.5:1 contrast against white — several of the real brand colors fail at full strength (see per-project values below).
- **`.full-bleed`** component class breaks an element to the true viewport edge regardless of parent `max-w-*` (paired with `overflow-x: hidden` on `html,body` so it can't introduce horizontal scroll).
- **Homepage hero** (`index.html`, self-contained `<style>` block in `<head>` — not in `src/input.css`, since it's homepage-only): no hero imagery, the page opens on type. `.hero-statement` sets the tagline large and full-width (`clamp(1.45rem,3.1vw,2.5rem)` DM Sans). `.hero-name` wraps the "Drew Alfano" `<h1>` text with a permanent brand-red (`#D0272B`) underline that draws in once on load via a `scaleX(0)→scaleX(1)` keyframe (`.35s` delay, `.5s` ease-out) — not a hover effect, since the h1 isn't interactive (same reasoning as the static About portrait). Respects `prefers-reduced-motion` (underline renders solid, no animation).

## Site structure

```
/                           homepage — typographic hero (no hero imagery, see Design system), capability sequence, 3 feature sections, work strip, about blurb, contact CTA
/work/                      filterable grid (discipline tags), Level 3 items open in a lightbox
/work/soo-falls/            case study — fully built out, real photography
/work/canal-district/       case study — placeholder imagery, real venue names (Mill Steakhouse, Boiler Room, Blockhouse, Gelato Mill)
/work/jenesis-medical-aesthetics/   case study — placeholder imagery
/work/growtogether/         case study — placeholder imagery, has a real A/B usability-test section
/about/, /contact/, 404.html
```

Every page repeats the same shell: header/nav → content sections (`max-w-5xl mx-auto px-6`) → dark `bg-ink` contact CTA → footer.

## Case study system (Soo Falls is the reference)

Established per-project pattern, each section is `data-reveal` (scroll fade-up):
1. Back link → metadata row (number · discipline, `text-accent-safe`) → title (`text-accent-safe`) → intro paragraph → **facts block**: Role / Timeline / Disciplines (3-col grid) + Selected Applications (sharp-cornered tag chips)
2. Full-bleed hero image
3. Challenge / Approach two-up
4. **Colour-field moment** — one full-bleed `background-color: var(--accent)` section per project with oversized white type; this is deliberately the *one* bold visual beat per page, per client direction ("be bold with intent," not decorative-by-default)
5. Project-specific unique section (Soo Falls: before/after logo slider + packaging lineup; Canal District: venue photo grid; GrowTogether: A/B usability comparison; Jenesis: paired website/social "Digital Presence")
6. Close crop, paired details, one grid-breaking image (wider than the text column, not full-bleed)
7. Closing full-bleed image ("brand family" shot)
8. Back-to-top → contact CTA → footer

All images use `<picture>` with a WebP `<source>` + JPEG/PNG `<img>` fallback, specific alt text (not generic), `loading="lazy"` below the fold. Figure captions follow `Fig. NN — Label` numbering, sequential per page — **renumber the whole page if you insert/remove a figure**.

**Real per-project accent colors** (already wired into each page's `<body style>`):
| Project | `--accent` (true) | `--accent-text` (safe) |
|---|---|---|
| Soo Falls | `#24354e` | same (already dark enough) |
| Canal District | `#d23e45` | `#b8353c` |
| Jenesis | `#a59b90` | `#6b6258` |
| GrowTogether | `#468359` | `#396e49` |

## Image pipeline

No image libraries installed (no ImageMagick/PIL). Process is: `sips` (macOS built-in) for resize/format-convert/rotate, and a **temporarily downloaded** `cwebp` binary (from `storage.googleapis.com/downloads.webmproject.org`, deleted after use each time — not a project dependency) for WebP encoding.

- Hero-scale images: cap at ~1800px longest side
- Thumbnail/grid images: cap at ~1200px longest side, never upscale
- Photos with no EXIF orientation tag may render sideways — always visually verify rotation direction before batch-processing (verified empirically per image last session, not by rule of thumb)
- Flat/vector-style graphics (logos, transparent product renders) → keep PNG, don't force JPEG (JPEG compresses hard edges/flat color badly)
- Output convention: `images/<project>-optimized/<slug>.{jpg,png} + <slug>.webp`, raw source folders (`images/soo-falls/`, `images/soo-falls-selects/`) are **gitignored** — only optimized output is committed

## Current state (end of this session)

- **Soo Falls**: fully real — real photography (hero, close crop, paired details, grid-breaking Zamboni shot, closing lineup shot), real packaging lineup (10 cans), real logo before/after comparison, real facts (role, timeline, disciplines). Process/sketches section was removed (not placeholder'd) since no real process material exists yet.
- **Canal District, Jenesis, GrowTogether**: still on the shared *structural* system but with placeholder imagery and `TBA` role/timeline facts. Not yet given the "use Soo Falls as the reference" full treatment — waiting on the user for real photos/facts before repeating what was done for Soo Falls.
- Deployed to GitHub Pages at **drewalfano.github.io** (repo renamed from `drew-portfolio` to `drewalfano.github.io` specifically so root-relative links work without a `/repo-name/` prefix). Push only after explicit user confirmation each time.
- **SEO/metadata pass done**: every page has a real `<meta name="description">`, canonical `<link>`, Open Graph + Twitter Card tags (no `og:image` yet — deliberately skipped rather than reuse the favicon as a fake preview image), and `theme-color` (`#111111`). Favicon now has PNG fallbacks (`assets/favicon-32.png`, `assets/apple-touch-icon.png`, rasterized from `assets/favicon.svg` via `sips`) alongside the original SVG.
- **Site is currently deliberately not indexable** (portfolio isn't ready for public search discovery, but stays reachable by direct link): every one of the 9 pages (`index.html`, `404.html`, `work/index.html`, `about/index.html`, `contact/index.html`, and all 4 case studies) has `<meta name="robots" content="noindex, nofollow">` right after `<title>`, each tagged with an inline `<!-- SEARCH-VISIBILITY: ... -->` comment. `sitemap.xml` was **deleted** (not just unlinked) and `robots.txt` was stripped back to just `User-agent: *` / `Allow: /` — crawling is intentionally still allowed, since a search engine has to be able to crawl a page to see its `noindex` tag; blocking via `robots.txt` would actually risk it staying indexed with no description. **Important:** this is a plain static site with no shared layout/include/templating mechanism (see "No package beyond Tailwind..." above) — there is no single file that controls every page's `<head>`, so "one global setting" isn't literally possible here. **To reverse at launch:** `grep -rl "SEARCH-VISIBILITY" --include="*.html" .` finds all 9 lines to delete, then recreate `sitemap.xml` (see prior git history for the exact format/URL list) and re-add the `Sitemap: https://drewalfano.github.io/sitemap.xml` line to `robots.txt`.
- **About/Contact content + interaction pass done**: About has new copy (Canadian spelling, e.g. "colour"). Contact has a Copy-to-clipboard button next to the mailto link (Clipboard API + `execCommand` fallback, `aria-live="polite"` announcement, 2s auto-reset). `.link-underline` now also triggers on `:focus-visible`, not just `:hover` (site-wide change, improves keyboard-focus parity everywhere the class is used). Self-Portrait card removed from the `/work/` grid.
- **About "What I do" ↔ Work filters wired together**: About's "What I do" is now 5 real `<a>` rows (`01 — Brand Identity` … `05 — Illustration`, incl. "Web Strategy & UX/UI"), each linking to `/work/?filter=<slug>` (`branding`, `packaging`, `campaigns`, `digital-web`, `illustration`) — real links, no click handlers on non-semantic containers, no `tabindex` (native focusability only). A quiet, non-linked prose line below lists secondary experience (art direction, production design, motion, video, photography) — deliberately not a Work filter. Work's `data-filter`/`data-tags` were switched from human-readable strings ("Digital/Web") to canonical lowercase-hyphen slugs matching the About links exactly; button label text is unchanged. Work reads `?filter=` on load (`URL_SUPPORTED_FILTERS` in the inline script — only the 5 above are valid; anything else, including other real internal filter values like `student-work`, falls back to "All" and the URL is cleaned via `history.replaceState`), and keeps the URL in sync on every button click too.
- **Contact availability dot**: green circle (`#2E7D32`, `rounded-full`, 8×8px, `shrink-0` — without `shrink-0` it visibly compressed to ~7px inside the flex row) — a deliberate, scoped exception to the site's "no rounded-*" rule, requested explicitly for this one indicator.
- **About interaction-polish pass** (Cipher.tv used only as a reference for interaction *quality/restraint*, not layout/style): portrait is now visually static — no hover/focus shadow, no `tabindex` (it's not a control) — with a single one-time entrance fade+rise (`.reveal-soft`, 10px/400ms) instead. "What I do" rows keep the red-number + arrow-shift response but now also darken the shared `divide-y` rule above/below the row on hover/focus (`.capability-row` in `src/input.css`, `!important`-overrides the divide-y utility's border-color since it otherwise wins on specificity), all at a unified 240ms ease-out, plus a ~30ms stagger per row on scroll-entrance. CTA button hover/focus is now a real background-color shift (`#B72226`) instead of `opacity-90` — **applied only to About's copy of this shared CTA block**, so it currently reads slightly differently from the identical CTA on other pages; flag if you want it applied everywhere. Nav/link-underline hover (not focus) and all new `group-hover:`/`hover:` utilities are now scoped to `@media (hover: hover)` via `future.hoverOnlyWhenSupported` in `tailwind.config.js`, so tapping on touch can't "stick" a hover state — this is a sitewide config change. Reduced-motion now also zeroes `transition-delay` (not just duration), so the new staggered reveals don't leave content sitting hidden for the delay period.
- **Found and fixed a real, long-standing bug while doing the above**: `.reveal` / `.is-visible` (the sitewide scroll-fade-in used via `data-reveal` on every page, including the homepage's project sections) had **never actually rendered in any deployed build** — Tailwind's content-based purge only keeps classes that appear as literal complete tokens in scanned HTML, and `.reveal`/`.is-visible` are only ever added dynamically by `assets/js/site.js` (`classList.add(...)`), never written literally in any `.html` file, so they were silently stripped from every `dist/output.css` since the feature was first added. Fixed via `safelist: ["reveal", "reveal-soft", "is-visible"]` in `tailwind.config.js`. Worth knowing: any *new* JS-only-toggled class needs to go in that safelist, or it will silently do nothing in the built site.
- **About portrait art**: `images/about-optimized/self-portrait.{jpg,webp}` — a geometric/low-poly illustrated self-portrait, sourced from a school-project PDF (`~/Desktop/Archive/School Year 2 - Sem 1/Digital Illustration/AlfanoDrew_Proj03_Final.pdf`, vector, Illustrator-exported), rasterized at high DPI via `qlmanage -t -s 2400` (plain `sips` PDF rasterization only yields 72dpi/828×1116 — the qlmanage route was needed for a crisp 1780×2400 source), then capped to 1800px longest side per the hero-image convention. Source aspect (~0.74) is narrower than the 4:5 (0.8) container, so it uses `object-position: bottom` — crops only from the empty background above the hat, leaving the hat/face/shoulders untouched.

## Known gaps / next steps

- **Canal District / Jenesis / GrowTogether**: need real photography and real Role/Timeline facts, then the Soo Falls pattern (facts block copy, colour-field bold moment content, figure captions) should be tightened to match once assets exist.
- **Soo Falls** still has no real process material (sketches, dielines, proofs) — that section was removed rather than left as a placeholder; re-add if/when real material shows up.
- **Homepage**: hero section redone as type-only (no imagery, see Design system); the 3 feature sections below it still have original placeholder imagery — never revisited.
- Don't fabricate facts, imagery, or results — this has been a hard rule all session. Missing info gets an explicit `TBA` or a clearly labeled placeholder, never an invented value.
- **`og:image`**: not set on any page. Add once real hero art exists site-wide (currently only Soo Falls has real photography) rather than pointing social previews at a placeholder or the favicon.
