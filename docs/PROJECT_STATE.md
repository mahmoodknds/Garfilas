# Garfilas Current Project State

## Current State

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Repository: GitHub / `main`
- Status: Active Development
- Last Updated: 2026-10-02

## Current Objective

Finish the first-page Hero and make its visual output match the supplied mobile reference as closely as possible before expanding the website.

## Current Hero Implementation

Native React/CSS/SVG composition using independent assets.

Primary assets:

- `public/assets/hero/garfilas-hero-final.webp` (temporary Hero artwork pending final replacement)
- `public/assets/brand/garfilas-reference-logo.svg`
- `public/assets/ui/bottom-nav-frame.svg`

Current composition:

1. Temporary Garfield + lasagna artwork
2. One controlled orange/gold neon ring around the Hero
3. GARFILAS SVG wordmark
4. LASAGNA HTML lockup with side lines
5. Italian flag accent
6. HTML slogan
7. Neon `منو Menu` CTA
8. Upward-pointing scroll cue
9. Pill Bottom Navigation

Current layout direction:

- Bottom Navigation is the fixed lower anchor.
- Hero, logo stack, slogan, CTA and scroll cue are being calibrated as one vertical composition.
- The temporary Hero artwork and its single neon ring are being sized/positioned now; final artwork replacement comes later.
- Extra background construction lines, architecture and secondary rings/halos are intentionally removed for the current layout-calibration phase.
- Background and architectural details will be rebuilt only after foreground placement is stable.

## LASAGNA Typography State

`components/sections/Hero/HeroLogo.tsx` owns the LASAGNA lockup.

- High-contrast display treatment remains the direction.
- Weight remains light rather than bold.
- Letter spacing and side-line geometry were calibrated against the reference.
- Warm gold/orange neon treatment remains reference-driven.

## Slogan State

The slogan remains HTML text:

`Layers of Love, Taste of Italy`

- Current font/spacing/color treatment remains under visual calibration.
- Previous `line-height` experiments did not materially increase visible glyph height and are not considered a solution for future typography changes.
- Latest mobile slogan calibration: `margin-top` changed from `.72rem` to `.60rem`, moving only the slogan slightly upward.
- Do not distort the slogan vertically without a direct reference comparison.

## Exact Current Hero Positioning

- Unified CTA: `top:76%`
- Unified scroll cue: `top:83.5%`
- Unified Hero mascot/orbit vertical anchor: `27.5%`
- Unified Hero copy vertical anchor: `52.8%`
- Mobile uses the same composition values directly.
- Tablet and desktop now use the same vertical composition; artwork/logo/button sizing remains breakpoint-specific.
- Existing scroll cue inline `marginTop:"10px"` is unchanged.
- Mobile slogan `margin-top`: `.60rem`.

## Menu CTA State

`components/ui/GlowButton.tsx` is the current CTA visual primitive.

- Label: `منو Menu`
- Persian is on the right; English is on the left.
- Persian text color/light treatment is now matched to the English `Menu` treatment.
- The vertical gap between the slogan and CTA was increased from the previously cramped state.
- Button remains slim and premium.
- Stars are small, symmetric four-point accents with multi-layer glow/twinkle animation.
- Light Sweep runs on a 3-second cycle.
- Sweep is narrow and angled.
- Sweep uses a bright white-gold core with restrained orange-gold fringe.
- Sweep exits quickly rather than lingering on the button.
- CTA neon breathe remains 2 seconds.

## Navigation Calibration State

- Bottom Navigation frame is a native SVG visual asset.
- Center button vertical position is currently locked at `50.671875%`.
- Center button size remains unchanged from the approved calibration.
- Decorative center dots beneath the center button have been removed from the active implementation.
- Side buttons remain independently positioned and should not move when adjusting the center button.
- Navigation remains under final visual calibration against the reference.

## Hero Scroll Cue State

- Scroll cue arrows point upward.
- The cue position is calibrated relative to the CTA and Bottom Navigation.
- Its final placement must be checked against the latest reference after the foreground stack is stabilized.

## Important Asset Change

`public/assets/brand/garfilas-slogan-exact.svg` is no longer used and was removed from the active implementation because it produced a duplicate/broken-image render. The slogan is now rendered as HTML text.

## Logo Animation

GARFILAS uses a fluorescent/neon electrical-fault effect: long stable light, gradual dimming, irregular flicker, near-off moment and recovery flickers.

