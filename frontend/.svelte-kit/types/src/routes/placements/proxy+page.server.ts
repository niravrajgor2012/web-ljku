// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getPlacements } from '$lib/services/placements';

export const load = async () => {
  try {
    const placements = await getPlacements(false, 50);
    return { placements };
  } catch {
    return { placements: [] };
  }
};
;null as any as PageServerLoad;