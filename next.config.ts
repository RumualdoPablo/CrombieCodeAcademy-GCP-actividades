import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/ejemplo-bucket-prc/**",
      },
      {
        protocol: "https",
        hostname: "ejemplo-bucket-prc.storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
