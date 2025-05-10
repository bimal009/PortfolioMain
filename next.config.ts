const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
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
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/port' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/port/' : '',
};

module.exports = nextConfig;