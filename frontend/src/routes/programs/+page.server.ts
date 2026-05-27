import type { PageServerLoad } from './$types';
import { getPrograms } from '$lib/services/programs';
import { getDepartments } from '$lib/services/departments';

export const load: PageServerLoad = async () => {
  const [programs, departments] = await Promise.allSettled([getPrograms(), getDepartments()]);
  return {
    programs: programs.status === 'fulfilled' ? programs.value : [],
    departments: departments.status === 'fulfilled' ? departments.value : [],
  };
};