Latest change:

- Animation cycle was slowed to **15 seconds** in `styles/animations.css`.
- Commit: `790c209e5c8f94e49ed214eb7e92b40267fdefe7`.
- LASAGNA and slogan remain independent from the GARFILAS fault animation.

## Verification State

- Temporary Hero WebP integration: completed
- Hero temporary size and single-ring direction: in calibration
- Extra Hero rings/halos: removed for current calibration
- Extra background grid/construction lines: removed for current calibration
- Background architecture: deferred until foreground layout is stable
- Supplied SVG wordmark: completed
- Old slogan SVG dependency: removed
- HTML slogan: completed; visual acceptance pending
- LASAGNA lockup: implemented and refined against reference; acceptance pending
- LASAGNA side lines: implemented
- Italian flag: implemented
- Neon fault animation: implemented and slowed to 15s
- CTA: implemented and refined
- Persian CTA color/light: matched to English treatment
- CTA/slogan spacing: increased
- Bottom Navigation: implemented; final calibration pending
- Scroll cue direction: completed; upward arrows
- Mobile scroll cue position: restored to `83.5%`
- Mobile slogan position: raised slightly to `.60rem` margin-top
- Local `npm run build`: not verified in this documentation update
- Production visual verification: pending
- Responsive audit foundation: implemented for safe-area handling, tablet scaling and desktop scaling
- Final Hero acceptance: pending

## Latest Calibration Commits

- `9184b226714e7b7d83e2f3517bd6d538a2b67b8d` — restore scroll arrows position
- `e84ff9f777d4e999499f57a362785f6225a55f04` — raise mobile slogan slightly

## Exact Next Step

1. Verify the latest deployed layout against the latest reference, especially tablet and desktop using the unified mobile-first composition.
2. Finalize proportional vertical placement of temporary Hero, logo stack, slogan, CTA and scroll cue.
3. Keep only the single Hero neon ring while temporary artwork sizing is calibrated.
4. Finalize LASAGNA, side lines, flag and slogan against direct reference comparison.
5. Finish Bottom Navigation geometry without moving the locked center button unnecessarily.
6. Only after foreground layout is stable, rebuild the background and architectural composition.
7. Replace the temporary Hero artwork later and recalibrate its ring if needed.
8. Validate mobile, then desktop.
9. Run production build verification.
10. Do not expand scope until Hero acceptance.

## Source of Truth

- Product/brand authority: `docs/GARFILAS_BIBLE.md`
- Implementation state: this file
- Development history: `docs/SESSION_LOG.md`
- Work backlog: `docs/TODO.md`
- AI continuity: `docs/AI_CONTEXT.md`
- Current visual source: user-supplied mobile reference screenshot

## 2026-10-02 Desktop Composition Correction

- The previous shared percentage-anchor approach was visually insufficient on large screens, based on the supplied `1916×1023px` screenshot.
- Tablet/desktop now use a single lower foreground stack beginning at the existing `52.8%` copy anchor: HeroLogo, CTA, then scroll cue.
- Mobile remains unchanged to protect the approved mobile geometry.
- Wide-desktop temporary mascot sizing is now `clamp(26rem,30vw,29rem)`.
- Fresh production visual verification and build verification remain pending.


## 2026-10-02 Full Mobile Geometry Unification

- The prior tablet/desktop Hero sizing path was removed.
- Desktop now inherits the same mobile-calibrated Hero geometry instead of a separate large-screen composition.
- Protected anchors remain mascot/orbit 27.5%, copy 52.8%, CTA 76%, scroll cue 83.5%.
- The unused .hero-lower-stack wrapper was removed from Hero.tsx.
- Existing ring, particle, CTA, logo animation and Bottom Navigation behavior were preserved.
- Fresh production visual verification remains pending.


## 2026-10-02 Global Background Boundary Correction

- The global SiteBackground remains the shared ambient system for the full site.
- The remaining large Hero ambient glow was moved from Hero.tsx into SiteBackground.tsx.
- Existing glow size, position, color, blur and breathing animation were preserved.
- Hero foreground geometry, particles, ring, CTA effects, logo animation and Bottom Navigation were not changed by this correction.
- The purpose was to eliminate the visible desktop Hero/background termination observed at 1440×900.
- Fresh production visual verification and production build verification remain pending.
- Latest source commit: 41c00960adfc9e5b4f940785f397e11bcde44b08.