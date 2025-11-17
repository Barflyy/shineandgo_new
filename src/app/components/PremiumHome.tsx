"use client"

import PremiumHero from "../components/PremiumHero"
import ModernServices from "../components/ModernServices"
import PremiumTrustBenefits from "../components/PremiumTrustBenefits"
import ModernProcess from "../components/ModernProcess"
import ModernGallery from "../components/ModernGallery"
import RealTestimonials from "../components/RealTestimonials"
import ModernFAQ from "../components/ModernFAQ"
import FinalCTA from "../components/FinalCTA"
import ModernFooter from "../components/ModernFooter"

export default function PremiumHome() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <main>
        <PremiumHero />
        <ModernServices />
        <PremiumTrustBenefits />
        <ModernProcess />
        <ModernGallery />
        <RealTestimonials />
        <ModernFAQ />
        <FinalCTA />
      </main>

      <ModernFooter />

      {/* Schema.org JSON-LD - Enhanced */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "CarWash", "AutoRepair"],
            name: "Shine&Go - Detailing Automobile Mobile",
            description: "Service mobile premium de detailing automobile à domicile. Nettoyage intérieur, extérieur et complet avec produits professionnels.",
            url: "https://shineandgo.be",
            telephone: "+32472303701",
            email: "contact@shineandgo.be",
            priceRange: "€€",
            image: "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Herve",
              addressRegion: "Liège",
              postalCode: "4650",
              addressCountry: "BE"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "50.6386",
              longitude: "5.7942"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "42",
              bestRating: "5",
              worstRating: "1"
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Marc L."
                },
                datePublished: "2025-01-10",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5"
                },
                reviewBody: "Service impeccable ! Ma voiture n'avait jamais été aussi propre. L'équipe est professionnelle, ponctuelle et très minutieuse. Je recommande sans hésitation."
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sophie D."
                },
                datePublished: "2025-01-08",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5"
                },
                reviewBody: "Excellent travail ! Le service à domicile est vraiment pratique. Ma BMW est comme neuve. Finition digne d'un showroom."
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Thomas V."
                },
                datePublished: "2025-01-05",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5"
                },
                reviewBody: "Je suis très satisfait du résultat. L'intérieur de ma voiture est parfaitement propre et sent très bon. Service professionnel et rapide."
              }
            ],
            openingHours: "Mo-Su 08:00-20:00",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de detailing automobile",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Nettoyage Intérieur Premium",
                    description: "Nettoyage complet intérieur avec aspiration, traitement surfaces et vitres"
                  },
                  price: "65",
                  priceCurrency: "EUR"
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Nettoyage Extérieur Showroom",
                    description: "Lavage extérieur complet avec protection hydrophobe"
                  },
                  price: "85",
                  priceCurrency: "EUR"
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Formule Complète",
                    description: "Detailing complet intérieur et extérieur avec finitions premium"
                  },
                  price: "120",
                  priceCurrency: "EUR"
                }
              ]
            },
            areaServed: [
              { "@type": "City", name: "Herve" },
              { "@type": "City", name: "Verviers" },
              { "@type": "City", name: "Liège" },
              { "@type": "City", name: "Battice" },
              { "@type": "City", name: "Soumagne" }
            ],
            serviceType: ["Mobile Car Detailing", "Nettoyage Voiture Mobile", "Interior Cleaning", "Exterior Detailing"],
            paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
            currenciesAccepted: "EUR"
          })
        }}
      />

      {/* Sticky CTA Mobile - Modern Version */}
      <div className="fixed bottom-4 inset-x-4 z-50 md:hidden">
        <div className="flex gap-3">
          <a
            href="https://wa.me/32472303701"
            className="flex-1 text-center rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold py-4 shadow-glow"
            aria-label="Réserver via WhatsApp"
          >
            📲 WhatsApp
          </a>
          <a
            href="tel:+32472303701"
            className="flex-1 text-center rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-dark-200 text-dark-900 font-semibold py-4 shadow-xl"
            aria-label="Appeler Shine&Go"
          >
            📞 Appeler
          </a>
        </div>
      </div>
    </div>
  )
}

