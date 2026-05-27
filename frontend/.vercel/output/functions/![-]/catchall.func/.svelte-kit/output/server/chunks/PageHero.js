import { g as fallback, a as attr, e as ensure_array_like, f as escape_html, d as bind_props } from "./root.js";
function PageHero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let title = $$props["title"];
    let subtitle = fallback($$props["subtitle"], "");
    let image = fallback($$props["image"], "");
    let breadcrumbs = fallback($$props["breadcrumbs"], () => [], true);
    $$renderer2.push(`<div class="relative pt-[72px] overflow-hidden">`);
    if (image) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="absolute inset-0"><img${attr("src", image)} alt="" class="w-full h-full object-cover"/> <div class="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-900/50"></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="absolute inset-0 bg-gradient-to-br from-navy-900 to-primary-900"></div> <div class="absolute inset-0 bg-hero-pattern opacity-10"></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="relative container-lg py-20">`);
    if (breadcrumbs.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<nav class="flex items-center gap-2 text-sm text-white/60 mb-4"><a href="/" class="hover:text-white transition-colors">Home</a> <!--[-->`);
      const each_array = ensure_array_like(breadcrumbs);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let crumb = each_array[$$index];
        $$renderer2.push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`);
        if (crumb.href) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<a${attr("href", crumb.href)} class="hover:text-white transition-colors">${escape_html(crumb.label)}</a>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<span class="text-white">${escape_html(crumb.label)}</span>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></nav>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">${escape_html(title)}</h1> `);
    if (subtitle) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="text-lg text-gray-200 max-w-2xl">${escape_html(subtitle)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { title, subtitle, image, breadcrumbs });
  });
}
export {
  PageHero as P
};
