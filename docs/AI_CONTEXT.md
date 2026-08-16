# AI_CONTEXT.md

## Garfilas AI Working Memory

**Version:** 2.2.0  
**Last Updated:** 2026-08-16

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

The user's supplied mobile reference screenshots are the visual source of truth for the first page.

They are composition references. Do not render them as the website background.

Current target composition:

1. Garfield + lasagna artwork
2. Circular orange/gold neon framing
3. GARFILAS / LASAGNA brand lockup
4. Italian flag
5. `Layers of Love, Taste of Italy` slogan
6. Neon outlined `مشاهده منو` CTA
7. Scroll cue
8. Pill-shaped Bottom Navigation

---

# Current Hero Asset Rules

Use supplied assets directly:

- Hero artwork: `public/assets/hero/garfilas-hero-final.webp`
- Wordmark: `public/assets/brand/garfilas-reference-logo.svg`
- Slogan: `public/assets/brand/garfilas-slogan-exact.svg`

Do not replace these with generated approximations while the supplied assets are available.

The supplied SVG is the only approved source for visible GARFILAS wordmark geometry. Do not recreate GARFILAS with HTML text.

---

# Logo Calibration Rules

The logo is currently visible and close to the desired direction.

The remaining issue is intensity, not a need to replace the asset.

Target:

- crisp SVG letterforms
- warm gold/orange core
- controlled orange edge glow
- restrained red/orange bloom
- readable dark negative space inside the letterforms
- premium neon/fire atmosphere
- no blown-out white center
- no dotted or broken-looking primary letter surface
- no duplicate HTML text layer

Fire/bloom must support the SVG geometry rather than obscure it.

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

The current design is in visual calibration, not redesign.

---

# Latest User Direction

The user approved the current SVG-based logo direction and requested a final visual calibration against the reference.

Immediate logo requirements:

- reduce excessive light
- preserve SVG geometry
- preserve warm gold/orange character
- tune bloom and edge glow
- keep the logo crisp and readable
- match scale and position to the reference

After the logo is accepted, calibrate LASAGNA, flag and slogan independently, then CTA and Bottom Navigation.

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
- CSS/lightweight motion
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
4. Inspect current implementation on GitHub.
5. Compare the current visual output with the latest supplied reference.
6. Make the smallest change that advances the approved visual target.
7. Update documentation after significant visual changes.

Never infer an old state from stale documentation when current code and the latest session log provide newer information.

---

# Current Verification State

- Hero WebP integration: completed
- Wordmark SVG integration: completed
- Slogan asset integration: completed
- Native neon composition: integrated
- Logo calibration: in progress
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
4. Compare the mobile logo against the latest reference.
5. Reduce logo brightness and bloom without changing the supplied SVG geometry.
6. Match logo color, edge glow, scale and position.
7. Calibrate LASAGNA, flag and slogan separately.
8. Refine CTA and Bottom Navigation.
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

The latest user reference screenshots and current Hero implementation are the visual/technical context to continue from.
