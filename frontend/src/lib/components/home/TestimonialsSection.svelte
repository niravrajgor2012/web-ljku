<script lang="ts">
  import type { StrapiItem, Testimonial } from '$lib/types';
  import { getImageUrl } from '$lib/services/api';

  export let testimonials: StrapiItem<Testimonial>[] = [];

  const fallback = [
    {
      name: 'Arjun Patel',
      course: 'B.Tech Computer Science, 2023',
      role: 'Software Engineer at Google',
      review: 'LJ University gave me not just a degree but a mindset. The practical labs, industry mentors, and placement support were outstanding. I joined Google within 3 months of graduating.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
    },
    {
      name: 'Priya Shah',
      course: 'MBA, 2022',
      role: 'Marketing Manager at Infosys',
      review: 'The MBA program here is highly industry-relevant. The faculty brings real-world experience, and the networking opportunities are incredible. Best decision of my career.',
      img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
      rating: 5,
    },
    {
      name: 'Rahul Mehta',
      course: 'B.Des Product Design, 2023',
      role: 'UX Designer at Flipkart',
      review: 'The Design school has state-of-the-art studios and a curriculum that pushes creative boundaries. My portfolio from LJ helped me land my dream job at Flipkart.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
    },
  ];

  let current = 0;

  function stars(n: number) {
    return Array.from({ length: 5 }, (_, i) => i < n);
  }
</script>

<section class="py-20 bg-gradient-to-br from-navy-900 to-primary-900 relative overflow-hidden">
  <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>

  <div class="relative container-lg">
    <div class="text-center mb-12">
      <p class="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">Student Stories</p>
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-white">
        What Our Students Say
      </h2>
    </div>

    {#if testimonials.length === 0}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each fallback as t}
          <div class="glass rounded-2xl p-7">
            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              {#each stars(t.rating) as filled}
                <svg class="w-4 h-4 {filled ? 'text-gold-400' : 'text-gray-600'}" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              {/each}
            </div>
            <blockquote class="text-gray-200 text-sm leading-relaxed mb-6 italic">
              "{t.review}"
            </blockquote>
            <div class="flex items-center gap-3">
              <img src={t.img} alt={t.name} class="w-10 h-10 rounded-full object-cover border-2 border-white/20" loading="lazy" />
              <div>
                <div class="font-semibold text-white text-sm">{t.name}</div>
                <div class="text-xs text-gray-400">{t.course}</div>
                <div class="text-xs text-gold-400">{t.role}</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each testimonials.slice(0, 3) as t}
          {@const a = t.attributes}
          <div class="glass rounded-2xl p-7">
            {#if a.rating}
              <div class="flex gap-1 mb-4">
                {#each Array(5) as _, i}
                  <svg class="w-4 h-4 {i < a.rating ? 'text-gold-400' : 'text-gray-600'}" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                {/each}
              </div>
            {/if}
            <blockquote class="text-gray-200 text-sm leading-relaxed mb-6 italic">"{a.review}"</blockquote>
            <div class="flex items-center gap-3">
              {#if a.image?.data}
                <img src={getImageUrl(a.image.data.attributes.url)} alt={a.studentName} class="w-10 h-10 rounded-full object-cover border-2 border-white/20" loading="lazy" />
              {:else}
                <div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">{a.studentName.charAt(0)}</div>
              {/if}
              <div>
                <div class="font-semibold text-white text-sm">{a.studentName}</div>
                {#if a.course}<div class="text-xs text-gray-400">{a.course}</div>{/if}
                {#if a.currentRole}<div class="text-xs text-gold-400">{a.currentRole}{#if a.company} at {a.company}{/if}</div>{/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
