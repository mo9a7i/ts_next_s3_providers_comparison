import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://degree-0.github.io/ts_next_s3_providers_comparison/sitemap.xml',
  };
} 