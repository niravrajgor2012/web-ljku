import { a as api } from "../../../chunks/api.js";
import { a as getDepartments } from "../../../chunks/departments.js";
async function getFaculty(departmentSlug, featured = false) {
  const params = {
    "populate[image]": "true",
    "populate[department][fields]": "title,slug",
    "sort": "name:asc",
    "pagination[pageSize]": 100
  };
  if (featured) params["filters[isFeatured][$eq]"] = true;
  const res = await api.fetchAPI("/faculties", params);
  return api.extractData(res);
}
const load = async () => {
  const [faculty, departments] = await Promise.allSettled([
    getFaculty(void 0, false),
    getDepartments()
  ]);
  return {
    faculty: faculty.status === "fulfilled" ? faculty.value : [],
    departments: departments.status === "fulfilled" ? departments.value : []
  };
};
export {
  load
};
