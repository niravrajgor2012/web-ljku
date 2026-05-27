import { e as ensure_array_like, f as escape_html, a as attr, d as bind_props } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { C as CTABanner } from "../../../chunks/CTABanner.js";
import { g as getImageUrl } from "../../../chunks/api.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const stats = [
      { value: "95%", label: "Overall Placement", icon: "🎯" },
      { value: "₹8.5L", label: "Average Package", icon: "💰" },
      { value: "₹42L", label: "Highest Package (2024)", icon: "🏆" },
      { value: "150+", label: "Recruiting Companies", icon: "🏢" },
      { value: "1500+", label: "Students Placed", icon: "👩‍💼" },
      { value: "12+", label: "Countries", icon: "🌍" }
    ];
    const topRecruiters = [
      "TCS",
      "Infosys",
      "Wipro",
      "Accenture",
      "Deloitte",
      "Amazon",
      "Google",
      "Microsoft",
      "Capgemini",
      "Cognizant",
      "HCL",
      "HDFC Bank",
      "ICICI Bank",
      "L&T",
      "Tata Motors",
      "Mahindra",
      "Zydus",
      "Sun Pharma"
    ];
    const successes = [
      {
        name: "Arjun Patel",
        company: "Google India",
        role: "Software Engineer",
        pkg: "₹36 LPA",
        program: "B.Tech CSE",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
      },
      {
        name: "Priya Mehta",
        company: "Amazon",
        role: "SDE II",
        pkg: "₹28 LPA",
        program: "B.Tech IT",
        img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80"
      },
      {
        name: "Ravi Shah",
        company: "Deloitte",
        role: "Consultant",
        pkg: "₹18 LPA",
        program: "MBA",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
      },
      {
        name: "Nisha Kumar",
        company: "Cipla",
        role: "R&D Executive",
        pkg: "₹12 LPA",
        program: "M.Pharm",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
      }
    ];
    SEOHead($$renderer2, {
      meta: {
        title: "Placements",
        description: "95% placement rate at LJ University. Top recruiters include TCS, Infosys, Amazon, Google, Deloitte and 150+ more."
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: "Placements & Careers",
      subtitle: "95% placement rate. Industry partnerships. Record-breaking packages. Your career starts here.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80",
      breadcrumbs: [{ label: "Placements" }]
    });
    $$renderer2.push(`<!----> <section class="py-20 bg-white"><div class="container-lg"><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"><!--[-->`);
    const each_array = ensure_array_like(stats);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let stat = each_array[$$index];
      $$renderer2.push(`<div class="card p-5 text-center"><div class="text-3xl mb-2">${escape_html(stat.icon)}</div> <div class="font-display text-2xl font-bold text-primary-600">${escape_html(stat.value)}</div> <div class="text-xs text-gray-500 mt-1">${escape_html(stat.label)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mb-16"><h2 class="section-title mb-8">Success Stories</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">`);
    if (data.placements.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(successes);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let p = each_array_1[$$index_1];
        $$renderer2.push(`<div class="card p-6 text-center"><img${attr("src", p.img)}${attr("alt", p.name)} class="w-16 h-16 rounded-2xl object-cover mx-auto mb-4 border-4 border-primary-100" loading="lazy"/> <h3 class="font-display font-bold text-navy-900">${escape_html(p.name)}</h3> <p class="text-primary-600 text-sm font-semibold">${escape_html(p.role)}</p> <p class="text-gray-500 text-sm">${escape_html(p.company)}</p> <div class="mt-3 inline-block bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-full text-sm">${escape_html(p.pkg)}</div> <p class="text-xs text-gray-400 mt-2">${escape_html(p.program)}</p></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(data.placements.slice(0, 8));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let p = each_array_2[$$index_2];
        const a = p.attributes;
        $$renderer2.push(`<div class="card p-6 text-center">`);
        if (a.image?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<img${attr("src", getImageUrl(a.image.data.attributes.url))}${attr("alt", a.studentName)} class="w-16 h-16 rounded-2xl object-cover mx-auto mb-4 border-4 border-primary-100" loading="lazy"/>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-4">${escape_html(a.studentName.charAt(0))}</div>`);
        }
        $$renderer2.push(`<!--]--> <h3 class="font-display font-bold text-navy-900">${escape_html(a.studentName)}</h3> `);
        if (a.role) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-primary-600 text-sm font-semibold">${escape_html(a.role)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <p class="text-gray-500 text-sm">${escape_html(a.companyName)}</p> `);
        if (a.package) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="mt-3 inline-block bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-full text-sm">₹${escape_html(a.package)}L PA</div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (a.program) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-xs text-gray-400 mt-2">${escape_html(a.program)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div> <div><h2 class="section-title mb-8">Our Top Recruiters</h2> <div class="flex flex-wrap gap-3"><!--[-->`);
    const each_array_3 = ensure_array_like(topRecruiters);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let company = each_array_3[$$index_3];
      $$renderer2.push(`<div class="px-4 py-2 rounded-xl border-2 border-gray-100 hover:border-primary-200 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-all duration-200 cursor-default">${escape_html(company)}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section> `);
    CTABanner($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
