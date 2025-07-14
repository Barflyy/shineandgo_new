import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./analytics";
import { generateStructuredData } from "./config/google-my-business";
import { SpeedInsights } from "@vercel/speed-insights/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Shine&Go – Nettoyage voiture à domicile | Herve, Verviers, Liège, Huy",
  description: "Nettoyage auto et lavage voiture à domicile avec résultats showroom garantis. Service rapide, mobile, 5/5. Réservez en ligne sous 72h.",
  keywords: [
    "nettoyage auto herve",
    "car wash herve",
    "lavage voiture herve",
    "détailing herve",
    "nettoyage intérieur voiture",
    "nettoyage extérieur voiture",
    "service mobile nettoyage auto",
    "produits koch chemie",
    "protectorwax",
    "carpro perl",
    "nettoyage auto verviers",
    "nettoyage auto dison",
    "nettoyage auto spa",
    "nettoyage auto liège",
    "service à domicile nettoyage auto",
    "avant après nettoyage voiture",
    "nettoyage professionnel voiture",
    "car detailing belgique",
    "nettoyage auto mobile",
    "devis gratuit nettoyage auto"
  ],
  authors: [{ name: "Shine&Go Premium" }],
  creator: "Shine&Go Premium",
  publisher: "Shine&Go Premium",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.shineandgo.be'),
  alternates: {
    canonical: '/',
  },
  category: "Automotive Services",
  classification: "Car Wash & Auto Detailing",
  referrer: "origin-when-cross-origin",

  openGraph: {
    title: "Shine&Go – Nettoyage voiture à domicile | Herve, Verviers, Liège, Huy",
    description: "Nettoyage auto et lavage voiture à domicile avec résultats showroom garantis. Service rapide, mobile, 5/5. Réservez en ligne sous 72h.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/",
    siteName: "Shine&Go Premium",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shine&Go Premium - Service de nettoyage automobile haut de gamme à Herve',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine&Go – Nettoyage voiture à domicile | Herve, Verviers, Liège, Huy",
    description: "Nettoyage auto et lavage voiture à domicile avec résultats showroom garantis. Service rapide, mobile, 5/5. Réservez en ligne sous 72h.",
    images: ['/og-image.jpg'],
    creator: '@shineandgo',
    site: '@shineandgo',
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
      'noimageindex': false,
      'notranslate': false,
    },
  },
  // Code de vérification Google Search Console
  verification: {
    google: 'f06vVbpSI4F2xDmxPRvnAWFcMvPm00_-9NYwmq9gWMQ',
    yandex: 'verification_token',
    yahoo: 'verification_token',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Shine&Go',
    'application-name': 'Shine&Go',
    'msapplication-TileColor': '#1f2937',
    'theme-color': '#1f2937',
    'color-scheme': 'dark',
    // Métadonnées business locales
    'business:contact_data:street_address': 'Rue Moreau, 20',
    'business:contact_data:locality': 'Herve',
    'business:contact_data:postal_code': '4650',
    'business:contact_data:country_name': 'Belgique',
    'business:contact_data:phone_number': '0472303701',
    'business:contact_data:website': 'https://www.shineandgo.be',
    'business:contact_data:email': 'contact@shinego.be',
    'business:contact_data:hours': 'Lun-Dim: 8h-20h',
    // Métadonnées SEO avancées
    'geo.region': 'BE-LG',
    'geo.placename': 'Herve',
    'geo.position': '50.6391;5.7924',
    'ICBM': '50.6391, 5.7924',
    'DC.title': 'Shine&Go Premium - Nettoyage Auto & Car Wash à Herve',
    'DC.description': 'Service premium de nettoyage automobile à Herve, Verviers, Dison, Spa. Car wash haut de gamme, nettoyage intérieur/extérieur, produits professionnels Koch Chemie.',
    'DC.subject': 'Nettoyage automobile, Car wash, Service à domicile, Herve, Verviers',
    'DC.creator': 'Shine&Go Premium',
    'DC.publisher': 'Shine&Go Premium',
    'DC.language': 'fr',
    'DC.coverage': 'Herve, Verviers, Dison, Spa, Limbourg, Liège',
    'DC.rights': '© 2025 Shine&Go Premium',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/vercel.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shine&Go" />
        <meta name="application-name" content="Shine&Go" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
