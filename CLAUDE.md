# Drew Alfano Portfolio

A static portfolio site for a graphic designer/brand lead. Plain HTML + Tailwind CSS, no JS framework, no build tool beyond the Tailwind CLI. Deployed on GitHub Pages.

## Stack & commands

- **Styling:** Tailwind CSS (utility classes in markup + a small set of custom components in `src/input.css`)
- **Build CSS:** `npm run build` (one-shot) or `npm run watch` (watches for changes) — compiles `src/input.css` → `dist/output.css`
- **Local preview:** use the `static-server` launch config (`.claude/launch.json` → runs `node scripts/dev-server.js`, serves the whole repo on port 4173, resolves `/foo/` → `/foo/index.html`, falls back to `404.html`). Always use the Browser tool's `preview_start`, never run a dev server via Bash.
- **No package beyond Tailwind/PostCSS/Autoprefixer** — deliberately kept minimal, no React/Vite/etc.

## Design system

- **Colors:** `paper` #FFFFFF (pure white — was briefly a warm off-white `#F7F3ED`, reverted per explicit feedback), `ink` #111111, `brand` #D0272B (site-wide chrome: nav active state, CTA buttons, focus rings, footer — never used for project-specific content)
- **Fonts:** Archivo (`font-display`, weights 500/800, italic available but not currently used — titles are upright per feedback) for headings, Work Sans (`font-body`, weights 400/500) for everything else. Loaded via Google Fonts `<link>` in every page's `<head>`.
- **Visual rules:** sharp corners only, no `rounded-*` anywhere. Motion is restrained — 250ms transitions everywhere (`.reveal` scroll fade-up, `.card-image` hover crop, `.link-underline`), all wrapped in a `prefers-reduced-motion` override in `src/input.css`.
- **Per-project accent color system** (`src/input.css`): set `--accent` (true brand hex) and `--accent-text` (a darkened, WCAG-AA-safe variant of the same hue) as inline CSS custom properties on a scoping element (a page's `<body>`, or an individual card). Utility classes `.text-accent` / `.border-accent` / `.bg-accent` (true hex, for rules/chips/color-field backgrounds) and `.text-accent-safe` (darkened, for any text — labels, links, titles) read these, falling back to brand red if unset. **Never use the true accent hex for text** unless you've verified ≥4.5:1 contrast against white — several of the real brand colors fail at full strength (see per-project values below).
- **`.full-bleed`** component class breaks an element to the true viewport edge regardless of parent `max-w-*` (paired with `overflow-x: hidden` on `html,body` so it can't introduce horizontal scroll).

## Site structure

```
/                           homepage — intro, capability sequence, 3 feature sections, work strip, about blurb, contact CTA
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
- **SEO/metadata pass done**: every page has a real `<meta name="description">`, canonical `<link>`, Open Graph + Twitter Card tags (no `og:image` yet — deliberately skipped rather than reuse the favicon as a fake preview image), and `theme-color` (`#111111`). Root has `robots.txt` + `sitemap.xml` (8 indexable URLs, 404 excluded via `<meta name="robots" content="noindex">`). Favicon now has PNG fallbacks (`assets/favicon-32.png`, `assets/apple-touch-icon.png`, rasterized from `assets/favicon.svg` via `sips`) alongside the original SVG.

## Known gaps / next steps

- **Canal District / Jenesis / GrowTogether**: need real photography and real Role/Timeline facts, then the Soo Falls pattern (facts block copy, colour-field bold moment content, figure captions) should be tightened to match once assets exist.
- **Soo Falls** still has no real process material (sketches, dielines, proofs) — that section was removed rather than left as a placeholder; re-add if/when real material shows up.
- **Homepage / About / Contact**: still on original placeholder imagery (portrait, feature section photos) — never revisited after the initial build.
- Don't fabricate facts, imagery, or results — this has been a hard rule all session. Missing info gets an explicit `TBA` or a clearly labeled placeholder, never an invented value.
- **`og:image`**: not set on any page. Add once real hero art exists site-wide (currently only Soo Falls has real photography) rather than pointing social previews at a placeholder or the favicon.
