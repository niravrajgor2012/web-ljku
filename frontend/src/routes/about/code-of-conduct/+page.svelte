<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const principles = [
    { title: 'Academic Integrity', desc: 'Honesty in coursework, examinations and research. Plagiarism, cheating and fabrication are not tolerated.' },
    { title: 'Respect & Civility', desc: 'Treat every member of the university community with dignity, regardless of background, identity or belief.' },
    { title: 'Non-Discrimination', desc: 'No discrimination on the basis of caste, religion, gender, disability or any other protected attribute.' },
    { title: 'Anti-Ragging', desc: 'Zero tolerance for ragging or any form of harassment. UGC anti-ragging guidelines apply strictly.' },
    { title: 'Responsible Use of Resources', desc: 'Use campus facilities, ICT resources and library responsibly. Wilful damage attracts disciplinary action.' },
    { title: 'Safety & Compliance', desc: 'Follow all safety protocols in labs, workshops and the campus. Comply with the laws of the land at all times.' },
  ];

  const expectations = [
    'Attend classes regularly and engage actively in learning.',
    'Submit original, properly cited academic work.',
    'Refrain from any form of substance abuse on campus.',
    'Maintain modest, appropriate attire in academic spaces.',
    'Report violations through the designated grievance channels.',
    'Represent LJ University with pride at all external events.',
  ];
</script>

<SEOHead meta={{
  title: 'Code of Conduct – LJ University',
  description: 'The LJ University code of conduct outlines the values, behaviours and responsibilities expected of every student, faculty and staff member.',
}} />

<PageHero
  title="Code of Conduct"
  subtitle="Building a respectful, honest and inclusive campus — together."
  image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Code of Conduct' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h2 class="section-title mb-4">Our Shared Commitments</h2>
      <p class="text-gray-600 leading-relaxed">
        LJ University is committed to fostering a learning environment built on integrity, mutual respect and accountability.
        Every member of the community — students, faculty and staff — is expected to uphold the principles below.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each principles as p}
        <div class="card p-6 border-t-4 border-primary-600">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{p.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="container-lg max-w-4xl">
    <h2 class="section-title text-center mb-10">Student Expectations</h2>
    <div class="space-y-3">
      {#each expectations as e, i}
        <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div class="w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
            {i + 1}
          </div>
          <p class="text-gray-700 leading-relaxed">{e}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
