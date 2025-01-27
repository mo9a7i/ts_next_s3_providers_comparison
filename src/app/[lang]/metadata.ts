import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Storage Pricing Calculator | Compare S3-Compatible Storage Costs',
  description: 'Compare pricing across major object storage providers like AWS S3, Google Cloud Storage, Azure Blob, Cloudflare R2, and Hetzner. Calculate storage, traffic, and operation costs.',
  keywords: [
    'cloud storage pricing',
    'object storage comparison',
    'S3 pricing calculator',
    'AWS S3',
    'Google Cloud Storage',
    'Azure Blob Storage',
    'Cloudflare R2',
    'Hetzner Storage',
    'storage cost calculator',
    'cloud pricing comparison'
  ],
  openGraph: {
    title: 'Cloud Storage Pricing Calculator',
    description: 'Compare cloud storage costs across major providers. Calculate your estimated monthly costs for storage, traffic, and operations.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Cloud Storage Pricing Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Storage Pricing Calculator',
    description: 'Compare cloud storage costs across major providers',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  },
  authors: [
    {
      name: 'degree-0',
      url: 'https://github.com/degree-0'
    }
  ],
  metadataBase: new URL('https://degree-0.github.io/ts_next_s3_providers_comparison')
}; 