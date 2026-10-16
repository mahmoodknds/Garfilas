## 2026-10-09 Deployment and Background Test State

- GitHub → Vercel Git integration was reconnected by the project owner.
- The previously failing production deployment was caused by a missing closing parenthesis in `HeroParticleEngine.tsx`; the source fix is now on `main`.
- The temporary `/blank` background-test route was removed on 2026-10-09 after the background test was accepted; do not recreate it unless a new isolated test is explicitly needed.
- The background particle engine now uses the active `.hero-orbit-one` element as its ring anchor; the obsolete blank-page anchor fallback was removed.
- The reduced-motion accessibility guard skips the decorative particle engine when `prefers-reduced-motion: reduce` is active; this change is on the review branch and is not yet in Production.
- Do not create additional trigger-only commits unless a real source change also needs deployment.
- Production must be checked by deployment commit SHA before visual acceptance.

Verification state:
- GitHub source: synchronized.
- GitHub Actions: ESLint and production build passed for the current Production source commit `7eec60c99358b7fdf625e8cf9b80c20c9c8beb3f`.
- Vercel Production: source commit `7eec60c99358b7fdf625e8cf9b80c20c9c8beb3f` (`perf(brand): serve responsive optimized wordmark`) reached `READY`; the earlier deployment-rate-limit rejection has cleared.
- Browser/device render verification: pending.
- Current cleanup branch adds homepage metadata, Open Graph/Twitter summaries, `robots.txt`, and a homepage-only `sitemap.xml`; JSON-LD remains deferred until structured business/menu facts are confirmed.
- The project owner confirmed optimized image response sizing/format and visual quality for the wordmark and Hero mascot.

# Garfilas Current Project State

## Current State

- Version: v0.1.0
- Sprint: 0.4
- Milestone: Landing Page MVP
- Repository: GitHub / `main`
- Status: Active Development
- Last Updated: 2026-10-16

## Current Objective

Preserve the approved Hero composition while building the active Menu → Cart ordering flow on the same scrollable homepage. The Cart section belongs directly below Menu and is reached from the fixed center navigation control.

## Current Hero Implementation

Native React/CSS/SVG composition using independent assets.

Primary assets:

- `public/assets/hero/garfilas-hero-final.webp` (temporary Hero artwork pending final replacement)
- `public/assets/brand/garfilas-reference-logo.png` (extracted from the former SVG wrapper and served through `next/image`)
- `public/assets/ui/bottom-nav-frame.svg`

Current composition:

1. Temporary Garfield + lasagna artwork
2. One controlled orange/gold neon ring around the Hero
3. GARFILAS wordmark (transparent PNG extracted from the former SVG wrapper and served through `next/image`)
4. LASAGNA HTML lockup with side lines
5. Italian flag accent
6. HTML slogan
7. Neon `منو Menu` CTA
8. Upward-pointing scroll cue
9. Pill Bottom Navigation

Current layout direction:

- Bottom Navigation is the fixed lower anchor.
- Hero, logo stack, slogan, CTA and scroll cue are being calibrated as one vertical composition.
- The temporary Hero artwork and its single neon ring are being sized/positioned now; final artwork replacement comes later.
- Extra background construction lines, architecture and secondary rings/halos are intentionally removed for the current layout-calibration phase.
- Background and architectural details will be rebuilt only after foreground placement is stable.

## LASAGNA Typography State

`components/sections/Hero/HeroLogo.tsx` owns the LASAGNA lockup.

- High-contrast display treatment remains the direction.
- Weight remains light rather than bold.
- Letter spacing and side-line geometry were calibrated against the reference.
- Warm gold/orange neon treatment remains reference-driven.

## Slogan State

The slogan remains HTML text:

`Layers of Love, Taste of Italy`

- Current font/spacing/color treatment remains under visual calibration.
- Previous `line-height` experiments did not materially increase visible glyph height and are not considered a solution for future typography changes.
- Latest mobile slogan calibration: `margin-top` changed from `.72rem` to `.60rem`, moving only the slogan slightly upward.
- Do not distort the slogan vertically without a direct reference comparison.

## Exact Current Hero Positioning

