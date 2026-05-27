// @ts-nocheck
import type { PageLoad } from './$types';
import { getPlacements } from '$lib/services/placements';

export const load = async () => {
  try {
    const placements = await getPlacements(false, 50);
    return { placements };
  } catch {
    return { placements: [] };
  }
};
;null as any as PageLoad;