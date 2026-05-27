import { g as getDepartmentBySlug } from "../../../../chunks/departments.js";
import { error } from "@sveltejs/kit";
const prerender = false;
const load = async ({ params }) => {
  const department = await getDepartmentBySlug(params.slug);
  if (!department) {
    throw error(404, "Department not found");
  }
  return { department };
};
export {
  load,
  prerender
};
