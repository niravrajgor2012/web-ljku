<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import { getImageUrl } from '$lib/services/api';
  import { formatDate } from '$lib/utils';
  import type { PageData } from './$types';

  export let data: PageData;

  const fallbackEvents = [
    { title: 'Annual Tech Fest – Lakshya 2025', date: '2025-03-15', category: 'Technical', venue: 'Main Campus', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=70' },
    { title: 'Campus Placement Drive – TCS & Infosys', date: '2025-03-22', category: 'Placement', venue: 'Placement Cell', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=70' },
    { title: 'Cultural Festival – Rang Utsav 2025', date: '2025-04-05', category: 'Cultural', venue: 'Open Amphitheater', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&q=70' },
    { title: 'International Conference on AI & ML', date: '2025-04-18', category: 'Academic', venue: 'Seminar Hall', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=70' },
    { title: 'Sports Meet – LJ Olympiad 2025', date: '2025-02-20', category: 'Sports', venue: 'Sports Complex', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=70' },
    { title: 'Entrepreneurship Summit 2025', date: '2025-05-10', category: 'Workshop', venue: 'Incubation Center', img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=70' },
  ];

  const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Technical', 'Workshop', 'Seminar', 'Placement'];
  let activeCategory = 'All';

  $: filteredEvents = data.events.length > 0
    ? data.events.filter(e => activeCategory === 'All' || e.attributes.category === activeCategory)
    : fallbackEvents.filter(e => activeCategory === 'All' || e.category === activeCategory);
</script>

<SEOHead meta={{
  title: 'Events & News',
  description: 'Stay updated with the latest events, academic activities, cultural fests, and news at LJ University.',
}} />

<PageHero
  title="Events & News"
  subtitle="Stay informed about the latest happenings, achievements, and events at LJ University."
  breadcrumbs={[{ label: 'Events' }]}
/>

<section class="py-16 bg-gray-50">
  <div class="container-lg">
    <!-- Category filters -->
    <div class="flex flex-wrap gap-2 mb-10">
      {#each categories as cat}
        <button
          class="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
          class:bg-primary-600={activeCategory === cat}
          class:text-white={activeCategory === cat}
          class:bg-white={activeCategory !== cat}
          class:text-gray-600={activeCategory !== cat}
          class:border={activeCategory !== cat}
          class:border-gray-200={activeCategory !== cat}
          class:hover:border-primary-300={activeCategory !== cat}
          on:click={() => (activeCategory = cat)}
        >
          {cat}
        </button>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#if data.events.length === 0}
        {#each filteredEvents as ev}
          <article class="card group overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div class="h-48 overflow-hidden relative">
              <img src={ev.img} alt={ev.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div class="absolute top-3 left-3">
                <span class="badge bg-white text-primary-700 shadow-sm">{ev.category}</span>
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                {formatDate(ev.date)}
                <span>·</span>
                {ev.venue}
              </div>
              <h2 class="font-display font-bold text-navy-900 text-lg group-hover:text-primary-600 transition-colors">{ev.title}</h2>
            </div>
          </article>
        {/each}
      {:else}
        {#each filteredEvents as ev}
          {@const a = ev.attributes}
          <article class="card group overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div class="h-48 overflow-hidden relative">
              {#if a.image?.data}
                <img src={getImageUrl(a.image.data.attributes.formats?.small?.url ?? a.image.data.attributes.url)} alt={a.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              {:else}
                <div class="w-full h-full bg-gradient-to-br from-primary-100 to-navy-100 flex items-center justify-center text-5xl">📅</div>
              {/if}
              {#if a.category}
                <div class="absolute top-3 left-3"><span class="badge bg-white text-primary-700 shadow-sm">{a.category}</span></div>
              {/if}
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                {formatDate(a.date)}
                {#if a.venue}<span>·</span>{a.venue}{/if}
              </div>
              <h2 class="font-display font-bold text-navy-900 text-lg group-hover:text-primary-600 transition-colors">
                <a href="/events/{a.slug}">{a.title}</a>
              </h2>
            </div>
          </article>
        {/each}
      {/if}
    </div>
  </div>
</section>