- Unified mascot/orbit vertical anchor: `27.5%`
- Unified Hero copy vertical anchor: `51.3%`
- Unified CTA: `top:73.6%`
- Unified scroll cue: `top:80.5%`
- On very short viewports (`max-height:600px`), the decorative scroll cue is hidden.
- Bottom Navigation fixed frame height: `5.8rem`.
- Mobile, tablet and desktop use the same vertical composition; sizing may adapt through existing width/clamp rules.
- Mobile slogan `margin-top`: `.60rem`.

Older values such as `52.8%`, `76%` and `83.5%` are historical calibration records only and do not describe the active source.

## Menu CTA State

`components/ui/GlowButton.tsx` is the current CTA visual primitive.

- Label: `منو Menu`
- Persian is on the right; English is on the left.
- Persian text color/light treatment is now matched to the English `Menu` treatment.
- The vertical gap between the slogan and CTA was increased from the previously cramped state.
- Button remains slim and premium.
- Stars are small, symmetric four-point accents with multi-layer glow/twinkle animation.
- Light Sweep runs on a 3-second cycle.
- Sweep is narrow and angled.
- Sweep uses a bright white-gold core with restrained orange-gold fringe.
- Sweep exits quickly rather than lingering on the button.
- CTA neon breathe remains 2 seconds.

## Navigation Calibration State

- Bottom Navigation frame is a native SVG visual asset.
- Center button vertical position is currently locked at `50.671875%`.
- Center button size remains unchanged from the approved calibration.
- Decorative center dots beneath the center button have been removed from the active implementation.
- Side buttons remain independently positioned and should not move when adjusting the center button.
- Navigation remains under final visual calibration against the reference.

## Hero Scroll Cue State

- Scroll cue arrows point upward.
- The cue position is calibrated relative to the CTA and Bottom Navigation.
- Its final placement must be checked against the latest reference after the foreground stack is stabilized.

## Important Asset Change

`public/assets/brand/garfilas-slogan-exact.svg` is no longer used and was removed from the active implementation because it produced a duplicate/broken-image render. The slogan is now rendered as HTML text.

## Logo Animation

GARFILAS uses a fluorescent/neon electrical-fault effect: long stable light, gradual dimming, irregular flicker, near-off moment and recovery flickers.

Latest change:

- GARFILAS neon fault animation is implemented in `app/globals.css`.
- Current cycle: 15 seconds.
- LASAGNA and slogan remain independent from the GARFILAS fault animation.

## Verification State

- Temporary Hero WebP integration: completed
- Hero temporary size and single-ring direction: in calibration
- Extra Hero rings/halos: removed for current calibration
- Extra Hero background grid/construction lines: removed for current calibration
- Background architecture: global body atmosphere plus fixed particle engine
- Wordmark extraction to transparent PNG and responsive `next/image` delivery: completed
- Old slogan SVG dependency: removed
- HTML slogan: completed; visual acceptance pending
- LASAGNA lockup: implemented and refined against reference; acceptance pending
- LASAGNA side lines: implemented
- Italian flag: implemented
- Neon fault animation: implemented and slowed to 15s
- Mobile slogan position: raised slightly to `.60rem` margin-top.
- Local `npm run build`: previously verified on 2026-10-02; the latest source commit also passed GitHub Actions lint and build
- Production visual verification: pending
- Responsive audit foundation: implemented for safe-area handling, tablet scaling and desktop scaling
- `/blank` global-background test route: removed after verification
- Final Hero acceptance: pending

## Current Background Architecture

- Global document atmosphere is owned by the `body` background in `app/globals.css`.
- Fixed live particles are owned by `HeroParticleEngine.tsx`.
- The engine resolves its ring anchor from `.hero-orbit-one`.
- The temporary blank route was removed after the background review; do not assume it exists.
- Ring particle volume remains approximately constant through immediate replacement when ring particles finish.
- The previous ring-pulse/emission experiment is not part of the current behavior.

## Latest Calibration Commits

- `9184b226714e7b7d83e2f3517bd6d538a2b67b8d` — restore scroll arrows position
- `e84ff9f777d4e999499f57a362785f6225a55f04` — raise mobile slogan slightly

## Exact Next Step

1. Verify the current homepage in a real browser on mobile and desktop.
2. Verify Next.js optimized delivery for the 1.4 MB wordmark source without changing its appearance.
3. Preserve the active Menu section and shared cart behavior while checking responsive layout.
4. Finalize foreground Hero acceptance as a parallel visual QA task; do not treat it as a blocker for the requested inline Cart scope.
5. Verify the deployed commit SHA before accepting visual changes; do not create trigger-only commits.

