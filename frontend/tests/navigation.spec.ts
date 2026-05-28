import { test, expect } from '@playwright/test';

const topLevelRoutes = [
  '/departments',
  '/programs',
  '/admissions',
  '/faculty',
  '/placements',
  '/events',
  '/gallery',
  '/student-life',
  '/research',
  '/contact',
  '/careers',
  '/faq',
];

test.describe('Top-level navigation', () => {
  for (const route of topLevelRoutes) {
    test(`route ${route} returns 2xx and renders`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator('h1, h2').first()).toBeVisible();
    });
  }

  test('sitemap.xml is served as XML', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('xml');
    const body = await res.text();
    expect(body).toContain('<urlset');
    expect(body).toContain('/about/vision-mission');
  });
});
