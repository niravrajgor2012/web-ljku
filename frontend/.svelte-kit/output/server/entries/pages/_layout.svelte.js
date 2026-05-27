import { g as fallback, e as ensure_array_like, f as escape_html, b as attr_class, a as attr, k as store_get, u as unsubscribe_stores, d as bind_props, j as slot } from "../../chunks/root.js";
import { p as page } from "../../chunks/stores.js";
function MobileMenu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let open = fallback($$props["open"], false);
    let links = fallback($$props["links"], () => [], true);
    let expandedItem = null;
    if (open) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 bg-black/50 z-50 lg:hidden" role="presentation"></div> <div class="fixed top-0 left-0 h-full w-80 max-w-[90vw] bg-white z-50 lg:hidden overflow-y-auto" role="dialog" aria-modal="true" aria-label="Navigation menu"><div class="flex items-center justify-between p-5 border-b border-gray-100"><a href="/" class="flex items-center gap-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-navy-800 flex items-center justify-center"><span class="text-white font-display font-bold">LJ</span></div> <span class="font-display font-bold text-navy-900">LJ University</span></a> <button class="p-2 rounded-lg hover:bg-gray-100 text-gray-500" aria-label="Close menu"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <nav class="p-4"><ul class="space-y-1"><!--[-->`);
      const each_array = ensure_array_like(links);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let link = each_array[$$index_1];
        $$renderer2.push(`<li>`);
        if (link.children) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<button class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"><span>${escape_html(link.label)}</span> <svg${attr_class(`w-4 h-4 transition-transform ${expandedItem === link.label ? "rotate-180" : ""}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
          if (expandedItem === link.label) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<ul class="ml-4 mt-1 space-y-1"><!--[-->`);
            const each_array_1 = ensure_array_like(link.children);
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let child = each_array_1[$$index];
              $$renderer2.push(`<li><a${attr("href", child.href)}${attr_class("block px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors", void 0, {
                "text-primary-600": store_get($$store_subs ??= {}, "$page", page).url.pathname === child.href,
                "font-semibold": store_get($$store_subs ??= {}, "$page", page).url.pathname === child.href
              })}>${escape_html(child.label)}</a></li>`);
            }
            $$renderer2.push(`<!--]--></ul>`);
          } else {
            $$renderer2.push("<!--[-1-->");
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<a${attr("href", link.href)}${attr_class("block px-4 py-3 rounded-xl font-medium transition-colors", void 0, {
            "text-primary-600": store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href,
            "bg-primary-50": store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href,
            "text-gray-700": store_get($$store_subs ??= {}, "$page", page).url.pathname !== link.href,
            "hover:bg-gray-50": store_get($$store_subs ??= {}, "$page", page).url.pathname !== link.href
          })}>${escape_html(link.label)}</a>`);
        }
        $$renderer2.push(`<!--]--></li>`);
      }
      $$renderer2.push(`<!--]--></ul> <div class="mt-6 pt-6 border-t border-gray-100 space-y-3"><a href="/admissions" class="btn-primary w-full justify-center">Apply Now</a> <a href="/contact" class="btn-outline w-full justify-center">Contact Us</a></div></nav></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { open, links });
  });
}
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let scrolled = false;
    let mobileOpen = false;
    const navLinks = [
      { label: "About", href: "/about" },
      {
        label: "Academics",
        href: "#",
        children: [
          { label: "Departments", href: "/departments" },
          { label: "Programs", href: "/programs" },
          { label: "Faculty", href: "/faculty" },
          { label: "Research & Innovation", href: "/research" }
        ]
      },
      { label: "Admissions", href: "/admissions" },
      { label: "Placements", href: "/placements" },
      {
        label: "Campus Life",
        href: "#",
        children: [
          { label: "Student Life", href: "/student-life" },
          { label: "Events", href: "/events" },
          { label: "Gallery", href: "/gallery" }
        ]
      },
      { label: "Contact", href: "/contact" }
    ];
    function isActive(href) {
      return store_get($$store_subs ??= {}, "$page", page).url.pathname === href || store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith(href + "/");
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<header${attr_class("fixed top-0 left-0 right-0 z-50 transition-all duration-300", void 0, {
        "bg-white": scrolled,
        "shadow-soft": scrolled,
        "bg-transparent": !scrolled
      })}><div class="container-lg"><nav class="flex items-center justify-between h-[72px]"><a href="/" class="flex items-center gap-3 flex-shrink-0"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-navy-800 flex items-center justify-center shadow-md"><span class="text-white font-display font-bold text-lg">LJ</span></div> <div class="hidden sm:block"><div${attr_class("font-display font-bold text-navy-900 text-lg leading-tight", void 0, { "text-white": !scrolled })}>LJ University</div> <div${attr_class("text-xs text-gray-500 leading-tight", void 0, { "text-white": !scrolled, "opacity-80": !scrolled })}>Ahmedabad, Gujarat</div></div></a> <ul class="hidden lg:flex items-center gap-1"><!--[-->`);
      const each_array = ensure_array_like(navLinks);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let link = each_array[$$index_1];
        $$renderer3.push(`<li class="relative group">`);
        if (link.children) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<button${attr_class("flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200", void 0, {
            "text-white": !scrolled,
            "hover:text-primary-600": scrolled,
            "text-gray-700": scrolled,
            "hover:bg-gray-100": scrolled,
            "hover:bg-white": !scrolled,
            "hover:text-navy-900": !scrolled
          })}>${escape_html(link.label)} <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> <div class="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"><ul class="py-2"><!--[-->`);
          const each_array_1 = ensure_array_like(link.children);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let child = each_array_1[$$index];
            $$renderer3.push(`<li><a${attr("href", child.href)}${attr_class("block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors", void 0, {
              "font-semibold": isActive(child.href),
              "text-primary-600": isActive(child.href)
            })}>${escape_html(child.label)}</a></li>`);
          }
          $$renderer3.push(`<!--]--></ul></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<a${attr("href", link.href)}${attr_class("px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200", void 0, {
            "text-white": !isActive(link.href),
            "text-gray-700": scrolled,
            "text-primary-600": isActive(link.href),
            "font-semibold": isActive(link.href),
            "hover:bg-gray-100": scrolled,
            "hover:bg-white": !isActive(link.href),
            "hover:text-navy-900": !scrolled
          })}>${escape_html(link.label)}</a>`);
        }
        $$renderer3.push(`<!--]--></li>`);
      }
      $$renderer3.push(`<!--]--></ul> <div class="flex items-center gap-3"><a href="/admissions" class="hidden md:inline-flex btn-primary py-2 text-sm">Apply Now</a> <button${attr_class("lg:hidden p-2 rounded-lg transition-colors", void 0, {
        "text-white": !scrolled,
        "text-gray-700": scrolled,
        "hover:bg-white": !scrolled,
        "hover:bg-gray-100": scrolled
      })} aria-label="Open menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></nav></div></header> `);
      MobileMenu($$renderer3, {
        links: navLinks,
        get open() {
          return mobileOpen;
        },
        set open($$value) {
          mobileOpen = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const footerLinks = {
      Academics: [
        { label: "Departments", href: "/departments" },
        { label: "Programs", href: "/programs" },
        { label: "Faculty", href: "/faculty" },
        { label: "Research", href: "/research" }
      ],
      Admissions: [
        { label: "Apply Now", href: "/admissions" },
        { label: "Eligibility", href: "/admissions#eligibility" },
        { label: "Fee Structure", href: "/admissions#fees" },
        { label: "FAQ", href: "/faq" }
      ],
      "Campus Life": [
        { label: "Student Life", href: "/student-life" },
        { label: "Events", href: "/events" },
        { label: "Gallery", href: "/gallery" },
        { label: "Placements", href: "/placements" }
      ],
      University: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "News", href: "/events" }
      ]
    };
    $$renderer2.push(`<footer class="bg-navy-950 text-gray-300"><div class="w-full overflow-hidden leading-none"><svg viewBox="0 0 1440 60" class="w-full h-12 fill-gray-50"><path d="M0,60 C240,20 480,0 720,20 C960,40 1200,60 1440,40 L1440,0 L0,0 Z"></path></svg></div> <div class="container-lg py-16"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"><div class="lg:col-span-2"><a href="/" class="flex items-center gap-3 mb-5"><div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center"><span class="text-white font-display font-bold text-lg">LJ</span></div> <div><div class="font-display font-bold text-white text-lg">LJ University</div> <div class="text-xs text-gray-400">Ahmedabad, Gujarat</div></div></a> <p class="text-sm text-gray-400 leading-relaxed mb-6">NAAC A+ Accredited. Shaping future leaders through world-class education,
          research, and innovation since 2011.</p> <div class="flex gap-3"><!--[-->`);
    const each_array = ensure_array_like([
      {
        icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
        label: "Facebook"
      },
      {
        icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
        label: "Twitter"
      },
      {
        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        label: "LinkedIn"
      },
      {
        icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
        label: "Instagram"
      }
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let social = each_array[$$index];
      $$renderer2.push(`<a href="/"${attr("aria-label", social.label)} class="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path${attr("d", social.icon)}></path></svg></a>`);
    }
    $$renderer2.push(`<!--]--></div></div> <!--[-->`);
    const each_array_1 = ensure_array_like(Object.entries(footerLinks));
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let [section, links] = each_array_1[$$index_2];
      $$renderer2.push(`<div class="lg:col-span-1"><h3 class="font-semibold text-white text-sm uppercase tracking-wider mb-4">${escape_html(section)}</h3> <ul class="space-y-2.5"><!--[-->`);
      const each_array_2 = ensure_array_like(links);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let link = each_array_2[$$index_1];
        $$renderer2.push(`<li><a${attr("href", link.href)} class="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200">${escape_html(link.label)}</a></li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6"><!--[-->`);
    const each_array_3 = ensure_array_like([
      {
        icon: "📍",
        label: "LJ Campus, LJ University Road, Off. S.G. Road, Ahmedabad – 382210"
      },
      { icon: "📞", label: "+91-79-7169-0000" },
      { icon: "✉️", label: "admissions@ljku.edu.in" }
    ]);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_3[$$index_3];
      $$renderer2.push(`<div class="flex items-start gap-3 text-sm text-gray-400"><span class="text-base mt-0.5">${escape_html(item.icon)}</span> <span>${escape_html(item.label)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"><p class="text-xs text-gray-500">© ${escape_html(currentYear)} LJ University. All rights reserved.</p> <div class="flex gap-4 text-xs text-gray-500"><a href="/privacy-policy" class="hover:text-gray-300 transition-colors">Privacy Policy</a> <a href="/terms" class="hover:text-gray-300 transition-colors">Terms of Use</a> <a href="/sitemap.xml" class="hover:text-gray-300 transition-colors">Sitemap</a></div></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    Navbar($$renderer2);
    $$renderer2.push(`<!----> <main><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
