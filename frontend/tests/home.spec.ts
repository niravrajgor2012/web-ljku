import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/LJ University/i);
  });

  test('shows the navbar logo', async ({ page }) => {
    await expect(page.getByRole('link', { name: /LJ University/i }).first()).toBeVisible();
  });

  test('renders the Apply Now CTA', async ({ page }) => {
    await expect(page.getByRole('link', { name: /apply now/i }).first()).toBeVisible();
  });

  test('navigates to /about from navbar', async ({ page }) => {
    await page.getByRole('link', { name: /^About$/i }).first().click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByRole('heading', { name: /LJU at a Glance/i })).toBeVisible();
  });
});
