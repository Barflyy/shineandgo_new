import { ArrowRight, Check, Star, Clock, Sparkles, Car, Armchair, Phone, MapPin, Shield, Zap, Droplets } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lavage Voiture Intérieur à Domicile Liège | Dès 65€ - Shine&Go',
  description: 'Lavage voiture intérieur à domicile en région liégeoise. Aspiration, nettoyage plastiques, tapis, vitres, désodorisation. Produits Koch-Chemie. Dès 65€. ☎ 0472 30 37 01',
  alternates: {
    canonical: 'https://shineandgo.be/lavage-interieur-voiture',
  },
  openGraph: {
    title: 'Lavage Voiture Intérieur à Domicile | Shine&Go',
    description: 'Nettoyage intérieur voiture professionnel à domicile. Aspiration, plastiques, tapis, désodorisation. Dès 65€.',
    url: 'https://shineandgo.be/lavage-interieur-voiture',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavage Intérieur Voiture à Domicile",
  "description": "Nettoyage complet de l'habitacle : aspiration, tapis, plastiques, tableau de bord, vitres intérieures. Finitions au pinceau et désodorisation.",
  "image": "https://shineandgo.be/images/realisations/lavage-complet-bmw-serie4.webp",
  "brand": {
    "@type": "Brand",
    "name": "Shine&Go"
  },
  "offers": {
    "@type": "Offer",
    "price": "65",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
    "url": "https://shineandgo.be/lavage-interieur-voiture",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "BE",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 14,
      "returnMethod": "https://schema.org/ReturnInStore"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": 0,
        "currency": "EUR"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "BE"
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte un nettoyage intérieur voiture à domicile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos tarifs démarrent à 65€ pour un nettoyage intérieur complet. Un supplément s'applique selon la taille du véhicule. Le déplacement est inclus en région liégeoise."
      }
    },
    {
      "@type": "Question",
      "name": "Que comprend le nettoyage intérieur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le nettoyage intérieur comprend : aspiration complète, nettoyage des plastiques et tableau de bord, nettoyage des vitres intérieures, nettoyage des tapis et moquettes, et désodorisation de l'habitacle."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure l'intervention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un nettoyage intérieur complet dure environ 1h30 à 2h selon l'état du véhicule."
      }
    },
    {
      "@type": "Question",
      "name": "Avez-vous besoin d'eau ou d'électricité ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Idéalement oui, une prise électrique et un robinet à moins de 25m. Si ce n'est pas possible, prévenez-nous lors de la réservation."
      }
    }
  ]
}

