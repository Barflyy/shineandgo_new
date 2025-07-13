import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.shineandgo.be';
  const currentDate = new Date().toISOString().split('T')[0];

  // Liste de tous les sitemaps
  const sitemaps = [
    {
      url: '/api/sitemap',
      lastmod: currentDate,
      priority: '1.0'
    },
    {
      url: '/api/sitemap-images',
      lastmod: currentDate,
      priority: '0.8'
    },
    {
      url: '/api/sitemap-videos',
      lastmod: currentDate,
      priority: '0.7'
    }
  ];

  // Générer le XML du sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}${sitemap.url}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
    <priority>${sitemap.priority}</priority>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
} 