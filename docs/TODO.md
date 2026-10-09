# TODO.md

## Garfilas Development Backlog

Only unfinished work belongs here. Completed work is recorded in the session/changelog documentation.

---

# Current Project Status

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Current priority: **First-page Hero visual completion**
- Last Updated: 2026-10-09

# HIGH PRIORITY

## Hero Section

Status: 🟡 **Visual calibration in progress**

### Completed

- [x] Native Hero composition
- [x] Temporary Hero WebP integrated
- [x] Garfilas wordmark raster extracted from SVG and delivered with `next/image`
- [x] Homepage mascot image moved to `next/image` with responsive sizing and priority loading
- [x] Add a semantic, screen-reader-visible homepage `h1` without changing the visual lockup
- [x] Old slogan SVG dependency removed
- [x] Slogan rendered as HTML text
- [x] LASAGNA HTML lockup
- [x] LASAGNA side lines
- [x] Italian flag inline accent
- [x] Native CTA
- [x] CTA bilingual label `منو Menu`
- [x] CTA Persian label positioned on the right
- [x] CTA Persian color/light aligned with English treatment
- [x] CTA/slogan vertical spacing increased
- [x] Mobile slogan moved slightly upward (`margin-top:.60rem`) without changing other Hero elements
- [x] CTA star accents refined to multi-layer twinkle/glow animation
- [x] CTA Light Sweep refined to narrow 3s white-gold sweep with restrained orange-gold fringe
- [x] CTA vertical top/bottom fade added
- [x] CTA sweep exit shortened to avoid lingering
- [x] CTA neon breathe timing set to 2s
- [x] Scroll cue implemented
- [x] Scroll arrows changed to point upward
- [x] Short-viewport scroll cue guard added at `max-height:600px`; current anchor is `top:80.5%`
- [x] Native Bottom Navigation
- [x] Bottom Navigation center decorative dots removed
- [x] Bottom Navigation center button calibration locked at `50.671875%`
- [x] Extra Hero rings/halos removed for current layout calibration
- [x] Extra background construction/grid lines removed for current layout calibration
- [x] Background architecture temporarily deferred
- [x] GARFILAS electrical-fault animation cycle slowed to 15s
- [x] Responsive foundation
- [x] Unified Hero vertical composition across mobile, tablet and desktop
- [x] Reduced-motion support for CSS motion; particle engine now skips its animation when `prefers-reduced-motion` is enabled

### Remaining

#### Foreground Layout

- [ ] Finalize temporary Hero artwork scale and vertical position
- [ ] Finalize single Hero neon-ring size, offset and glow
- [ ] Finalize vertical spacing between artwork, logo, lockup, slogan, CTA and navigation
- [ ] Verify the foreground reads as one proportional composition from Hero to Bottom Navigation
- [ ] Verify upward scroll cue position against latest reference

#### Logo and Lockup

- [ ] Match logo neon/bloom intensity to reference
- [ ] Match logo gold/orange color balance
- [ ] Match LASAGNA font, size and letter spacing to reference
- [ ] Match LASAGNA side-line length, thickness and spacing
- [ ] Match Italian flag width/height, taper and end fade
- [ ] Match slogan font, size, color, glow and spacing

#### Navigation and CTA

- [ ] Finalize CTA width/height/radius/glow against reference
- [ ] Match Bottom Navigation outer pill geometry
- [ ] Match three navigation button sizes and spacing
- [ ] Match center navigation button elevation/overlap without changing the locked vertical position unless explicitly requested
- [ ] Match navigation borders and glow

#### Background and Final Hero Asset

- [ ] Rebuild background composition only after foreground placement is accepted
- [ ] Reintroduce architectural/building motifs based on direct reference comparison
- [ ] Replace temporary Hero artwork with final asset
- [ ] Recalibrate Hero ring after final artwork replacement

#### Verification

- [ ] Final mobile visual acceptance
- [ ] Final cross-viewport visual verification of the unified Hero composition
- [x] Local production build verification
- [x] Production deployment created successfully for latest source commit; visual/browser verification remains pending.

## Landing Page Supporting Sections

Status: ⚪ **Deferred**

Do not expand these sections until the first-page Hero is accepted.

- [ ] Featured Products final polish
- [ ] Story final polish
- [ ] Why Garfilas
- [ ] Secondary CTA
- [ ] Footer

# DESIGN SYSTEM

Status: 🟡 In Progress

- [ ] Finalize colors
- [ ] Finalize typography
- [ ] Finalize radius
- [ ] Finalize shadows/glow
- [ ] Finalize blur
- [ ] Finalize motion
- [ ] Finalize icons
- [ ] Finalize spacing
- [ ] Finalize responsive grid

# SEO

Status: 🟢 Core metadata complete; structured data is deferred until verified business/menu facts are finalized.

- [x] Metadata review: title template, canonical URL, and homepage description
- [x] OpenGraph metadata (without a fabricated share image)
- [x] Twitter Card metadata (summary card; no unverified image asset)
- [ ] JSON-LD (defer until structured business/menu facts are finalized)
- [x] Sitemap: homepage only
- [x] Robots directives
- [x] Canonical homepage URL

