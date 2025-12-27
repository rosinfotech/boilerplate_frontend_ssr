import type { NextConfig } from "next";


const isMobile = process.env.NEXT_PUBLIC_PLATFORM === "mobile";

const nextConfig: NextConfig = isMobile
    ? {
          compress: true,
          distDir: ".next.mobile",
          experimental: {
              optimizePackageImports: ["tailwindcss"],
          },
          images: {
              unoptimized: true,
          },
          output: "export",
          pageExtensions: ["mobile.tsx", "mobile.ts", "mobile.jsx", "mobile.js"],
          poweredByHeader: false,
          reactStrictMode: true,
          trailingSlash: true,
      }
    : {
          compress: true,
          experimental: {
              optimizePackageImports: ["tailwindcss"],
          },
          images: {
              formats: ["image/avif", "image/webp"],
              remotePatterns: [
                  {
                      hostname: "cdn.rosinfo.tech",
                      protocol: "https",
                  },
              ],
          },
          output: "standalone",
          poweredByHeader: false,
          reactStrictMode: true,

          async headers() {
              return [
                  {
                      headers: [
                          {
                              key: "Referrer-Policy",
                              value: "origin-when-cross-origin",
                          },
                          {
                              key: "X-Content-Type-Options",
                              value: "nosniff",
                          },
                          {
                              key: "X-DNS-Prefetch-Control",
                              value: "on",
                          },
                          {
                              key: "X-Frame-Options",
                              value: "SAMEORIGIN",
                          },
                      ],
                      source: "/:path*",
                  },
              ];
          },
      };

export default nextConfig;
