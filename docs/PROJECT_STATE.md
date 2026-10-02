## 2026-10-02 CSS Cleanup

- Removed redundant Hero CSS declarations from `app/globals.css`.
- Active Hero geometry and visual behavior remain unchanged.
- `lucide-react` remains an active Bottom Navigation dependency.

Verification: source-level GitHub re-read completed.

## 2026-10-02 Font Loading Cleanup

- Removed the unused Noto Kufi Arabic next/font definition and layout variable.
- Reduced Cormorant Garamond to its only active weight (300).
- Great Vibes remains at 400; Vazirmatn remains at 700.
- This cleanup only removes unused font payload/configuration and preserves the active visual treatment.

Verification: source-level GitHub re-read completed. Browser/device verification remains unavailable.

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
- Extra background grid/construction lines: removed for current calibration
- Background architecture: deferred until foreground layout is stable
- Supplied SVG wordmark: completed
- Old slogan SVG dependency: removed
- HTML slogan: completed; visual acceptance pending
- LASAGNA lockup: implemented and refined against reference; acceptance pending
- LASAGNA side lines: implemented
- Italian flag: implemented
- Neon fault animation: implemented and slowed to 15s
- Mobile slogan position: raised slightly to `.60rem` margin-top.
- Local `npm run build`: verified successfully on 2026-10-02
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

## 2026-10-02 Full Mobile Geometry Unification

- The separate tablet/desktop Hero sizing path was removed.
- Desktop now uses the same current Hero vertical geometry as mobile.
- Current anchors are mascot/orbit `27.5%`, copy `51.3%`, CTA `73.6%`, scroll cue `80.5%`.
- The unused `.hero-lower-stack` wrapper was removed from Hero.tsx.
- Existing ring, particle, CTA, logo animation and Bottom Navigation behavior were preserved.
- Fresh production visual verification remains pending.

## 2026-10-02 Codebase Cleanup

- Removed unused Hero and Bottom Navigation barrel files because no active import resolves through them.
- Removed redundant root-level project metadata/structure files and the duplicate `docs/PROJECT_INFO.md`; `docs/PROJECT_STRUCTURE.md` remains the canonical structure document.

- Homepage is intentionally limited to the active Hero and Bottom Navigation.
- Featured Products and Story were removed from the codebase until their implementation is explicitly resumed.
- Unused Hero prototypes and generic starter UI components were removed.
- Legacy particle test styles and unused starter assets were removed.
- CTA font loading was moved from a runtime Google Fonts import to `next/font`.
- Component-level CTA CSS was moved to `app/globals.css` to remove embedded style blocks.
- Disabled legacy background layers were removed from `SiteBackground.tsx` and their obsolete CSS was removed.
- No Hero visual behavior was intentionally changed by this cleanup.

Cleanup verification: local `npm run build` passed on 2026-10-02.


## 2026-10-02 Dependency, Asset and CSS Audit

The second cleanup pass audited dependencies, active public assets and CSS.

Confirmed:
- `lucide-react` is actively used by Bottom Navigation.
- The `next/font/google` fonts are actively consumed by Hero typography.
- Current Hero and Bottom Navigation assets remain referenced.
- The retained public screenshot is reference material.
- No unused npm dependency was confirmed, so package versions were left unchanged.

Structural cleanup:
- Removed the no-op `SiteBackground.tsx` and its root-layout mount.
- Current ambient background ownership is the global body gradient plus the fixed particle engine.
- Removed confirmed dead Hero CSS and legacy animation declarations.
- Kept active visual geometry and package versions unchanged.

This pass was source-level; no browser or local-build verification is claimed here.


## 2026-10-02 Responsive CSS Audit

A focused responsive pass found one concrete stylesheet integrity issue and one compact-height collision risk.

- The animation/keyframe block contained partial legacy fragments after dead CSS removal. It has been normalized to only the active keyframes.
- The global `garfilas-glow-button` block was dead because the active button root is implemented by `GlowButton.tsx` with utility classes. It was removed without changing the rendered component classes.
- On very short mobile viewports, the scroll cue could enter the fixed bottom-navigation area. A `max-height: 600px` rule now hides that decorative cue only in that constrained case.
- Protected Hero anchor percentages and navigation geometry remain unchanged.

This was a source-level responsive audit. No browser/device render was available in this execution environment.


## 2026-10-02 Bottom Navigation Responsive Tuning

- Reduced the fixed Bottom Navigation frame height slightly from `6.4rem` to `6.1rem`.
- Kept width, horizontal positions, icon sizes, and the existing frame asset unchanged.
- This is a small vertical compaction only, intended to recover a little viewport space on mobile without changing the established navigation proportions.

Verification: source-level only. No browser/device render verification was available in this execution environment.
The Bottom Navigation was compacted further after the first 6.1rem adjustment was visually imperceptible: fixed height is now `5.8rem`. Width and horizontal geometry remain unchanged.


## 2026-10-02 Vercel Deployment Trigger

- Added a documentation-only commit to retrigger the GitHub → Vercel Production deployment pipeline.
- No application source, styling, assets, or runtime behavior changed in this trigger commit.


## 2026-10-02 Cleanup Pass

- Removed the remaining dead global `.garfilas-glow-button` CSS block. The active CTA is owned by `GlowButton.tsx` and its dedicated sweep/star selectors.
- Consolidated the duplicate `hero-product-name` CSS definition into one active rule while preserving its current animation and visual properties.
- Synchronized architecture documentation with the removal of the no-op `SiteBackground` component and current Hero responsive anchors.

Verification: source-level only. No browser/device render verification was available in this execution environment.


