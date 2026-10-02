\# CODING\_RULES.md

\## Garfilas Coding Standards

\### Version 1.1.0



\---



\# Purpose



This document defines the coding standards used throughout the Garfilas project.



Every contributor and every AI must follow these rules.



Consistency is more important than personal preference.



\---



\# General Philosophy



Write code for humans.



Optimize readability first.



Optimize performance second.



Optimize cleverness never.



Code should be obvious.



If a future developer cannot understand it in 30 seconds,

rewrite it.



\---



\# Core Principles



✔ Keep it simple.



✔ Build reusable code.



✔ Mobile First.



✔ Performance First.



✔ Documentation First.



✔ Feature First.



✔ Accessibility Always.



\---



\# Clean Code Rules



Always



\- Small functions

\- Small components

\- Strong typing

\- Meaningful names

\- Consistent formatting

\- Single Responsibility Principle



Avoid



\- Large files

\- Nested logic

\- Duplicate code

\- Magic numbers

\- Anonymous business logic



\---



\# File Size



Preferred



Component



<200 lines



Hook



<150 lines



Utility



<100 lines



Page



<300 lines



Feature



Split when complexity grows.



\---



\# Folder Naming



Use lowercase.



Good



features/menu



shared/ui



core/config



Bad



MenuComponents



MyFolder



TEST



\---



\# File Naming



Components



PascalCase



Button.tsx



HeroSection.tsx



Hooks



camelCase



useCart.ts



useTheme.ts



Utilities



camelCase



formatPrice.ts



slugify.ts



Types



camelCase



order.ts



product.ts



Constants



UPPER\_CASE



COLORS.ts



BREAKPOINTS.ts



\---



\# Component Rules

Every component should

Be reusable where reuse is meaningful

Receive typed props when props exist

Have one responsibility

Avoid hidden side effects

Keep styling and behavior local when that improves maintainability

---

# Component Structure



Imports



↓



Types



↓



Constants



↓



Component



↓



Helper Functions



↓



Export



\---



\# Import Order



1\.



React



2\.



Next.js



3\.



External Libraries



4\.



Internal Libraries



5\.



Components



6\.



Hooks



7\.



Utilities



8\.



Styles



\---



Example



import Link from "next/link"



import { SomeLibrary } from "external-library"



import Button from "@/components/ui/Button"



import { cn } from "@/shared/lib/cn"



\---



\# Props Rules



Always create interfaces.



Good



interface ButtonProps



Never



function Button(props:any)



\---



\# TypeScript



Strict Mode



Enabled



Never use



any



Prefer



unknown



when needed.



Always type



Props



Functions



API responses



Stores



Utilities



\---



\# Naming Rules



Boolean



isOpen



hasError



canDelete



shouldAnimate



Functions



createOrder()



loadMenu()



calculatePrice()



Variables



menuItems



productCount



userAddress



Never



data



item



temp



value



x



\---



\# Functions



Functions should do one thing.



Good



calculateTotal()



Bad



calculateTotalAndSaveOrder()



Split responsibilities.



\---



\# Comments



Comment



Why



Not



What



Bad



// increase i



i++



Good



// Prevent duplicate orders



\---



\# Styling

Prefer Tailwind CSS v4 for general utility styling.

Use scoped component CSS when exact reference-locked geometry, animation selectors or pseudo-elements require it.

Avoid inline style props for static styling. A colocated <style> block is acceptable when it keeps tightly scoped component geometry together.

Use !important sparingly. It is permitted only when required to protect fixed reference geometry from competing global rules.

Reuse utility classes and reusable UI components where practical.



\---



\# Colors



Never hardcode colors.



Use Design Tokens.



Good



bg-primary



text-muted



Bad



bg-orange-500



text-white



\---



\# Spacing



Use design scale only.



4



8



12



16



24



32



40



48



64



Avoid random values.



\---



\# Responsive Design



Always



Mobile First.



Breakpoints



sm



md



lg



xl



2xl



Never design desktop first.



\---



\# State Management



Local State



useState



Shared State



Zustand



Server State



React Server Components



Avoid unnecessary global state.



\---



\# API



Never call APIs directly inside UI components.



Create



services/



Example



services/menu.ts



services/orders.ts



\---



\# Error Handling



Never ignore errors.



Always



try/catch



Display user-friendly messages.



Log developer errors.



\---



\# Async Rules



Always



async/await



Avoid



.then()



chains.



\---



\# Performance



Prefer



Server Components



Lazy Loading



Dynamic Imports



Image Optimization



Memoization only when needed.



\---



\# Accessibility



Every button



Accessible label



Every image



Alt text



Keyboard navigation



Visible focus



Readable contrast



\---



\# Forms



Validate



Client



Server



Never trust client input.



\---



\# Security



Never expose secrets.



Never trust user input.



Sanitize everything.



Validate everything.



Escape output where needed.



\---



\# Git Commits



Format



type(scope): message



Examples



feat(menu): add featured products



fix(cart): resolve quantity bug



refactor(hero): simplify layout



docs(readme): update setup guide



style(button): improve spacing



\---



\# Branch Naming



feature/menu



feature/cart



fix/navbar



docs/readme



refactor/layout



\---



\# Pull Requests



Every PR should



Be small



Be focused



Have description



Pass build



Update documentation



\---



\# Testing



Future



Unit Tests



Integration Tests



E2E Tests



Critical logic should always be testable.



\---



\# Documentation



Whenever architecture or significant visual calibration changes



Update



GARFILAS\_BIBLE.md



AI\_CONTEXT.md



SESSION\_LOG.md



TODO.md



DECISIONS.md



PROJECT\_STATE.md



CHANGELOG.md



\---



\# AI Rules



Before writing code



Read documentation.



Respect previous decisions.



Do not redesign approved systems.



For visual calibration, change one relevant variable at a time and preserve all already-approved element positions.



Do not add unnecessary dependencies.



Keep everything consistent.



\---



\# Golden Rule



Readable code wins.



Simple code wins.



Maintainable code wins.



Always.



\---



Last Updated

2026-10-02

Version

1.2.0



## 2026-10-02 Background Ownership Rule

- Persistent ambient effects that must continue across sections belong in `SiteBackground`, not inside a viewport-height Hero.
- Do not place large background layers inside `.hero` when `overflow:hidden` can terminate them at the section boundary.
- When moving an existing ambient layer from Hero to SiteBackground, preserve its visual geometry and animation unless a separate calibration change is requested.
- Hero foreground geometry remains protected during background maintenance.

Last Updated: 2026-10-02