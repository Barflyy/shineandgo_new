import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from './analytics'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Liège | Shine&Go - Service Mobile Professionnel',
  description: '🚗 Lavage voiture à domicile en Wallonie. Service de lavage auto professionnel à Liège, Herve, Verviers. Lavage véhicule main. Produits Koch-Chemie. 4.9/5 ⭐ Dès 65€.',
  keywords: 'lavage voiture, lavage voiture domicile, lavage voiture liège, lavage auto, lavage véhicule, lavage voiture belgique, lavage voiture herve, lavage voiture verviers, nettoyage voiture, lavage auto domicile, car wash domicile, lavage voiture main, shine&go',
  authors: [{ name: 'Shine&Go' }],
  creator: 'Shine&Go',
  publisher: 'Shine&Go',
  metadataBase: new URL('https://shineandgo.be'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/globe.svg',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Nettoyage Voiture à Domicile Liège | Shine&Go - Dès 65€',
    description: '🚗 Service mobile premium de nettoyage automobile. Herve, Verviers, Liège. Produits Koch-Chemie pro. Note 4.9/5 sur Google. Réservation en 2 clics.',
    url: 'https://shineandgo.be/',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage voiture à domicile Liège - Shine&Go - Résultat avant/après',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lavage Voiture à Domicile Liège | Shine&Go - Dès 65€',
    description: '🚗 Lavage voiture professionnel à domicile. Note 4.9/5. Produits Koch-Chemie. Réservation WhatsApp.',
    images: ['/transformations/optimized/webp/apres01.webp'],
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
        <Navigation />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
