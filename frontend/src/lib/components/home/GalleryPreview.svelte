<script lang="ts">
  import type { StrapiItem, Gallery } from '$lib/types';
  import { getImageUrl } from '$lib/services/api';

  export let items: StrapiItem<Gallery>[] = [];

  const fallback = [
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80', caption: 'Main Campus', span: 'col-span-2 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80', caption: 'Library', span: '' },
    { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80', caption: 'Classrooms', span: '' },
    { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', caption: 'Sports Complex', span: '' },
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80', caption: 'Tech Fest', span: '' },
    { url: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=400&q=80', caption: 'Labs', span: '' },
  ];
</script>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
      <div>
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Campus Life</p>
        <h2 class="section-title">University Gallery</h2>
      </div>
      <a href="/gallery" class="btn-outline shrink-0">View All Photos</a>
    </div>

    <div class="grid grid-cols-3 md:grid-cols-4 gap-3 h-96 md:h-[480px]">
      {#if items.length === 0}
        {#each fallback as item, i}
          <div
            class="overflow-hidden rounded-2xl {item.span} group cursor-pointer relative"
            style={i === 0 ? 'grid-column: span 2; grid-row: span 2;' : ''}
          >
            <img
              src={item.url}
              alt={item.caption}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3">
              <span class="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full">
                {item.caption}
              </span>
            </div>
          </div>
        {/each}
      {:else}
        {#each items.slice(0, 6) as item, i}
          {@const a = item.attributes}
          <div
            class="overflow-hidden rounded-2xl group cursor-pointer relative"
            style={i === 0 ? 'grid-column: span 2; grid-row: span 2;' : ''}
          >
            <img
              src={getImageUrl(a.image.data.attributes.formats?.medium?.url ?? a.image.data.attributes.url)}
              alt={a.caption ?? a.title ?? ''}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3">
              {#if a.caption}
                <span class="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full">
                  {a.caption}
                </span>
              {/if}
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>
