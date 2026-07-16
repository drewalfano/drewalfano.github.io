# Soo Falls — Redesign Handoff Notes

Context for anyone (incl. Claude Code) continuing/deploying `work/soo-falls/index.html`.
This page was rebuilt as an editorial, gallery-forward brand/packaging case study — navy-led,
with each beer's own label colour used as an accent. Distinct layout language from GrowTogether
(no copy-paste).

## What changed
- Full rewrite of `work/soo-falls/index.html`. Bespoke styling lives in a page-scoped `<style>`
  block using an `sf-*` namespace, so it needs NO Tailwind rebuild. The shared shell
  (header/nav/footer/contact CTA) still uses compiled utility classes from `dist/output.css`.
- **Asset paths are relative** (`../../images/...`, `../../dist/output.css`, `../../assets/js/site.js`)
  so the page previews over `file://` AND resolves when served from the site root. Nav links +
  favicons intentionally left root-relative.
- Motion: page-scoped scroll-reveal (`[data-sf]`, staggered) + reused site `data-reveal`. Disabled
  under `prefers-reduced-motion`; `<noscript>` fallback keeps `[data-sf]` visible without JS.

## Sections (in order)
Hero (product-first: title/intro/facts + a fanned trio of can renders — Italian Pilsner, Light
Lager [top layer, slightly raised], Shipwreck Sour Citrus; + a "Visit the live site" button →
https://soofallsbrewery.com) → Challenge/Approach → The Lineup (full-lineup image, Fig. 01, with
per-can hover labels) → Logo Reconstruction (before/after drag slider) → On the Shelf (LCBO /
Beer Store / Hazy-IPA-LCBO retail three-up) → Brand in the World (Doppelbock billboard feature +
uniform photo grid) → Role & Rollout → contact CTA.

## Interactive bits
- **Before/after logo slider** — range input drives `clip-path` on the "before" layer (`ba-*` ids).
- **Full-lineup hover labels** — 10 transparent `.sf-hot` hotspots absolutely positioned (in %)
  over the lineup image; hovering shows a cursor-following tooltip (`#can-tip`) with the beer name +
  tier, background colour-matched per beer via `data-color`. Progressive enhancement only — the
  image `alt` already lists every beer; hotspots are `aria-hidden`-style spans, skipped on touch.
  **Hotspot coordinates were eyeballed** from the lineup image; nudge the inline `left/top/width/height`
  %s if any label triggers off from its can.
- Hero cans are static (no hover/labels) by explicit request.

## New/updated image assets (`images/soo-falls-optimized/`)
- `hazyipa-lcbo.{jpg,webp}` — Hazy IPA at the LCBO (retail).
- `doppelbock-billboard.{jpg,webp}` — "GOAT of local beer" billboard (gallery feature).
- `dunkelweizen2.{png,webp}` — brown core can render (currently unused on the page; was a temp hero
  stand-in, now replaced by the Citrus sour).
- **EXIF orientation baked in** (rotation was wrong in-browser) for: `img_2481`, `img_0559`,
  `img_3238`, `img_0394` — re-saved upright, EXIF stripped. **Correction (next session):** `img_2481`
  was actually fine; `img_0559`, `img_3238`, and `img_0394` were still sideways after that pass — a
  further 90° counter-clockwise `sips -r -90` rotation was needed to make them upright, with matching
  `.webp` regenerated via a temporary `cwebp` download. Verified by opening the actual pixel content,
  not by rule of thumb.

## Known follow-ups
- **No transparent Doppelbock can render** exists (Doppelbock is black). The hero uses the Citrus
  sour instead; a Doppelbock render can be swapped in later.
- Beer-colour hex values on the hover labels are approximations tuned for white-text contrast — the
  user may supply exact brand hexes to drop into `data-color` (flip label text to dark if a hex is light).
- Page still carries `noindex` per site-wide launch state.
- Not deployed by Cowork — commit/push is Claude Code's job, only after Drew's confirmation (per CLAUDE.md).
