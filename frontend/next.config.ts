import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Allow images from external domains
  images: {
    domains: ['localhost'],
  },
  
  // Configure ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configure TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enable experimental features
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;