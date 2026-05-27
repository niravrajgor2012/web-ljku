import api from './api';
import type { Testimonial, StrapiItem } from '$lib/types';

export async function getTestimonials(featured = false): Promise<StrapiItem<Testimonial>[]> {
  const params: Record<string, string | number | boolean> = {
    'populate[image]': 'true',
    'sort': 'createdAt:desc',
    'pagination[pageSize]': 20,
  };
  if (featured) params['filters[isFeatured][$eq]'] = true;
  const res = await api.fetchAPI<Testimonial>('/testimonials', params);
  return api.extractData(res);
}
