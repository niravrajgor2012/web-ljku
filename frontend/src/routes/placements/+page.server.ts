import type { PageServerLoad } from './$types';
import { getPlacements } from '$lib/services/placements';

export const load: PageServerLoad = async () => {
  try {
    const placements = await getPlacements(false, 50);
    return { placements };
  } catch {
    return { placements: [] };
  }
};
