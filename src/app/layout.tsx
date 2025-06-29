import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shine&Go - Car wash & nettoyage auto premium à Herve & région",
  description: "Car wash et service de nettoyage automobile haut de gamme à Herve, Verviers, Dison, Pepinster, Spa, Limbourg. À domicile, 7j/7. Devis gratuit, WhatsApp direct.",
  keywords: "car wash, nettoyage auto, lavage voiture, Herve, Verviers, Dison, Spa, Limbourg, service à domicile, nettoyage intérieur, nettoyage extérieur, détail auto, premium",
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
  openGraph: {
    title: "Shine&Go - Car wash & nettoyage auto premium à Herve & région",
    description: "Car wash et service de nettoyage automobile haut de gamme à Herve, Verviers, Dison, Pepinster, Spa, Limbourg. À domicile, 7j/7. Devis gratuit, WhatsApp direct.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/",
    siteName: "Shine&Go Premium",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shine&Go Premium - Service de nettoyage automobile haut de gamme',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine&Go - Car wash & nettoyage auto premium à Herve & région",
    description: "Car wash et service de nettoyage automobile haut de gamme à Herve, Verviers, Dison, Pepinster, Spa, Limbourg. À domicile, 7j/7. Devis gratuit, WhatsApp direct.",
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // À remplacer par votre code Google Search Console
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shine&Go Premium",
              "image": "https://www.shineandgo.be/logo.png",
              "@id": "https://www.shineandgo.be/",
              "url": "https://www.shineandgo.be/",
              "telephone": "+32472303701",
              "priceRange": "€€",
              "currenciesAccepted": "EUR",
              "paymentAccepted": "Cash, Card, Transfer",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rue Moreau, 20",
                "addressLocality": "Herve",
                "postalCode": "4650",
                "addressCountry": "BE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.6391,
                "longitude": 5.7924
              },
              "description": "Car wash et nettoyage auto premium à Herve et dans la région. À domicile, intérieur et extérieur, 7j/7.",
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              }],
              "areaServed": ["Herve", "Verviers", "Dison", "Pepinster", "Spa", "Limbourg"],
              "serviceType": ["Car Wash", "Auto Detailing", "Interior Cleaning", "Exterior Cleaning"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
