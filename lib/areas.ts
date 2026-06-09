import { company } from "./company";

/**
 * Werkgebied — config-gedreven afgeleid uit company.serviceAreas.
 * Eén bron voor de route /werkgebied/[stad], de sitemap en interne links.
 * Pas de plaatsen aan in lib/company.ts (serviceAreas).
 */
export type Area = { slug: string; name: string };

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const areas: Area[] = company.serviceAreas.map((name) => ({
  slug: slugify(name),
  name,
}));

export const areaSlugs = areas.map((a) => a.slug);

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
