import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://shineandgo.be'
  
  const sitemaps = [
    {
      url: '/api/sitemap',
      lastmod: new Date().toISOString()
    }
  ]

  // Générer le XML du sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}${sitemap.url}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
} 