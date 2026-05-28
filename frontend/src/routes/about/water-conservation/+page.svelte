<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const initiatives = [
    { title: 'Rainwater Harvesting', desc: 'Rainwater harvesting structures across the campus replenishing groundwater every monsoon.' },
    { title: 'STP & Recycling', desc: 'On-campus sewage treatment plant recycling water for gardens and toilet flushing.' },
    { title: 'Low-Flow Fixtures', desc: 'Aerators, sensor taps and dual-flush systems installed across all washrooms.' },
    { title: 'Drip Irrigation', desc: 'Landscaped areas irrigated using drip and sprinkler systems for minimum wastage.' },
    { title: 'Water Audits', desc: 'Annual third-party water audits to identify leakages and optimise consumption.' },
    { title: 'Awareness Drives', desc: 'Student clubs run regular awareness drives and World Water Day campaigns.' },
  ];
</script>

<SEOHead meta={{
  title: 'Water Conservation – LJ University',
  description: 'LJ University water conservation initiatives — rainwater harvesting, STP recycling, low-flow fixtures and drip irrigation.',
}} />

<PageHero
  title="Water Conservation"
  subtitle="Every drop matters. Every drop is accounted for."
  image="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Water Conservation' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each initiatives as i}
        <div class="card p-6 hover:-translate-y-1 transition-all border-t-4 border-blue-500">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{i.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
