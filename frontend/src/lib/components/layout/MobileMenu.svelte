<script lang="ts">
  import { page } from '$app/stores';
  import { fly, fade } from 'svelte/transition';
  import { afterUpdate } from 'svelte';

  export let open = false;
  export let links: { label: string; href: string; children?: { label: string; href: string }[] }[] = [];

  let expandedItem: string | null = null;

  afterUpdate(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  });

  function close() { open = false; }
  function toggle(label: string) {
    expandedItem = expandedItem === label ? null : label;
  }
</script>

{#if open}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black/50 z-50 lg:hidden"
    transition:fade={{ duration: 200 }}
    on:click={close}
    role="presentation"
  ></div>

  <!-- Drawer -->
  <div
    class="fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white z-50 lg:hidden overflow-y-auto"
    transition:fly={{ x: -320, duration: 300 }}
    role="dialog"
    aria-modal="true"
    aria-label="Navigation menu"
  >
    <!-- Header -->
    <div class="flex items-center justify-between p-5 border-b border-gray-100">
      <a href="/" class="flex items-center gap-3" on:click={close}>
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-navy-800 flex items-center justify-center">
          <span class="text-white font-display font-bold">LJ</span>
        </div>
        <span class="font-display font-bold text-navy-900">LJ University</span>
      </a>
      <button
        class="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
        on:click={close}
        aria-label="Close menu"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Links -->
    <nav class="p-4">
      <ul class="space-y-1">
        {#each links as link}
          <li>
            {#if link.children}
              <button
                class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                on:click={() => toggle(link.label)}
              >
                <span>{link.label}</span>
                <svg
                  class="w-4 h-4 transition-transform {expandedItem === link.label ? 'rotate-180' : ''}"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {#if expandedItem === link.label}
                <ul class="ml-4 mt-1 space-y-1">
                  {#each link.children as child}
                    <li>
                      <a
                        href={child.href}
                        class="block px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        class:text-primary-600={$page.url.pathname === child.href}
                        class:font-semibold={$page.url.pathname === child.href}
                        on:click={close}
                      >
                        {child.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            {:else}
              <a
                href={link.href}
                class="block px-4 py-3 rounded-xl font-medium transition-colors"
                class:text-primary-600={$page.url.pathname === link.href}
                class:bg-primary-50={$page.url.pathname === link.href}
                class:text-gray-700={$page.url.pathname !== link.href}
                class:hover:bg-gray-50={$page.url.pathname !== link.href}
                on:click={close}
              >
                {link.label}
              </a>
            {/if}
          </li>
        {/each}
      </ul>

      <div class="mt-6 pt-6 border-t border-gray-100 space-y-3">
        <a href="/admissions" class="btn-primary w-full justify-center" on:click={close}>
          Apply Now
        </a>
        <a href="/contact" class="btn-outline w-full justify-center" on:click={close}>
          Contact Us
        </a>
      </div>
    </nav>
  </div>
{/if}
