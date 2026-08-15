# Garfilas Current Project State

## Current State

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Repository: GitHub / `main`
- Status: Active Development
- Last Updated: 2026-08-12

## Current Objective

Make the **first-page Hero match the supplied mobile reference as closely as possible** before expanding the website.

The current visual target is the user-provided mobile screenshot from 2026-08-11. It is the composition source of truth, not a background image to render as the UI.

## Current Hero Implementation

Implemented in the calibration branch:

- Native React/CSS Hero composition
- Final Garfilas WebP artwork rendered from:
  `public/assets/hero/garfilas-hero-final.webp`
- Exact brand wordmark asset rendered separately
- Exact slogan asset rendered separately
- Dark luxury background
- Orange/gold neon rings and glow generated with CSS
- Native CTA
- Neon scroll cue
- Native Bottom Navigation
- Mobile-first responsive sizing
- Reduced-motion support
- Accessibility focus states

## Current Hero Composition

The current intended order is:

1. Garfield + lasagna WebP artwork at the top
2. Neon circular framing and glow
3. GARFILAS / LASAGNA brand lockup
4. Italian flag accent
5. `Layers of Love, Taste of Italy` slogan asset
6. Neon outlined `مشاهده منو` CTA with sparkle accents
7. Neon scroll indicator
8. Pill-shaped Bottom Navigation with three circular controls and a larger highlighted center control

The WebP is an actual asset. The surrounding neon, controls, layout, glow and animations remain native UI/CSS.

## Latest Visual Calibration

Implemented on `feat/sprint-0.4-hero-calibration`:

- Reduced Hero/artwork scale slightly across mobile and desktop.
- Reduced the surrounding orbit and glow footprint to keep the composition tighter.
- Rebuilt Bottom Navigation geometry with a smaller pill, tighter spacing and explicit active-center styling.
- Removed per-item inline sizing so navigation geometry is controlled consistently by CSS.
- Preserved the larger elevated center control and active indicator.

## Important Design Rules

- Do not use the full reference screenshot as the Hero background.
- Do not replace the supplied Garfield WebP with a generated mascot.
- Do not recreate the supplied logo or slogan with ordinary text when the exact assets are available.
- Neon rings, glows, architectural line-art, CTA and navigation must remain native UI/CSS.
- Keep the first page as the only active design scope until the Hero is accepted.
- Mobile is the primary calibration target; desktop follows from the same system.
- Keep the visual language premium, dark, warm, Italian-inspired and minimal.

## Current Asset Strategy

Primary Hero artwork:

`public/assets/hero/garfilas-hero-final.webp`

Brand wordmark:

`public/assets/brand/garfilas-reference-logo.svg`

Slogan:

`public/assets/brand/garfilas-slogan-exact.svg`

The Hero should use these supplied assets directly and keep them independently replaceable.

## Current Technical Files

- `components/sections/Hero/Hero.tsx` owns the Hero structure.
- `components/sections/Hero/HeroLogo.tsx` owns the logo asset presentation.
- `components/sections/Hero/HeroCTA.tsx` owns the CTA wrapper.
- `components/ui/GlowButton.tsx` provides the CTA primitive.
- `components/sections/BottomNavigation/BottomNavigation.tsx` owns navigation markup.
- `app/globals.css` owns the current Hero composition, neon effects, responsive rules and Bottom Navigation styling.

## Verification State

- GitHub implementation: updated on calibration branch
- Final WebP path: integrated into Hero
- Native neon composition: integrated
- Latest visual calibration: implemented
- Local `npm run build`: not executed by GitHub connector
- Production visual verification: pending
- Final mobile visual acceptance: pending
- Desktop responsive calibration: pending

## Exact Next Step

1. Pull `feat/sprint-0.4-hero-calibration` locally.
2. Run `npm run build`.
3. Run `npm run dev`.
4. Compare the mobile output to the 2026-08-11 reference screenshot.
5. Validate Bottom Navigation geometry at common mobile widths.
6. Refine CTA and vertical spacing only if the visual comparison requires it.
7. Check desktop responsiveness.
8. Do not expand scope until the first-page Hero is accepted.

## Documentation Rule

Before context/message limits are reached, update `PROJECT_STATE.md`, `SESSION_LOG.md`, `TODO.md`, `CHANGELOG.md` and `AI_CONTEXT.md` so the next chat can continue from the exact current state.

## Source of Truth

- Product/brand authority: `docs/GARFILAS_BIBLE.md`
- Implementation state: this file
- Development history: `docs/SESSION_LOG.md`
- Current visual source of truth: the user's 2026-08-11 mobile reference screenshot
