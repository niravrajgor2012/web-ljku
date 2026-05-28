<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const missions = [
    'Deliver affordable, quality, holistic and skill-based higher education to all aspirants.',
    'Promote a culture of innovation, research and entrepreneurship across every discipline.',
    'Foster academic excellence through industry-aligned curricula and continuous faculty development.',
    'Encourage community engagement, social responsibility and ethical leadership among students.',
    'Build a sustainable, inclusive and globally connected learning environment.',
  ];

  const values = [
    { title: 'Integrity', desc: 'Acting with honesty, transparency and accountability in every academic and administrative decision.' },
    { title: 'Excellence', desc: 'Pursuing the highest standards of teaching, learning, research and service.' },
    { title: 'Inclusivity', desc: 'Welcoming and supporting students from every background, faith and region.' },
    { title: 'Innovation', desc: 'Nurturing creative thinking and translating ideas into real-world solutions.' },
    { title: 'Sustainability', desc: 'Embedding environmental and social responsibility into campus and curriculum.' },
    { title: 'Service', desc: 'Giving back to society through meaningful outreach and community programs.' },
  ];
</script>

<SEOHead meta={{
  title: 'Vision & Mission – LJ University',
  description: 'Vision, mission and core values of LJ University — committed to affordable, holistic, skill-based and innovation-driven higher education.',
}} />

<PageHero
  title="Vision & Mission"
  subtitle="The guiding principles that shape every decision, every program and every student journey at LJ University."
  image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Vision & Mission' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <div class="card p-8 bg-gradient-to-br from-primary-50 to-white border-l-4 border-primary-600">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Vision</p>
      <h2 class="section-title mb-5">A key player in education and social development</h2>
      <p class="text-gray-600 leading-relaxed">
        To be a key player in education and social development by promoting and nurturing creativity, scholarship,
        innovation and excellence through a chain of quality institutes — empowering learners to become responsible
        citizens and global leaders of tomorrow.
      </p>
    </div>
    <div class="card p-8 bg-gradient-to-br from-gold-50 to-white border-l-4 border-gold-500">
      <p class="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Mission</p>
      <h2 class="section-title mb-5">Education with purpose and impact</h2>
      <ul class="space-y-3">
        {#each missions as m}
          <li class="flex gap-3 text-gray-600 leading-relaxed">
            <span class="text-primary-600 font-bold">&rarr;</span>
            <span>{m}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="text-center mb-12">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Stand For</p>
      <h2 class="section-title">Our Core Values</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each values as v}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{v.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
