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
      url: `${baseUrl}/prix-lavage-voiture-domicile`,
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
    'lavage-voiture-battice',
    'lavage-voiture-spa',
    'lavage-voiture-xhendelesse',
    'lavage-voiture-dalhem',
    'lavage-voiture-ensival',
    'lavage-voiture-thimister',
    'lavage-voiture-melen',
    'lavage-voiture-heusy',
    'lavage-voiture-dison',
    'lavage-voiture-verviers',
    'lavage-voiture-vise',
    'lavage-voiture-seraing',
    'lavage-voiture-stavelot',
    'lavage-voiture-blegny',
    'lavage-voiture-saint-nicolas',
    'lavage-voiture-chaudfontaine',
    'lavage-voiture-soumagne',
    'lavage-voiture-beyne-heusay',
    'lavage-voiture-theux',
    'lavage-voiture-olne',
    'lavage-voiture-charneux',
    'lavage-voiture-hermalle',
    'lavage-voiture-oupeye',
    'lavage-voiture-bassenge',
    'lavage-voiture-francorchamps',
    'lavage-voiture-herstal',
    'lavage-voiture-clermont',
    'lavage-voiture-ans',
    'lavage-voiture-malmedy',
    'lavage-voiture-argenteau',
    'lavage-voiture-lambermont',
    'lavage-voiture-liege',
    'lavage-voiture-fleron',
    'lavage-voiture-jalhay',
    'lavage-voiture-bolland',
    'lavage-voiture-melier',
    'lavage-voiture-trooz',
    'lavage-voiture-warsage',
    'lavage-voiture-herve',
    'lavage-voiture-pepinster',
    'lavage-voiture-sart',
    'lavage-voiture-aubel',
    'lavage-voiture-limbourg',
    'lavage-voiture-embourg',
    'lavage-voiture-rocourt',
    'lavage-voiture-boncelles',
    'lavage-voiture-saive'
  ];

  const cityPages = citySlugs.map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...blogPages, ...cityPages];
}