## 2026-10-02 Current Source Synchronization

The following values describe the active source and supersede older historical calibration notes when reading the repository's present state:

- Hero mascot/orbit anchor: `27.5%`.
- Hero copy anchor: `51.3%`.
- Hero CTA anchor: `73.6%`.
- Hero scroll cue anchor: `80.5%`.
- Short-height guard: hide the decorative scroll cue at `max-height: 600px`.
- Bottom Navigation fixed height: `5.8rem`.
- The no-op `SiteBackground.tsx` component is removed; current ambient ownership is the global body gradient plus the fixed particle engine.
- `GlowButton` no longer exposes the unused `id` prop.
- Reduced-motion rules are consolidated into one active CSS block.

Verification state:
- GitHub source verification: completed.
- Latest Production deployment for the CSS consolidation: READY.
- Browser/device render verification: pending because no browser automation/render environment is available in this execution context.

## 2026-10-02 Repository Hygiene Cleanup

- Root README structure documentation is now aligned with the actual repository and no longer claims an active `components/layout/` directory.
- `Hero.tsx` indentation was normalized as a source-hygiene change only.
- No runtime visual behavior was intentionally changed in this pass.

Verification: GitHub source-level only; no browser/device render verification.


## 2026-10-02 Font Variable Cleanup

- Audited the three `next/font/google` definitions against their active CSS consumers.
- Confirmed Cormorant Garamond and Great Vibes variables are consumed by the LASAGNA and slogan styles.
- Confirmed the Vazirmatn generated variable was attached to the document but the active CSS instead hard-coded the same font family through a separate `--font-vazir` variable.
- Updated `--font-vazir` to resolve through the generated `--font-vazirmatn` variable, removing the duplicated font-family declaration while preserving the existing `font-family:var(--font-vazir)` consumer and fallback stack.
- No font weight, size, typography geometry, Hero anchors, CTA, Bottom Navigation, particle engine, assets or dependencies were changed.

Verification: GitHub source re-read after the change. Browser/device render verification remains unavailable in this execution environment.


## 2026-10-02 CTA Deployment Sync

- Restored reliable inline rendering for the bilingual CTA text after the shared global menu selector caused the Menu styling to disappear and the Persian منو rendering to remain incorrect.
- Current CTA text styling is defined directly on the two bilingual spans in GlowButton.tsx, preserving the same gradient, stroke and glow while keeping proportional Persian/Latin sizing.
- This commit is also a deployment trigger so the GitHub to Vercel integration can pick up the latest application source.

Verification: GitHub source re-read after the change. Production deployment must be confirmed separately.


## 2026-10-02 CTA Deployment Trigger

- The latest CTA Persian styling fix is committed on `main`.
- A documentation-only commit is being used to retrigger the GitHub to Vercel production deployment because the latest source commit did not automatically advance Production.
- No additional UI or animation changes are included in this deployment trigger.


## 2026-10-02 CTA Persian Style and Deployment Issue

- `Menu` is now rendering correctly in Production.
- Persian `منو` remains visually incorrect despite restoring the intended Vazirmatn font family.
- The latest Persian adjustment was made in `components/ui/GlowButton.tsx`; the font family remains `var(--font-vazir)`, resolving to generated `--font-vazirmatn`.
- Therefore the remaining issue is tracked as a style/rendering treatment issue, not a missing-font issue.

### Deployment issue
- GitHub → Vercel deployment has repeatedly lagged behind rapid commits.
- A documentation-only trigger previously advanced Production successfully, but subsequent source commits again required verification.
- Latest Persian source commit: `eb94204dd92074ee99636ab58cf4b6ec79eee69d`.
- Never assume the latest GitHub commit is on Production. Verify the Vercel Production deployment commit SHA before visual testing.

### Next-session rule
1. Verify Vercel Production commit first.
2. If Production is behind `main`, trigger deployment through the existing GitHub → Vercel integration.
3. Only after deployment is READY, inspect/fix Persian `منو` styling.
4. Do not change `Menu`, particles, Hero geometry, Bottom Navigation, or CTA animation while solving the Persian text issue.


## 2026-10-02 CTA Persian/English Style and Deployment Status

- Current approved behavior: the English `Menu` styling is visually correct in Production.
- Persian `منو` is still under correction. The intended target is to use the same visual treatment as `Menu` while preserving the natural proportional differences of the Persian Vazirmatn glyphs.
- The Persian font pipeline itself is not missing: `GlowButton.tsx` uses `var(--font-vazir)`, which resolves through the generated Vazirmatn variable.
- Several attempts that changed the Persian text treatment caused the perceived font/style to change. Therefore the next correction must preserve the existing font family, weight and proportional sizing and adjust only the visual treatment required to match `Menu`.
- Do not modify `Menu`, CTA sweep, stars, Hero geometry, particles, Bottom Navigation, or unrelated typography while solving this issue.

### Deployment status

- GitHub → Vercel has repeatedly lagged behind rapid source commits.
- A documentation-only trigger has previously been sufficient to advance Production.
- For the current session, **do not trigger a deployment automatically**. The user explicitly requested that deployment not be performed while this style issue is being documented.
- Before any future visual acceptance check, verify the Vercel Production commit SHA against the intended GitHub commit. Never assume `main` is live.

### Next-session rule

1. Read the current `GlowButton.tsx` before editing.
2. Treat the current English `Menu` styling as protected.
3. Restore the Persian `منو` to the same visual style system as `Menu`, without changing the Vazirmatn font family or its proportional sizing.
4. Do not deploy until the user explicitly asks for deployment.
5. After deployment is explicitly requested, verify Production reaches READY before visual testing.

