# SESSION_LOG.md

## Garfilas Development Log

### Latest Session: 3D Oven Background Scene — Visual Calibration Pass

**Date:** 2026-08-28

## Scope

This session focuses only on rebuilding and visually calibrating the Hero background while preserving the accepted foreground calibration.

## Reference Review

The updated `Result.png` was reviewed directly against the supplied reference before making the next code change.

The current output showed that the previous oven implementation was technically present in code but visually too weak: the screenshot still read primarily as a dark brick/architecture scene with an orange ring. The oven cavity, physical opening depth, warm interior source and lowered door were not visually legible enough.

The latest output also exposed a separate compositing problem: the active `garfilas-hero-final.webp` is an opaque circular artwork with its own dark background and baked architectural artwork. The mascot frame itself also had an opaque dark background. That combination physically occluded the 3D oven scene placed behind Garfield, so the oven could not be seen clearly even though its CSS geometry existed.

This pass therefore addresses both physical readability and the asset compositing boundary rather than simply increasing a generic orange glow.

## Background Direction

The Hero background is treated as a native 3D-inspired scene rather than a decorative brick/grid texture.

The intended visual metaphor is an opened professional oven: a dark surrounding environment, a deep oven cavity, warm interior light, visible depth around the opening, an open door plane, heat haze and warm light spill toward the viewer.

### Implemented

- Removed the active brick-wall background composition from the Hero.
- Removed the active decorative architectural SVG layer from the Hero.
- Reworked the oven into a wider recessed portal so its geometry remains visible around the foreground artwork.
- Added a darker outer oven shell to establish physical thickness.
- Increased cavity depth and warm interior contrast.
- Increased left/right jamb width and perspective so the opening reads as a volume.
- Added a thicker top frame and ceiling light layer.
- Increased warm interior light spill while keeping the surrounding environment dark.
- Added a stronger perspective floor plane beneath the opening.
- Reworked the lowered oven door so the opening animation has a readable physical plane.
- Added a brighter threshold where the hot interior meets the open door.
- Increased heat haze visibility while keeping it soft and subordinate to the foreground.
- Preserved the distant Italian architecture only as a very faint atmospheric layer.
- Kept the scene behind the existing Garfield, single neon ring and typography stack.
- Made the mascot frame transparent so the environmental scene can exist behind the artwork.
- Applied `mix-blend-mode: screen` to the current mascot WEBP so its dark baked background no longer blocks the oven scene.

## Protected Foreground

No intentional changes were made to the accepted foreground structure:

1. Temporary Garfield Hero + single neon ring
2. GARFILAS
3. LASAGNA + side lines
4. Italian flag
5. Slogan
6. `منو Menu` CTA
7. Upward scroll cue
8. Bottom Navigation

## Technical State

- `components/sections/Hero/Hero.tsx` owns the 3D oven background scene markup and responsive styling.
- `styles/tokens.css` contains the minimal compositing override required to reveal the environmental oven behind the opaque mascot artwork.
- The scene uses CSS perspective, transforms, gradients, shadows and controlled animation rather than a background screenshot.
- Existing unused background SVG assets remain in the repository for now and are not mounted by the active Hero.

## Verification State

- Updated `Result.png`: reviewed
- Previous oven scene readability: insufficient
- Recessed 3D oven shell: implemented
- Deeper warm cavity: implemented
- Physical jamb depth: implemented
- Open door depth: implemented
- Warm light spill: strengthened
- Heat haze: strengthened
- Mascot artwork compositing: corrected to reveal the environmental background
- Foreground calibration: preserved
- Production build: not verified in this documentation update
- Final visual acceptance: pending next direct output comparison

## Latest Code Commit

`e8d890a9ea866e149894e1e813a4f0b97905ab2d`

## Exact Next Actions

1. Inspect the next deployed/mobile output directly.
2. Verify that the oven cavity is now visibly readable behind Garfield.
3. Compare the visible oven depth against the supplied reference and the agreed oven-opening concept.
4. Tune only scale, depth, light spill and heat haze if needed.
5. Do not alter foreground positions during this background pass.
6. Verify desktop adaptation after mobile acceptance.
7. Run production build verification.
8. Do not expand project scope until Hero acceptance.

