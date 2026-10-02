# CHANGELOG.md

## [Unreleased]

### 2026-10-02 Repository Cleanup Continuation

#### Removed

- Removed unused `components/sections/Hero/index.ts` barrel export.
- Removed unused `components/sections/BottomNavigation/index.ts` barrel export.
- Removed redundant root-level `PROJECT_INFO.md` and `PROJECT_STRUCTURE.md`.
- Removed duplicate `docs/PROJECT_INFO.md`.
- Updated `docs/PROJECT_STRUCTURE.md` to reflect the current repository tree.

#### Reason

- Keep the repository limited to files with a clear active purpose.
- Avoid duplicate project metadata and unused import surfaces.
- Keep the documented structure aligned with the actual repository.

### 2026-10-02 Cleanup Pass

- Removed the remaining dead global CTA CSS block.
- Consolidated the duplicate `hero-product-name` CSS rule while preserving its active animation.
- Synchronized current architecture and responsive-state documentation with the active codebase.

### 2026-10-02 Deployment Trigger

- Documentation-only commit created to retrigger the GitHub → Vercel Production integration after the latest cleanup commits.
- No application source or visual behavior is changed by this trigger commit.
