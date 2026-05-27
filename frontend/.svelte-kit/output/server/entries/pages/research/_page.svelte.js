import { e as ensure_array_like, f as escape_html } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { C as CTABanner } from "../../../chunks/CTABanner.js";
function _page($$renderer) {
  const centers = [
    {
      name: "Center for AI & Machine Learning",
      desc: "Cutting-edge research in deep learning, NLP, and computer vision.",
      publications: 45,
      grants: "₹2.5 Cr",
      icon: "🤖"
    },
    {
      name: "Center for Sustainable Engineering",
      desc: "Green technology, renewable energy, and sustainable materials research.",
      publications: 32,
      grants: "₹1.8 Cr",
      icon: "🌱"
    },
    {
      name: "Center for Drug Discovery",
      desc: "Novel drug synthesis, pharmacokinetics, and clinical research.",
      publications: 58,
      grants: "₹3.2 Cr",
      icon: "💊"
    },
    {
      name: "Startup Incubation Center",
      desc: "50+ startups incubated. Seed funding up to ₹25 Lakhs.",
      publications: 0,
      grants: "₹5 Cr",
      icon: "🚀"
    },
    {
      name: "Center for Design Innovation",
      desc: "Human-centered design, UX research, and product innovation.",
      publications: 28,
      grants: "₹1.2 Cr",
      icon: "🎨"
    },
    {
      name: "Center for Smart Infrastructure",
      desc: "IoT, smart cities, and intelligent transportation systems.",
      publications: 36,
      grants: "₹2.1 Cr",
      icon: "🏙️"
    }
  ];
  SEOHead($$renderer, {
    meta: {
      title: "Research & Innovation",
      description: "Discover LJ University's research centers, innovation labs, startup incubator, and cutting-edge research projects."
    }
  });
  $$renderer.push(`<!----> `);
  PageHero($$renderer, {
    title: "Research & Innovation",
    subtitle: "Pioneering research across disciplines, driving innovation and real-world impact.",
    breadcrumbs: [{ label: "Research" }]
  });
  $$renderer.push(`<!----> <section class="py-20 bg-white"><div class="container-lg"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"><!--[-->`);
  const each_array = ensure_array_like(centers);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let center = each_array[$$index];
    $$renderer.push(`<div class="card p-7 hover:-translate-y-1 transition-all duration-300"><div class="text-4xl mb-4">${escape_html(center.icon)}</div> <h2 class="font-display font-bold text-navy-900 text-xl mb-3">${escape_html(center.name)}</h2> <p class="text-gray-500 text-sm leading-relaxed mb-5">${escape_html(center.desc)}</p> <div class="flex gap-4 text-sm">`);
    if (center.publications > 0) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<div class="bg-primary-50 text-primary-700 rounded-xl px-3 py-1.5 font-semibold">${escape_html(center.publications)} Publications</div>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--> <div class="bg-emerald-50 text-emerald-700 rounded-xl px-3 py-1.5 font-semibold">${escape_html(center.grants)} Grants</div></div></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"><!--[-->`);
  const each_array_1 = ensure_array_like([
    { value: "300+", label: "Research Publications" },
    { value: "₹15 Cr+", label: "Research Funding" },
    { value: "50+", label: "Patents Filed" },
    { value: "20+", label: "International Collaborations" }
  ]);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let stat = each_array_1[$$index_1];
    $$renderer.push(`<div class="bg-gradient-to-br from-navy-900 to-primary-800 rounded-2xl p-6 text-white"><div class="font-display text-3xl font-bold mb-1">${escape_html(stat.value)}</div> <div class="text-sm text-gray-200">${escape_html(stat.label)}</div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> `);
  CTABanner($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
