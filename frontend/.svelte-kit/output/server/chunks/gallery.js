import { a as api } from "./api.js";
async function getGallery(category, featured = false, limit = 50) {
  const params = {
    "populate[image]": "true",
    "sort": "date:desc",
    "pagination[pageSize]": limit
  };
  if (featured) params["filters[isFeatured][$eq]"] = true;
  const res = await api.fetchAPI("/galleries", params);
  return api.extractData(res);
}
export {
  getGallery as g
};
