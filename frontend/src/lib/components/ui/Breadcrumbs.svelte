<script lang="ts">
  export let items: { label: string; href?: string }[] = [];
</script>

<nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm text-gray-500">
  <a href="/" class="hover:text-primary-600 transition-colors">Home</a>
  {#each items as item}
    <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    {#if item.href}
      <a href={item.href} class="hover:text-primary-600 transition-colors">{item.label}</a>
    {:else}
      <span class="text-gray-900 font-medium">{item.label}</span>
    {/if}
  {/each}
</nav>
