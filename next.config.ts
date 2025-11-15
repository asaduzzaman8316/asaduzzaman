// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Enable React strict mode for better debugging
    reactStrictMode: true,
    
    // Optimize images
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'portfolio-dev-omega-puce.vercel.app',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    
    // Compiler optimizations
    compiler: {
        // Remove console.logs in production
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },
    
    // Turbopack configuration (Next.js 15+)
    turbopack: {},
    
    // Experimental features for better performance
    experimental: {
        // Enable modern bundling for better tree-shaking
        optimizePackageImports: [
            'react-icons', 
            'typewriter-effect',
            '@react-three/fiber',
            '@react-three/drei',
            'three'
        ],
    },
    
    // Webpack optimizations
    webpack: (config, { isServer }) => {
        // Optimize Three.js and react-three-fiber imports
        if (!isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                // Use the module version of Three.js for better tree-shaking
                'three': 'three/build/three.module.js',
            }
            
            // Optimize performance
            config.optimization = {
                ...config.optimization,
                moduleIds: 'deterministic',
            }
        }
        
        // Handle shader files if using custom shaders
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader'],
        })
        
        return config
    },
    
    // Headers for better caching and security
    async headers() {
        return [
            {
                // Cache static assets
                source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Security headers
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                ],
            },
        ]
    },
}

export default nextConfig;