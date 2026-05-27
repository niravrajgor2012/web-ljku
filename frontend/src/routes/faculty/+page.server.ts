import type { PageServerLoad } from './$types';
import { getFaculty } from '$lib/services/faculty';
import { getDepartments } from '$lib/services/departments';

export const load: PageServerLoad = async () => {
  const [faculty, departments] = await Promise.allSettled([
    getFaculty(undefined, false),
    getDepartments(),
  ]);
  return {
    faculty: faculty.status === 'fulfilled' ? faculty.value : [],
    departments: departments.status === 'fulfilled' ? departments.value : [],
  };
};
