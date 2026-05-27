import { a as attr, e as ensure_array_like, f as escape_html, l as stringify, d as bind_props } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { g as getImageUrl } from "../../../chunks/api.js";
import { f as formatCurrency } from "../../../chunks/index.js";
import { C as CTABanner } from "../../../chunks/CTABanner.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filtered;
    let data = $$props["data"];
    let search = "";
    let selectedDegree = "";
    let selectedDept = "";
    const degreeTypes = [
      "All",
      "B.Tech",
      "M.Tech",
      "BBA",
      "MBA",
      "BCA",
      "MCA",
      "B.Pharm",
      "M.Pharm",
      "B.Arch",
      "B.Des",
      "B.Com",
      "M.Com",
      "BPT",
      "BJMC",
      "Ph.D"
    ];
    const fallbackPrograms = [
      {
        title: "B.Tech Computer Science & Engineering",
        degree: "B.Tech",
        duration: "4 Years",
        dept: "Engineering",
        fees: 14e4,
        eligibility: "10+2 with PCM, JEE"
      },
      {
        title: "B.Tech Mechanical Engineering",
        degree: "B.Tech",
        duration: "4 Years",
        dept: "Engineering",
        fees: 12e4,
        eligibility: "10+2 with PCM, JEE"
      },
      {
        title: "MBA Business Administration",
        degree: "MBA",
        duration: "2 Years",
        dept: "Management",
        fees: 18e4,
        eligibility: "Any Graduate, CAT/MAT/GMAT"
      },
      {
        title: "BCA Computer Applications",
        degree: "BCA",
        duration: "3 Years",
        dept: "Computer Applications",
        fees: 9e4,
        eligibility: "10+2 any stream"
      },
      {
        title: "B.Pharm Pharmacy",
        degree: "B.Pharm",
        duration: "4 Years",
        dept: "Pharmacy",
        fees: 11e4,
        eligibility: "10+2 with PCB/PCM"
      },
      {
        title: "B.Arch Architecture",
        degree: "B.Arch",
        duration: "5 Years",
        dept: "Architecture",
        fees: 16e4,
        eligibility: "10+2 with Maths, NATA"
      },
      {
        title: "B.Des Product Design",
        degree: "B.Des",
        duration: "4 Years",
        dept: "Design",
        fees: 15e4,
        eligibility: "10+2 any stream"
      },
      {
        title: "MCA Computer Applications",
        degree: "MCA",
        duration: "2 Years",
        dept: "Computer Applications",
        fees: 12e4,
        eligibility: "BCA/B.Sc IT/B.Tech"
      },
      {
        title: "M.Tech Computer Science",
        degree: "M.Tech",
        duration: "2 Years",
        dept: "Engineering",
        fees: 1e5,
        eligibility: "B.Tech/BE, GATE"
      },
      {
        title: "BJMC Mass Communication",
        degree: "BJMC",
        duration: "3 Years",
        dept: "Media & Communication",
        fees: 95e3,
        eligibility: "10+2 any stream"
      },
      {
        title: "B.Com Accountancy & Finance",
        degree: "B.Com",
        duration: "3 Years",
        dept: "Commerce",
        fees: 6e4,
        eligibility: "10+2 with Commerce/Maths"
      },
      {
        title: "BPT Physiotherapy",
        degree: "BPT",
        duration: "4.5 Years",
        dept: "Physiotherapy",
        fees: 12e4,
        eligibility: "10+2 with PCB"
      }
    ];
    filtered = data.programs.length > 0 ? data.programs.filter((p) => {
      p.attributes;
      const matchSearch = !search;
      const matchDegree = !selectedDegree;
      const matchDept = !selectedDept;
      return matchSearch && matchDegree && matchDept;
    }) : fallbackPrograms.filter((p) => {
      const matchDegree = !selectedDegree;
      return matchDegree;
    });
    SEOHead($$renderer2, {
      meta: {
        title: "Programs & Courses",
        description: "Explore 30+ programs at LJ University across engineering, management, pharmacy, design, and more."
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: "Programs & Courses",
      subtitle: "30+ programs across 10 schools. Find the right program for your aspirations.",
      breadcrumbs: [{ label: "Programs" }]
    });
    $$renderer2.push(`<!----> <section class="py-16 bg-gray-50"><div class="container-lg"><div class="card p-5 mb-8 flex flex-col md:flex-row gap-4"><div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="search" placeholder="Search programs..."${attr("value", search)} class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm"/></div> `);
    $$renderer2.select(
      {
        value: selectedDegree,
        class: "px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm bg-white"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "" }, ($$renderer4) => {
          $$renderer4.push(`All Degrees`);
        });
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(degreeTypes.slice(1));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let d = each_array[$$index];
          $$renderer3.option({ value: d }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(d)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(` `);
    if (data.departments.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.select(
        {
          value: selectedDept,
          class: "px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm bg-white"
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "" }, ($$renderer4) => {
            $$renderer4.push(`All Departments`);
          });
          $$renderer3.push(`<!--[-->`);
          const each_array_1 = ensure_array_like(data.departments);
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let d = each_array_1[$$index_1];
            $$renderer3.option({ value: d.attributes.slug }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(d.attributes.title)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`);
    if (data.programs.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(filtered);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let prog = each_array_2[$$index_2];
        $$renderer2.push(`<div class="card p-6 hover:-translate-y-1 transition-all duration-300"><div class="flex items-center gap-2 mb-3"><span class="badge bg-primary-100 text-primary-700">${escape_html(prog.degree)}</span> <span class="badge bg-gray-100 text-gray-600">${escape_html(prog.duration)}</span></div> <h2 class="font-display font-bold text-navy-900 text-lg mb-1">${escape_html(prog.title)}</h2> <p class="text-sm text-gray-500 mb-3">${escape_html(prog.dept)}</p> <p class="text-xs text-gray-400 mb-3">Eligibility: ${escape_html(prog.eligibility)}</p> <div class="flex items-center justify-between pt-3 border-t border-gray-100"><span class="text-emerald-600 font-semibold text-sm">${escape_html(formatCurrency(prog.fees))}/yr</span> <a href="/admissions" class="text-primary-600 text-sm font-semibold hover:text-primary-700">Apply →</a></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_3 = ensure_array_like(filtered);
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let prog = each_array_3[$$index_3];
        const a = prog.attributes;
        $$renderer2.push(`<article class="card p-6 hover:-translate-y-1 transition-all duration-300">`);
        if (a.thumbnail?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="h-36 rounded-xl overflow-hidden -mx-6 -mt-6 mb-5"><img${attr("src", getImageUrl(a.thumbnail.data.attributes.formats?.small?.url ?? a.thumbnail.data.attributes.url))}${attr("alt", a.title)} class="w-full h-full object-cover" loading="lazy"/></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <div class="flex items-center gap-2 mb-3"><span class="badge bg-primary-100 text-primary-700">${escape_html(a.degreeType)}</span> `);
        if (a.duration) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="badge bg-gray-100 text-gray-600">${escape_html(a.duration)}</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <h2 class="font-display font-bold text-navy-900 text-lg mb-1">${escape_html(a.title)}</h2> `);
        if (a.department?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-sm text-gray-500 mb-2">${escape_html(a.department.data.attributes.title)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (a.eligibility) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-xs text-gray-400 mb-3">Eligibility: ${escape_html(a.eligibility)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <div class="flex items-center justify-between pt-3 border-t border-gray-100">`);
        if (a.fees) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="text-emerald-600 font-semibold text-sm">${escape_html(formatCurrency(a.fees))}/yr</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<span></span>`);
        }
        $$renderer2.push(`<!--]--> <a${attr("href", `/programs/${stringify(a.slug)}`)} class="text-primary-600 text-sm font-semibold hover:text-primary-700">Learn more →</a></div></article>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (filtered.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="text-center py-16 text-gray-400"><div class="text-5xl mb-4">🔍</div> <p class="text-lg">No programs found. Try adjusting your filters.</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></section> `);
    CTABanner($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
