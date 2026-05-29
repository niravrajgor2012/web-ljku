<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const europe = [
    { name: 'Riga University', country: 'Latvia' },
    { name: 'University of Architecture, Civil Engineering and Geodesy', country: 'Sofia, Bulgaria' },
    { name: 'University of National and World Economy', country: 'Bulgaria' },
    { name: 'Varna University of Management', country: 'Bulgaria' },
    { name: 'Oles Honchar Dnipro National University', country: 'Ukraine' },
    { name: 'Mykolas Romeris University', country: 'Lithuania' },
    { name: 'Bulgarian Academy of Sciences', country: 'Bulgaria' },
  ];

  const asia = [
    { name: 'Daffodil University', country: 'Bangladesh' },
    { name: 'Ateneo', country: 'Philippines' },
    { name: 'Partner Universities', country: 'Indonesia' },
  ];

  const americas = [
    { name: 'Governors State University', country: 'USA' },
  ];

  const stats = [
    { value: '40+', label: 'Partner Institutions' },
    { value: '3', label: 'Continents' },
    { value: '10+', label: 'Countries' },
  ];
</script>

<SEOHead meta={{
  title: 'Collaboration & Affiliation – LJ University',
  description: 'LJ University international partner institutions across Europe, Asia-Pacific and the Americas — 40+ academic collaborations.',
}} />

<PageHero
  title="Collaboration & Affiliation"
  subtitle="International partners for academic collaboration — building a global academic network across Europe, Asia-Pacific and the Americas."
  image="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Collaborations' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-3 gap-6 mb-12 max-w-2xl">
      {#each stats as s}
        <div class="card p-6 text-center">
          <div class="font-display font-bold text-primary-600 text-3xl mb-1">{s.value}</div>
          <div class="text-sm font-semibold text-navy-900">{s.label}</div>
        </div>
      {/each}
    </div>

    {#each [
      { title: 'Europe', list: europe },
      { title: 'Asia-Pacific', list: asia },
      { title: 'Americas', list: americas },
    ] as region}
      <div class="mb-12">
        <h3 class="font-display font-bold text-navy-900 text-xl mb-5 border-b-2 border-primary-200 pb-2">{region.title}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each region.list as p}
            <div class="card p-5">
              <h4 class="font-display font-bold text-navy-900 text-sm mb-1">{p.name}</h4>
              <p class="text-gray-500 text-xs">{p.country}</p>
            </div>
          {/each}
        </div>
      </div>
    {/each}

    <p class="text-gray-600 text-sm leading-relaxed">
      LJU maintains academic collaborations with 40+ institutions across multiple countries. Partner logos and full institutional
      details are available on the official LJU collaborations portal.
    </p>
  </div>
</section>

<CTABanner />
