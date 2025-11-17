import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shineandgo.be';
  const currentDate = new Date();

  // Pages principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/nettoyage-interieur-voiture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nettoyage-exterieur-voiture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nettoyage-complet-voiture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Pages ville - haute priorité pour SEO local
  const cityPages = [
    'nettoyage-voiture-herve',
    'nettoyage-voiture-verviers',
    'lavage-voiture-battice',
    'lavage-voiture-liege',
    'prix-nettoyage-voiture-domicile',
  ].map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...cityPages];
}

