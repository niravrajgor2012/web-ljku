<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const leadership = [
    { name: 'Prof. B.M. Peerzada', role: 'Founder Chairman', desc: 'Former Dean of Commerce, Gujarat University. Founded Lok Jagruti Kendra in 1980 with a vision of accessible quality education.' },
    { name: 'Shri R.J. Patel', role: 'President', desc: 'Spearheading the strategic and academic growth of LJ University across all schools and institutes.' },
    { name: 'Dr. K.H. Wandra', role: 'Vice Chancellor', desc: 'Leading academic governance, research excellence and institutional accreditation initiatives.' },
    { name: 'Dr. Hina Shah', role: 'Provost', desc: 'Driving curriculum reform, faculty development and inter-disciplinary collaboration.' },
    { name: 'Dr. P.D. Solanki', role: 'Registrar', desc: 'Overseeing university administration, examinations, statutes and student records.' },
    { name: 'Dr. K.J. Patel', role: 'Controller of Examinations', desc: 'Ensuring transparent, fair and timely assessment processes across all programs.' },
  ];
</script>

<SEOHead meta={{
  title: 'People – LJ University Leadership',
  description: 'Meet the founders, leadership and governing minds behind LJ University — driving vision, academic governance and student excellence.',
}} />

<PageHero
  title="The People Behind LJU"
  subtitle="Visionary founders, dedicated leaders and accomplished academicians steering LJ University's journey."
  image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'People' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="text-center mb-12">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Leadership</p>
      <h2 class="section-title">Governance & Administration</h2>
      <p class="section-subtitle mt-4 max-w-2xl mx-auto">
        Our leadership brings together decades of academic, administrative and industry expertise to nurture the next generation of leaders.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each leadership as p}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-navy-800 flex items-center justify-center text-white font-display font-bold text-xl mb-4">
            {p.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
          <h3 class="font-display font-bold text-navy-900 text-lg">{p.name}</h3>
          <p class="text-primary-600 font-semibold text-sm mb-3">{p.role}</p>
          <p class="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
