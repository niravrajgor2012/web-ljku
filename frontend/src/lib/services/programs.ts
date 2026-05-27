import api from './api';
import type { Program, StrapiItem } from '$lib/types';

export async function getPrograms(departmentSlug?: string): Promise<StrapiItem<Program>[]> {
  const params: Record<string, string | number> = {
    'populate[thumbnail]': 'true',
    'populate[department][fields]': 'title,slug',
    'sort': 'title:asc',
    'pagination[pageSize]': 100,
  };
  if (departmentSlug) {
    params['filters[department][slug][$eq]'] = departmentSlug;
  }
  const res = await api.fetchAPI<Program>('/programs', params);
  return api.extractData(res);
}

export async function getProgramBySlug(slug: string): Promise<StrapiItem<Program> | null> {
  const res = await api.fetchAPI<Program>('/programs', {
    'filters[slug][$eq]': slug,
    'populate[thumbnail]': 'true',
    'populate[department][fields]': 'title,slug',
    'populate[brochurePDF]': 'true',
    'populate[seo][populate][ogImage]': 'true',
  });
  const items = api.extractData(res);
  return items[0] ?? null;
}
