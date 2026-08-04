# ARCHITECTURE.md

## Garfilas System Architecture

### Version 1.1.0

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
- Featured Products
- Story
- Bottom Navigation

Future sections should follow the same feature-based structure.

## components/ui/

Small reusable presentation primitives such as buttons, containers, cards and section wrappers.

## components/layout/

Shared layout-level components such as the brand Logo.

## config/

Brand and application configuration that should not be mixed with page composition.

## lib/

Shared constants and utilities that are not specific to one page section.

## styles/

Global design tokens and lightweight reusable animation definitions.

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
 ├── Featured Products
 ├── Story
 └── Bottom Navigation
```

The homepage remains mobile-first, premium, dark, minimal and lightweight. The first screen intentionally remains without the mascot.

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
- Featured Products
- Story
- Bottom Navigation

Next planned sections:

- Why Garfilas
- Final CTA
- Footer
- Responsive refinement
- SEO foundation
- Performance audit

Last Updated: 2026-08-04
