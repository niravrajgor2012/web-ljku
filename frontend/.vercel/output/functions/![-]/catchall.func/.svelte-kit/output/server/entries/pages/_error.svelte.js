import { f as escape_html, k as store_get, u as unsubscribe_stores } from "../../chunks/root.js";
import { p as page } from "../../chunks/stores.js";
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="min-h-screen bg-gray-50 flex items-center justify-center pt-[72px]"><div class="text-center px-4"><div class="font-display text-9xl font-bold text-primary-100 select-none">${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</div> <h1 class="font-display text-3xl font-bold text-navy-900 mt-4 mb-3">${escape_html(store_get($$store_subs ??= {}, "$page", page).status === 404 ? "Page Not Found" : "Something Went Wrong")}</h1> <p class="text-gray-500 max-w-md mx-auto mb-8">${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message ?? "The page you're looking for doesn't exist or has been moved.")}</p> <div class="flex gap-4 justify-center"><a href="/" class="btn-primary">Back to Home</a> <a href="/contact" class="btn-outline">Contact Support</a></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _error as default
};
