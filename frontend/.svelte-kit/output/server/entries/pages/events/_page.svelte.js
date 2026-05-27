import { e as ensure_array_like, b as attr_class, f as escape_html, a as attr, l as stringify, d as bind_props } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { g as getImageUrl } from "../../../chunks/api.js";
import { a as formatDate } from "../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredEvents;
    let data = $$props["data"];
    const fallbackEvents = [
      {
        title: "Annual Tech Fest – Lakshya 2025",
        date: "2025-03-15",
        category: "Technical",
        venue: "Main Campus",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=70"
      },
      {
        title: "Campus Placement Drive – TCS & Infosys",
        date: "2025-03-22",
        category: "Placement",
        venue: "Placement Cell",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=70"
      },
      {
        title: "Cultural Festival – Rang Utsav 2025",
        date: "2025-04-05",
        category: "Cultural",
        venue: "Open Amphitheater",
        img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&q=70"
      },
      {
        title: "International Conference on AI & ML",
        date: "2025-04-18",
        category: "Academic",
        venue: "Seminar Hall",
        img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=70"
      },
      {
        title: "Sports Meet – LJ Olympiad 2025",
        date: "2025-02-20",
        category: "Sports",
        venue: "Sports Complex",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=70"
      },
      {
        title: "Entrepreneurship Summit 2025",
        date: "2025-05-10",
        category: "Workshop",
        venue: "Incubation Center",
        img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=70"
      }
    ];
    const categories = [
      "All",
      "Academic",
      "Cultural",
      "Sports",
      "Technical",
      "Workshop",
      "Seminar",
      "Placement"
    ];
    let activeCategory = "All";
    filteredEvents = data.events.length > 0 ? data.events.filter((e) => activeCategory === "All") : fallbackEvents.filter((e) => activeCategory === "All");
    SEOHead($$renderer2, {
      meta: {
        title: "Events & News",
        description: "Stay updated with the latest events, academic activities, cultural fests, and news at LJ University."
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: "Events & News",
      subtitle: "Stay informed about the latest happenings, achievements, and events at LJ University.",
      breadcrumbs: [{ label: "Events" }]
    });
    $$renderer2.push(`<!----> <section class="py-16 bg-gray-50"><div class="container-lg"><div class="flex flex-wrap gap-2 mb-10"><!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let cat = each_array[$$index];
      $$renderer2.push(`<button${attr_class("px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200", void 0, {
        "bg-primary-600": activeCategory === cat,
        "text-white": activeCategory === cat,
        "bg-white": activeCategory !== cat,
        "text-gray-600": activeCategory !== cat,
        "border": activeCategory !== cat,
        "border-gray-200": activeCategory !== cat,
        "hover:border-primary-300": activeCategory !== cat
      })}>${escape_html(cat)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`);
    if (data.events.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(filteredEvents);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let ev = each_array_1[$$index_1];
        $$renderer2.push(`<article class="card group overflow-hidden hover:-translate-y-1 transition-all duration-300"><div class="h-48 overflow-hidden relative"><img${attr("src", ev.img)}${attr("alt", ev.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/> <div class="absolute top-3 left-3"><span class="badge bg-white text-primary-700 shadow-sm">${escape_html(ev.category)}</span></div></div> <div class="p-5"><div class="flex items-center gap-2 text-xs text-gray-500 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${escape_html(formatDate(ev.date))} <span>·</span> ${escape_html(ev.venue)}</div> <h2 class="font-display font-bold text-navy-900 text-lg group-hover:text-primary-600 transition-colors">${escape_html(ev.title)}</h2></div></article>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(filteredEvents);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let ev = each_array_2[$$index_2];
        const a = ev.attributes;
        $$renderer2.push(`<article class="card group overflow-hidden hover:-translate-y-1 transition-all duration-300"><div class="h-48 overflow-hidden relative">`);
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
        $$renderer2.push(`<!--]--></div> <div class="p-5"><div class="flex items-center gap-2 text-xs text-gray-500 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> ${escape_html(formatDate(a.date))} `);
        if (a.venue) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span>·</span>${escape_html(a.venue)}`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <h2 class="font-display font-bold text-navy-900 text-lg group-hover:text-primary-600 transition-colors"><a${attr("href", `/events/${stringify(a.slug)}`)}>${escape_html(a.title)}</a></h2></div></article>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
