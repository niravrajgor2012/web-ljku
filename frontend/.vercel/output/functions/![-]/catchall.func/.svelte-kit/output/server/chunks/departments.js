import { a as api } from "./api.js";
async function getDepartments() {
  const res = await api.fetchAPI("/departments", {
    "populate[bannerImage]": "true",
    "populate[galleryImages]": "true",
    "populate[programs][count]": "true",
    "populate[faculty][count]": "true",
    "populate[seo]": "true",
    "sort": "title:asc",
    "pagination[pageSize]": 50
  });
  return api.extractData(res);
}
async function getDepartmentBySlug(slug) {
  const res = await api.fetchAPI("/departments", {
    "filters[slug][$eq]": slug,
    "populate[bannerImage]": "true",
    "populate[galleryImages]": "true",
    "populate[videos]": "true",
    "populate[programs][populate][thumbnail]": "true",
    "populate[faculty][populate][image]": "true",
    "populate[seo][populate][ogImage]": "true"
  });
  const items = api.extractData(res);
  return items[0] ?? null;
}
export {
  getDepartments as a,
  getDepartmentBySlug as g
};
