import { defineConfig, devices } from '@playwright/test';

// Override with PORT=xxxx when 4321 is taken (e.g. a dev server in another worktree).
const port = Number(process.env.PORT ?? 4321);

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // Never auto-open the HTML report: it blocks the terminal for non-interactive runs.
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://localhost:${port}`,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Tablet',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 768, height: 1024 },
      },
    },
  ],
  webServer: {
    command: `npm run build && npm run preview -- --port ${port}`,
    port,
    // Always test a fresh build of *this* checkout; reusing could silently hit another worktree's server.
    reuseExistingServer: false,
  },
});
