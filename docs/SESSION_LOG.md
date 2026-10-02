## 2026-10-02 CSS Cleanup

- Audited `app/globals.css` against the active Hero components.
- Removed redundant `filter:none`, `opacity:1`, and `visibility:visible` declarations from `hero-logo-artwork`.
- Removed redundant `display:block` declarations where CSS layout already blockifies the elements.
- Removed stale indentation in the active Hero lockup rules.
- Confirmed `lucide-react` is still actively consumed by Bottom Navigation, so the dependency remains.
- No Hero geometry or animation behavior was intentionally changed.

Verification: GitHub source re-read completed. Local build was not rerun in this execution environment.

## 2026-10-02 Font Loading Cleanup

- Audited app/fonts.ts against the current Hero and CTA consumers.
- Confirmed Noto Kufi Arabic had no active consumer after the CTA typography was unified, so its next/font definition and document-level variable were removed.
- Confirmed Cormorant Garamond is currently used only at weight 300 by the LASAGNA lockup, so unused 500 and 600 weights were removed.
- Kept Great Vibes 400 and Vazirmatn 700, which remain active.
- No rendered geometry, CTA animation, Hero anchors, Bottom Navigation or particle behavior was intentionally changed.
- Deployment remains untouched.

Verification: GitHub source re-read completed. Local build could not be rerun because this execution environment has no external network access.

## 2026-10-02 Documentation Hygiene Continuation

### Scope

Continue cleanup after the source-level responsive/dependency audit without changing runtime UI behavior.

### Changes

- Removed stale architectural wording that treated the deleted `SiteBackground.tsx` wrapper as an active ownership target.
- Synchronized architecture and coding rules with the current global background implementation: `body` atmosphere plus fixed `HeroParticleEngine`.
- Synchronized `PROJECT_STATE.md`, `AI_CONTEXT.md` and `TODO.md` with the active Hero anchors and 15-second GARFILAS neon-fault animation.
- Updated the documentation README to reflect the actual active homepage scope: Hero + Bottom Navigation.
- Recorded the successful local production build verification dated 2026-10-02.
- Preserved historical references in the changelog/session history rather than rewriting past events.

### Verification

- GitHub source re-read after documentation changes.
- No application source, assets, dependencies, Hero geometry, CTA animation or Bottom Navigation behavior changed in this pass.
- No deployment was triggered.


# SESSION_LOG.md

## 2026-10-02 Repository Cleanup Continuation

### Scope

Continue the codebase cleanup without changing Hero or Bottom Navigation visual behavior.

### Implemented

- Removed unused Hero barrel export: `components/sections/Hero/index.ts`.
- Removed unused Bottom Navigation barrel export: `components/sections/BottomNavigation/index.ts`.
- Removed redundant root-level `PROJECT_INFO.md`.
- Removed redundant root-level `PROJECT_STRUCTURE.md`.
- Removed duplicate `docs/PROJECT_INFO.md`.
- Updated `docs/PROJECT_STRUCTURE.md` to match the active repository tree.

### Verification Basis

- Direct repository search confirmed no active imports of either removed barrel export.
- The removed root project documents duplicated or contradicted the canonical documentation under `docs/`.
- No runtime component, asset, styling, or visual calibration file was changed.

### Next Cleanup Target

Continue auditing for stale documentation references and genuinely unused source/assets, while preserving the current Hero and Bottom Navigation behavior.

---

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


### Latest Session: Desktop Hero Stack Correction

**Date:** 2026-10-02

## Scope

Corrected the desktop/tablet Hero after direct review of the supplied `1916×1023px` screenshot.

## Finding

The previous shared percentage-position model was not sufficient on large screens. The enlarged temporary artwork consumed too much vertical space while the copy, CTA and scroll cue retained independent percentage anchors, causing the lower foreground elements to collapse into the Bottom Navigation area.

## Changes

- Added `.hero-lower-stack` for tablet/desktop.
- Stack order is `HeroLogo → CTA → scroll cue`; `HeroLogo` internally contains GARFILAS, LASAGNA, Italian flag and slogan.
- The lower stack begins from the existing `52.8%` copy anchor and lays its elements out in normal flow.
- Mobile remains on the existing absolute-position model so the protected mobile calibration is not disturbed.
- Reduced wide-desktop mascot sizing to `clamp(26rem,30vw,29rem)`.
- Did not change particles, ring behavior, CTA visual treatment, Bottom Navigation geometry, or background direction.

