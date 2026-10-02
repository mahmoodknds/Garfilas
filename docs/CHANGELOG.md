# CHANGELOG.md

## [Unreleased]

### 2026-10-02 Responsive Audit — Unified Hero Composition

#### Changed

- Unified the Hero's vertical composition across mobile, tablet and desktop.
- Shared anchors are now: mascot/orbit `27.5%`, copy `52.8%`, CTA `76%`, scroll cue `83.5%`.
- Preserved breakpoint-specific sizing for mascot, ring, logo, LASAGNA and CTA so larger screens still scale appropriately without introducing a separate desktop composition.
- Removed the tablet/desktop vertical overrides and the short-desktop height override.
- Mobile values remain unchanged.
- Bottom Navigation, particles, CTA animation, logo animation and ring behavior were not redesigned.

#### Reason

- The MVP should ship with one stable mobile-first Hero composition instead of maintaining separate tablet/desktop vertical layouts.
- This removes the previous width-dependent vertical drift that compressed the CTA and scroll region against the fixed Bottom Navigation.

#### Commit

- `01d9dc3b5c45e71522b6b531636d35d70c638829` — refactor(hero): unify responsive vertical composition
- `73ea495539e80d406e6d544335cdbf867e9dc771` — refactor(hero): remove remaining desktop copy offset


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



### 2026-10-02 Responsive Audit — Tablet/Desktop Vertical Rebalance

#### Changed

- Rebalanced the tablet (`700–1099px`) Hero stack: copy `54% → 52%`, CTA `77% → 74%`, scroll cue `86% → 82%`.
- Rebalanced the wide desktop (`1100px+`) Hero stack: copy `54% → 50%`, CTA `77% → 70%`, scroll cue `86% → 80%`.
- Kept mobile calibration unchanged, including CTA `76%` and scroll cue `83.5%`.
- Kept mascot, ring sizes, Bottom Navigation geometry, and particle behavior unchanged.
- The previous height-only desktop override was superseded because the supplied `1440×900` evidence is not a short-height viewport and therefore did not activate that rule.

#### Evidence

- The supplied `768×900`, `1024×900`, and `1440×900` screenshots showed the CTA/scroll region becoming progressively compressed against the fixed Bottom Navigation as viewport width increased.
- This pass changes only the vertical Hero composition for tablet and desktop families.

#### Commit

- `9a5f26661dd2bb3c79bd9d2e875c04f426244431` — fix: rebalance tablet and desktop hero stack

### 2026-10-02 Responsive Audit — Short Desktop Pass

#### Changed

- Added a height-aware desktop refinement for `1100px+` viewports with `max-height:749px`.
- On short desktop viewports only, moved the Hero copy from `54%` to `50.5%`, CTA from `77%` to `69%`, and scroll cue from `86%` to `77%`.
- Preserved all mobile values and the normal `1100px+` desktop values for taller viewports.
- Bottom Navigation geometry was not changed.

#### Reason

- Supplied desktop evidence showed the CTA and scroll area becoming too close to the fixed Bottom Navigation on a short-height desktop render.
- The adjustment targets vertical composition only and avoids changing artwork scale, ring geometry, or protected mobile calibration.

#### Commit

- `78be07d4eacbb9d3ced24efdafb8b191c8d7626a` — fix: rebalance short desktop hero spacing

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


### 2026-10-02 Desktop Hero Composition Correction

#### Evidence

- Reviewed the supplied desktop screenshot at `1916×1023px`.
- The shared percentage anchors exposed a desktop collision: the enlarged temporary artwork compressed the lower foreground stack, causing the slogan, CTA and scroll cue to enter the Bottom Navigation region.

#### Change

- Added a desktop/tablet lower composition stack with the semantic order `GARFILAS → LASAGNA → Italian flag → slogan → CTA → scroll cue`.
- The stack is positioned as one composition from the existing `52.8%` copy anchor rather than independently positioning copy, CTA and scroll cue with separate desktop percentages.
- Mobile behavior remains unchanged, including protected CTA `76%`, scroll cue `83.5%`, and slogan margin-top `.60rem`.
- Reduced the wide-desktop temporary mascot width from the previous `clamp(29rem,32vw,34rem)` to `clamp(26rem,30vw,29rem)` so the artwork does not consume the lower copy area.
- Preserved the Bottom Navigation, particles, ring animation, logo animation, CTA animation styling, colors and typography.

#### Verification State

- Source-level implementation: completed.
- Supplied desktop evidence: addressed at source level.
- Fresh production screenshot verification: pending.
- Production build verification: pending.


### 2026-10-02 Responsive Composition Correction — Full Mobile Geometry Shared Across Viewports

#### Changed

- Removed the tablet/desktop-specific Hero media block from app/globals.css.
- Promoted the mobile-calibrated Hero geometry to the shared base rules, including mascot/ring sizing and the existing 27.5% / 52.8% / 76% / 83.5% anchors.
- Removed the unused .hero-lower-stack structural wrapper from Hero.tsx so the Hero foreground has the same direct element structure at every viewport width.
- Preserved the existing Hero artwork, ring, particles, CTA effects, logo animation, Bottom Navigation and typography.

#### Reason

- The previous desktop correction still left a distinct large-screen sizing/composition path. The requested behavior is for desktop to open with the same mobile-calibrated Hero composition rather than a separate desktop layout.

#### Commits

- ec21653f0fbae0cc0d42503f3c146125e7471647 — fix(hero): unify desktop with mobile composition
- 32b62cb9a8c96c866147f01ff13f3a5aec9419f1 — fix(hero): remove desktop-only composition wrapper


### 2026-10-02 Mobile Geometry Restored as the Direct Desktop Baseline

#### Changed

- Removed the active `@media(min-width:700px)` Hero composition override from `app/globals.css`.
- Desktop now falls through to the same mobile-first Hero geometry directly: mascot/orbit, copy, CTA and scroll cue keep the shared base positioning and sizing rules.
- Preserved artwork, particle engine, CTA effects, logo treatment and Bottom Navigation.

#### Commit

- `2f7b60c12979fa994cabe79f43ecf850264c1c35` — `fix(hero): use mobile geometry directly on desktop`


### 2026-10-02 Mobile Geometry Restored as the Direct Desktop Baseline

- Removed the active `@media(min-width:700px)` Hero composition override from `app/globals.css`.
- Desktop now uses the same mobile-first Hero geometry directly for mascot/orbit, copy, CTA and scroll cue.
- Preserved artwork, particles, CTA effects, logo treatment and Bottom Navigation.
- Commit: `2f7b60c12979fa994cabe79f43ecf850264c1c35` (`fix(hero): use mobile geometry directly on desktop`).


### 2026-10-02 Global Site Background System

#### Changed

- Added a layout-level `SiteBackground` component for the shared ambient background.
- Moved the Hero ambient scene into a fixed, site-wide layer so it continues across page/section boundaries.
- Removed the Hero-owned ambient scene markup and local style ownership.
- Preserved the existing body gradient and global particle engine.
- Preserved Hero foreground geometry and navigation calibration.

#### Reason

- Future pages should share one continuous Garfilas atmosphere instead of creating separate background implementations and visible section boundaries.

#### Commits

- `4d674d2bbfd3704b992d481f727611c1a30fefd3`
- `046924c975c209f8416e2038d6a4424811b8f0b7`
- `db718112a4c136674865f8357a46f740e4dc077c`
- `f63139b3948bfe371a807d480e73dee5336b476f`
