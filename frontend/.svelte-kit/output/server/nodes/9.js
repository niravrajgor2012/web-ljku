import * as server from '../entries/pages/events/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.CKN14WdX.js","_app/immutable/chunks/BCpB0yUR.js","_app/immutable/chunks/zaCuVdW-.js","_app/immutable/chunks/CEB8Ykm6.js","_app/immutable/chunks/B2etIoHw.js","_app/immutable/chunks/rpxnhgYT.js","_app/immutable/chunks/B-yhphD8.js","_app/immutable/chunks/arvCmhKc.js","_app/immutable/chunks/BxEn5fvD.js","_app/immutable/chunks/DkbvQhXT.js","_app/immutable/chunks/LPWXknNQ.js","_app/immutable/chunks/uzaomxJc.js"];
export const stylesheets = [];
export const fonts = [];
