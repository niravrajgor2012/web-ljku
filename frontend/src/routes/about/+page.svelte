<script lang="ts">
  import SEOHead from '$lib/components/seo/SEOHead.svelte';
  import PageHero from '$lib/components/ui/PageHero.svelte';
  import CTABanner from '$lib/components/home/CTABanner.svelte';
  const stats = [
    { value: '1980', label: 'Year Founded', sub: 'Lok Jagruti Kendra Trust' },
    { value: '32', label: 'Institutes', sub: 'Across two campuses' },
    { value: '21,000+', label: 'Students', sub: 'Total across all institutes' },
    { value: '1,000+', label: 'Faculty', sub: 'Experienced educators' },
    { value: '42', label: 'Programs', sub: 'Across all disciplines' },
    { value: '200+', label: 'Industry Partners', sub: 'National & international' },
    { value: '5,500+', label: 'Workstations', sub: 'Computer infrastructure' },
    { value: '250', label: 'Villages Served', sub: 'Community impact' },
  ];

  const objectives = [
    { icon: '&#127891;', title: 'Affordable Excellence', desc: 'Quality education within reach of every aspiring student, regardless of background.' },
    { icon: '&#127775;', title: 'Holistic Development', desc: 'Nurturing mind, body and character for well-rounded personal growth.' },
    { icon: '&#128295;', title: 'Skill-Driven Learning', desc: 'Industry-aligned curriculum ensuring graduates are ready from day one.' },
    { icon: '&#128161;', title: 'Innovation & Entrepreneurship', desc: 'Turning student ideas into real-world solutions and ventures.' },
    { icon: '&#129309;', title: 'Community Engagement', desc: 'Giving back with purpose through meaningful outreach programs.' },
    { icon: '&#127758;', title: 'Local to Global', desc: 'Think global, act local — preparing students for a connected world.' },
    { icon: '&#9917;', title: 'Inclusivity & Diversity', desc: 'Education for all, celebrating every background and perspective.' },
    { icon: '&#128218;', title: 'Academic Excellence', desc: 'Balancing relevance and rigour for meaningful, purposeful learning.' },
    { icon: '&#127807;', title: 'Sustainable Development', desc: 'Embedding green values and environmental responsibility in campus life.' },
    { icon: '&#127942;', title: 'Leadership & Lifelong Learning', desc: 'Cultivating leaders who lead with integrity and keep growing.' },
  ];

  const initiatives = [
    {
      title: 'LJ Innovation Village',
      desc: 'Annual innovation showcase running since 2013, where students present breakthrough ideas to industry leaders and investors.',
      icon: '&#127981;',
    },
    {
      title: 'Project to Product',
      desc: 'A structured pipeline that converts student innovations into market-ready solutions through mentoring and funding support.',
      icon: '&#128640;',
    },
    {
      title: 'Law on Wheels',
      desc: 'Mobile legal aid initiative bringing free legal services to rural communities across Gujarat.',
      icon: '&#9878;&#65039;',
    },
    {
      title: 'LJ Sahyog',
      desc: 'Student-led digital transformation program that brought technology and connectivity to 250 villages.',
      icon: '&#127968;',
    },
    {
      title: 'NewGen IEDC',
      desc: 'Innovation and Entrepreneurship Development Centre empowering students to build the next generation of startups.',
      icon: '&#128200;',
    },
    {
      title: 'Teaching Hospital',
      desc: 'An integrated academic medical facility providing real-world clinical training alongside quality patient care.',
      icon: '&#127973;',
    },
  ];

  const programs = [
    'Engineering', 'Management', 'Pharmacy', 'Architecture',
    'Computer Applications', 'Applied Sciences', 'Design',
    'Mass Communication', 'Physiotherapy', 'Commerce',
    'Event & Sports Management', 'Education', 'Law',
  ];

  const accreditations = ['NAAC A+', 'UGC 2(f)', 'AICTE', 'NBA', 'PCI', 'COA', 'BCI', 'NIRF'];
