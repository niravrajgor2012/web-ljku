<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const objectives = [
    'Bridge the gap between academics and industry expectations.',
    'Improve employability and professional competencies.',
    'Foster interdisciplinary learning.',
    'Support innovation and entrepreneurship.',
    'Enable exploration of emerging domains.',
  ];

  const courses = [
    'Code-O-Geek Python Workshop', 'Automotive Systems (Ashok Leyland)', 'Telly Workshop', 'Microsoft Tools',
    'Sustainability in Sports', 'Sports Diplomacy', 'Design Guest Lectures', 'Planning Workshops',
    'Communication Training', 'Personality Development', 'Financial Analysis', 'Environmental Audit',
    'Yoga', 'Pharmaceutical Research', 'Data Analysis', 'Healthcare Certifications',
  ];

  const yearCounts = [
    { year: '2023-24', count: 29 },
    { year: '2022-23', count: 17 },
    { year: '2021-22', count: 8 },
    { year: '2020-21', count: 4 },
  ];
</script>

<SEOHead meta={{
  title: 'Value Added Courses – LJ University',
  description: 'Industry-relevant Value Added Courses (VACs) at LJU — skill enhancement programs across departments aligned with industry needs.',
}} />

<PageHero
  title="Value Added Courses"
  subtitle="Industry-relevant skill enhancement programs designed to bridge the gap between academic learning and professional expectations."
  image="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Value Added Courses' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Overview</p>
    <h2 class="section-title mb-5">Empowering Students Beyond the Curriculum</h2>
    <p class="text-gray-600 leading-relaxed max-w-3xl mb-10">
      LJU offers Value Added Courses (VACs) across departments to provide industry-relevant skills and knowledge beyond the regular
      academic curriculum. These short-term programs aim at skill enhancement and employability.
    </p>

    <h3 class="font-display font-bold text-navy-900 text-xl mb-5">Main Objectives</h3>
    <div class="space-y-3 mb-12">
      {#each objectives as o, i}
        <div class="flex items-start gap-4 p-4 bg-primary-50 rounded-2xl border border-primary-100">
          <div class="w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
          <p class="text-gray-700 leading-relaxed">{o}</p>
        </div>
      {/each}
    </div>

    <div class="card p-6 bg-gradient-to-br from-gold-50 to-white border-l-4 border-gold-500 mb-12">
      <h3 class="font-display font-bold text-navy-900 text-lg mb-2">Delivery Structure</h3>
      <p class="text-gray-700 leading-relaxed">
        Courses are conducted by faculty members, industry experts or certified trainers and scheduled during semester breaks or
        weekends with departmental certification upon completion.
      </p>
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">2023-24</p>
    <h2 class="section-title mb-8">Courses Offered in 2023-24</h2>
    <div class="flex flex-wrap gap-2 mb-12">
      {#each courses as c}
        <span class="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-navy-800 shadow-sm">
          {c}
        </span>
      {/each}
    </div>

    <h3 class="font-display font-bold text-navy-900 text-xl mb-5">5-Year VAC Count</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each yearCounts as y}
        <div class="card p-6 text-center">
          <div class="font-display font-bold text-primary-600 text-3xl mb-1">{y.count}</div>
          <div class="text-sm font-semibold text-navy-900">Academic Year {y.year}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
