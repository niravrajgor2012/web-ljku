<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const stats = [
    { value: '1.2 MW', label: 'Rooftop Solar Capacity' },
    { value: '40%', label: 'Energy from Renewables' },
    { value: '5,000+', label: 'LED Fixtures Installed' },
    { value: 'BMS', label: 'Building Management System' },
  ];

  const initiatives = [
    'Rooftop solar PV plants across academic and hostel blocks generating clean energy.',
    'Solar water heaters in hostels reducing electric geyser dependence.',
    'LED retrofitting of all classrooms, corridors and street lighting.',
    'Energy-efficient HVAC with smart thermostats and occupancy sensors.',
    'Real-time energy monitoring through a centralised BMS dashboard.',
    'Awareness campaigns and student-led energy audits each semester.',
  ];
</script>

<SEOHead meta={{
  title: 'Alternate Energy – LJ University',
  description: 'LJ University renewable energy initiatives — rooftop solar, LED retrofits, energy-efficient HVAC and real-time monitoring.',
}} />

<PageHero
  title="Alternate Energy"
  subtitle="Powering the future of education with renewable energy."
  image="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Alternate Energy' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {#each stats as s}
        <div class="card p-6 text-center">
          <div class="font-display font-bold text-primary-600 text-3xl mb-1">{s.value}</div>
          <div class="text-sm font-semibold text-navy-700">{s.label}</div>
        </div>
      {/each}
    </div>

    <div class="card p-8 max-w-4xl mx-auto">
      <h2 class="section-title mb-5">Key Initiatives</h2>
      <ul class="space-y-3">
        {#each initiatives as i}
          <li class="flex gap-3 text-gray-700 leading-relaxed">
            <span class="text-primary-600 font-bold">&#9889;</span>
            <span>{i}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<CTABanner />
