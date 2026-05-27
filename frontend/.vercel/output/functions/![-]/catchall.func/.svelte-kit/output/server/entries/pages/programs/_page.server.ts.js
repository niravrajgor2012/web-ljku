import { g as getPrograms } from "../../../chunks/programs.js";
import { a as getDepartments } from "../../../chunks/departments.js";
const load = async () => {
  const [programs, departments] = await Promise.allSettled([getPrograms(), getDepartments()]);
  return {
    programs: programs.status === "fulfilled" ? programs.value : [],
    departments: departments.status === "fulfilled" ? departments.value : []
  };
};
export {
  load
};
