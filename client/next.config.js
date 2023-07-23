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
        hostname: 'lh3.googleusercontent.com'
      },
      {
        hostname: 'static-cdn.jtvnw.net'
      },
      {
        hostname: 'www.spadegaming.com'
      },   
    ],
  },
  env: {
    GOOGLE_CLIENT: '303089696961-pctgj1r1o9kd7vdmkgjo63ddk1pnfb80.apps.googleusercontent.com ',
    GOOGLE_SECRET: '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'
  },
  typescript: {
    ignoreBuildErrors: true,
 },
};

module.exports = nextConfig;
