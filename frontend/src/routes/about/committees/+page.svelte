<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const committees = [
    { name: 'Board of Management', desc: 'Apex executive body responsible for governance, finance and academic policy of the University.' },
    { name: 'Academic Council', desc: 'Oversees curriculum, examinations, research and academic standards across all schools.' },
    { name: 'Finance Committee', desc: 'Reviews budgets, expenditure and long-term financial planning of the University.' },
    { name: 'Internal Quality Assurance Cell (IQAC)', desc: 'Drives quality benchmarking, accreditation and continuous institutional improvement.' },
    { name: 'Anti-Ragging Committee', desc: 'Prevention, monitoring and redressal of ragging incidents as per UGC guidelines.' },
    { name: 'Internal Complaints Committee (ICC)', desc: 'Addresses complaints of sexual harassment as per the POSH Act, 2013.' },
    { name: 'Grievance Redressal Committee', desc: 'Resolves student and staff grievances through a fair, time-bound process.' },
    { name: 'SC/ST & OBC Cell', desc: 'Supports students from reserved categories and ensures equal opportunity.' },
    { name: 'Equal Opportunity Cell', desc: 'Promotes inclusivity for students with disabilities and from marginalised groups.' },
    { name: 'Research Advisory Committee', desc: 'Guides PhD scholars, reviews research proposals and ethics.' },
    { name: 'Library Committee', desc: 'Oversees library development, resources, journals and digital subscriptions.' },
    { name: 'Sports & Cultural Committee', desc: 'Plans and organises sporting events, cultural festivals and inter-college competitions.' },
  ];
</script>

<SEOHead meta={{
  title: 'Committees – LJ University',
  description: 'Statutory and advisory committees at LJ University — governance, quality, grievance, anti-ragging, ICC and more.',
}} />

<PageHero
  title="University Committees"
  subtitle="Statutory and advisory bodies that steer governance, quality, welfare and student support at LJ University."
  image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Committees' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each committees as c, i}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <div class="text-xs font-bold text-primary-600 mb-2">0{i + 1 < 10 ? i + 1 : i + 1}</div>
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{c.name}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
