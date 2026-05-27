import type { PageServerLoad } from './$types';
import { getDepartments } from '$lib/services/departments';

export const load: PageServerLoad = async () => {
  try {
    const departments = await getDepartments();
    return { departments };
  } catch {
    return { departments: [] };
  }
};
