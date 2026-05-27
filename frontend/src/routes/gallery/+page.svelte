<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import { getImageUrl } from '$lib/services/api';
  import type { PageData } from './$types';

  export let data: PageData;

  const fallback = [
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80', caption: 'Main Campus', cat: 'Campus' },
    { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', caption: 'Central Library', cat: 'Campus' },
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', caption: 'Tech Fest 2024', cat: 'Events' },
    { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', caption: 'Sports Complex', cat: 'Sports' },
    { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80', caption: 'Cultural Fest', cat: 'Cultural' },
    { url: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=600&q=80', caption: 'Research Lab', cat: 'Academic' },
    { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80', caption: 'Smart Classrooms', cat: 'Academic' },
    { url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', caption: 'Placement Drive', cat: 'Placements' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', caption: 'Convocation 2024', cat: 'Academic' },
    { url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80', caption: 'Student Lounge', cat: 'Student-Life' },
    { url: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?w=600&q=80', caption: 'Group Study', cat: 'Student-Life' },
    { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', caption: 'Hackathon', cat: 'Events' },
  ];

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Cultural', 'Academic', 'Placements', 'Student-Life', 'Infrastructure'];
  let activeCategory = 'All';
  let lightboxSrc = '';

  $: filtered = data.gallery.length > 0
    ? (activeCategory === 'All' ? data.gallery : data.gallery.filter(g => g.attributes.category === activeCategory))
    : (activeCategory === 'All' ? fallback : fallback.filter(g => g.cat === activeCategory));

  function openLightbox(src: string) { lightboxSrc = src; }
  function closeLightbox() { lightboxSrc = ''; }
</script>

<SEOHead meta={{
  title: 'Gallery',
  description: 'Explore LJ University campus, events, sports, and student life through our photo gallery.',
}} />

<PageHero
  title="University Gallery"
  subtitle="Moments from campus life, events, achievements, and more."
  breadcrumbs={[{ label: 'Gallery' }]}
/>

<section class="py-16 bg-gray-50">
  <div class="container-lg">
    <div class="flex flex-wrap gap-2 mb-8">
      {#each categories as cat}
        <button
          class="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
          class:bg-navy-900={activeCategory === cat}
          class:text-white={activeCategory === cat}
          class:bg-white={activeCategory !== cat}
          class:text-gray-600={activeCategory !== cat}
          class:border={activeCategory !== cat}
          class:border-gray-200={activeCategory !== cat}
          on:click={() => activeCategory = cat}
        >{cat}</button>
      {/each}
    </div>

    <!-- Masonry-style grid -->
    <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {#if data.gallery.length === 0}
        {#each filtered as item}
          <div class="break-inside-avoid mb-4">
            <button class="group w-full block rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow" on:click={() => openLightbox(item.url)}>
              <img src={item.url} alt={item.caption} class="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </button>
            {#if item.caption}
              <p class="text-xs text-gray-500 mt-1.5 text-center">{item.caption}</p>
            {/if}
          </div>
        {/each}
      {:else}
        {#each filtered as item}
          {@const a = item.attributes}
          <div class="break-inside-avoid mb-4">
            <button class="group w-full block rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow" on:click={() => openLightbox(getImageUrl(a.image.data.attributes.url))}>
              <img src={getImageUrl(a.image.data.attributes.formats?.medium?.url ?? a.image.data.attributes.url)} alt={a.caption ?? ''} class="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </button>
            {#if a.caption}
              <p class="text-xs text-gray-500 mt-1.5 text-center">{a.caption}</p>
            {/if}
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>

<!-- Lightbox -->
{#if lightboxSrc}
  <div
    class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    on:click={closeLightbox}
  >
    <button class="absolute top-4 right-4 text-white hover:text-gray-300 z-10" on:click={closeLightbox} aria-label="Close">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
    <img src={lightboxSrc} alt="Gallery" class="max-h-[90vh] max-w-[90vw] rounded-xl object-contain" on:click|stopPropagation />
  </div>
{/if}
