import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './shared/styles/globals.css'
import Analytics from './analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lavage voiture à domicile Herve Verviers Liège – Shine&Go | Nettoyage intérieur extérieur',
  description: 'Lavage voiture à domicile en Wallonie. Service mobile premium avec produits Koch-Chemie & CarPro. Nettoyage intérieur et extérieur, résultat showroom garanti. Devis gratuit, réservation rapide.',
  keywords: 'lavage voiture domicile, nettoyage voiture herve, lavage voiture verviers, nettoyage voiture liege, lavage voiture mobile, nettoyage interieur voiture, lavage exterieur voiture, shine&go, wallonie, belgique',
  authors: [{ name: 'Shine&Go' }],
  creator: 'Shine&Go',
  publisher: 'Shine&Go',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Lavage voiture à domicile Herve Verviers Liège – Shine&Go',
    description: 'Service mobile premium de lavage voiture à domicile en Wallonie. Nettoyage intérieur et extérieur avec produits professionnels. Résultat showroom garanti.',
    url: 'https://shineandgo.be/',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Shine&Go - Lavage voiture à domicile - Résultat avant/après',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lavage voiture à domicile Herve Verviers Liège – Shine&Go',
    description: 'Service mobile premium de lavage voiture à domicile en Wallonie. Nettoyage intérieur et extérieur avec produits professionnels.',
    images: ['/transformations/optimized/webp/apres01.webp'],
  },
  alternates: {
    canonical: 'https://shineandgo.be/',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'BE-WAL',
    'geo.placename': 'Herve, Verviers, Liège',
    'geo.position': '50.6386;5.7942',
    'ICBM': '50.6386, 5.7942',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
