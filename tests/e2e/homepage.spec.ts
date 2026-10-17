import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Chat with the best AI models', level: 1 })).toBeVisible();
    await expect(page.locator('text=Get Hustlrr for free').first()).toBeVisible();
  });

  test('renders navigation', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('img', { name: 'hustlrr' })).toBeVisible();
  });

  test('renders models section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'All the top AI models in one app' })).toBeVisible();
    await expect(page.getByText('Powered by')).toBeVisible();
  });

  test('renders features section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Chat with AI on any webpage' })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Ask anything, do everything' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Private by design, with full control' })).toBeVisible();
  });

  test('renders testimonials section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'What people are saying about Hustlrr' })).toBeVisible();
  });

  test('renders footer', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer >> text=Privacy Policies')).toBeVisible();
    await expect(page.locator('footer >> text=Terms of Service')).toBeVisible();
  });

  test('CTA links to app store', async ({ page }) => {
    const ctaLink = page.locator('a:has-text("Get Hustlrr for free")').first();
    await expect(ctaLink).toHaveAttribute('href', /apps\.apple\.com/);
  });

  test('model badges are shown', async ({ page }) => {
    await expect(page.getByText('GPT-6', { exact: true })).toBeVisible();
    await expect(page.getByText('Claude Opus 5.5', { exact: true })).toBeVisible();
    await expect(page.getByText('Gemini 4', { exact: true })).toBeVisible();
    await expect(page.getByText('Grok 4.7', { exact: true })).toBeVisible();
  });
});
