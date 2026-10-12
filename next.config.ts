import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "192.168.1.101",
    "192.168.1.104",
    "localhost",
  ],
};

export default nextConfig;