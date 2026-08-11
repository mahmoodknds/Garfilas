# AI_CONTEXT.md

## Garfilas AI Working Memory

**Version:** 2.1.0  
**Last Updated:** 2026-08-11

---

# Purpose

This document is the permanent working memory for AI collaborators on Garfilas.

Read it before writing code, changing architecture, generating UI, making design decisions or planning future work.

If a conflict exists, `docs/GARFILAS_BIBLE.md` is the product and brand source of truth.

---

# Project Overview

- Project: Garfilas
- Type: Premium online Italian lasagna restaurant
- Primary language: Persian
- Development language: English / TypeScript
- Architecture: Next.js App Router
- Repository: GitHub
- Deployment: Vercel
- Status: Active Development
- Current version: v0.1.0
- Current sprint: Sprint 0.4
- Current goal: finish the first-page Landing Hero before expanding scope

---

# Current Visual Source of Truth

The **user-provided mobile reference screenshot from 2026-08-11** is the current visual source of truth for the first page.

It is a composition reference. Do not render the screenshot itself as the website background.

The target composition is:

1. Garfield + lasagna artwork at the top
2. Circular orange/gold neon framing
3. GARFILAS / LASAGNA brand lockup
4. Italian flag accent
5. `Layers of Love, Taste of Italy` slogan
6. Neon outlined `مشاهده منو` CTA with sparkle accents
7. Scroll cue
8. Pill-shaped Bottom Navigation with three circular controls and a larger highlighted center control

---

# Current Hero Asset Rules

Use the supplied assets directly:

- Hero artwork: `public/assets/hero/garfilas-hero-final.webp`
- Wordmark: `public/assets/brand/garfilas-reference-logo.svg`
- Slogan: `public/assets/brand/garfilas-slogan-exact.svg`

Do not replace these with generated approximations while the supplied assets are available.

The WebP is the actual Garfield/lasagna artwork. It is not a placeholder anymore.

The reference screenshot must never be used as the Hero background.

---

# Hero Implementation Rules

Native React/CSS must provide:

- dark background
- orange/gold neon rings
- glow
- halo
- architectural line-art where needed
- CTA styling
- scroll cue
- Bottom Navigation
- animations
- responsive composition

The Hero should feel like a premium mobile app, not a poster dropped into a webpage.

The current design is close to the target and is in **visual calibration**, not redesign.

---

# Latest User Direction

The user approved the current direction and explicitly requested:

- make the Hero/artwork composition slightly smaller
- make Bottom Navigation exactly match the reference form
- make the three navigation buttons match reference proportions and spacing
- preserve the larger highlighted center button
- continue refining until the mobile output closely matches the reference

This is the immediate priority.

---

# Current Technical Structure

Hero:

- `components/sections/Hero/Hero.tsx`
- `components/sections/Hero/HeroLogo.tsx`
- `components/sections/Hero/HeroCTA.tsx`
- `components/ui/GlowButton.tsx`

Bottom navigation:

- `components/sections/BottomNavigation/BottomNavigation.tsx`
- `components/sections/BottomNavigation/index.ts`

Global visual system:

- `app/globals.css`
- `styles/tokens.css`
- `styles/animations.css`

---

# Tech Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS v4
- CSS animations / lightweight motion
- Lucide icons where appropriate
- npm
- Vercel

Prefer Server Components. Avoid unnecessary client-side JavaScript and dependencies.

---

# UX Direction

- Mobile first
- One-handed usage
- Large touch targets
- Minimal scrolling
- Fast interaction
- Predictable navigation
- Premium visual hierarchy

---

# Brand / Visual Direction

- Dark luxury
- Warm Italian atmosphere
- Orange primary
- Gold accent
- Black/dark background
- Minimal copy
- High contrast
- Controlled glow
- No visual clutter
- Premium rather than childish

---

# Performance Rules

- Optimize the WebP asset
- Keep Hero fast
- Avoid unnecessary JavaScript
- Avoid heavy dependencies
- Prefer CSS effects over large rasterized UI layers
- Verify production build before release
- Target strong Lighthouse performance

---

# Accessibility Rules

- Semantic HTML
- Visible focus states
- Good contrast
- ARIA labels where needed
- Reduced-motion support
- Touch targets suitable for mobile

---

# Coding Rules

- TypeScript strict mode
- No `any`
- Reusable components
- Meaningful names
- No duplicated code
- Clean imports
- Small focused files
- Do not change architecture without a concrete reason

---

# AI Workflow

Before making changes:

1. Read `GARFILAS_BIBLE.md`.
2. Read `PROJECT_STATE.md`.
3. Read `SESSION_LOG.md`.
4. Inspect the current implementation on GitHub.
5. Make the smallest change that advances the approved visual target.
6. Update documentation before context limits are reached.

Never infer an old state from stale documentation when current code and the latest session log provide newer information.

---

# Current Verification State

- Hero WebP integration: completed
- Wordmark asset integration: completed
- Slogan asset integration: completed
- Native neon composition: completed
- CTA reference styling: implemented
- Bottom Navigation reference styling: implemented, final calibration pending
- Local build verification: pending
- Final visual acceptance: pending

---

# Exact Next Task

Do only this next:

1. Pull latest `main`.
2. Run `npm run build`.
3. Run `npm run dev`.
4. Use the mobile reference screenshot as the visual target.
5. Scale the Hero/artwork slightly down.
6. Rebuild Bottom Navigation geometry to match the reference exactly.
7. Match the three button circles, center elevation, spacing, glow and active indicator.
8. Re-check CTA spacing.
9. Validate desktop responsiveness.
10. Do not expand into other website features until the Hero is accepted.

---

# Documentation Continuity

When the next chat begins, read these files before doing anything:

- `docs/GARFILAS_BIBLE.md`
- `docs/PROJECT_STATE.md`
- `docs/SESSION_LOG.md`
- `docs/TODO.md`
- `docs/AI_CONTEXT.md`

The latest user reference screenshot and the current Hero implementation are the visual/technical context to continue from.
