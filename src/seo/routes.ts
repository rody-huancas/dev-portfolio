import type { MetadataRoute } from "next";
import { seoConfig } from "@/seo/config";

export const getRobots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow    : "/",
  },
  host   : seoConfig.siteUrl,
  sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
});

export const getSitemap = (): MetadataRoute.Sitemap => {
  const now = new Date();

  return [
    {
      url            : seoConfig.siteUrl,
      lastModified   : now,
      changeFrequency: "weekly",
      priority       : 1,
    },
    {
      url            : `${seoConfig.siteUrl}/projects`,
      lastModified   : now,
      changeFrequency: "monthly",
      priority       : 0.8,
    },
  ];
};
