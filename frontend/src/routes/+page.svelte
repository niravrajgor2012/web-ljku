<script lang="ts">
  import type { PageData } from './$types';
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import StatisticsSection from '$lib/components/home/StatisticsSection.svelte';
  import DepartmentCards from '$lib/components/home/DepartmentCards.svelte';
  import ProgramCards from '$lib/components/home/ProgramCards.svelte';
  import EventsSection from '$lib/components/home/EventsSection.svelte';
  import PlacementsSection from '$lib/components/home/PlacementsSection.svelte';
  import GalleryPreview from '$lib/components/home/GalleryPreview.svelte';
  import TestimonialsSection from '$lib/components/home/TestimonialsSection.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  export let data: PageData;
</script>

<SEOHead
  meta={{
    title: "LJ University – Shaping Tomorrow's Leaders | Ahmedabad",
    description: "LJ University, Ahmedabad – NAAC A+ accredited institution offering engineering, management, pharmacy, design, and 30+ programs. Apply now for 2025–26 admissions.",
    keywords: "LJ University, Ahmedabad, Engineering College, MBA, B.Tech, Pharmacy, Design, Admissions 2025",
  }}
/>

<HeroSection />

<!-- About strip -->
<section class="py-16 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="animate-on-scroll">
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">About LJ University</p>
        <h2 class="section-title mb-4">
          A Legacy of Excellence in Higher Education
        </h2>
        <p class="section-subtitle mb-4">
          Established in 2011, LJ University has grown to become one of Gujarat's most respected and innovative universities.
          With NAAC A+ accreditation and UGC recognition, we offer a transformative learning environment.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
          Spread across a modern campus in Ahmedabad, our 10 schools and institutes offer programs in Engineering, Management,
          Pharmacy, Design, Architecture, Commerce, and more — all designed with industry relevance at their core.
        </p>
        <div class="flex flex-wrap gap-3 mb-8">
          {#each ['NAAC A+ Accredited', 'UGC Recognized', 'NBA Accredited', 'AICTE Approved'] as badge}
            <span class="badge bg-primary-100 text-primary-700 px-3 py-1 text-sm font-semibold">{badge}</span>
          {/each}
        </div>
        <a href="/about" class="btn-primary">Learn More About Us</a>
      </div>
      <div class="relative animate-on-scroll">
        <div class="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
            alt="LJ University Campus"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <!-- Floating card -->
        <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 w-44">
          <div class="text-3xl font-display font-bold text-primary-600">14+</div>
          <div class="text-sm text-gray-600">Years of Excellence</div>
        </div>
        <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card p-5 w-44">
          <div class="text-3xl font-display font-bold text-emerald-600">A+</div>
          <div class="text-sm text-gray-600">NAAC Grade</div>
        </div>
      </div>
    </div>
  </div>
</section>

<StatisticsSection />

<DepartmentCards departments={data.departments} />

<ProgramCards programs={data.programs} />

<!-- Vision & Mission -->
<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="text-center mb-12">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Purpose</p>
      <h2 class="section-title">Vision &amp; Mission</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="card p-8 border-l-4 border-primary-500 animate-on-scroll">
        <div class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mb-5">🔭</div>
        <h3 class="font-display text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
        <p class="text-gray-600 leading-relaxed">
          To be a globally recognized center of excellence in higher education, producing innovative leaders
          and thinkers who drive sustainable progress in a rapidly changing world.
        </p>
      </div>
      <div class="card p-8 border-l-4 border-gold-500 animate-on-scroll">
        <div class="w-12 h-12 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center text-2xl mb-5">🎯</div>
        <h3 class="font-display text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
        <p class="text-gray-600 leading-relaxed">
          To deliver transformative, industry-aligned education through innovation, research, and collaboration —
          empowering every student to realize their fullest potential and contribute meaningfully to society.
        </p>
      </div>
    </div>
  </div>
</section>

<EventsSection events={data.events} />

<PlacementsSection placements={data.placements} />

<GalleryPreview items={data.gallery} />

<TestimonialsSection testimonials={data.testimonials} />

<!-- Initiatives -->
<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="text-center mb-12">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Innovation Ecosystem</p>
      <h2 class="section-title">Research &amp; Initiatives</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each [
        { icon: '🔬', title: 'Research Centers', desc: '12 active research labs across disciplines', color: 'bg-blue-50 text-blue-600' },
        { icon: '🚀', title: 'Startup Incubator', desc: '50+ startups incubated with seed funding', color: 'bg-purple-50 text-purple-600' },
        { icon: '🌍', title: 'Global Partnerships', desc: 'MOUs with 20+ international universities', color: 'bg-emerald-50 text-emerald-600' },
        { icon: '🏆', title: 'Industry Connect', desc: '150+ industry partners for live projects', color: 'bg-orange-50 text-orange-600' },
      ] as item}
        <div class="card p-6 text-center animate-on-scroll">
          <div class="w-14 h-14 rounded-2xl {item.color} flex items-center justify-center text-3xl mx-auto mb-4">{item.icon}</div>
          <h3 class="font-display font-semibold text-navy-900 text-lg mb-2">{item.title}</h3>
          <p class="text-sm text-gray-500">{item.desc}</p>
        </div>
      {/each}
    </div>
    <div class="text-center mt-8">
      <a href="/research" class="btn-outline">Explore Research</a>
    </div>
  </div>
</section>

<CTABanner />
