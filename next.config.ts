import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  distDir: 'build',
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
