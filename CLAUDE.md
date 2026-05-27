# LJ University Website – CLAUDE.md

## Project Overview
Full-stack university website with SvelteKit frontend and Strapi CMS backend, inspired by LJKU (ljku.edu.in).

## Structure
```
/
├── frontend/   # SvelteKit + TypeScript + Tailwind CSS
└── backend/    # Strapi CMS + PostgreSQL
```

## Frontend (SvelteKit)

### Key Commands
```bash
cd frontend
npm install
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build
npm run check        # TypeScript check
```

### Architecture
- **Routes**: `src/routes/` – SvelteKit file-based routing
- **Components**: `src/lib/components/` – Reusable Svelte components
  - `layout/` – Navbar, MobileMenu, Footer
  - `home/` – Hero, Stats, Departments, Programs, Events, Placements, Gallery, Testimonials, CTA
  - `ui/` – Skeleton, Breadcrumbs, PageHero
  - `seo/` – SEOHead
- **Services**: `src/lib/services/` – Strapi API abstractions
- **Types**: `src/lib/types/index.ts` – All TypeScript interfaces
- **Utils**: `src/lib/utils/index.ts` – formatDate, formatCurrency, animateCounter, initScrollAnimations

### Environment Variables
```env
PUBLIC_STRAPI_URL=http://localhost:1337
PUBLIC_SITE_URL=http://localhost:5173
```

### Patterns
- All pages use `+page.server.ts` for SSR data fetching
- API calls are in `src/lib/services/` — never fetch directly in components
- Every page has `<SEOHead>` with proper meta
- Fallback static data displayed when Strapi is unavailable
- `animate-on-scroll` CSS class + `initScrollAnimations()` for scroll animations

## Backend (Strapi CMS)

### Key Commands
```bash
cd backend
npm install
npm run develop      # Start dev server (http://localhost:1337)
npm run build        # Production build
npm run start        # Start production server
```

### Collections
| Collection | Endpoint |
|-----------|----------|
| Department | /api/departments |
| Program | /api/programs |
| Faculty | /api/faculties |
| Event | /api/events |
| News | /api/news |
| Placement | /api/placements |
| Gallery | /api/galleries |
| Admission | /api/admissions |
| Testimonial | /api/testimonials |

### Environment Variables
```env
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://user:pass@host:5432/ljku_university
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=salt
ADMIN_JWT_SECRET=secret
JWT_SECRET=secret
CORS_ORIGIN=http://localhost:5173
```

### Setup After Install
1. Run `npm run develop`
2. Open http://localhost:1337/admin
3. Create admin account
4. Go to Settings → API Tokens → Create full-access token
5. Go to Settings → Users & Permissions → Public role → Enable `find` and `findOne` for all collections
6. Start adding content

## Design System

### Colors
- `navy-*` – Primary brand navy (navy-900 = #0f2040)
- `primary-*` – Blue accent (primary-600 = #2563eb)
- `gold-*` – Gold highlights (gold-500 = #f59e0b)

### CSS Classes
- `.btn-primary` – Primary blue button
- `.btn-outline` – Outlined blue button
- `.btn-ghost` – Ghost blue button
- `.card` – White rounded card with shadow
- `.section-title` – Large serif heading
- `.section-subtitle` – Muted subtitle text
- `.container-lg` – Max-width container with padding
- `.glass` – Glassmorphism overlay
- `.animate-on-scroll` – Scroll-triggered fade-up animation

## Deployment

### Frontend (Vercel)
1. Push frontend/ to GitHub
2. Connect to Vercel
3. Set env vars: `PUBLIC_STRAPI_URL`, `PUBLIC_SITE_URL`
4. Deploy

### Backend (Railway)
1. Push backend/ to GitHub
2. Connect to Railway
3. Add PostgreSQL service
4. Set all env vars from `.env.example`
5. Deploy

## Adding New Pages
1. Create `src/routes/page-name/+page.svelte`
2. Optionally add `+page.server.ts` for data loading
3. Add to navbar in `Navbar.svelte`
4. Add to sitemap in `sitemap.xml/+server.ts`
5. Add SEOHead component at top

## Adding New Strapi Collections
1. Create directory in `backend/src/api/collection-name/`
2. Add `content-types/collection-name/schema.json`
3. Add controller, service, routes (use Strapi factories)
4. Add service file in `frontend/src/lib/services/`
5. Add TypeScript interface in `frontend/src/lib/types/index.ts`
