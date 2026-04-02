// /utils/schema.js

import { SEO_CONFIG } from "../lib/seo-config";

/* ================================
   1. PERSON SCHEMA (Main Authority)
================================ */

export function getPersonSchema() {
  const baseUrl = SEO_CONFIG.siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: SEO_CONFIG.siteName,
    url: baseUrl,
    image: `${baseUrl}/og-image.jpg`, // same OG image everywhere
    description: SEO_CONFIG.description,
    jobTitle: SEO_CONFIG.niche,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    sameAs: Object.values(SEO_CONFIG.social).filter(Boolean),
  };
}
/* ================================
   2. WEBSITE SCHEMA (Homepage Only)
================================ */

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.description,
  };
}
/* ================================
   3. WEBPAGE SCHEMA
================================ */

export function getWebPageSchema({ title, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${SEO_CONFIG.siteUrl}/#person`,
    },
    inLanguage: "en-IN",
  };
}
/* ================================
   4. BREADCRUMB SCHEMA
================================ */

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
