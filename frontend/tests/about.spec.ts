import { test, expect } from '@playwright/test';

const aboutRoutes = [
  { path: '/about', heading: /LJU at a Glance/i },
  { path: '/about/vision-mission', heading: /Vision & Mission/i },
  { path: '/about/people', heading: /The People Behind LJU/i },
  { path: '/about/organogram', heading: /Organogram/i },
  { path: '/about/statute', heading: /Statute of the University/i },
  { path: '/about/strategic-plan', heading: /Strategic Plan/i },
  { path: '/about/committees', heading: /University Committees/i },
  { path: '/about/code-of-conduct', heading: /Code of Conduct/i },
  { path: '/about/policies', heading: /Institutional Policies/i },
  { path: '/about/welfare', heading: /Student Welfare/i },
  { path: '/about/gog-approval', heading: /Government of Gujarat Approval/i },
  { path: '/about/ugc', heading: /UGC Recognition/i },
  { path: '/about/national-accreditation', heading: /National Accreditation/i },
  { path: '/about/ict-facilities', heading: /ICT Facilities/i },
  { path: '/about/sports-infrastructure', heading: /Sports Infrastructure/i },
  { path: '/about/green-campus', heading: /Green Campus/i },
  { path: '/about/alternate-energy', heading: /Alternate Energy/i },
  { path: '/about/water-conservation', heading: /Water Conservation/i },
  { path: '/about/barrier-free', heading: /Barrier-Free Campus/i },
  { path: '/about/contact', heading: /Administrative Contacts/i },
];

test.describe('About section sub-routes', () => {
  for (const route of aboutRoutes) {
    test(`renders ${route.path}`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.getByRole('heading', { name: route.heading }).first()).toBeVisible();
    });
  }

  test('breadcrumb back-link works on sub-route', async ({ page }) => {
    await page.goto('/about/vision-mission');
    await page.getByRole('link', { name: /^About$/ }).first().click();
    await expect(page).toHaveURL(/\/about$/);
  });
});
