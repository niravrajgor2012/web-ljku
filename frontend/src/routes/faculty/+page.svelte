<script lang="ts">
  import type { PageData } from './$types';
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import { getImageUrl } from '$lib/services/api';

  export let data: PageData;

  let search = '';
  let selectedDept = '';

  const fallback = [
    { name: 'Dr. Prashant Mehta', role: 'Professor & HOD', dept: 'Computer Science', exp: 18, qual: 'Ph.D (IIT Bombay)', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
    { name: 'Dr. Shilpa Shah', role: 'Associate Professor', dept: 'Management', exp: 12, qual: 'Ph.D (IIMA)', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80' },
    { name: 'Prof. Rajesh Patel', role: 'Assistant Professor', dept: 'Mechanical Engineering', exp: 8, qual: 'M.Tech (IIT Delhi)', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
    { name: 'Dr. Neha Joshi', role: 'Professor', dept: 'Pharmacy', exp: 15, qual: 'Ph.D Pharmacology', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
    { name: 'Prof. Amit Trivedi', role: 'Associate Professor', dept: 'Architecture', exp: 10, qual: 'M.Arch (CEPT)', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
    { name: 'Dr. Kavita Singh', role: 'Professor', dept: 'Design', exp: 14, qual: 'Ph.D (NID Ahmedabad)', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80' },
    { name: 'Prof. Sanjay Kumar', role: 'Assistant Professor', dept: 'Electrical Engineering', exp: 6, qual: 'M.Tech (NIT Surat)', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80' },
    { name: 'Dr. Anita Desai', role: 'Associate Professor', dept: 'Commerce', exp: 11, qual: 'Ph.D Commerce (GU)', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
  ];

  $: filteredFallback = fallback.filter(f => {
    const ms = !search || f.name.toLowerCase().includes(search.toLowerCase()) || f.dept.toLowerCase().includes(search.toLowerCase());
    return ms;
  });

  $: filteredFaculty = data.faculty.filter(f => {
    const a = f.attributes;
    const ms = !search || a.name.toLowerCase().includes(search.toLowerCase());
    const md = !selectedDept || a.department?.data?.attributes.slug === selectedDept;
    return ms && md;
  });
</script>

<SEOHead meta={{
  title: 'Faculty',
  description: 'Meet the expert faculty at LJ University – 500+ distinguished professors, researchers, and industry professionals.',
}} />

<PageHero
  title="Our Faculty"
  subtitle="500+ distinguished educators, researchers, and industry experts dedicated to your success."
  breadcrumbs={[{ label: 'Faculty' }]}
/>

<section class="py-16 bg-gray-50">
  <div class="container-lg">
    <!-- Filters -->
    <div class="card p-4 mb-8 flex flex-col sm:flex-row gap-4">
      <div class="flex-1 relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input type="search" placeholder="Search faculty..." bind:value={search} class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm" />
      </div>
      {#if data.departments.length > 0}
        <select bind:value={selectedDept} class="px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-primary-400">
          <option value="">All Departments</option>
          {#each data.departments as d}<option value={d.attributes.slug}>{d.attributes.title}</option>{/each}
        </select>
      {/if}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {#if data.faculty.length === 0}
        {#each filteredFallback as f}
          <div class="card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
            <div class="relative inline-block mb-4">
              <img src={f.img} alt={f.name} class="w-20 h-20 rounded-2xl object-cover mx-auto border-4 border-white shadow-md" loading="lazy" />
            </div>
            <h3 class="font-display font-bold text-navy-900 text-base">{f.name}</h3>
            <p class="text-primary-600 text-sm font-semibold">{f.role}</p>
            <p class="text-gray-500 text-xs mt-1">{f.dept}</p>
            <p class="text-gray-400 text-xs mt-1">{f.qual}</p>
            <p class="text-gray-400 text-xs mt-1">{f.exp} years experience</p>
          </div>
        {/each}
      {:else}
        {#each filteredFaculty as f}
          {@const a = f.attributes}
          <div class="card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
            {#if a.image?.data}
              <img src={getImageUrl(a.image.data.attributes.url)} alt={a.name} class="w-20 h-20 rounded-2xl object-cover mx-auto mb-4 border-4 border-white shadow-md" loading="lazy" />
            {:else}
              <div class="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-4">{a.name.charAt(0)}</div>
            {/if}
            <h3 class="font-display font-bold text-navy-900 text-base">{a.name}</h3>
            {#if a.designation}<p class="text-primary-600 text-sm font-semibold">{a.designation}</p>{/if}
            {#if a.department?.data}<p class="text-gray-500 text-xs mt-1">{a.department.data.attributes.title}</p>{/if}
            {#if a.qualification}<p class="text-gray-400 text-xs mt-1">{a.qualification}</p>{/if}
            {#if a.experience}<p class="text-gray-400 text-xs mt-1">{a.experience} yrs experience</p>{/if}
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>
