import { p as public_env } from "./shared-server.js";
const BASE_URL = public_env.PUBLIC_STRAPI_URL ?? "http://localhost:1337";
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}
async function fetchAPI(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}/api${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });
  const response = await fetch(url.toString(), {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 }
  });
  if (!response.ok) {
    throw new ApiError(`API error: ${response.statusText}`, response.status);
  }
  return response.json();
}
function getImageUrl(url) {
  if (!url) return "/placeholder.jpg";
  if (url.startsWith("http")) return url;
  return `${BASE_URL}${url}`;
}
function extractData(response) {
  if (!response.data) return [];
  return Array.isArray(response.data) ? response.data : [response.data];
}
function extractSingle(response) {
  if (!response.data) return null;
  return Array.isArray(response.data) ? response.data[0] : response.data;
}
const api = { fetchAPI, getImageUrl, extractData, extractSingle };
export {
  api as a,
  getImageUrl as g
};
