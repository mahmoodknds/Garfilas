## 2026-10-09 Deployment and Background Test State

- GitHub → Vercel Git integration was reconnected by the project owner.
- The previously failing production deployment was caused by a missing closing parenthesis in `HeroParticleEngine.tsx`; the source fix is now on `main`.
- The temporary `/blank` background-test route was removed on 2026-10-09 after the background test was accepted; do not recreate it unless a new isolated test is explicitly needed.
- The background particle engine now uses the active `.hero-orbit-one` element as its ring anchor; the obsolete blank-page anchor fallback was removed.
- The reduced-motion accessibility guard skips the decorative particle engine when `prefers-reduced-motion: reduce` is active; this change is on the review branch and is not yet in Production.
- Do not create additional trigger-only commits unless a real source change also needs deployment.
- Production must be checked by deployment commit SHA before visual acceptance.

Verification state:
- GitHub source: synchronized.
- GitHub Actions: ESLint and production build passed for the current Production source commit `7eec60c99358b7fdf625e8cf9b80c20c9c8beb3f`.
- Vercel Production: source commit `7eec60c99358b7fdf625e8cf9b80c20c9c8beb3f` (`perf(brand): serve responsive optimized wordmark`) reached `READY`; the earlier deployment-rate-limit rejection has cleared.
- Browser/device render verification: pending.
- Current cleanup branch adds homepage metadata, Open Graph/Twitter summaries, `robots.txt`, and a homepage-only `sitemap.xml`; JSON-LD remains deferred until structured business/menu facts are confirmed.
- The project owner confirmed optimized image response sizing/format and visual quality for the wordmark and Hero mascot.

# Garfilas Current Project State

## Current State

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Repository: GitHub / `main`
- Status: Active Development
- Last Updated: 2026-10-09

## Current Objective

Finish the first-page Hero and make its visual output match the supplied mobile reference as closely as possible before expanding the website.

## Current Hero Implementation

Native React/CSS/SVG composition using independent assets.

Primary assets:

- `public/assets/hero/garfilas-hero-final.webp` (temporary Hero artwork pending final replacement)
- `public/assets/brand/garfilas-reference-logo.png` (extracted from the former SVG wrapper and served through `next/image`)
- `public/assets/ui/bottom-nav-frame.svg`

Current composition:

1. Temporary Garfield + lasagna artwork
2. One controlled orange/gold neon ring around the Hero
3. GARFILAS wordmark (transparent PNG extracted from the former SVG wrapper and served through `next/image`)
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

- Unified mascot/orbit vertical anchor: `27.5%`
- Unified Hero copy vertical anchor: `51.3%`
- Unified CTA: `top:73.6%`
- Unified scroll cue: `top:80.5%`
- On very short viewports (`max-height:600px`), the decorative scroll cue is hidden.
- Bottom Navigation fixed frame height: `5.8rem`.
- Mobile, tablet and desktop use the same vertical composition; sizing may adapt through existing width/clamp rules.
- Mobile slogan `margin-top`: `.60rem`.

Older values such as `52.8%`, `76%` and `83.5%` are historical calibration records only and do not describe the active source.

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

- GARFILAS neon fault animation is implemented in `app/globals.css`.
- Current cycle: 15 seconds.
- LASAGNA and slogan remain independent from the GARFILAS fault animation.

## Verification State

- Temporary Hero WebP integration: completed
- Hero temporary size and single-ring direction: in calibration
- Extra Hero rings/halos: removed for current calibration
- Extra Hero background grid/construction lines: removed for current calibration
- Background architecture: global body atmosphere plus fixed particle engine
- Wordmark extraction to transparent PNG and responsive `next/image` delivery: completed
- Old slogan SVG dependency: removed
- HTML slogan: completed; visual acceptance pending
- LASAGNA lockup: implemented and refined against reference; acceptance pending
- LASAGNA side lines: implemented
- Italian flag: implemented
- Neon fault animation: implemented and slowed to 15s
- Mobile slogan position: raised slightly to `.60rem` margin-top.
- Local `npm run build`: previously verified on 2026-10-02; the latest source commit also passed GitHub Actions lint and build
- Production visual verification: pending
- Responsive audit foundation: implemented for safe-area handling, tablet scaling and desktop scaling
- `/blank` global-background test route: removed after verification
- Final Hero acceptance: pending

## Current Background Architecture

- Global document atmosphere is owned by the `body` background in `app/globals.css`.
- Fixed live particles are owned by `HeroParticleEngine.tsx`.
- The engine resolves its ring anchor from `.hero-orbit-one`.
- The temporary blank route was removed after the background review; do not assume it exists.
- Ring particle volume remains approximately constant through immediate replacement when ring particles finish.
- The previous ring-pulse/emission experiment is not part of the current behavior.

## Latest Calibration Commits

- `9184b226714e7b7d83e2f3517bd6d538a2b67b8d` — restore scroll arrows position
- `e84ff9f777d4e999499f57a362785f6225a55f04` — raise mobile slogan slightly

## Exact Next Step

1. Verify the current homepage in a real browser on mobile and desktop.
2. Verify Next.js optimized delivery for the 1.4 MB wordmark source without changing its appearance.
3. Continue source-backed asset and CSS audits; preserve the dormant Menu prototype until its activation is in scope.
4. Finalize foreground Hero acceptance before expanding scope.
5. Verify the deployed commit SHA before accepting visual changes; do not create trigger-only commits.

## Source of Truth

- Product/brand authority: `docs/GARFILAS_BIBLE.md`
- Implementation state: this file
- Development history: `docs/SESSION_LOG.md`
- Work backlog: `docs/TODO.md`
- AI continuity: `docs/AI_CONTEXT.md`
- Current visual source: user-supplied mobile reference screenshot
