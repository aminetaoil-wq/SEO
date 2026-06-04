import type { MetadataRoute } from "next";
import { siteUrl, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
