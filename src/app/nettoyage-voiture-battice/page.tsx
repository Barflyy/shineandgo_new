'use client'

import { ArrowRight, Check, Star, Phone, Mail, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function BatticePage() {
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
        <title>Nettoyage Voiture à Domicile Battice | En 90min dès 65€ - Shine&Go</title>
        <meta name="description" content="Nettoyage voiture premium à Battice et environs. Service mobile professionnel en 90 min. Produits Koch-Chemie. Résultat showroom. À partir de 65€. ☎ 0472 30 37 01" />
      </Head>
      
      <main className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      } ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 sm:px-6 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-slate-900">
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
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50/0 to-transparent -z-10 pointer-events-none" />
        <div className="container mx-auto px-6 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50 rounded-full">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-slate-600">4.9/5 sur Google</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Nettoyage voiture Battice
              <span className="block font-normal mt-1 sm:mt-2">Service à domicile</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-12 font-light leading-relaxed px-4 sm:px-0">
              Lavage mobile professionnel à Battice
              <span className="block mt-2 text-sm sm:text-base text-slate-400">Dès 65€ • En 90 minutes • Produits Koch-Chemie</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à Battice"
                className="group px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2 touch-manipulation min-h-[56px]"
              >
                Réserver à Battice
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-slate-200 text-slate-900 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all touch-manipulation min-h-[56px] flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-slate-500">
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
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
                Nous intervenons aussi près de Battice
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Service mobile dans toute la région
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Battice', 'Thimister', 'Clermont', 'Xhendelesse', 'Charneux', 'Bolland'].map((city) => (
                <div
                  key={city}
                  className="p-6 bg-white rounded-xl border border-slate-100 text-center"
                >
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-medium text-slate-900">{city}</div>
                  <div className="text-xs text-slate-500 mt-1">Déplacement gratuit</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-3 sm:mb-4">
              Nos formules à Battice
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Prix fixes et transparents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            
            {/* Intérieur */}
            <article className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 mb-1">
                  Nettoyage intérieur
                </h3>
                <p className="text-sm text-slate-500">45-60 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-200">
                <div className="text-4xl sm:text-5xl font-light text-slate-900 mb-1">65€</div>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Aspiration complète',
                  'Nettoyage surfaces',
                  'Vitres intérieures',
                  'Protection UV',
                  'Désodorisation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur à Battice - 65€"
                className="block w-full py-3 sm:py-3.5 border border-slate-900 text-slate-900 font-medium rounded-full text-center hover:bg-slate-900 hover:text-white transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver
              </a>
            </article>

            {/* Extérieur */}
            <article className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 mb-1">
                  Lavage extérieur
                </h3>
                <p className="text-sm text-slate-500">60-75 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-200">
                <div className="text-4xl sm:text-5xl font-light text-slate-900 mb-1">85€</div>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Lavage 2 seaux',
                  'Décontamination',
                  'Polish léger',
                  'Cire protection',
                  'Jantes & pneus'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur à Battice - 85€"
                className="block w-full py-3 sm:py-3.5 border border-slate-900 text-slate-900 font-medium rounded-full text-center hover:bg-slate-900 hover:text-white transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver
              </a>
            </article>

            {/* Complet */}
            <article className="relative bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-900">
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
                <p className="text-sm text-slate-400">90-120 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-800">
                <div className="text-4xl sm:text-5xl font-light text-white mb-1">120€</div>
                <p className="text-sm text-green-400">Économisez 30€</p>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Intérieur complet',
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
                href="https://wa.me/32472303701?text=Je souhaite le nettoyage complet à Battice - 120€"
                className="block w-full py-3 sm:py-3.5 bg-white text-slate-900 font-medium rounded-full text-center hover:bg-slate-100 transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-slate-900 mb-4 sm:mb-6 leading-tight">
              Réservez votre nettoyage à Battice
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-12">
              Intervention sous 48h • Déplacement gratuit • Paiement après validation
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à Battice"
                className="group px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2 touch-manipulation min-h-[56px]"
              >
                Réserver par WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-slate-200 text-slate-900 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all touch-manipulation min-h-[56px] flex items-center justify-center"
              >
                0472 30 37 01
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Maillage interne SEO */}
      <footer className="py-12 sm:py-16 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                Shine<span className="text-blue-600">&</span>Go
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Service mobile de nettoyage et lavage automobile professionnel à domicile en Wallonie
              </p>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-600 ml-1">4.9/5 Google</span>
              </div>
            </div>

            {/* Services - Liens internes */}
            <div>
              <h4 className="font-medium text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Nos services</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="/nettoyage-interieur-voiture" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Nettoyage intérieur voiture
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-exterieur-voiture" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Lavage extérieur voiture
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-complet-voiture" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Nettoyage complet voiture
                  </a>
                </li>
                <li>
                  <a href="/prix-nettoyage-voiture-domicile" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Prix et tarifs
                  </a>
                </li>
              </ul>
            </div>

            {/* Zones - SEO local */}
            <div>
              <h4 className="font-medium text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Zones d'intervention</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="/nettoyage-voiture-battice" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Nettoyage voiture Battice
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-voiture-verviers" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Lavage voiture Verviers
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-voiture-liege" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Lavage voiture Liège
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-voiture-battice" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Nettoyage voiture Battice
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-voiture-soumagne" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Lavage voiture Soumagne
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-voiture-spa" className="text-slate-600 hover:text-slate-900 transition-colors">
                    Nettoyage voiture Spa
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href="tel:+32472303701" 
                    className="hover:text-slate-900 transition-colors"
                    aria-label="Téléphone Shine&Go"
                  >
                    0472 30 37 01
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href="mailto:contact@shineandgo.be" 
                    className="hover:text-slate-900 transition-colors"
                  >
                    contact@shineandgo.be
                  </a>
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Service mobile<br/>Battice, Wallonie, Belgique</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 sm:pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-slate-500">
              © 2025 Shine&Go. Nettoyage voiture professionnel à domicile.
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
              <a href="/mentions-legales" className="hover:text-slate-900 transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-slate-900 transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bouton CTA flottant */}
      {scrolled && (
        <a
          href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à Battice"
          className="fixed bottom-6 right-6 z-40 text-white font-medium rounded-full shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-2 touch-manipulation"
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
