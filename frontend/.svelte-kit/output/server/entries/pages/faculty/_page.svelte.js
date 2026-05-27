import { a as attr, e as ensure_array_like, f as escape_html, d as bind_props } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { g as getImageUrl } from "../../../chunks/api.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredFallback, filteredFaculty;
    let data = $$props["data"];
    let search = "";
    let selectedDept = "";
    const fallback = [
      {
        name: "Dr. Prashant Mehta",
        role: "Professor & HOD",
        dept: "Computer Science",
        exp: 18,
        qual: "Ph.D (IIT Bombay)",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
      },
      {
        name: "Dr. Shilpa Shah",
        role: "Associate Professor",
        dept: "Management",
        exp: 12,
        qual: "Ph.D (IIMA)",
        img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80"
      },
      {
        name: "Prof. Rajesh Patel",
        role: "Assistant Professor",
        dept: "Mechanical Engineering",
        exp: 8,
        qual: "M.Tech (IIT Delhi)",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
      },
      {
        name: "Dr. Neha Joshi",
        role: "Professor",
        dept: "Pharmacy",
        exp: 15,
        qual: "Ph.D Pharmacology",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
      },
      {
        name: "Prof. Amit Trivedi",
        role: "Associate Professor",
        dept: "Architecture",
        exp: 10,
        qual: "M.Arch (CEPT)",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
      },
      {
        name: "Dr. Kavita Singh",
        role: "Professor",
        dept: "Design",
        exp: 14,
        qual: "Ph.D (NID Ahmedabad)",
        img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80"
      },
      {
        name: "Prof. Sanjay Kumar",
        role: "Assistant Professor",
        dept: "Electrical Engineering",
        exp: 6,
        qual: "M.Tech (NIT Surat)",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80"
      },
      {
        name: "Dr. Anita Desai",
        role: "Associate Professor",
        dept: "Commerce",
        exp: 11,
        qual: "Ph.D Commerce (GU)",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
      }
    ];
    filteredFallback = fallback.filter((f) => {
      const ms = !search;
      return ms;
    });
    filteredFaculty = data.faculty.filter((f) => {
      f.attributes;
      const ms = !search;
      const md = !selectedDept;
      return ms && md;
    });
    SEOHead($$renderer2, {
      meta: {
        title: "Faculty",
        description: "Meet the expert faculty at LJ University – 500+ distinguished professors, researchers, and industry professionals."
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: "Our Faculty",
      subtitle: "500+ distinguished educators, researchers, and industry experts dedicated to your success.",
      breadcrumbs: [{ label: "Faculty" }]
    });
    $$renderer2.push(`<!----> <section class="py-16 bg-gray-50"><div class="container-lg"><div class="card p-4 mb-8 flex flex-col sm:flex-row gap-4"><div class="flex-1 relative"><svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="search" placeholder="Search faculty..."${attr("value", search)} class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm"/></div> `);
    if (data.departments.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.select(
        {
          value: selectedDept,
          class: "px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-primary-400"
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "" }, ($$renderer4) => {
            $$renderer4.push(`All Departments`);
          });
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(data.departments);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let d = each_array[$$index];
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
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">`);
    if (data.faculty.length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(filteredFallback);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let f = each_array_1[$$index_1];
        $$renderer2.push(`<div class="card p-6 text-center group hover:-translate-y-1 transition-all duration-300"><div class="relative inline-block mb-4"><img${attr("src", f.img)}${attr("alt", f.name)} class="w-20 h-20 rounded-2xl object-cover mx-auto border-4 border-white shadow-md" loading="lazy"/></div> <h3 class="font-display font-bold text-navy-900 text-base">${escape_html(f.name)}</h3> <p class="text-primary-600 text-sm font-semibold">${escape_html(f.role)}</p> <p class="text-gray-500 text-xs mt-1">${escape_html(f.dept)}</p> <p class="text-gray-400 text-xs mt-1">${escape_html(f.qual)}</p> <p class="text-gray-400 text-xs mt-1">${escape_html(f.exp)} years experience</p></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(filteredFaculty);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let f = each_array_2[$$index_2];
        const a = f.attributes;
        $$renderer2.push(`<div class="card p-6 text-center group hover:-translate-y-1 transition-all duration-300">`);
        if (a.image?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<img${attr("src", getImageUrl(a.image.data.attributes.url))}${attr("alt", a.name)} class="w-20 h-20 rounded-2xl object-cover mx-auto mb-4 border-4 border-white shadow-md" loading="lazy"/>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<div class="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-600 mx-auto mb-4">${escape_html(a.name.charAt(0))}</div>`);
        }
        $$renderer2.push(`<!--]--> <h3 class="font-display font-bold text-navy-900 text-base">${escape_html(a.name)}</h3> `);
        if (a.designation) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-primary-600 text-sm font-semibold">${escape_html(a.designation)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (a.department?.data) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-gray-500 text-xs mt-1">${escape_html(a.department.data.attributes.title)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (a.qualification) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-gray-400 text-xs mt-1">${escape_html(a.qualification)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (a.experience) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="text-gray-400 text-xs mt-1">${escape_html(a.experience)} yrs experience</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
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
