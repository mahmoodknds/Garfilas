 .gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json
.vscode/
  settings.json
app/
  favicon.ico
  fonts.ts
  globals.css
  layout.tsx
  page.tsx
components/
  layout/
    SiteBackground.tsx
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

## 2026-10-02 Cleanup Update

The repository is intentionally limited to the active first-page implementation.

Active page composition:

- Hero
- Bottom Navigation

Active shared layers:

- `SiteBackground.tsx`
- `HeroParticleEngine.tsx`

Active configuration/style support:

- `config/brand.ts` is consumed by the Hero CTA.
- `styles/tokens.css` is imported by `app/globals.css`.

Removed from the active codebase:

- Deferred Featured Products and Story sections
- Unused Hero prototypes
- Unused generic UI starter primitives
- Empty constants module
- Legacy particle test styles
- Legacy starter assets
- Unused component-level style blocks
- Unused Hero barrel export
- Unused Bottom Navigation barrel export
- Redundant root-level `PROJECT_INFO.md`
- Redundant root-level `PROJECT_STRUCTURE.md`
- Redundant `docs/PROJECT_INFO.md`

Last Updated: 2026-10-02
