# 🍝 GARFILAS BIBLE

## Official Source of Truth

### Version: 2.3.0

---

# Project

**Name**
Garfilas (گارفیلاز)

**Type**
Premium Online Italian Lasagna Brand

**Status**
Active Development

**Current Version**
v0.1.0

**Current Sprint**
Sprint 0.4

**Current Milestone**
Landing Page MVP

---

# Vision

Garfilas is not intended to become another online food ordering website.

The goal is to create the most memorable digital lasagna experience in Iran.

The website should feel closer to a native mobile application than a traditional restaurant website.

---

# Mission

Build a premium digital restaurant that combines beautiful design, fast performance, simple ordering, strong branding and excellent user experience while remaining lightweight for slower internet connections.

---

# Brand Identity

## Core Values

- Premium
- Friendly
- Modern
- Italian Inspired
- Minimal
- Memorable

## Brand Personality

Garfilas should feel warm, premium, confident, friendly, simple and elegant.

It must never feel cheap, generic, noisy, overdesigned or complicated.

## Brand Promise

Fresh.
Premium.
Memorable.
Every Order.

---

# Design Philosophy

Luxury through simplicity.

Every element should have a purpose.

Less components.
More impact.

## UI Philosophy

Minimal
Dark
Premium
Modern
Soft
App Like

## UX Philosophy

Fast
Clear
Comfortable
One Hand Mobile Usage
Minimum Clicks
Maximum Conversion

## Design Principles

Mobile First
Performance First
SEO First
Accessibility
Reusable Components
Progressive Enhancement
No Over Engineering
Revenue Before Complexity

---

# Visual Identity

**Theme:** Dark Luxury

**Primary:** Orange

**Secondary:** Gold

**Supporting:** Dark Gray

**Background:** `#090909`

**Surface:** `#131313`

**Card:** `#1A1A1A`

**Border:** `#252525`

**Primary:** `#FF7A00`

**Primary Hover:** `#FF8D1F`

**Accent:** `#FFB347`

**Text:** `#FFFFFF`

**Secondary Text:** `#BDBDBD`

**Muted:** `#777777`

---

# Typography

Persian: Vazirmatn
English display: Cormorant Garamond
Script accent: Great Vibes
Fallback: System UI

---

# Technical Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS v4
- CSS/lightweight motion
- Lucide icons where appropriate
- npm
- Vercel
- GitHub

Prefer Server Components and avoid unnecessary client-side JavaScript or dependencies.

---

# Landing Structure

Hero
Featured Products
Story
Why Garfilas
Testimonials
CTA
Footer
Bottom Navigation

---

# Hero Rules

The first-page Hero is the only active design scope until it is accepted.

The current visual source of truth is the supplied mobile reference screenshot from August 2026. It is a composition reference, not a background image.

The Hero must remain a native React/CSS composition using independently replaceable supplied assets.

Current intended order:

1. Garfield + lasagna WebP artwork
2. Circular orange/gold neon framing and glow
3. GARFILAS / LASAGNA brand lockup
4. Italian flag accent
5. `Layers of Love, Taste of Italy` slogan
6. Neon outlined `منو Menu` CTA
7. Scroll cue with upward-pointing arrows
8. Pill-shaped Bottom Navigation

## Brand Lockup Rules

- Wordmark source: `public/assets/brand/garfilas-reference-logo.svg`
- Do not recreate the supplied wordmark as ordinary HTML text.
- Do not replace the supplied wordmark with generated branding while the supplied asset exists.
- The logo's visual treatment is a warm gold/orange neon effect, but the glow must remain controlled and must not wash out the letterforms.
- The logo must remain crisp, premium and readable at the reference scale.
- Fire/bloom effects are secondary to the actual SVG geometry.

## Mascot Strategy

The mascot remains part of the supplied Hero artwork and must not be replaced by a generated approximation while the approved WebP asset is available.

---

# Navigation

Bottom Floating Navigation

Profile
Cart
Contact

Large tap targets
Thumb friendly

The center control remains visually larger/highlighted according to the mobile reference.

### Current calibration lock

- Bottom navigation frame uses `public/assets/ui/bottom-nav-frame.svg`.
- Center button vertical position is currently locked at `50.671875%` of the navigation frame and should not be changed casually.
- The center button has no decorative dot/indicator beneath it.
- Side buttons are positioned independently and must not be moved when calibrating the center control.
- Navigation geometry is still considered visual-calibration work, not final acceptance.

