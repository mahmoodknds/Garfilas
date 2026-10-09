# DECISIONS.md

## Garfilas Architecture Decision Records (ADR)

### Version 2.0.0

---

# Purpose

This document records every architectural, design and business decision made during the Garfilas project.

Every important decision must be documented.

Documentation is the permanent memory of the project.

---

# ADR-001

## Project Direction

Status

✅ Approved

Decision

Garfilas will be a premium online restaurant experience instead of a traditional restaurant website.

Reason

The goal is building a memorable digital brand rather than just displaying products.

Impact

All future UI, UX and branding decisions follow this philosophy.

---

# ADR-002

## Mobile First

Status

✅ Approved

Decision

Design starts from mobile.

Desktop adapts to mobile.

Never design desktop first.

Reason

Most users will order from smartphones.

Impact

Every component must be optimized for touch devices.

---

# ADR-003

## Performance First

Status

✅ Approved

Decision

Performance has higher priority than visual complexity.

Targets

Performance

95+

SEO

100

Accessibility

95+

Best Practices

100

Reason

Fast websites convert better.

---

# ADR-004

## Revenue Before Complexity

Status

✅ Approved

Decision

Only build features that increase business value.

Avoid unnecessary engineering.

Reason

Shipping valuable software is more important than building complex software.

---

# ADR-005

## Feature Based Architecture

Status

✅ Approved

Decision

Use Feature Based Architecture.

Example

src/

app/

features/

shared/

core/

entities/

widgets/

Reason

Improves scalability and maintainability.

---

# ADR-006

## Technology Stack

Status

✅ Approved

Framework

Next.js App Router

Language

TypeScript

Styling

TailwindCSS

Animation

Framer Motion

Database

PostgreSQL

ORM

Prisma

Deployment

Vercel

Repository

GitHub

Reason

Modern, scalable and production-ready stack.

---

# ADR-007

## State Management

Status

✅ Approved

Decision

Use Zustand.

Reason

Simple.

Lightweight.

Excellent developer experience.

Avoid Redux unless future requirements demand it.

---

# ADR-008

## Design Language

Status

✅ Approved

Decision

Dark Luxury.

Primary

Orange

Secondary

Gold

Background

Very Dark

Reason

Premium positioning.

High visual recognition.

---

# ADR-009

## Hero Section

Status

✅ Approved

Decision

Hero must remain simple.

Contains

Large Logo

Headline

Subtitle

Primary CTA

Soft Background Glow

Rejected

Video

Carousel

Multiple CTAs

Reason

Focus increases conversion.

---

# ADR-010

## Mascot Strategy

Status

✅ Approved

Decision

Do not show mascot on first screen.

Reason

Premium identity must be established before introducing the character.

Future Usage

Packaging

Marketing

Menu

Events

Merchandise

---

# ADR-011

## Bottom Navigation

Status

✅ Approved

Decision

Floating Bottom Navigation.

Items

Home

Menu

Cart

Profile

Contact

Reason

Thumb-friendly interaction.

---

# ADR-012

## Animation Philosophy

Status

✅ Approved

Decision

Animations should support usability.

Never distract users.

Duration

200ms

300ms

400ms

Maximum

500ms

Rejected

Long animations.

Heavy parallax.

Large page transitions.

---

# ADR-013

## Component Strategy

Status

✅ Approved

Decision

Everything reusable.

Every component must be

Independent

Composable

Typed

Accessible

Responsive

Reason

Reduce duplicated code.

---

# ADR-014

## Typography

Status

✅ Approved

Persian

Vazirmatn

English

Poppins

Reason

Excellent readability.

Modern appearance.

---

# ADR-015

## Icons

Status

✅ Approved

Decision

Lucide Icons.

Reason

Minimal.

Consistent.

Modern.

---

# ADR-016

## Documentation First

Status

✅ Approved

Decision

Documentation is mandatory.

Every sprint updates

SESSION_LOG.md

TODO.md

PROJECT_STATE.md

CHANGELOG.md

Reason

AI memory is temporary.

Documentation is permanent.

---

# ADR-017

## AI Collaboration

Status

✅ Approved

Decision

Every AI assistant must

Read documentation first.

Respect previous decisions.

Avoid unnecessary redesign.

Update documentation after major work.

Reason

Maintain project consistency.

---

# ADR-018

## SEO Strategy

Status

✅ Approved

Decision

SEO is built from day one.

Requirements

Semantic HTML

Metadata

Structured Data

OpenGraph

Twitter Cards

Canonical URLs

Fast Loading

Reason

Organic growth.

---

# ADR-019

## Accessibility

Status

✅ Approved

Requirements

Keyboard Navigation

Visible Focus

ARIA Labels

Readable Contrast

Reduced Motion

Reason

Professional quality standards.

---

# ADR-020

## Git Workflow

Status

✅ Approved

Flow

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

Reason

Predictable development process.

---

# ADR-021

## Landing Page MVP Scope

Status

✅ Approved

Version

v0.2.0

Includes

Hero

Featured Products

Story

CTA

Footer

Bottom Navigation

Responsive Layout

SEO Foundation

Excludes

Authentication

Checkout

Dashboard

Admin Panel

Reason

Ship MVP quickly.

---

# ADR-022

## Project Motto

Status

✅ Approved

Official Motto

Revenue Before Complexity.

Launch First.

Improve Continuously.

Reason

Represents the philosophy of the entire project.

---

# ADR-023

## Hero Visual Calibration Discipline

Status

✅ Approved

Decision

