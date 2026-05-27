import api from './api';
import type { News, StrapiItem } from '$lib/types';

export async function getNews(limit = 10, featured = false): Promise<StrapiItem<News>[]> {
  const params: Record<string, string | number | boolean> = {
    'populate[image]': 'true',
    'sort': 'publishedDate:desc',
    'pagination[pageSize]': limit,
  };
  if (featured) params['filters[isFeatured][$eq]'] = true;
  const res = await api.fetchAPI<News>('/news', params);
  return api.extractData(res);
}