## Source of Truth

- Product/brand authority: `docs/GARFILAS_BIBLE.md`
- Implementation state: this file
- Development history: `docs/SESSION_LOG.md`
- Work backlog: `docs/TODO.md`
- AI continuity: `docs/AI_CONTEXT.md`
- Current visual source: user-supplied mobile reference screenshot

## Current authoritative checkpoint (2026-10-10)

### Repository and release state

- Cleanup PR #8 is merged into `main`.
- Merge commit: `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`.
- The merge includes responsive optimized Hero imagery, reduced-motion handling for decorative motion, semantic homepage heading structure, bottom navigation outside the main landmark, core metadata, Open Graph/Twitter summary metadata, `robots.txt`, and `sitemap.xml`.
- GitHub Actions passed for the reviewed PR head. The Vercel production deployment for the merge commit was reported READY. A READY deployment is not a substitute for browser/device visual acceptance.
- Latest known production alias is `garfilas.vercel.app`. Do not claim `garfilas.ir` is live based on code configuration alone.

### Canonical domain and hosting

- `config/site.ts` sets `https://garfilas.ir` as the canonical site URL used by metadata and sitemap/robots generation.
- DNS, custom-domain attachment, SSL, and cPanel/DirectAdmin deployment are not verified as complete.
- Before changing DNS, confirm the hosting panel supports a compatible Node.js runtime and determine the provider's Next.js process/startup requirements.

### Current work mode

Perform a final quality pass before further refactoring: responsive visual comparison, reduced-motion check, build/lint, performance/font/image review, and SEO endpoint validation. Record only observed defects and fix only confirmed issues. Preserve already-approved CTA animation and layout anchors unless testing demonstrates a regression.

## 2026-10-10 Authoritative Current State

This section supersedes older deployment/status statements above where they describe an earlier point in time.

- Cleanup PR #8 is merged into `main`; merge commit: `186fbbe43e7b5cf6832d5c0777cfff90c4762c4a`.
- Latest known Vercel Production deployment was checked READY for that commit; confirmed alias: `garfilas.vercel.app`.
- Canonical site configuration is `https://garfilas.ir` in `config/site.ts`. This does not prove DNS, host routing, or SSL is configured.
- Final browser/device visual acceptance is pending. Deployment READY and successful build are not substitutes for visual QA.
- Migration to cPanel/DirectAdmin is pending confirmation of panel type, Node.js support/version, and available deployment access. Do not change DNS until the hosting target is confirmed.

### Next execution sequence
1. Inspect the latest Production source and commit SHA.
2. Confirm lint and production build for the exact release source.
3. Verify deployed renders on mobile, tablet, and desktop, including scroll continuity and reduced motion.
4. Review font/image loading and Lighthouse/performance findings; fix only evidence-backed issues.
5. Verify `robots.txt`, `sitemap.xml`, canonical URL, DNS, and SSL once the intended host is connected.
6. Confirm host capabilities, then prepare the correct deployment method.


## 2026-10-16 Current Cart Implementation State

- The homepage order is Hero → Menu → Cart. Cart is a section in `app/page.tsx`, not a standalone route.
- The fixed center navigation item already targets `#cart`; adding the section's matching ID enables native smooth scrolling without changing its locked geometry.
- Menu items now expose an add-to-cart control. Shared state is managed by `components/sections/Cart/CartProvider.tsx` and persisted in localStorage.
- The cart section supports empty/loading states, quantity adjustments, item removal, item count, and subtotal.
- Checkout, payment, customer notes, coupon entry, backend order storage, and order confirmation are not implemented.
- This source update is on `feature/cart-section`. GitHub Actions Build verification run #200 passed lint and production build; Vercel Preview reached READY. Real-browser responsive/interaction acceptance, merge, and Production release remain pending.


## 2026-10-16 Cart Controls Visual Refinement (Review Branch)

This section is the latest cart UI checkpoint and supersedes older cart-control styling notes above.

