# 🍝 GARFILAS BIBLE

## Official Source of Truth

### Version: 2.2.0

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
English: Poppins
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
6. Neon outlined `مشاهده منو` CTA
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
- Menu: Planned
- Checkout: Planned
- Admin: Future
- Latest Hero arrow calibration: upward arrows positioned lower on mobile and desktop
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

Last Updated: 2026-08-23
Documentation Version: 2.2.0
