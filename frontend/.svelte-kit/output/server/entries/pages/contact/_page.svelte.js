import { e as ensure_array_like, f as escape_html, a as attr } from "../../../chunks/root.js";
import { S as SEOHead, h as html } from "../../../chunks/SEOHead.js";
import { P as PageHero } from "../../../chunks/PageHero.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let form = { name: "", email: "", phone: "", subject: "", message: "" };
    let loading = false;
    SEOHead($$renderer2, {
      meta: {
        title: "Contact Us",
        description: "Get in touch with LJ University for admissions, information, or any queries."
      }
    });
    $$renderer2.push(`<!----> `);
    PageHero($$renderer2, {
      title: "Contact Us",
      subtitle: "We're here to help. Reach out to us for admissions, information, or any queries.",
      breadcrumbs: [{ label: "Contact" }]
    });
    $$renderer2.push(`<!----> <section class="py-20 bg-white"><div class="container-lg"><div class="grid grid-cols-1 lg:grid-cols-3 gap-12"><div class="space-y-6"><div><h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Get In Touch</h2> <!--[-->`);
    const each_array = ensure_array_like([
      {
        icon: "&#x1F4CD;",
        title: "Campus Address",
        lines: [
          "LJ Campus, LJ University Road,",
          "Off. S.G. Road, Ahmedabad – 382210"
        ]
      },
      {
        icon: "&#x1F4DE;",
        title: "Phone",
        lines: ["+91-79-7169-0000", "+91-79-7169-0001"]
      },
      {
        icon: "&#x2709;&#xFE0F;",
        title: "Email",
        lines: ["admissions@ljku.edu.in", "info@ljku.edu.in"]
      },
      {
        icon: "&#x23F0;",
        title: "Office Hours",
        lines: ["Monday – Saturday", "9:00 AM – 5:00 PM"]
      }
    ]);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array[$$index_1];
      $$renderer2.push(`<div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"><div class="text-2xl">${html(item.icon)}</div> <div><h3 class="font-semibold text-navy-900 text-sm mb-1">${escape_html(item.title)}</h3> <!--[-->`);
      const each_array_1 = ensure_array_like(item.lines);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let line = each_array_1[$$index];
        $$renderer2.push(`<p class="text-gray-500 text-sm">${escape_html(line)}</p>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="rounded-2xl overflow-hidden h-48"><iframe title="LJ University Location" src="https://www.google.com/maps?q=LJ+Campus,+LJ+University+Road,+Off+S.G.+Road,+Ahmedabad+382210&amp;output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div> <div class="lg:col-span-2"><div class="card p-8"><h2 class="font-display text-2xl font-bold text-navy-900 mb-6">Send us a Message</h2> `);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<form class="space-y-5"><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"><div><label class="block text-sm font-semibold text-gray-700 mb-1.5" for="name">Full Name *</label> <input id="name" type="text"${attr("value", form.name)} required="" placeholder="Your full name" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm"/></div> <div><label class="block text-sm font-semibold text-gray-700 mb-1.5" for="email">Email Address *</label> <input id="email" type="email"${attr("value", form.email)} required="" placeholder="your@email.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm"/></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-5"><div><label class="block text-sm font-semibold text-gray-700 mb-1.5" for="phone">Phone Number</label> <input id="phone" type="tel"${attr("value", form.phone)} placeholder="+91 98765 43210" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm"/></div> <div><label class="block text-sm font-semibold text-gray-700 mb-1.5" for="subject">Subject *</label> `);
      $$renderer2.select(
        {
          id: "subject",
          value: form.subject,
          required: true,
          class: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm bg-white"
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "" }, ($$renderer4) => {
            $$renderer4.push(`Select Subject`);
          });
          $$renderer3.option({}, ($$renderer4) => {
            $$renderer4.push(`Admissions Inquiry`);
          });
          $$renderer3.option({}, ($$renderer4) => {
            $$renderer4.push(`Program Information`);
          });
          $$renderer3.option({}, ($$renderer4) => {
            $$renderer4.push(`Fee Structure`);
          });
          $$renderer3.option({}, ($$renderer4) => {
            $$renderer4.push(`Scholarship`);
          });
          $$renderer3.option({}, ($$renderer4) => {
            $$renderer4.push(`Campus Visit`);
          });
          $$renderer3.option({}, ($$renderer4) => {
            $$renderer4.push(`Other`);
          });
        }
      );
      $$renderer2.push(`</div></div> <div><label class="block text-sm font-semibold text-gray-700 mb-1.5" for="message">Message *</label> <textarea id="message" required="" rows="5" placeholder="Write your message here..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 text-sm resize-none">`);
      const $$body = escape_html(form.message);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></div> <button type="submit" class="btn-primary w-full justify-center py-3.5"${attr("disabled", loading, true)}>`);
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`Send Message`);
      }
      $$renderer2.push(`<!--]--></button></form>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></section>`);
  });
}
export {
  _page as default
};
