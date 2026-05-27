import { a as api } from "./api.js";
async function getPlacements(featured = false, limit = 20) {
  const params = {
    "populate[image]": "true",
    "populate[companyLogo]": "true",
    "sort": "year:desc",
    "pagination[pageSize]": limit
  };
  if (featured) params["filters[isFeatured][$eq]"] = true;
  const res = await api.fetchAPI("/placements", params);
  return api.extractData(res);
}
export {
  getPlacements as g
};
