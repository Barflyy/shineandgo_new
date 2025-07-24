import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.shineandgo.be';
  const currentDate = new Date().toISOString().split('T')[0];

  // Pages principales
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/zone-intervention', priority: '0.9', changefreq: 'monthly' },
    { url: '/nettoyage-interieur-voiture', priority: '0.9', changefreq: 'monthly' },
    { url: '/nettoyage-exterieur-voiture', priority: '0.9', changefreq: 'monthly' },
    { url: '/nettoyage-complet-voiture', priority: '0.9', changefreq: 'monthly' },
  ];

  // Pages des villes principales (hardcodées pour l'instant)
  const cityUrls = [
    { url: '/zone-intervention/liege', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/herve', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/verviers', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/spa', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/welkenraedt', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/dison', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/aywaille', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/chaudfontaine', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/seraing', priority: '0.8', changefreq: 'monthly' },
    { url: '/zone-intervention/flemalle', priority: '0.8', changefreq: 'monthly' },
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