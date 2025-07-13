import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.shineandgo.be';
  const currentDate = new Date().toISOString().split('T')[0];

  // Vidéos de démonstration avec métadonnées optimisées
  const videos = [
    {
      url: '/videos/IMG_1114.MOV',
      title: 'Démonstration nettoyage automobile professionnel - Shine&Go',
      description: 'Vidéo de démonstration du processus de nettoyage automobile professionnel par Shine&Go. Découvrez nos techniques et produits haut de gamme.',
      thumbnail: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
      duration: 'PT2M30S', // 2 minutes 30 secondes
      familyFriendly: true,
      category: 'Automotive',
      tags: ['nettoyage auto', 'car wash', 'détailing', 'professionnel', 'Herve', 'Belgique']
    }
  ];

  // Générer le XML du sitemap vidéo
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${videos.map(video => `    <video:video>
      <video:thumbnail_loc>${baseUrl}${video.thumbnail}</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:content_loc>${baseUrl}${video.url}</video:content_loc>
      <video:duration>${video.duration}</video:duration>
      <video:family_friendly>${video.familyFriendly ? 'yes' : 'no'}</video:family_friendly>
      <video:category>${video.category}</video:category>
      <video:tag>${video.tags.join('</video:tag>\n      <video:tag>')}</video:tag>
    </video:video>`).join('\n')}
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
} 