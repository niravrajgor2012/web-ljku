import { e as ensure_array_like, f as escape_html, a as attr } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { C as CTABanner } from "../../../chunks/CTABanner.js";
function _page($$renderer) {
  const activities = [
    {
      title: "Student Clubs & Societies",
      desc: "50+ clubs covering coding, robotics, drama, music, dance, photography, and more.",
      icon: "🎭",
      count: "50+ Clubs"
    },
    {
      title: "Sports & Fitness",
      desc: "World-class sports complex with cricket, football, basketball, volleyball, badminton courts, and gym.",
      icon: "⚽",
      count: "12 Sports"
    },
    {
      title: "Cultural Festivals",
      desc: "Annual cultural fest, technical fest, management fest, and inter-college competitions.",
      icon: "🎉",
      count: "5 Annual Fests"
    },
    {
      title: "Hostel Life",
      desc: "Fully furnished, secure, and comfortable hostels for boys and girls with 24/7 amenities.",
      icon: "🏠",
      count: "2000+ Seats"
    },
    {
      title: "Cafeteria & Dining",
      desc: "Multiple food courts, cafeterias, and canteens with diverse and healthy food options.",
      icon: "🍽️",
      count: "5 Outlets"
    },
    {
      title: "Health & Wellness",
      desc: "On-campus medical center, counseling services, yoga studio, and mental health support.",
      icon: "🏥",
      count: "24/7 Medical"
    }
  ];
  SEOHead($$renderer, {
    meta: {
      title: "Student Life",
      description: "Experience vibrant student life at LJ University – clubs, sports, cultural fests, hostels, and more."
    }
  });
  $$renderer.push(`<!----> `);
  PageHero($$renderer, {
    title: "Student Life",
    subtitle: "Beyond academics — LJ University offers a vibrant, enriching campus experience.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1600&q=80",
    breadcrumbs: [{ label: "Student Life" }]
  });
  $$renderer.push(`<!----> <section class="py-20 bg-white"><div class="container-lg"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"><!--[-->`);
  const each_array = ensure_array_like(activities);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let act = each_array[$$index];
    $$renderer.push(`<div class="card p-7"><div class="text-4xl mb-4">${escape_html(act.icon)}</div> <div class="inline-block badge bg-primary-100 text-primary-700 mb-3">${escape_html(act.count)}</div> <h2 class="font-display font-bold text-navy-900 text-xl mb-3">${escape_html(act.title)}</h2> <p class="text-gray-500 text-sm leading-relaxed">${escape_html(act.desc)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div> <div><h2 class="section-title text-center mb-8">Life on Campus</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
  const each_array_1 = ensure_array_like([
    {
      url: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=400&q=80",
      alt: "Students studying"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      alt: "Sports"
    },
    {
      url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80",
      alt: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&q=80",
      alt: "Campus life"
    }
  ]);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let img = each_array_1[$$index_1];
    $$renderer.push(`<div class="rounded-2xl overflow-hidden aspect-square"><img${attr("src", img.url)}${attr("alt", img.alt)} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy"/></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section> `);
  CTABanner($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
