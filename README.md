# Garfilas

Premium online lasagna brand and mobile-first landing page MVP.

## Stack

- Next.js 16.2.10 (App Router)
- React 19.2.4
- TypeScript (strict)
- Tailwind CSS v4
- Lucide React
- Vercel deployment

## Current scope

The active homepage contains the Hero and Bottom Navigation. The foreground composition is intentionally being stabilized before additional sections are introduced.

## Structure

- `app/` contains the App Router and global styles.
- `components/sections/` contains page features such as Hero and Bottom Navigation.
- `components/ui/` contains active reusable UI primitives.
- `config/` contains the brand label and the single canonical public site URL.
- `styles/` contains shared design tokens.
- `docs/` contains project source-of-truth documentation.

## Development

`npm ci`

`npm run dev`

`npm run lint`

`npm run build`

## Documentation

Read these before changing the project:

- `docs/GARFILAS_BIBLE.md`
- `docs/PROJECT_STATE.md`
- `docs/AI_CONTEXT.md`
- `docs/DECISIONS.md`
- `docs/ARCHITECTURE.md`
- `docs/CODING_RULES.md`

## Principle

Revenue Before Complexity. Launch First. Improve Continuously.

## SEO foundation

The homepage has canonical and social-sharing metadata. Next.js generates `robots.txt` and a homepage-only `sitemap.xml`; the canonical public URL is maintained in `config/site.ts`.
