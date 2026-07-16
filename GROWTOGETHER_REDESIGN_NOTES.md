# GrowTogether — Redesign Handoff Notes

Context for anyone (incl. Claude Code) continuing work on `work/growtogether/index.html`.
This page was rebuilt as a **showpiece** case study — portfolio-first, case-study second —
inspired structurally by mattfredette.com/anchor but built on real GrowTogether assets.

## What changed
- Full rewrite of `work/growtogether/index.html` into an interwoven, staggered layout
  (asymmetric 12-col feature grid, phones offset up/down beside the copy).
- Bespoke styling lives in a **page-scoped `<style>` block** using a `gt-*` namespace, so it
  does NOT require a Tailwind rebuild. The shared site shell (header/nav/footer) still uses the
  compiled utility classes in `dist/output.css`.
- Motion: page-scoped scroll-reveal (`[data-gt]`, staggered) + reused site `data-parallax`
  drift on phones. All disabled under `prefers-reduced-motion`; `<noscript>` fallback makes
  `[data-gt]` visible if JS is off.
- **Asset paths are relative** (`../../images/...`, `../../dist/output.css`, `../../assets/js/site.js`)
  so the page previews correctly over `file://` AND still resolves when served from the site root.
  (Nav links + favicons intentionally left root-relative.)

## New image assets (extracted from `Archive/School Year 2 - Sem 2/Interactive Design/AlfanoDrew_Proj03.pdf`)
Cropped tight to device frame at 300dpi, capped 1600px long side, `images/growtogether-optimized/`:
`home-hero`, `my-garden`, `dr-grow`, `aloe-detail`, `identify-camera`, `identify-result`
(each `.jpg` + `.webp`). Existing assets reused: `user-flow`, `version-a`, `version-b`,
`final-experience-filmstrip`.

## Content rules honoured (do not break)
- **No fabricated personas.** No GrowTogether persona exists in source files (the only personas
  PDF is an unrelated restaurant project). The case-study spine is the REAL 3-participant
  usability test (Lilly, Hunter, Brookelyn — all preferred Version A; Brookelyn = accessibility
  insight). Quotes used are the documented ones.
- No invented facts/metrics. Iteration section is framed honestly (placeholder naming →
  refined), not as a fake before/after.

## Known follow-ups
- Screens are raw crops (their own rounded corners read as the phone). When real **phone-mockup
  PNGs** exist, swap them into the same `<picture>` slots 1:1.
- Not committed or pushed. Push only after Drew's explicit confirmation (per CLAUDE.md).
- Page still carries `noindex` per site-wide launch state.
