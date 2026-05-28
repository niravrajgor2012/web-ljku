<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';
</script>

<SEOHead meta={{
  title: 'UGC Recognition – LJ University',
  description: 'LJ University is recognised by the University Grants Commission (UGC), Government of India, under Section 2(f) of the UGC Act, 1956.',
}} />

<PageHero
  title="UGC Recognition"
  subtitle="Recognised by the University Grants Commission, Government of India."
  image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'UGC' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg max-w-4xl">
    <div class="card p-10 border-l-4 border-primary-600">
      <h2 class="section-title mb-5">UGC Section 2(f) Recognition</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        LJ University is recognised by the <strong>University Grants Commission (UGC)</strong>, Government of India,
        under Section 2(f) of the UGC Act, 1956. This recognition confirms the University&rsquo;s status as a bona fide
        institution of higher education whose degrees are valid for academic, employment and research purposes across India.
      </p>
      <p class="text-gray-700 leading-relaxed">
        The University adheres to all UGC regulations on curriculum, faculty qualifications, research, plagiarism,
        examinations and student welfare.
      </p>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card p-6">
        <h3 class="font-display font-bold text-navy-900 text-lg mb-2">Empowered to Award Degrees</h3>
        <p class="text-gray-600 text-sm leading-relaxed">All degrees, diplomas and certificates issued by LJ University are recognised across India and abroad.</p>
      </div>
      <div class="card p-6">
        <h3 class="font-display font-bold text-navy-900 text-lg mb-2">Regulatory Compliance</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Compliance with UGC, AICTE, PCI, COA, BCI and other applicable statutory regulators for relevant programs.</p>
      </div>
    </div>
  </div>
</section>

<CTABanner />