# PERFORMANCE

Status: 🟡 In Progress

- [x] Verify Next.js optimized wordmark response sizing/format and compare transparency/edge quality against the original (user-confirmed).
- [x] Verify Next.js optimized Hero mascot response sizing and rendered quality (user-confirmed).
- [x] Verify optimized image formats and dimensions (covered by user-confirmed image-response review).
- [x] Verify priority loading for above-the-fold Hero images.
- [ ] Lazy-load non-critical assets
- [ ] Review font loading
- [ ] Bundle analysis
- [ ] Lighthouse verification

# TESTING

Status: ⚪ Planned

- [ ] Unit tests
- [ ] Component tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Mobile viewport verification
- [ ] Desktop viewport verification

# DEPLOYMENT

Status: 🟡 In Progress

- [x] Local production build (previously verified; rerun after the next runtime-source change)
- [x] Vercel deployment verification: source commit `7eec60c99358b7fdf625e8cf9b80c20c9c8beb3f` reached READY and its GitHub Actions lint/build workflow passed. Browser/device visual verification remains pending.
- [ ] Environment variables review
- [ ] Domain setup
- [ ] SSL
- [ ] Monitoring

# FUTURE PRODUCT SYSTEMS

Status: ⚪ Planned

These remain out of the current Hero-calibration scope. A menu-card prototype exists under `components/sections/Menu/`, but it is not mounted by the homepage and is not production-ready.

## Menu
- [ ] Categories
- [ ] Product List
- [ ] Product Details
- [ ] Search
- [ ] Filters
- [ ] Sorting

## Shopping Cart
- [ ] Cart Store
- [ ] Cart Drawer
- [ ] Quantity Controls
- [ ] Coupon
- [ ] Notes

## Checkout
- [ ] Address
- [ ] Delivery Time
- [ ] Payment
- [ ] Order Summary
- [ ] Success Page

## Authentication / User Panel
- [ ] Login
- [ ] Register
- [ ] OTP
- [ ] Profile
- [ ] Orders
- [ ] Favorites
- [ ] Addresses
- [ ] Notifications

## Admin Panel
- [ ] Dashboard
- [ ] Products
- [ ] Orders
- [ ] Customers
- [ ] Analytics
- [ ] Discounts
- [ ] Reports

# DOCUMENTATION

Status: 🟢 **Synchronized**

- [x] Project State
- [x] AI Context
- [x] TODO
- [x] Changelog
- [x] Architecture
- [x] Coding Rules
- [x] Decisions
- [x] Garfilas Bible
- [x] Session Log

# Repository Cleanup (2026-10-09)

- [x] Reconcile `docs/PROJECT_STRUCTURE.md` with the active route tree and dormant Menu prototype; the temporary `/blank` route has been removed.
- [x] Remove `public/assets/menu/garfilas-card-frame.webp`, confirmed unused because `MenuCardFrame.tsx` renders the frame as SVG.
- [x] Update architecture notes to remove references to the deleted `lib/` and `components/layout/` directories and deleted standalone animation stylesheet.
- [x] Extract the embedded wordmark raster to PNG and switch to responsive `next/image` delivery without visual redesign.
- [x] Removed the temporary `/blank` route after the background review; no separate route verification remains.
- [ ] Verify that reduced-motion preference suppresses all decorative particle movement.

# Exact Next Work

1. Verify the current deployed Hero against the latest reference.
2. Finalize temporary Hero size, position and single neon ring.
3. Finalize proportional vertical spacing from Hero through scroll cue above Bottom Navigation, using the current calibrated CTA and arrow positions as protected values.
4. Calibrate LASAGNA typography and side lines.
5. Calibrate Italian flag proportions, taper, fade and glow.
6. Calibrate slogan typography, size, color and spacing.
7. Refine CTA geometry only if reference comparison shows a mismatch; preserve approved CTA behavior. Do not change the current CTA position while calibrating the slogan/arrows.
8. Precisely reproduce Bottom Navigation geometry and proportions without moving the locked center button unless explicitly requested.
9. [x] Establish one global site background system shared across all pages and sections.
10. Replace the temporary Hero artwork and recalibrate its ring.
11. Validate the unified composition across mobile, tablet and desktop.
12. [x] Run local production build verification.
13. Stop before adding new website scope.

## 2026-10-02 Responsive Geometry Correction Note

- [x] Unify the Hero vertical composition across mobile, tablet and desktop.
- [x] Preserve the current source anchors: mascot/orbit `27.5%`, copy `51.3%`, CTA `73.6%`, scroll cue `80.5%`.
- [x] Add a short-height guard for the decorative scroll cue at `max-height:600px`.
- [ ] Verify fresh desktop/tablet production renders after the correction.

## 2026-10-02 Full Mobile Geometry Unification

