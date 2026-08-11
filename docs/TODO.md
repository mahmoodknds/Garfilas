# TODO.md

## Garfilas Development Backlog

Only unfinished work belongs here. Completed work is recorded in `SESSION_LOG.md` and `CHANGELOG.md`.

---

# Current Project Status

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Current priority: **First-page Hero visual completion**
- Latest implementation commit: `5127e18`
- Last Updated: 2026-08-12

---

# HIGH PRIORITY

## Hero Section

Status: 🟡 **Visual calibration in progress**

### Completed

- [x] Native Hero composition
- [x] Final Garfield WebP integrated
- [x] Exact Garfilas wordmark asset integrated
- [x] Exact slogan asset integrated
- [x] Dark luxury background
- [x] CSS neon rings and glow
- [x] Native CTA
- [x] CTA sparkle accents
- [x] Scroll cue
- [x] Native Bottom Navigation
- [x] Responsive foundation
- [x] Reduced-motion support
- [x] Dedicated SVG-based Bottom Navigation frame
- [x] Frame moved to a non-layout background layer

### Remaining

- [ ] Compare the latest frame geometry against the original reference screenshot
- [ ] Correct the frame's custom central notch/curve if still visually different
- [ ] Make overall Hero/artwork composition slightly smaller
- [ ] Match three navigation button sizes and spacing to reference if required after frame correction
- [ ] Match center navigation button elevation/overlap to reference if required
- [ ] Match navigation borders, glow and active indicator to reference
- [ ] Finalize CTA width/height/radius/glow against reference
- [ ] Finalize vertical spacing between artwork, logo, slogan, CTA and navigation
- [ ] Final mobile visual acceptance
- [ ] Desktop responsive calibration

---

## Landing Page Supporting Sections

Status: ⚪ **Deferred**

Do not expand these sections until the first-page Hero is accepted.

- [ ] Featured Products final polish
- [ ] Story final polish
- [ ] Why Garfilas
- [ ] Secondary CTA
- [ ] Footer

---

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

---

# SEO

Status: 🟡 In Progress

- [ ] Metadata review
- [ ] OpenGraph
- [ ] Twitter Cards
- [ ] JSON-LD
- [ ] Sitemap
- [ ] Robots
- [ ] Canonical URLs

---

# PERFORMANCE

Status: 🟡 In Progress

- [ ] Verify WebP optimization and dimensions
- [ ] Verify image loading priority
- [ ] Lazy-load non-critical assets
- [ ] Review font loading
- [ ] Bundle analysis
- [ ] Lighthouse verification

---

# TESTING

Status: ⚪ Planned

- [ ] Unit tests
- [ ] Component tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Mobile viewport verification
- [ ] Desktop viewport verification
- [ ] Production build after latest visual calibration

---

# DEPLOYMENT

Status: 🟡 In Progress

- [ ] Local production build after latest commit
- [ ] Vercel Preview verification for `5127e18`
- [ ] Vercel production verification
- [ ] Environment variables review
- [ ] Domain setup
- [ ] SSL
- [ ] Monitoring

---

# FUTURE PRODUCT SYSTEMS

Status: ⚪ Planned

These are explicitly out of the current Hero-calibration scope.

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

---

# DOCUMENTATION

Status: 🟢 **Synchronized**

- [x] Project State
- [x] Session Log
- [x] AI Context
- [x] Changelog
- [x] Architecture
- [x] Coding Rules
- [x] Decisions
- [x] Garfilas Bible

---

# Exact Next Work

1. Review Vercel Preview for commit `5127e18`.
2. Compare only the Bottom Navigation frame against the original mobile reference.
3. Correct frame geometry if needed.
4. Avoid changing the three controls unless comparison requires it.
5. Run `npm run build` after visual acceptance.
6. Refine Hero/artwork scale and remaining CTA/spacing details.
7. Validate desktop.
8. Stop before adding new website scope.

---

Last Updated: 2026-08-12
