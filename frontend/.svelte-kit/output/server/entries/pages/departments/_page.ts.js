import { a as getDepartments } from "../../../chunks/departments.js";
const load = async () => {
  try {
    const departments = await getDepartments();
    return { departments };
  } catch {
    return { departments: [] };
  }
};
export {
  load
};
