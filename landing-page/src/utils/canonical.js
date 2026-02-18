// /utils/canonical.js

import { SEO_CONFIG } from "../lib/seo-config";

export function canonicalize(path = "") {
  const baseUrl = SEO_CONFIG.siteUrl.replace(/\/+$/, ""); // remove trailing slash
  const cleanPath = path.replace(/^\/+/, ""); // remove leading slash

  return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
}
