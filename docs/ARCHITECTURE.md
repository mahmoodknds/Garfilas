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

No shared/global state library is introduced. Small local component state is permitted where required; the dormant Menu prototype currently uses local quantity state.

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
     ├── styles/              Shared design tokens
     │
     ├── .github/             Build verification workflow
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

Active Landing Page MVP sections:

- Hero
- Bottom Navigation

Hero-specific components currently include `Hero.tsx`, `HeroLogo.tsx`, `HeroCTA.tsx`, and `HeroParticleEngine.tsx`.

`Menu/` currently contains a dormant product-card prototype and its CSS. It is not mounted by the homepage. Review and finish its accessibility, pricing, responsive behavior, and interaction model before activation.

## components/ui/

Small reusable presentation primitives used by the active page. Keep this folder limited to components with a current consumer.

## config/

Brand and application configuration that should not be mixed with page composition.

## styles/

`tokens.css` contains shared design tokens imported by `app/globals.css`. Animation and section styling currently live in the global stylesheet or the feature stylesheet that owns them.

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

The Menu product-card prototype exists in the repository but is intentionally not mounted on the homepage. Deferred work remains documented in `TODO.md`. The homepage SEO foundation now includes canonical metadata, Open Graph/Twitter summary metadata, `robots.txt`, and a homepage-only sitemap. Remaining verification focuses on browser/device visual acceptance, responsive behavior, and deeper performance auditing.

GitHub Actions runs a production build verification on pushes to `main` and pull requests targeting `main`. This workflow does not deploy to Vercel.

Last Updated: 2026-10-09


## 2026-10-02 Cleanup Audit

The former `components/layout/SiteBackground.tsx` wrapper was confirmed to be a no-op because its class names had no active stylesheet definitions. It was removed from the root layout and deleted.

Current background ownership:

- `body` global gradients provide the base atmosphere.
- `HeroParticleEngine.tsx` provides the fixed live particle/spark layer.
- Hero foreground remains inside the Hero feature.

The repository does not currently contain a layout-level component. Keep `components/layout/` absent until a real shared layout component is introduced.

Keep layout-level behavior at `app/layout.tsx` when it is genuinely document-wide. Do not recreate the removed `SiteBackground` wrapper merely as a structural container.

## Release and hosting boundary (2026-10-10)

- `config/site.ts` is the centralized source for the public canonical URL. The current value is `https://garfilas.ir`.
- Metadata, canonical URL, Open Graph URL, robots sitemap reference, and sitemap generation should consume this shared setting rather than duplicate the domain.
- Domain configuration in source is separate from DNS records, custom-domain attachment, SSL, and the production server. Each requires independent verification.
- The app currently uses the Next.js application runtime with `next build` and `next start` scripts. Do not assume static hosting is compatible without checking routes and runtime requirements.
- For cPanel/DirectAdmin, confirm the provider's supported Node.js version and managed startup method before choosing a release procedure.
- Release acceptance requires both technical checks (build/lint and deployment status) and browser/device visual verification. Deployment READY alone is insufficient.

## 2026-10-10 Deployment and QA State

- `config/site.ts` is the single source for the canonical public URL and currently points to `https://garfilas.ir`.
- `app/layout.tsx` consumes this URL for metadata/canonical/Open Graph metadata; `app/robots.ts` and `app/sitemap.ts` generate absolute URLs from the same configuration.
- This configuration does not set DNS, Vercel domain aliases, a cPanel/DirectAdmin virtual host, or SSL.
- Cleanup PR #8 is merged into `main` at `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`; the associated Vercel Production deployment was checked READY.
- Visual/browser acceptance remains pending. Keep successful compilation/deployment distinct from validated runtime appearance.
- Before personal-host deployment, confirm Node.js support/version and whether the panel's application manager supports the Next.js runtime. Do not switch to static export without a feature audit.
