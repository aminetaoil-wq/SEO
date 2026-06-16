import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { areaSlugs } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/diensten",
    "/werkgebied",
    "/over-ons",
    "/projecten",
    "/contact",
  ];
  const serviceRoutes = services.map((s) => `/diensten/${s.slug}`);
  const areaRoutes = areaSlugs.map((slug) => `/werkgebied/${slug}`);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
