const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/PortfolioMain' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/PortfolioMain/' : '',
};

module.exports = nextConfig;