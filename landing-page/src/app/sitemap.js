// /src/app/sitemap.js

import { SEO_CONFIG } from "@/lib/seo-config";

export default async function sitemap() {
  const baseUrl = SEO_CONFIG.siteUrl.replace(/\/$/, "");
  const url = (path) => `${baseUrl}${path}`;

  const routes = [
    {
      url: url(""),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: url("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/dailyTrades"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: url("/letsConnect"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: url("/privacyPolicy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return routes;
}
