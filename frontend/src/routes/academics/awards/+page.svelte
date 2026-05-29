<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const categories = [
    { title: 'Academic Excellence', desc: 'Awards recognising outstanding faculty performance, research publications and contributions to quality education across all departments.' },
    { title: 'Research Awards', desc: 'Recognition for breakthrough research, innovation grants and patents filed by LJU faculty and student researchers.' },
    { title: 'Institutional Awards', desc: 'University-level recognitions from bodies such as NAAC, AICTE and government organisations for institutional excellence.' },
    { title: 'Student Achievements', desc: 'National and state-level competition wins, sports achievements, cultural recognitions and entrepreneurship awards by students.' },
    { title: 'International Recognition', desc: "Awards and rankings from global organisations acknowledging LJU's commitment to international academic standards." },
    { title: 'Community Service Awards', desc: "Recognitions for LJU's sustained contribution to social development, community healthcare and skill-building initiatives." },
  ];
</script>

<SEOHead meta={{
  title: 'Awards & Recognitions – LJ University',
  description: "Celebrating LJ University's academic, research, innovation and community-service awards and recognitions.",
}} />

<PageHero
  title="Awards & Recognitions"
  subtitle="Celebrating excellence in academics, research, innovation and community service across LJU's family of institutions."
  image="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Awards' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Excellence Recognised</p>
    <h2 class="section-title mb-5">Our Achievements</h2>
    <p class="text-gray-600 leading-relaxed max-w-3xl mb-10">
      Lok Jagruti Kendra University and its constituent institutes have earned recognition from national and international bodies for
      academic quality, research contributions, innovation and student achievements.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each categories as c}
        <div class="card p-6 hover:-translate-y-1 transition-all border-t-4 border-gold-500">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{c.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
