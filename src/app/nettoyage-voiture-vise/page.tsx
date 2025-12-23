import { ArrowRight, Check, Star, MapPin, Sparkles, Car, Armchair } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Nettoyage Voiture à Domicile Visé - Intérieur & Extérieur',
  description: 'Expert du nettoyage véhicule à Visé. Lavage main anti-rayures à domicile. Prix et Tarifs clairs. Déplacement gratuit. Dès 65€. ☎ 0472 30 37 01',
  alternates: {
    canonical: 'https://shineandgo.be/nettoyage-voiture-vise',
  },
  openGraph: {
    title: 'Nettoyage Voiture à Domicile Visé - Intérieur & Extérieur',
    description: 'Expert du nettoyage véhicule à Visé. Lavage main anti-rayures à domicile. Prix et Tarifs clairs. Déplacement gratuit. Dès 65€. ☎ 0472 30 37 01',
    url: 'https://shineandgo.be/nettoyage-voiture-vise',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Nettoyage voiture domicile Visé Shine and Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function VisePage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100">
      <Breadcrumbs 
        items={[
          { 'label': 'Nettoyage voiture', 'href': '/zones' }, 
          { 'label': 'Visé' }
        ]} 
      />

      {/* HERO */}
      <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="text-sm font-medium text-blue-900">4.9/5 sur Google</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Esthétique automobile et lavage à domicile à Visé</h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed px-4 animate-fade-in-up text-pretty max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Shine&Go s'occupe de votre voiture à Visé. Profitez d'un service professionnel méticuleux avec les produits Koch-Chemie. Que vous soyez situé en plein centre de Visé ou dans les quartiers résidentiels en périphérie, notre unité mobile est équipée pour intervenir en totale autonomie.
              <span className="block mt-2 text-base text-gray-400 font-normal">Intervention sous 48h • Dès 65€ • Satisfaction Garantie</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à Visé"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Réserver à Visé
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Service en 3h</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Déplacement gratuit</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Paiement après validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* VILLES PROCHES */}
      <section className="py-12 md:py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Service mobile en Basse-Meuse
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                De Hermalle à Lanaye, nous venons jusqu'à votre porte
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Argenteau', href: '/nettoyage-voiture-argenteau' },
                { name: 'Hermalle', href: '/nettoyage-voiture-hermalle' },
                { name: 'Oupeye', href: '/nettoyage-voiture-oupeye' },
                { name: 'Dalhem', href: '/nettoyage-voiture-dalhem' },
                { name: 'Warsage', href: '/nettoyage-voiture-warsage' },
                { name: 'Bassenge', href: '/nettoyage-voiture-bassenge' },
              ].map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 text-center border border-transparent hover:border-gray-100 block"
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📍</div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</div>
                  <div className="text-xs text-gray-500 mt-1">Déplacement gratuit</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 text-balance">
              Tarifs Nettoyage Auto Visé
            </h2>
            <p className="text-lg text-gray-600 text-pretty">
              Transparence totale, satisfaction garantie
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
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur à Visé - 65€"
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
                  <span className="text-4xl font-light text-white">120€</span>
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
                href="https://wa.me/32472303701?text=Je souhaite le nettoyage complet à Visé - 120€"
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
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur à Visé - 85€"
                className="block w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                Réserver
              </a>
            </article>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      
      {/* MAILLAGE INTERNE */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            Besoin d'un devis spécifique ? <Link href="/contact" className="text-blue-600 font-medium hover:underline">Contactez-nous</Link> ou consultez <Link href="/services" className="text-blue-600 font-medium hover:underline">tous nos services</Link>.
            <span className="block mt-2 text-sm text-gray-500">Service disponible à <Link href="/zones" className="hover:text-gray-800">Namur</Link>, <Link href="/zones" className="hover:text-gray-800">Liège</Link> et partout en Wallonie.</span>
          </p>
        </div>
      </section>

<section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              Réservez votre nettoyage à Visé
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Profitez de votre temps libre, on s'occupe de votre véhicule.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à Visé"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Réserver par WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
        "@context": "https://schema.org",
        "@type": "AutoWash",
        "name": "Shine&Go - Lavage voiture Vise",
        "description": "Service de nettoyage et detailing automobile à domicile à Vise.",
        "url": "https://shineandgo.be/nettoyage-voiture-vise",
        "telephone": "+32472303701",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vise",
            "addressRegion": "Liège",
            "addressCountry": "BE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.6386",
            "longitude": "5.7942"
        },
        "provider": {
            "@type": "LocalBusiness",
            "name": "Shine&Go",
            "image": "/transformations/optimized/webp/apres01.webp"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        }
    },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Vise",
                "item": "https://shineandgo.be/nettoyage-voiture-vise"
            }
        ]
    }
]) }}
      />
    </main>
  )
}
