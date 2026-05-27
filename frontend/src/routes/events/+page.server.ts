import type { PageServerLoad } from './$types';
import { getEvents } from '$lib/services/events';
import { getNews } from '$lib/services/news';

export const load: PageServerLoad = async () => {
  const [events, news] = await Promise.allSettled([getEvents(20), getNews(10)]);
  return {
    events: events.status === 'fulfilled' ? events.value : [],
    news: news.status === 'fulfilled' ? news.value : [],
  };
};
