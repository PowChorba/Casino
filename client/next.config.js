/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cbet.gg",
      },
      {
        hostname: "roobet.com"
      },
      {
        hostname: "cdn.hub88.io"
      },
      {
        hostname: "caletagaming.com"
      },
      {
        hostname: "www.spadegaming.com"
      }    
    ],
  },
};

module.exports = nextConfig;
