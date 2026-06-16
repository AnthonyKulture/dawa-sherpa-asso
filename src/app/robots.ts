import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Requis avec output:'export' (Next 16) pour pré-générer robots.txt statiquement.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
