# Dependency Security Audit

Last reviewed: 2026-10-12

## Summary

The repository's full npm audit reports a high-severity advisory for `braces@3.0.3`:
- Advisory: [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
- CVE: CVE-2026-93687
- Impact: deeply nested brace patterns can trigger stack exhaustion and terminate a Node.js process.
- Affected range: `braces <= 3.0.3`.
- Upstream patched version: none listed in the advisory as of this review.

## Dependency path and scope

The lockfile contains this development-tooling path:

`eslint-config-next@16.4.0 -> @next/eslint-plugin-next@16.4.0 -> fast-glob@3.3.1 -> micromatch@4.0.8 -> braces@3.0.3`

These packages are marked as development dependencies in `package-lock.json`. The production dependency audit previously returned zero vulnerabilities. The CI workflow now runs `npm audit --omit=dev` so vulnerabilities in shipped production dependencies block verification.

## Decision

- Do not run `npm audit fix --force`: npm may propose incompatible major-version changes.
- Do not silently suppress the advisory or install an unofficial fork without a separate compatibility and provenance review.
- Keep the full audit finding visible. The new CI gate covers production dependencies; it does not claim that the full development dependency tree is vulnerability-free.
- Recheck the advisory and dependency tree when upstream publishes a patched release or when the ESLint/Next.js toolchain is upgraded.
- On each review, run both `npm audit` and `npm audit --omit=dev`, plus lint and production build.

## Verification scope

A clean production dependency audit is not proof that the entire development toolchain is risk-free. The affected package is currently reached through build/lint tooling; avoid processing untrusted brace patterns with this tooling and keep CI dependencies and execution permissions restricted.
