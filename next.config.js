/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/landing_page",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
