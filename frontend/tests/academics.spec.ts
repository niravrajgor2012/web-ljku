import { test, expect } from '@playwright/test';

const academicsRoutes = [
  { path: '/academics', heading: /^Academics$/i },
  { path: '/academics/teaching-hospital', heading: /Teaching Hospital/i },
  { path: '/academics/value-added-courses', heading: /Value Added Courses/i },
  { path: '/academics/international-cell', heading: /International Cell/i },
  { path: '/academics/collaborations', heading: /Collaboration & Affiliation/i },
  { path: '/academics/student-centric-methods', heading: /Student Centric Methods/i },
  { path: '/academics/awards', heading: /Awards & Recognitions/i },
  { path: '/academics/syllabus', heading: /^Syllabus$/i },
  { path: '/academics/feedback', heading: /^Feedback$/i },
];

test.describe('Academics section sub-routes', () => {
  for (const route of academicsRoutes) {
    test(`renders ${route.path}`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBeLessThan(400);
      await expect(page.getByRole('heading', { name: route.heading }).first()).toBeVisible();
    });
  }
});
