'use client'

import { ArrowRight, Check, Star, Phone, Mail, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function NettoyageExterieurPage() {
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false)
      } else {
        setNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <Head>
        <title>Nettoyage Extérieur Voiture | Habitacle Impeccable dès 85€ - Shine&Go</title>
        <meta name="description" content="Nettoyage extérieur voiture à domicile. Aspiration complète, nettoyage surfaces, vitres, protection UV. Service mobile en 90 min. Produits Koch-Chemie. ☎ 0472 30 37 01" />
      </Head>
      
      <main className="bg-white min-h-screen">
        
        {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out ${
        scrolled ? 'py-2 sm:py-3 shadow-lg' : 'py-4 sm:py-5'
      } ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 sm:px-6 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900">
            Shine<span className="text-blue-600">&</span>Go
          </Link>
          <a
            href="tel:+32472303701"
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full hover:bg-blue-700 transition-colors touch-manipulation"
          >
            <span className="hidden sm:inline">0472 30 37 01</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </nav>

      {/* HERO HERVE */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-full">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">4.9/5 sur Google</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Nettoyage extérieur voiture
              <span className="block font-normal mt-1 sm:mt-2">Carrosserie brillante</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 font-light leading-relaxed px-4 sm:px-0">
              Service mobile professionnel en Wallonie
              <span className="block mt-2 text-sm sm:text-base text-gray-400">Lavage • Polish • Cire protection • Dès 85€</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage extérieur - 85€"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 touch-manipulation min-h-[56px]"
              >
                Réserver extérieur 85€
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all touch-manipulation min-h-[56px] flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-500">
              <span>✓ Intervention rapide</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Déplacement gratuit</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Paiement après validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* VILLES PROCHES */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Zones d'intervention
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Service mobile dans toute la région
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa'].map((city) => (
                <div
                  key={city}
                  className="p-6 bg-white rounded-xl border border-gray-100 text-center"
                >
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-medium text-gray-900">{city}</div>
                  <div className="text-xs text-gray-500 mt-1">Déplacement gratuit</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3 sm:mb-4">
              Nos formules de nettoyage
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Prix fixes et transparents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            
            {/* Extérieur */}
            <article className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-1">
                  Nettoyage extérieur
                </h3>
                <p className="text-sm text-gray-500">45-60 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
                <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-1">85€</div>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Aspiration complète',
                  'Nettoyage surfaces',
                  'Vitres extérieures',
                  'Protection UV',
                  'Désodorisation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage extérieur à Herve - 85€"
                className="block w-full py-3 sm:py-3.5 border border-gray-900 text-gray-900 font-medium rounded-full text-center hover:bg-gray-900 hover:text-white transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver
              </a>
            </article>

            {/* Extérieur */}
            <article className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-1">
                  Lavage extérieur
                </h3>
                <p className="text-sm text-gray-500">60-75 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
                <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-1">85€</div>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Lavage 2 seaux',
                  'Décontamination',
                  'Polish léger',
                  'Cire protection',
                  'Jantes & pneus'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur à Herve - 85€"
                className="block w-full py-3 sm:py-3.5 border border-gray-900 text-gray-900 font-medium rounded-full text-center hover:bg-gray-900 hover:text-white transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver
              </a>
            </article>

            {/* Complet */}
            <article className="relative bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-900">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-3 sm:px-4 py-1 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Populaire</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-white mb-1">
                  Nettoyage complet
                </h3>
                <p className="text-sm text-gray-400">90-120 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-800">
                <div className="text-4xl sm:text-5xl font-light text-white mb-1">120€</div>
                <p className="text-sm text-green-400">Économisez 30€</p>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Extérieur complet',
                  'Extérieur complet',
                  'Traitement cuirs',
                  'Protection 3 mois',
                  'Garantie 7 jours'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite le nettoyage complet à Herve - 120€"
                className="block w-full py-3 sm:py-3.5 bg-white text-gray-900 font-medium rounded-full text-center hover:bg-gray-100 transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              Réservez votre nettoyage extérieur
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Intervention sous 48h • Déplacement gratuit • Paiement après validation
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage extérieur - 85€"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 touch-manipulation min-h-[56px]"
              >
                Réserver par WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all touch-manipulation min-h-[56px] flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 sm:py-16 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Shine<span className="text-blue-600">&</span>Go
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Nettoyage voiture à domicile à Herve
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/nettoyage-interieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">Extérieur</Link></li>
                <li><Link href="/nettoyage-exterieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">Extérieur</Link></li>
                <li><Link href="/nettoyage-complet-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">Complet</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Zones</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/nettoyage-voiture-herve" className="text-gray-600 hover:text-gray-900 transition-colors">Herve</Link></li>
                <li><Link href="/nettoyage-voiture-verviers" className="text-gray-600 hover:text-gray-900 transition-colors">Verviers</Link></li>
                <li><Link href="/lavage-voiture-liege" className="text-gray-600 hover:text-gray-900 transition-colors">Liège</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+32472303701" className="hover:text-gray-900 transition-colors">0472 30 37 01</a>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:contact@shineandgo.be" className="hover:text-gray-900 transition-colors">contact@shineandgo.be</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-100 text-center">
            <div className="text-xs sm:text-sm text-gray-500">
              © 2025 Shine&Go. Nettoyage extérieur voiture.
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton CTA flottant */}
      {scrolled && (
        <a
          href="https://wa.me/32472303701?text=Bonjour, je souhaite un nettoyage extérieur - 85€"
          className="fixed bottom-6 right-6 z-50 px-6 py-4 bg-blue-600 text-white font-medium rounded-full shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-2 touch-manipulation"
          style={{
            boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)'
          }}
          aria-label="Réserver par WhatsApp"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Réserver</span>
        </a>
      )}
    </main>
    </>
  )
}
