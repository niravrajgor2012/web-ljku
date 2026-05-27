<script lang="ts">
  import type { StrapiItem, Program } from '$lib/types';
  import { getImageUrl } from '$lib/services/api';
  import { formatCurrency } from '$lib/utils';

  export let programs: StrapiItem<Program>[] = [];

  const fallback = [
    { title: 'B.Tech Computer Science', degree: 'B.Tech', duration: '4 Years', dept: 'Engineering', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=70' },
    { title: 'MBA Business Administration', degree: 'MBA', duration: '2 Years', dept: 'Management', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70' },
    { title: 'B.Pharm Pharmacy', degree: 'B.Pharm', duration: '4 Years', dept: 'Pharmacy', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70' },
    { title: 'B.Des Product Design', degree: 'B.Des', duration: '4 Years', dept: 'Design', img: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&q=70' },
    { title: 'BCA Computer Applications', degree: 'BCA', duration: '3 Years', dept: 'Computer Applications', img: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&q=70' },
    { title: 'B.Arch Architecture', degree: 'B.Arch', duration: '5 Years', dept: 'Architecture', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70' },
  ];
</script>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
      <div>
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Academic Programs</p>
        <h2 class="section-title">Featured Programs</h2>
        <p class="section-subtitle mt-3 max-w-xl">
          Explore our diverse range of undergraduate, postgraduate, and doctoral programs
          designed for the careers of tomorrow.
        </p>
      </div>
      <a href="/programs" class="btn-outline shrink-0">All Programs</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#if programs.length === 0}
        {#each fallback as prog}
          <article class="card group overflow-hidden">
            <div class="h-44 overflow-hidden">
              <img
                src={prog.img}
                alt={prog.title}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge bg-primary-100 text-primary-700">{prog.degree}</span>
                <span class="badge bg-gray-100 text-gray-600">{prog.duration}</span>
              </div>
              <h3 class="font-display font-semibold text-navy-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">
                {prog.title}
              </h3>
              <p class="text-sm text-gray-500 mb-4">{prog.dept}</p>
              <a href="/programs" class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn more
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        {/each}
      {:else}
        {#each programs.slice(0, 6) as prog}
          {@const a = prog.attributes}
          <article class="card group overflow-hidden">
            {#if a.thumbnail?.data}
              <div class="h-44 overflow-hidden">
                <img
                  src={getImageUrl(a.thumbnail.data.attributes.formats?.small?.url ?? a.thumbnail.data.attributes.url)}
                  alt={a.title}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            {:else}
              <div class="h-44 bg-gradient-to-br from-primary-100 to-navy-100 flex items-center justify-center">
                <span class="text-5xl opacity-50">🎓</span>
              </div>
            {/if}
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge bg-primary-100 text-primary-700">{a.degreeType}</span>
                {#if a.duration}
                  <span class="badge bg-gray-100 text-gray-600">{a.duration}</span>
                {/if}
              </div>
              <h3 class="font-display font-semibold text-navy-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">
                {a.title}
              </h3>
              {#if a.department?.data}
                <p class="text-sm text-gray-500 mb-3">{a.department.data.attributes.title}</p>
              {/if}
              {#if a.fees}
                <p class="text-sm text-emerald-600 font-semibold mb-4">{formatCurrency(a.fees)} / year</p>
              {/if}
              <a href="/programs/{a.slug}" class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn more
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        {/each}
      {/if}
    </div>
  </div>
</section>
