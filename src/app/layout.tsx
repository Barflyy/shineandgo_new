import type { Metadata, Viewport } from 'next';
import { Manrope, DM_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import JsonLd from '@/components/JsonLd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shineandgo.be'),
  title: {
    default: 'Lavage Voiture à Domicile Herve, Liège, Verviers | Dès 80€ ⭐ 5.0 - Shine&Go',
    template: '%s | Shine&Go',
  },
  description: '🚗 Lavage voiture à domicile près de Herve, Liège, Verviers. On vient chez vous ! ✅ Valeting professionnel ✅ Note 5/5 Google ✅ Résultat showroom en 90 min ✅ Produits Koch-Chemie. Dès 80€ - Devis gratuit !',
  keywords: [
    'lavage voiture à domicile',
    'nettoyage voiture à domicile',
    'lavage auto domicile',
    'valeting automobile',
    'detailing voiture',
    'lavage voiture Herve',
    'lavage voiture Liège',
    'lavage voiture Verviers',
    'lavage voiture Battice',
    'lavage voiture Spa',
    'lavage voiture Seraing',
    'nettoyage voiture domicile liège',
    'nettoyage voiture domicile verviers',
    'nettoyage intérieur voiture',
    'nettoyage extérieur voiture',
    'prix lavage voiture domicile',
    'service lavage mobile',
    'Shine&Go'
  ],
  authors: [{ name: 'Shine&Go', url: 'https://shineandgo.be' }],
  creator: 'Shine&Go',
  publisher: 'Shine&Go',
  alternates: {
    canonical: 'https://shineandgo.be',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://shineandgo.be',
    siteName: 'Shine&Go',
    title: 'Lavage Voiture à Domicile en Wallonie | Dès 80€ - Shine&Go',
    description: 'Lavage voiture professionnel à domicile en Wallonie. Nettoyage intérieur & extérieur. Résultat showroom en 90 min. Dès 80€ !',
    images: [
      {
        url: '/images/realisations/lavage-complet-audi-rs3.webp',
        width: 1200,
        height: 630,
        alt: 'Shine&Go - Service de lavage voiture à domicile premium en Wallonie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lavage Voiture à Domicile | Shine&Go Wallonie',
    description: 'Lavage voiture professionnel à domicile. Nettoyage intérieur & extérieur dès 80€. Résultat showroom !',
    images: ['/images/realisations/lavage-complet-audi-rs3.webp'],
  },
  verification: {
    google: 'qvYL8nyWuIvKhqrZsxz-2cN6HLmW8XN64oXNDLR8QnY',
  },
  category: 'automotive',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

import StickyMobileBar from '@/components/StickyMobileBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased pb-20 md:pb-0 bg-slate-50">
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
        <WhatsAppWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


