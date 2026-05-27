<script lang="ts">
  export let title: string;
  export let subtitle = '';
  export let image = '';
  export let breadcrumbs: { label: string; href?: string }[] = [];
</script>

<div class="relative pt-[72px] overflow-hidden">
  {#if image}
    <div class="absolute inset-0">
      <img src={image} alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-900/50"></div>
    </div>
  {:else}
    <div class="absolute inset-0 bg-gradient-to-br from-navy-900 to-primary-900"></div>
    <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>
  {/if}

  <div class="relative container-lg py-20">
    {#if breadcrumbs.length > 0}
      <nav class="flex items-center gap-2 text-sm text-white/60 mb-4">
        <a href="/" class="hover:text-white transition-colors">Home</a>
        {#each breadcrumbs as crumb}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          {#if crumb.href}
            <a href={crumb.href} class="hover:text-white transition-colors">{crumb.label}</a>
          {:else}
            <span class="text-white">{crumb.label}</span>
          {/if}
        {/each}
      </nav>
    {/if}
    <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
    {#if subtitle}
      <p class="text-lg text-gray-200 max-w-2xl">{subtitle}</p>
    {/if}
  </div>
</div>
