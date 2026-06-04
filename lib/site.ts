import { company } from "./company";

/**
 * Eén subpad-bewuste bron voor alle absolute URL's (canonical, sitemap, robots,
 * Open Graph én JSON-LD). Spiegelt de env-afleiding uit next.config.mjs zodat de
 * gegenereerde URL's exact matchen met de daadwerkelijke deploy.
 *
 * Op GitHub Pages staat de site op https://<owner>.github.io/<repo>/ — een
 * subpad. In een static export neemt `metadataBase` dat subpad NIET mee, daarom
 * bouwen we overal volledig gekwalificeerde URL's via `absoluteUrl()`.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const [owner = "", repo = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");

/** "/SEO" tijdens de Pages-build, anders "" (lokaal). */
export const basePath = isGithubPages && repo ? `/${repo}` : "";

// Origin van de canonieke site. Op Pages het github.io-domein (host is lowercase),
// lokaal het in company.ts ingestelde domein.
const origin = isGithubPages && owner
  ? `https://${owner.toLowerCase()}.github.io`
  : company.url.replace(/\/+$/, "");

/** Volledige basis-URL inclusief subpad, bijv. https://aminetaoil-wq.github.io/SEO */
export const siteUrl = `${origin}${basePath}`;

/** Bouwt een volledig gekwalificeerde absolute URL die altijd het subpad bevat. */
export function absoluteUrl(path = "/"): string {
  const suffix = path === "/" ? "" : `/${path.replace(/^\/+/, "")}`;
  return `${siteUrl}${suffix}`;
}
