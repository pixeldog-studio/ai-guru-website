---
name: quality-gate
description: Full pre-merge check that runs tests, responsive, animation, and SEO checks and produces a pass/fail table. Use before merging risky or wide-reaching PRs. Merging to main deploys to production.
disable-model-invocation: true
---

# Quality Gate - Full Check

Run every check and report one table. Merging to `main` deploys to www.hustlrr.ai, so this is the last stop.

## Steps

1. **Tests**: follow the `run-tests` skill (`npm run verify`, then `npm run test:e2e`). If this fails, stop and report. The remaining checks are pointless on a broken build.
2. **Responsive**: follow `check-responsive` for `/`, `/blog`, one blog article, `/features/multi-model-chat`, `/compare/hustlrr-vs-chatgpt`, and `/de` versions of any page the branch touched.
3. **Animations**: follow `check-animations` on `/`, including the reduced-motion pass.
4. **SEO**: follow `check-seo` against the build in `dist/`.
5. **Visual diff**: if the branch is meant to be visually neutral (refactor or deps), follow `visual-compare` for `/`.

## Report

| Check | Status | Issues |
|---|---|---|
| Typecheck + unit + build (`verify`) | PASS/FAIL | ... |
| E2E | PASS/FAIL | ... |
| Responsive | PASS/FAIL | ... |
| Animations | PASS/FAIL | ... |
| SEO | PASS/FAIL | ... |
| Visual diff | PASS/FAIL/SKIPPED | ... |

**Overall: PASS / FAIL**

For each failure, include the actual error output or screenshot evidence and a proposed fix.
