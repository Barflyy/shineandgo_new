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
      url: `${baseUrl}/lavage-interieur-voiture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lavage-exterieur-voiture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lavage-complet-voiture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/zones`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/entreprises`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prix-lavage-voiture-domicile`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }
  ];

  // Pages ville - Only existing pages
  const citySlugs = [
    'lavage-voiture-ans',
    'lavage-voiture-battice',
    'lavage-voiture-dison',
    'lavage-voiture-hermalle',
    'lavage-voiture-herve',
    'lavage-voiture-heusy',
    'lavage-voiture-liege',
    'lavage-voiture-malmedy',
    'lavage-voiture-melen',
    'lavage-voiture-saint-nicolas',
    'lavage-voiture-seraing',
    'lavage-voiture-soumagne',
    'lavage-voiture-spa',
    'lavage-voiture-theux',
    'lavage-voiture-verviers'
  ];

  const cityPages = citySlugs.map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...cityPages];
}
