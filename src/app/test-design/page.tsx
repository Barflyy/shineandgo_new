'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Clock, Sparkles, Menu, X, ChevronRight, CarFront } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      // Ferme le menu mobile si on scroll pour éviter les bugs visuels
      if (window.scrollY > 20 && mobileMenuOpen) setMobileMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  // Liens de navigation
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Tarifs", href: "#tarifs" },
    { name: "Zones", href: "#zones" },
    { name: "Avis", href: "#avis" },
  ]

  return (
    <main className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden">

      {/* --- NAVIGATION MODERNE & ANIMÉE --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isScrolled ? 'pt-4' : 'pt-0'}`}>
        
        <nav 
          className={`
            relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${isScrolled 
              ? 'w-[92%] max-w-5xl bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/40 border border-white/50 rounded-full py-3 px-6' 
              : 'w-full bg-transparent py-6 px-6 md:px-10 border-b border-transparent'}
            ${mobileMenuOpen ? '!rounded-3xl !bg-white !opacity-100' : ''}
          `}
        >
          
          {/* 1. LOGO ANIMÉ */}
          <a href="#" className="group flex items-center gap-2.5 z-50">
            <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              {/* Effet de brillance qui passe sur le logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
              <CarFront className="w-6 h-6 text-white relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none tracking-tight text-slate-900">
                Shine<span className="text-blue-600">Go</span>
              </span>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Detailing
              </span>
            </div>
          </a>

          {/* 2. MENU BUREAU (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-white/50 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. BOUTON CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-3 z-50">
            {/* Desktop Phone */}
            <a 
              href="tel:+32472303701" 
              className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">0472 30 37 01</span>
            </a>

            {/* Bouton Réserver animé */}
            <a 
              href="https://wa.me/32472303701"
              className="hidden sm:flex group relative px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2">
                <span>Réserver</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>

            {/* Hamburger Mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors active:scale-90"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>

          {/* 4. MENU MOBILE (Dropdown intégré à la pilule) */}
          <div className={`
            absolute top-full left-0 w-full bg-white rounded-b-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xl md:hidden
            ${mobileMenuOpen ? 'max-h-[400px] opacity-100 mt-2 pt-4 pb-6 px-4 border border-slate-100' : 'max-h-0 opacity-0 mt-0 p-0 border-none'}
          `}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="font-bold text-lg">{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
              <a 
                href="https://wa.me/32472303701"
                className="mt-2 w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-center flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4" />
                Réserver maintenant
              </a>
            </div>
          </div>

        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
        {/* Formes d'arrière-plan floues et animées */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/50 backdrop-blur-md shadow-sm mb-8 animate-fade-in-up cursor-default">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-600 overflow-hidden">
                   👤
                </div>
              ))}
            </div>
            <div className="pl-2 flex items-center gap-1 border-l border-slate-300 ml-1">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-slate-700">4.9/5 (80+ avis)</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
            Le detailing <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 animate-gradient-x">
                à domicile.
              </span>
              {/* Soulignement créatif */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Ne perdez plus votre temps en station de lavage. <br className="hidden md:block"/>
            Nous transformons votre véhicule directement chez vous.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/32472303701"
              className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Réserver sur WhatsApp
            </a>
            <a
              href="#tarifs"
              className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Voir les forfaits
            </a>
          </div>
        </div>
      </section>

      {/* AVANT / APRÈS - Carte Flottante */}
      <section className="py-12 px-6 -mt-12 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-blue-900/5 p-3 sm:p-6 border border-white">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Image Interactif */}
              <div className="group relative h-72 sm:h-96 rounded-[2rem] overflow-hidden shadow-inner bg-slate-100">
                <div className="absolute inset-0 flex">
                  {/* Côté gauche (Sale) */}
                  <div className="w-1/2 h-full bg-slate-200 relative overflow-hidden">
                    {/* Placeholder texture sale */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-4xl font-black text-slate-400/30 tracking-widest rotate-[-15deg]">AVANT</span>
                    </div>
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
                      😵 Ternie & Sale
                    </div>
                  </div>
                  
                  {/* Côté droit (Propre) */}
                  <div className="w-1/2 h-full bg-gradient-to-br from-blue-50 to-white relative overflow-hidden border-l-4 border-white">
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-4xl font-black text-blue-200/50 tracking-widest rotate-[-15deg]">APRÈS</span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Comme neuve
                    </div>
                  </div>
                </div>
                
                {/* Curseur central */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-900 z-10">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute h-full w-1 bg-white/50 backdrop-blur-sm"></div>
                </div>
              </div>

              {/* Texte Explicatif */}
              <div className="flex flex-col justify-center p-4 sm:p-8">
                <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold mb-6 uppercase tracking-wide">
                  <Sparkles className="w-3 h-3" /> Résultat garanti
                </div>
                <h3 className="text-3xl font-bold mb-6 text-slate-900">L'effet "Waw" instantané.</h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                  Nous n'utilisons pas de l'eau savonneuse basique. Nos produits <span className="font-semibold text-slate-900">Koch-Chemie®</span> et notre technique professionnelle révèlent la vraie couleur de votre voiture.
                </p>
                <div className="grid gap-4">
                  {[
                    { title: 'Zéro micro-rayures', desc: 'Technique des deux seaux & gants microfibres.' },
                    { title: 'Protection longue durée', desc: 'Cire hydrophobe incluse dans tous les lavages.' },
                    { title: 'Finitions premium', desc: 'Pneus, plastiques et vitres impeccables.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nous venons à vous</h2>
            <p className="text-slate-500 text-lg">Déplacement <span className="text-blue-600 font-bold">100% gratuit</span> dans un rayon de 25km autour de Herve.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Fléron', 'Chaudfontaine', 'Visé', 'Aubel'].map((city) => (
              <div key={city} className="group cursor-default px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  <span className="font-medium">{city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Tarifs Transparents</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto">
              Choisissez votre niveau de brillance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            
            {/* INTÉRIEUR */}
            <article className="group bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🛋️</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Intérieur</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium">Remise à neuf de l'habitacle</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight text-slate-900">65€</span>
              </div>

              <ul className="space-y-4 mb-8">
                {['Aspiration deep-clean', 'Shampoing tapis/sièges', 'Dressing plastiques', 'Vitres intérieures', 'Parfum exclusif'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                Réserver
              </a>
            </article>

            {/* COMPLET (Dark Mode Card) */}
            <article className="relative bg-slate-900 rounded-[2rem] p-8 border border-slate-800 shadow-2xl md:-mt-8 md:mb-8 overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-colors duration-500" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="px-4 py-1.5 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/10">
                  Best-Seller
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Complet</h3>
              <p className="text-slate-400 text-sm mb-8 relative z-10">L'expérience showroom totale</p>
              
              <div className="flex items-baseline gap-1 mb-2 relative z-10">
                <span className="text-6xl font-bold tracking-tight text-white">120€</span>
              </div>
              <p className="text-green-400 text-sm font-bold mb-8 relative z-10">Vous économisez 30€</p>

              <ul className="space-y-4 mb-10 relative z-10">
                {['Tout le pack Intérieur', 'Lavage carrosserie main', 'Cire brillance 3 mois', 'Jantes & Pneus', 'Séchage sans contact'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="relative z-10 block w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/40 hover:scale-[1.02] transition-all duration-300">
                Réserver le Complet
              </a>
            </article>

            {/* EXTÉRIEUR */}
            <article className="group bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🚗</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Extérieur</h3>
              <p className="text-slate-500 text-sm mb-8 font-medium">Lavage main & Protection</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight text-slate-900">85€</span>
              </div>

              <ul className="space-y-4 mb-8">
                {['Prélavage mousse active', 'Lavage 2 seaux (Anti-rayures)', 'Nettoyage Jantes complet', 'Cire liquide hydrophobe', 'Séchage microfibre'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-center hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                Réserver
              </a>
            </article>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Simple comme bonjour</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-100 via-blue-200 to-slate-100" />

            {[
              { icon: Phone, title: "1. Réservation", desc: "WhatsApp ou Appel. On fixe le créneau qui vous arrange." },
              { icon: Clock, title: "2. Intervention", desc: "On arrive équipé. Il nous faut juste les clés, une prise et un robinet." },
              { icon: Check, title: "3. Validation", desc: "On fait le tour ensemble. Paiement uniquement si vous êtes satisfait." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white rounded-3xl border border-slate-100 shadow-xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-200 group-hover:shadow-blue-100">
                  <step.icon className="w-10 h-10 text-slate-900 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CarFront className="w-6 h-6" />
                Shine<span className="text-blue-600">Go</span>
              </div>
              <p className="max-w-xs text-slate-500 mb-8">
                Le partenaire de confiance pour l'entretien esthétique de votre véhicule en Wallonie.
              </p>
              <div className="flex gap-4">
                {/* Socials placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
                <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {['Nettoyage Intérieur', 'Lavage Extérieur', 'Formule Complète', 'Tarifs'].map(link => (
                  <li key={link}><a href="#" className="hover:text-blue-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" /> 0472 30 37 01
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" /> Herve, Belgique
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 flex justify-between items-center text-xs text-slate-600">
            <p>© 2025 Shine&Go. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Mentions légales</a>
              <a href="#" className="hover:text-slate-400">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoWash",
            "name": "Shine&Go",
            "priceRange": "€€",
            "telephone": "+32472303701",
            "areaServed": "Liège"
          })
        }}
      />
    </main>
  )
}