---

Last Updated: 2026-08-28


---

### Latest Session: Hero Foreground Vertical Calibration, Slogan and Scroll Cue

**Date:** 2026-10-01

## Scope

This pass was intentionally limited to small vertical-calibration corrections in the existing Hero. No new visual system was introduced and no particle/background work was re-applied.

## Changes

- Restored the mobile upward scroll cue to its prior position: `.hero-scroll-cue { top:83.5%; }`.
- Preserved the CTA positions while restoring the arrows.
- Moved only the mobile slogan slightly upward by changing `.hero-slogan` mobile `margin-top` from `.72rem` to `.60rem`.
- No other Hero element was changed by the slogan adjustment.

## Current Exact Positioning

- Base CTA: `top:74.5%`
- Mobile CTA: `top:76%`
- Desktop CTA: `top:77%`
- Base scroll cue: `top:83.9%`
- Mobile scroll cue: `top:83.5%`
- Desktop scroll cue: `top:86%`
- Mobile slogan margin-top: `.60rem`
- Existing scroll cue inline margin-top remains `10px`.

## Important Particle/Baseline Protection

The Hero particle/background experiments from September were not reintroduced. The project remains content-equivalent to the user-requested `4987502c308741d97aff7b5b1d3cbe7faabdad68` baseline for the restored particle engine and global CSS, with later focused Hero calibration commits layered on top.

## Latest Commits

- `9184b226714e7b7d83e2f3517bd6d538a2b67b8d` — restore scroll arrows position
- `e84ff9f777d4e999499f57a362785f6225a55f04` — raise mobile slogan slightly

## Exact Next Actions

1. Open the latest deployed/mobile output and compare the complete foreground stack directly with the reference.
2. Do not move CTA, arrows, logo, LASAGNA, flag or Hero artwork unless the reference shows a specific mismatch.
3. Continue one-variable-at-a-time visual calibration.
4. Keep the restored particle baseline protected.
5. Run production build verification before final Hero acceptance.

Last Updated: 2026-10-01


### Latest Session: Unified Responsive Hero Composition

**Date:** 2026-10-02

## Scope

The Hero responsive strategy was simplified for the Landing Page MVP. The mobile-first composition is now shared across mobile, tablet and desktop while breakpoint-specific sizing remains available for larger screens.

## Changes

- Unified Hero vertical anchors:
  - Mascot/orbit: `27.5%`
  - Hero copy: `52.8%`
  - CTA: `76%`
  - Scroll cue: `83.5%`
- Removed tablet-specific and desktop-specific vertical offsets.
- Removed the short-desktop height override because it is no longer needed by the shared composition.
- Preserved breakpoint-specific artwork, ring, logo, LASAGNA and CTA sizing.
- Preserved the Bottom Navigation, particle engine, ring animation, CTA animations and logo animation.
- No background redesign was introduced.

## Reason

The MVP does not need separate tablet and desktop Hero compositions yet. One stable mobile-first vertical system reduces responsive drift and avoids spending calibration time on separate desktop positioning before the foreground is accepted.

## Commits

- `01d9dc3b5c45e71522b6b531636d35d70c638829` — refactor(hero): unify responsive vertical composition
- `73ea495539e80d406e6d544335cdbf867e9dc771` — refactor(hero): remove remaining desktop copy offset

## Verification State

- Source-level responsive override inspection: completed.
- Mobile protected values: preserved.
- Tablet/desktop vertical overrides: removed.
- Production visual verification: still pending.
- Production build verification: still pending.

## Exact Next Actions

1. Review the latest deployed Hero at representative mobile, tablet and desktop sizes.
2. If a mismatch is found, change only the confirmed variable and preserve the shared composition rule.
3. Keep the temporary artwork and single-ring direction unchanged.
4. Do not rebuild background architecture before foreground acceptance.
5. Run production build verification.