- Review branch: `feature/cart-controls-polish`.
- With quantity zero, a product shows only «افزودن». At quantity one, the control is plus/count/trash; at higher quantities it is plus/count/minus. The trash action removes the last item.
- Quantity controls sit beside the product-card star. Counts use English numerals and the price's display typography; plus/minus controls are larger.
- The fixed cart badge is a single English-numeral count directly above the cart glyph, without a colored badge background.
- In the Cart section, the center nav shows only «منو» when empty and only «پرداخت» when non-empty, using the landing CTA's gold-gradient text treatment and no icon.
- Source-level editing is complete. GitHub Actions, Preview deployment, responsive interaction checks, merge and Production verification are pending for this review branch.
- Payment is still only a link to the order summary; no payment gateway or order submission has been implemented.


## 2026-10-17 Menu Pricing and Cart Invoice (Review Branch)

- Review branch: `feature/cart-bill-empty-modal`.
- Menu price alignment is preserved with the item name and center leader; the first product, Garfi, is a deliberate 50% demo offer. Original price is crossed diagonally and discounted price is shown beside it; the shared cart and discount total use the discounted price.
- A downward triple-chevron cue appears at the end of the menu.
- Empty cart state is not a separate visible page. The Cart section collapses when no products exist, and clicking the fixed cart icon opens a glass dialog saying «سبد خرید هنوز خالی است».
- The cart shows compact product-style item cards without descriptions, larger quantity controls, a notes textarea, and an invoice with the requested rows.
- Packaging, delivery and tax rates have not been supplied. They show «تعیین نشده»; the displayed payable amount is marked provisional and does not fabricate those charges.
- Order notes are currently held in UI state only and are not sent to a backend.
- Review branch source is under verification. CI/Preview, responsive visual review, merge and Production deployment must be confirmed separately.


## Current authoritative cart release state (2026-10-17)

This section supersedes the older review-branch/pending-release statements above for the current Menu and Cart work.

- PR #17, “Refine menu prices and redesign empty cart and invoice,” was merged to `main` as `8ab153d0d54140ed5ec8897d4233756a21d1cbcf`.
- GitHub Actions Build verification run #220 passed Lint and the Next.js production build for the reviewed head.
- Vercel Preview reached READY for the reviewed head. Vercel Production reached READY for merge commit `8ab153d0d54140ed5ec8897d4233756a21d1cbcf`; the verified production deployment was `dpl_4wEBzd3HUCxwcF6jTPV9xtBSchA3` with alias `garfilas.vercel.app`.
- The 50% Garfi offer is a demonstration promotion. It affects the menu price, cart line total and discount sum.
- Packaging, delivery and tax are intentionally marked as undetermined until actual rates are supplied. The displayed payable amount is provisional.
- Order notes currently remain in client UI state and are not submitted to an order backend.
- A real-device/browser visual interaction pass was not available here; responsive visual acceptance remains a separate QA item.


## Menu Alignment and Empty-Cart Toast Follow-up (2026-10-17)

- Review branch: `fix/menu-price-stability-empty-toast`.
- Menu's product name, leader line, and price share a stable independent row. The add/quantity control and star are moved to a separate row beneath the description, so adding an item cannot resize or reposition the price row.
- The old price keeps the same price font and typography; a diagonal line is drawn as a separate overlay.
- The discount badge shows only the percentage, styled as compact translucent glass with a subtle glossy highlight.
- The empty-cart interaction now shows only a small glass text toast. Clicking anywhere dismisses it without blocking the page; Escape also dismisses it.
- CI, Vercel Preview, merge, and Production verification for this follow-up remain pending.


## Current Menu Price/Empty-Cart Toast Release (2026-10-17)

This is the authoritative state for the latest menu layout and empty-cart interaction changes; it supersedes the earlier pending-release note above.

- PR #18, “Stabilize menu price row and simplify empty-cart message,” was merged into `main` as `655db9b68342d4f528bca9c799672cf7855603fd`.
- GitHub Actions Build verification run #227 passed lint and production build for the reviewed branch head.
- Vercel Preview reached READY for the reviewed head; Production reached READY for merge commit `655db9b68342d4f528bca9c799672cf7855603fd` with alias `garfilas.vercel.app`.
- Menu action controls and star now occupy their own lower row; product name, leader and price occupy an independent row so add-state width changes do not reflow the price line.
- The original price retains the same type treatment and uses a diagonal pseudo-element strike. The offer badge is percentage-only glass styling.
- The empty-cart state is a small, text-only glass toast dismissed by any page click or Escape, without a full-screen dimming overlay.
- Real-device/browser visual comparison remains unperformed; the UI release is build-verified but still benefits from responsive visual QA.
