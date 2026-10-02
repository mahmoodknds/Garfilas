.env.local
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json
app\favicon.ico
app\globals.css
app\layout.tsx
app\page.tsx
components\layout\Logo.tsx
components\sections\BottomNavigation\BottomNavigation.tsx
components\sections\BottomNavigation\index.ts
components\sections\Hero\Hero.tsx
components\sections\Hero\HeroContent.tsx
components\sections\Hero\HeroCTA.tsx
components\sections\Hero\HeroLogo.tsx
components\sections\Hero\index.ts
components\ui\Button.tsx
components\ui\Container.tsx
components\ui\GlassCard.tsx
components\ui\GlowButton.tsx
components\ui\Section.tsx
config\brand.ts
docs\AI_CONTEXT.md
docs\ARCHITECTURE.md
docs\CHANGELOG.md
docs\CODING_RULES.md
docs\DECISIONS.md
docs\GARFILAS_BIBLE.md
docs\PROJECT_STATE.md
docs\README.md
docs\SESSION_LOG.md
docs\TODO.md
lib\constants.ts
public\file.svg
public\globe.svg
public\next.svg
public\vercel.svg
public\window.svg
styles\animations.css
styles\tokens.css

## 2026-10-02 Structure Update

The active project structure now includes:

`components/layout/SiteBackground.tsx`

This component is mounted from `app/layout.tsx` and owns the persistent global ambient background. Hero.tsx no longer owns the large ambient Hero glow or the former local ambient scene. Hero remains responsible for foreground composition.

The current background architecture is intentionally global so new sections can remain transparent and share the same Garfilas atmosphere.

Last Updated: 2026-10-02