## Commits

- `27cdad4ce587eb8b944d89ea0e3cb301222eb8a1` — fix(hero): stack desktop lower composition
- `1708a6aa9e7a4d91c72e385f2fc29336020bf6d7` — fix(hero): stack desktop lower composition

## Verification State

- Direct screenshot evidence reviewed: completed.
- Source-level correction: completed.
- Fresh production render verification: pending.
- Production build verification: pending.

## Next Actions

1. Review fresh desktop and tablet renders.
2. Confirm mobile remains visually unchanged.
3. Adjust only confirmed geometry mismatches.
4. Run production build verification.


### Latest Session: Full Mobile Geometry Shared Across Viewports

**Date:** 2026-10-02

## Scope

The previous desktop/tablet composition path was removed. The Hero now uses the mobile-calibrated geometry as the shared base across desktop as well.

## Changes

- Removed the min-width:700px Hero sizing/positioning block from app/globals.css.
- Shared Hero geometry now uses the mobile-calibrated values directly, including mascot/ring sizing and the protected anchors 27.5%, 52.8%, 76% and 83.5%.
- Removed the .hero-lower-stack wrapper from the active Hero markup. The Hero copy, CTA and scroll cue are direct siblings of the mascot inside .hero-shell.
- Preserved all existing particle, ring, CTA, logo and Bottom Navigation behavior.

## Verification State

- Source implementation: completed.
- Vercel production deployment: queued/building for the latest commits at the time of this update.
- Fresh rendered desktop screenshot: not available in the current execution environment.
- Production build verification: pending.

## Commits

- ec21653f0fbae0cc0d42503f3c146125e7471647 — fix(hero): unify desktop with mobile composition
- 32b62cb9a8c96c866147f01ff13f3a5aec9419f1 — fix(hero): remove desktop-only composition wrapper


## 2026-10-02 Desktop Geometry Match — Final Direction

The desktop-specific Hero flow override was removed. Desktop now uses the same mobile-first Hero geometry directly from the shared base CSS, with no separate desktop composition block.

**Commit:** `2f7b60c12979fa994cabe79f43ecf850264c1c35`


## 2026-10-02 Desktop Geometry Match

The desktop-specific Hero flow override was removed. Desktop now uses the same mobile-first Hero geometry directly from the shared base CSS, with no separate desktop composition block.

**Commit:** `2f7b60c12979fa994cabe79f43ecf850264c1c35`


### Latest Session: Global Site Background System

**Date:** 2026-10-02

## Scope

The background architecture was changed so the site uses one continuous ambient environment across the full application rather than a Hero-only background.

## Changes

- Added `components/layout/SiteBackground.tsx` and mounted it from `app/layout.tsx`.
- Moved the existing Hero ambient scene into the global fixed background layer.
- Kept the existing global body gradient and fixed particle engine in place.
- Removed the Hero-owned ambient scene markup and its local style block from `Hero.tsx`.
- Kept Hero foreground elements and their calibrated geometry unchanged.
- Removed the opaque Hero-only background base from the global layer so the shared body atmosphere remains visible underneath it.

## Architecture Rule

Future pages and sections should remain transparent by default and render over the same global background. A new full-page background should not be introduced per page without an explicit architectural decision.

## Verification State

- Source refactor: completed.
- Fresh production visual verification: pending.
- Production build verification: pending.

## Latest Commits

- `4d674d2bbfd3704b992d481f727611c1a30fefd3` — add global ambient background component
- `046924c975c209f8416e2038d6a4424811b8f0b7` — detach Hero from local ambient scene
- `db718112a4c136674865f8357a46f740e4dc077c` — mount background globally
- `f63139b3948bfe371a807d480e73dee5336b476f` — preserve shared body atmosphere


### Latest Session: Remove Desktop Hero Background Boundary

**Date:** 2026-10-02

## Finding

Direct review of the supplied 1440×900 render showed that the ambient glow was still owned by the Hero itself. Because .hero is a viewport-height, overflow-clipped section, that local glow could terminate at the Hero boundary even though the rest of the ambient scene had already been moved to the global background.

## Change

