import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config;
  },
  experimental: {
    turbo: undefined,
  },
  images: {
    remotePatterns: [
      { hostname: 'i.imgur.com' },
      { hostname: 'ik.imagekit.io' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'www.gstatic.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.asecureannapolislocksmith.com',
          },
        ],
        destination: 'https://asecureannapolislocksmith.com/:path*',
        permanent: true,
      },
      {
        source: '/services/residential',
        destination: '/services#residential',
        permanent: true,
      },
      {
        source: '/services/commercial',
        destination: '/services#commercial',
        permanent: true,
      },
      {
        source: '/services/automotive',
        destination: '/services#automotive',
        permanent: true,
      },
      {
        source: '/services/emergency',
        destination: '/services#emergency',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

export default nextConfig
