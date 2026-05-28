<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const facilities = [
    { title: 'Smart Classrooms', desc: 'Over 200 interactive smart classrooms with high-definition projectors, document cameras and digital whiteboards.' },
    { title: 'Fiber-Optic Backbone', desc: '10 Gbps fibre-optic backbone connecting every building, with Wi-Fi 6 access points campus-wide.' },
    { title: 'High-Performance Labs', desc: '5,500+ workstations across computer, AI/ML, IoT, cybersecurity, design and CAD labs.' },
    { title: 'Digital Library', desc: 'Access to e-journals, e-books, IEEE, ACM, Elsevier, Springer and other premium databases.' },
    { title: 'Learning Management System', desc: 'Moodle-based LMS for course delivery, assignments, assessments and analytics.' },
    { title: 'Video Conferencing', desc: 'Studio-grade VC rooms for guest lectures, industry talks and international collaborations.' },
    { title: 'Cloud & Data Centre', desc: 'On-premise data centre with cloud bursting for research, analytics and academic services.' },
    { title: '24/7 IT Helpdesk', desc: 'Dedicated support team for students, faculty and staff for all ICT needs.' },
  ];
</script>

<SEOHead meta={{
  title: 'ICT Facilities – LJ University',
  description: 'World-class ICT infrastructure at LJ University — smart classrooms, fibre-optic campus, high-performance labs, digital library and LMS.',
}} />

<PageHero
  title="ICT Facilities"
  subtitle="A fully digital campus, built for next-generation learning and research."
  image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'ICT Facilities' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each facilities as f}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <h3 class="font-display font-bold text-navy-900 text-base mb-2">{f.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
