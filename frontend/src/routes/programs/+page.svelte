<script lang="ts">
  import type { PageData } from './$types';
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import { getImageUrl } from '$lib/services/api';
  import { formatCurrency } from '$lib/utils';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  export let data: PageData;

  let search = '';
  let selectedDegree = '';
  let selectedDept = '';

  const degreeTypes = ['All', 'B.Tech', 'M.Tech', 'BBA', 'MBA', 'BCA', 'MCA', 'B.Pharm', 'M.Pharm', 'B.Arch', 'B.Des', 'B.Com', 'M.Com', 'BPT', 'BJMC', 'Ph.D'];

  const fallbackPrograms = [
    { title: 'B.Tech Computer Science & Engineering', degree: 'B.Tech', duration: '4 Years', dept: 'Engineering', fees: 140000, eligibility: '10+2 with PCM, JEE' },
    { title: 'B.Tech Mechanical Engineering', degree: 'B.Tech', duration: '4 Years', dept: 'Engineering', fees: 120000, eligibility: '10+2 with PCM, JEE' },
    { title: 'MBA Business Administration', degree: 'MBA', duration: '2 Years', dept: 'Management', fees: 180000, eligibility: 'Any Graduate, CAT/MAT/GMAT' },
    { title: 'BCA Computer Applications', degree: 'BCA', duration: '3 Years', dept: 'Computer Applications', fees: 90000, eligibility: '10+2 any stream' },
    { title: 'B.Pharm Pharmacy', degree: 'B.Pharm', duration: '4 Years', dept: 'Pharmacy', fees: 110000, eligibility: '10+2 with PCB/PCM' },
    { title: 'B.Arch Architecture', degree: 'B.Arch', duration: '5 Years', dept: 'Architecture', fees: 160000, eligibility: '10+2 with Maths, NATA' },
    { title: 'B.Des Product Design', degree: 'B.Des', duration: '4 Years', dept: 'Design', fees: 150000, eligibility: '10+2 any stream' },
    { title: 'MCA Computer Applications', degree: 'MCA', duration: '2 Years', dept: 'Computer Applications', fees: 120000, eligibility: 'BCA/B.Sc IT/B.Tech' },
    { title: 'M.Tech Computer Science', degree: 'M.Tech', duration: '2 Years', dept: 'Engineering', fees: 100000, eligibility: 'B.Tech/BE, GATE' },
    { title: 'BJMC Mass Communication', degree: 'BJMC', duration: '3 Years', dept: 'Media & Communication', fees: 95000, eligibility: '10+2 any stream' },
    { title: 'B.Com Accountancy & Finance', degree: 'B.Com', duration: '3 Years', dept: 'Commerce', fees: 60000, eligibility: '10+2 with Commerce/Maths' },
    { title: 'BPT Physiotherapy', degree: 'BPT', duration: '4.5 Years', dept: 'Physiotherapy', fees: 120000, eligibility: '10+2 with PCB' },
  ];

  $: filtered = data.programs.length > 0
    ? data.programs.filter(p => {
        const a = p.attributes;
        const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
        const matchDegree = !selectedDegree || a.degreeType === selectedDegree;
        const matchDept = !selectedDept || a.department?.data?.attributes.slug === selectedDept;
        return matchSearch && matchDegree && matchDept;
      })
    : fallbackPrograms.filter(p => {
        const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
        const matchDegree = !selectedDegree || p.degree === selectedDegree;
        return matchSearch && matchDegree;
      });
</script>

<SEOHead meta={{
  title: 'Programs & Courses',
  description: 'Explore 30+ programs at LJ University across engineering, management, pharmacy, design, and more.',
}} />

<PageHero
  title="Programs & Courses"
  subtitle="30+ programs across 10 schools. Find the right program for your aspirations."
  breadcrumbs={[{ label: 'Programs' }]}
/>

<section class="py-16 bg-gray-50">
  <div class="container-lg">
    <!-- Filters -->
    <div class="card p-5 mb-8 flex flex-col md:flex-row gap-4">
      <div class="flex-1 relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          type="search"
          placeholder="Search programs..."
          bind:value={search}
          class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm"
        />
      </div>
      <select bind:value={selectedDegree} class="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm bg-white">
        <option value="">All Degrees</option>
        {#each degreeTypes.slice(1) as d}<option value={d}>{d}</option>{/each}
      </select>
      {#if data.departments.length > 0}
        <select bind:value={selectedDept} class="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm bg-white">
          <option value="">All Departments</option>
          {#each data.departments as d}<option value={d.attributes.slug}>{d.attributes.title}</option>{/each}
        </select>
      {/if}
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#if data.programs.length === 0}
        {#each filtered as prog}
          <div class="card p-6 hover:-translate-y-1 transition-all duration-300">
            <div class="flex items-center gap-2 mb-3">
              <span class="badge bg-primary-100 text-primary-700">{prog.degree}</span>
              <span class="badge bg-gray-100 text-gray-600">{prog.duration}</span>
            </div>
            <h2 class="font-display font-bold text-navy-900 text-lg mb-1">{prog.title}</h2>
            <p class="text-sm text-gray-500 mb-3">{prog.dept}</p>
            <p class="text-xs text-gray-400 mb-3">Eligibility: {prog.eligibility}</p>
            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              <span class="text-emerald-600 font-semibold text-sm">{formatCurrency(prog.fees)}/yr</span>
              <a href="/admissions" class="text-primary-600 text-sm font-semibold hover:text-primary-700">Apply &rarr;</a>
            </div>
          </div>
        {/each}
      {:else}
        {#each filtered as prog}
          {@const a = prog.attributes}
          <article class="card p-6 hover:-translate-y-1 transition-all duration-300">
            {#if a.thumbnail?.data}
              <div class="h-36 rounded-xl overflow-hidden -mx-6 -mt-6 mb-5">
                <img src={getImageUrl(a.thumbnail.data.attributes.formats?.small?.url ?? a.thumbnail.data.attributes.url)} alt={a.title} class="w-full h-full object-cover" loading="lazy" />
              </div>
            {/if}
            <div class="flex items-center gap-2 mb-3">
              <span class="badge bg-primary-100 text-primary-700">{a.degreeType}</span>
              {#if a.duration}<span class="badge bg-gray-100 text-gray-600">{a.duration}</span>{/if}
            </div>
            <h2 class="font-display font-bold text-navy-900 text-lg mb-1">{a.title}</h2>
            {#if a.department?.data}<p class="text-sm text-gray-500 mb-2">{a.department.data.attributes.title}</p>{/if}
            {#if a.eligibility}<p class="text-xs text-gray-400 mb-3">Eligibility: {a.eligibility}</p>{/if}
            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              {#if a.fees}
                <span class="text-emerald-600 font-semibold text-sm">{formatCurrency(a.fees)}/yr</span>
              {:else}
                <span></span>
              {/if}
              <a href="/programs/{a.slug}" class="text-primary-600 text-sm font-semibold hover:text-primary-700">Learn more &rarr;</a>
            </div>
          </article>
        {/each}
      {/if}
    </div>

    {#if filtered.length === 0}
      <div class="text-center py-16 text-gray-400">
        <div class="text-5xl mb-4">&#x1F50D;</div>
        <p class="text-lg">No programs found. Try adjusting your filters.</p>
      </div>
    {/if}
  </div>
</section>

<CTABanner />
