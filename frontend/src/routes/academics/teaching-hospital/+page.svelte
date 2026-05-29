<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const stats = [
    { value: '2,185', label: 'LJ Campus OPD Patients', sub: '2024 (Full Year)' },
    { value: '1,277', label: 'LJ Campus OPD Patients', sub: 'Jan–Jun 2025' },
    { value: '413', label: 'Vejalpur OPD Patients', sub: '2024 (Full Year)' },
    { value: '550', label: 'Vejalpur OPD Patients', sub: 'Jan–May 2025' },
  ];

  const clinics = [
    { title: 'LJ Campus OPD Clinic', desc: 'Located within the LJ Campus on S.G. Road, Ahmedabad. Serves students, faculty and surrounding community residents with outpatient physiotherapy services.' },
    { title: 'Vejalpur OPD Clinic', desc: 'Community outreach clinic at Vejalpur, Ahmedabad. Extends healthcare access to the local population and gives students broader clinical exposure across diverse patient profiles.' },
  ];

  const rows = [
    { loc: 'LJ Campus OPD', period: '2024 (Full Year)', patients: '2,185' },
    { loc: 'LJ Campus OPD', period: 'January – June 2025', patients: '1,277' },
    { loc: 'Vejalpur OPD', period: '2024 (Full Year)', patients: '413' },
    { loc: 'Vejalpur OPD', period: 'January – May 2025', patients: '550' },
  ];
</script>

<SEOHead meta={{
  title: 'Teaching Hospital – LJ University',
  description: 'LJ Institute of Physiotherapy teaching hospital — community-based clinical training across LJ Campus and Vejalpur OPD clinics.',
}} />

<PageHero
  title="Teaching Hospital"
  subtitle="Clinical training and community healthcare through integrated OPD services at LJU's physiotherapy and healthcare institutes."
  image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Teaching Hospital' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">LJ Institute of Physiotherapy</p>
    <h2 class="section-title mb-5">Community-Based Clinical Training</h2>
    <p class="text-gray-600 leading-relaxed max-w-3xl mb-10">
      LJU's teaching hospital initiative bridges academic learning with real-world clinical practice. The LJ Institute of Physiotherapy
      operates Outpatient Department (OPD) clinics at two locations — providing hands-on patient care experience to students while
      serving the community.
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {#each stats as s}
        <div class="card p-6 text-center">
          <div class="font-display font-bold text-primary-600 text-3xl mb-1">{s.value}</div>
          <div class="text-sm font-semibold text-navy-900">{s.label}</div>
          <div class="text-xs text-gray-500 mt-1">{s.sub}</div>
        </div>
      {/each}
    </div>

    <h3 class="font-display font-bold text-navy-900 text-xl mb-5">OPD Clinic Locations</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {#each clinics as c}
        <div class="card p-6">
          <h4 class="font-display font-bold text-navy-900 text-lg mb-2">{c.title}</h4>
          <p class="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
        </div>
      {/each}
    </div>

    <h3 class="font-display font-bold text-navy-900 text-xl mb-5">Patient Statistics Overview</h3>
    <div class="overflow-x-auto rounded-2xl border border-gray-200">
      <table class="w-full text-sm">
        <thead class="bg-primary-50">
          <tr>
            <th class="text-left px-5 py-3 font-semibold text-primary-700 uppercase tracking-wider text-xs">Clinic Location</th>
            <th class="text-left px-5 py-3 font-semibold text-primary-700 uppercase tracking-wider text-xs">Year / Period</th>
            <th class="text-left px-5 py-3 font-semibold text-primary-700 uppercase tracking-wider text-xs">Patients Served</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 bg-white">
          {#each rows as r}
            <tr>
              <td class="px-5 py-3 text-navy-800">{r.loc}</td>
              <td class="px-5 py-3 text-gray-600">{r.period}</td>
              <td class="px-5 py-3 font-semibold text-navy-900">{r.patients}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<CTABanner />
