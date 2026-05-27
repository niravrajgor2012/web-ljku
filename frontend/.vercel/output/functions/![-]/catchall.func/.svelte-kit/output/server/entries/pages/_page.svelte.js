import { e as ensure_array_like, b as attr_class, a as attr, f as escape_html, l as stringify, g as fallback, d as bind_props, c as attr_style } from "../../chunks/root.js";
import { S as SEOHead } from "../../chunks/SEOHead.js";
import { g as getImageUrl } from "../../chunks/api.js";
import { f as formatCurrency, a as formatDate } from "../../chunks/index.js";
import { C as CTABanner } from "../../chunks/CTABanner.js";
function HeroSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const slides = [
      {
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80",
        badge: "NAAC A+ Accredited University",
        title: "Shaping",
        accent: "Tomorrow's",
        titleEnd: "Leaders",
        subtitle: "Experience world-class education at LJ University – where innovation meets tradition, and every student is empowered to excel."
      },
      {
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
        badge: "10,000+ Alumni Worldwide",
        title: "Discover",
        accent: "Your",
        titleEnd: "Potential",
        subtitle: "From engineering to design, management to pharmacy – 30+ programs across 10 schools designed for the careers of tomorrow."
      },
      {
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80",
        badge: "95% Placement Rate",
        title: "Build a",
        accent: "Future",
        titleEnd: "That Inspires",
        subtitle: "Our industry partnerships and innovation labs give students real-world skills and global opportunities."
      }
    ];
    let current = 0;
    const stats = [
      { value: "10,000+", label: "Students" },
      { value: "500+", label: "Faculty" },
      { value: "30+", label: "Programs" },
      { value: "95%", label: "Placement" }
    ];
    $$renderer2.push(`<section class="relative min-h-screen flex items-center overflow-hidden svelte-1jd3l9l"><!--[-->`);
    const each_array = ensure_array_like(slides);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let slide = each_array[i];
      $$renderer2.push(`<div${attr_class("absolute inset-0 transition-opacity duration-1000 svelte-1jd3l9l", void 0, { "opacity-100": i === current, "opacity-0": i !== current })}><img${attr("src", slide.image)} alt="" class="w-full h-full object-cover svelte-1jd3l9l"${attr("loading", i === 0 ? "eager" : "lazy")}/> <div class="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-transparent svelte-1jd3l9l"></div> <div class="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent svelte-1jd3l9l"></div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="absolute inset-0 bg-hero-pattern opacity-30 svelte-1jd3l9l"></div> <div class="relative container-lg pt-24 pb-16 z-10 svelte-1jd3l9l"><div class="max-w-2xl svelte-1jd3l9l"><!--[-->`);
    const each_array_1 = ensure_array_like(slides);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let slide = each_array_1[i];
      if (i === current) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="animate-fade-up svelte-1jd3l9l"><span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-400 text-sm font-semibold border border-gold-500/30 mb-6 svelte-1jd3l9l"><span class="w-2 h-2 rounded-full bg-gold-400 animate-pulse svelte-1jd3l9l"></span> ${escape_html(slide.badge)}</span> <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 svelte-1jd3l9l">${escape_html(slide.title)} <span class="text-primary-400 svelte-1jd3l9l">${escape_html(slide.accent)}</span> ${escape_html(slide.titleEnd)}</h1> <p class="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl svelte-1jd3l9l">${escape_html(slide.subtitle)}</p></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> <div class="flex flex-wrap gap-4 svelte-1jd3l9l"><a href="/admissions" class="btn-primary bg-primary-500 hover:bg-primary-600 py-3.5 px-8 text-base svelte-1jd3l9l">Apply for Admission</a> <a href="/programs" class="inline-flex items-center gap-2 glass text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200 svelte-1jd3l9l">Explore Programs <svg class="w-4 h-4 svelte-1jd3l9l" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" class="svelte-1jd3l9l"></path></svg></a></div></div> <div class="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl lg:max-w-3xl svelte-1jd3l9l"><!--[-->`);
    const each_array_2 = ensure_array_like(stats);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let stat = each_array_2[$$index_2];
      $$renderer2.push(`<div class="glass rounded-2xl p-5 text-center svelte-1jd3l9l"><div class="font-display text-3xl font-bold text-white svelte-1jd3l9l">${escape_html(stat.value)}</div> <div class="text-sm text-gray-300 mt-1 svelte-1jd3l9l">${escape_html(stat.label)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 svelte-1jd3l9l"><!--[-->`);
    const each_array_3 = ensure_array_like(slides);
    for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
      each_array_3[i];
      $$renderer2.push(`<button${attr_class(`h-2 transition-all duration-300 rounded-full ${i === current ? "w-8 bg-white" : "w-2 bg-white/40"}`, "svelte-1jd3l9l")}${attr("aria-label", `Slide ${stringify(i + 1)}`)}></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60 text-xs z-10 svelte-1jd3l9l"><span class="svelte-1jd3l9l">Scroll</span> <div class="w-px h-10 bg-white/30 relative overflow-hidden svelte-1jd3l9l"><div class="absolute top-0 w-full bg-white svelte-1jd3l9l" style="height:30%;animation:scrollDown 1.5s ease-in-out infinite"></div></div></div></section>`);
  });
}
function StatisticsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const stats = [
      {
        value: 1e4,
        suffix: "+",
        label: "Students Enrolled",
        icon: "🎓"
      },
      {
        value: 500,
        suffix: "+",
        label: "Expert Faculty",
        icon: "👨‍🏫"
      },
      {
        value: 30,
        suffix: "+",
        label: "Programs Offered",
        icon: "📚"
      },
      { value: 95, suffix: "%", label: "Placement Rate", icon: "💼" },
      {
        value: 150,
        suffix: "+",
        label: "Industry Partners",
        icon: "🤝"
      },
      {
        value: 50,
        suffix: "+",
        label: "Research Projects",
        icon: "🔬"
      }
    ];
    $$renderer2.push(`<section id="stats-section" class="py-20 bg-gradient-to-br from-navy-900 to-primary-900 relative overflow-hidden"><div class="absolute inset-0 bg-hero-pattern opacity-20"></div> <div class="relative container-lg"><div class="text-center mb-12"><h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3">LJ University by the Numbers</h2> <p class="text-gray-300 max-w-xl mx-auto">A track record of academic excellence, industry partnerships, and student success.</p></div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"><!--[-->`);
    const each_array = ensure_array_like(stats);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let stat = each_array[i];
      $$renderer2.push(`<div class="text-center group"><div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors text-2xl">${escape_html(stat.icon)}</div> <div class="font-display text-4xl font-bold text-white flex items-center justify-center gap-0.5"><span>0</span><span>${escape_html(stat.suffix)}</span></div> <div class="text-sm text-gray-300 mt-1 font-medium">${escape_html(stat.label)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function DepartmentCards($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let departments = fallback($$props["departments"], () => [], true);
    const colors = [
      "from-blue-500 to-blue-700",
      "from-purple-500 to-purple-700",
      "from-emerald-500 to-emerald-700",
      "from-orange-500 to-orange-700",
      "from-rose-500 to-rose-700",
      "from-cyan-500 to-cyan-700",
      "from-amber-500 to-amber-700",
      "from-indigo-500 to-indigo-700",
      "from-teal-500 to-teal-700",
      "from-pink-500 to-pink-700"
    ];
    $$renderer2.push(`<section class="py-20 bg-gray-50"><div class="container-lg"><div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"><div><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Schools &amp; Institutes</p> <h2 class="section-title">Departments &amp; Schools</h2></div> <a href="/departments" class="btn-outline shrink-0">View All Departments</a></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">`);
    if (departments.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like([
        {
          title: "School of Engineering",
          slug: "engineering",
          desc: "B.Tech, M.Tech in CE, ME, EE, EC, IT",
          icon: "⚙️"
        },
        {
          title: "School of Computer Applications",
          slug: "computer-applications",
          desc: "BCA, MCA, B.Sc IT programs",
          icon: "💻"
        },
        {
          title: "School of Management",
          slug: "management",
          desc: "BBA, MBA, Executive Programs",
          icon: "📊"
        },
        {
          title: "School of Pharmacy",
          slug: "pharmacy",
          desc: "B.Pharm, M.Pharm, Pharm.D",
          icon: "💊"
        },
        {
          title: "School of Architecture",
          slug: "architecture",
          desc: "B.Arch, M.Arch programs",
          icon: "🏛️"
        },
        {
          title: "School of Design",
          slug: "design",
          desc: "B.Des in Product, Interior, Fashion",
          icon: "🎨"
        },
        {
          title: "School of Commerce",
          slug: "commerce",
          desc: "B.Com, M.Com, CA Foundation",
          icon: "💰"
        },
        {
          title: "School of Physiotherapy",
          slug: "physiotherapy",
          desc: "BPT, MPT programs",
          icon: "🏥"
        }
      ]);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let dept = each_array[i];
        $$renderer2.push(`<a${attr("href", `/departments/${stringify(dept.slug)}`)} class="card group p-6 hover:-translate-y-1 transition-all duration-300"><div${attr_class(`w-12 h-12 rounded-xl bg-gradient-to-br ${stringify(colors[i % colors.length])} flex items-center justify-center text-2xl mb-4 shadow-sm`)}>${escape_html(dept.icon)}</div> <h3 class="font-display font-semibold text-navy-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">${escape_html(dept.title)}</h3> <p class="text-sm text-gray-500 mb-4">${escape_html(dept.desc)}</p> <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(departments);
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let dept = each_array_1[i];
        const a = dept.attributes;
        $$renderer2.push(`<a${attr("href", `/departments/${stringify(a.slug)}`)} class="card group p-6 hover:-translate-y-1 transition-all duration-300">`);
        if (a.bannerImage?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="h-36 rounded-xl overflow-hidden mb-4 -mx-6 -mt-6"><img${attr("src", getImageUrl(a.bannerImage.data.attributes.formats?.small?.url ?? a.bannerImage.data.attributes.url))}${attr("alt", a.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div${attr_class(`w-12 h-12 rounded-xl bg-gradient-to-br ${stringify(colors[i % colors.length])} flex items-center justify-center text-2xl mb-4`)}>🏫</div>`);
        }
        $$renderer2.push(`<!--]--> <h3 class="font-display font-semibold text-navy-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">${escape_html(a.title)}</h3> `);
        if (a.shortDescription) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-sm text-gray-500 mb-4 line-clamp-2">${escape_html(a.shortDescription)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, { departments });
  });
}
function ProgramCards($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let programs = fallback($$props["programs"], () => [], true);
    const fallback$1 = [
      {
        title: "B.Tech Computer Science",
        degree: "B.Tech",
        duration: "4 Years",
        dept: "Engineering",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=70"
      },
      {
        title: "MBA Business Administration",
        degree: "MBA",
        duration: "2 Years",
        dept: "Management",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70"
      },
      {
        title: "B.Pharm Pharmacy",
        degree: "B.Pharm",
        duration: "4 Years",
        dept: "Pharmacy",
        img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=70"
      },
      {
        title: "B.Des Product Design",
        degree: "B.Des",
        duration: "4 Years",
        dept: "Design",
        img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&q=70"
      },
      {
        title: "BCA Computer Applications",
        degree: "BCA",
        duration: "3 Years",
        dept: "Computer Applications",
        img: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&q=70"
      },
      {
        title: "B.Arch Architecture",
        degree: "B.Arch",
        duration: "5 Years",
        dept: "Architecture",
        img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70"
      }
    ];
    $$renderer2.push(`<section class="py-20 bg-white"><div class="container-lg"><div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"><div><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Academic Programs</p> <h2 class="section-title">Featured Programs</h2> <p class="section-subtitle mt-3 max-w-xl">Explore our diverse range of undergraduate, postgraduate, and doctoral programs
          designed for the careers of tomorrow.</p></div> <a href="/programs" class="btn-outline shrink-0">All Programs</a></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">`);
    if (programs.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(fallback$1);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let prog = each_array[$$index];
        $$renderer2.push(`<article class="card group overflow-hidden"><div class="h-44 overflow-hidden"><img${attr("src", prog.img)}${attr("alt", prog.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/></div> <div class="p-6"><div class="flex items-center gap-2 mb-3"><span class="badge bg-primary-100 text-primary-700">${escape_html(prog.degree)}</span> <span class="badge bg-gray-100 text-gray-600">${escape_html(prog.duration)}</span></div> <h3 class="font-display font-semibold text-navy-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">${escape_html(prog.title)}</h3> <p class="text-sm text-gray-500 mb-4">${escape_html(prog.dept)}</p> <a href="/programs" class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></article>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(programs.slice(0, 6));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let prog = each_array_1[$$index_1];
        const a = prog.attributes;
        $$renderer2.push(`<article class="card group overflow-hidden">`);
        if (a.thumbnail?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="h-44 overflow-hidden"><img${attr("src", getImageUrl(a.thumbnail.data.attributes.formats?.small?.url ?? a.thumbnail.data.attributes.url))}${attr("alt", a.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="h-44 bg-gradient-to-br from-primary-100 to-navy-100 flex items-center justify-center"><span class="text-5xl opacity-50">🎓</span></div>`);
        }
        $$renderer2.push(`<!--]--> <div class="p-6"><div class="flex items-center gap-2 mb-3"><span class="badge bg-primary-100 text-primary-700">${escape_html(a.degreeType)}</span> `);
        if (a.duration) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="badge bg-gray-100 text-gray-600">${escape_html(a.duration)}</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <h3 class="font-display font-semibold text-navy-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">${escape_html(a.title)}</h3> `);
        if (a.department?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-sm text-gray-500 mb-3">${escape_html(a.department.data.attributes.title)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (a.fees) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-sm text-emerald-600 font-semibold mb-4">${escape_html(formatCurrency(a.fees))} / year</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <a${attr("href", `/programs/${stringify(a.slug)}`)} class="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></article>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, { programs });
  });
}
function EventsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let events = fallback($$props["events"], () => [], true);
    const fallback$1 = [
      {
        title: "Annual Tech Fest 2025",
        date: "2025-03-15",
        category: "Technical",
        venue: "Main Campus",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=70"
      },
      {
        title: "Campus Placement Drive – TCS",
        date: "2025-03-22",
        category: "Placement",
        venue: "Placement Cell",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=70"
      },
      {
        title: "Cultural Festival – Rang Utsav",
        date: "2025-04-05",
        category: "Cultural",
        venue: "Open Amphitheater",
        img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&q=70"
      }
    ];
    $$renderer2.push(`<section class="py-20 bg-gray-50"><div class="container-lg"><div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"><div><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">What's Happening</p> <h2 class="section-title">Events &amp; Announcements</h2></div> <a href="/events" class="btn-outline shrink-0">All Events</a></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">`);
    if (events.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(fallback$1);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let ev = each_array[$$index];
        $$renderer2.push(`<article class="card group overflow-hidden"><div class="h-48 overflow-hidden relative"><img${attr("src", ev.img)}${attr("alt", ev.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/> <div class="absolute top-3 left-3"><span class="badge bg-white text-primary-700 shadow-sm">${escape_html(ev.category)}</span></div></div> <div class="p-5"><div class="flex items-center gap-2 text-xs text-gray-500 mb-2"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${escape_html(formatDate(ev.date))} <span class="text-gray-300">·</span> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg> ${escape_html(ev.venue)}</div> <h3 class="font-display font-semibold text-navy-900 text-lg group-hover:text-primary-600 transition-colors">${escape_html(ev.title)}</h3></div></article>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(events.slice(0, 3));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let ev = each_array_1[$$index_1];
        const a = ev.attributes;
        $$renderer2.push(`<article class="card group overflow-hidden"><div class="h-48 overflow-hidden relative">`);
        if (a.image?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<img${attr("src", getImageUrl(a.image.data.attributes.formats?.small?.url ?? a.image.data.attributes.url))}${attr("alt", a.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="w-full h-full bg-gradient-to-br from-primary-100 to-navy-100 flex items-center justify-center text-5xl">📅</div>`);
        }
        $$renderer2.push(`<!--]--> `);
        if (a.category) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="absolute top-3 left-3"><span class="badge bg-white text-primary-700 shadow-sm">${escape_html(a.category)}</span></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <div class="p-5"><div class="flex items-center gap-2 text-xs text-gray-500 mb-2"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${escape_html(formatDate(a.date))} `);
        if (a.venue) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="text-gray-300">·</span> ${escape_html(a.venue)}`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <h3 class="font-display font-semibold text-navy-900 text-lg group-hover:text-primary-600 transition-colors"><a${attr("href", `/events/${stringify(a.slug)}`)}>${escape_html(a.title)}</a></h3></div></article>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, { events });
  });
}
function PlacementsSection($$renderer, $$props) {
  let placements = fallback($$props["placements"], () => [], true);
  const companies = [
    {
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png"
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png"
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/200px-Wipro_Primary_Logo_Color_RGB.svg.png"
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png"
    },
    {
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/200px-Deloitte.svg.png"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png"
    }
  ];
  const placementStats = [
    { value: "95%", label: "Overall Placement Rate" },
    { value: "₹8.5 LPA", label: "Average Package" },
    { value: "₹42 LPA", label: "Highest Package" },
    { value: "150+", label: "Recruiting Companies" }
  ];
  $$renderer.push(`<section class="py-20 bg-white"><div class="container-lg"><div class="text-center mb-12"><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Career Success</p> <h2 class="section-title">Placements &amp; Recruiters</h2> <p class="section-subtitle mt-3 max-w-2xl mx-auto">Our students are placed at India's top companies with exceptional packages.
        Industry-aligned curriculum ensures every graduate is job-ready.</p></div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14"><!--[-->`);
  const each_array = ensure_array_like(placementStats);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$renderer.push(`<div class="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-navy-50 border border-primary-100"><div class="font-display text-3xl font-bold text-primary-700 mb-1">${escape_html(stat.value)}</div> <div class="text-sm text-gray-600 font-medium">${escape_html(stat.label)}</div></div>`);
  }
  $$renderer.push(`<!--]--></div> <div><p class="text-center text-sm text-gray-500 font-semibold uppercase tracking-wider mb-6">Top Recruiters</p> <div class="grid grid-cols-4 md:grid-cols-8 gap-4"><!--[-->`);
  const each_array_1 = ensure_array_like(companies);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let company = each_array_1[$$index_1];
    $$renderer.push(`<div class="flex items-center justify-center p-3 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all duration-200 h-14"><img${attr("src", company.logo)}${attr("alt", company.name)} class="max-h-7 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy"/></div>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="text-center mt-10"><a href="/placements" class="btn-primary">View Placement Details</a></div></div></section>`);
  bind_props($$props, { placements });
}
function GalleryPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let items = fallback($$props["items"], () => [], true);
    const fallback$1 = [
      {
        url: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
        caption: "Main Campus",
        span: "col-span-2 row-span-2"
      },
      {
        url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
        caption: "Library",
        span: ""
      },
      {
        url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
        caption: "Classrooms",
        span: ""
      },
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
        caption: "Sports Complex",
        span: ""
      },
      {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
        caption: "Tech Fest",
        span: ""
      },
      {
        url: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=400&q=80",
        caption: "Labs",
        span: ""
      }
    ];
    $$renderer2.push(`<section class="py-20 bg-white"><div class="container-lg"><div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"><div><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Campus Life</p> <h2 class="section-title">University Gallery</h2></div> <a href="/gallery" class="btn-outline shrink-0">View All Photos</a></div> <div class="grid grid-cols-3 md:grid-cols-4 gap-3 h-96 md:h-[480px]">`);
    if (items.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(fallback$1);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let item = each_array[i];
        $$renderer2.push(`<div${attr_class(`overflow-hidden rounded-2xl ${stringify(item.span)} group cursor-pointer relative`)}${attr_style(i === 0 ? "grid-column: span 2; grid-row: span 2;" : "")}><img${attr("src", item.url)}${attr("alt", item.caption)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3"><span class="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full">${escape_html(item.caption)}</span></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(items.slice(0, 6));
      for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
        let item = each_array_1[i];
        const a = item.attributes;
        $$renderer2.push(`<div class="overflow-hidden rounded-2xl group cursor-pointer relative"${attr_style(i === 0 ? "grid-column: span 2; grid-row: span 2;" : "")}><img${attr("src", getImageUrl(a.image.data.attributes.formats?.medium?.url ?? a.image.data.attributes.url))}${attr("alt", a.caption ?? a.title ?? "")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3">`);
        if (a.caption) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full">${escape_html(a.caption)}</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, { items });
  });
}
function TestimonialsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let testimonials = fallback($$props["testimonials"], () => [], true);
    const fallback$1 = [
      {
        name: "Arjun Patel",
        course: "B.Tech Computer Science, 2023",
        role: "Software Engineer at Google",
        review: "LJ University gave me not just a degree but a mindset. The practical labs, industry mentors, and placement support were outstanding. I joined Google within 3 months of graduating.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        rating: 5
      },
      {
        name: "Priya Shah",
        course: "MBA, 2022",
        role: "Marketing Manager at Infosys",
        review: "The MBA program here is highly industry-relevant. The faculty brings real-world experience, and the networking opportunities are incredible. Best decision of my career.",
        img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
        rating: 5
      },
      {
        name: "Rahul Mehta",
        course: "B.Des Product Design, 2023",
        role: "UX Designer at Flipkart",
        review: "The Design school has state-of-the-art studios and a curriculum that pushes creative boundaries. My portfolio from LJ helped me land my dream job at Flipkart.",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
        rating: 5
      }
    ];
    function stars(n) {
      return Array.from({ length: 5 }, (_, i) => i < n);
    }
    $$renderer2.push(`<section class="py-20 bg-gradient-to-br from-navy-900 to-primary-900 relative overflow-hidden"><div class="absolute inset-0 bg-hero-pattern opacity-10"></div> <div class="relative container-lg"><div class="text-center mb-12"><p class="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">Student Stories</p> <h2 class="font-display text-3xl sm:text-4xl font-bold text-white">What Our Students Say</h2></div> `);
    if (testimonials.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      const each_array = ensure_array_like(fallback$1);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let t = each_array[$$index_1];
        $$renderer2.push(`<div class="glass rounded-2xl p-7"><div class="flex gap-1 mb-4"><!--[-->`);
        const each_array_1 = ensure_array_like(stars(t.rating));
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let filled = each_array_1[$$index];
          $$renderer2.push(`<svg${attr_class(`w-4 h-4 ${filled ? "text-gold-400" : "text-gray-600"}`)} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
        }
        $$renderer2.push(`<!--]--></div> <blockquote class="text-gray-200 text-sm leading-relaxed mb-6 italic">"${escape_html(t.review)}"</blockquote> <div class="flex items-center gap-3"><img${attr("src", t.img)}${attr("alt", t.name)} class="w-10 h-10 rounded-full object-cover border-2 border-white/20" loading="lazy"/> <div><div class="font-semibold text-white text-sm">${escape_html(t.name)}</div> <div class="text-xs text-gray-400">${escape_html(t.course)}</div> <div class="text-xs text-gold-400">${escape_html(t.role)}</div></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
      const each_array_2 = ensure_array_like(testimonials.slice(0, 3));
      for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
        let t = each_array_2[$$index_3];
        const a = t.attributes;
        $$renderer2.push(`<div class="glass rounded-2xl p-7">`);
        if (a.rating) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex gap-1 mb-4"><!--[-->`);
          const each_array_3 = ensure_array_like(Array(5));
          for (let i = 0, $$length2 = each_array_3.length; i < $$length2; i++) {
            each_array_3[i];
            $$renderer2.push(`<svg${attr_class(`w-4 h-4 ${i < a.rating ? "text-gold-400" : "text-gray-600"}`)} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <blockquote class="text-gray-200 text-sm leading-relaxed mb-6 italic">"${escape_html(a.review)}"</blockquote> <div class="flex items-center gap-3">`);
        if (a.image?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<img${attr("src", getImageUrl(a.image.data.attributes.url))}${attr("alt", a.studentName)} class="w-10 h-10 rounded-full object-cover border-2 border-white/20" loading="lazy"/>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">${escape_html(a.studentName.charAt(0))}</div>`);
        }
        $$renderer2.push(`<!--]--> <div><div class="font-semibold text-white text-sm">${escape_html(a.studentName)}</div> `);
        if (a.course) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="text-xs text-gray-400">${escape_html(a.course)}</div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (a.currentRole) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="text-xs text-gold-400">${escape_html(a.currentRole)}`);
          if (a.company) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`at ${escape_html(a.company)}`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    bind_props($$props, { testimonials });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    SEOHead($$renderer2, {
      meta: {
        title: "LJ University – Shaping Tomorrow's Leaders | Ahmedabad",
        description: "LJ University, Ahmedabad – NAAC A+ accredited institution offering engineering, management, pharmacy, design, and 30+ programs. Apply now for 2025–26 admissions.",
        keywords: "LJ University, Ahmedabad, Engineering College, MBA, B.Tech, Pharmacy, Design, Admissions 2025"
      }
    });
    $$renderer2.push(`<!----> `);
    HeroSection($$renderer2);
    $$renderer2.push(`<!----> <section class="py-16 bg-white"><div class="container-lg"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="animate-on-scroll"><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">About LJ University</p> <h2 class="section-title mb-4">A Legacy of Excellence in Higher Education</h2> <p class="section-subtitle mb-4">Established in 2011, LJ University has grown to become one of Gujarat's most respected and innovative universities.
          With NAAC A+ accreditation and UGC recognition, we offer a transformative learning environment.</p> <p class="text-gray-600 leading-relaxed mb-6">Spread across a modern campus in Ahmedabad, our 10 schools and institutes offer programs in Engineering, Management,
          Pharmacy, Design, Architecture, Commerce, and more — all designed with industry relevance at their core.</p> <div class="flex flex-wrap gap-3 mb-8"><!--[-->`);
    const each_array = ensure_array_like([
      "NAAC A+ Accredited",
      "UGC Recognized",
      "NBA Accredited",
      "AICTE Approved"
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let badge = each_array[$$index];
      $$renderer2.push(`<span class="badge bg-primary-100 text-primary-700 px-3 py-1 text-sm font-semibold">${escape_html(badge)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <a href="/about" class="btn-primary">Learn More About Us</a></div> <div class="relative animate-on-scroll"><div class="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&amp;q=80" alt="LJ University Campus" class="w-full h-full object-cover" loading="lazy"/></div> <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 w-44"><div class="text-3xl font-display font-bold text-primary-600">14+</div> <div class="text-sm text-gray-600">Years of Excellence</div></div> <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card p-5 w-44"><div class="text-3xl font-display font-bold text-emerald-600">A+</div> <div class="text-sm text-gray-600">NAAC Grade</div></div></div></div></div></section> `);
    StatisticsSection($$renderer2);
    $$renderer2.push(`<!----> `);
    DepartmentCards($$renderer2, { departments: data.departments });
    $$renderer2.push(`<!----> `);
    ProgramCards($$renderer2, { programs: data.programs });
    $$renderer2.push(`<!----> <section class="py-20 bg-white"><div class="container-lg"><div class="text-center mb-12"><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Purpose</p> <h2 class="section-title">Vision &amp; Mission</h2></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="card p-8 border-l-4 border-primary-500 animate-on-scroll"><div class="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mb-5">🔭</div> <h3 class="font-display text-2xl font-bold text-navy-900 mb-4">Our Vision</h3> <p class="text-gray-600 leading-relaxed">To be a globally recognized center of excellence in higher education, producing innovative leaders
          and thinkers who drive sustainable progress in a rapidly changing world.</p></div> <div class="card p-8 border-l-4 border-gold-500 animate-on-scroll"><div class="w-12 h-12 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center text-2xl mb-5">🎯</div> <h3 class="font-display text-2xl font-bold text-navy-900 mb-4">Our Mission</h3> <p class="text-gray-600 leading-relaxed">To deliver transformative, industry-aligned education through innovation, research, and collaboration —
          empowering every student to realize their fullest potential and contribute meaningfully to society.</p></div></div></div></section> `);
    EventsSection($$renderer2, { events: data.events });
    $$renderer2.push(`<!----> `);
    PlacementsSection($$renderer2, { placements: data.placements });
    $$renderer2.push(`<!----> `);
    GalleryPreview($$renderer2, { items: data.gallery });
    $$renderer2.push(`<!----> `);
    TestimonialsSection($$renderer2, { testimonials: data.testimonials });
    $$renderer2.push(`<!----> <section class="py-20 bg-gray-50"><div class="container-lg"><div class="text-center mb-12"><p class="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Innovation Ecosystem</p> <h2 class="section-title">Research &amp; Initiatives</h2></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
    const each_array_1 = ensure_array_like([
      {
        icon: "🔬",
        title: "Research Centers",
        desc: "12 active research labs across disciplines",
        color: "bg-blue-50 text-blue-600"
      },
      {
        icon: "🚀",
        title: "Startup Incubator",
        desc: "50+ startups incubated with seed funding",
        color: "bg-purple-50 text-purple-600"
      },
      {
        icon: "🌍",
        title: "Global Partnerships",
        desc: "MOUs with 20+ international universities",
        color: "bg-emerald-50 text-emerald-600"
      },
      {
        icon: "🏆",
        title: "Industry Connect",
        desc: "150+ industry partners for live projects",
        color: "bg-orange-50 text-orange-600"
      }
    ]);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$renderer2.push(`<div class="card p-6 text-center animate-on-scroll"><div${attr_class(`w-14 h-14 rounded-2xl ${stringify(item.color)} flex items-center justify-center text-3xl mx-auto mb-4`)}>${escape_html(item.icon)}</div> <h3 class="font-display font-semibold text-navy-900 text-lg mb-2">${escape_html(item.title)}</h3> <p class="text-sm text-gray-500">${escape_html(item.desc)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-center mt-8"><a href="/research" class="btn-outline">Explore Research</a></div></div></section> `);
    CTABanner($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
