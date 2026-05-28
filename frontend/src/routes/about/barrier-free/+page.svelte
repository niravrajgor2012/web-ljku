<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const features = [
    { title: 'Ramps & Lifts', desc: 'Ramps with appropriate slope and lifts in every multi-storey academic and hostel building.' },
    { title: 'Accessible Washrooms', desc: 'Dedicated, accessible washrooms with grab bars on every floor.' },
    { title: 'Tactile Paths & Signage', desc: 'Tactile guiding paths and Braille signage for visually impaired students.' },
    { title: 'Reserved Parking', desc: 'Reserved, wider parking bays close to building entrances for differently-abled visitors.' },
    { title: 'Assistive Technologies', desc: 'Screen readers, large-print materials and accessible LMS content.' },
    { title: 'Equal Opportunity Cell', desc: 'Dedicated cell for personalised academic, social and emotional support.' },
  ];
</script>

<SEOHead meta={{
  title: 'Barrier-Free Campus – LJ University',
  description: 'LJ University barrier-free campus — ramps, lifts, accessible washrooms, tactile signage, assistive technologies and equal opportunity support.',
}} />

<PageHero
  title="Barrier-Free Campus"
  subtitle="An inclusive campus where every student can move, learn and thrive — independently."
  image="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Barrier-Free' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="text-center mb-12 max-w-3xl mx-auto">
      <h2 class="section-title mb-4">Accessibility at the Core</h2>
      <p class="text-gray-600 leading-relaxed">
        LJ University is designed and operated to comply with the Rights of Persons with Disabilities Act, 2016.
        Every academic block, hostel and public space is built to be accessible to all.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each features as f}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{f.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
