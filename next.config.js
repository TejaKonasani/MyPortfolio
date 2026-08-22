/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  reactStrictMode: true,

  output: 'export',

  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  ...(isGithubPages
    ? {
        basePath: '/MyPortfolio',
        assetPrefix: '/MyPortfolio/',
      }
    : {}),
};

module.exports = nextConfig;