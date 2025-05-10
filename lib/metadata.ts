// lib/metadata.ts
import { Metadata } from 'next';

// Base metadata configuration for the entire site
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.bimalpandey.com'),
  title: {
    template: '%s | Bimal Pandey',
    default: 'Bimal Pandey | Full Stack Developer',
  },
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Development',
    'Bimal Pandey',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Bimal Pandey' }],
  creator: 'Bimal Pandey',
  publisher: 'Bimal Pandey',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bimalpandey.com',
    title: 'Bimal Pandey | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies',
    siteName: 'Bimal Pandey Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bimal Pandey - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bimal Pandey | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies',
    images: ['/og-image.jpg'],
    creator: '@CodeWithBun',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Add verification IDs if available
    google: 'google-site-verification-id',
    // yandex: 'yandex-verification-id',
  },
  alternates: {
    canonical: 'https://www.bimalpandey.com',
  },
};

// Next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;

// robots.txt (place in /public directory)
// User-agent: *
// Allow: /
// 
// Sitemap: https://www.bimalpandey.com/sitemap.xml