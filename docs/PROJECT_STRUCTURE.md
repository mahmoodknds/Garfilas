.gitignore
AGENTS.md
CLAUDE.md
README.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
tsconfig.json
vercel.json
.vscode/
  settings.json

app/
  blank/
    page.tsx
  favicon.ico
  fonts.ts
  globals.css
  layout.tsx
  page.tsx

components/
  sections/
    BottomNavigation/
      BottomNavigation.tsx
    Hero/
      Hero.tsx
      HeroCTA.tsx
      HeroLogo.tsx
      HeroParticleEngine.tsx
  ui/
    GlowButton.tsx

config/
  brand.ts

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
    brand/
      garfilas-reference-logo.svg
    hero/
      garfilas-hero-final.webp
    ui/
      bottom-nav-frame.svg

styles/
  tokens.css

## 2026-10-03 Structure Cleanup

The repository tree above is the current source-of-truth structure on `main`.

### Active application code

- `app/page.tsx` composes Hero and Bottom Navigation.
- `app/layout.tsx` owns document-wide metadata, fonts and the fixed `HeroParticleEngine`.
- `components/sections/Hero/` contains the active Hero implementation.
- `components/sections/BottomNavigation/` contains the active Bottom Navigation.
- `components/ui/GlowButton.tsx` is the active reusable CTA primitive.
- `config/brand.ts` supplies the Hero CTA label.
- `styles/tokens.css` supplies active global design tokens imported by `app/globals.css`.

### Test/support code

- `app/blank/page.tsx` is a deliberate isolated background test route. It contains no Hero foreground.
- `public/Screenshot 2026-10-02 111606.png` is retained as project reference material and is not a runtime dependency.

### Confirmed removed legacy structure

The following are intentionally absent from the current tree:

- `components/layout/`
- `components/ui/Button.tsx`
- `components/ui/Container.tsx`
- `components/ui/GlassCard.tsx`
- `lib/constants.ts`
- `styles/animations.css`
- Hero and Bottom Navigation barrel `index.ts` files
- Legacy starter SVG assets under `public/`
- Redundant project-structure/info files at repository root
- `docs/PROJECT_INFO.md`

Do not recreate these files unless a new, source-backed requirement appears.

### Cleanup rule

Before deleting a file, verify both:

1. It is present in the current Git tree.
2. No active source file references or imports it.

Reference material and test routes are not dead code merely because they are not imported by the homepage.

Last Updated: 2026-10-03
