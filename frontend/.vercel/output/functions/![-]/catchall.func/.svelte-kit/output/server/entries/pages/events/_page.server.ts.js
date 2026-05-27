import { g as getEvents } from "../../../chunks/events.js";
import { a as api } from "../../../chunks/api.js";
async function getNews(limit = 10, featured = false) {
  const params = {
    "populate[image]": "true",
    "sort": "publishedDate:desc",
    "pagination[pageSize]": limit
  };
  if (featured) params["filters[isFeatured][$eq]"] = true;
  const res = await api.fetchAPI("/news", params);
  return api.extractData(res);
}
const load = async () => {
  const [events, news] = await Promise.allSettled([getEvents(20), getNews(10)]);
  return {
    events: events.status === "fulfilled" ? events.value : [],
    news: news.status === "fulfilled" ? news.value : []
  };
};
export {
  load
};
