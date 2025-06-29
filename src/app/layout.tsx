import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Shine&Go - Car wash & nettoyage auto premium à Herve & région",
    description: "Car wash et service de nettoyage automobile haut de gamme à Herve, Verviers, Dison, Pepinster, Spa, Limbourg. À domicile, 7j/7. Devis gratuit, WhatsApp direct.",
    type: "website",
    locale: "fr_BE",
    url: "https://shinego.be/",
    siteName: "Shine&Go Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine&Go - Car wash & nettoyage auto premium à Herve & région",
    description: "Car wash et service de nettoyage automobile haut de gamme à Herve, Verviers, Dison, Pepinster, Spa, Limbourg. À domicile, 7j/7. Devis gratuit, WhatsApp direct.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shine&Go Premium",
              "image": "https://shinego.be/logo.png",
              "@id": "https://shinego.be/",
              "url": "https://shinego.be/",
              "telephone": "+32472303701",
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
              "description": "Car wash et nettoyage auto premium à Herve et dans la région. Service à domicile, intérieur et extérieur, 7j/7.",
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
              "areaServed": ["Herve", "Verviers", "Dison", "Pepinster", "Spa", "Limbourg"]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
