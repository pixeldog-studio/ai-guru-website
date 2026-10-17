---
name: run-tests
description: Run typecheck, Vitest unit tests, build, and Playwright E2E tests, then triage failures. Use after any code change to catch regressions.
---

# Run All Tests

## Steps

1. **Fast gate** (typecheck, unit tests including the EN/DE parity guard, build):
   ```bash
   npm run verify
   ```
   Stop at the first failing stage and fix it before going further.

2. **E2E** (builds and serves this checkout, about 10s locally):
   ```bash
   npm run test:e2e
   ```
   If port 4321 is busy: `PORT=4400 npm run test:e2e`. To narrow down: `npx playwright test tests/e2e/<file>.spec.ts --project="Desktop Chrome"`.

3. **Triage each failure**:
   - Read the error and `test-results/<test>/error-context.md`, which holds an accessibility snapshot of the page at failure.
   - Decide whether the **code regressed** (fix the code) or the **test is stale** because UI or copy changed on purpose (update the test in the same change). Never delete a test just to get green.
   - Parity failures mean an EN/DE twin is missing: add the missing page, post, or translation key. Don't weaken the test.

4. **Report**: pass/fail counts per stage, what you fixed, and anything still failing with its actual error output.
