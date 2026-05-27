import { e as ensure_array_like, a as attr, l as stringify, f as escape_html, d as bind_props } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { g as getImageUrl } from "../../../chunks/api.js";
import { C as CTABanner } from "../../../chunks/CTABanner.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const fallbackDepts = [
      {
        title: "School of Engineering & Technology",
        slug: "engineering",
        desc: "B.Tech & M.Tech across CE, ME, EE, EC, IT branches. NBA Accredited.",
        icon: "⚙️",
        students: 3200,
        programs: 8
      },
      {
        title: "School of Computer Applications",
        slug: "computer-applications",
        desc: "BCA, MCA programs with strong industry connect and placement record.",
        icon: "💻",
        students: 1200,
        programs: 3
      },
      {
        title: "School of Management Studies",
        slug: "management",
        desc: "BBA, MBA programs with live projects, case studies, and corporate mentorship.",
        icon: "📊",
        students: 1800,
        programs: 5
      },
      {
        title: "School of Pharmacy",
        slug: "pharmacy",
        desc: "B.Pharm, M.Pharm, Pharm.D programs with state-of-the-art labs.",
        icon: "💊",
        students: 800,
        programs: 4
      },
      {
        title: "School of Architecture",
        slug: "architecture",
        desc: "B.Arch, M.Arch programs focused on sustainable and innovative design.",
        icon: "🏛️",
        students: 400,
        programs: 2
      },
      {
        title: "School of Design",
        slug: "design",
        desc: "B.Des in Product, Interior, Fashion & Communication Design.",
        icon: "🎨",
        students: 600,
        programs: 4
      },
      {
        title: "School of Commerce",
        slug: "commerce",
        desc: "B.Com, M.Com, BBA(Hons) with CA and CMA integration.",
        icon: "💰",
        students: 900,
        programs: 4
      },
      {
        title: "School of Physiotherapy",
        slug: "physiotherapy",
        desc: "BPT, MPT programs with clinical training at leading hospitals.",
        icon: "🏥",
        students: 300,
        programs: 2
      },
      {
        title: "School of Applied Sciences",
        slug: "applied-sciences",
        desc: "Foundation sciences and interdisciplinary programs.",
        icon: "🔬",
        students: 400,
        programs: 3
      },
      {
        title: "School of Media & Communication",
        slug: "media-communication",
        desc: "BJMC, Mass Communication with live studio and production facilities.",
        icon: "📺",
        students: 350,
        programs: 3
      }
    ];
    SEOHead($$renderer2, {
      meta: {
        title: "Departments & Schools",
        description: "Explore LJ University's 10 schools and institutes offering programs in engineering, management, pharmacy, design, and more."
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: "Schools & Departments",
      subtitle: "10 schools, 30+ programs, and a community of 10,000+ learners.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80",
      breadcrumbs: [{ label: "Departments" }]
    });
    $$renderer2.push(`<!----> <section class="py-20 bg-gray-50"><div class="container-lg"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`);
    if (data.departments.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(fallbackDepts);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let dept = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/departments/${stringify(dept.slug)}`)} class="card group p-7 hover:-translate-y-1 transition-all duration-300"><div class="flex items-start gap-4 mb-4"><div class="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-3xl flex-shrink-0">${escape_html(dept.icon)}</div> <div><h2 class="font-display font-bold text-navy-900 text-xl group-hover:text-primary-600 transition-colors leading-snug">${escape_html(dept.title)}</h2></div></div> <p class="text-gray-500 text-sm leading-relaxed mb-5">${escape_html(dept.desc)}</p> <div class="flex items-center gap-4 text-xs text-gray-400 mb-5"><span>👥 ${escape_html(dept.students.toLocaleString())} Students</span> <span>📚 ${escape_html(dept.programs)} Programs</span></div> <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Explore School <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(data.departments);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let dept = each_array_1[$$index_1];
        const a = dept.attributes;
        $$renderer2.push(`<a${attr("href", `/departments/${stringify(a.slug)}`)} class="card group p-7 hover:-translate-y-1 transition-all duration-300">`);
        if (a.bannerImage?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="h-40 rounded-xl overflow-hidden -mx-7 -mt-7 mb-5"><img${attr("src", getImageUrl(a.bannerImage.data.attributes.formats?.small?.url ?? a.bannerImage.data.attributes.url))}${attr("alt", a.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <h2 class="font-display font-bold text-navy-900 text-xl group-hover:text-primary-600 transition-colors mb-3">${escape_html(a.title)}</h2> `);
        if (a.shortDescription) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-gray-500 text-sm leading-relaxed mb-5">${escape_html(a.shortDescription)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <span class="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Explore School <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></section> `);
    CTABanner($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
