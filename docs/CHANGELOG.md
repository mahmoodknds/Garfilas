# CHANGELOG.md

## [Unreleased]

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

Last Updated: 2026-08-23