Hero visual calibration must use one-variable-at-a-time changes. Existing approved element positions and the restored particle baseline are protected unless the user explicitly requests a change.

Current protected mobile values

- CTA top: `76%`
- Scroll cue top: `83.5%`
- Slogan margin-top: `.60rem`

Baseline protection

The restored particle engine and global CSS are based on the user-requested `4987502c308741d97aff7b5b1d3cbe7faabdad68` baseline. Later visual experiments must not be silently reintroduced.

Reason

Small Hero adjustments can shift the perceived balance of the entire vertical composition. Isolating changes makes regressions easier to identify and revert.

Impact

Future Hero calibration should inspect the current implementation first, modify only the requested variable, and record the exact value in project documentation.

Responsive composition rule

- The Hero uses one mobile-first semantic vertical composition across mobile, tablet and desktop.
- Mobile keeps the protected calibrated anchors: mascot/orbit `27.5%`, copy `52.8%`, CTA `76%`, scroll cue `83.5%`.
- Tablet/desktop use the same semantic order through normal flow (`HeroLogo → CTA → scroll cue`) beginning from the existing `52.8%` copy anchor, rather than independent desktop percentages.
- Breakpoint-specific sizing is allowed for larger viewports; it must not become a separate visual composition without direct visual evidence and explicit approval.

---

---

# ADR-031

## Global Site Background System

Status

✅ Approved

Decision

Garfilas uses one global background system mounted at the App Router layout level instead of separate page/section background scenes.

The system owns the persistent ambient layers:

- dark base atmosphere
- orange/gold heat gradients
- ambient dust and spark layers
- shared vignette/atmosphere
- the existing fixed particle engine remains global

Hero foreground geometry remains local to the Hero. Hero-specific mascot, logo, CTA and navigation calibration must not be changed as part of background maintenance.

Reason

Future pages must feel like continuous parts of the same Garfilas environment. A fixed global background removes visible section boundaries and prevents duplicated background implementations as the site grows.

Impact

New pages and sections should use transparent backgrounds by default and must not introduce an independent full-page background unless explicitly approved.

# Future ADRs

Reserved

ADR-023

Payment Architecture

ADR-024

Authentication Provider

ADR-025

Notification System

ADR-026

Order Management

ADR-027

Restaurant Dashboard

ADR-028

Analytics

ADR-029

PWA

ADR-030

Version 1.0 Release

---

Last Updated

2026-10-02

Documentation Version

2.0.0

### Responsive Composition Correction

The latest desktop review on 2026-10-02 confirms the requested direction: desktop must use the same mobile-calibrated Hero sizing and positioning directly. No tablet/desktop normal-flow composition or separate desktop geometry is approved.

## ADR-032

### Global Background Ownership Rule

Status

✅ Approved

Decision

Large ambient visual layers that must continue beyond the Hero viewport belong to the active global background system, currently:

- document-level `body` atmosphere/gradients
- fixed `HeroParticleEngine`

The Hero owns foreground composition only. The previously used `SiteBackground.tsx` wrapper was removed after it was confirmed to be a no-op and is not part of the current architecture.

Reason

A viewport-height Hero uses `overflow:hidden`; keeping a large ambient effect inside it can create a visible termination at the first-section boundary. The current implementation avoids that boundary while keeping the architecture smaller.

Impact

New pages and sections should use the existing global atmosphere by default. Do not recreate a section-specific full-page background or reintroduce `SiteBackground` without an explicit architectural decision.

Future background-only effects must use the existing global ownership model when they are expected to continue across page or section boundaries.

---

# Future ADRs

Reserved

ADR-024  
Authentication Provider

ADR-025  
Notification System

ADR-026  
Order Management

ADR-027  
Restaurant Dashboard

ADR-028  
Analytics

ADR-029  
PWA

ADR-030  
Version 1.0 Release

---

Last Updated

2026-10-02

Documentation Version

2.1.0

## 2026-10-10: Canonical URL and release-verification boundary

- Decision: use `https://garfilas.ir` as the canonical application URL in `config/site.ts`.
- Scope: metadata base, canonical URL, Open Graph URL, robots sitemap reference, and sitemap URL generation use the centralized site URL.
- Non-goal: this setting does not configure DNS, attach the domain to Vercel or a personal host, issue SSL, or confirm the site is publicly served at that domain.
- Release rule: a successful build or READY deployment does not equal visual acceptance. Verify the deployed commit SHA and perform browser/device checks before declaring the UI accepted.
- Hosting rule: do not select static export or change runtime architecture until the target cPanel/DirectAdmin plan's Node.js support and Next.js requirements are confirmed.

## ADR-031: Final Quality Pass Before Hosting Migration (2026-10-10)

**Status:** Accepted

**Context**
The cleanup pass is merged, but final browser/device visual acceptance and the user's personal-hosting capabilities have not been confirmed. Broad refactoring could disturb calibrated visual behavior without proving a benefit.

**Decision**
Run a bounded, evidence-based quality pass before further design or architecture changes. Verify responsive renders, scroll/background continuity, reduced-motion behavior, image/font loading, performance, metadata routes, and build/lint on the exact release commit. Fix only confirmed issues. Confirm Node.js support and hosting panel capabilities before preparing migration.

**Consequences**
- Preserve accepted visual geometry and animation unless testing identifies a real defect.
- Do not infer domain connectivity or SSL from `config/site.ts`.
- Keep Menu/cart/checkout/authentication scope deferred until the landing page and deployment baseline are accepted.

Last Updated: 2026-10-10
