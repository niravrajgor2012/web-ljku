import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.C2o6X5uf.js","_app/immutable/chunks/CrTj_pDs.js","_app/immutable/chunks/DM-ZaLDo.js","_app/immutable/chunks/CTvbo0-J.js","_app/immutable/chunks/BNplkINN.js","_app/immutable/chunks/D4IE8Isk.js","_app/immutable/chunks/A-RSN7gD.js","_app/immutable/chunks/BCpB0yUR.js","_app/immutable/chunks/zaCuVdW-.js","_app/immutable/chunks/BZ_5bb6T.js","_app/immutable/chunks/BuIwh0aP.js","_app/immutable/chunks/B-yhphD8.js","_app/immutable/chunks/arvCmhKc.js","_app/immutable/chunks/rpxnhgYT.js","_app/immutable/chunks/BvI8ISSE.js","_app/immutable/chunks/6PEKSsv4.js","_app/immutable/chunks/uzaomxJc.js","_app/immutable/chunks/gGqFfRHV.js"];
export const stylesheets = ["_app/immutable/assets/2.D809fShY.css"];
export const fonts = [];
