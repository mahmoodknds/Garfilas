# Garfilas Project Documentation

Garfilas is a premium, online-first lasagna brand. The website is a mobile-first Next.js experience with a dark, restrained orange-and-gold visual system.

**Product principle:** Revenue Before Complexity. Launch First. Improve Continuously.

## Current implementation

The active homepage is a single scrollable composition:
- Hero artwork, wordmark, and bilingual `منو Menu` CTA
- Active Menu section with seven lasagna items and add-to-cart controls
- Inline Cart section directly below Menu
- Fixed Bottom Navigation; its cart control smoothly scrolls to `#cart`
- Global atmospheric background and fixed particle engine

The active menu data lives in `components/sections/Menu/MenuSection.tsx`. The older `MenuProductCard.tsx` and `MenuCardFrame.tsx` remain a separate, dormant visual prototype and are not used by the active menu list. Cart state is shared through a lightweight React Context and persisted in localStorage. Checkout, payment, and server-side order submission remain out of scope.

## Stack

| Area | Current choice |
|---|---|
| Framework | Next.js 16.4.0 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 and feature-owned CSS |
| Icons | Lucide React |
| Package manager | npm |
| Hosting | Vercel |
| Build verification | GitHub Actions |

## Read before changing code

1. `GARFILAS_BIBLE.md`: product and brand authority
2. `PROJECT_STATE.md`: current implementation and verification state
3. `AI_CONTEXT.md`: working context for AI collaborators
4. `DECISIONS.md`: architectural and product decisions
5. `ARCHITECTURE.md`: code ownership and dependency direction
6. `CODING_RULES.md`: implementation standards
7. `TODO.md`: unfinished work only
8. `SESSION_LOG.md` and `CHANGELOG.md`: development history

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

GitHub Actions runs ESLint and a production build on pushes to `main` and pull requests targeting `main`. This verifies code quality and build output but does not deploy the app. Vercel deployment status must be checked separately.

## Visual and performance guardrails

- Preserve the approved Hero anchors unless a direct reference comparison justifies a change: mascot/orbit `27.5%`, copy `51.3%`, CTA `73.6%`, scroll cue `80.5%`.
- Preserve the Bottom Navigation center control's vertical anchor at `50.671875%`.
- Keep the Hero and fixed navigation as one proportional mobile-first composition.
- Respect reduced-motion preferences and avoid adding dependencies for effects that CSS can handle.
- The wordmark is extracted to `public/assets/brand/garfilas-reference-logo.png` and served through `next/image`; the owner confirmed optimized response sizing/format and visual quality.
- Never treat a successful Git commit as proof of deployment. Confirm the Vercel Production deployment SHA and READY state.

## Workflow

Read the relevant source-of-truth docs, inspect the current implementation, make a focused change, run lint/build checks where possible, update docs, and verify the deployed commit before visual acceptance.

## Current checkpoint: 2026-10-10

- Cleanup PR #8 is merged into `main`; merge commit: `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`.
- The current work phase is final quality verification, not broad refactoring.
- The intended canonical domain is `https://garfilas.ir`; this is application metadata configuration only and does not prove DNS, hosting, or SSL is live.
- Before hosting migration, verify responsive visuals, reduced-motion behavior, production build/lint, performance, and SEO endpoints.
- Read `PROJECT_STATE.md` and `TODO.md` for the authoritative current status and next actions.

## Current handoff (2026-10-10)

Cleanup PR #8 is merged into `main` (merge commit `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`) and the latest known Vercel Production deployment for that commit is READY. The canonical URL is configured as `https://garfilas.ir`, but DNS, domain routing, SSL, and personal-host deployment are not yet verified.

For the next session, read `GARFILAS_BIBLE.md`, `PROJECT_STATE.md`, `SESSION_LOG.md`, `TODO.md`, and `AI_CONTEXT.md`. Continue with a bounded final QA pass, preserving approved visuals and fixing only demonstrated defects. Confirm cPanel/DirectAdmin Node.js capabilities before planning deployment.

## Current handoff (2026-10-16)

- The active homepage composition is Hero → Menu → Cart, with Cart immediately after Menu in the document flow.
- The center Bottom Navigation control keeps its existing geometry and targets `#cart`; native smooth scrolling is provided by the global stylesheet, with reduced-motion support.
- Cart item state is shared through a small React Context and stored in localStorage. It supports adding a menu product, changing quantity, removing an item, and calculating the subtotal.
- There is no checkout route, payment integration, server-side order submission, or coupon system in this phase.
- The current cart change is being developed on `feature/cart-section`. Do not describe it as deployed or merged until the pull request and CI results are verified.
- Stack versions in this document follow `package.json`: Next.js 16.4.0 and React 19.2.4.
