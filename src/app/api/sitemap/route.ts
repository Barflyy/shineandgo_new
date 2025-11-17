import { NextResponse } from 'next/server'

export async function GET() {
  // 🔧 SEO: Base URL sans www pour éviter la duplication de contenu
  const baseUrl = 'https://shineandgo.be'
  
  // 🔧 SEO: Pages existantes uniquement (suppression de /services)
  const pages = [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: '/nettoyage-interieur-voiture',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/nettoyage-exterieur-voiture',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/nettoyage-complet-voiture',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/nettoyage-voiture-herve',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/nettoyage-voiture-verviers',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8'
    }
  ]

  // 🔧 SEO: Générer le XML du sitemap avec URLs canoniques uniquement
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
} 