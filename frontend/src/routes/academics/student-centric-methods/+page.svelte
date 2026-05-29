<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const methods = [
    { title: 'Evidence Based Learning', pdf: null },
    { title: 'Experiential Learning', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Experiencial%20Learning.pdf' },
    { title: 'Integrated Inter-Disciplinary Learning', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Integrated%20Interdisciplinary%20Learning.pdf' },
    { title: 'Participatory Learning', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Participatory%20Learning.pdf' },
    { title: 'Patient-Centric and Evidence-Based Learning', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Patient%20Centric%20and%20Evidance%20Based%20Learning.pdf' },
    { title: 'Problem Solving Methodologies', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Problem%20Solving%20Methodologies.pdf' },
    { title: 'Project Based Learning', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Project%20Based%20Learning.pdf' },
    { title: 'Role Play', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Role%20Play.pdf' },
    { title: 'Self-Directed Learning', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Self-Directed%20Learning.pdf' },
    { title: 'The Humanities', pdf: 'https://ljku.myqnapcloud.com/share.cgi?ssid=39fe09cf28da48339e287034fa4adb4e&path=%2FStudent_Centric&filename=Humanities.pdf' },
  ];
</script>

<SEOHead meta={{
  title: 'Student Centric Methods – LJ University',
  description: 'Ten evidence-backed student-centric teaching methodologies used across LJ University programs.',
}} />

<PageHero
  title="Student Centric Methods"
  subtitle="Innovative teaching methodologies that place the student at the centre of the learning experience — fostering critical thinking, collaboration and lifelong learning."
  image="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'Student-Centric Methods' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Teaching Methodologies</p>
    <h2 class="section-title mb-5">10 Student-Centric Teaching Methods</h2>
    <p class="text-gray-600 leading-relaxed max-w-3xl mb-10">
      LJU employs diverse, evidence-backed pedagogical approaches across its programs. Each methodology is documented and available
      for reference below.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each methods as m, i}
        <div class="card p-6 flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-9 h-9 rounded-lg bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-sm">{i + 1}</div>
            <h3 class="font-display font-bold text-navy-900 text-base flex-1">{m.title}</h3>
          </div>
          <div class="mt-auto pt-3">
            {#if m.pdf}
              <a href={m.pdf} target="_blank" rel="noopener" class="inline-flex items-center text-primary-600 font-semibold text-sm hover:underline">
                View PDF &rarr;
              </a>
            {:else}
              <span class="text-gray-400 text-xs italic">Documentation forthcoming</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<CTABanner />
