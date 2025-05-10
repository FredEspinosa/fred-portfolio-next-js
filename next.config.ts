import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dco-bucket-assets-prod.obs.na-mexico-1.myhuaweicloud.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
