<script lang="ts">
  import { onMount } from 'svelte';
  import { animateCounter } from '$lib/utils';

  const stats = [
    { value: 10000, suffix: '+', label: 'Students Enrolled', icon: '🎓' },
    { value: 500, suffix: '+', label: 'Expert Faculty', icon: '👨‍🏫' },
    { value: 30, suffix: '+', label: 'Programs Offered', icon: '📚' },
    { value: 95, suffix: '%', label: 'Placement Rate', icon: '💼' },
    { value: 150, suffix: '+', label: 'Industry Partners', icon: '🤝' },
    { value: 50, suffix: '+', label: 'Research Projects', icon: '🔬' },
  ];

  let counters: HTMLElement[] = [];
  let observed = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !observed) {
          observed = true;
          counters.forEach((el, i) => {
            if (el) setTimeout(() => animateCounter(el, stats[i].value), i * 100);
          });
        }
      },
      { threshold: 0.3 }
    );
    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  });
</script>

<section id="stats-section" class="py-20 bg-gradient-to-br from-navy-900 to-primary-900 relative overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-hero-pattern opacity-20"></div>

  <div class="relative container-lg">
    <div class="text-center mb-12">
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
        LJ University by the Numbers
      </h2>
      <p class="text-gray-300 max-w-xl mx-auto">
        A track record of academic excellence, industry partnerships, and student success.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {#each stats as stat, i}
        <div class="text-center group">
          <div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors text-2xl">
            {stat.icon}
          </div>
          <div class="font-display text-4xl font-bold text-white flex items-center justify-center gap-0.5">
            <span bind:this={counters[i]}>0</span><span>{stat.suffix}</span>
          </div>
          <div class="text-sm text-gray-300 mt-1 font-medium">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
