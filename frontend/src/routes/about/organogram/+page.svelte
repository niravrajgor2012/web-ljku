<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const tier1 = ['Chancellor'];
  const tier2 = ['Board of Management', 'Academic Council', 'Finance Committee'];
  const tier3 = ['Vice Chancellor', 'Provost', 'Registrar'];
  const tier4 = ['Deans of Schools', 'Controller of Examinations', 'Finance Officer', 'Director - IQAC'];
  const tier5 = ['HoDs', 'Faculty Members', 'Administrative Staff', 'Support Staff'];
</script>

<SEOHead meta={{
  title: 'Organogram – LJ University',
  description: 'Organisational structure and reporting hierarchy of LJ University.',
}} />

<PageHero
  title="Organogram"
  subtitle="The organisational structure that powers academic and administrative governance at LJ University."
  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Organogram' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg max-w-5xl">
    <div class="space-y-6">
      {#each [
        { label: 'Chancellor (Apex Authority)', items: tier1, color: 'bg-navy-900 text-white' },
        { label: 'Governing Bodies', items: tier2, color: 'bg-primary-700 text-white' },
        { label: 'Executive Officers', items: tier3, color: 'bg-primary-600 text-white' },
        { label: 'Administrative Heads', items: tier4, color: 'bg-primary-500 text-white' },
        { label: 'Operations', items: tier5, color: 'bg-primary-100 text-navy-900' },
      ] as tier}
        <div>
          <p class="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2 text-center">{tier.label}</p>
          <div class="flex flex-wrap gap-3 justify-center">
            {#each tier.items as item}
              <div class={`px-6 py-4 rounded-2xl font-semibold shadow-md ${tier.color}`}>
                {item}
              </div>
            {/each}
          </div>
          <div class="flex justify-center my-2">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