---

# Performance Goals

Performance: 95+
SEO: 100
Accessibility: 95+
Best Practices: 100
First Paint: <2s
LCP: <2.5s
CLS: Near Zero

---

# Accessibility

Keyboard Friendly
Readable Contrast
ARIA Labels
Focus States
Reduced Motion Support

---

# Documentation Rules

Every important decision must be documented.
Every sprint must be logged.
Every release must have a changelog.
Documentation is the primary source of truth.
Code follows documentation.

---

# Git Workflow

Feature
↓
Commit
↓
Push
↓
Deploy
↓
Release
↓
Tag

---

# Current Status

- Repository: Connected
- GitHub: Connected
- Vercel: Connected
- Landing Hero: In Development / Visual Calibration
- Latest slogan calibration: mobile slogan moved slightly upward only; no other Hero elements changed in that commit
- Latest CTA/arrow calibration: CTA position preserved; mobile scroll arrows restored to prior position
- Menu: Planned
- Checkout: Planned
- Admin: Future
- Latest Hero arrow calibration: mobile arrows restored to the prior lower position
- Latest Bottom Navigation calibration: center button position locked; center dots removed

---

# AI Collaboration Rules

Any AI contributing to Garfilas must:

1. Read documentation first.
2. Respect previous decisions.
3. Inspect current code before changing it.
4. Prefer supplied brand assets over recreations.
5. Make the smallest change that advances the approved visual target.
6. Avoid unnecessary architecture changes.
7. Update documentation after significant visual or architectural changes.
8. Protect brand identity and performance constraints.

---

# Project Motto

Revenue Before Complexity.
Launch First.
Improve Continuously.
Build Experiences.
Not Pages.

---

Last Updated: 2026-10-02
Documentation Version: 2.5.0


## 2026-10-02 Global Atmosphere Rule

Garfilas uses one continuous global ambient background across the site. The current active implementation is intentionally lightweight:

- global `body` gradients provide the base atmosphere
- fixed `HeroParticleEngine` provides live particles and sparks
- Hero foreground geometry remains inside the Hero feature

The former `components/layout/SiteBackground.tsx` wrapper was removed after it was confirmed to be a no-op. Historical references to that component describe an earlier implementation only.

Protected rule: Hero foreground calibration must not be altered during background maintenance unless a separate visual mismatch is explicitly identified.

Last Updated: 2026-10-02
Documentation Version: 2.5.0


## 2026-10-05 Menu Card Frame Architecture

The menu card frame is now implemented as native SVG/React geometry instead of loading the raster frame asset.

Source calibration was taken from the Canva menu design DAHXFAzPEeM:
- selected card frame source asset: MAHXFHrtvfQ
- source frame asset metadata: 590 x 644
- selected card canvas region: left 370, top 0, width 189, height 206
- text and media geometry were inspected from the editable Canva transaction
- text remains HTML so content stays responsive, accessible, SEO-readable and dynamic

Implementation:
- components/sections/Menu/MenuCardFrame.tsx contains the vector frame.
- MenuProductCard.tsx renders the frame as inline SVG.
- The raster public/assets/menu/garfilas-card-frame.webp is no longer used by the card.
- Product photography remains raster/WebP because photographic content should not be vectorized.

Performance intent:
- remove a decorative raster request from the menu card
- keep the frame resolution-independent
- avoid embedding product content inside the decorative SVG
- preserve lightweight React/CSS architecture

This is a native reconstruction calibrated from the Canva design geometry, not a screenshot/background image.

Last Updated: 2026-10-05
Documentation Version: 2.6.0


## 2026-10-05 Menu Card Content Calibration

The menu card content layer has been recalibrated against the supplied dark frame reference.

Locked composition:
- product name is positioned in the upper content zone
- product image occupies the central visual window
- description begins directly below the image
- price and quantity controls remain in the lower content zone
- frame remains native SVG/React
- product photography remains an external raster asset and is not embedded in the SVG

The repository currently uses the existing Hero WebP as the card image fallback because the separately supplied local lasagna-card PNG is not yet committed to the repository.

Last Updated: 2026-10-05
Documentation Version: 2.7.0
