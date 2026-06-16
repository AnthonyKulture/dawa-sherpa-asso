import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Requis avec output:'export' (Next 16) pour pré-générer sitemap.xml statiquement.
export const dynamic = 'force-static';

// Date déterministe (dernière revue éditoriale) pour éviter un lastModified qui change à chaque build.
const lastModified = new Date('2026-06-16');
const base = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/faire-un-don/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/nos-actions/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/temoignages/`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/contact/`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/mentions-legales/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/confidentialite/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
