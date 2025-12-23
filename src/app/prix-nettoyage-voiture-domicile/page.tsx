import { ArrowRight, Check, Star, MessageCircle, Phone, Shield, Clock, Sparkles, MapPin } from 'lucide-react'
import Breadcrumbs from "@/components/Breadcrumbs"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prix Nettoyage Voiture Premium | Tarifs 2025 Transparents - Shine&Go',
  description: 'Prix nettoyage voiture premium à domicile : 65€ intérieur, 85€ extérieur, 120€ complet. Tarifs tout compris. Devis gratuit. ☎ 0472 30 37 01',
  keywords: 'prix nettoyage voiture, tarif lavage voiture, cout nettoyage auto, prix detailing',
  alternates: {
    canonical: 'https://shineandgo.be/prix-nettoyage-voiture-domicile'
  },
  openGraph: {
    title: 'Prix Nettoyage Voiture Premium | Tarifs 2025 Transparents - Shine&Go',
    description: 'Prix nettoyage voiture premium à domicile : 65€ intérieur, 85€ extérieur, 120€ complet. Tarifs tout compris. Devis gratuit. ☎ 0472 30 37 01',
    url: 'https://shineandgo.be/prix-nettoyage-voiture-domicile',
    siteName: 'Shine&Go',
    images: [
      {
        url: '/transformations/optimized/webp/apres01.webp',
        width: 1200,
        height: 630,
        alt: 'Prix nettoyage voiture domicile Shine and Go',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function PrixPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AutoWash",
              "name": "Shine&Go - Tarifs Nettoyage Voiture à Domicile",
              "description": "Prix et tarifs transparents pour le nettoyage et detailing automobile à domicile en province de Liège.",
              "url": "https://shineandgo.be/prix-nettoyage-voiture-domicile",
              "telephone": "+32472303701",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Herve",
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
                "image": "https://shineandgo.be/transformations/optimized/webp/apres01.webp"
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
              "name": "Tarifs",
              "item": "https://shineandgo.be/prix-nettoyage-voiture-domicile"
            }
          ])
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Tarifs' }
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
              <span className="text-sm font-medium text-blue-900">Grille tarifaire 2025</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Prix Nettoyage Voiture <span className="block font-semibold mt-2 text-gray-900">Liège & Verviers</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed px-4 animate-fade-in-up text-pretty max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Des tarifs clairs et sans surprise pour un résultat showroom. Nous intervenons partout en province de Liège, directement chez vous ou à votre bureau.
              <span className="block mt-2 text-base text-gray-400 font-normal">Déplacement gratuit • Intervention sous 48h • Dès 65€</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage voiture"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                Demander mon devis WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TABLEAUX PRIX */}
      <section className="py-16 md:py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {/* Intérieur */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="mb-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">Nettoyage Intérieur</h2>
                <p className="text-sm text-gray-500">Rénovation complète de l'habitacle</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Citadine</span>
                  <span className="font-semibold text-xl text-gray-900">65€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Berline</span>
                  <span className="font-semibold text-xl text-gray-900">75€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Break</span>
                  <span className="font-semibold text-xl text-gray-900">85€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">SUV / 4x4</span>
                  <span className="font-semibold text-xl text-gray-900">95€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Monospace</span>
                  <span className="font-semibold text-xl text-gray-900">110€</span>
                </div>
              </div>

              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver un nettoyage intérieur premium"
                className="w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors"
              >
                Réserver Intérieur
              </a>
            </div>

            {/* Extérieur */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="mb-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">Extérieur Showroom</h2>
                <p className="text-sm text-gray-500">Lavage & Protection</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Citadine</span>
                  <span className="font-semibold text-xl text-gray-900">85€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Berline</span>
                  <span className="font-semibold text-xl text-gray-900">95€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Break</span>
                  <span className="font-semibold text-xl text-gray-900">105€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">SUV / 4x4</span>
                  <span className="font-semibold text-xl text-gray-900">115€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-50">
                  <span className="text-gray-600">Monospace</span>
                  <span className="font-semibold text-xl text-gray-900">130€</span>
                </div>
              </div>

              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver un nettoyage extérieur showroom"
                className="w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors"
              >
                Réserver Extérieur
              </a>
            </div>

            {/* Complet */}
            <div className="relative bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:shadow-2xl hover:shadow-gray-900/20 hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-2xl md:scale-105 md:z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Best Seller
                </span>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-medium text-white mb-2">Formule Complète</h2>
                <p className="text-sm text-gray-400">Intérieur + Extérieur</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">Citadine</span>
                  <span className="font-semibold text-xl text-white">120€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">Berline</span>
                  <span className="font-semibold text-xl text-white">140€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">Break</span>
                  <span className="font-semibold text-xl text-white">160€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">SUV / 4x4</span>
                  <span className="font-semibold text-xl text-white">170€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">Monospace</span>
                  <span className="font-semibold text-xl text-white">190€</span>
                </div>
              </div>

              <a
                href="https://wa.me/32472303701?text=Je souhaite réserver la formule complète"
                className="w-full py-4 bg-white text-gray-900 font-bold rounded-xl text-center hover:bg-gray-100 transition-colors"
              >
                Réserver le Complet
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Pourquoi nos tarifs ?
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                La qualité professionnelle directement chez vous
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Déplacement inclus</h3>
                <p className="text-sm text-gray-500">Gratuit dans un rayon de 25km autour de Herve</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Produits Premium</h3>
                <p className="text-sm text-gray-500">Utilisation exclusive de la gamme Koch-Chemie</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Garantie 7 jours</h3>
                <p className="text-sm text-gray-500">Satisfait ou nous revenons gratuitement</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Gain de temps</h3>
                <p className="text-sm text-gray-500">Nous travaillons pendant que vous profitez de votre temps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              Prêt pour un résultat showroom ?
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Devis gratuit en 2 minutes sur WhatsApp
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage voiture"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Devis WhatsApp
              </a>

              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0472 30 37 01
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
