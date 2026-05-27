import type { PageLoad } from './$types';
import { getDepartments } from '$lib/services/departments';
import { getPrograms } from '$lib/services/programs';
import { getEvents } from '$lib/services/events';
import { getPlacements } from '$lib/services/placements';
import { getGallery } from '$lib/services/gallery';
import { getTestimonials } from '$lib/services/testimonials';

export const load: PageLoad = async () => {
  try {
    const [departments, programs, events, placements, gallery, testimonials] = await Promise.allSettled([
      getDepartments(),
      getPrograms(),
      getEvents(6, true),
      getPlacements(true, 10),
      getGallery(undefined, true, 6),
      getTestimonials(true),
    ]);

    return {
      departments: departments.status === 'fulfilled' ? departments.value : [],
      programs: programs.status === 'fulfilled' ? programs.value : [],
      events: events.status === 'fulfilled' ? events.value : [],
      placements: placements.status === 'fulfilled' ? placements.value : [],
      gallery: gallery.status === 'fulfilled' ? gallery.value : [],
      testimonials: testimonials.status === 'fulfilled' ? testimonials.value : [],
    };
  } catch {
    return { departments: [], programs: [], events: [], placements: [], gallery: [], testimonials: [] };
  }
};
