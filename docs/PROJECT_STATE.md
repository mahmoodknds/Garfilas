# Garfilas Current Project State

## Current State

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Repository: GitHub / `main`
- Status: Active Development
- Last Updated: 2026-08-23

## Current Objective

Finish the first-page Hero and make its visual output match the supplied mobile reference as closely as possible before expanding the website.

## Current Hero Implementation

Native React/CSS/SVG composition using independent assets.

Primary assets:

- `public/assets/hero/garfilas-hero-final.webp`
- `public/assets/brand/garfilas-reference-logo.svg`
- `public/assets/ui/bottom-nav-frame.svg`

Current composition:

1. Garfield + lasagna artwork
2. Orange/gold neon circular framing
3. GARFILAS SVG wordmark
4. LASAGNA HTML lockup with side lines
5. Italian flag inline SVG accent
6. HTML slogan
7. Neon CTA
8. Upward-pointing scroll cue
9. Pill Bottom Navigation

## Navigation Calibration State

- Bottom Navigation frame is a native SVG visual asset.
- Center button vertical position is currently locked at `50.671875%`.
- Center button size remains unchanged from the approved calibration.
- Decorative center dots beneath the center button have been removed from the active implementation.
- Side buttons remain independently positioned and should not move when adjusting the center button.
- Navigation remains under final visual calibration against the reference.

## Hero Scroll Cue State

- Scroll cue arrows now point upward.
- The cue position was recalibrated lower using the actual `.hero-scroll-cue` positioning rather than changing the arrow transform alone.
- Current mobile and desktop placement is a visual-calibration state and should be checked against the latest reference before further adjustment.

## Important Asset Change

`public/assets/brand/garfilas-slogan-exact.svg` is no longer used and was removed from the active implementation because it produced a duplicate/broken-image render. The slogan is now rendered as HTML text.

## Logo Animation

GARFILAS uses a fluorescent/neon electrical-fault effect: long stable light, gradual dimming, irregular flicker, near-off moment and recovery flickers.

User target: first visible fault around **2 seconds** after page entry. This timing still needs verification against the actual current CSS/deployment.

LASAGNA and slogan must remain independent from the GARFILAS fault animation.

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
- Scroll cue direction: completed; upward arrows
- Local `npm run build`: not verified in this documentation update
- Production visual verification: pending
- Final Hero acceptance: pending

## Exact Next Step

1. Verify latest deployed Hero against the latest reference.
2. Verify/retime first neon fault to ~2 seconds if needed.
3. Continue pixel-level LASAGNA, side-line, flag and slogan calibration.
4. Finish CTA and Bottom Navigation geometry without moving the locked center button unnecessarily.
5. Validate mobile, then desktop.
6. Run production build verification.
7. Do not expand scope until Hero acceptance.

## Source of Truth

- Product/brand authority: `docs/GARFILAS_BIBLE.md`
- Implementation state: this file
- Development history: `docs/SESSION_LOG.md`
- Work backlog: `docs/TODO.md`
- AI continuity: `docs/AI_CONTEXT.md`
- Current visual source: user-supplied mobile reference screenshot