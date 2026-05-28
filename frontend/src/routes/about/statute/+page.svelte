<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const sections = [
    { title: 'Establishment', desc: 'LJ University was established under the Gujarat Private Universities (Amendment) Act, 2009, by the Government of Gujarat.' },
    { title: 'Powers of the University', desc: 'Authority to grant degrees, diplomas and certificates; constitute faculties, schools and departments; conduct examinations; and confer honorary awards.' },
    { title: 'Officers of the University', desc: 'Chancellor, Vice Chancellor, Pro Vice Chancellor, Registrar, Controller of Examinations, Finance Officer and other officers as constituted.' },
    { title: 'Authorities of the University', desc: 'Board of Management, Academic Council, Board of Studies, Finance Committee, Planning Board and other such authorities.' },
    { title: 'Conduct of Business', desc: 'Procedures for meetings, quorum, voting, recording of minutes and conduct of business of all authorities.' },
    { title: 'Service Conditions', desc: 'Appointment, qualifications, remuneration, duties and conditions of service of teachers and other employees.' },
    { title: 'Examinations & Awards', desc: 'Conduct of examinations, evaluation, declaration of results and award of degrees, diplomas and certificates.' },
    { title: 'Amendments', desc: 'Statutes may be amended by the Board of Management with the approval of the Sponsoring Body and the State Government.' },
  ];
</script>

<SEOHead meta={{
  title: 'University Statute – LJ University',
  description: 'Statutes of LJ University — establishment, powers, officers, authorities and conduct of business as approved under the Gujarat Private Universities Act.',
}} />

<PageHero
  title="Statute of the University"
  subtitle="The foundational legal framework that governs LJ University."
  image="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Statute' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg max-w-5xl">
    <div class="space-y-6">
      {#each sections as s, i}
        <div class="card p-6 border-l-4 border-primary-600">
          <div class="text-xs font-bold text-primary-600 mb-1">Chapter {i + 1}</div>
          <h3 class="font-display font-bold text-navy-900 text-xl mb-2">{s.title}</h3>
          <p class="text-gray-600 leading-relaxed">{s.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
