<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const initiatives = [
    { title: 'Tree Cover', desc: 'Over 10,000 trees and a dedicated arboretum hosting native and medicinal species.' },
    { title: 'Green Buildings', desc: 'Buildings designed for natural light, cross-ventilation and passive cooling, reducing energy demand.' },
    { title: 'Waste Segregation', desc: 'Source-level segregation of dry, wet and hazardous waste with composting on campus.' },
    { title: 'Plastic-Free Zones', desc: 'Single-use plastic banned in canteens, hostels and academic buildings.' },
    { title: 'Bicycle Friendly', desc: 'Cycle-sharing program, dedicated cycle tracks and parking across the campus.' },
    { title: 'Organic Gardening', desc: 'Student-run organic vegetable gardens supplying campus canteens.' },
  ];
</script>

<SEOHead meta={{
  title: 'Green Campus – LJ University',
  description: 'LJ University green campus initiatives — tree cover, green buildings, waste management, plastic-free zones and cycling.',
}} />

<PageHero
  title="Green Campus"
  subtitle="A campus where sustainability is lived, not just taught."
  image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Green Campus' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each initiatives as i}
        <div class="card p-6 hover:-translate-y-1 transition-all border-t-4 border-green-500">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{i.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
