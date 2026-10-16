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

Next.js 16.4.0 (App Router)

Language

TypeScript (Strict)

Styling

Tailwind CSS v4

Animation

Lightweight CSS animations

Icons

Lucide React

State

No external global-state library is used. The inline cart uses a focused React Context (`CartProvider`) plus localStorage persistence; other sections remain Server Components where practical. The cart is client-side only and does not submit orders to a backend.

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

Active homepage sections:

- Hero
- Menu (`MenuSection.tsx`, with responsive item reveal and per-product quantity stepper)
- Inline Cart (`CartSection.tsx`, directly below Menu)
- Fixed Bottom Navigation

Hero-specific components include `Hero.tsx`, `HeroLogo.tsx`, `HeroCTA.tsx`, and `HeroParticleEngine.tsx`. The older `MenuProductCard.tsx` and `MenuCardFrame.tsx` remain a dormant visual prototype; they are not the data source or renderer for the active menu.

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
 ├── main
 │   ├── Hero
 │   ├── Menu
 │   └── Cart
 └── Bottom Navigation
```

The homepage remains mobile-first, premium, dark, minimal and lightweight. The active document order is Hero → Menu → Cart. The Cart is an inline section, not a separate `/cart` route; the existing Bottom Navigation cart link targets its `#cart` anchor and the global CSS provides smooth scrolling. The Hero still uses temporary Garfield + lasagna artwork pending final replacement.

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

Implemented in the current source:

- Foundation and shared design tokens
- Hero and fixed Bottom Navigation
- Active Menu section with seven menu items
- Per-product plus/count/minus controls beneath prices, cart quantity synchronization, item removal, subtotal, and localStorage persistence
- Dynamic center navigation: count badge outside Cart, Menu when the visible Cart is empty, and Payment when it contains products (Payment scrolls to the summary; checkout integration is not implemented)
- Inline Cart section directly below Menu, reached through the navigation anchor

Not implemented: checkout, payment, server-side order submission, coupon entry, customer notes, and database persistence. The older Menu card prototype is separate from the active menu list. The homepage SEO foundation includes canonical metadata, Open Graph/Twitter summary metadata, `robots.txt`, and a homepage-only sitemap. Browser/device acceptance and branch CI remain required before release.

GitHub Actions runs a production build verification on pushes to `main` and pull requests targeting `main`. This workflow does not deploy to Vercel.

Last Updated: 2026-10-16


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
