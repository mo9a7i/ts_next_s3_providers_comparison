import { type NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  basePath: '/ts_next_s3_providers_comparison',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default config
