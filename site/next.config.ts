import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Certificados",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
