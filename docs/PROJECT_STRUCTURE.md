# Garfilas Repository Structure

Canonical tree for the current `main` branch. Reconcile it after any repository structure change.

```text
.github/
  workflows/build.yml
.vscode/
  settings.json
app/
  favicon.ico
  fonts.ts
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  sections/
    BottomNavigation/BottomNavigation.tsx
    Hero/
      Hero.tsx
      HeroCTA.tsx
      HeroLogo.tsx
      HeroParticleEngine.tsx
    Menu/
      MenuQuantityControl.tsx
      MenuCardFrame.tsx
      MenuProductCard.tsx
      MenuScrollReveal.tsx
      MenuSection.module.css
      MenuSection.tsx
      menu.css
    Cart/
      CartProvider.tsx
      CartSection.module.css
      CartSection.tsx
  ui/GlowButton.tsx
config/
  brand.ts
  site.ts
docs/
  AI_CONTEXT.md
  ARCHITECTURE.md
  CHANGELOG.md
  CODING_RULES.md
  DECISIONS.md
  GARFILAS_BIBLE.md
  PROJECT_STATE.md
  PROJECT_STRUCTURE.md
  README.md
  SESSION_LOG.md
  TODO.md
public/
  Screenshot 2026-10-02 111606.png
  assets/
    brand/garfilas-reference-logo.png
    hero/garfilas-hero-final.webp
    menu/Lasagna.webp
    ui/bottom-nav-frame.svg
styles/tokens.css

Root configuration:
  .gitignore
  AGENTS.md
  CLAUDE.md
  README.md
  eslint.config.mjs
  next.config.ts
  package.json
  package-lock.json
  postcss.config.mjs
  tsconfig.json
  vercel.json
```

## Runtime ownership

- `app/page.tsx` composes the active homepage: Hero → Menu → Cart inside `main`, followed by fixed Bottom Navigation.
- `app/layout.tsx` owns metadata, fonts, global styles, and the fixed `HeroParticleEngine`.
- `app/globals.css` owns the global atmosphere and current Hero/CTA styling.
- `components/sections/Hero/` contains the active Hero.
- `components/sections/BottomNavigation/BottomNavigation.tsx` contains the active fixed navigation.
- `components/ui/GlowButton.tsx` is the CTA presentation primitive.
- `config/brand.ts` supplies the brand CTA label.
- `config/site.ts` is the single source for the canonical public site URL used by metadata, robots directives, and the sitemap.
- `styles/tokens.css` defines the shared color tokens imported by global CSS.

## Menu and Cart ownership

- `MenuSection.tsx` is the active menu list rendered on the homepage; `MenuQuantityControl.tsx` renders each product's plus/count/minus controls immediately below its price, bound to shared cart state.
- `CartProvider.tsx` owns cart state, quantity changes, removals, subtotal calculation, and localStorage persistence.
- `CartSection.tsx` renders the inline cart below Menu. The Bottom Navigation's existing `#cart` link scrolls to this section.
- `MenuProductCard.tsx` and `MenuCardFrame.tsx` remain a separate visual prototype; they are not mounted by the active homepage.
- `public/assets/menu/Lasagna.webp` is retained for that prototype.
- `public/Screenshot 2026-10-02 111606.png` is visual reference material, not a runtime dependency.
- `CLAUDE.md` points Claude-based tooling to `AGENTS.md`.

## Cleanup decisions

- Removed unused `public/assets/menu/garfilas-card-frame.webp`: the menu card now draws its frame through `MenuCardFrame.tsx`.
- Legacy starter SVGs, unused layout/UI wrappers, unused barrel exports, and redundant project-info files remain intentionally absent.
- `vercel.json`, `.vscode/settings.json`, `.github/workflows/build.yml`, brand assets, and the reference screenshot are retained because they serve configuration, CI, runtime, or reference purposes.
- Do not delete a file solely because it is not imported by the homepage. Confirm whether it is deliberate prototype/reference material first.

Last updated: 2026-10-16

## 2026-10-10 Canonical Tree and Deployment Notes

This tree describes the repository after cleanup PR #8 was merged into `main`; it is no longer a pre-merge cleanup-branch snapshot. The temporary `app/blank/page.tsx` test route is removed.

- `config/site.ts` is the shared canonical URL source and currently contains `https://garfilas.ir`.
- `app/robots.ts` and `app/sitemap.ts` are active generated metadata routes.
- The active homepage now contains a Menu section and inline Cart section; only `MenuProductCard.tsx`/`MenuCardFrame.tsx` remain a dormant prototype.
- `HeroParticleEngine.tsx` anchors to the active `.hero-orbit-one` element; there is no active blank-route fallback.
- Latest known Production deployment is READY on merge commit `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`; browser/device verification remains outstanding.


## 2026-10-16 Inline Cart Update

- The homepage section order is Hero → Menu → Cart.
- Cart is a section within the homepage, not a new App Router path.
- The cart anchor is `id="cart"`; the fixed center navigation item targets `#cart`.
- `CartProvider` is a lightweight client context with localStorage persistence; no state-management package or backend has been added.

## 2026-10-16 Quantity and contextual navigation update

- Menu quantity steppers now sit directly beneath each product price and reflect the shared cart quantity.
- The center fixed navigation displays the total quantity badge outside Cart.
- While Cart is visible, its center action changes to Menu for an empty cart or Payment for a non-empty cart. The Payment control targets `#cart-summary`; real payment/checkout integration is still not implemented.
