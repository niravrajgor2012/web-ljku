<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const pillars = [
    { num: '01', title: 'Academic Excellence', desc: 'Curriculum modernisation, outcome-based learning and continuous faculty development across all schools.' },
    { num: '02', title: 'Research & Innovation', desc: 'Doubling of funded research projects, expansion of incubation and patent filings by 2030.' },
    { num: '03', title: 'Industry Integration', desc: 'Deeper industry partnerships, co-designed curricula and 90% placement readiness for every graduating cohort.' },
    { num: '04', title: 'Digital Transformation', desc: 'Smart classrooms, AI-driven learning analytics and a fully integrated student information system.' },
    { num: '05', title: 'Global Engagement', desc: 'Student and faculty exchange programs with universities across Asia, Europe and North America.' },
    { num: '06', title: 'Sustainability', desc: 'Net-zero campus operations by 2035 through renewable energy, water conservation and green infrastructure.' },
  ];
</script>

<SEOHead meta={{
  title: 'Strategic Plan – LJ University',
  description: 'LJ University strategic plan — six pillars guiding our 2025-2030 roadmap for academic excellence, research, industry, digital, global and sustainability.',
}} />

<PageHero
  title="Strategic Plan 2025-2030"
  subtitle="A clear roadmap for the next chapter of LJ University."
  image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Strategic Plan' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="text-center mb-12 max-w-3xl mx-auto">
      <h2 class="section-title mb-4">Six Strategic Pillars</h2>
      <p class="text-gray-600 leading-relaxed">
        Our 2025-2030 strategic plan is built on six interconnected pillars, each with measurable goals and review checkpoints
        to ensure focused, accountable execution.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each pillars as p}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <div class="text-4xl font-display font-bold text-primary-600/30 mb-2">{p.num}</div>
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{p.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
