import { g as getPlacements } from "../../../chunks/placements.js";
const load = async () => {
  try {
    const placements = await getPlacements(false, 50);
    return { placements };
  } catch {
    return { placements: [] };
  }
};
export {
  load
};
