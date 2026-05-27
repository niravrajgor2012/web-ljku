import type { PageServerLoad } from './$types';
import { getGallery } from '$lib/services/gallery';

export const load: PageServerLoad = async () => {
  try {
    const gallery = await getGallery(undefined, false, 100);
    return { gallery };
  } catch {
    return { gallery: [] };
  }
};
