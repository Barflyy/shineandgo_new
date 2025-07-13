import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.shineandgo.be';
  const currentDate = new Date().toISOString().split('T')[0];

  // Images de transformations avec métadonnées optimisées
  const transformationImages = [
    {
      url: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
      title: 'Berline familiale propre après nettoyage - Herve',
      caption: 'Avant/après nettoyage complet d\'une berline familiale à Herve',
      geoLocation: 'Herve, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/berline-familiale-sale-avant-nettoyage-herve.jpeg',
      title: 'Berline familiale sale avant nettoyage - Herve',
      caption: 'État initial d\'une berline familiale avant nettoyage professionnel',
      geoLocation: 'Herve, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/citadine-premium-propre-apres-lavage-aubel.jpeg',
      title: 'Citadine premium propre après lavage - Aubel',
      caption: 'Résultat exceptionnel sur une citadine premium à Aubel',
      geoLocation: 'Aubel, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/citadine-premium-sale-avant-lavage-aubel.jpeg',
      title: 'Citadine premium sale avant lavage - Aubel',
      caption: 'État initial d\'une citadine premium avant nettoyage',
      geoLocation: 'Aubel, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/interieur-voiture-propre-apres-nettoyage-dison.jpeg',
      title: 'Intérieur voiture propre après nettoyage - Dison',
      caption: 'Nettoyage intérieur professionnel d\'un véhicule à Dison',
      geoLocation: 'Dison, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/interieur-voiture-sale-avant-nettoyage-dison.jpeg',
      title: 'Intérieur voiture sale avant nettoyage - Dison',
      caption: 'État initial de l\'intérieur avant nettoyage professionnel',
      geoLocation: 'Dison, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/monospace-familial-propre-apres-nettoyage-huy.jpeg',
      title: 'Monospace familial propre après nettoyage - Huy',
      caption: 'Transformation complète d\'un monospace familial à Huy',
      geoLocation: 'Huy, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/monospace-familial-sale-avant-nettoyage-huy.jpeg',
      title: 'Monospace familial sale avant nettoyage - Huy',
      caption: 'État initial d\'un monospace familial avant nettoyage',
      geoLocation: 'Huy, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/suv-premium-propre-apres-lavage-verviers.jpeg',
      title: 'SUV premium propre après lavage - Verviers',
      caption: 'Résultat premium sur un SUV à Verviers',
      geoLocation: 'Verviers, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/suv-premium-sale-avant-lavage-verviers.jpeg',
      title: 'SUV premium sale avant lavage - Verviers',
      caption: 'État initial d\'un SUV premium avant nettoyage',
      geoLocation: 'Verviers, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/utilitaire-commercial-propre-apres-nettoyage-liege.jpeg',
      title: 'Utilitaire commercial propre après nettoyage - Liège',
      caption: 'Nettoyage professionnel d\'un utilitaire commercial à Liège',
      geoLocation: 'Liège, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/utilitaire-commercial-sale-avant-nettoyage-liege.jpeg',
      title: 'Utilitaire commercial sale avant nettoyage - Liège',
      caption: 'État initial d\'un utilitaire commercial avant nettoyage',
      geoLocation: 'Liège, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/voiture-sport-propre-apres-detailing-spa.jpeg',
      title: 'Voiture sport propre après detailing - Spa',
      caption: 'Detailing professionnel d\'une voiture sport à Spa',
      geoLocation: 'Spa, Belgique',
      license: 'https://www.shineandgo.be/license'
    },
    {
      url: '/transformations/voiture-sport-sale-avant-detailing-spa.jpeg',
      title: 'Voiture sport sale avant detailing - Spa',
      caption: 'État initial d\'une voiture sport avant detailing',
      geoLocation: 'Spa, Belgique',
      license: 'https://www.shineandgo.be/license'
    }
  ];

  // Générer le XML du sitemap d'images
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${transformationImages.map(image => `    <image:image>
      <image:loc>${baseUrl}${image.url}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
      <image:geo_location>${image.geoLocation}</image:geo_location>
      <image:license>${image.license}</image:license>
    </image:image>`).join('\n')}
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
} 