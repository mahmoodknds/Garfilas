# AI_CONTEXT.md

## Garfilas AI Working Memory

**Version:** 2.3.0  
**Last Updated:** 2026-08-18

---

# Purpose

Permanent working memory for AI collaborators. Read this before changing code or visual design. `docs/GARFILAS_BIBLE.md` is the product/brand source of truth.

# Current Project

- Project: Garfilas
- Type: Premium online Italian lasagna restaurant
- Repository: `mahmoodknds/Garfilas`
- Deployment: Vercel
- Version: v0.1.0
- Sprint: 0.4
- Scope: first-page Hero visual completion

# Visual Source of Truth

The user's supplied mobile reference screenshot is the Hero visual source of truth. It is a composition reference, not a background image. Never approximate important visual details from memory when the reference is available.

Current order:

1. Garfield + lasagna artwork
2. Circular orange/gold neon framing
3. GARFILAS wordmark
4. LASAGNA + two side lines
5. Italian flag accent
6. `Layers of Love, Taste of Italy`
7. Neon `مشاهده منو` CTA
8. Scroll cue
9. Pill Bottom Navigation

# Current Hero Assets

- `public/assets/hero/garfilas-hero-final.webp`
- `public/assets/brand/garfilas-reference-logo.svg`

GARFILAS geometry must come from the supplied SVG. Do not recreate GARFILAS as HTML text.

The old `public/assets/brand/garfilas-slogan-exact.svg` dependency was removed because it caused a duplicate/broken-image render. The slogan is now real HTML text.

# Lockup Rules

## GARFILAS

- Supplied SVG only.
- Warm orange/gold neon.
- Crisp, readable letterforms.
- Glow must support the SVG, not wash it out.

## LASAGNA

- Separate HTML text.
- Uppercase serif treatment.
- Two thin horizontal side lines.
- Independent calibration from GARFILAS.
- Do not apply the GARFILAS flicker animation to LASAGNA.

## Italian Flag

Native inline SVG accent. Target the reference closely:

- very thin horizontal strip
- green / white / red thirds
- narrow width and low height
- sharply tapered ends
- subtle fade at both ends
- restrained glow
- subordinate to LASAGNA

The latest correction reduced the previous oversized/capsule-like appearance.

## Slogan

Text: `Layers of Love, Taste of Italy`

- Real HTML text, not the removed SVG.
- Script/handwritten italic treatment.
- Warm orange/gold color.
- Smaller than LASAGNA.
- Very restrained glow.
- Tight letter spacing.
- Continue calibrating size, color, baseline and spacing against the exact reference.

# Logo Animation

GARFILAS uses an electrical neon-fault animation inspired by a malfunctioning fluorescent tube in a horror-film scene:

- long stable illumination
- gradual dimming
- irregular partial failures
- near-off moment
- short recovery flickers
- stable return

It must not look like a normal blink or breathing animation.

The user requested the first visible fault around **2 seconds** after page entry because visitors may leave quickly. The current CSS timing must be verified against this target before the next visual review. Do not assume it is already correct.

Keep `prefers-reduced-motion` support.

# Technical Files

- `components/sections/Hero/Hero.tsx`
- `components/sections/Hero/HeroLogo.tsx`
- `components/sections/Hero/HeroCTA.tsx`
- `components/ui/GlowButton.tsx`
- `components/sections/BottomNavigation/BottomNavigation.tsx`
- `app/globals.css`
- `styles/tokens.css`
- `styles/animations.css`

# Design / UX

Dark luxury, warm Italian atmosphere, orange primary, gold accent, black/dark background, controlled glow, minimal copy, mobile first, one-handed use, fast interaction and premium visual hierarchy.

# AI Workflow

1. Read `GARFILAS_BIBLE.md`.
2. Read `PROJECT_STATE.md`.
3. Read `SESSION_LOG.md`.
4. Read `TODO.md`.
5. Inspect current GitHub implementation.
6. Compare against the latest user reference.
7. Make the smallest change that advances the approved target.
8. Update documentation after significant visual changes.

# Current Verification State

- Hero WebP: completed
- GARFILAS supplied SVG: completed
- Old slogan SVG dependency: removed
- HTML slogan: implemented
- LASAGNA lockup: implemented
- LASAGNA side lines: implemented
- Italian flag inline SVG: implemented
- Neon fault animation: implemented; first-fault timing still needs verification against ~2s target
- CTA: implemented
- Bottom Navigation: implemented; final calibration pending
- Production build: not verified in this documentation update
- Final visual acceptance: pending

# Exact Next Work

1. Verify deployed Hero against latest reference.
2. Verify/retime first neon fault to ~2s if necessary.
3. Calibrate GARFILAS color/bloom only if reference comparison requires it.
4. Calibrate LASAGNA typography, side lines and spacing.
5. Calibrate Italian flag proportions, taper and fade.
6. Calibrate slogan font, size, color, glow and spacing.
7. Finish CTA and Bottom Navigation.
8. Run production build verification.
9. Validate mobile, then desktop.
10. Do not expand website scope until Hero acceptance.

# Next Chat Continuity

Read these first:

- `docs/GARFILAS_BIBLE.md`
- `docs/PROJECT_STATE.md`
- `docs/SESSION_LOG.md`
- `docs/TODO.md`
- `docs/AI_CONTEXT.md`

The latest user-supplied reference and current Hero implementation are the visual/technical context.