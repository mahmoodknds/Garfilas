\# DECISIONS.md

\## Garfilas Architecture Decision Records (ADR)

\### Version 2.0.0



\---



\# Purpose



This document records every architectural, design and business decision made during the Garfilas project.



Every important decision must be documented.



Documentation is the permanent memory of the project.



\---



\# ADR-001



\## Project Direction



Status



✅ Approved



Decision



Garfilas will be a premium online restaurant experience instead of a traditional restaurant website.



Reason



The goal is building a memorable digital brand rather than just displaying products.



Impact



All future UI, UX and branding decisions follow this philosophy.



\---



\# ADR-002



\## Mobile First



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



\---



\# ADR-003



\## Performance First



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



\---



\# ADR-004



\## Revenue Before Complexity



Status



✅ Approved



Decision



Only build features that increase business value.



Avoid unnecessary engineering.



Reason



Shipping valuable software is more important than building complex software.



\---



\# ADR-005



\## Feature Based Architecture



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



\---



\# ADR-006



\## Technology Stack



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



\---



\# ADR-007



\## State Management



Status



✅ Approved



Decision



Use Zustand.



Reason



Simple.



Lightweight.



Excellent developer experience.



Avoid Redux unless future requirements demand it.



\---



\# ADR-008



\## Design Language



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



\---



\# ADR-009



\## Hero Section



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



\---



\# ADR-010



\## Mascot Strategy



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



\---



\# ADR-011



\## Bottom Navigation



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



\---



\# ADR-012



\## Animation Philosophy



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



\---



\# ADR-013



\## Component Strategy



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



\---



\# ADR-014



\## Typography



Status



✅ Approved



Persian



Vazirmatn



English



Poppins



Reason



Excellent readability.



Modern appearance.



\---



\# ADR-015



\## Icons



Status



✅ Approved



Decision



Lucide Icons.



Reason



Minimal.



Consistent.



Modern.



\---



\# ADR-016



\## Documentation First



Status



✅ Approved



Decision



Documentation is mandatory.



Every sprint updates



SESSION\_LOG.md



TODO.md



PROJECT\_STATE.md



CHANGELOG.md



Reason



AI memory is temporary.



Documentation is permanent.



\---



\# ADR-017



\## AI Collaboration



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



\---



\# ADR-018



\## SEO Strategy



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



\---



\# ADR-019



\## Accessibility



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



\---



\# ADR-020



\## Git Workflow



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



\---



\# ADR-021



\## Landing Page MVP Scope



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



\---



\# ADR-022



\## Project Motto



Status



✅ Approved



Official Motto



Revenue Before Complexity.



Launch First.



Improve Continuously.



Reason



Represents the philosophy of the entire project.



\---



\# Future ADRs



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



\---



Last Updated



2026-07-21



Documentation Version



2.0.0

