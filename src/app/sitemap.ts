import type { MetadataRoute } from "next";
import { getSitemap } from "@/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemap();
}
