# Garfilas Repository Structure

Canonical tree for the current `main` branch. Update this file whenever files are added, moved, or removed.

```text
.github/
  workflows/build.yml
.vscode/
  settings.json
app/
  blank/page.tsx
  favicon.ico
  fonts.ts
  globals.css
  layout.tsx
  page.tsx
components/
  sections/
    BottomNavigation/BottomNavigation.tsx
    Hero/
      Hero.tsx
      HeroCTA.tsx
      HeroLogo.tsx
      HeroParticleEngine.tsx
    Menu/
      MenuCardFrame.tsx
      MenuProductCard.tsx
      menu.css
  ui/GlowButton.tsx
config/brand.ts
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

- `app/page.tsx` composes the active homepage: Hero and Bottom Navigation.
- `app/layout.tsx` owns metadata, fonts, global styles, and the fixed `HeroParticleEngine`.
- `app/globals.css` owns the global atmosphere and current Hero/CTA styling.
- `components/sections/Hero/` contains the active Hero.
- `components/sections/BottomNavigation/BottomNavigation.tsx` contains the active fixed navigation.
- `components/ui/GlowButton.tsx` is the CTA presentation primitive.
- `config/brand.ts` supplies the brand CTA label.
- `styles/tokens.css` defines the shared color tokens imported by global CSS.

## Deliberately retained support code

- `app/blank/page.tsx` is an isolated background test route. It has no Hero foreground.
- `components/sections/Menu/` is a dormant menu-card prototype. It is not mounted by the homepage and must not be treated as shipped menu functionality. Preserve it while the menu design is still being developed; before activating it, review its client-state, accessibility, pricing, and responsive behavior.
- `public/assets/menu/Lasagna.webp` is used by the menu-card prototype.
- `public/Screenshot 2026-10-02 111606.png` is visual reference material, not a runtime dependency.
- `CLAUDE.md` points Claude-based tooling to `AGENTS.md`.

## Cleanup decisions

- Removed unused `public/assets/menu/garfilas-card-frame.webp`: the menu card now draws its frame through `MenuCardFrame.tsx`.
- Legacy starter SVGs, unused layout/UI wrappers, unused barrel exports, and redundant project-info files remain intentionally absent.
- `vercel.json`, `.vscode/settings.json`, `.github/workflows/build.yml`, brand assets, and the reference screenshot are retained because they serve configuration, CI, runtime, or reference purposes.
- Do not delete a file solely because it is not imported by the homepage. Confirm whether it is deliberate prototype/reference material first.

Last updated: 2026-10-09
