<script lang="ts">
  import type { StrapiItem, Event } from '$lib/types';
  import { getImageUrl } from '$lib/services/api';
  import { formatDate } from '$lib/utils';

  export let events: StrapiItem<Event>[] = [];

  const fallback = [
    { title: 'Annual Tech Fest 2025', date: '2025-03-15', category: 'Technical', venue: 'Main Campus', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=70' },
    { title: 'Campus Placement Drive – TCS', date: '2025-03-22', category: 'Placement', venue: 'Placement Cell', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=70' },
    { title: 'Cultural Festival – Rang Utsav', date: '2025-04-05', category: 'Cultural', venue: 'Open Amphitheater', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&q=70' },
  ];
</script>

<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
      <div>
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">What's Happening</p>
        <h2 class="section-title">Events &amp; Announcements</h2>
      </div>
      <a href="/events" class="btn-outline shrink-0">All Events</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#if events.length === 0}
        {#each fallback as ev}
          <article class="card group overflow-hidden">
            <div class="h-48 overflow-hidden relative">
              <img src={ev.img} alt={ev.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute top-3 left-3">
                <span class="badge bg-white text-primary-700 shadow-sm">{ev.category}</span>
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                {formatDate(ev.date)}
                <span class="text-gray-300">·</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                {ev.venue}
              </div>
              <h3 class="font-display font-semibold text-navy-900 text-lg group-hover:text-primary-600 transition-colors">{ev.title}</h3>
            </div>
          </article>
        {/each}
      {:else}
        {#each events.slice(0, 3) as ev}
          {@const a = ev.attributes}
          <article class="card group overflow-hidden">
            <div class="h-48 overflow-hidden relative">
              {#if a.image?.data}
                <img
                  src={getImageUrl(a.image.data.attributes.formats?.small?.url ?? a.image.data.attributes.url)}
                  alt={a.title}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              {:else}
                <div class="w-full h-full bg-gradient-to-br from-primary-100 to-navy-100 flex items-center justify-center text-5xl">📅</div>
              {/if}
              {#if a.category}
                <div class="absolute top-3 left-3">
                  <span class="badge bg-white text-primary-700 shadow-sm">{a.category}</span>
                </div>
              {/if}
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                {formatDate(a.date)}
                {#if a.venue}
                  <span class="text-gray-300">·</span>
                  {a.venue}
                {/if}
              </div>
              <h3 class="font-display font-semibold text-navy-900 text-lg group-hover:text-primary-600 transition-colors">
                <a href="/events/{a.slug}">{a.title}</a>
              </h3>
            </div>
          </article>
        {/each}
      {/if}
    </div>
  </div>
</section>
