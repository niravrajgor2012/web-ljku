<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';

  const openings = [
    { title: 'Assistant Professor – Computer Science', dept: 'School of Engineering', type: 'Full-time', exp: '2-5 years', posted: '2025-05-01' },
    { title: 'Associate Professor – Management', dept: 'School of Management', type: 'Full-time', exp: '5-10 years', posted: '2025-05-05' },
    { title: 'Lab Assistant – Pharmacy', dept: 'School of Pharmacy', type: 'Full-time', exp: '1-3 years', posted: '2025-05-10' },
    { title: 'Placement Officer', dept: 'Placement Cell', type: 'Full-time', exp: '3-6 years', posted: '2025-05-12' },
    { title: 'Web Developer – IT Department', dept: 'IT & Systems', type: 'Full-time', exp: '2-4 years', posted: '2025-05-15' },
  ];
</script>

<SEOHead meta={{
  title: 'Careers at LJ University',
  description: 'Join LJ University as a faculty member, researcher, or staff. Explore current job openings.',
}} />

<PageHero
  title="Careers at LJ University"
  subtitle="Join a world-class academic institution. Build your career while shaping future leaders."
  breadcrumbs={[{ label: 'Careers' }]}
/>

<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="max-w-3xl">
      <h2 class="section-title mb-3">Current Openings</h2>
      <p class="text-gray-500 mb-8">We're always looking for passionate educators, researchers, and professionals to join our team.</p>

      <div class="space-y-4">
        {#each openings as job}
          <div class="card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 class="font-display font-bold text-navy-900 text-lg">{job.title}</h3>
              <div class="flex flex-wrap gap-2 mt-2">
                <span class="badge bg-primary-100 text-primary-700">{job.dept}</span>
                <span class="badge bg-gray-100 text-gray-600">{job.type}</span>
                <span class="badge bg-emerald-100 text-emerald-700">{job.exp}</span>
              </div>
            </div>
            <a href="mailto:hr@ljku.edu.in?subject=Application for {job.title}" class="btn-primary py-2 text-sm shrink-0">Apply Now</a>
          </div>
        {/each}
      </div>

      <div class="card p-8 mt-10 bg-navy-900 text-white text-center">
        <h3 class="font-display text-xl font-bold mb-2">Don't see the right role?</h3>
        <p class="text-gray-300 text-sm mb-4">Send us your CV and we'll keep it on file for future opportunities.</p>
        <a href="mailto:hr@ljku.edu.in" class="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm">
          Send Your CV
        </a>
      </div>
    </div>
  </div>
</section>
