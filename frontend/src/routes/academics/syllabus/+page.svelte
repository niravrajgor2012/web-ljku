<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const programs = [
    { name: 'B.Com', note: 'Major revision per NEP guidelines' },
    { name: 'MBA', note: 'Job role-based curriculum design' },
    { name: 'M.Sc. – Microbiology', note: 'Updated curriculum for 2024-25' },
    { name: 'M.Sc. – Chemistry', note: 'Updated curriculum for 2024-25' },
    { name: 'M.Sc. – Biotechnology', note: 'Updated curriculum for 2024-25' },
    { name: 'BBA – Event Management', note: 'Revised program structure' },
    { name: 'BBA – Sports Management', note: 'Revised program structure' },
  ];
</script>

<SEOHead meta={{
  title: 'Syllabus – LJ University',
  description: 'Revised LJ University syllabus for academic year 2024-25 — aligned with NEP 2020 and industry trends across all programs.',
}} />

<PageHero
  title="Syllabus"
  subtitle="Revised syllabus — Academic Year 2024-25."
  image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Syllabus' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">2024-25 Revision</p>
    <h2 class="section-title mb-5">Key Highlight</h2>
    <div class="card p-6 border-l-4 border-primary-600 mb-12">
      <p class="text-gray-700 leading-relaxed">
        For the first time, Semester 7 and 8 syllabi have been developed for all B.E. programs under LJU, ensuring alignment with
        industry trends, professional competencies and NEP 2020 recommendations.
      </p>
    </div>

    <h3 class="font-display font-bold text-navy-900 text-xl mb-5">Programs with Major Revision in 2024-25</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {#each programs as p}
        <div class="card p-5">
          <h4 class="font-display font-bold text-navy-900 text-base mb-1">{p.name}</h4>
          <p class="text-gray-500 text-sm">{p.note}</p>
        </div>
      {/each}
    </div>

    <div class="card p-8 bg-gradient-to-r from-primary-600 to-navy-800 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h3 class="font-display font-bold text-xl mb-1">Official Syllabus PDFs</h3>
        <p class="text-primary-100 text-sm">For the official current syllabus documents across all programs, visit the LJU syllabus portal.</p>
      </div>
      <a href="https://ljku.edu.in/syllabus" target="_blank" rel="noopener" class="bg-white text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap">
        Visit ljku.edu.in/syllabus &rarr;
      </a>
    </div>
  </div>
</section>

<CTABanner />
