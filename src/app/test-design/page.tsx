'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Menu, X, ChevronDown, Sparkles, CarFront } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

// --- COMPOSANT UTILITAIRE POUR L'ANIMATION AU SCROLL ---
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Tarifs", href: "#tarifs" },
    { name: "Zones", href: "#zones" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <main className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

      {/* --- NAVIGATION ÉPURÉE --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <CarFront className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Shine<span className="text-blue-600">Go</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+32472303701" className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">
              0472 30 37 01
            </a>
            <a href="#tarifs" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all active:scale-95">
              Réserver
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 -mr-2 text-slate-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Fullscreen Menu */}
          <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-1 bg-slate-100 mx-auto my-4 rounded-full" />
              <a href="https://wa.me/32472303701" className="text-blue-600 font-bold text-xl">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8">
              <Star className="w-3 h-3 fill-blue-700" />
              Service Premium à Domicile
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Le detailing qui vient <br />
              <span className="text-blue-600">à votre porte.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
              Ne perdez plus votre temps en station de lavage. Nous redonnons l'éclat du neuf à votre véhicule, directement chez vous.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
              >
                Réserver sur WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tarifs"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-slate-50 text-slate-900 font-medium flex items-center justify-center hover:bg-slate-100 transition-all"
              >
                Voir les prix
              </a>
            </div>
          </FadeIn>
          
          {/* Indicateurs de confiance */}
          <FadeIn delay={400} className="mt-12 pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Déplacement gratuit 25km</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Produits Koch-Chemie®</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Assuré à 100%</span>
          </FadeIn>

        </div>
      </section>

      {/* --- ZONES (Clean Pills) --- */}
      <section id="zones" className="py-10 border-b border-slate-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400 text-sm mb-6">Zones d'intervention fréquentes</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Fléron', 'Aubel'].map((city, i) => (
              <FadeIn key={city} delay={i * 50}>
                <span className="px-4 py-2 rounded-full bg-white border border-slate-100 text-slate-600 text-sm shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
                  {city}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- TARIFS (Modern Grid) --- */}
      <section id="tarifs" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tarifs Simples</h2>
            <p className="text-slate-500">Pas de devis compliqué. Paiement après validation du résultat.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Intérieur */}
            <FadeIn delay={0} className="h-full">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-2xl">🛋️</div>
                  <h3 className="text-xl font-bold text-slate-900">Intérieur</h3>
                  <p className="text-slate-500 text-sm mt-1">Remise à neuf habitacle</p>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-8">65€</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Aspiration complète', 'Shampoing tissus', 'Plastiques & Vitres', 'Désinfection'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-slate-300" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/32472303701" className="w-full py-4 rounded-xl border border-slate-200 text-slate-900 font-bold text-center hover:bg-slate-50 transition-colors">
                  Choisir
                </a>
              </div>
            </FadeIn>

            {/* Complet (Highlight) */}
            <FadeIn delay={100} className="h-full">
              <div className="bg-slate-900 p-8 rounded-[2rem] h-full flex flex-col shadow-2xl shadow-slate-900/20 transform md:-translate-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all" />
                
                <div className="mb-6 relative">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 text-white">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="bg-white/10 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Complet</h3>
                  <p className="text-slate-400 text-sm mt-1">La totale (Int + Ext)</p>
                </div>
                
                <div className="mb-8 relative">
                  <div className="text-5xl font-bold text-white">120€</div>
                  <p className="text-green-400 text-xs font-bold mt-2">Économisez 30€</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative">
                  {['Tout le pack Intérieur', 'Lavage carrosserie main', 'Cire protection 3 mois', 'Jantes & Pneus'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/32472303701" className="relative w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-500 hover:scale-[1.02] transition-all shadow-lg shadow-blue-900/50">
                  Réserver le Complet
                </a>
              </div>
            </FadeIn>

            {/* Extérieur */}
            <FadeIn delay={200} className="h-full">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-2xl">🚗</div>
                  <h3 className="text-xl font-bold text-slate-900">Extérieur</h3>
                  <p className="text-slate-500 text-sm mt-1">Lavage main anti-rayures</p>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-8">85€</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Prélavage mousse', 'Lavage 2 seaux', 'Décontamination', 'Séchage sans traces'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-slate-300" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/32472303701" className="w-full py-4 rounded-xl border border-slate-200 text-slate-900 font-bold text-center hover:bg-slate-50 transition-colors">
                  Choisir
                </a>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* --- COMPARATIF (Avant/Après Simplifié) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6">Le résultat "Waw"</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Nous n'utilisons pas de machines automatiques qui rayent. Nos produits professionnels et notre savoir-faire manuel garantissent une brillance miroir.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold shrink-0">✕</div>
                    <div>
                      <h4 className="font-bold text-sm">Lavage rouleaux classique</h4>
                      <p className="text-xs text-slate-400">Micro-rayures, traces de calcaire, nettoyage superficiel.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-blue-100">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">✓</div>
                    <div>
                      <h4 className="font-bold text-sm">Méthode Shine&Go</h4>
                      <p className="text-xs text-slate-400">Zéro rayure, cire protectrice, finition à la main.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full md:w-1/2">
              <FadeIn delay={200}>
                <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 bg-slate-200">
                   {/* Simulation Avant/Après avec CSS pur */}
                   <div className="absolute inset-0 flex">
                     <div className="w-1/2 h-full bg-slate-300 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
                        <span className="font-bold text-slate-400 tracking-widest text-2xl rotate-[-10deg]">AVANT</span>
                     </div>
                     <div className="w-1/2 h-full bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative border-l-4 border-white">
                        <span className="font-bold text-blue-200 tracking-widest text-2xl rotate-[-10deg]">APRÈS</span>
                        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Résultat Garanti
                        </div>
                     </div>
                   </div>
                   {/* Curseur */}
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-900">
                       <ArrowRight className="w-5 h-5" />
                     </div>
                   </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "De quoi avez-vous besoin sur place ?", a: "Juste une prise électrique et un robinet d'eau. Si vous êtes en appartement sans accès, prévenez-nous, nous avons des solutions." },
              { q: "Combien de temps ça dure ?", a: "Environ 1h30 pour une formule complète. Nous prenons le temps de bien faire les choses." },
              { q: "Acceptez-vous la carte ?", a: "Oui, via Payconiq (QR Code) ou virement instantané. Le cash est aussi accepté." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="group bg-white rounded-2xl border border-slate-100 open:shadow-md transition-all duration-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer list-none select-none">
                    {item.q}
                    <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <div className="text-xl font-bold mb-4 flex items-center gap-2">
                <CarFront className="w-6 h-6 text-blue-600" />
                ShineGo
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Le spécialiste du nettoyage automobile à domicile en province de Liège.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-12 sm:gap-24">
              <div>
                <h4 className="font-bold mb-4 text-sm">Contact</h4>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li>0472 30 37 01</li>
                  <li>Herve, Belgique</li>
                  <li>Lun - Sam : 08h - 19h</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm">Légal</h4>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-blue-600">CGV</a></li>
                  <li><a href="#" className="hover:text-blue-600">Confidentialité</a></li>
                  <li><a href="#" className="hover:text-blue-600">Mentions légales</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs text-slate-400 pt-8 border-t border-slate-50">
            © 2025 Shine&Go. Fait avec soin en Belgique.
          </div>
        </div>
      </footer>

      {/* --- STICKY MOBILE CTA --- */}
      <div className={`fixed bottom-6 left-4 right-4 md:hidden z-40 transition-transform duration-500 ${isScrolled ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <a 
          href="https://wa.me/32472303701"
          className="flex items-center justify-center gap-2 w-full h-14 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-slate-900/30 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          Réserver maintenant
        </a>
      </div>

    </main>
  )
}