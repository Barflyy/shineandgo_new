import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Analytics from "./analytics";
import { generateStructuredData } from "./config/google-my-business";
import { SpeedInsights } from "@vercel/speed-insights/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: 'swap',
  preload: true,
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: "Shine&Go Premium – Nettoyage Voiture & Car Wash Mobile | Service à Domicile",
  description: "🚗 Service premium de nettoyage automobile mobile : lavage voiture, car wash, détailing à domicile. Produits professionnels, résultats garantis. Réservation 24h/24.",
  keywords: [
    // Mots-clés génériques principaux
    "nettoyage voiture",
    "lavage auto",
    "car wash",
    "nettoyage automobile",
    "détailing voiture",
    "lavage véhicule",
    "nettoyage auto",
    
    // Services spécialisés
    "nettoyage intérieur voiture",
    "nettoyage extérieur voiture",
    "lavage intérieur auto",
    "lavage extérieur auto",
    "car detailing",
    "détailing automobile",
    
    // Service mobile
    "service mobile nettoyage auto",
    "nettoyage voiture à domicile",
    "lavage auto mobile",
    "car wash à domicile",
    "service à domicile nettoyage auto",
    "nettoyage auto domicile",
    
    // Qualité et produits
    "produits koch chemie",
    "carpro",
    "carpro perl",
    "nettoyage professionnel voiture",
    "lavage professionnel auto",
    "car wash premium",
    "produits professionnels auto",
    
    // Actions et conversions
    "devis gratuit nettoyage auto",
    "réserver nettoyage voiture",
    "tarif lavage auto",
    "prix nettoyage automobile",
    
    // Localisation générale (pour le layout global)
    "car detailing belgique",
    "nettoyage auto wallonie",
    "service mobile belgique"
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
    title: "Shine&Go Premium – Nettoyage Voiture & Car Wash Mobile | Service à Domicile",
    description: "🚗 Service premium de nettoyage automobile mobile : lavage voiture, car wash, détailing à domicile. Produits professionnels, résultats garantis.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/",
    siteName: "Shine&Go Premium",
    images: [
      {
        url: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
        width: 1200,
        height: 630,
        alt: 'Avant/Après nettoyage voiture professionnel - Shine&Go Premium - Car wash mobile',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine&Go Premium – Nettoyage Voiture & Car Wash Mobile",
    description: "🚗 Service premium de nettoyage automobile mobile : produits professionnels, résultats garantis. Réservation 24h/24.",
    images: ['/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg'],
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
    'msapplication-TileColor': '#2563EB',
    'theme-color': '#2563EB',
    'color-scheme': 'light',
    'business:contact_data:street_address': 'Rue Moreau, 20',
    'business:contact_data:locality': 'Herve',
    'business:contact_data:postal_code': '4650',
    'business:contact_data:country_name': 'Belgique',
    'business:contact_data:phone_number': '0472303701',
    'business:contact_data:website': 'https://www.shineandgo.be',
    'business:contact_data:email': 'contact@shinego.be',
    'business:contact_data:hours': 'Lun-Dim: 8h-20h',
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
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.shineandgo.be" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="X08CcPH1dVGJLHAq8ykJr8YQlNOuOp2OYcGqMFB7bIE" />
        
        {/* Calendly Widget Script */}
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <Analytics />
      </head>
      <body className="font-inter antialiased relative min-h-screen">
        {/* Enhanced Site Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
          
          {/* Geometric shapes for depth */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Large decorative circles */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-100/20 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Medium decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-indigo-300/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-tl from-indigo-200/10 to-blue-300/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
