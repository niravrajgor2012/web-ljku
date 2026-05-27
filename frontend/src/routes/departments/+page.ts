import type { PageLoad } from './$types';
import { getDepartments } from '$lib/services/departments';

export const load: PageLoad = async () => {
  try {
    const departments = await getDepartments();
    return { departments };
  } catch {
    return { departments: [] };
  }
};
