import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Necesario para GitHub Pages
  basePath: isProd ? '/cv' : '',
  images: {
    unoptimized: true, // Esto soluciona el problema de carga
  },

};

export default nextConfig;
