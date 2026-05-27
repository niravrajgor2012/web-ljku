import api from './api';
import type { Gallery, StrapiItem } from '$lib/types';

export async function getGallery(category?: string, featured = false, limit = 50): Promise<StrapiItem<Gallery>[]> {
  const params: Record<string, string | number | boolean> = {
    'populate[image]': 'true',
    'sort': 'date:desc',
    'pagination[pageSize]': limit,
  };
  if (category) params['filters[category][$eq]'] = category;
  if (featured) params['filters[isFeatured][$eq]'] = true;
  const res = await api.fetchAPI<Gallery>('/galleries', params);
  return api.extractData(res);
}
