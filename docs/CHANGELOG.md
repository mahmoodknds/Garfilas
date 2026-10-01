# CHANGELOG.md

## [Unreleased]

### 2026-10-01 Responsive Audit Foundation

#### Changed

- Added safe-area-aware Hero shell bottom padding without changing protected CTA/scroll positions.
- Added explicit tablet (`700–1099px`) Hero scaling rules.
- Added explicit wide-desktop (`1100px+`) Hero scaling rules so large screens do not inherit mobile-sized artwork.
- Changed Bottom Navigation frame width from `100vw` to `100%` to avoid viewport-width overflow caused by scrollbar geometry.

### 2026-10-01 Hero Calibration

#### Changed

- Restored the mobile Hero scroll cue to `top:83.5%` after the temporary arrow-position adjustment.
- Preserved the current CTA positions: base `74.5%`, mobile `76%`, desktop `77%`.
- Moved only the mobile slogan slightly upward by changing its `margin-top` from `.72rem` to `.60rem`.
- Kept the existing scroll cue inline `marginTop:"10px"` unchanged.
- Preserved the restored Hero particle/global-CSS baseline requested from commit `4987502c308741d97aff7b5b1d3cbe7faabdad68`.

#### Commits

- `9184b226714e7b7d83e2f3517bd6d538a2b67b8d` — restore scroll arrows position
- `e84ff9f777d4e999499f57a362785f6225a55f04` — raise mobile slogan slightly


### Added

- Independent HTML LASAGNA lockup with two side lines
- Native inline SVG Italian flag accent with tapered/faded ends
- HTML slogan treatment using `Layers of Love, Taste of Italy`
- Intermittent electrical fluorescent-style neon fault animation for GARFILAS

### Changed

- Hero calibration continues to be driven directly by the latest user-supplied reference screenshot
- GARFILAS remains sourced exclusively from `public/assets/brand/garfilas-reference-logo.svg`
- Slogan changed from SVG artwork to a single HTML text element after the old asset caused a duplicate/broken-image render
- LASAGNA is calibrated independently from GARFILAS rather than being treated as part of the supplied SVG
- Italian flag uses an inline SVG with a thin tapered/faded reference treatment
- Neon animation remains a slower fluorescent-tube fault pattern with gradual dimming and irregular recovery flickers
- Hero scroll arrows now point upward
- Hero scroll cue position was recalibrated lower using the actual `.hero-scroll-cue` placement
- Bottom Navigation center button position is locked at `50.671875%`
- Decorative center dots beneath the Bottom Navigation center button were removed
- Bottom Navigation frame remains a dedicated SVG asset

### Fixed

- Removed the legacy slogan SVG dependency that produced a broken image and duplicate slogan
- Removed the incorrect text recreation approach for the GARFILAS wordmark
- Corrected the Italian flag's oversized/capsule-like appearance
- Removed remaining decorative center dots from the navigation implementation/frame

### Pending

- Verify first neon fault occurs around 2 seconds after page entry
- Final GARFILAS neon color/bloom calibration
- Final LASAGNA font, size, letter spacing and side-line calibration
- Final Italian flag width, height, taper, fade and glow calibration
- Final slogan font, size, color, glow and spacing calibration
- CTA spacing calibration
- Bottom Navigation geometry and button-proportion calibration
- Verify upward scroll cue placement against the latest reference
- Mobile visual acceptance
- Desktop responsive calibration
- Local production-build verification

## [0.1.0]

Foundation and documentation release.

## Next Release

### v0.2.0

Landing Page MVP completion after Hero acceptance:

- Featured Products polish
- Story polish
- Why Garfilas
- CTA/footer completion
- Full SEO foundation
- Performance optimization
- Local production-build verification

Last Updated: 2026-10-01

### 2026-10-01 Responsive Audit — Structural Pass

#### Verified

- Production deployment `721a7d6a03909a93a283f6e1492faf0ab344df8d` is READY and serving `garfilas.vercel.app` with HTTP 200.
- Runtime error check for the recent production window returned no reported runtime errors.
- Responsive rules were inspected at the planned viewport family: 320, 360, 375, 390, 414, 430, 768, 834, 1024, 1280, 1440 and 1600px.
- Protected Hero calibration values remain unchanged: mobile CTA `76%`, desktop CTA `77%`, mobile scroll cue `83.5%`, desktop scroll cue `86%`, mobile slogan margin `.60rem`, and Bottom Navigation center `50.671875%`.
- The Bottom Navigation frame now uses `100%` rather than `100vw`, removing the previously identified scrollbar-width overflow source.

#### Findings

- Mobile Hero mascot scaling is continuous through the `699px → 700px` breakpoint.
- A responsive discontinuity remains in the Hero neon ring at the `699px → 700px` breakpoint: the effective ring width changes from a maximum of `416px` on mobile to a minimum of `480px` on tablet. This is a 64px jump and should be visually checked before changing it.
- No source change was made for this ring breakpoint during the structural pass because production screenshots at controlled viewport sizes are not available through the current execution environment. This avoids changing an approved visual without direct visual evidence.
- The next audit pass should use real rendered screenshots at the target viewport sizes, then address only confirmed visual issues one at a time.

### 2026-10-01 Responsive Audit — Mobile Evidence Pass

#### Evidence Reviewed

- Reviewed the supplied Garfilas screen recording at `324×720px` viewport-class resolution (`SVID_20260831_101029_1.mp4`).
- Across sampled frames, the Hero foreground stack remains stable: mascot/ring, GARFILAS, LASAGNA, slogan, CTA, scroll cue and Bottom Navigation do not visibly collide.
- Bottom Navigation remains anchored to the lower edge while the center button stays visually centered.
- The scroll cue remains separated from the CTA and Bottom Navigation at this mobile size.
- Particle motion changes density over time, but the main foreground geometry remains stable in the supplied recording.

#### Limitation

- The recording is dated 2026-08-31, so it is useful as mobile visual evidence but is not treated as proof of the current 2026-10-01 production render.
- Desktop/tablet visual evidence is still required before changing the responsive ring breakpoint or any desktop proportions.
