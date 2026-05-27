<script lang="ts">
  import type { PageData } from './$types';
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import { getImageUrl } from '$lib/services/api';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  export let data: PageData;

  const fallbackDepts = [
    { title: 'School of Engineering & Technology', slug: 'engineering', desc: 'B.Tech & M.Tech across CE, ME, EE, EC, IT branches. NBA Accredited.', icon: '⚙️', students: 3200, programs: 8 },
    { title: 'School of Computer Applications', slug: 'computer-applications', desc: 'BCA, MCA programs with strong industry connect and placement record.', icon: '💻', students: 1200, programs: 3 },
    { title: 'School of Management Studies', slug: 'management', desc: 'BBA, MBA programs with live projects, case studies, and corporate mentorship.', icon: '📊', students: 1800, programs: 5 },
    { title: 'School of Pharmacy', slug: 'pharmacy', desc: 'B.Pharm, M.Pharm, Pharm.D programs with state-of-the-art labs.', icon: '💊', students: 800, programs: 4 },
    { title: 'School of Architecture', slug: 'architecture', desc: 'B.Arch, M.Arch programs focused on sustainable and innovative design.', icon: '🏛️', students: 400, programs: 2 },
    { title: 'School of Design', slug: 'design', desc: 'B.Des in Product, Interior, Fashion & Communication Design.', icon: '🎨', students: 600, programs: 4 },
    { title: 'School of Commerce', slug: 'commerce', desc: 'B.Com, M.Com, BBA(Hons) with CA and CMA integration.', icon: '💰', students: 900, programs: 4 },
    { title: 'School of Physiotherapy', slug: 'physiotherapy', desc: 'BPT, MPT programs with clinical training at leading hospitals.', icon: '🏥', students: 300, programs: 2 },
    { title: 'School of Applied Sciences', slug: 'applied-sciences', desc: 'Foundation sciences and interdisciplinary programs.', icon: '🔬', students: 400, programs: 3 },
    { title: 'School of Media & Communication', slug: 'media-communication', desc: 'BJMC, Mass Communication with live studio and production facilities.', icon: '📺', students: 350, programs: 3 },
  ];
</script>

<SEOHead meta={{
  title: 'Departments & Schools',
  description: 'Explore LJ University\'s 10 schools and institutes offering programs in engineering, management, pharmacy, design, and more.',
}} />

<PageHero
  title="Schools & Departments"
  subtitle="10 schools, 30+ programs, and a community of 10,000+ learners."
  image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
  breadcrumbs={[{ label: 'Departments' }]}
/>

<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#if data.departments.length === 0}
        {#each fallbackDepts as dept}
          <a href="/departments/{dept.slug}" class="card group p-7 hover:-translate-y-1 transition-all duration-300">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-3xl flex-shrink-0">{dept.icon}</div>
              <div>
                <h2 class="font-display font-bold text-navy-900 text-xl group-hover:text-primary-600 transition-colors leading-snug">{dept.title}</h2>
              </div>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed mb-5">{dept.desc}</p>
            <div class="flex items-center gap-4 text-xs text-gray-400 mb-5">
              <span>👥 {dept.students.toLocaleString()} Students</span>
              <span>📚 {dept.programs} Programs</span>
            </div>
            <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore School
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </a>
        {/each}
      {:else}
        {#each data.departments as dept}
          {@const a = dept.attributes}
          <a href="/departments/{a.slug}" class="card group p-7 hover:-translate-y-1 transition-all duration-300">
            {#if a.bannerImage?.data}
              <div class="h-40 rounded-xl overflow-hidden -mx-7 -mt-7 mb-5">
                <img src={getImageUrl(a.bannerImage.data.attributes.formats?.small?.url ?? a.bannerImage.data.attributes.url)} alt={a.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            {/if}
            <h2 class="font-display font-bold text-navy-900 text-xl group-hover:text-primary-600 transition-colors mb-3">{a.title}</h2>
            {#if a.shortDescription}
              <p class="text-gray-500 text-sm leading-relaxed mb-5">{a.shortDescription}</p>
            {/if}
            <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore School
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </a>
        {/each}
      {/if}
    </div>
  </div>
</section>

<CTABanner />
