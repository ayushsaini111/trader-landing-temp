// /src/app/robots.js

import { SEO_CONFIG } from "@/lib/seo-config";

export default function robots() {
  const baseUrl = SEO_CONFIG.siteUrl.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
