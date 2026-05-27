<script lang="ts">
  import { page } from '$app/stores';
  import type { PageMeta } from '$lib/types';

  export let meta: PageMeta = {
    title: "LJ University – Shaping Tomorrow's Leaders",
    description: 'LJ University, Ahmedabad – A premier institution offering engineering, management, pharmacy, design, and more. NAAC A+ accredited.',
    keywords: 'LJ University, Ahmedabad, Engineering, Management, Pharmacy, Design, Admissions',
  };

  const siteTitle = 'LJ University';
  $: fullTitle = meta.title.includes(siteTitle) ? meta.title : `${meta.title} | ${siteTitle}`;
  $: currentUrl = $page.url.href;

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: 'LJ University',
    url: 'https://ljku.edu.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'LJ Campus, LJ University Road, Off. S.G. Road',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382210',
      addressCountry: 'IN',
    },
    telephone: '+91-79-7169-0000',
    email: 'info@ljku.edu.in',
  });
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={meta.description} />
  {#if meta.keywords}
    <meta name="keywords" content={meta.keywords} />
  {/if}
  <link rel="canonical" href={meta.canonical ?? currentUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:url" content={currentUrl} />
  {#if meta.ogImage}
    <meta property="og:image" content={meta.ogImage} />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={meta.description} />
  {#if meta.ogImage}
    <meta name="twitter:image" content={meta.ogImage} />
  {/if}
</svelte:head>

<!-- Structured data injected outside svelte:head to avoid SSR issues -->
<div style="display:none" aria-hidden="true">
  {@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</div>
