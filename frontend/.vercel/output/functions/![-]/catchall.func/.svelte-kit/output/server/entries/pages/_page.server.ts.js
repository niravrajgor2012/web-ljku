import { a as getDepartments } from "../../chunks/departments.js";
import { g as getPrograms } from "../../chunks/programs.js";
import { g as getEvents } from "../../chunks/events.js";
import { g as getPlacements } from "../../chunks/placements.js";
import { g as getGallery } from "../../chunks/gallery.js";
import { a as api } from "../../chunks/api.js";
async function getTestimonials(featured = false) {
  const params = {
    "populate[image]": "true",
    "sort": "createdAt:desc",
    "pagination[pageSize]": 20
  };
  if (featured) params["filters[isFeatured][$eq]"] = true;
  const res = await api.fetchAPI("/testimonials", params);
  return api.extractData(res);
}
const load = async () => {
  try {
    const [departments, programs, events, placements, gallery, testimonials] = await Promise.allSettled([
      getDepartments(),
      getPrograms(),
      getEvents(6, true),
      getPlacements(true, 10),
      getGallery(void 0, true, 6),
      getTestimonials(true)
    ]);
    return {
      departments: departments.status === "fulfilled" ? departments.value : [],
      programs: programs.status === "fulfilled" ? programs.value : [],
      events: events.status === "fulfilled" ? events.value : [],
      placements: placements.status === "fulfilled" ? placements.value : [],
      gallery: gallery.status === "fulfilled" ? gallery.value : [],
      testimonials: testimonials.status === "fulfilled" ? testimonials.value : []
    };
  } catch {
    return { departments: [], programs: [], events: [], placements: [], gallery: [], testimonials: [] };
  }
};
export {
  load
};
