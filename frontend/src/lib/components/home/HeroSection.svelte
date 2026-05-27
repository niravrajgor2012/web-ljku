<script lang="ts">
  import { onMount } from 'svelte';

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80',
      badge: 'NAAC A+ Accredited University',
      title: 'Shaping',
      accent: "Tomorrow's",
      titleEnd: 'Leaders',
      subtitle: 'Experience world-class education at LJ University – where innovation meets tradition, and every student is empowered to excel.',
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
      badge: '10,000+ Alumni Worldwide',
      title: 'Discover',
      accent: 'Your',
      titleEnd: 'Potential',
      subtitle: 'From engineering to design, management to pharmacy – 30+ programs across 10 schools designed for the careers of tomorrow.',
    },
    {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80',
      badge: '95% Placement Rate',
      title: 'Build a',
      accent: 'Future',
      titleEnd: 'That Inspires',
      subtitle: 'Our industry partnerships and innovation labs give students real-world skills and global opportunities.',
    },
  ];

  let current = 0;
  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => {
      current = (current + 1) % slides.length;
    }, 5000);
    return () => clearInterval(interval);
  });

  const stats = [
    { value: '10,000+', label: 'Students' },
    { value: '500+', label: 'Faculty' },
    { value: '30+', label: 'Programs' },
    { value: '95%', label: 'Placement' },
  ];
</script>

<section class="relative min-h-screen flex items-center overflow-hidden">
  {#each slides as slide, i}
    <div
      class="absolute inset-0 transition-opacity duration-1000"
      class:opacity-100={i === current}
      class:opacity-0={i !== current}
    >
      <img
        src={slide.image}
        alt=""
        class="w-full h-full object-cover"
        loading={i === 0 ? 'eager' : 'lazy'}
      />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
    </div>
  {/each}

  <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>

  <div class="relative container-lg pt-24 pb-16 z-10">
    <div class="max-w-2xl">
      {#each slides as slide, i}
        {#if i === current}
          <div class="animate-fade-up">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-400 text-sm font-semibold border border-gold-500/30 mb-6">
              <span class="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              {slide.badge}
            </span>
            <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {slide.title}
              <span class="text-primary-400"> {slide.accent} </span>
              {slide.titleEnd}
            </h1>
            <p class="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl">
              {slide.subtitle}
            </p>
          </div>
        {/if}
      {/each}

      <div class="flex flex-wrap gap-4">
        <a href="/admissions" class="btn-primary bg-primary-500 hover:bg-primary-600 py-3.5 px-8 text-base">
          Apply for Admission
        </a>
        <a href="/programs" class="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200">
          Explore Programs
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    <div class="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl lg:max-w-3xl">
      {#each stats as stat}
        <div class="glass rounded-2xl p-5 text-center">
          <div class="font-display text-3xl font-bold text-white">{stat.value}</div>
          <div class="text-sm text-gray-300 mt-1">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
    {#each slides as _, i}
      <button
        class="h-2 transition-all duration-300 rounded-full {i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}"
        on:click={() => (current = i)}
        aria-label="Slide {i + 1}"
      ></button>
    {/each}
  </div>

  <div class="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60 text-xs z-10">
    <span>Scroll</span>
    <div class="w-px h-10 bg-white/30 relative overflow-hidden">
      <div class="absolute top-0 w-full bg-white" style="height:30%;animation:scrollDown 1.5s ease-in-out infinite"></div>
    </div>
  </div>
</section>

<style>
  @keyframes scrollDown {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(400%); }
  }
</style>
