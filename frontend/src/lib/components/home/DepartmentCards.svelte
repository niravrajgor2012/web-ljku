<script lang="ts">
  import type { StrapiItem, Department } from '$lib/types';
  import { getImageUrl } from '$lib/services/api';

  export let departments: StrapiItem<Department>[] = [];

  // Fallback color palette
  const colors = [
    'from-blue-500 to-blue-700',
    'from-purple-500 to-purple-700',
    'from-emerald-500 to-emerald-700',
    'from-orange-500 to-orange-700',
    'from-rose-500 to-rose-700',
    'from-cyan-500 to-cyan-700',
    'from-amber-500 to-amber-700',
    'from-indigo-500 to-indigo-700',
    'from-teal-500 to-teal-700',
    'from-pink-500 to-pink-700',
  ];
</script>

<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
      <div>
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Schools & Institutes</p>
        <h2 class="section-title">Departments &amp; Schools</h2>
      </div>
      <a href="/departments" class="btn-outline shrink-0">View All Departments</a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#if departments.length === 0}
        <!-- Fallback static departments -->
        {#each [
          { title: 'School of Engineering', slug: 'engineering', desc: 'B.Tech, M.Tech in CE, ME, EE, EC, IT', icon: '⚙️' },
          { title: 'School of Computer Applications', slug: 'computer-applications', desc: 'BCA, MCA, B.Sc IT programs', icon: '💻' },
          { title: 'School of Management', slug: 'management', desc: 'BBA, MBA, Executive Programs', icon: '📊' },
          { title: 'School of Pharmacy', slug: 'pharmacy', desc: 'B.Pharm, M.Pharm, Pharm.D', icon: '💊' },
          { title: 'School of Architecture', slug: 'architecture', desc: 'B.Arch, M.Arch programs', icon: '🏛️' },
          { title: 'School of Design', slug: 'design', desc: 'B.Des in Product, Interior, Fashion', icon: '🎨' },
          { title: 'School of Commerce', slug: 'commerce', desc: 'B.Com, M.Com, CA Foundation', icon: '💰' },
          { title: 'School of Physiotherapy', slug: 'physiotherapy', desc: 'BPT, MPT programs', icon: '🏥' },
        ] as dept, i}
          <a href="/departments/{dept.slug}" class="card group p-6 hover:-translate-y-1 transition-all duration-300">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br {colors[i % colors.length]} flex items-center justify-center text-2xl mb-4 shadow-sm">
              {dept.icon}
            </div>
            <h3 class="font-display font-semibold text-navy-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
              {dept.title}
            </h3>
            <p class="text-sm text-gray-500 mb-4">{dept.desc}</p>
            <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        {/each}
      {:else}
        {#each departments as dept, i}
          {@const a = dept.attributes}
          <a href="/departments/{a.slug}" class="card group p-6 hover:-translate-y-1 transition-all duration-300">
            {#if a.bannerImage?.data}
              <div class="h-36 rounded-xl overflow-hidden mb-4 -mx-6 -mt-6">
                <img
                  src={getImageUrl(a.bannerImage.data.attributes.formats?.small?.url ?? a.bannerImage.data.attributes.url)}
                  alt={a.title}
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            {:else}
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br {colors[i % colors.length]} flex items-center justify-center text-2xl mb-4">
                🏫
              </div>
            {/if}
            <h3 class="font-display font-semibold text-navy-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
              {a.title}
            </h3>
            {#if a.shortDescription}
              <p class="text-sm text-gray-500 mb-4 line-clamp-2">{a.shortDescription}</p>
            {/if}
            <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        {/each}
      {/if}
    </div>
  </div>
</section>
