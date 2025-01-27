import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://degree-0.github.io/ts_next_s3_providers_comparison',
      lastModified: new Date(),
    },
    {
      url: 'https://degree-0.github.io/ts_next_s3_providers_comparison/en-US',
      lastModified: new Date(),
    },
    {
      url: 'https://degree-0.github.io/ts_next_s3_providers_comparison/ar-SA',
      lastModified: new Date(),
    },
  ];
} 