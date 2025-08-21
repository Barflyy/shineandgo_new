"use client"

import PremiumHero from "../components/PremiumHero"
import PremiumValues from "../components/PremiumValues"
import PremiumOffers from "../components/PremiumOffers"
import PremiumBeforeAfter from "../components/PremiumBeforeAfter"
import PremiumTestimonials from "../components/PremiumTestimonials"
import PremiumFinalCTA from "../components/PremiumFinalCTA"
import ServiceAreasSection from "../shared/sections/ServiceAreasSection"

export default function PremiumHome() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <PremiumHero />
        <PremiumValues />
        <PremiumOffers />
        <PremiumBeforeAfter />
        <ServiceAreasSection className="bg-white" />
        <PremiumTestimonials />
        <PremiumFinalCTA />
      </main>

      {/* Schema.org JSON-LD - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "CarWash"],
            name: "Shine&Go",
            url: "https://shineandgo.be",
            telephone: "+32472303701",
            email: "contact@shine-go.be",
            priceRange: "€€€",
            offers: [
              { "@type": "Offer", name: "Essentiel Privé", price: "149", priceCurrency: "EUR" },
              { "@type": "Offer", name: "Signature Privé", price: "249", priceCurrency: "EUR" },
            ],
            areaServed: [
              { "@type": "AdministrativeArea", name: "Herve" },
              { "@type": "AdministrativeArea", name: "Verviers" },
              { "@type": "AdministrativeArea", name: "Liège" },
            ],
          }),
        }}
      />

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-3 inset-x-3 z-[60] md:hidden">
        <div className="flex gap-3">
          <a
            href="https://wa.me/32472303701"
            className="flex-1 text-center rounded-xl bg-blue-600 text-white font-semibold py-3 shadow-lg"
            aria-label="Réserver via WhatsApp"
          >
            📲 WhatsApp
          </a>
          <a
            href="tel:+32472303701"
            className="flex-1 text-center rounded-xl bg-white border border-slate-200 text-slate-900 font-semibold py-3 shadow-lg"
            aria-label="Appeler Shine&Go"
          >
            📞 Appeler
          </a>
        </div>
      </div>
    </div>
  )
}

