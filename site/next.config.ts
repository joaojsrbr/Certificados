import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Certificados",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Certificados",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