</script>

<SEOHead meta={{
  title: 'About LJ University – LJU at a Glance',
  description: 'Founded in 1980, LJ University (Lok Jagruti Kendra University) offers 42+ programs across 32 institutes with 21,000+ students. NAAC accredited, UGC approved.',
}} />

<PageHero
  title="LJU at a Glance"
  subtitle="Legacy rooted in vision, growth driven by purpose. Shaping futures since 1980."
  image="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
  breadcrumbs={[{ label: 'About' }]}
/>

<!-- Legacy Section -->
<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Legacy</p>
        <h2 class="section-title mb-5">Lok Jagruti Kendra — Higher Education with Purpose</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Founded in 1980 by Prof. B.M. Peerzada, former Dean of Commerce at Gujarat University, Lok Jagruti Kendra Trust was born with a singular mission — to make quality higher education accessible, meaningful, and transformative.
        </p>
        <p class="text-gray-600 leading-relaxed mb-4">
          Over four decades, the Trust has grown into one of Gujarat's most respected educational ecosystems, managing 32 institutes across two campuses. With over 21,000 students and 1,000+ faculty members, LJ University stands as a testament to what vision, perseverance, and purpose can build.
        </p>
        <p class="text-gray-600 leading-relaxed mb-8">
          Recognised by UGC, accredited by NAAC, and ranked in NIRF, LJ University today offers 42 programs spanning engineering, management, pharmacy, law, design, and beyond — all within a state-of-the-art, environment-friendly campus in Ahmedabad.
        </p>
        <div class="flex items-start gap-4 p-5 bg-primary-50 rounded-2xl border-l-4 border-primary-600">
          <div class="text-3xl mt-1">&#128204;</div>
          <div>
            <p class="font-semibold text-navy-900 mb-1">Our Vision</p>
            <p class="text-gray-600 text-sm leading-relaxed italic">
              "A key player in education and social development by promoting and nurturing creativity, scholarship, innovation, and excellence through a chain of quality institutes."
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
          alt="LJ University Campus"
          class="rounded-3xl w-full object-cover h-72 shadow-xl"
          loading="lazy"
        />
        <div class="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=70" alt="LJ University Library" class="rounded-2xl w-full h-40 object-cover" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=70" alt="LJ University Labs" class="rounded-2xl w-full h-40 object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Statistics -->
<section class="py-20 bg-navy-900">
  <div class="container-lg">
    <div class="text-center mb-14">
      <p class="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">By the Numbers</p>
      <h2 class="font-display text-3xl lg:text-4xl font-bold text-white">A University with a Difference</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each stats as stat}
        <div class="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <div class="font-display text-3xl lg:text-4xl font-bold text-primary-400 mb-1">{stat.value}</div>
          <div class="text-white font-semibold text-sm mb-1">{stat.label}</div>
          <div class="text-gray-400 text-xs">{stat.sub}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Academic Programs -->
