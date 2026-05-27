import api from './api';
import type { Placement, StrapiItem } from '$lib/types';

export async function getPlacements(featured = false, limit = 20): Promise<StrapiItem<Placement>[]> {
  const params: Record<string, string | number | boolean> = {
    'populate[image]': 'true',
    'populate[companyLogo]': 'true',
    'sort': 'year:desc',
    'pagination[pageSize]': limit,
  };
  if (featured) params['filters[isFeatured][$eq]'] = true;
  const res = await api.fetchAPI<Placement>('/placements', params);
  return api.extractData(res);
}
