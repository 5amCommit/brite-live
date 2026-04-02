import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iobim.org",
      },
      {
        protocol: "https",
        hostname: "brite.live",
      },
    ],
  },
};

export default nextConfig;
