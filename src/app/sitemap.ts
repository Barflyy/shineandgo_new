import { MetadataRoute } from 'next';
import { allArticles } from '@/constants/blog-articles';

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
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
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
      url: `${baseUrl}/prix-nettoyage-voiture-domicile`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }
  ];

  // Articles de Blog
  const blogPages = allArticles.map(article => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Pages ville - Extracted from filesystem
  const citySlugs = [
    'nettoyage-voiture-battice',
    'nettoyage-voiture-spa',
    'nettoyage-voiture-xhendelesse',
    'nettoyage-voiture-dalhem',
    'nettoyage-voiture-ensival',
    'nettoyage-voiture-thimister',
    'nettoyage-voiture-melen',
    'nettoyage-voiture-heusy',
    'nettoyage-voiture-dison',
    'nettoyage-voiture-verviers',
    'nettoyage-voiture-vise',
    'nettoyage-voiture-seraing',
    'nettoyage-voiture-stavelot',
    'nettoyage-voiture-blegny',
    'nettoyage-voiture-saint-nicolas',
    'nettoyage-voiture-chaudfontaine',
    'nettoyage-voiture-soumagne',
    'nettoyage-voiture-beyne-heusay',
    'nettoyage-voiture-theux',
    'nettoyage-voiture-olne',
    'nettoyage-voiture-charneux',
    'nettoyage-voiture-hermalle',
    'nettoyage-voiture-oupeye',
    'nettoyage-voiture-bassenge',
    'nettoyage-voiture-francorchamps',
    'nettoyage-voiture-herstal',
    'nettoyage-voiture-clermont',
    'nettoyage-voiture-ans',
    'nettoyage-voiture-malmedy',
    'nettoyage-voiture-argenteau',
    'nettoyage-voiture-lambermont',
    'nettoyage-voiture-liege',
    'nettoyage-voiture-fleron',
    'nettoyage-voiture-jalhay',
    'nettoyage-voiture-bolland',
    'nettoyage-voiture-melier',
    'nettoyage-voiture-trooz',
    'nettoyage-voiture-warsage',
    'nettoyage-voiture-herve',
    'nettoyage-voiture-pepinster',
    'nettoyage-voiture-sart',
    'nettoyage-voiture-aubel',
    'nettoyage-voiture-limbourg',
    'nettoyage-voiture-embourg',
    'nettoyage-voiture-rocourt',
    'nettoyage-voiture-boncelles',
    'nettoyage-voiture-saive'
  ];

  const cityPages = citySlugs.map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...blogPages, ...cityPages];
}
