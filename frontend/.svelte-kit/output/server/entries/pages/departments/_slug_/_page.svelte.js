import { f as escape_html, e as ensure_array_like, a as attr, l as stringify, d as bind_props } from "../../../../chunks/root.js";
import { S as SEOHead, h as html } from "../../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../../chunks/PageHero.js";
import { g as getImageUrl } from "../../../../chunks/api.js";
import { C as CTABanner } from "../../../../chunks/CTABanner.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const { department } = data;
    const a = department.attributes;
    SEOHead($$renderer2, {
      meta: {
        title: a.seo?.metaTitle ?? a.title,
        description: a.seo?.metaDescription ?? a.shortDescription ?? "",
        keywords: a.seo?.keywords,
        ogImage: a.seo?.ogImage ? getImageUrl(a.seo.ogImage.url) : void 0
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: a.title,
      subtitle: a.shortDescription ?? "",
      image: a.bannerImage?.data ? getImageUrl(a.bannerImage.data.attributes.url) : "",
      breadcrumbs: [
        { label: "Departments", href: "/departments" },
        { label: a.title }
      ]
    });
    $$renderer2.push(`<!----> <section class="py-20 bg-white"><div class="container-lg"><div class="grid grid-cols-1 lg:grid-cols-3 gap-12"><div class="lg:col-span-2">`);
    if (a.fullDescription) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="prose prose-lg max-w-none mb-10">${html(a.fullDescription)}</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="prose prose-lg max-w-none mb-10"><p class="text-gray-600 leading-relaxed text-lg">The ${escape_html(a.title)} at LJ University provides a rigorous, industry-aligned curriculum designed to
              develop technical expertise, analytical thinking, and professional skills. Our faculty, state-of-the-art
              labs, and strong industry partnerships ensure that every student graduates ready for the real world.</p></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (a.programs?.data?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mb-10"><h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Programs Offered</h2> <div class="space-y-3"><!--[-->`);
      const each_array = ensure_array_like(a.programs.data);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let prog = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/programs/${stringify(prog.attributes.slug)}`)} class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all group"><div><span class="font-semibold text-navy-900 group-hover:text-primary-600">${escape_html(prog.attributes.title)}</span> <div class="text-sm text-gray-500 mt-0.5">${escape_html(prog.attributes.degreeType)} · ${escape_html(prog.attributes.duration ?? "")}</div></div> <svg class="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (a.galleryImages?.data?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div><h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Gallery</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-3"><!--[-->`);
      const each_array_1 = ensure_array_like(a.galleryImages.data);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let img = each_array_1[$$index_1];
        $$renderer2.push(`<div class="aspect-video rounded-xl overflow-hidden"><img${attr("src", getImageUrl(img.attributes.formats?.small?.url ?? img.attributes.url))} alt="" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy"/></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <aside class="space-y-6"><div class="card p-6"><h3 class="font-display font-bold text-navy-900 text-lg mb-4">Quick Info</h3> <dl class="space-y-3 text-sm">`);
    if (a.established) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-between"><dt class="text-gray-500">Established</dt><dd class="font-semibold text-navy-900">${escape_html(a.established)}</dd></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (a.totalStudents) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-between"><dt class="text-gray-500">Students</dt><dd class="font-semibold text-navy-900">${escape_html(a.totalStudents.toLocaleString())}+</dd></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (a.totalFaculty) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-between"><dt class="text-gray-500">Faculty</dt><dd class="font-semibold text-navy-900">${escape_html(a.totalFaculty)}+</dd></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></dl></div> `);
    if (a.faculty?.data?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="card p-6"><h3 class="font-display font-bold text-navy-900 text-lg mb-4">Faculty</h3> <div class="space-y-3"><!--[-->`);
      const each_array_2 = ensure_array_like(a.faculty.data.slice(0, 4));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let f = each_array_2[$$index_2];
        const fa = f.attributes;
        $$renderer2.push(`<div class="flex items-center gap-3">`);
        if (fa.image?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<img${attr("src", getImageUrl(fa.image.data.attributes.url))}${attr("alt", fa.name)} class="w-10 h-10 rounded-full object-cover" loading="lazy"/>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">${escape_html(fa.name.charAt(0))}</div>`);
        }
        $$renderer2.push(`<!--]--> <div><div class="text-sm font-semibold text-navy-900">${escape_html(fa.name)}</div> <div class="text-xs text-gray-500">${escape_html(fa.designation ?? "")}</div></div></div>`);
      }
      $$renderer2.push(`<!--]--></div> <a href="/faculty" class="btn-ghost mt-4 text-sm px-0">View All Faculty →</a></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="card p-6 bg-gradient-to-br from-primary-600 to-navy-800 text-white"><h3 class="font-display font-bold text-xl mb-2">Ready to Apply?</h3> <p class="text-primary-100 text-sm mb-4">Admissions are open for 2025–26. Secure your seat today.</p> <a href="/admissions" class="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors">Apply Now →</a></div></aside></div></div></section> `);
    CTABanner($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
