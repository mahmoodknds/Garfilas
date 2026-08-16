# Garfilas Current Project State

## Current State

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Repository: GitHub / `main`
- Status: Active Development
- Last Updated: 2026-08-16

## Current Objective

Finish the first-page Hero and make its visual output match the supplied mobile reference as closely as possible before expanding the website.

The current visual target is the user's supplied mobile reference. It is the composition source of truth, not a background image to render as the UI.

## Current Hero Implementation

The Hero is a native React/CSS composition using independent supplied assets.

Primary assets:

- `public/assets/hero/garfilas-hero-final.webp`
- `public/assets/brand/garfilas-reference-logo.svg`
- `public/assets/brand/garfilas-slogan-exact.svg`

Current visual system includes:

- Dark luxury background
- Orange/gold neon rings and glow
- Garfield + lasagna artwork
- GARFILAS brand lockup
- LASAGNA sublabel
- Italian flag accent
- Exact slogan asset
- Native neon CTA
- Scroll cue
- Pill-shaped Bottom Navigation

## Logo Calibration State

The supplied SVG is the source of truth for the wordmark geometry.

Recent calibration established that:

- The visible GARFILAS logo must come from the supplied SVG, not an HTML text recreation.
- Neon/fire treatment must affect the SVG form itself.
- The current treatment is visually close, but the glow is too intense compared with the reference.
- The next logo refinement must reduce bloom and preserve crisp gold/orange letter edges.
- The logo must remain readable and premium rather than becoming a bright orange/white light mass.
- Fire/bloom is secondary to the actual SVG geometry.

The latest user-approved direction is: keep the current successful SVG-based logo, but reduce its light intensity and calibrate color, bloom, edge glow and overall appearance against the reference.

## Current Hero Composition

Intended order:

1. Garfield + lasagna WebP artwork
2. Neon circular framing and glow
3. GARFILAS / LASAGNA brand lockup
4. Italian flag accent
5. `Layers of Love, Taste of Italy` slogan asset
6. Neon outlined `مشاهده منو` CTA
7. Neon scroll indicator
8. Pill-shaped Bottom Navigation with three circular controls and a larger highlighted center control

## Important Design Rules

- Never use the full reference screenshot as the Hero background.
- Use supplied assets directly when available.
- Do not recreate the supplied logo as ordinary text.
- Keep the SVG logo independently replaceable.
- Neon effects must support the SVG geometry rather than obscure it.
- Keep the first page as the only active design scope until the Hero is accepted.
- Mobile is the primary calibration target; desktop follows from the same system.
- Keep the visual language premium, dark, warm, Italian-inspired and controlled.

## Current Technical Files

- `components/sections/Hero/Hero.tsx` owns Hero structure.
- `components/sections/Hero/HeroLogo.tsx` owns logo asset presentation.
- `components/sections/Hero/HeroCTA.tsx` owns CTA wrapper.
- `components/ui/GlowButton.tsx` provides the CTA primitive.
- `components/sections/BottomNavigation/BottomNavigation.tsx` owns bottom navigation markup.
- `app/globals.css` owns current Hero composition, neon effects, responsive rules and navigation styling.

## Verification State

- GitHub implementation: updated
- Hero WebP integration: completed
- Supplied SVG wordmark integration: completed
- Slogan asset integration: completed
- Native neon composition: integrated
- Logo visual calibration: in progress
- Local `npm run build`: not verified in this documentation update
- Production visual verification: pending

## Exact Next Step

1. Pull latest `main` locally.
2. Run `npm run build`.
3. Run `npm run dev`.
4. Compare the mobile viewport against the supplied reference.
5. Reduce logo neon/bloom intensity while preserving the gold/orange core and SVG geometry.
6. Continue pixel-level logo calibration.
7. After logo acceptance, calibrate LASAGNA, flag and slogan independently.
8. Then calibrate CTA and Bottom Navigation.
9. Re-check desktop without changing the mobile-first design language.
10. Do not expand scope until the first-page Hero is accepted.

## Source of Truth

- Product/brand authority: `docs/GARFILAS_BIBLE.md`
- Implementation state: this file
- Development history: `docs/SESSION_LOG.md`
- Work backlog: `docs/TODO.md`
- AI continuity: `docs/AI_CONTEXT.md`
- Current visual source: user-supplied mobile reference screenshots
