import api from './api';
import type { Department, StrapiItem } from '$lib/types';

export async function getDepartments(): Promise<StrapiItem<Department>[]> {
  const res = await api.fetchAPI<Department>('/departments', {
    'populate[bannerImage]': 'true',
    'populate[galleryImages]': 'true',
    'populate[programs][count]': 'true',
    'populate[faculty][count]': 'true',
    'populate[seo]': 'true',
    'sort': 'title:asc',
    'pagination[pageSize]': 50,
  });
  return api.extractData(res);
}

export async function getDepartmentBySlug(slug: string): Promise<StrapiItem<Department> | null> {
  const res = await api.fetchAPI<Department>('/departments', {
    'filters[slug][$eq]': slug,
    'populate[bannerImage]': 'true',
    'populate[galleryImages]': 'true',
    'populate[videos]': 'true',
    'populate[programs][populate][thumbnail]': 'true',
    'populate[faculty][populate][image]': 'true',
    'populate[seo][populate][ogImage]': 'true',
  });
  const items = api.extractData(res);
  return items[0] ?? null;
}