- Removed the Hero-local hero-glow-main element from Hero.tsx.
- Added the same ambient glow to SiteBackground.tsx as a fixed global layer.
- Preserved the existing glow size, position, color, blur and breathing animation so this is an ownership/compositing fix rather than a visual redesign.
- Kept Hero foreground geometry unchanged.

## Architecture Result

The ambient Hero glow now follows the same global background lifecycle as the heat, dust, sparks and vignette. The Hero no longer owns a large background glow that can be clipped at the end of the first viewport.

## Verification State

- Source change: completed.
- Supplied 1440×900 screenshot: reviewed before change.
- Fresh production render: pending.
- Production build: pending.

## Commits

- 946d2593d8d4b8f3a89d036c804b0a2a29f2dd4a — remove Hero-local ambient glow
- b459891c91c04dc7c44587b0658ba3d910f12c5b — keep Hero glow continuous across sections
- 9eb5982bc88b713e9db4a643bf8771cf00efdb69 — mount ambient glow globally
- c9026194c303c0a1ab5408207022146800ea0355 — remove Hero-local glow styles


## 2026-10-02 Dependency, Asset and CSS Audit

### Findings

- `lucide-react` has an active Bottom Navigation consumer.
- The three `next/font/google` fonts have active Hero consumers.
- Current Hero and Bottom Navigation assets are actively referenced.
- The public screenshot is intentionally retained as reference material.
- No unused npm dependency was confirmed.

### Cleanup

- Deleted the confirmed no-op `components/layout/SiteBackground.tsx`.
- Removed its root-layout import and mount.
- Removed confirmed dead Hero selectors and legacy keyframes.
- Reduced `styles/tokens.css` to active tokens only.
- Moved the mascot blend-mode rule into `app/globals.css`.

### Verification

Source-level audit only. No browser render or local build verification is claimed from this execution environment.


## 2026-10-02 Responsive CSS Audit

### Findings
- The Hero keyframe area had malformed leftover fragments from the earlier dead-CSS cleanup.
- Global `garfilas-glow-button` rules were not consumed by the current `GlowButton.tsx` root element.
- Compact mobile heights can leave insufficient vertical space between the CTA, scroll cue and fixed bottom navigation.

### Changes
- Normalized the active Hero keyframes.
- Removed the dead global CTA block while retaining active sweep/star rules.
- Added a short-height guard at `max-height: 600px` for the scroll cue.
- Kept the protected Hero anchors and bottom-nav geometry unchanged.

### Verification
Source-level only. No browser/device render verification is claimed.


## 2026-10-02 Bottom Navigation Responsive Tuning

### Change
- Reduced `.bottom-nav` height from `6.4rem` to `6.1rem`.
- Preserved the existing width, button geometry, icon sizes, frame asset, and horizontal placement.

### Verification
Source-level only. No browser/device render verification is claimed.
Bottom Navigation follow-up: reduced fixed height from `6.1rem` to `5.8rem` because the first 0.3rem reduction was only ~4.8px and was visually imperceptible. Source-level verification only.


## 2026-10-02 Cleanup Pass

### Changes
- Removed confirmed dead `.garfilas-glow-button` global CSS.
- Merged the duplicate `hero-product-name` definition into one active rule.
- Corrected stale documentation references to the removed `SiteBackground` component and outdated Hero anchors.

### Verification
- Source-level checks confirm one `hero-product-name` definition and no legacy `.garfilas-glow-button` block.
- No browser/device render verification was available in this execution environment.


## 2026-10-02 Cleanup Continuation

### Changes
- Removed the unused `id` prop from `GlowButton` after confirming there were no active callers.
- Consolidated duplicate reduced-motion CSS blocks into one equivalent block.
- Preserved all active CTA, Hero, particle, ring and Bottom Navigation behavior.

### Verification
- Re-read the changed GitHub sources after each commit.
- Confirmed the latest Vercel Production deployment for commit `b2f2c8bff585d4f78e8018f67165d8861dc3fde8` is READY.
- No browser/device render verification was available.

## 2026-10-02 Repository Hygiene Cleanup

### Changes

- Corrected the root README structure map to match the active repository tree.
- Normalized Hero component indentation only; rendered structure and class hooks remain unchanged.

### Verification

- Re-read the updated Hero source from GitHub after the change.
- No particle, responsive geometry, CTA, Bottom Navigation, dependency, or asset changes were made.
- Browser/device render verification remains unavailable in this execution environment.


