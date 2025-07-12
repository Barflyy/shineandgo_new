import { NextResponse } from 'next/server';
import { getAllCities } from '../../utils/cityData';

export async function GET() {
  const baseUrl = 'https://www.shineandgo.be';
  const currentDate = new Date().toISOString().split('T')[0];

  // Pages principales (sans /services/nettoyage-interieur)
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/zone-intervention', priority: '0.9', changefreq: 'monthly' },
  ];

  // Générer les URLs pour toutes les villes
  const citySlugs = getAllCities();
  const cityUrls = citySlugs.map(slug => ({
    url: `/zone-intervention/${slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

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