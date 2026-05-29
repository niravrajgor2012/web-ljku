<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const forms = [
    { title: 'Students Feedback Form', href: 'https://forms.gle/eA4ZJxV1nS4MjPpY6' },
    { title: 'Faculty Feedback Form', href: 'https://forms.gle/AmZP64oEMZbke7Tz9' },
    { title: 'Professionals Feedback Form', href: 'https://forms.gle/jnjDjiguL5Bw8zzL6' },
    { title: 'Alumni Feedback Form', href: 'https://forms.gle/HwgWDFXAgxzdLRVx8' },
    { title: 'Employer Feedback Form', href: 'https://forms.gle/fFYzCLqSXzMhu4kq7' },
  ];

  const reports = [
    { title: 'Analysis Report', source: 'ljku.edu.in/feedbacks', href: 'https://ljku.edu.in/feedbacks' },
    { title: 'Action Taken Report', source: 'ljku.edu.in/feedbacks', href: 'https://ljku.edu.in/feedbacks' },
  ];
</script>

<SEOHead meta={{
  title: 'Feedback – LJ University',
  description: 'Share feedback with LJ University — student, faculty, professional, alumni and employer feedback forms. Analysis and action-taken reports.',
}} />

<PageHero
  title="Feedback"
  subtitle="Continuous improvement driven by stakeholder input. Your feedback helps us enhance academic quality, teaching methods and student experience."
  image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Feedback' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Feedback Forms</p>
    <h2 class="section-title mb-5">Share Your Feedback</h2>
    <p class="text-gray-600 leading-relaxed max-w-3xl mb-10">
      Select the form that corresponds to your stakeholder category and help us continuously improve the academic experience at LJU.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {#each forms as f}
        <div class="card p-6 flex flex-col">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-4">{f.title}</h3>
          <a href={f.href} target="_blank" rel="noopener" class="btn-primary inline-flex items-center text-sm self-start mt-auto">
            Open Form &rarr;
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Reports</p>
    <h2 class="section-title mb-5">Analysis & Action Reports</h2>
    <p class="text-gray-600 leading-relaxed max-w-3xl mb-10">
      Feedback collected is systematically analysed and acted upon. Access the reports documenting our analysis and corrective actions below.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each reports as r}
        <a href={r.href} target="_blank" rel="noopener" class="card p-6 hover:-translate-y-1 transition-all block">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-1">{r.title}</h3>
          <p class="text-gray-500 text-sm">{r.source}</p>
        </a>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
