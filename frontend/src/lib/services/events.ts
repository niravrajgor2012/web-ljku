import api from './api';
import type { Event, StrapiItem } from '$lib/types';

export async function getEvents(limit = 10, featured = false): Promise<StrapiItem<Event>[]> {
  const params: Record<string, string | number | boolean> = {
    'populate[image]': 'true',
    'sort': 'date:desc',
    'pagination[pageSize]': limit,
  };
  if (featured) params['filters[isFeatured][$eq]'] = true;
  const res = await api.fetchAPI<Event>('/events', params);
  return api.extractData(res);
}

export async function getEventBySlug(slug: string): Promise<StrapiItem<Event> | null> {
  const res = await api.fetchAPI<Event>('/events', {
    'filters[slug][$eq]': slug,
    'populate[image]': 'true',
    'populate[gallery]': 'true',
  });
  const items = api.extractData(res);
  return items[0] ?? null;
}
