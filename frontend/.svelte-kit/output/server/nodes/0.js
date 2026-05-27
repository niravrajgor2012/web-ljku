import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CzEfhVI4.js","_app/immutable/chunks/BCpB0yUR.js","_app/immutable/chunks/zaCuVdW-.js","_app/immutable/chunks/BZ_5bb6T.js","_app/immutable/chunks/BuIwh0aP.js","_app/immutable/chunks/rpxnhgYT.js","_app/immutable/chunks/B-yhphD8.js","_app/immutable/chunks/arvCmhKc.js","_app/immutable/chunks/uzaomxJc.js"];
export const stylesheets = ["_app/immutable/assets/0.DlcGtUDA.css"];
export const fonts = [];
