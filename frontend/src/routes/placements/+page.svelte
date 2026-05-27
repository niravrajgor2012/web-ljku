<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';
  import { getImageUrl } from '$lib/services/api';
  import type { PageData } from './$types';

  export let data: PageData;

  const stats = [
    { value: '95%', label: 'Overall Placement', icon: '🎯' },
    { value: '₹8.5L', label: 'Average Package', icon: '💰' },
    { value: '₹42L', label: 'Highest Package (2024)', icon: '🏆' },
    { value: '150+', label: 'Recruiting Companies', icon: '🏢' },
    { value: '1500+', label: 'Students Placed', icon: '👩‍💼' },
    { value: '12+', label: 'Countries', icon: '🌍' },
  ];

  const topRecruiters = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'Deloitte', 'Amazon',
    'Google', 'Microsoft', 'Capgemini', 'Cognizant', 'HCL', 'HDFC Bank',
    'ICICI Bank', 'L&T', 'Tata Motors', 'Mahindra', 'Zydus', 'Sun Pharma',
  ];

  const successes = [
    { name: 'Arjun Patel', company: 'Google India', role: 'Software Engineer', pkg: '₹36 LPA', program: 'B.Tech CSE', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
    { name: 'Priya Mehta', company: 'Amazon', role: 'SDE II', pkg: '₹28 LPA', program: 'B.Tech IT', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80' },
    { name: 'Ravi Shah', company: 'Deloitte', role: 'Consultant', pkg: '₹18 LPA', program: 'MBA', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
    { name: 'Nisha Kumar', company: 'Cipla', role: 'R&D Executive', pkg: '₹12 LPA', program: 'M.Pharm', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  ];
</script>

<SEOHead meta={{
  title: 'Placements',
  description: '95% placement rate at LJ University. Top recruiters include TCS, Infosys, Amazon, Google, Deloitte and 150+ more.',
}} />

<PageHero
  title="Placements & Careers"
  subtitle="95% placement rate. Industry partnerships. Record-breaking packages. Your career starts here."
  image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
  breadcrumbs={[{ label: 'Placements' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
      {#each stats as stat}
        <div class="card p-5 text-center">
          <div class="text-3xl mb-2">{stat.icon}</div>
          <div class="font-display text-2xl font-bold text-primary-600">{stat.value}</div>
          <div class="text-xs text-gray-500 mt-1">{stat.label}</div>
        </div>
      {/each}
    </div>

    <!-- Success stories -->
    <div class="mb-16">
      <h2 class="section-title mb-8">Success Stories</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#if data.placements.length === 0}
          {#each successes as p}
            <div class="card p-6 text-center">
              <img src={p.img} alt={p.name} class="w-16 h-16 rounded-2xl object-cover mx-auto mb-4 border-4 border-primary-100" loading="lazy" />
              <h3 class="font-display font-bold text-navy-900">{p.name}</h3>
              <p class="text-primary-600 text-sm font-semibold">{p.role}</p>
              <p class="text-gray-500 text-sm">{p.company}</p>
              <div class="mt-3 inline-block bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-full text-sm">{p.pkg}</div>
              <p class="text-xs text-gray-400 mt-2">{p.program}</p>
            </div>
          {/each}
        {:else}
          {#each data.placements.slice(0, 8) as p}
            {@const a = p.attributes}
            <div class="card p-6 text-center">
              {#if a.image?.data}
                <img src={getImageUrl(a.image.data.attributes.url)} alt={a.studentName} class="w-16 h-16 rounded-2xl object-cover mx-auto mb-4 border-4 border-primary-100" loading="lazy" />
              {:else}
                <div class="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-4">{a.studentName.charAt(0)}</div>
              {/if}
              <h3 class="font-display font-bold text-navy-900">{a.studentName}</h3>
              {#if a.role}<p class="text-primary-600 text-sm font-semibold">{a.role}</p>{/if}
              <p class="text-gray-500 text-sm">{a.companyName}</p>
              {#if a.package}
                <div class="mt-3 inline-block bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-full text-sm">₹{a.package}L PA</div>
              {/if}
              {#if a.program}<p class="text-xs text-gray-400 mt-2">{a.program}</p>{/if}
            </div>
          {/each}
        {/if}
      </div>
    </div>

    <!-- Recruiters -->
    <div>
      <h2 class="section-title mb-8">Our Top Recruiters</h2>
      <div class="flex flex-wrap gap-3">
        {#each topRecruiters as company}
          <div class="px-4 py-2 rounded-xl border-2 border-gray-100 hover:border-primary-200 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-all duration-200 cursor-default">
            {company}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<CTABanner />
