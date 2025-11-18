'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Sparkles, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function MinimalPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-blue-100">

      {/* NAV - Minimaliste & Transparente */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Shine<span className="text-blue-600">.</span>Go
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#tarifs" className="hover:text-blue-600">Tarifs</a>
            <a href="#zones" className="hover:text-blue-600">Zones</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <a 
            href="tel:+32472303701" 
            className="hidden md:flex px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
          >
            0472 30 37 01
          </a>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-2xl font-light">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#tarifs" onClick={() => setMobileMenuOpen(false)}>Tarifs</a>
            <a href="#zones" onClick={() => setMobileMenuOpen(false)}>Zones</a>
          </div>
        </div>
      )}

      {/* HERO - Centré & Impactant */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
            <Star className="w-3 h-3 fill-blue-600" /> 4.9/5 sur Google
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
            Le pressing <br/>
            <span className="text-blue-600">à domicile.</span>
          </h1>
          
          <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto">
            Ne perdez plus de temps au car-wash. Nous nous déplaçons chez vous en Wallonie pour un nettoyage haute précision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tarifs" className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95">
              Voir les tarifs
            </a>
            <a href="https://wa.me/32472303701" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SCROLLING FEATURES - Optimisé Mobile (Swipe) */}
      <section className="py-10 overflow-x-hidden">
        <div className="flex overflow-x-auto pb-6 px-6 gap-4 snap-x snap-mandatory md:justify-center no-scrollbar">
          {[
            { title: "Déplacement offert", sub: "Rayon 25km Herve" },
            { title: "Intervention 90min", sub: "Pendant que vous travaillez" },
            { title: "Paiement sécurisé", sub: "Après validation du résultat" },
          ].map((feat, i) => (
            <div key={i} className="snap-center shrink-0 w-64 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">{feat.title}</h3>
              <p className="text-sm text-gray-500">{feat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS - Design Carte "Propre" */}
      <section id="tarifs" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 md:text-center">
            <h2 className="text-3xl font-bold mb-2">Simple & Transparent</h2>
            <p className="text-gray-500">Pas de frais cachés. Choisissez votre formule.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* INTÉRIEUR */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Intérieur</span>
              <div className="mt-2 mb-6">
                <span className="text-4xl font-bold text-gray-900">65€</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-600" /> Aspiration complète</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-600" /> Pressing sièges</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-600" /> Vitres & Plastiques</li>
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-3 text-center rounded-xl bg-gray-50 text-gray-900 font-medium hover:bg-gray-100">
                Réserver
              </a>
            </div>

            {/* COMPLET - Highlight */}
            <div className="bg-gray-900 p-8 rounded-3xl shadow-xl md:-mt-4 md:mb-4 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={80} />
              </div>
              <span className="inline-block px-3 py-1 rounded-lg bg-blue-600 text-xs font-bold mb-2">POPULAIRE</span>
              <div className="mb-6">
                <span className="text-5xl font-bold">120€</span>
                <span className="text-gray-400 text-sm ml-2">/ complet</span>
              </div>
              <p className="text-sm text-gray-300 mb-6">La remise à neuf totale. Intérieur + Extérieur + Cire.</p>
              <ul className="space-y-3 mb-8 text-sm text-gray-300">
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-400" /> Tout l'intérieur</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-400" /> Lavage main extérieur</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-400" /> Cire protection 3 mois</li>
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-3.5 text-center rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500">
                Choisir le Complet
              </a>
            </div>

            {/* EXTÉRIEUR */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Extérieur</span>
              <div className="mt-2 mb-6">
                <span className="text-4xl font-bold text-gray-900">85€</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-600" /> Lavage main 2 seaux</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-600" /> Décontamination</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-blue-600" /> Dressing pneus</li>
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-3 text-center rounded-xl bg-gray-50 text-gray-900 font-medium hover:bg-gray-100">
                Réserver
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES - Liste Épurée */}
      <section id="zones" className="py-16 bg-white border-t border-gray-50 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-lg font-semibold mb-8 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Zones d'intervention
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Chaudfontaine', 'Fléron'].map((city) => (
              <span key={city} className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-sm">
                {city}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">
            +0,50€/km au-delà de 25km de Herve
          </p>
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="py-12 px-6 text-center text-gray-500 text-sm">
        <div className="mb-4 font-bold text-gray-900 text-lg">Shine<span className="text-blue-600">.</span>Go</div>
        <p className="mb-6">Nettoyage professionnel à domicile.</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-gray-900">Mentions légales</a>
          <a href="#" className="hover:text-gray-900">Confidentialité</a>
        </div>
        <p className="opacity-50">© 2025 Shine&Go</p>
      </footer>

      {/* STICKY BOTTOM BAR (MOBILE ONLY) - Conversion Max */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-gray-200 md:hidden z-50">
        <div className="flex gap-3">
          <a 
            href="tel:+32472303701" 
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-gray-200 font-medium text-gray-900 active:bg-gray-50"
          >
            <Phone className="w-4 h-4" /> Appel
          </a>
          <a 
            href="https://wa.me/32472303701" 
            className="flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 text-white font-medium active:bg-blue-700 shadow-lg shadow-blue-600/20"
          >
            Réserver <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

    </main>
  )
}
