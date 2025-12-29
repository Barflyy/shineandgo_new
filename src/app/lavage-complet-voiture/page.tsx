import { ArrowRight, Check, Star, Clock, Sparkles, Car, Phone, MapPin, Shield, Armchair, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lavage Voiture Complet à Domicile Liège | Dès 120€ - Shine&Go',
  description: 'Lavage voiture complet intérieur + extérieur à domicile en région liégeoise. Formule tout-en-un : aspiration, plastiques, lavage main, cire. Économisez 30€. ☎ 0472 30 37 01',
  alternates: {
    canonical: 'https://shineandgo.be/lavage-complet-voiture',
  },
  openGraph: {
    title: 'Lavage Voiture Complet à Domicile | Shine&Go',
    description: 'Nettoyage complet voiture intérieur + extérieur à domicile. Formule économique. Dès 120€.',
    url: 'https://shineandgo.be/lavage-complet-voiture',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavage Complet Voiture à Domicile",
  "description": "Nettoyage complet intérieur + extérieur : aspiration, plastiques, lavage main 2 seaux, jantes, cire hydrophobe. Service tout-en-un à domicile.",
  "image": "https://shineandgo.be/images/realisations/lavage-complet-bmw-x5.webp",
  "brand": {
    "@type": "LocalBusiness",
    "name": "Shine&Go"
  },
  "offers": {
    "@type": "Offer",
    "price": "120",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
    "url": "https://shineandgo.be/lavage-complet-voiture"
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
      "name": "Combien coûte un lavage complet voiture à domicile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos tarifs démarrent à 120€ pour un lavage complet intérieur + extérieur. C'est 30€ moins cher que les deux formules séparées. Un supplément s'applique selon la taille du véhicule."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure un lavage complet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un lavage complet intérieur + extérieur dure environ 2h30 à 3h selon l'état du véhicule."
      }
    },
    {
      "@type": "Question",
      "name": "Que comprend la formule complète ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La formule complète inclut tout l'intérieur (aspiration, plastiques, vitres, désodorisation) + tout l'extérieur (lavage main, jantes, cire hydrophobe)."
      }
    },
    {
      "@type": "Question",
      "name": "De quoi avez-vous besoin sur place ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Idéalement une prise électrique et un robinet d'eau à moins de 25m. Prévenez-nous si ce n'est pas possible."
      }
    }
  ]
}

export default function NettoyageCompletPage() {
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
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 rounded-full">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Formule la plus populaire</span>
              </div>

              {/* Titre H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Lavage voiture complet à domicile
              </h1>

              <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
                Intérieur + extérieur en une seule intervention. La formule tout-en-un qui vous fait économiser 30€.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/32472303701?text=Je souhaite le lavage complet"
                  className="group px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  Réserver dès 120€
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

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Économisez 30€</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> 2h30 - 3h</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> À domicile</span>
              </div>

            </div>
          </div>
        </section>

        {/* CONTENU - Bento Grid */}
        <div className="container mx-auto px-4 sm:px-6 py-16 space-y-8">

          {/* CE QUI EST INCLUS - 2 colonnes */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Tout ce qui est inclus</h2>
              <p className="text-gray-500">Formule complète = Intérieur + Extérieur</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Intérieur */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <Armchair className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Intérieur</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Aspiration complète (tapis, sièges, coffre)",
                    "Nettoyage plastiques & tableau de bord",
                    "Vitres intérieures",
                    "Nettoyage tapis & moquettes",
                    "Désodorisation habitacle",
                    "Finitions pinceau (aérations, boutons)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extérieur */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Extérieur</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Pré-lavage mousse active",
                    "Lavage main technique 2 seaux",
                    "Jantes & pneus (dressing noir)",
                    "Dégoudronnage carrosserie",
                    "Séchage microfibre + soufflage",
                    "Cire protection hydrophobe",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ÉCONOMIE */}
          <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Pourquoi choisir la formule complète ?</h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="font-semibold mb-2">Économie de 30€</h3>
                  <p className="text-sm text-slate-300">Intérieur (65€) + Extérieur (85€) = 150€. Complet = 120€.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">⏱️</div>
                  <h3 className="font-semibold mb-2">Gain de temps</h3>
                  <p className="text-sm text-slate-300">Un seul RDV, une seule intervention. Tout est fait en 2h30-3h.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="font-semibold mb-2">Résultat showroom</h3>
                  <p className="text-sm text-slate-300">Voiture comme neuve, dedans et dehors. Idéal pour la revente.</p>
                </div>
              </div>
            </div>
          </section>

          {/* TARIF SIMPLE */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="max-w-lg mx-auto text-center">
              <div className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">
                BEST SELLER
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lavage Complet</h2>
              <p className="text-gray-500 mb-6">Intérieur + Extérieur en une intervention</p>
              <div className="text-6xl font-bold text-gray-900 mb-2">Dès 120€</div>
              <p className="text-green-600 font-medium mb-8">Économisez 30€ vs formules séparées</p>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "Tout l'intérieur (aspiration, plastiques, vitres, désodo)",
                  "Tout l'extérieur (lavage main, jantes, cire)",
                  "Supplément selon taille du véhicule",
                  "Déplacement inclus en région liégeoise",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite le lavage complet"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all"
              >
                Réserver maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* POURQUOI NOUS */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Pourquoi choisir Shine&Go ?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Satisfait ou remboursé", desc: "Garantie sur chaque prestation" },
                { icon: Sparkles, title: "Produits premium", desc: "Koch-Chemie exclusivement" },
                { icon: Zap, title: "0 micro-rayure", desc: "Technique 2 seaux certifiée" },
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
                { name: "Julie K.", city: "Liège", text: "Mon SUV n'avait jamais été aussi propre. Intérieur impeccable et extérieur qui brille !" },
                { name: "Alexandre T.", city: "Verviers", text: "Nettoyage complet parfait. Ponctuels et soignés. Je recommande sans hésiter." },
                { name: "Caroline F.", city: "Herve", text: "Parfait pour préparer la vente de ma voiture. Résultat showroom garanti." },
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
                { q: "Combien coûte un lavage complet ?", a: "Dès 120€ pour intérieur + extérieur. Économisez 30€ vs les formules séparées. Supplément selon taille du véhicule." },
                { q: "Combien de temps dure l'intervention ?", a: "Comptez 2h30 à 3h pour un lavage complet selon l'état du véhicule." },
                { q: "Que comprend la formule complète ?", a: "Tout l'intérieur (aspiration, plastiques, vitres, désodo) + tout l'extérieur (lavage main, jantes, cire)." },
                { q: "De quoi avez-vous besoin ?", a: "Idéalement une prise électrique et un robinet à moins de 25m. Sinon, prévenez-nous à la réservation." },
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
              Prêt pour une voiture comme neuve ?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Réservez votre lavage complet et profitez d'un résultat showroom, dedans et dehors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Je souhaite le lavage complet"
                className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Réserver dès 120€
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
