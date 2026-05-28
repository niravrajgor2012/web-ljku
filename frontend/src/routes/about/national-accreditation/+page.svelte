<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const bodies = [
    { name: 'NAAC', full: 'National Assessment and Accreditation Council', grade: 'A+ Grade' },
    { name: 'NBA', full: 'National Board of Accreditation', grade: 'Programs Accredited' },
    { name: 'AICTE', full: 'All India Council for Technical Education', grade: 'Approved' },
    { name: 'PCI', full: 'Pharmacy Council of India', grade: 'Approved' },
    { name: 'COA', full: 'Council of Architecture', grade: 'Approved' },
    { name: 'BCI', full: 'Bar Council of India', grade: 'Approved' },
    { name: 'NIRF', full: 'National Institutional Ranking Framework', grade: 'Ranked' },
    { name: 'UGC', full: 'University Grants Commission', grade: 'Section 2(f)' },
  ];
</script>

<SEOHead meta={{
  title: 'National Accreditation – LJ University',
  description: 'LJ University accreditations and national recognitions — NAAC A+, NBA, AICTE, PCI, COA, BCI, NIRF, UGC.',
}} />

<PageHero
  title="National Accreditation"
  subtitle="Recognised and accredited by India&apos;s most respected statutory bodies."
  image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Accreditation' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each bodies as b}
        <div class="card p-6 text-center hover:-translate-y-1 transition-all">
          <div class="font-display font-bold text-primary-600 text-2xl mb-2">{b.name}</div>
          <div class="text-xs text-gray-500 mb-3">{b.full}</div>
          <div class="inline-block px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold">
            {b.grade}
          </div>
        </div>
      {/each}
    </div>

    <div class="card p-8 mt-12 bg-gradient-to-r from-navy-900 to-primary-900 text-white text-center rounded-3xl">
      <h3 class="font-display text-2xl font-bold mb-3">A Mark of Trust</h3>
      <p class="text-gray-200 max-w-3xl mx-auto leading-relaxed">
        These accreditations affirm that LJ University meets and exceeds national benchmarks for academic quality,
        infrastructure, research output and student outcomes.
      </p>
    </div>
  </div>
</section>

<CTABanner />
