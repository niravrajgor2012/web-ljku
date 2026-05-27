// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getDepartmentBySlug } from '$lib/services/departments';
import { error } from '@sveltejs/kit';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const department = await getDepartmentBySlug(params.slug);
  if (!department) {
    throw error(404, 'Department not found');
  }
  return { department };
};
