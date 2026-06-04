import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/diensten", "/over-ons", "/projecten", "/contact"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${company.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
