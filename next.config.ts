import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',

            },
            {
                protocol: 'https',
                hostname: 's3-alpha-sig.figma.com',
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
