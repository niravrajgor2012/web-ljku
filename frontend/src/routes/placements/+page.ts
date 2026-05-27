import type { PageLoad } from './$types';
import { getPlacements } from '$lib/services/placements';

export const load: PageLoad = async () => {
  try {
    const placements = await getPlacements(false, 50);
    return { placements };
  } catch {
    return { placements: [] };
  }
};
