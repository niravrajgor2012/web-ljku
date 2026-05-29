import { env } from '$env/dynamic/public';

const SITE_URL = env.PUBLIC_SITE_URL ?? 'https://ljku.edu.in';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/about/vision-mission', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/people', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/organogram', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/statute', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/strategic-plan', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/committees', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/code-of-conduct', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/policies', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/welfare', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/gog-approval', priority: '0.6', changefreq: 'yearly' },
  { path: '/about/ugc', priority: '0.6', changefreq: 'yearly' },
  { path: '/about/national-accreditation', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/ict-facilities', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/sports-infrastructure', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/green-campus', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/alternate-energy', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/water-conservation', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/barrier-free', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/academics', priority: '0.9', changefreq: 'monthly' },
  { path: '/academics/teaching-hospital', priority: '0.7', changefreq: 'monthly' },
  { path: '/academics/value-added-courses', priority: '0.7', changefreq: 'monthly' },
  { path: '/academics/international-cell', priority: '0.7', changefreq: 'monthly' },
  { path: '/academics/collaborations', priority: '0.7', changefreq: 'monthly' },
  { path: '/academics/student-centric-methods', priority: '0.6', changefreq: 'monthly' },
  { path: '/academics/awards', priority: '0.6', changefreq: 'monthly' },
  { path: '/academics/syllabus', priority: '0.7', changefreq: 'monthly' },
  { path: '/academics/feedback', priority: '0.6', changefreq: 'monthly' },
  { path: '/departments', priority: '0.9', changefreq: 'weekly' },
  { path: '/programs', priority: '0.9', changefreq: 'weekly' },
  { path: '/admissions', priority: '1.0', changefreq: 'weekly' },
  { path: '/faculty', priority: '0.8', changefreq: 'monthly' },
  { path: '/placements', priority: '0.9', changefreq: 'monthly' },
  { path: '/events', priority: '0.8', changefreq: 'daily' },
  { path: '/gallery', priority: '0.7', changefreq: 'weekly' },
  { path: '/student-life', priority: '0.7', changefreq: 'monthly' },
  { path: '/research', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/careers', priority: '0.8', changefreq: 'weekly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600',
    },
  });
}
