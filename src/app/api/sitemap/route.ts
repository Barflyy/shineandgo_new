import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://shineandgo.be';
  const currentDate = new Date().toISOString().split('T')[0];

           // Pages principales
         const mainPages = [
           { url: '/', priority: '1.0', changefreq: 'weekly' },
           { url: '/nettoyage-voiture', priority: '0.9', changefreq: 'monthly' },
           { url: '/nettoyage-interieur-voiture', priority: '0.9', changefreq: 'monthly' },
           { url: '/nettoyage-exterieur-voiture', priority: '0.9', changefreq: 'monthly' },
           { url: '/nettoyage-complet-voiture', priority: '0.9', changefreq: 'monthly' },
         ];

         

  // Pages des villes principales (hardcodées pour l'instant)
  const cityUrls = [
    { url: '/nettoyage-voiture-liege', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-herve', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-verviers', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-spa', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-welkenraedt', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-dison', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-aywaille', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-chaudfontaine', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-seraing', priority: '0.8', changefreq: 'monthly' },
    { url: '/nettoyage-voiture-flemalle', priority: '0.8', changefreq: 'monthly' },
  ];

                     // Combiner toutes les URLs
          const allUrls = [...mainPages, ...cityUrls];

  // Générer le XML du sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
} 