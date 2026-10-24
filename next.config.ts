import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Note: Enable the deepdigitallabs.com redirect only after the custom domain has been registered and connected in Vercel DNS:
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'deepdigitallabs.vercel.app' }],
      //   destination: 'https://deepdigitallabs.com/:path*',
      //   permanent: true,
      // },
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
