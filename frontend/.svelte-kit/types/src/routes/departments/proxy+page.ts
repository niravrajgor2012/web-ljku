// @ts-nocheck
import type { PageLoad } from './$types';
import { getDepartments } from '$lib/services/departments';

export const load = async () => {
  try {
    const departments = await getDepartments();
    return { departments };
  } catch {
    return { departments: [] };
  }
};
;null as any as PageLoad;