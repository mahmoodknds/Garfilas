.env.local
.gitignore
AGENTS.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json
app/
  favicon.ico
  fonts.ts
  globals.css
  layout.tsx
  page.tsx
components/
  layout/
    Logo.tsx
    SiteBackground.tsx
  sections/
    BottomNavigation/
      BottomNavigation.tsx
    Hero/
      Hero.tsx
      HeroCTA.tsx
      HeroLogo.tsx
      HeroParticleEngine.tsx
      index.ts
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
  PROJECT_INFO.md
  PROJECT_STATE.md
  PROJECT_STRUCTURE.md
  README.md
  SESSION_LOG.md
  TODO.md
public/
  assets/
    brand/
      garfilas-reference-logo.svg
    hero/
      garfilas-cat.svg
      garfilas-hero-final.webp
      garfilas-reference-hero-preview.jpg
      garfilas-reference-hero.svg
      italy-landmarks.svg
    ui/
      bottom-nav-frame.svg
styles/
  tokens.css

## 2026-10-02 Cleanup Update

The repository is intentionally limited to the active first-page implementation.

Active page composition:

- Hero
- Bottom Navigation

Removed from the active codebase:

- Deferred Featured Products section
- Deferred Story section
- Unused HeroContent and RingParticleEmitter prototypes
- Unused generic UI starter primitives
- Empty constants module
- Legacy particle test styles
- Legacy starter assets

The CTA remains the existing Hero CTA primitive because it is part of the active first-page visual system.

Last Updated: 2026-10-02
