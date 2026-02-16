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
}

export default nextConfig
