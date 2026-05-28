<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const facilities = [
    { title: 'Cricket Ground', desc: 'Full-size cricket ground with practice nets, pavilion and floodlights.' },
    { title: 'Football Field', desc: 'Standard FIFA-spec football field for inter-college tournaments.' },
    { title: 'Athletic Track', desc: '400-metre 8-lane synthetic athletic track for sprints and field events.' },
    { title: 'Multipurpose Indoor Hall', desc: 'Badminton, basketball, volleyball and table-tennis courts.' },
    { title: 'Swimming Pool', desc: 'Semi-olympic swimming pool with coaching for beginners and competitive swimmers.' },
    { title: 'Gymnasium & Fitness Centre', desc: 'Fully equipped gym with strength, cardio and functional training zones.' },
    { title: 'Yoga & Meditation Hall', desc: 'Dedicated air-conditioned space for yoga, pilates and mindfulness sessions.' },
    { title: 'Indoor Games', desc: 'Chess, carrom, billiards and table-tennis for recreation and competition.' },
  ];
</script>

<SEOHead meta={{
  title: 'Sports Infrastructure – LJ University',
  description: 'Sports infrastructure at LJ University — cricket, football, athletics, swimming, gymnasium, yoga and indoor games.',
}} />

<PageHero
  title="Sports Infrastructure"
  subtitle="Mind, body and team spirit — nurtured on world-class playing fields."
  image="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80"
  breadcrumbs={[{ label: 'About', href: '/about' }, { label: 'Sports' }]}
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