<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Academic Breadth</p>
        <h2 class="section-title mb-5">Academic Excellence Meets Real-World Relevance</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          LJ University offers 42 programs across 13 schools — from diploma and undergraduate to postgraduate, Ph.D., and short-term professional courses. Every program is designed to blend academic rigour with industry applicability.
        </p>
        <div class="space-y-3 mb-8">
          {#each [
            { label: 'Smart Classrooms', desc: 'Technology-enabled, interactive learning environments' },
            { label: 'Fiber-Optic Campus', desc: 'High-speed connectivity across all buildings' },
            { label: 'Labs & Studios', desc: 'Well-equipped for engineering, design, pharmacy and more' },
            { label: 'Auditoriums & Libraries', desc: 'World-class infrastructure for learning and culture' },
          ] as facility}
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div class="w-2 h-2 rounded-full bg-primary-600"></div>
              </div>
              <div>
                <span class="font-semibold text-navy-900 text-sm">{facility.label}</span>
                <span class="text-gray-500 text-sm"> — {facility.desc}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div>
        <h3 class="font-display font-bold text-navy-900 text-lg mb-5">Programs Offered Across Schools</h3>
        <div class="flex flex-wrap gap-2">
          {#each programs as prog}
            <span class="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-navy-800 hover:border-primary-300 hover:bg-primary-50 transition-colors shadow-sm">
              {prog}
            </span>
          {/each}
        </div>
        <div class="mt-6 grid grid-cols-3 gap-4">
          {#each [
            { label: 'Diploma', icon: '&#127891;' },
            { label: 'UG Programs', icon: '&#127979;' },
            { label: 'PG Programs', icon: '&#127981;' },
            { label: 'Ph.D.', icon: '&#128218;' },
            { label: 'Certificate', icon: '&#128196;' },
            { label: 'Professional', icon: '&#128188;' },
          ] as level}
            <div class="text-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div class="text-xl mb-1">{@html level.icon}</div>
              <div class="text-xs font-semibold text-navy-700">{level.label}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 10 Objectives -->
<section class="py-20 bg-white">
  <div class="container-lg">
    <div class="text-center mb-14">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Stand For</p>
      <h2 class="section-title">Objectives of LJ University</h2>
      <p class="section-subtitle mt-4 max-w-2xl mx-auto">Ten core principles that guide every decision, every program, and every student interaction at LJ University.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {#each objectives as obj, i}
        <div class="card p-5 hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-xl mb-3 group-hover:bg-primary-100 transition-colors">
            {@html obj.icon}
          </div>
          <div class="text-xs font-bold text-primary-600 mb-1">0{i + 1}</div>
          <h3 class="font-display font-bold text-navy-900 text-sm mb-2">{obj.title}</h3>
          <p class="text-gray-500 text-xs leading-relaxed">{obj.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Initiatives -->
<section class="py-20 bg-gradient-to-br from-navy-900 to-primary-900">
  <div class="container-lg">
    <div class="text-center mb-14">
      <p class="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-3">Beyond the Classroom</p>
      <h2 class="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Innovation, Entrepreneurship &amp; Social Impact</h2>
      <p class="text-gray-300 max-w-2xl mx-auto">LJ University's flagship initiatives bridge the gap between education and real-world impact.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each initiatives as initiative}
        <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
          <div class="text-3xl mb-4">{@html initiative.icon}</div>
          <h3 class="font-display font-bold text-white text-lg mb-2">{initiative.title}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">{initiative.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Accreditations -->
<section class="py-20 bg-gray-50">
  <div class="container-lg">
    <div class="text-center mb-12">
      <p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Recognised &amp; Trusted</p>
      <h2 class="section-title">Accreditations &amp; Recognitions</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14">
      {#each accreditations as acc}
        <div class="flex items-center justify-center h-20 rounded-2xl bg-white border-2 border-gray-100 hover:border-primary-300 hover:shadow-md transition-all font-display font-bold text-navy-700 text-xl shadow-sm">
          {acc}
        </div>
      {/each}
    </div>

    <!-- Promise -->
    <div class="card p-10 bg-gradient-to-r from-primary-600 to-navy-800 text-white text-center rounded-3xl">
      <div class="text-4xl mb-4">&#127942;</div>
      <h3 class="font-display text-2xl lg:text-3xl font-bold mb-4">Our Promise</h3>
      <p class="text-primary-100 max-w-3xl mx-auto leading-relaxed text-lg">
        At LJ University, we are committed to delivering education that is not just academically rigorous but also ethically grounded, socially aware, and future-ready. Every student who walks through our doors deserves the best — and we deliver it.
      </p>
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        <a href="/admissions" class="bg-white text-primary-700 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors">
          Apply Now &rarr;
        </a>
        <a href="/programs" class="border border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
          Explore Programs
        </a>
      </div>
    </div>
  </div>
</section>

<CTABanner />
