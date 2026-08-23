# AI_CONTEXT.md

## Garfilas AI Working Memory

**Version:** 2.4.1  
**Last Updated:** 2026-08-23

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
8. Upward-pointing scroll cue
9. Pill Bottom Navigation

# Current Hero Assets

- `public/assets/hero/garfilas-hero-final.webp`
- `public/assets/brand/garfilas-reference-logo.svg`
- `public/assets/ui/bottom-nav-frame.svg`

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

## Slogan

Text: `Layers of Love, Taste of Italy`

- Real HTML text, not the removed SVG.
- Script/handwritten italic treatment.
- Warm orange/gold color.
- Smaller than LASAGNA.
- Very restrained glow.
- Tight letter spacing.
- Continue calibrating size, color, baseline and spacing against the exact reference.

# Menu CTA Rules

Text source remains `brand.navigation.menu` with value `مشاهده منو`.

The CTA is implemented as a semantic link wrapping the `GlowButton` visual primitive.

Current calibrated visual treatment:

- pill geometry
- thin orange/gold neon outline
- restrained dark translucent interior
- subtle inner border
- thin top highlight
- warm orange/gold label glow
- symmetric four-point star accents
- explicit mobile and desktop dimensions
- hover/focus lift and stronger bloom
- active press state
- keyboard-visible focus ring
- reduced-motion support

Do not move the overall Hero CTA position while calibrating the button's internal geometry unless the reference explicitly requires a layout change. Prefer adjusting width, height, border, radius, typography, star position and glow before changing Hero placement.

# Logo Animation

GARFILAS uses an electrical neon-fault animation inspired by a malfunctioning fluorescent tube:

- long stable illumination
- gradual dimming
- irregular partial failures
- near-off moment
- short recovery flickers
- stable return

The user requested the first visible fault around **2 seconds** after page entry. The current CSS timing still requires verification before declaring it final.

Keep `prefers-reduced-motion` support.

# Bottom Navigation Calibration Locks

- Center button vertical position is locked at `50.671875%`.
- Do not change the center button position unless the user explicitly requests it.
- Center button size remains unchanged from the latest approved state.
- Remove/avoid decorative dots beneath the center button.
- Side buttons are independently positioned and should not be moved when calibrating the center control.
- Frame source: `public/assets/ui/bottom-nav-frame.svg`.
- Final geometry is still pending reference acceptance.

# Hero Scroll Cue

- Arrows point upward.
- Position was adjusted through the actual `.hero-scroll-cue` placement.
- Do not infer placement from arrow rotation alone.
- Verify against the latest mobile reference before further movement.

# Technical Files

- `components/sections/Hero/Hero.tsx`
- `components/sections/Hero/HeroLogo.tsx`
- `components/sections/Hero/HeroCTA.tsx`
- `components/ui/GlowButton.tsx`
- `components/sections/BottomNavigation/BottomNavigation.tsx`
- `app/globals.css`
- `styles/tokens.css`
- `styles/animations.css`

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
- CTA structure: implemented
- CTA visual calibration pass: completed; direct visual acceptance still pending
- Scroll cue direction: completed; arrows point upward
- Bottom Navigation: implemented; final calibration pending
- Center navigation button position: locked at `50.671875%`
- Center decorative dots: intended removed; final navigation verification pending
- Production build: not verified in this documentation update
- Final visual acceptance: pending

# Exact Next Work

1. Verify deployed Hero against latest reference.
2. Verify/retime first neon fault to ~2s if necessary.
3. Calibrate GARFILAS color/bloom only if reference comparison requires it.
4. Calibrate LASAGNA typography, side lines and spacing.
5. Calibrate Italian flag proportions, taper and fade.
6. Calibrate slogan font, size, color, glow and spacing.
7. Compare the new `مشاهده منو` CTA against the reference at mobile and desktop sizes and make measured geometry corrections only.
8. Finish CTA and Bottom Navigation without moving the locked center button unless explicitly requested.
9. Run production build verification.
10. Validate mobile, then desktop.
11. Do not expand website scope until Hero acceptance.

# Next Chat Continuity

Read these first:

- `docs/GARFILAS_BIBLE.md`
- `docs/PROJECT_STATE.md`
- `docs/SESSION_LOG.md`
- `docs/TODO.md`
- `docs/AI_CONTEXT.md`

The latest user-supplied reference and current Hero implementation are the visual/technical context.