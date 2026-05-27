# LJ University Website

A modern, high-performance university website built with SvelteKit + Strapi CMS, inspired by [LJ University](https://ljku.edu.in).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | SvelteKit + TypeScript + Tailwind CSS |
| CMS | Strapi 4 (Headless) |
| Database | PostgreSQL |
| Frontend Deploy | Vercel |
| Backend Deploy | Railway / Render |

## Features

- **15 Pages** – Home, About, Departments, Programs, Admissions, Faculty, Placements, Events, Gallery, Student Life, Research, Contact, Careers, FAQ, Department Detail
- **Fully Dynamic** – All content managed through Strapi admin panel
- **SSR** – Server-side rendering for SEO and performance
- **Responsive** – Mobile-first design for all screen sizes
- **Modern Design** – Premium UI with glassmorphism, gradients, smooth animations
- **SEO Optimized** – Dynamic meta tags, OG tags, structured data, sitemap, robots.txt
- **Accessible** – Semantic HTML, ARIA labels, keyboard navigation
- **Graceful Fallback** – Static fallback content shown when CMS is unavailable

## Project Structure

```
/
├── frontend/                    # SvelteKit Application
│   ├── src/
│   │   ├── lib/
│   │   │   ├── components/
│   │   │   │   ├── layout/     # Navbar, MobileMenu, Footer
│   │   │   │   ├── home/       # Hero, Stats, Departments, Programs, Events...
│   │   │   │   ├── ui/         # Skeleton, Breadcrumbs, PageHero
│   │   │   │   └── seo/        # SEOHead
│   │   │   ├── services/       # Strapi API service layer
│   │   │   ├── types/          # TypeScript interfaces
│   │   │   └── utils/          # Helper utilities
│   │   └── routes/             # SvelteKit pages
│   ├── static/                 # favicon.svg, robots.txt
│   ├── tailwind.config.js
│   ├── svelte.config.js
│   └── package.json
│
├── backend/                     # Strapi CMS
│   ├── src/
│   │   ├── api/                # Collections (department, program, faculty...)
│   │   └── components/         # Shared components (seo)
│   ├── config/                 # database, server, plugins, middlewares
│   └── package.json
│
├── CLAUDE.md                    # Developer guide for Claude Code
└── README.md
```

## Quick Start

### 1. Backend (Strapi CMS)

```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials
npm install
npm run develop
# Open http://localhost:1337/admin
```

First-time setup:
1. Create admin account at http://localhost:1337/admin
2. Go to **Settings → Users & Permissions → Roles → Public**
3. Enable `find` and `findOne` for all collections
4. Add content through the admin panel

### 2. Frontend (SvelteKit)

```bash
cd frontend
cp .env.example .env
# .env: PUBLIC_STRAPI_URL=http://localhost:1337
npm install
npm run dev
# Open http://localhost:5173
```

## Strapi Collections

| Collection | Description | Key Fields |
|-----------|-------------|------------|
| **Department** | Schools & institutes | title, slug, description, bannerImage, programs, faculty |
| **Program** | Academic programs | title, slug, degreeType, duration, fees, eligibility |
| **Faculty** | Faculty members | name, designation, qualification, image, department |
| **Event** | Campus events | title, date, venue, category, image |
| **News** | University news | title, content, image, publishedDate |
| **Placement** | Placement records | studentName, companyName, package, role |
| **Gallery** | Photo gallery | image, category, caption |
| **Admission** | Admission info | title, content, eligibility, deadline |
| **Testimonial** | Student testimonials | studentName, review, rating, course |

## Deployment

### Frontend → Vercel

```bash
cd frontend
# Push to GitHub, connect to Vercel
# Set environment variables:
# PUBLIC_STRAPI_URL=https://your-strapi.railway.app
# PUBLIC_SITE_URL=https://your-site.vercel.app
```

### Backend → Railway

```bash
cd backend
# Push to GitHub, connect to Railway
# Add PostgreSQL addon
# Set environment variables from .env.example
```

## Environment Variables

**Frontend** (`frontend/.env`):
```env
PUBLIC_STRAPI_URL=http://localhost:1337
PUBLIC_SITE_URL=http://localhost:5173
```

**Backend** (`backend/.env`):
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-secret
JWT_SECRET=your-jwt-secret
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://user:pass@host:5432/ljku_university
CORS_ORIGIN=http://localhost:5173
```

## Design System

The website uses a custom Tailwind design system:

- **Navy**: Deep academic navy (`navy-900: #0f2040`)
- **Primary**: Professional blue (`primary-600: #2563eb`)
- **Gold**: Accent gold (`gold-500: #f59e0b`)
- **Fonts**: Inter (sans-serif) + Playfair Display (display/headings)

### Key UI Patterns
- `.card` – Elevated white cards
- `.btn-primary` / `.btn-outline` – Consistent CTA buttons
- `.section-title` – Large display headings
- `.glass` – Glassmorphism effects on dark backgrounds
- `.animate-on-scroll` – Scroll-triggered animations

## Pages

| Route | Page |
|-------|------|
| `/` | Home (hero, stats, departments, programs, events, placements, gallery, testimonials) |
| `/about` | About University (history, leadership, accreditations) |
| `/departments` | All Schools & Departments |
| `/departments/[slug]` | Dynamic Department Detail |
| `/programs` | Programs with search & filter |
| `/admissions` | Admissions process, seats, FAQ |
| `/faculty` | Faculty directory with filters |
| `/placements` | Placement stats and success stories |
| `/events` | Events & news with category filter |
| `/gallery` | Photo gallery with masonry layout + lightbox |
| `/student-life` | Campus life and facilities |
| `/research` | Research centers and innovation |
| `/contact` | Contact form and details |
| `/careers` | Job openings at LJ University |
| `/faq` | Frequently asked questions |

## License

Proprietary – LJ University. All rights reserved.
