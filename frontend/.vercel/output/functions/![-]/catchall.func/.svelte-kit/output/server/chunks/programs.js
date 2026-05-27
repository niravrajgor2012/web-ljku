import { a as api } from "./api.js";
async function getPrograms(departmentSlug) {
  const params = {
    "populate[thumbnail]": "true",
    "populate[department][fields]": "title,slug",
    "sort": "title:asc",
    "pagination[pageSize]": 100
  };
  const res = await api.fetchAPI("/programs", params);
  return api.extractData(res);
}
export {
  getPrograms as g
};
