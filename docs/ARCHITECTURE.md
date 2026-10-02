# ARCHITECTURE.md

## Garfilas System Architecture

### Version 1.2.0

---

# Purpose

This document defines the software architecture of Garfilas.

It is the reference for folder structure, project organization, dependency direction and scalability.

Every new feature must follow this architecture.

---

# Architecture Style

Feature-Based Architecture

Inspired by

- Vercel
- Linear
- shadcn/ui
- Modern Next.js applications

Goals

- Scalable
- Modular
- Reusable
- Easy to maintain
- AI-friendly
- Production ready

---

# Technology Stack

Framework

Next.js 16.2.10 (App Router)

Language

TypeScript (Strict)

Styling

Tailwind CSS v4

Animation

Lightweight CSS animations

Icons

Lucide React

State

Not introduced yet. Add only when a real shared client-state requirement exists.

Database

Not introduced in the Landing Page MVP.

ORM

Not introduced in the Landing Page MVP.

Deployment

Vercel-compatible Next.js application

Package Manager

npm

---

# High-Level Architecture

```
Client
     │
     ▼
Next.js App Router
     │
     ├── app/                 Route composition and global styles
     │
     ├── components/          Feature and reusable UI components
     │
     ├── config/              Brand and application configuration
     │
     ├── lib/                 Shared constants and utilities
     │
     ├── styles/              Design tokens and lightweight animations
     │
     └── docs/                Project source-of-truth documentation
```

---

# Folder Responsibilities

## app/

Next.js App Router entry points.

- `layout.tsx` → root layout and document-level configuration
- `page.tsx` → homepage composition
- `globals.css` → global CSS and section styling

## components/sections/

Page-level feature sections. Each section owns its markup and presentation-specific logic.

Current Landing Page MVP sections:

- Hero
- Bottom Navigation

Hero-specific components currently include `Hero.tsx`, `HeroLogo.tsx`, `HeroCTA.tsx`, and `HeroParticleEngine.tsx`.

Future sections should follow the same feature-based structure.

## components/ui/

Small reusable presentation primitives used by the active page. Keep this folder limited to components with a current consumer.

## components/layout/

Shared layout-level components such as the brand Logo.

## config/

Brand and application configuration that should not be mixed with page composition.

## lib/

No shared utilities are currently required. Add files here only when a real shared dependency exists.

## styles/

Shared design tokens. Component-specific animation styles live with the active global stylesheet until a separate shared animation module is justified.

## docs/

Architecture, product decisions, project state, coding rules, session history and other project source-of-truth documents.

---

# Dependency Direction

Preferred direction:

```
app
 │
 ▼
sections ─────► ui
 │               │
 ▼               ▼
config          lib
 │
 ▼
styles
```

Avoid importing page-specific section code into generic UI primitives.

Keep reusable components independent from business-specific page composition whenever practical.

---

# Current Landing Page Composition

```
Home
 │
 ├── Hero
 └── Bottom Navigation
```

The homepage remains mobile-first, premium, dark, minimal and lightweight. The active Hero includes the current temporary Garfield + lasagna artwork as a temporary foreground asset; final artwork replacement remains pending.

---

# Performance Rules

- Prefer Server Components.
- Avoid unnecessary client components.
- Avoid heavy dependencies when CSS can solve the problem.
- Avoid remote imagery when it is not required.
- Keep the first screen lightweight.
- Respect reduced-motion preferences.

---

# Current Scope

Landing Page MVP is the active milestone.

Implemented so far:

- Foundation
- Design tokens
- Hero
- Bottom Navigation

Deferred work remains documented in TODO.md and is intentionally not present in the active homepage code. Current next work is responsive refinement, Hero acceptance, SEO foundation and performance audit.

Last Updated: 2026-10-01


## 2026-10-02 Global Background Ownership

`components/layout/SiteBackground.tsx` is the persistent ambient layer for the application and is mounted from `app/layout.tsx`. It owns the shared atmosphere, including heat, dust, sparks, vignette and the large ambient Hero glow.

The Hero owns foreground composition only. Large ambient effects that need to continue beyond the Hero viewport must not remain inside the viewport-height Hero because its clipping boundary can create a visible section transition on desktop.

No foreground Hero geometry was changed in the latest background-boundary correction.

Last Updated: 2026-10-02