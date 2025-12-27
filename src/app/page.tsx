import { ArrowRight, Check, Star, Clock, Sparkles, Car, Armchair, X } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lavage Voiture à Domicile Liège, Verviers, Herve | Shine&Go',
  description: 'Service de lavage voiture à domicile en région liégeoise. Lavage auto professionnel, nettoyage véhicule intérieur/extérieur. Dès 65€. Déplacement gratuit. ☎ 0472 30 37 01',
  alternates: {
    canonical: 'https://shineandgo.be',
  },
  openGraph: {
    title: 'Lavage Voiture à Domicile | Shine&Go Liège',
    description: 'Lavage voiture professionnel à domicile. Service mobile premium en Wallonie. Lavage auto main, nettoyage véhicule complet. Dès 65€.',
    url: 'https://shineandgo.be',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Lavage voiture à domicile Liège - Shine&Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shineandgo.be/#organization",
    "name": "Shine&Go",
    "alternateName": "Shine and Go",
    "description": "Service professionnel de lavage voiture à domicile en région liégeoise. Nettoyage automobile intérieur et extérieur avec produits premium Koch-Chemie.",
    "url": "https://shineandgo.be",
    "telephone": "+32472303701",
    "email": "contact@shineandgo.be",
    "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp",
    "logo": "https://shineandgo.be/globe.svg",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Herve",
      "addressRegion": "Liège",
      "postalCode": "4650",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6386,
      "longitude": 5.7942
    },
    "areaServed": [
      { "@type": "City", "name": "Liège" },
      { "@type": "City", "name": "Herve" },
      { "@type": "City", "name": "Verviers" },
      { "@type": "City", "name": "Spa" },
      { "@type": "City", "name": "Battice" },
      { "@type": "City", "name": "Seraing" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de lavage voiture",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lavage Intérieur Voiture",
            "description": "Nettoyage complet de l'habitacle, sièges, moquettes, plastiques"
          },
          "price": "65",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lavage Extérieur Voiture",
            "description": "Lavage main carrosserie, jantes, vitres, finitions"
          },
          "price": "50",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lavage Complet Voiture",
            "description": "Formule complète intérieur + extérieur"
          },
          "price": "100",
          "priceCurrency": "EUR"
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/shineandgo/",
      "https://www.facebook.com/shineandgo/"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte un lavage voiture à domicile ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos tarifs démarrent à 65€ pour un lavage intérieur, 50€ pour l'extérieur, et 100€ pour la formule complète. Le déplacement est inclus partout en région liégeoise."
        }
      },
      {
        "@type": "Question",
        "name": "Dans quelles villes intervenez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous intervenons dans toute la région liégeoise : Liège, Herve, Verviers, Spa, Battice, Seraing, Visé, et plus de 40 autres communes."
        }
      },
      {
        "@type": "Question",
        "name": "Quels produits utilisez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous utilisons exclusivement des produits Koch-Chemie, la référence allemande utilisée par les concessions premium (BMW, Mercedes, Audi)."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps dure un lavage complet ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un lavage complet intérieur + extérieur dure environ 2 à 3 heures selon l'état du véhicule."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-white dark:bg-slate-950 min-h-screen font-sans selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors">

        {/* HERO - Minimaliste épuré */}
        <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-slate-950">
          <div className="container mx-auto px-6 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">

              {/* Badge discret */}
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 dark:bg-blue-500/10 border border-transparent dark:border-blue-500/20 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600 dark:fill-blue-400 dark:text-blue-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-blue-900 dark:text-blue-300">4.9/5 sur Google</span>
              </div>

              {/* Titre épuré */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
                Lavage voiture à&nbsp;domicile
                <span className="block font-semibold mt-2 text-gray-900 dark:text-white">Liège · Herve · Verviers</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed px-4 animate-fade-in-up text-pretty max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
                Lavage auto professionnel directement chez&nbsp;vous
                <span className="block mt-2 text-base text-gray-400 dark:text-gray-500 font-normal">Lavage véhicule complet • Intervention en&nbsp;48h • Satisfait ou&nbsp;remboursé</span>
              </p>

              {/* Badge d'urgence */}
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-500/10 dark:to-red-500/10 border border-orange-200 dark:border-orange-500/30 rounded-full animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-semibold text-orange-900 dark:text-orange-300">Plus que 3&nbsp;créneaux cette&nbsp;semaine</span>
              </div>

              {/* CTA simple */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="https://wa.me/32472303701"
                  className="group w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 dark:shadow-white/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
                  aria-label="Réserver un nettoyage via WhatsApp"
                >
                  Réserver en ligne
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+32472303701"
                  className="w-full sm:w-auto px-8 py-4 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-center"
                  aria-label="Appeler maintenant pour réserver"
                >
                  0472 30 37 01
                </a>
              </div>

              {/* Info clés */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Service en 3h</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Produits Koch-Chemie</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Garantie satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION ZONES */}
        <section className="py-12 md:py-20 bg-white border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                  Intervention partout en&nbsp;région&nbsp;liégeoise
                </h2>
                <p className="text-lg text-gray-600 text-pretty">
                  À&nbsp;domicile ou sur&nbsp;votre lieu de&nbsp;travail
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { ville: 'Herve', href: '/lavage-voiture-herve' },
                  { ville: 'Verviers', href: '/lavage-voiture-verviers' },
                  { ville: 'Liège', href: '/lavage-voiture-liege' },
                  { ville: 'Battice', href: '/lavage-voiture-battice' },
                  { ville: 'Soumagne', href: '/lavage-voiture-soumagne' },
                  { ville: 'Spa', href: '/lavage-voiture-spa' },
                  { ville: 'Fléron', href: '/lavage-voiture-fleron' },
                  { ville: 'Visé', href: '/lavage-voiture-vise' },
                ].map((zone) => (
                  <a
                    key={zone.ville}
                    href={zone.href}
                    className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 text-center border border-transparent hover:border-gray-100"
                  >
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      📍
                    </div>
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {zone.ville}
                    </div>
                  </a>
                ))}
              </div>

              <div className="text-center mt-10">
                <a
                  href="tel:+32472303701"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all group"
                >
                  Vérifier ma zone gratuitement
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS - Badges de confiance */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                  Pourquoi choisir Shine&Go&nbsp;?
                </h2>
                <p className="text-lg text-gray-600 text-pretty">
                  Le seul service de&nbsp;nettoyage mobile qui garantit un&nbsp;résultat&nbsp;showroom
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Satisfait ou remboursé</h3>
                  <p className="text-sm text-gray-600 text-pretty">Si le résultat ne vous convient pas, on vous rembourse&nbsp;intégralement</p>
                </div>

                <div className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Produits professionnels</h3>
                  <p className="text-sm text-gray-600 text-pretty">Koch-Chemie exclusivement, la référence des&nbsp;concessions&nbsp;premium</p>
                </div>

                <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service 5 étoiles</h3>
                  <p className="text-sm text-gray-600 text-pretty">La référence du nettoyage mobile en région liégeoise</p>
                </div>

                <div className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Flexibilité totale</h3>
                  <p className="text-sm text-gray-600 text-pretty">Nous venons quand cela vous arrange, à domicile ou au bureau</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MIEUX QU'UN CAR WASH */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 text-balance">
                Pourquoi nous sommes <span className="font-semibold text-blue-600">mieux qu'un Car Wash</span>
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Le lavage automatique abîme votre vernis. Le lavage manuel le sublime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Car Wash */}
              <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                    <X className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Car Wash Automatique</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Micro-rayures causées par les rouleaux',
                    'Produits acides agressifs pour les chromes',
                    'Attente interminable le week-end',
                    'Finitions souvent bâclées (jantes, bas de caisse)'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <span className="text-red-500 mt-0.5 flex-shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shine&Go */}
              <div className="group p-8 bg-white rounded-3xl border border-blue-100 shadow-lg shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>

                <div className="flex items-center gap-4 mb-8 relative">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Shine&Go (Lavage Manuel)</h3>
                </div>

                <ul className="space-y-4 relative">
                  {[
                    'Technique "2 seaux" & gants microfibres (0 rayure)',
                    'Produits pH neutre Koch-Chemie respectueux',
                    'On vient chez vous, vous ne bougez pas',
                    'Finitions minutieuses au pinceau'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-600">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NOS FORMULES */}
        <section id="tarifs" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 text-balance tracking-tight">
                Tarifs simples & transparents
              </h2>
              <p className="text-lg text-gray-600 text-pretty font-light">
                Déplacement inclus partout en région liégeoise.
                <br className="hidden md:block" />
                Choisissez la formule adaptée à votre besoin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-start">

              {/* Intérieur */}
              <article className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Armchair className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Intérieur</h3>
                  <p className="text-gray-500 text-sm">Pour un habitacle comme neuf</p>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light text-gray-900">65€</span>
                    <span className="text-gray-400 font-light">/ voiture</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-medium uppercase tracking-wide">Durée approx. 3h</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Aspiration complète (habitacle + coffre)',
                    'Nettoyage plastiques (tableau de bord, portes...)',
                    'Shampooing tapis (si nécessaire)',
                    'Vitres intérieures',
                    'Désodorisant'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur à 65€"
                  className="block w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Réserver
                </a>
              </article>

              {/* Complet - Best Seller */}
              <article className="relative group bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 md:-mt-4 md:mb-4 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-600/30">
                    <Star className="w-3 h-3 fill-current" /> Best Seller
                  </span>
                </div>

                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Complet</h3>
                  <p className="text-slate-400 text-sm">L'expérience ultime Shine&Go</p>
                </div>

                <div className="mb-8 pb-8 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light text-white">Dès 120€</span>
                    <span className="text-slate-500 font-light">/ voiture</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wide">Économisez 30€</span>
                    <span className="text-xs text-slate-500 line-through">150€</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Intérieur détaillé (Plastiques, Tapis...)',
                    'Extérieur manuel (Jantes, Passages roues...)',
                    'Séchage souffleur & Protection',
                    'Résultat Showroom'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/32472303701?text=Je souhaite le nettoyage complet à 120€"
                  className="block w-full py-4 bg-white text-gray-900 font-bold rounded-xl text-center hover:bg-gray-100 transition-all shadow-lg"
                >
                  Réserver le complet
                </a>
              </article>

              {/* Extérieur */}
              <article className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Extérieur</h3>
                  <p className="text-gray-500 text-sm">Lavage & Protection carrosserie</p>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light text-gray-900">85€</span>
                    <span className="text-gray-400 font-light">/ voiture</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-medium uppercase tracking-wide">Durée approx. 3h</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Nettoyage jantes, pneus & passages de roues',
                    'Pré-lavage & Lavage manuel',
                    'Nettoyage passages de portes',
                    'Séchage microfibre & soufflage',
                    'Dressing pneus & Protection hydrophobe'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur à 85€"
                  className="block w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Réserver
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES DETAILLÉS */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                  L'excellence du&nbsp;detailing&nbsp;mobile
                </h2>
                <p className="text-lg text-gray-600 text-pretty">
                  Une expertise professionnelle directement chez&nbsp;vous
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Lavage manuel anti-rayures</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Fini les rouleaux qui abîment votre peinture. Nous utilisons la technique des deux seaux et des gants microfibres haute densité pour un lavage en douceur qui préserve l'éclat de votre carrosserie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Nettoyage Tapis & Moquettes</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Taches sur les tapis ? Poussière incrustée ? Notre injecteur-extracteur professionnel élimine la saleté au cœur des fibres (tapis de sol) pour un habitacle sain.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Gain de temps</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Ne perdez plus votre samedi matin au car-wash. Nous intervenons pendant que vous travaillez ou profitez de votre temps libre. Autonomie totale en eau et électricité si besoin.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Produits Koch-Chemie</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Nous n'utilisons que le meilleur. La gamme allemande Koch-Chemie est la référence mondiale du detailing, approuvée par les plus grands constructeurs (Mercedes, BMW, Audi).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIE REALISATIONS */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                  Nos dernières réalisations
                </h2>
                <p className="text-lg text-gray-600 text-pretty">
                  Découvrez le résultat de nos formules sur différents véhicules
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    image: '/images/realisations/lavage-complet-bmw-x5.webp',
                    title: 'BMW X5',
                    subtitle: 'Formule Complète',
                    tags: ['Extérieur', 'Intérieur', 'Cuir']
                  },
                  {
                    image: '/images/realisations/lavage-complet-bmw-z4.webp',
                    title: 'BMW Z4',
                    subtitle: 'Préparation à la vente',
                    tags: ['Capote', 'Polissage', 'Céramique']
                  },
                  {
                    image: '/images/realisations/lavage-complet-audi-rs3.webp',
                    title: 'Audi RS3',
                    subtitle: 'Entretien Premium',
                    tags: ['Lavage Main', 'Jantes', 'Cire']
                  },
                  {
                    image: '/images/realisations/lavage-complet-bmw-serie4.webp',
                    title: 'BMW Série 4',
                    subtitle: 'Remise à neuf',
                    tags: ['Intérieur', 'Moquettes', 'Plastiques']
                  },
                ].map((item, i) => (
                  <div key={i} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-8 bg-white border-t border-gray-100 flex-1 flex flex-col justify-center text-center">
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 mb-6">{item.subtitle}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {item.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://www.instagram.com/shineandgo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Suivez-nous sur Instagram
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES CLIENTS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                  Ce que disent nos&nbsp;clients
                </h2>
                <p className="text-lg text-gray-600 text-pretty">
                  Plus de 150&nbsp;avis 5&nbsp;étoiles sur&nbsp;Google
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Thomas M.',
                    location: 'Herve',
                    text: 'Service impeccable ! Ma voiture n\'avait jamais été aussi propre. Le detailing intérieur a fait des miracles sur mes sièges en tissu. Je recommande à 100%.',
                    rating: 5
                  },
                  {
                    name: 'Sophie L.',
                    location: 'Verviers',
                    text: 'Très pratique d\'avoir le service à domicile. Professionnel, ponctuel et le résultat est bluffant. Les produits Koch-Chemie font vraiment la différence.',
                    rating: 5
                  },
                  {
                    name: 'Marc D.',
                    location: 'Liège',
                    text: 'J\'ai testé la formule complète sur ma BMW et je suis scotché du résultat. On dirait qu\'elle sort du concession. Prix très correct pour la qualité du travail.',
                    rating: 5
                  }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 flex-1 leading-relaxed text-pretty">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://www.google.com/search?q=shine+and+go+herve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all group"
                >
                  Voir tous les avis Google
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-light text-gray-900 mb-12 text-center text-balance">Questions fréquentes</h2>
              <div className="space-y-4">
                {[
                  { q: "Besoin d'eau ou d'électricité\u00A0?", a: "Idéalement oui, une prise et un robinet à\u00A0moins de\u00A025m. Si ce n'est pas possible, prévenez-nous, nous avons des solutions autonomes." },
                  { q: "Combien de temps ça dure\u00A0?", a: "Comptez environ 3h pour une prestation complète. Nous prenons le temps nécessaire pour un résultat parfait." },
                  { q: "Comment payer\u00A0?", a: "Le paiement se fait une fois la prestation terminée et\u00A0validée par\u00A0vos\u00A0soins. Nous acceptons les espèces, Payconiq ou virement instantané." },
                  { q: "Et s'il pleut\u00A0?", a: "Pour l'extérieur, nous devrons reporter si vous n'avez pas d'abri (carport/garage). Pour l'intérieur, nous pouvons travailler sous une pluie fine." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                    <h3 className="font-medium text-gray-900 mb-2 text-pretty">{item.q}</h3>
                    <p className="text-gray-600 text-pretty">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org - Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shine&Go",
              "image": "/transformations/optimized/webp/apres01.webp",
              "telephone": "+32472303701",
              "email": "contact@shineandgo.be",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rue de la Station 15",
                "addressLocality": "Herve",
                "postalCode": "4650",
                "addressRegion": "Liège",
                "addressCountry": "BE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.6402",
                "longitude": "5.7946"
              },
              "sameAs": [
                "https://www.facebook.com/votrepage",
                "https://www.instagram.com/shineandgo/"
              ],
              "priceRange": "65€ - 120€",
              "areaServed": ["Herve", "Verviers", "Liège", "Battice", "Soumagne", "Spa", "Fléron", "Visé"],
              "url": "https://shineandgo.be",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Thomas M."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Service impeccable ! Ma voiture n'avait jamais été aussi propre. Le detailing intérieur a fait des miracles sur mes sièges en tissu. Je recommande à 100%."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sophie L."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Très pratique d'avoir le service à domicile. Professionnel, ponctuel et le résultat est bluffant."
                }
              ],
              "openingHours": "Mo-Sa 08:00-19:00",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "19:00"
                }
              ]
            })
          }}
        />
      </main>
    </>
  )
}