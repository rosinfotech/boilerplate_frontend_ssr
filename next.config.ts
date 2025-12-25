import type { NextConfig } from "next";


const nextConfig: NextConfig = {
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
