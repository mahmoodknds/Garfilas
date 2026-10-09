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
- [x] Supplied Garfilas wordmark SVG integrated
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
- [x] Reduced-motion support

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
- [ ] Production deployment verification

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

Status: 🟡 In Progress

- [ ] Metadata review
- [ ] OpenGraph
- [ ] Twitter Cards
- [ ] JSON-LD
- [ ] Sitemap
- [ ] Robots
- [ ] Canonical URLs

# PERFORMANCE

Status: 🟡 In Progress

- [ ] Audit the 1.86 MB `public/assets/brand/garfilas-reference-logo.svg`: it embeds a 2172×724 PNG in base64; reduce transfer size without changing the visible logo.
- [ ] Verify WebP optimization and dimensions
- [ ] Verify image loading priority
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
- [ ] Vercel production verification (blocked by Vercel deployment rate limit; do not create trigger-only commits)
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

- [x] Reconcile `docs/PROJECT_STRUCTURE.md` with the current `main` tree, including the dormant Menu prototype and `/blank` background test route.
- [x] Remove `public/assets/menu/garfilas-card-frame.webp`, confirmed unused because `MenuCardFrame.tsx` renders the frame as SVG.
- [x] Update architecture notes to remove references to the deleted `lib/` and `components/layout/` directories and deleted standalone animation stylesheet.
- [ ] Audit embedded raster data in the SVG wordmark and optimize it without visual redesign.
- [ ] Verify the isolated `/blank` background route in a real browser at mobile and desktop sizes.

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


## 2026-10-03 Global Background Test

- [x] Add a blank `/blank` route using the same global background.
- [x] Keep the particle engine independent from Hero foreground content.
- [ ] Browser-verify the blank background route across mobile and desktop.

## 2026-10-02 CTA / Deployment Hold

- [ ] Match Persian `منو` visual treatment to English `Menu` while preserving Vazirmatn font family, weight and proportional sizing.
- [x] Confirm English `Menu` is currently visually correct.
- [x] Document the GitHub → Vercel deployment lag.
- [x] Put deployment on hold until explicitly requested by the user.
- [ ] After explicit deployment request, verify Production commit SHA and READY state before visual acceptance.

