<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import { onMount, afterUpdate } from 'svelte';
  import { initScrollAnimations } from '$lib/utils';

  onMount(() => {
    initScrollAnimations();
  });

  afterUpdate(() => {
    setTimeout(initScrollAnimations, 100);
  });
</script>

<Navbar />
<main>
  <slot />
</main>
<Footer />
