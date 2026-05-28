import { test, expect } from '@playwright/test';

const seoRoutes = [
  '/',
  '/about',
  '/about/vision-mission',
  '/about/national-accreditation',
  '/admissions',
];

test.describe('SEO meta', () => {
  for (const route of seoRoutes) {
    test(`${route} has title and description meta`, async ({ page }) => {
      await page.goto(route);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(5);

      const desc = await page.locator('meta[name="description"]').getAttribute('content');
      expect(desc).toBeTruthy();
      expect((desc ?? '').length).toBeGreaterThan(20);
    });
  }
});
