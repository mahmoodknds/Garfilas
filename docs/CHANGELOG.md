# CHANGELOG.md

## [Unreleased]

### Added

- Final Garfilas Hero WebP asset integration
- Separate supplied wordmark and slogan assets in the Hero
- Reference-oriented neon CTA composition
- Native scroll cue
- Reference-oriented Bottom Navigation with highlighted center control
- Dedicated SVG-based Bottom Navigation frame with custom central geometry

### Changed

- Hero composition moved from the earlier placeholder/reference-image presentation to a native composition using the final WebP artwork
- Hero layout reordered to match the supplied 2026-08-11 mobile reference
- Neon rings and glow refined around the artwork
- CTA moved toward the reference's outlined neon form
- Bottom Navigation moved from a generic rounded container toward a custom reference-oriented frame
- Bottom Navigation frame is now rendered as a non-layout SVG background layer so it does not alter control positioning
- Documentation synchronized with the latest visual calibration state

### Fixed

- Hero now references `public/assets/hero/garfilas-hero-final.webp` instead of the old JPG placeholder
- Stale documentation describing the old standalone JPG Hero was removed from current-state documents
- Bottom Navigation frame no longer participates in layout sizing

### Pending

- Validate the latest custom frame geometry against the original mobile reference
- Slightly reduce overall Hero/artwork scale
- Precisely match Bottom Navigation button proportions if required after frame validation
- Final CTA spacing calibration
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

Last Updated: 2026-08-12
