import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Ativa output: "export" no build de produção para o GitHub Pages
  ...(isProd ? { output: "export" } : {}),
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
