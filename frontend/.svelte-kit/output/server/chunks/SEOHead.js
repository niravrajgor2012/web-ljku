import { k as store_get, i as head, u as unsubscribe_stores, d as bind_props, g as fallback, f as escape_html, a as attr } from "./root.js";
import { p as page } from "./stores.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function SEOHead($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let fullTitle, currentUrl;
    let meta = fallback(
      $$props["meta"],
      () => ({
        title: "LJ University – Shaping Tomorrow's Leaders",
        description: "LJ University, Ahmedabad – A premier institution offering engineering, management, pharmacy, design, and more. NAAC A+ accredited.",
        keywords: "LJ University, Ahmedabad, Engineering, Management, Pharmacy, Design, Admissions"
      }),
      true
    );
    const siteTitle = "LJ University";
    const jsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      name: "LJ University",
      url: "https://ljku.edu.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "LJ Campus, LJ University Road, Off. S.G. Road",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382210",
        addressCountry: "IN"
      },
      telephone: "+91-79-7169-0000",
      email: "info@ljku.edu.in"
    });
    fullTitle = meta.title.includes(siteTitle) ? meta.title : `${meta.title} | ${siteTitle}`;
    currentUrl = store_get($$store_subs ??= {}, "$page", page).url.href;
    head("1xg1a3p", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(fullTitle)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", meta.description)}/> `);
      if (meta.keywords) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta name="keywords"${attr("content", meta.keywords)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <link rel="canonical"${attr("href", meta.canonical ?? currentUrl)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", fullTitle)}/> <meta property="og:description"${attr("content", meta.description)}/> <meta property="og:url"${attr("content", currentUrl)}/> `);
      if (meta.ogImage) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta property="og:image"${attr("content", meta.ogImage)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", fullTitle)}/> <meta name="twitter:description"${attr("content", meta.description)}/> `);
      if (meta.ogImage) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta name="twitter:image"${attr("content", meta.ogImage)}/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<div style="display:none" aria-hidden="true">${html(`<script type="application/ld+json">${jsonLd}<\/script>`)}</div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { meta });
  });
}
export {
  SEOHead as S,
  html as h
};
