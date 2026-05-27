import { e as ensure_array_like, f as escape_html, b as attr_class } from "../../../chunks/root.js";
import { S as SEOHead } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
import { C as CTABanner } from "../../../chunks/CTABanner.js";
function _page($$renderer) {
  const steps = [
    {
      no: "01",
      title: "Fill Application",
      desc: "Complete the online application form with your academic details and program preference."
    },
    {
      no: "02",
      title: "Document Upload",
      desc: "Upload 10th, 12th marksheets, ID proof, passport photo, and entrance exam scores."
    },
    {
      no: "03",
      title: "Selection Process",
      desc: "Shortlisted candidates appear for counselling / personal interview / merit list."
    },
    {
      no: "04",
      title: "Fee Payment",
      desc: "Pay the admission fee online to confirm your seat in the selected program."
    },
    {
      no: "05",
      title: "Orientation",
      desc: "Attend the welcome orientation and collect your student ID and timetable."
    }
  ];
  const programs = [
    {
      degree: "B.Tech",
      programs: "CE, ME, EE, EC, IT, AI&DS, Robotics, Biotechnology",
      duration: "4 Years",
      seats: 720
    },
    {
      degree: "MBA",
      programs: "Finance, HR, Marketing, Operations, Entrepreneurship",
      duration: "2 Years",
      seats: 180
    },
    {
      degree: "B.Pharm",
      programs: "Bachelor of Pharmacy",
      duration: "4 Years",
      seats: 120
    },
    {
      degree: "B.Arch",
      programs: "Bachelor of Architecture",
      duration: "5 Years",
      seats: 60
    },
    {
      degree: "B.Des",
      programs: "Product, Interior, Fashion, Communication Design",
      duration: "4 Years",
      seats: 120
    },
    {
      degree: "BCA",
      programs: "Bachelor of Computer Applications",
      duration: "3 Years",
      seats: 180
    }
  ];
  const faqs = [
    {
      q: "What is the last date to apply?",
      a: "Applications for 2025-26 close on June 30, 2025 for most programs. Some programs have rolling admissions."
    },
    {
      q: "Is there an entrance exam?",
      a: "Engineering admissions are through JEE/GUJCET. Management is through CAT/MAT/GMAT/CMAT. Architecture requires NATA. Other programs are merit-based."
    },
    {
      q: "Are scholarships available?",
      a: "Yes, LJ University offers merit scholarships, SC/ST/OBC fee waivers, and sports/cultural scholarships."
    },
    {
      q: "Is hostel facility available?",
      a: "Yes, separate hostel facilities are available for boys and girls on campus."
    },
    {
      q: "What is the fee refund policy?",
      a: "Fees are refundable as per UGC guidelines. Contact the admissions office for specific details."
    }
  ];
  let expandedFaq = null;
  SEOHead($$renderer, {
    meta: {
      title: "Admissions 2025-26",
      description: "Apply to LJ University for the 2025-26 academic year. Explore programs, eligibility, fee structure, and application process."
    }
  });
  $$renderer.push(`<!----> `);
  PageHero($$renderer, {
    title: "Admissions 2025-26",
    subtitle: "Applications are open. Join the LJ University family and start your journey toward excellence.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80",
    breadcrumbs: [{ label: "Admissions" }]
  });
  $$renderer.push(`<!----> <section class="py-20 bg-white"><div class="container-lg"><div class="card p-6 bg-gradient-to-r from-primary-600 to-navy-800 text-white flex flex-col md:flex-row items-center justify-between gap-4 mb-14"><div><h2 class="font-display text-2xl font-bold">Admissions Open for 2025-26</h2> <p class="text-primary-100 text-sm mt-1">Limited seats available. Apply before June 30, 2025.</p></div> <a href="https://admission.ljku.edu.in" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors shrink-0">Apply Online →</a></div> <div class="mb-16"><h2 class="section-title text-center mb-10">Application Process</h2> <div class="relative"><div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 mx-16"></div> <div class="grid grid-cols-1 md:grid-cols-5 gap-6"><!--[-->`);
  const each_array = ensure_array_like(steps);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let step = each_array[$$index];
    $$renderer.push(`<div class="text-center relative"><div class="w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-display text-xl font-bold mx-auto mb-4 relative z-10 shadow-md">${escape_html(step.no)}</div> <h3 class="font-display font-semibold text-navy-900 mb-2">${escape_html(step.title)}</h3> <p class="text-xs text-gray-500 leading-relaxed">${escape_html(step.desc)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div> <div class="mb-16"><h2 class="section-title mb-8">Programs &amp; Seats Available</h2> <div class="overflow-x-auto rounded-2xl border border-gray-100"><table class="w-full text-sm"><thead><tr class="bg-navy-900 text-white"><th class="px-6 py-4 text-left font-semibold">Degree</th><th class="px-6 py-4 text-left font-semibold">Specializations</th><th class="px-6 py-4 text-left font-semibold">Duration</th><th class="px-6 py-4 text-left font-semibold">Total Seats</th><th class="px-6 py-4 text-left font-semibold">Apply</th></tr></thead><tbody><!--[-->`);
  const each_array_1 = ensure_array_like(programs);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let prog = each_array_1[i];
    $$renderer.push(`<tr${attr_class(`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary-50 transition-colors`)}><td class="px-6 py-4 font-semibold text-primary-600">${escape_html(prog.degree)}</td><td class="px-6 py-4 text-gray-600">${escape_html(prog.programs)}</td><td class="px-6 py-4">${escape_html(prog.duration)}</td><td class="px-6 py-4 font-semibold">${escape_html(prog.seats)}</td><td class="px-6 py-4"><a href="/programs" class="text-primary-600 font-semibold hover:text-primary-700">Apply →</a></td></tr>`);
  }
  $$renderer.push(`<!--]--></tbody></table></div></div> <div><h2 class="section-title mb-8">Frequently Asked Questions</h2> <div class="space-y-3 max-w-3xl"><!--[-->`);
  const each_array_2 = ensure_array_like(faqs);
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let faq = each_array_2[i];
    $$renderer.push(`<div class="card overflow-hidden"><button class="w-full flex items-center justify-between p-5 text-left"><span class="font-semibold text-navy-900">${escape_html(faq.q)}</span> <svg${attr_class(`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
    if (expandedFaq === i) {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<div class="px-5 pb-5 text-gray-600 text-sm leading-relaxed">${escape_html(faq.a)}</div>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section> `);
  CTABanner($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
