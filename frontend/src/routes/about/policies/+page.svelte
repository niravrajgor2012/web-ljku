<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const policies = [
    { title: 'Academic Policy', desc: 'Standards for curriculum design, credit transfer, examinations, evaluation and academic progression.' },
    { title: 'Research Policy', desc: 'Framework for research ethics, intellectual property, publications and PhD supervision.' },
    { title: 'Anti-Plagiarism Policy', desc: 'Use of plagiarism detection tools and penalties as per UGC regulations 2018.' },
    { title: 'Equal Opportunity Policy', desc: 'Inclusion of SC/ST, OBC, women, persons with disabilities and economically weaker sections.' },
    { title: 'POSH Policy', desc: 'Prevention of sexual harassment at the workplace as per the POSH Act, 2013.' },
    { title: 'Data Privacy Policy', desc: 'Collection, storage and use of personal data of students, staff and visitors.' },
    { title: 'Environmental Policy', desc: 'Commitment to sustainability, green campus, water and energy conservation.' },
    { title: 'Whistle-Blower Policy', desc: 'Protected channel to report misconduct, malpractice or unethical behaviour.' },
    { title: 'Scholarship & Fee Policy', desc: 'Eligibility, disbursement and refund norms for fees and scholarships.' },
  ];
</script>

<SEOHead meta={{
  title: 'Policies – LJ University',
  description: 'Key institutional policies of LJ University — academic, research, POSH, anti-plagiarism, data privacy and more.',
}} />

<PageHero
  title="Institutional Policies"
  subtitle="Transparent, fair and student-centric policies that guide every aspect of university life."
  image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Policies' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each policies as p}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{p.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
