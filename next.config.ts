import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-dev-omega-puce.vercel.app',
      },
    ],
  },
};

export default nextConfig;
