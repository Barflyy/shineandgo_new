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
    'nettoyage-voiture-battice',
    'nettoyage-voiture-liege',
    'nettoyage-voiture-spa',
    'nettoyage-voiture-soumagne',
    'nettoyage-voiture-fleron',
    'nettoyage-voiture-vise',
    // New pages - Basse-Meuse
    'nettoyage-voiture-warsage',
    'nettoyage-voiture-oupeye',
    'nettoyage-voiture-dalhem',
    'nettoyage-voiture-bassenge',
    'nettoyage-voiture-argenteau',
    'nettoyage-voiture-hermalle',
    // New pages - Plateau
    'nettoyage-voiture-thimister',
    'nettoyage-voiture-clermont',
    'nettoyage-voiture-aubel',
    'nettoyage-voiture-melier',
    'nettoyage-voiture-charneux',
    'nettoyage-voiture-xhendelesse',
    'nettoyage-voiture-bolland',
    // New pages - Liege
    'nettoyage-voiture-beyne-heusay',
    'nettoyage-voiture-chaudfontaine',
    'nettoyage-voiture-trooz',
    'nettoyage-voiture-olne',
    'nettoyage-voiture-melen',
    'nettoyage-voiture-herstal',
    'nettoyage-voiture-ans',
    'nettoyage-voiture-seraing',
    'nettoyage-voiture-saint-nicolas',
    'nettoyage-voiture-blegny',
    // New pages - Verviers/Spa
    'nettoyage-voiture-theux',
    'nettoyage-voiture-jalhay',
    'nettoyage-voiture-sart',
    'nettoyage-voiture-malmedy',
    'nettoyage-voiture-stavelot',
    'nettoyage-voiture-francorchamps',
    'nettoyage-voiture-heusy',
    'nettoyage-voiture-ensival',
    'nettoyage-voiture-pepinster',
    'nettoyage-voiture-dison',
    'nettoyage-voiture-lambermont',
    'nettoyage-voiture-lambermont',
    // Corporate & Zones
    'entreprises',
    'zones',
    // Legal
    'mentions-legales',
    'politique-confidentialite',
    // Pricing
    'prix-nettoyage-voiture-domicile',
  ].map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...cityPages];
}

