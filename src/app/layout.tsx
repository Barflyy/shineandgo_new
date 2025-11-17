import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './shared/styles/globals.css'
import Analytics from './analytics'
import StickyPhoneButton from '@/components/StickyPhoneButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Detailing Automobile Premium Herve Verviers Liège | Service Mobile - Shine&Go',
  description: 'Detailing automobile premium à domicile. Service mobile professionnel Herve, Verviers, Liège. Produits Koch-Chemie exclusifs. Résultat niveau concession garanti. À partir de 65€.',
  keywords: 'lavage voiture domicile, nettoyage voiture herve, lavage voiture verviers, nettoyage voiture liege, lavage voiture mobile, nettoyage interieur voiture, lavage exterieur voiture, shine&go, wallonie, belgique',
  authors: [{ name: 'Shine&Go' }],
  creator: 'Shine&Go',
  publisher: 'Shine&Go',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Nettoyage Voiture Premium Herve Verviers Liège | À Domicile',
    description: 'Nettoyage voiture premium mobile. Herve, Verviers, Liège. Produits Koch-Chemie. Résultat showroom. À partir de 65€.',
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
    title: 'Nettoyage Voiture Premium Mobile | Herve Verviers Liège',
    description: 'Nettoyage voiture premium. Service mobile professionnel. Résultat showroom. À partir de 65€.',
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
        <StickyPhoneButton />
      </body>
    </html>
  )
}
