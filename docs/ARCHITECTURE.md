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

No active layout-level components currently exist. Keep this directory empty until a real shared layout component is introduced.

## config/

Brand and application configuration that should not be mixed with page composition.

## lib/

No shared utilities are currently required. Add files here only when a real shared dependency exists.

## styles/

Shared design tokens used by the global stylesheet.

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

Last Updated: 2026-10-02


## 2026-10-02 Cleanup Audit

The former `components/layout/SiteBackground.tsx` wrapper was confirmed to be a no-op because its class names had no active stylesheet definitions. It was removed from the root layout and deleted.

Current background ownership:

- `body` global gradients provide the base atmosphere.
- `HeroParticleEngine.tsx` provides the fixed live particle/spark layer.
- Hero foreground remains inside the Hero feature.

The repository does not currently contain a layout-level component. Keep `components/layout/` absent until a real shared layout component is introduced.

Keep layout-level behavior at `app/layout.tsx` when it is genuinely document-wide. Do not recreate the removed `SiteBackground` wrapper merely as a structural container.