export default function NettoyageInterieurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-gray-50 min-h-screen font-sans">

        {/* HERO - Minimaliste */}
        <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 rounded-full">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">4.9/5 sur Google</span>
              </div>

              {/* Titre H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Lavage voiture intérieur à domicile
              </h1>

              <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
                Nettoyage complet de l'habitacle : plastiques, tapis, vitres, désodorisation. On vient chez vous en région liégeoise.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur"
                  className="group px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  Réserver dès 65€
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+32472303701"
                  className="px-8 py-4 text-gray-600 font-medium flex items-center gap-2 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0472 30 37 01
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* CONTENU - Bento Grid */}
        <div className="container mx-auto px-4 sm:px-6 py-16 space-y-8">

          {/* CE QUI EST INCLUS */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ce qui est inclus</h2>
              <p className="text-gray-500">Chaque prestation intérieur comprend</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🧹", title: "Aspiration complète", desc: "Tapis, moquettes, sièges, coffre, recoins" },
                { icon: "✨", title: "Nettoyage plastiques", desc: "Tableau de bord, console centrale, portières" },
                { icon: "🪟", title: "Vitres intérieures", desc: "Pare-brise, vitres latérales, rétroviseur" },
                { icon: "🧽", title: "Nettoyage tapis", desc: "Shampooing des tapis et moquettes si nécessaire" },
                { icon: "💨", title: "Désodorisation", desc: "Élimination des mauvaises odeurs" },
                { icon: "🔍", title: "Finitions pinceau", desc: "Aérations, boutons, jointures" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NOTRE PROCESSUS */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Notre processus</h2>
              <p className="text-gray-500">Comment se déroule l'intervention</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Réservation", desc: "Contactez-nous via WhatsApp ou téléphone. Devis gratuit en 2 minutes." },
                { step: "2", title: "Rendez-vous", desc: "On fixe un créneau qui vous arrange, à domicile ou au bureau." },
                { step: "3", title: "Intervention", desc: "Notre technicien arrive avec tout le matériel professionnel." },
                { step: "4", title: "Validation", desc: "Vous validez le résultat avant de payer. Satisfait ou retouche offerte." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TARIFS + UPSELL COMPLET */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Intérieur */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Armchair className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intérieur</h3>
                <div className="text-4xl font-bold text-gray-900 mt-4">Dès 65€</div>
                <p className="text-sm text-gray-500 mt-1">Supplément selon taille</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Aspiration complète", "Nettoyage plastiques", "Vitres intérieures", "Désodorisation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur"
                className="block w-full py-4 border border-gray-200 text-gray-900 font-semibold rounded-full text-center hover:bg-gray-50 transition-colors"
              >
                Réserver
              </a>
            </div>

            {/* Complet - Upsell */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</div>
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Intérieur + Extérieur</h3>
                <div className="text-4xl font-bold mt-4">Dès 120€</div>
                <p className="text-sm text-green-400 mt-1">Économisez 30€</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Tout l'intérieur", "Lavage extérieur main", "Jantes & pneus", "Protection hydrophobe"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-green-400" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite le lavage complet"
                className="block w-full py-4 bg-white text-slate-900 font-bold rounded-full text-center hover:bg-gray-100 transition-colors"
              >
                Réserver le complet
              </a>
            </div>
          </div>

          {/* POURQUOI NOUS */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Pourquoi choisir Shine&Go ?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Satisfait ou remboursé", desc: "Garantie sur chaque prestation" },
                { icon: Sparkles, title: "Produits premium", desc: "Koch-Chemie exclusivement" },
                { icon: Clock, title: "Service rapide", desc: "Intervention en 2-3h" },
                { icon: MapPin, title: "À domicile", desc: "On vient chez vous" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ZONES D'INTERVENTION */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Zones d'intervention</h2>
              <p className="text-gray-500">Déplacement gratuit en région liégeoise</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Liège", "Herve", "Verviers", "Spa", "Battice", "Soumagne", "Fléron", "Visé", "Seraing"].map((ville, i) => (
                <Link
                  key={i}
                  href={`/lavage-voiture-${ville.toLowerCase().replace('é', 'e')}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  {ville}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/zones" className="text-blue-600 font-medium hover:underline">
                Voir toutes les zones →
              </Link>
            </div>
          </section>

          {/* TÉMOIGNAGES */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Avis clients</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-500">sur Google</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Sophie M.", city: "Liège", text: "Intérieur impeccable ! L'odeur de propre est incroyable. Je recommande vivement." },
                { name: "Marc D.", city: "Verviers", text: "Très professionnel. Ma voiture n'avait pas été aussi propre depuis des années." },
                { name: "Julie K.", city: "Herve", text: "Service pratique et résultat top. On voit que c'est du travail soigné." },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{item.text}"</p>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">{item.name}</span>
                    <span className="text-gray-500"> · {item.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Questions fréquentes</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Combien coûte un nettoyage intérieur ?", a: "Nos tarifs démarrent à 65€. Un supplément s'applique selon la taille du véhicule (SUV, monospace, utilitaire)." },
                { q: "Que comprend le nettoyage intérieur ?", a: "Aspiration complète, nettoyage des plastiques et tableau de bord, vitres intérieures, tapis et moquettes, désodorisation." },
                { q: "Combien de temps dure l'intervention ?", a: "Comptez environ 1h30 à 2h pour un nettoyage intérieur complet." },
                { q: "Avez-vous besoin d'eau ou d'électricité ?", a: "Idéalement oui, une prise et un robinet à moins de 25m. Sinon, prévenez-nous." },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un intérieur comme neuf ?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Réservez votre nettoyage intérieur et retrouvez le plaisir de conduire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur"
                className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Réserver maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0472 30 37 01
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
