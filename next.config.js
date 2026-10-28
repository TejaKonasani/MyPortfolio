/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  reactStrictMode: true,

  output: 'export',

  trailingSlash: true,

  // Give slow / CPU-capped CI environments enough time to statically
  // export the pages (default is 60s). Does not change the output mode,
  // sub-path, or the deployment workflow.
  staticPageGenerationTimeout: 300,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/MyPortfolio' : '',
  },

  ...(isGithubPages
    ? {
        basePath: '/MyPortfolio',
        assetPrefix: '/MyPortfolio/',
      }
    : {}),
};

module.exports = nextConfig;
