# AI_CONTEXT.md

## Garfilas AI Working Memory

**Version:** 2.7.0  
**Last Updated:** 2026-10-09

---

# Purpose

Permanent working memory for AI collaborators. Read this before changing code or visual design. `docs/GARFILAS_BIBLE.md` is the product/brand source of truth.

# Current Project

- Project: Garfilas
- Type: Premium online Italian lasagna restaurant
- Repository: `mahmoodknds/Garfilas`
- Deployment: Vercel
- Version: v0.1.0
- Sprint: 0.4
- Scope: first-page Hero visual completion

# Visual Source of Truth

The user's supplied mobile reference screenshot is the Hero visual source of truth. It is a composition reference, not a background image. Never approximate important visual details from memory when the reference is available.

# Current Hero Calibration Strategy

The foreground layout is being stabilized before background reconstruction.

- Current Garfield/lasagna Hero artwork is **temporary**.
- For now, calibrate only the temporary Hero size, vertical position and the single neon ring around it.
- Do not treat the current Hero artwork as final brand geometry.
- Extra rings, halos and duplicate circular effects were removed because they made the temporary Hero visually crowded.
- Extra background construction/grid lines were removed.
- Architectural/building motifs are deferred until foreground placement is accepted.
- Do not reintroduce background complexity while Hero, logo stack, slogan, CTA and scroll cue are still being positioned.

# Current Hero Order

1. Temporary Garfield + lasagna artwork
2. One controlled circular orange/gold neon ring
3. GARFILAS wordmark
4. LASAGNA + two side lines
5. Italian flag accent
6. `Layers of Love, Taste of Italy`
7. `منو Menu` neon CTA
8. Upward-pointing scroll cue
9. Pill Bottom Navigation

Treat this as one proportional vertical composition anchored above the Bottom Navigation. Avoid blind independent percentage moves that improve one item while breaking the stack.

## Responsive Composition Rule

- Mobile, tablet and desktop share the same Hero vertical composition.
- Shared vertical anchors are mascot/orbit `27.5%`, copy `51.3%`, CTA `73.6%`, and scroll cue `80.5%`.
- Tablet and desktop may keep breakpoint-specific sizing through `clamp()` and width rules; this is sizing adaptation, not a separate composition.
- Do not reintroduce separate tablet/desktop vertical offsets without direct user-requested visual evidence.

# Menu CTA Current State

The CTA is the bilingual `منو Menu` button implemented through `components/ui/GlowButton.tsx`.

Current approved direction:

- Slim pill geometry, premium and restrained.
- Persian `منو` is on the right; English `Menu` is on the left.
- Persian color/light treatment is aligned with the English `Menu` treatment.
- The gap between the slogan and CTA was increased from the previously cramped state.
- Current mobile slogan was moved slightly upward by reducing its `margin-top` from `.72rem` to `.60rem`.
- No other Hero element was changed by the latest slogan adjustment.
- Two small four-point star accents sit symmetrically near the left/right edges.
- Star animation is a multi-layer twinkle/glow, not a simple scale animation. Stars must not jump from outside the button into position and must not resize during the animation.
- CTA has a thin orange/gold neon outline and dark translucent interior.
- Main CTA motion is a narrow Light Sweep running every 3 seconds.
- Sweep is intentionally slim and angled, with a bright white-gold core and restrained orange-gold fringe.
- Sweep exits quickly and must not visibly linger on the button at the end of its pass.
- Sweep has soft horizontal edge transitions and a real vertical mask so its top and bottom fade smoothly.
- Hard vertical edges/lines are not acceptable.
- The CTA's overall neon breathe animation remains at 2 seconds.
- Keep changes localized to `GlowButton.tsx` whenever possible.

# Current Hero Assets

- `public/assets/hero/garfilas-hero-final.webp` (temporary foreground artwork pending replacement)
- `public/assets/brand/garfilas-reference-logo.svg`
- `public/assets/ui/bottom-nav-frame.svg`

GARFILAS geometry must come from the supplied SVG. Do not recreate GARFILAS as HTML text.

The old `public/assets/brand/garfilas-slogan-exact.svg` dependency was removed because it caused a duplicate/broken-image render. The slogan is now real HTML text.

# Lockup Rules

## GARFILAS

- Supplied SVG only.
- Warm orange/gold neon.
- Crisp, readable letterforms.
- Glow must support the SVG, not wash it out.

## LASAGNA

- Separate HTML text.
- Uppercase high-contrast serif treatment.
- Thin horizontal side lines on the same visual axis as the word.
- The word is centered under GARFILAS and kept clearly subordinate to the main wordmark.
- The side lines use a subtle gold/white center highlight and tapered horizontal fade so they read as neon light rather than solid bars.
- Do not apply the GARFILAS electrical-fault animation to LASAGNA.

## Italian Flag

Target the reference closely:

- very thin horizontal strip
- green / white / red thirds
- narrow width and low height
- sharply tapered ends
- subtle fade at both ends
- restrained glow
- subordinate to LASAGNA

## Slogan

Text: `Layers of Love, Taste of Italy`

- Real HTML text, not the removed SVG.
- Script/handwritten italic treatment.
- Warm orange/gold color.
- Smaller than LASAGNA.
- Very restrained glow.
- Continue calibrating size, color, baseline and spacing against the exact reference.
- `line-height` changes alone do not increase visible glyph height; do not repeat that experiment when the target is taller-looking letters.

# Logo Animation

GARFILAS uses an electrical neon-fault animation inspired by a malfunctioning fluorescent tube:

