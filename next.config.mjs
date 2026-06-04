/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
