import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/diensten", "/over-ons", "/projecten", "/contact"];
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
