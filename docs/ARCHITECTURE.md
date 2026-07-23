\# ARCHITECTURE.md

\## Garfilas System Architecture

\### Version 1.0.0



\---



\# Purpose



This document defines the software architecture of Garfilas.



It is the reference for folder structure, project organization, dependency direction and scalability.



Every new feature must follow this architecture.



\---



\# Architecture Style



Feature-Based Architecture



Inspired by



\- Vercel

\- Linear

\- shadcn/ui

\- Modern Next.js applications



Goals



\- Scalable

\- Modular

\- Reusable

\- Easy to maintain

\- AI-friendly

\- Production ready



\---



\# Technology Stack



Framework



Next.js 15 (App Router)



Language



TypeScript (Strict)



Styling



TailwindCSS



Animation



Framer Motion



Icons



Lucide React



State



Zustand



Database



PostgreSQL



ORM



Prisma



Deployment



Vercel



Package Manager



npm



\---



\# High-Level Architecture



```

Client

&#x20;     │

&#x20;     ▼

&#x20;Next.js App Router

&#x20;     │

&#x20;     ▼

&#x20;Feature Layer

&#x20;     │

&#x20;     ├─────────────┐

&#x20;     ▼             ▼

&#x20;Shared UI      Business Logic

&#x20;     │             │

&#x20;     ▼             ▼

&#x20;   Services ---- Prisma

&#x20;         │

&#x20;         ▼

&#x20;    PostgreSQL

```



\---



\# Project Structure



```

src/



│

├── app/

│

├── core/

│

├── features/

│

├── widgets/

│

├── entities/

│

├── shared/

│

├── hooks/

│

├── lib/

│

├── styles/

│

├── types/

│

└── config/

```



\---



\# app/



Contains



\- Routes

\- Layouts

\- Metadata

\- Loading UI

\- Error Pages

\- Server Components



Never place business logic here.



\---



\# core/



Application-wide configuration.



Contains



\- Providers

\- Theme

\- Fonts

\- Config

\- Constants

\- Environment



\---



\# shared/



Reusable code.



Structure



```

shared/



ui/



icons/



utils/



constants/



types/



hooks/



styles/

```



Everything here must be generic.



\---



\# features/



Every business feature lives here.



Example



```

features/



hero/



menu/



cart/



checkout/



profile/



orders/

```



Each feature owns



\- components

\- hooks

\- services

\- types

\- utils



\---



\# widgets/



Large UI sections.



Examples



Hero



Footer



Navbar



FeaturedProducts



StorySection



CTASection



Widgets compose features.



\---



\# entities/



Business models.



Examples



Product



Category



Order



Customer



Address



Coupon



Review



\---



\# services/



Server communication.



Never call API directly from UI.



Example



```

services/



menu.ts



cart.ts



orders.ts



auth.ts

```



\---



\# hooks/



Reusable hooks.



Examples



```

useCart()



useTheme()



useScroll()



useBreakpoint()



useAnimation()

```



\---



\# lib/



Third-party integrations.



Examples



```

prisma.ts



api.ts



cn.ts



env.ts

```



\---



\# types/



Global shared types.



Examples



```

product.ts



order.ts



user.ts



api.ts

```



\---



\# Dependency Rules



Allowed



```

app



↓



widgets



↓



features



↓



shared



↓



lib

```



Never reverse dependencies.



\---



\# Component Hierarchy



```

Page



↓



Widget



↓



Feature



↓



Shared UI



↓



HTML

```



\---



\# State Management



Local



useState



Feature



Zustand Store



Server



React Server Components



Database



Prisma



\---



\# Rendering Strategy



Prefer



Server Components



Use Client Components only when needed.



Examples



Needs Client



Animation



Forms



State



Scroll



Everything else



Server Components



\---



\# Styling Strategy



TailwindCSS



↓



Design Tokens



↓



Reusable Components



↓



Feature Styling



Never create page-specific utility chaos.



\---



\# Design Tokens



Centralized.



Includes



Colors



Spacing



Radius



Typography



Motion



Shadow



Blur



Breakpoints



\---



\# Responsive Strategy



Mobile First



Breakpoints



```

sm



md



lg



xl



2xl

```



Desktop extends mobile.



\---



\# Performance Strategy



Priority



1\.



Server Components



2\.



Image Optimization



3\.



Code Splitting



4\.



Dynamic Imports



5\.



Lazy Loading



\---



\# SEO Strategy



Each page owns



Metadata



OpenGraph



Twitter Cards



Canonical



Structured Data



\---



\# Accessibility



Every interactive element



Keyboard Accessible



Every image



Alt



Every form



Labels



Every dialog



Focus Trap



\---



\# Error Handling



Global Error



error.tsx



Loading



loading.tsx



Not Found



not-found.tsx



API Errors



Handled by services



\---



\# Authentication (Future)



Auth Layer



↓



Middleware



↓



Protected Routes



↓



Role Checking



\---



\# Database Architecture



```

Users



↓



Orders



↓



Order Items



↓



Products



↓



Categories

```



Future



Coupons



Reviews



Notifications



Analytics



\---



\# Deployment Flow



Developer



↓



GitHub



↓



Vercel



↓



Production



\---



\# Documentation Flow



Every major change



↓



Update Documentation



↓



Commit



↓



Deploy



\---



\# AI Workflow



Every AI must



Read



GARFILAS\_BIBLE.md



↓



AI\_CONTEXT.md



↓



DECISIONS.md



↓



PROJECT\_STATE.md



↓



Start Coding



\---



\# Forbidden



❌ Large Components



❌ Business Logic inside Pages



❌ API calls inside UI



❌ Duplicate Components



❌ Circular Dependencies



❌ Hardcoded Colors



❌ Hardcoded Strings



❌ Unnecessary Client Components



\---



\# Future Architecture



```

Monolith



↓



Modular Monolith



↓



Microservices (if needed)

```



Microservices are NOT planned before v2.



\---



\# Architecture Goals



✔ Fast



✔ Clean



✔ Modular



✔ Scalable



✔ Maintainable



✔ AI-Friendly



✔ Production Ready



\---



Last Updated



2026-07-21



Version



1.0.0

