# Garfilas Current Project State

## Current State

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Repository: GitHub / `main`
- Status: Active Development
- Last Updated: 2026-08-18

## Current Objective

Finish the first-page Hero and make its visual output match the supplied mobile reference as closely as possible before expanding the website.

## Current Hero Implementation

Native React/CSS/SVG composition using independent assets.

Primary assets:

- `public/assets/hero/garfilas-hero-final.webp`
- `public/assets/brand/garfilas-reference-logo.svg`

Current composition:

1. Garfield + lasagna artwork
2. Orange/gold neon circular framing
3. GARFILAS SVG wordmark
4. LASAGNA HTML lockup with side lines
5. Italian flag inline SVG accent
6. HTML slogan
7. Neon CTA
8. Scroll cue
9. Pill Bottom Navigation

## Important Asset Change

`public/assets/brand/garfilas-slogan-exact.svg` is no longer used and was removed from the active implementation because it produced a duplicate/broken-image render. The slogan is now rendered as HTML text.

## Logo Animation

GARFILAS uses a fluorescent/neon electrical-fault effect: long stable light, gradual dimming, irregular flicker, near-off moment and recovery flickers.

User target: first visible fault around **2 seconds** after page entry. This timing still needs verification against the actual current CSS/deployment.

LASAGNA and slogan must remain independent from the GARFILAS fault animation.

## LASAGNA

- Separate HTML text
- Uppercase serif treatment
- Two thin horizontal side lines
- Independent sizing/spacing
- Reference-driven calibration still in progress

## Italian Flag

- Native inline SVG
- Very thin horizontal accent
- Green/white/red thirds
- Sharply tapered ends
- Subtle end fades
- Restrained glow
- Latest correction reduced the oversized/capsule-like appearance

## Slogan

`Layers of Love, Taste of Italy`

- HTML text, not SVG
- Script/handwritten italic direction
- Warm orange/gold
- Smaller than LASAGNA
- Low glow
- Tight letter spacing
- Reference calibration still pending

## Technical Files

- `components/sections/Hero/Hero.tsx` owns Hero structure.
- `components/sections/Hero/HeroLogo.tsx` owns logo/lockup presentation.
- `components/sections/Hero/HeroCTA.tsx` owns CTA wrapper.
- `components/ui/GlowButton.tsx` provides CTA primitive.
- `components/sections/BottomNavigation/BottomNavigation.tsx` owns navigation.
- `app/globals.css` owns Hero composition and responsive styling.
- `styles/animations.css` owns motion.

## Verification State

- Hero WebP integration: completed
- Supplied SVG wordmark: completed
- Old slogan SVG dependency: removed
- HTML slogan: completed
- LASAGNA lockup: implemented
- LASAGNA side lines: implemented
- Italian flag: implemented
- Neon fault animation: implemented; timing verification pending
- CTA: implemented
- Bottom Navigation: implemented; final calibration pending
- Local `npm run build`: not verified in this documentation update
- Production visual verification: pending
- Final Hero acceptance: pending

## Exact Next Step

1. Pull latest `main`.
2. Run `npm run build`.
3. Run `npm run dev`.
4. Compare mobile output against the latest reference.
5. Verify/retime first neon fault to ~2 seconds if needed.
6. Continue pixel-level LASAGNA, side-line, flag and slogan calibration.
7. Finish CTA and Bottom Navigation geometry.
8. Validate desktop without changing the mobile-first design language.
9. Do not expand scope until Hero acceptance.

## Source of Truth

- Product/brand authority: `docs/GARFILAS_BIBLE.md`
- Implementation state: this file
- Development history: `docs/SESSION_LOG.md`
- Work backlog: `docs/TODO.md`
- AI continuity: `docs/AI_CONTEXT.md`
- Current visual source: user-supplied mobile reference screenshot