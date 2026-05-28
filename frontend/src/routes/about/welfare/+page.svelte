<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const programs = [
    { title: 'Student Scholarships', desc: 'Merit-cum-means scholarships, sports scholarships and government scholarships for SC/ST/OBC/EWS students.' },
    { title: 'Health & Wellness', desc: 'On-campus medical centre, tie-ups with leading hospitals, regular health camps and mental wellness support.' },
    { title: 'Counselling Cell', desc: 'Confidential one-on-one counselling for academic stress, career planning and personal concerns.' },
    { title: 'Hostel & Transport', desc: 'Safe, well-maintained hostels for boys and girls. University-managed bus services across Ahmedabad.' },
    { title: 'Earn While You Learn', desc: 'Part-time work opportunities on campus for students from economically weaker backgrounds.' },
    { title: 'Insurance Cover', desc: 'Group personal accident insurance for all enrolled students.' },
    { title: 'Equal Opportunity Cell', desc: 'Support for differently abled students and students from marginalised communities.' },
    { title: 'Career Services', desc: 'Resume building, interview prep, internships, placements and entrepreneurship mentorship.' },
  ];
</script>

<SEOHead meta={{
  title: 'Student Welfare – LJ University',
  description: 'Welfare programs at LJ University — scholarships, health, counselling, hostel, transport and career services.',
}} />

<PageHero
  title="Student Welfare"
  subtitle="Holistic care that goes beyond the classroom."
  image="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Welfare' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each programs as p}
        <div class="card p-6 hover:-translate-y-1 transition-all">
          <h3 class="font-display font-bold text-navy-900 text-base mb-2">{p.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