- [x] Remove the separate tablet/desktop Hero sizing path.
- [x] Share the current Hero geometry across desktop.
- [x] Remove the unused desktop composition wrapper from Hero markup.
- [ ] Verify a fresh desktop production render at 1916×1023 or equivalent.
- [x] Run production build verification (prior verification; repeat after source changes).

## 2026-10-02 Global Background Architecture

- [x] Keep the body atmosphere and particle engine global.
- [x] Remove the no-op `SiteBackground.tsx` wrapper.
- [ ] Verify the deployed result while scrolling through Hero and the next sections.

## 2026-10-02 Global Background Boundary Fix

- [x] Remove the obsolete Hero-owned ambient scene markup.
- [x] Keep the active global atmosphere in the body background and fixed particle engine.
- [ ] Verify a fresh 1440×900 production render and confirm the first-section boundary is visually continuous.
- [x] Run production build verification (prior verification; repeat after source changes).


## 2026-10-03 Global Background Test (historical)

- [x] Added a blank `/blank` route using the same global background.
- [x] Kept the particle engine independent from Hero foreground content.
- [x] Removed the temporary route on 2026-10-09 after the background test was accepted; no active `/blank` route remains.

## 2026-10-02 CTA / Deployment Hold

- [ ] Match Persian `منو` visual treatment to English `Menu` while preserving Vazirmatn font family, weight and proportional sizing.
- [x] Confirm English `Menu` is currently visually correct.
- [x] Document the GitHub → Vercel deployment lag.
- [x] Put deployment on hold until explicitly requested by the user.
- [ ] After explicit deployment request, verify Production commit SHA and READY state before visual acceptance.

## Authoritative next-step checkpoint (2026-10-10)

This section supersedes older deployment notes in this backlog wherever they conflict with the current state below.

### Current state
- [x] Cleanup PR #8 merged into `main` (merge commit `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`).
- [x] Canonical URL configured as `https://garfilas.ir` in `config/site.ts`.
- [x] Core metadata, Open Graph/Twitter summary metadata, robots, and sitemap are in the merged source.
- [ ] Do not mark the visual pass complete until browser/device checks are performed on the actual deployed build.
- [ ] Do not mark `garfilas.ir` live until DNS, hosting attachment, and SSL are verified.

### Final quality pass: next work
1. [ ] Verify production deployment commit SHA and READY state before visual comparison.
2. [ ] Compare the live Hero to the latest reference on mobile, tablet, and desktop.
3. [ ] Check short-height layouts, scroll cue, scrolling continuity, and particle density/performance.
4. [ ] Verify `prefers-reduced-motion: reduce` suppresses decorative particle movement and other nonessential motion.
5. [ ] Run fresh production build and lint on the current source.
6. [ ] Review font loading, non-critical assets, image priority, and Lighthouse findings; optimize only demonstrated bottlenecks.
7. [ ] Validate generated canonical, `robots.txt`, and `sitemap.xml` output.
8. [ ] Confirm cPanel/DirectAdmin Node.js support and startup requirements before deciding the deployment method.
9. [ ] Update this checklist with evidence after each verification; do not mark a check complete from assumption.

### Guardrails
- Preserve the approved CTA sweep/twinkle behavior, Hero layout anchors, Bottom Navigation geometry, and current particle behavior unless a reproducible defect is confirmed.
- Do not add new product sections or cart/auth/checkout scope during this pass.
- Do not change DNS before the target host and deployment plan are confirmed.

# Current Handoff Update: 2026-10-10

This section supersedes older deployment-status entries above where they refer to earlier commits or verification.

## Current verified baseline

- [x] Cleanup PR #8 merged into `main`: `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`.
- [x] Latest known Vercel Production deployment checked READY for that merge commit.
- [x] Canonical URL centralized at `https://garfilas.ir` in `config/site.ts`.
- [ ] Browser/device visual acceptance of the deployed Hero and responsive composition.
- [ ] Confirm reduced-motion behavior in a real browser.
- [ ] Run current lint/build verification against the exact release commit.
- [ ] Review font loading, non-critical asset loading, and Lighthouse/performance findings.
- [ ] Verify live `robots.txt`, `sitemap.xml`, canonical metadata, DNS, and SSL once the intended host is connected.
- [ ] Confirm cPanel/DirectAdmin type, Node.js support/version, and available Terminal/SSH/File Manager access.
- [ ] Prepare and test the hosting deployment path after the host capability check.

## Final QA guardrails

- Fix only issues reproduced during inspection; do not refactor for tidiness alone.
- Preserve approved Hero geometry, CTA animation, particle density/timing, and Bottom Navigation geometry.
- Do not recreate the temporary `/blank` route.
- Do not treat the dormant Menu prototype as shipped functionality.
- Do not change DNS or assume `garfilas.ir` is live merely because it is configured as the canonical URL.
- Do not convert to static export before checking Next.js runtime needs and host Node.js support.

## Exact next task

Perform the final browser/device and performance QA pass on the current deployed source, document reproducible defects, and only then decide whether source changes are needed. Hosting migration follows after the panel/runtime check.