- long stable illumination
- gradual dimming
- irregular partial failures
- near-off moment
- short recovery flickers
- stable return

Latest state:

- Cycle: **15 seconds** in `app/globals.css`.
- Keep the animation independent from LASAGNA and slogan styling.
- Keep `prefers-reduced-motion` support.

# Bottom Navigation Calibration Locks

- Center button vertical position is locked at `50.671875%`.
- Do not change the center button position unless the user explicitly requests it.
- Center button size remains unchanged from the latest approved state.
- Remove/avoid decorative dots beneath the center button.
- Side buttons are independently positioned and should not be moved when calibrating the center control.
- Frame source: `public/assets/ui/bottom-nav-frame.svg`.
- Final geometry is still pending reference acceptance.

# Hero Scroll Cue

- Arrows point upward.
- Treat placement relative to CTA and Bottom Navigation, not arrow rotation alone.
- Verify against the latest mobile reference after the foreground stack is stabilized.

# Technical Files

- `components/sections/Hero/Hero.tsx`
- `components/sections/Hero/HeroLogo.tsx`
- `components/sections/Hero/HeroCTA.tsx`
- `components/ui/GlowButton.tsx`
- `components/sections/BottomNavigation/BottomNavigation.tsx`
- `app/globals.css`
- `styles/tokens.css`

# AI Workflow

1. Read `GARFILAS_BIBLE.md`.
2. Read `PROJECT_STATE.md`.
3. Read `SESSION_LOG.md`.
4. Read `TODO.md`.
5. Inspect current GitHub implementation.
6. Compare against the latest user reference.
7. Make the smallest change that advances the approved target.
8. Do not add background complexity before foreground placement is stable.
9. Update documentation after significant visual changes.

# Current Verification State

- Temporary Hero WebP: integrated
- Temporary Hero size/ring: in calibration
- Extra Hero rings/halos: removed for current calibration
- Extra background lines: removed for current calibration
- Background architecture: deferred until foreground placement is stable
- GARFILAS supplied SVG: completed
- Old slogan SVG dependency: removed
- HTML slogan: implemented; visual acceptance pending
- LASAGNA lockup: implemented; visual acceptance pending
- Italian flag: implemented; visual acceptance pending
- Neon fault animation: implemented and slowed to 15s
- CTA structure: implemented
- CTA bilingual label: `منو Menu`
- CTA Persian/English color treatment: aligned
- CTA/slogan spacing: increased
- CTA star animation and Light Sweep: approved direction, visual acceptance pending
- CTA neon breathe: 2s
- Bottom Navigation: implemented; final calibration pending
- Center navigation button position: locked at `50.671875%`
- Production build: verified locally on 2026-10-02
- Final visual acceptance: pending

# Exact Next Work

1. Verify deployed Hero against latest reference.
2. Finalize temporary Hero size, position and single-ring proportion.
3. Finalize the vertical stack from logo through scroll cue.
4. Calibrate LASAGNA, Italian flag and slogan only through direct reference comparison.
5. Finish Bottom Navigation geometry without moving the locked center button unless explicitly requested.
6. Keep the existing global background architecture stable; only add missing background details after foreground placement is accepted.
7. Replace temporary Hero artwork later and recalibrate its ring.
8. Run production build verification.
9. Validate mobile, then desktop.
10. Do not expand website scope until Hero acceptance.

# Next Chat Continuity

Read these first:

- `docs/GARFILAS_BIBLE.md`
- `docs/PROJECT_STATE.md`
- `docs/SESSION_LOG.md`
- `docs/TODO.md`
- `docs/AI_CONTEXT.md`

Current working priority: stabilize the foreground composition before rebuilding the background.

# 2026-10-02 Current Responsive Geometry

The active source uses one shared Hero composition across mobile, tablet and desktop. Current source anchors are:

- Mascot/orbit: `27.5%`
- Hero copy: `51.3%`
- CTA: `73.6%`
- Scroll cue: `80.5%`
- On very short viewports (`max-height:600px`), the decorative scroll cue is hidden to avoid collision with the fixed Bottom Navigation.
- Bottom Navigation fixed frame height: `5.8rem`.

Older geometry values such as `52.8%`, `76%` and `83.5%` are historical calibration records only and must not be treated as current source values.

# 2026-10-02 Current Background Ownership

The former `SiteBackground.tsx` wrapper was removed because it was confirmed to be a no-op. The active background system is now:

- global `body` gradients for the base atmosphere
- the fixed `HeroParticleEngine` for live particles/sparks
- Hero-local foreground geometry for mascot, ring, logo, CTA and navigation

Do not refer to `SiteBackground.tsx` as an active component. Historical references to it describe an earlier implementation and are not current architecture.

# 2026-10-09 Cleanup Branch Notes

- The temporary `app/blank/page.tsx` route has been removed. Do not reference it as active functionality.
- The particle engine's active anchor is `.hero-orbit-one`; the obsolete blank-page anchor fallback is removed.
- Reduced-motion preference disables the decorative particle engine at mount and disables CSS-based Hero/CTA motion.
- Homepage metadata includes a title template, description, canonical URL, Open Graph metadata, and a Twitter summary card. Next.js generates `/robots.txt` and a homepage-only `/sitemap.xml`.
- JSON-LD remains deferred until the business/menu facts to encode are confirmed.
- Optimized image response sizing/format and visual quality were confirmed by the project owner.
- The cleanup branch is reviewed separately from Production. Build success and Vercel Preview READY do not substitute for final browser/device visual acceptance.
