<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const sections = [
    { title: 'Teaching Hospital', href: '/academics/teaching-hospital', desc: 'Clinical training and community healthcare via integrated OPD services.' },
    { title: 'Value Added Courses', href: '/academics/value-added-courses', desc: 'Industry-relevant skill enhancement programs beyond the regular curriculum.' },
    { title: 'International Cell', href: '/academics/international-cell', desc: 'Global learning, study-abroad pathways and IELTS training.' },
    { title: 'Collaborations', href: '/academics/collaborations', desc: 'Academic partnerships with 40+ institutions across Europe, Asia and the Americas.' },
    { title: 'Student-Centric Methods', href: '/academics/student-centric-methods', desc: 'Ten evidence-backed pedagogies that put students at the centre.' },
    { title: 'Awards', href: '/academics/awards', desc: 'National and international recognitions earned by LJU faculty and students.' },
    { title: 'Syllabus', href: '/academics/syllabus', desc: 'Revised 2024-25 syllabus aligned with NEP 2020 and industry trends.' },
    { title: 'Feedback', href: '/academics/feedback', desc: 'Stakeholder feedback channels driving continuous academic improvement.' },
  ];
</script>

<SEOHead meta={{
  title: 'Academics – LJ University',
  description: 'Academic excellence at LJ University — teaching hospital, value-added courses, international cell, collaborations, student-centric methods, awards, syllabus and feedback.',
}} />

<PageHero
  title="Academics"
  subtitle="Where academic rigour meets real-world relevance."
  image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each sections as s}
        <a href={s.href} class="card p-6 hover:-translate-y-1 transition-all block">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{s.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
          <span class="text-primary-600 font-semibold text-sm">Explore &rarr;</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
