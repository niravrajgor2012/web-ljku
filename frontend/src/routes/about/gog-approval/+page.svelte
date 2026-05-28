<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';
</script>

<SEOHead meta={{
  title: 'Government of Gujarat Approval – LJ University',
  description: 'LJ University is established and approved by the Government of Gujarat under the Gujarat Private Universities (Amendment) Act.',
}} />

<PageHero
  title="Government of Gujarat Approval"
  subtitle="A self-financed private university approved by the Government of Gujarat."
  image="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'GoG Approval' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg max-w-4xl">
    <div class="card p-10 bg-gradient-to-br from-primary-50 to-white border-l-4 border-primary-600">
      <h2 class="section-title mb-5">Statutory Recognition</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        LJ University (LJU) is a self-financed private university established and incorporated under the
        <strong> Gujarat Private Universities (Amendment) Act, 2009</strong>, by the Government of Gujarat.
      </p>
      <p class="text-gray-700 leading-relaxed mb-4">
        The University is empowered to award degrees, diplomas and certificates in all disciplines, conduct examinations,
        and confer honorary awards in accordance with the Act and the University Statutes.
      </p>
      <p class="text-gray-700 leading-relaxed">
        The Government of Gujarat notification authorising LJ University is available on the official portal of the
        Department of Education, Government of Gujarat.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <div class="card p-6 text-center">
        <div class="text-3xl font-display font-bold text-primary-600 mb-2">2022</div>
        <div class="text-sm font-semibold text-navy-900">Year of Establishment</div>
      </div>
      <div class="card p-6 text-center">
        <div class="text-3xl font-display font-bold text-primary-600 mb-2">Self-Financed</div>
        <div class="text-sm font-semibold text-navy-900">Private University</div>
      </div>
      <div class="card p-6 text-center">
        <div class="text-3xl font-display font-bold text-primary-600 mb-2">Act, 2009</div>
        <div class="text-sm font-semibold text-navy-900">Gujarat Private Universities (Amendment) Act</div>
      </div>
    </div>
  </div>
</section>

<CTABanner />
