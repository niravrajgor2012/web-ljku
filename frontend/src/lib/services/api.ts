import { env } from '$env/dynamic/public';
import type { StrapiResponse, StrapiItem } from '$lib/types';

const BASE_URL = env.PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchAPI<T>(
  endpoint: string,
  params: Record<string, string | number | boolean> = {}
): Promise<StrapiResponse<T>> {
  const url = new URL(`${BASE_URL}/api${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const response = await fetch(url.toString(), {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new ApiError(`API error: ${response.statusText}`, response.status);
  }

  return response.json();
}

export function getImageUrl(url: string | undefined): string {
  if (!url) return '/placeholder.jpg';
  if (url.startsWith('http')) return url;
  return `${BASE_URL}${url}`;
}

export function extractData<T>(response: StrapiResponse<T>): StrapiItem<T>[] {
  if (!response.data) return [];
  return Array.isArray(response.data) ? response.data : [response.data];
}

export function extractSingle<T>(response: StrapiResponse<T>): StrapiItem<T> | null {
  if (!response.data) return null;
  return Array.isArray(response.data) ? response.data[0] : response.data;
}

export const api = { fetchAPI, getImageUrl, extractData, extractSingle };
export default api;
