<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import MobileMenu from './MobileMenu.svelte';

  let scrolled = false;
  let mobileOpen = false;

  const navLinks = [
    {
      label: 'About',
      href: '/about',
      children: [
        { label: 'LJU at a Glance', href: '/about' },
        { label: 'Vision & Mission', href: '/about/vision-mission' },
        { label: 'People', href: '/about/people' },
        { label: 'Organogram', href: '/about/organogram' },
        { label: 'Statute', href: '/about/statute' },
        { label: 'Strategic Plan', href: '/about/strategic-plan' },
        { label: 'Committees', href: '/about/committees' },
        { label: 'Code of Conduct', href: '/about/code-of-conduct' },
        { label: 'Policies', href: '/about/policies' },
        { label: 'Student Welfare', href: '/about/welfare' },
        { label: 'GoG Approval', href: '/about/gog-approval' },
        { label: 'UGC Recognition', href: '/about/ugc' },
        { label: 'National Accreditation', href: '/about/national-accreditation' },
        { label: 'ICT Facilities', href: '/about/ict-facilities' },
        { label: 'Sports Infrastructure', href: '/about/sports-infrastructure' },
        { label: 'Green Campus', href: '/about/green-campus' },
        { label: 'Alternate Energy', href: '/about/alternate-energy' },
        { label: 'Water Conservation', href: '/about/water-conservation' },
        { label: 'Barrier-Free Campus', href: '/about/barrier-free' },
        { label: 'Administrative Contacts', href: '/about/contact' },
      ],
    },
    {
      label: 'Academics',
      href: '#',
      children: [
        { label: 'Departments', href: '/departments' },
        { label: 'Programs', href: '/programs' },
        { label: 'Faculty', href: '/faculty' },
        { label: 'Research & Innovation', href: '/research' },
      ],
    },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Placements', href: '/placements' },
    {
      label: 'Campus Life',
      href: '#',
      children: [
        { label: 'Student Life', href: '/student-life' },
        { label: 'Events', href: '/events' },
        { label: 'Gallery', href: '/gallery' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  onMount(() => {
    const handleScroll = () => (scrolled = window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function isActive(href: string) {
    return $page.url.pathname === href || $page.url.pathname.startsWith(href + '/');
  }

  let activeDropdown: string | null = null;
  function toggleDropdown(label: string) {
    activeDropdown = activeDropdown === label ? null : label;
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:bg-white={scrolled}
  class:shadow-soft={scrolled}
  class:bg-transparent={!scrolled}
>
  <div class="container-lg">
    <nav class="flex items-center justify-between h-[72px]">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 flex-shrink-0">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-navy-800 flex items-center justify-center shadow-md">
          <span class="text-white font-display font-bold text-lg">LJ</span>
        </div>
        <div class="hidden sm:block">
          <div class="font-display font-bold text-navy-900 text-lg leading-tight" class:text-white={!scrolled}>
            LJ University
          </div>
          <div class="text-xs text-gray-500 leading-tight" class:text-white={!scrolled} class:opacity-80={!scrolled}>
            Ahmedabad, Gujarat
          </div>
        </div>
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-1">
        {#each navLinks as link}
          <li class="relative group">
            {#if link.children}
              <button
                class="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                class:text-white={!scrolled}
                class:hover:text-primary-600={scrolled}
                class:text-gray-700={scrolled}
                class:hover:bg-gray-100={scrolled}
                class:hover:bg-white={!scrolled}
                class:hover:text-navy-900={!scrolled}
                on:click={() => toggleDropdown(link.label)}
              >
                {link.label}
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <!-- Dropdown -->
              <div class="absolute top-full left-0 mt-1 w-56 max-h-[75vh] overflow-y-auto bg-white rounded-xl shadow-card-hover border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul class="py-2">
                  {#each link.children as child}
                    <li>
                      <a
                        href={child.href}
                        class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        class:font-semibold={isActive(child.href)}
                        class:text-primary-600={isActive(child.href)}
                      >
                        {child.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {:else}
              <a
                href={link.href}
                class="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                class:text-white={!scrolled && !isActive(link.href)}
                class:text-gray-700={scrolled && !isActive(link.href)}
                class:text-primary-600={isActive(link.href)}
                class:font-semibold={isActive(link.href)}
                class:hover:bg-gray-100={scrolled}
                class:hover:bg-white={!scrolled && !isActive(link.href)}
                class:hover:text-navy-900={!scrolled}
              >
                {link.label}
              </a>
            {/if}
          </li>
        {/each}
      </ul>

      <!-- CTA + Mobile Toggle -->
      <div class="flex items-center gap-3">
        <a href="/admissions" class="hidden md:inline-flex btn-primary py-2 text-sm">
          Apply Now
        </a>
        <button
          class="lg:hidden p-2 rounded-lg transition-colors"
          class:text-white={!scrolled}
          class:text-gray-700={scrolled}
          class:hover:bg-white={!scrolled}
          class:hover:bg-gray-100={scrolled}
          on:click={() => (mobileOpen = true)}
          aria-label="Open menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</header>

<MobileMenu bind:open={mobileOpen} links={navLinks} />
