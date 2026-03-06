import type { MetadataRoute } from "next";
import { getRobots } from "@/seo/routes";

export default function robots(): MetadataRoute.Robots {
  return getRobots();
}
