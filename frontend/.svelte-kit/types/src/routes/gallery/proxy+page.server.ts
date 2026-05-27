// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getGallery } from '$lib/services/gallery';

export const load = async () => {
  try {
    const gallery = await getGallery(undefined, false, 100);
    return { gallery };
  } catch {
    return { gallery: [] };
  }
};
;null as any as PageServerLoad;