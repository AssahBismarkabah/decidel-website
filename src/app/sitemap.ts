import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://decidel.app";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/features`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/support`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.3 },
  ];
}
