import * as server from '../entries/pages/gallery/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/gallery/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.BJG7Qbl5.js","_app/immutable/chunks/BCpB0yUR.js","_app/immutable/chunks/zaCuVdW-.js","_app/immutable/chunks/CEB8Ykm6.js","_app/immutable/chunks/B2etIoHw.js","_app/immutable/chunks/rpxnhgYT.js","_app/immutable/chunks/B-yhphD8.js","_app/immutable/chunks/arvCmhKc.js","_app/immutable/chunks/Bfc47y5P.js","_app/immutable/chunks/BxEn5fvD.js","_app/immutable/chunks/DkbvQhXT.js","_app/immutable/chunks/LPWXknNQ.js"];
export const stylesheets = [];
export const fonts = [];
