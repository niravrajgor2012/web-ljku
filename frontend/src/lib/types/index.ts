export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface StrapiResponse<T> {
  data: StrapiItem<T> | StrapiItem<T>[] | null;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiItem<T> {
  id: number;
  attributes: T & {
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  };
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  ogImage?: StrapiMedia;
  canonicalURL?: string;
}

export interface Department {
  title: string;
  slug: string;
  shortDescription?: string;
  fullDescription?: string;
  icon?: string;
  color?: string;
  bannerImage?: { data: StrapiItem<StrapiMedia> };
  galleryImages?: { data: StrapiItem<StrapiMedia>[] };
  established?: string;
  totalStudents?: number;
  totalFaculty?: number;
  highlights?: Record<string, string>[];
  seo?: SEO;
}

export interface Program {
  title: string;
  slug: string;
  degreeType: string;
  duration?: string;
  eligibility?: string;
  fees?: number;
  description?: string;
  seats?: number;
  highlights?: Record<string, string>[];
  thumbnail?: { data: StrapiItem<StrapiMedia> };
  department?: { data: StrapiItem<Department> };
  seo?: SEO;
}

export interface Faculty {
  name: string;
  designation?: string;
  qualification?: string;
  image?: { data: StrapiItem<StrapiMedia> };
  bio?: string;
  email?: string;
  experience?: number;
  specialization?: string;
  publications?: number;
  isFeatured?: boolean;
  socialLinks?: { linkedin?: string; twitter?: string; scholar?: string };
  department?: { data: StrapiItem<Department> };
}

export interface Event {
  title: string;
  slug: string;
  date: string;
  endDate?: string;
  time?: string;
  venue?: string;
  category?: string;
  description?: string;
  image?: { data: StrapiItem<StrapiMedia> };
  gallery?: { data: StrapiItem<StrapiMedia>[] };
  registrationLink?: string;
  isFeatured?: boolean;
}

export interface News {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  image?: { data: StrapiItem<StrapiMedia> };
  publishedDate?: string;
  category?: string;
  isFeatured?: boolean;
  author?: string;
  seo?: SEO;
}

export interface Placement {
  studentName: string;
  companyName: string;
  package?: number;
  role?: string;
  year?: number;
  image?: { data: StrapiItem<StrapiMedia> };
  companyLogo?: { data: StrapiItem<StrapiMedia> };
  testimonial?: string;
  batch?: string;
  program?: string;
  isFeatured?: boolean;
  category?: string;
}

export interface Gallery {
  title?: string;
  image: { data: StrapiItem<StrapiMedia> };
  category?: string;
  caption?: string;
  isFeatured?: boolean;
  date?: string;
}

export interface Admission {
  title: string;
  content?: string;
  eligibility?: string;
  deadline?: string;
  applicationLink?: string;
  process?: { step: string; description: string }[];
  documents?: string[];
  fees?: { program: string; amount: number }[];
  isActive?: boolean;
  year?: string;
}

export interface Testimonial {
  studentName: string;
  image?: { data: StrapiItem<StrapiMedia> };
  review: string;
  rating?: number;
  course?: string;
  batch?: string;
  currentRole?: string;
  company?: string;
  isFeatured?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}
