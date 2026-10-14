import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('hamburger menu opens mobile menu', async ({ page }) => {
    await page.goto('/');
    const menuToggle = page.locator('#mobile-menu-toggle');
    await expect(menuToggle).toBeVisible();
    await menuToggle.click();
    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeVisible();
    await expect(menu.locator('text=Blog')).toBeVisible();
  });

  test('mobile menu nav links work', async ({ page }) => {
    await page.goto('/');
    await page.click('#mobile-menu-toggle');
    await page.click('#mobile-menu >> text=Blog');
    await expect(page).toHaveURL(/\/blog/);
  });

  test('language switcher switches to German', async ({ page }) => {
    await page.goto('/');
    // Open mobile menu to access language switcher
    await page.click('#mobile-menu-toggle');
    await page.click('text=DE');
    await expect(page).toHaveURL(/\/de/);
  });

  test('language switcher switches back to English', async ({ page }) => {
    await page.goto('/de');
    await page.click('#mobile-menu-toggle');
    await page.click('text=EN');
    await expect(page).toHaveURL('/');
  });

  test('footer legal links work', async ({ page }) => {
    await page.goto('/');
    await page.click('footer >> text=Privacy Policies');
    await expect(page).toHaveURL(/\/privacy/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Privacy Policy');
  });

  test('blog back link works', async ({ page }) => {
    await page.goto('/blog/multi-model-workflows');
    await page.click('text=Back to Blog');
    await expect(page).toHaveURL(/\/blog/);
  });
});
