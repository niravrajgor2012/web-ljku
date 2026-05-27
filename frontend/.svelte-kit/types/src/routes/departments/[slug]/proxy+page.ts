// @ts-nocheck
import type { PageLoad } from './$types';
import { getDepartmentBySlug } from '$lib/services/departments';
import { error } from '@sveltejs/kit';

export const prerender = false;

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
  const department = await getDepartmentBySlug(params.slug);
  if (!department) {
    throw error(404, 'Department not found');
  }
  return { department };
};
