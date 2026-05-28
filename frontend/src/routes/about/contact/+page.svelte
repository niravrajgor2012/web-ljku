<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const offices = [
    { dept: 'Registrar Office', email: 'registrar@ljku.edu.in', phone: '+91 79 6710 9999' },
    { dept: 'Admissions', email: 'admissions@ljku.edu.in', phone: '+91 79 6710 9000' },
    { dept: 'Examination Cell', email: 'exam@ljku.edu.in', phone: '+91 79 6710 9100' },
    { dept: 'Placement Cell', email: 'placement@ljku.edu.in', phone: '+91 79 6710 9200' },
    { dept: 'Accounts', email: 'accounts@ljku.edu.in', phone: '+91 79 6710 9300' },
    { dept: 'General Enquiry', email: 'info@ljku.edu.in', phone: '+91 79 6710 9999' },
  ];
</script>

<SEOHead meta={{
  title: 'Administrative Contacts – LJ University',
  description: 'Direct contacts for LJ University administrative offices — registrar, admissions, examinations, placements and more.',
}} />

<PageHero
  title="Administrative Contacts"
  subtitle="Reach the right desk, faster."
  image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Contacts' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {#each offices as o}
        <div class="card p-6">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-3">{o.dept}</h3>
          <p class="text-sm text-gray-600 mb-1">
            <span class="font-semibold text-navy-700">Email:</span>
            <a href={`mailto:${o.email}`} class="text-primary-600 hover:underline">{o.email}</a>
          </p>
          <p class="text-sm text-gray-600">
            <span class="font-semibold text-navy-700">Phone:</span> {o.phone}
          </p>
        </div>
      {/each}
    </div>

    <div class="card p-8 bg-gradient-to-br from-navy-900 to-primary-900 text-white">
      <h3 class="font-display text-2xl font-bold mb-3">Campus Address</h3>
      <p class="text-gray-200 leading-relaxed">
        LJ University, Between Sarkhej-Sanand Circle, Off S.G. Road, Ahmedabad &mdash; 382 210, Gujarat, India
      </p>
      <p class="text-gray-200 mt-3">
        <span class="font-semibold">Working Hours:</span> Monday to Saturday, 9:00 AM &ndash; 5:30 PM
      </p>
    </div>
  </div>
</section>

<CTABanner />
