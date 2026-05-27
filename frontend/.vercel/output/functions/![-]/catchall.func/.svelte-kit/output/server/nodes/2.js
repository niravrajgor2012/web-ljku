import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BuGVMPYp.js","_app/immutable/chunks/BCpB0yUR.js","_app/immutable/chunks/zaCuVdW-.js","_app/immutable/chunks/CEB8Ykm6.js","_app/immutable/chunks/B2etIoHw.js","_app/immutable/chunks/B-yhphD8.js","_app/immutable/chunks/arvCmhKc.js","_app/immutable/chunks/rpxnhgYT.js","_app/immutable/chunks/BxEn5fvD.js","_app/immutable/chunks/6PEKSsv4.js","_app/immutable/chunks/uzaomxJc.js","_app/immutable/chunks/LPWXknNQ.js","_app/immutable/chunks/CDTf-D2N.js"];
export const stylesheets = ["_app/immutable/assets/2.D809fShY.css"];
export const fonts = [];
