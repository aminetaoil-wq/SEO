/** @type {import('next').NextConfig} */

// Tijdens de GitHub Pages-build (zie .github/workflows/deploy.yml) staat
// GITHUB_PAGES=true. Dan genereren we statische HTML (map `out/`) en plaatsen
// we alles onder /<repo-naam>, zodat de site werkt op
// https://<gebruiker>.github.io/<repo>/. De repo-naam komt automatisch uit de
// door GitHub Actions ingestelde variabele GITHUB_REPOSITORY ("owner/repo").
// Lokaal (npm run dev/build) verandert er niets: geen export, geen basePath.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubPages && repo ? `/${repo}` : "";

const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? { output: "export", basePath, assetPrefix: basePath }
    : {}),
  images: {
    // GitHub Pages kan de Next.js-beeldoptimalisatie niet draaien (geen server),
    // dus serveren we afbeeldingen onbewerkt bij een Pages-build.
    unoptimized: isGithubPages,
    // TODO: Vervang/uitbreiden met de domeinen waar jouw echte foto's vandaan komen.
    // De Unsplash-placeholders hieronder zijn alleen voor demo-doeleinden.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
