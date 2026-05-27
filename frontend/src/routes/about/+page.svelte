<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';
</script>

<SEOHead meta={{
  title: 'About LJ University',
  description: 'Learn about LJ University – NAAC A+ accredited, established 2011, with 10,000+ students, 30+ programs, and a vision for excellence.',
}} />

<PageHero
  title="About LJ University"
  subtitle="A legacy of transformative education, innovation, and student excellence since 2011."
  image="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
  breadcrumbs={[{ label: 'About' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
      <div>
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
        <h2 class="section-title mb-5">Building Excellence Since 2011</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          LJ University (formerly known as LJ Institute of Engineering and Technology) was established in 2011 under the LJ Group of
          Institutions, one of Gujarat's most prestigious educational conglomerates with a legacy spanning over 35 years.
        </p> 
        <p class="text-gray-600 leading-relaxed mb-4">
          Today, LJ University is a fully fledged university recognized by the University Grants Commission (UGC) under Section 2(f)
          and Section 12(B), with NAAC 'A+' accreditation — a testament to our unwavering commitment to quality education.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
          Spread across a sprawling modern campus in Ahmedabad, we nurture over 10,000 students across 10 schools in disciplines
          spanning engineering, management, pharmacy, design, architecture, computer applications, and more.
        </p>
        <div class="grid grid-cols-2 gap-4">
          {#each [
            { label: 'Founded', value: '2011' },
            { label: 'Campus', value: '100+ Acres' },
            { label: 'NAAC Grade', value: 'A+' },
            { label: 'Programs', value: '30+' },
          ] as stat}
            <div class="bg-gray-50 rounded-2xl p-4">
              <div class="font-display text-2xl font-bold text-primary-600">{stat.value}</div>
              <div class="text-sm text-gray-600">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>
      <div class="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
          alt="LJ University Building"
          class="rounded-3xl w-full object-cover h-72 shadow-xl"
          loading="lazy"
        />
        <div class="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=70" alt="Library" class="rounded-2xl w-full h-40 object-cover" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=70" alt="Sports" class="rounded-2xl w-full h-40 object-cover" loading="lazy" />
        </div>
      </div>
    </div>

    <!-- Leadership -->
    <div class="mb-20">
      <h2 class="section-title text-center mb-12">Leadership & Governance</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each [
          { name: 'Dr. Rajeev Kumar', role: 'Vice Chancellor', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', quote: 'We are committed to building a university that prepares students not just for careers, but for life.' },
          { name: 'Dr. Anjali Mehta', role: 'Pro Vice Chancellor', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80', quote: 'Innovation and inclusivity are at the heart of everything we do at LJ University.' },
          { name: 'Mr. Lalitkumar Jhawar', role: 'Chancellor', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', quote: 'LJ University is dedicated to shaping a generation of responsible, skilled, and compassionate professionals.' },
        ] as leader}
          <div class="card p-8 text-center">
            <img src={leader.img} alt={leader.name} class="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-4 border-primary-100" loading="lazy" />
            <h3 class="font-display font-bold text-navy-900 text-lg">{leader.name}</h3>
            <p class="text-primary-600 text-sm font-semibold mb-4">{leader.role}</p>
            <p class="text-gray-500 text-sm italic">"{leader.quote}"</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Accreditations -->
    <div>
      <h2 class="section-title text-center mb-8">Recognitions &amp; Accreditations</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {#each ['NAAC A+', 'UGC 2(f)', 'AICTE', 'NBA', 'PCI', 'COA', 'BCI', 'ACPAI'] as acc}
          <div class="flex items-center justify-center h-20 rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all font-display font-bold text-navy-700 text-xl">
            {acc}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<CTABanner />