## 2026-10-02 Font Variable Cleanup

- Audited the three `next/font/google` definitions against their active CSS consumers.
- Confirmed Cormorant Garamond and Great Vibes variables are consumed by the LASAGNA and slogan styles.
- Confirmed the Vazirmatn generated variable was attached to the document but the active CSS instead hard-coded the same font family through a separate `--font-vazir` variable.
- Updated `--font-vazir` to resolve through the generated `--font-vazirmatn` variable, removing the duplicated font-family declaration while preserving the existing `font-family:var(--font-vazir)` consumer and fallback stack.
- No font weight, size, typography geometry, Hero anchors, CTA, Bottom Navigation, particle engine, assets or dependencies were changed.

Verification: GitHub source re-read after the change. Browser/device render verification remains unavailable in this execution environment.


## 2026-10-02 CTA Persian Style / Deployment Follow-up

- Production `Menu` is visually correct.
- Persian `منو` is still not correct.
- Restoring the Vazirmatn font family alone did not restore the desired appearance, so the remaining problem is tracked as text styling treatment rather than font loading.
- Latest Persian source commit: `eb94204dd92074ee99636ab58cf4b6ec79eee69d`.

### Deployment problem
- GitHub → Vercel has not consistently promoted every rapid `main` commit to the latest Production deployment.
- Future sessions must check the Production deployment commit SHA before judging whether a visual change reached the live site.

### Next step
- First restore/confirm deployment.
- Then compare Persian `منو` styling against the known-good pre-regression treatment.
- Keep `Menu` untouched because its current styling is correct.


## 2026-10-02 CTA Persian Style Regression / Deployment Hold

### Current finding

- English `Menu` is currently correct.
- Persian `منو` is still visually different from the intended target.
- Restoring the Vazirmatn font family alone did not restore the desired appearance.
- The target is **same visual styling as Menu, with proportional sizing preserved for Persian glyphs**.
- The current problem is therefore tracked as a CTA text styling regression, not a missing-font problem.

### Deployment issue

- GitHub → Vercel has not consistently promoted every rapid `main` commit.
- Documentation-only deployment triggers have previously been used to advance Production.
- **Deployment is intentionally on hold for this issue.** No deployment should be triggered unless the user explicitly requests it.

### Protected elements

While fixing Persian `منو`:
- Keep English `Menu` unchanged.
- Keep CTA sweep and star animations unchanged.
- Keep Hero geometry unchanged.
- Keep particle engine unchanged.
- Keep Bottom Navigation unchanged.

### Next action

Compare the current Persian span against the known-good English span and change only the Persian visual treatment needed to make them share the same styling system. Preserve `var(--font-vazir)`, the existing Vazirmatn weight and proportional sizing.

Verification remains source-level unless a browser/device render is explicitly available.



## 2026-10-02 Vercel Git Trigger Test

- Added this documentation-only marker commit to test whether a fresh `main` push now creates a Vercel Production deployment after the Git repository reconnection.
- No application runtime, asset, dependency, Hero geometry, CTA styling, particle behavior, or Bottom Navigation behavior was changed.


## 2026-10-02 Vercel Reconnection Trigger

- GitHub repository connection was reconnected in Vercel.
- Added a fresh documentation-only commit on `main` to verify that the repaired Git integration now creates a new Production deployment.
- No application source, assets, dependencies, Hero geometry, CTA styling, particle behavior, or Bottom Navigation behavior changed.


## 2026-10-03 Global Background Test Page + Cleanup Continuation

### Background test

- Added a blank route at `/blank` containing no Hero foreground or Bottom Navigation.
- The blank page keeps the same document-level atmosphere and fixed particle layer, allowing the global background to be inspected independently from Hero content.
- Refactored `HeroParticleEngine.tsx` so it can use a dedicated background anchor on the blank page while continuing to use the Hero ring on the main page.
- No particle counts, timings, colors or motion behavior were intentionally changed.

### Cleanup continuation

- Continued source cleanup by removing the particle engine's hard dependency on Hero foreground nodes.
- Preserved the one-piece global background architecture.

### Verification

- Source changes committed and re-read from GitHub.
- Local production build was not run in this execution environment.
- Browser render verification of `/blank` remains pending.
