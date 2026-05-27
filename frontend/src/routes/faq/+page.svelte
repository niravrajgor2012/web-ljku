<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const faqs = [
    {
      category: 'Admissions',
      items: [
        { q: 'When do admissions open?', a: 'Admissions for the 2025–26 academic year are now open. Apply before June 30, 2025.' },
        { q: 'What are the eligibility criteria for B.Tech?', a: '10+2 with Physics, Chemistry, Mathematics with minimum 45% aggregate. JEE Main / GUJCET score required.' },
        { q: 'Is there a management quota?', a: 'Yes, seats are available under management quota. Contact the admissions office for details.' },
        { q: 'Can I apply for more than one program?', a: 'Yes, you can apply for multiple programs. A separate application fee applies for each program.' },
      ],
    },
    {
      category: 'Fees & Scholarships',
      items: [
        { q: 'What are the annual fees?', a: 'Fees vary by program. B.Tech: ₹1.2–1.6 Lakhs/year; MBA: ₹1.8 Lakhs/year. Contact admissions for a detailed fee structure.' },
        { q: 'Are scholarships available?', a: 'Yes! We offer merit scholarships, SC/ST/OBC waivers, sports scholarships, and girl-child scholarships.' },
        { q: 'Is there an education loan facility?', a: 'We have tie-ups with SBI, HDFC, and Bank of Baroda for education loans. The admission office assists with documentation.' },
      ],
    },
    {
      category: 'Campus & Facilities',
      items: [
        { q: 'Is hostel accommodation available?', a: 'Yes, separate hostels for boys and girls are available on campus with 24/7 security, WiFi, and meal facilities.' },
        { q: 'What sports facilities are available?', a: 'Cricket ground, football field, basketball court, volleyball court, badminton court, table tennis, gym, and swimming pool.' },
        { q: 'Is the campus Wi-Fi enabled?', a: 'Yes, the entire campus has high-speed Wi-Fi connectivity for all students and faculty.' },
      ],
    },
    {
      category: 'Placements',
      items: [
        { q: 'What is the placement rate?', a: 'LJ University consistently achieves 90–95% placement across all programs.' },
        { q: 'When do campus placements start?', a: 'Campus placements begin in the final year (6th semester for 3-year programs, 7th semester for 4-year programs).' },
        { q: 'Do you have an on-campus recruitment drive?', a: 'Yes, 150+ companies visit our campus annually for placement drives, internship programs, and PPOs.' },
      ],
    },
  ];

  let expanded: Record<string, boolean> = {};
  function toggle(key: string) {
    expanded[key] = !expanded[key];
    expanded = expanded;
  }
</script>

<SEOHead meta={{
  title: 'FAQ',
  description: 'Frequently asked questions about LJ University admissions, fees, scholarships, campus life, and placements.',
}} />

<PageHero
  title="Frequently Asked Questions"
  subtitle="Everything you need to know about LJ University."
  breadcrumbs={[{ label: 'FAQ' }]}
/>

<section class="py-20 bg-gray-50">
  <div class="container-lg max-w-4xl">
    {#each faqs as section}
      <div class="mb-10">
        <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">{section.category}</h2>
        <div class="space-y-3">
          {#each section.items as faq, i}
            {@const key = `${section.category}-${i}`}
            <div class="card overflow-hidden">
              <button
                class="w-full flex items-start justify-between p-5 text-left"
                on:click={() => toggle(key)}
                aria-expanded={!!expanded[key]}
              >
                <span class="font-semibold text-navy-900 pr-4">{faq.q}</span>
                <svg class="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform {expanded[key] ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {#if expanded[key]}
                <div class="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/each}

    <div class="card p-8 text-center bg-gradient-to-br from-primary-50 to-navy-50 border border-primary-100 mt-6">
      <h3 class="font-display text-xl font-bold text-navy-900 mb-2">Still have questions?</h3>
      <p class="text-gray-500 text-sm mb-5">Our team is here to help you. Reach out and we'll get back to you quickly.</p>
      <div class="flex flex-wrap gap-3 justify-center">
        <a href="/contact" class="btn-primary">Contact Us</a>
        <a href="tel:+917971690000" class="btn-outline">Call Us</a>
      </div>
    </div>
  </div>
</section>

<CTABanner />
