import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Necesario para GitHub Pages
  images: {
    unoptimized: true, // Esto soluciona el problema de carga
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cv' : '', 
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv/' : '',
};

export default nextConfig;
