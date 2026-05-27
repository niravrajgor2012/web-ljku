import { e as ensure_array_like, b as attr_class, f as escape_html, a as attr, d as bind_props } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { g as getImageUrl } from "../../../chunks/api.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filtered;
    let data = $$props["data"];
    const fallback = [
      {
        url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
        caption: "Main Campus",
        cat: "Campus"
      },
      {
        url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
        caption: "Central Library",
        cat: "Campus"
      },
      {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
        caption: "Tech Fest 2024",
        cat: "Events"
      },
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
        caption: "Sports Complex",
        cat: "Sports"
      },
      {
        url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
        caption: "Cultural Fest",
        cat: "Cultural"
      },
      {
        url: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?w=600&q=80",
        caption: "Research Lab",
        cat: "Academic"
      },
      {
        url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
        caption: "Smart Classrooms",
        cat: "Academic"
      },
      {
        url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
        caption: "Placement Drive",
        cat: "Placements"
      },
      {
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
        caption: "Convocation 2024",
        cat: "Academic"
      },
      {
        url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
        caption: "Student Lounge",
        cat: "Student-Life"
      },
      {
        url: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=600&q=80",
        caption: "Group Study",
        cat: "Student-Life"
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
        caption: "Hackathon",
        cat: "Events"
      }
    ];
    const categories = [
      "All",
      "Campus",
      "Events",
      "Sports",
      "Cultural",
      "Academic",
      "Placements",
      "Student-Life",
      "Infrastructure"
    ];
    let activeCategory = "All";
    filtered = data.gallery.length > 0 ? data.gallery : fallback;
    SEOHead($$renderer2, {
      meta: {
        title: "Gallery",
        description: "Explore LJ University campus, events, sports, and student life through our photo gallery."
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: "University Gallery",
      subtitle: "Moments from campus life, events, achievements, and more.",
      breadcrumbs: [{ label: "Gallery" }]
    });
    $$renderer2.push(`<!----> <section class="py-16 bg-gray-50"><div class="container-lg"><div class="flex flex-wrap gap-2 mb-8"><!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let cat = each_array[$$index];
      $$renderer2.push(`<button${attr_class("px-4 py-2 rounded-xl text-sm font-semibold transition-all", void 0, {
        "bg-navy-900": activeCategory === cat,
        "text-white": activeCategory === cat,
        "bg-white": activeCategory !== cat,
        "text-gray-600": activeCategory !== cat,
        "border": activeCategory !== cat,
        "border-gray-200": activeCategory !== cat
      })}>${escape_html(cat)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">`);
    if (data.gallery.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(filtered);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let item = each_array_1[$$index_1];
        $$renderer2.push(`<div class="break-inside-avoid mb-4"><button class="group w-full block rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow"><img${attr("src", item.url)}${attr("alt", item.caption)} class="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/></button> `);
        if (item.caption) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-xs text-gray-500 mt-1.5 text-center">${escape_html(item.caption)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(filtered);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let item = each_array_2[$$index_2];
        const a = item.attributes;
        $$renderer2.push(`<div class="break-inside-avoid mb-4"><button class="group w-full block rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow"><img${attr("src", getImageUrl(a.image.data.attributes.formats?.medium?.url ?? a.image.data.attributes.url))}${attr("alt", a.caption ?? "")} class="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/></button> `);
        if (a.caption) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-xs text-gray-500 mt-1.5 text-center">${escape_html(a.caption)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
