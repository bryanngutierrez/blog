import type { NextConfig } from "next";
const isProduction = process.env.NODE_ENV === 'production'
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Necesario para GitHub Pages
  basePath: isProduction ? '/cv' : undefined, 
  assetPrefix: isProduction ? '/cv/' : undefined,
  images: {
    unoptimized: true, // Esto soluciona el problema de carga
  },
};

export default nextConfig;
