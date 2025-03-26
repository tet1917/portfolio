import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // transpilePackages: ["three"],
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
