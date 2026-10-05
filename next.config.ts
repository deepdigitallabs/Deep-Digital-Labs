import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/ecommerce-website-development-pune',
        destination: '/ecommerce-website-design-pune',
        permanent: true,
      },
      {
        source: '/pune-ecommerce-website-design',
        destination: '/ecommerce-website-design-pune',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
