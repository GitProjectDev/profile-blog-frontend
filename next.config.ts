import type { NextConfig } from 'next'

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '7004',
        pathname: '/uploads/**',
      },
    ],
  },
}

const nextConfig: NextConfig = {
  // output: 'export',
}

export default nextConfig
