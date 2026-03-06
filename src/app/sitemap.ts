import type { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  return [
    {
      url            : baseUrl,
      lastModified   : new Date(),
      changeFrequency: "weekly",
      priority       : 1,
    },
    {
      url            : `${baseUrl}/projects`,
      lastModified   : new Date(),
      changeFrequency: "monthly",
      priority       : 0.8,
    },
  ];
}
