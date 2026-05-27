import { g as getGallery } from "../../../chunks/gallery.js";
const load = async () => {
  try {
    const gallery = await getGallery(void 0, false, 100);
    return { gallery };
  } catch {
    return { gallery: [] };
  }
};
export {
  load
};
