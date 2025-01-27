import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://degree-0.github.io/ts_next_s3_providers_comparison';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en-US/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/ar-SA/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ];
} 