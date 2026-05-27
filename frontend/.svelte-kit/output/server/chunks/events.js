import { a as api } from "./api.js";
async function getEvents(limit = 10, featured = false) {
  const params = {
    "populate[image]": "true",
    "sort": "date:desc",
    "pagination[pageSize]": limit
  };
  if (featured) params["filters[isFeatured][$eq]"] = true;
  const res = await api.fetchAPI("/events", params);
  return api.extractData(res);
}
export {
  getEvents as g
};
