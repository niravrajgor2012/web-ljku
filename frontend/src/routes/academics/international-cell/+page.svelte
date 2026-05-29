<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';

  const programs = [
    {
      title: 'Study Abroad Program',
      desc: 'Explore academic opportunities at international partner universities. Gain global exposure, cultural understanding and enhance your academic profile.',
      cta: 'Inquiry Form',
      href: 'https://forms.gle/Nu1h4w18FjomjTMN6',
    },
    {
      title: 'IELTS Training',
      desc: 'Prepare for international education with our dedicated IELTS training program. Strengthen English language proficiency and achieve scores required by top universities worldwide.',
      cta: 'Inquiry Form',
      href: 'https://forms.gle/3yqNctwbR5W4G4nD9',
    },
  ];
</script>

<SEOHead meta={{
  title: 'International Cell – LJ University',
  description: 'LJ University International Cell — Study Abroad, IELTS Training, international collaborations and student exchange programs.',
}} />

<PageHero
  title="International Cell"
  subtitle="A gateway to global education — connecting LJU students and faculty with leading universities and institutions across the world."
  image="https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1600&q=80"
  breadcrumbs={[{ label: 'Academics', href: '/academics' }, { label: 'International Cell' }]}
/>

<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div class="card p-8 border-l-4 border-primary-600">
        <h3 class="font-display font-bold text-navy-900 text-lg mb-2">Mission</h3>
        <p class="text-gray-600 leading-relaxed">
          To provide our students with a platform to explore different cultures of the world and help them build a confident personality
          by making them travel independently.
        </p>
      </div>
      <div class="card p-8 border-l-4 border-gold-500">
        <h3 class="font-display font-bold text-navy-900 text-lg mb-2">Objective</h3>
        <p class="text-gray-600 leading-relaxed">
          Creating an international learning environment through faculty and student exchanges with foreign universities.
        </p>
      </div>
    </div>

    <h2 class="section-title mb-8">International Programs</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {#each programs as p}
        <div class="card p-6">
          <h3 class="font-display font-bold text-navy-900 text-lg mb-2">{p.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
          <a href={p.href} target="_blank" rel="noopener" class="btn-primary inline-flex items-center text-sm">
            {p.cta} &rarr;
          </a>
        </div>
      {/each}
    </div>

    <div class="card p-8 bg-gradient-to-br from-navy-900 to-primary-900 text-white">
      <h3 class="font-display font-bold text-xl mb-4">Contact International Cell</h3>
      <p class="mb-2"><span class="font-semibold text-gold-300">Email:</span> <a href="mailto:int.prg@ljku.edu.in" class="hover:underline">int.prg@ljku.edu.in</a></p>
      <p class="mb-2"><span class="font-semibold text-gold-300">Phone:</span> +91 93139 22790</p>
      <p><span class="font-semibold text-gold-300">Address:</span> LJ Campus, LJ University Road, Off S.G. Road, Ahmedabad – 382210</p>
    </div>
  </div>
</section>

<CTABanner />
