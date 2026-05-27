import api from './api';
import type { Faculty, StrapiItem } from '$lib/types';

export async function getFaculty(departmentSlug?: string, featured = false): Promise<StrapiItem<Faculty>[]> {
  const params: Record<string, string | number | boolean> = {
    'populate[image]': 'true',
    'populate[department][fields]': 'title,slug',
    'sort': 'name:asc',
    'pagination[pageSize]': 100,
  };
  if (departmentSlug) params['filters[department][slug][$eq]'] = departmentSlug;
  if (featured) params['filters[isFeatured][$eq]'] = true;
  const res = await api.fetchAPI<Faculty>('/faculties', params);
  return api.extractData(res);
}
