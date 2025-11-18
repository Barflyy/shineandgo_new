'use client'

import { ArrowRight, Check, Star, Phone, MapPin, Menu, X, ChevronDown, Sparkles, CarFront, GripVertical } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

// --- 1. COMPOSANT ANIMATION FADE-IN ---
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

// --- 2. COMPOSANT SLIDER AVANT/APRÈS INTERACTIF ---
function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && event.type !== 'click') return // Permet le click pour jump
    
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX
    
    // Calcul du pourcentage (borné entre 0 et 100)
    const position = ((x - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(100, Math.max(0, position)))
  }

  // Gestionnaires d'événements pour souris et tactile
  const startDrag = () => setIsDragging(true)
  const stopDrag = () => setIsDragging(false)

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 md:h-96 rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-slate-200 touch-none"
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={startDrag}
      onTouchEnd={stopDrag}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onClick={handleMove} // Permet de cliquer pour déplacer instantanément
    >
      {/* IMAGE APRÈS (Fond - Propre) */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2300&auto=format&fit=crop" 
          alt="Voiture propre" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          APRÈS (Shine&Go)
        </div>
      </div>

      {/* IMAGE AVANT (Dessus - Sale - Masquée par clip-path) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1632823471565-1ec2bd3d0edd?q=80&w=2300&auto=format&fit=crop" // Image boueuse générique
          alt="Voiture sale" 
          className="w-full h-full object-cover filter brightness-90 sepia-[0.2]" // Petit filtre pour accentuer l'effet sale
        />
        <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          AVANT
        </div>
      </div>

      {/* BARRE DE CONTRÔLE */}
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-blue-600 transition-transform hover:scale-110 active:scale-95">
          <GripVertical className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

// --- 3. COMPOSANT PRINCIPAL ---
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
    { name: "Avis", href: "#avis" },
  ]

  return (
    <main className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

      {/* --- NAVIGATION --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen 
            ? 'bg-white/90 backdrop-blur-lg border-b border-slate-100 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <CarFront className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">
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
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+32472303701" className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">
              0472 30 37 01
            </a>
            <a href="#tarifs" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
              Réserver
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 -mr-2 text-slate-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* Mobile Fullscreen Menu */}
          <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-slate-900 active:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-16 h-1 bg-slate-100 mx-auto my-6 rounded-full" />
              <a href="https://wa.me/32472303701" className="text-blue-600 font-bold text-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Réserver par WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-36 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden relative">
        {/* Background subtle blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>

        <div className="container mx-auto max-w-4xl text-center">
          
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8 border border-blue-100">
              <Star className="w-3.5 h-3.5 fill-blue-700" />
              Service Premium à Domicile
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.05]">
              Le detailing qui vient <br className="hidden md:block" />
              <span className="text-blue-600 relative inline-block">
                à votre porte
                <svg className="absolute w-full h-2.5 -bottom-1 left-0 text-blue-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>.
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              Ne perdez plus votre temps en station de lavage. <br className="hidden sm:block"/>
              Nous redonnons l'éclat du neuf à votre véhicule, directement chez vous.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] transition-all active:scale-95"
              >
                Réserver sur WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#tarifs"
                className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-slate-50 text-slate-900 font-bold text-lg flex items-center justify-center hover:bg-slate-100 transition-all border border-slate-100"
              >
                Voir les prix
              </a>
            </div>
          </FadeIn>
          
          {/* Indicateurs de confiance */}
          <FadeIn delay={400} className="mt-16 pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600 bg-blue-50 p-1 rounded-full" /> Déplacement gratuit 25km</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600 bg-blue-50 p-1 rounded-full" /> Produits Koch-Chemie®</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-blue-600 bg-blue-50 p-1 rounded-full" /> Assurance Professionnelle</span>
          </FadeIn>

        </div>
      </section>

      {/* --- SLIDER AVANT/APRÈS (Waw Effect) --- */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <FadeIn delay={200}>
             <div className="text-center mb-8">
               <h2 className="text-2xl font-bold mb-2">Constatez la différence</h2>
               <p className="text-slate-500 text-sm">Glissez le curseur pour voir le résultat.</p>
             </div>
             <BeforeAfterSlider />
          </FadeIn>
        </div>
      </section>

      {/* --- ZONES --- */}
      <section id="zones" className="py-10 border-b border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm mb-6 font-medium">Nous intervenons à domicile :</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Fléron', 'Aubel', 'Visé'].map((city, i) => (
              <FadeIn key={city} delay={i * 50}>
                <span className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                  {city}
                </span>
              </FadeIn>
            ))}
            <span className="px-5 py-2 text-sm text-slate-400">+ 25km alentours</span>
          </div>
        </div>
      </section>

      {/* --- TARIFS --- */}
      <section id="tarifs" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tarifs Simples</h2>
            <p className="text-slate-500 text-lg">Pas de devis compliqué. Paiement après validation du résultat.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            
            {/* Intérieur */}
            <FadeIn delay={0} className="h-full">
              <article className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">🛋️</div>
                  <h3 className="text-2xl font-bold text-slate-900">Intérieur</h3>
                  <p className="text-slate-500 text-sm mt-1 font-medium">Remise à neuf habitacle</p>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-8">65€</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Aspiration complète', 'Shampoing tissus/tapis', 'Plastiques & Vitres', 'Désinfection', 'Parfum habitacle'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-slate-300 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/32472303701?text=Rdv Intérieur" className="w-full py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
                  Choisir
                </a>
              </article>
            </FadeIn>

            {/* Complet (Highlight) */}
            <FadeIn delay={100} className="h-full">
              <article className="bg-slate-900 p-8 rounded-[2.5rem] flex flex-col shadow-2xl shadow-slate-900/20 transform md:-translate-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all" />
                
                <div className="mb-6 relative">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-600/40">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <span className="bg-white/10 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">POPULAIRE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Complet</h3>
                  <p className="text-slate-400 text-sm mt-1 font-medium">La totale (Int + Ext)</p>
                </div>
                
                <div className="mb-8 relative">
                  <div className="text-5xl font-bold text-white">120€</div>
                  <p className="text-green-400 text-xs font-bold mt-2 bg-green-400/10 inline-block px-2 py-1 rounded-lg">Économisez 30€</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow relative">
                  {['Tout le pack Intérieur', 'Lavage carrosserie main', 'Cire protection 3 mois', 'Jantes & Pneus', 'Séchage microfibre'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/32472303701?text=Rdv Complet" className="relative w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-500 hover:scale-[1.02] transition-all shadow-lg shadow-blue-900/50">
                  Réserver le Complet
                </a>
              </article>
            </FadeIn>

            {/* Extérieur */}
            <FadeIn delay={200} className="h-full">
              <article className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">🚗</div>
                  <h3 className="text-2xl font-bold text-slate-900">Extérieur</h3>
                  <p className="text-slate-500 text-sm mt-1 font-medium">Lavage main anti-rayures</p>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-8">85€</div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['Prélavage mousse active', 'Lavage 2 seaux', 'Décontamination', 'Cire liquide', 'Séchage sans traces'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-slate-300 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/32472303701?text=Rdv Extérieur" className="w-full py-4 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
                  Choisir
                </a>
              </article>
            </FadeIn>
          </div>

          {/* NOTE DE TRANSPARENCE (Suppléments) */}
          <FadeIn delay={300}>
            <div className="mt-16 p-6 bg-blue-50/50 rounded-3xl border border-blue-100 max-w-3xl mx-auto text-center">
              <h4 className="font-bold text-blue-900 mb-2 text-xs uppercase tracking-widest">Transparence Totale</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Les tarifs sont donnés pour un véhicule dans un état de saleté "normal". 
                Un supplément peut s'appliquer pour : poils d'animaux excessifs (+15€), 
                boue extrême (+10€) ou grand SUV/4x4 (+10€). 
                <span className="font-semibold"> Tout est validé avec vous avant de commencer.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- AVIS CLIENTS (Social Proof) --- */}
      <section id="avis" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Ils nous font confiance</h2>
             <div className="flex justify-center items-center gap-2">
               <span className="font-bold text-xl">4.9</span>
               <div className="flex gap-0.5">
                 {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
               </div>
               <span className="text-slate-400 text-sm">(87 avis Google)</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Thomas D.", ville: "Herve", text: "Bluffé par le résultat. Mes sièges beiges étaient noirs de crasse, ils sont revenus comme neufs. Le technicien est très poli." },
              { name: "Sarah L.", ville: "Verviers", text: "Super pratique. Je travaillais chez moi pendant qu'il s'occupait de la voiture. Gain de temps énorme et résultat parfait." },
              { name: "Marc P.", ville: "Liège", text: "J'avais peur pour les rayures sur ma Tesla, mais leur technique à la main est top. Je recommande vivement !" }
            ].map((avis, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-slate-50 p-8 rounded-[2rem] h-full border border-slate-100">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-slate-700 mb-6 italic leading-relaxed font-medium">"{avis.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      {avis.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{avis.name}</div>
                      <div className="text-slate-400 text-xs">{avis.ville}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
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
              { q: "Combien de temps dure un nettoyage ?", a: "Environ 1h30 pour une formule complète. Nous privilégions la qualité à la rapidité." },
              { q: "Acceptez-vous la carte ?", a: "Oui, via Payconiq (QR Code) ou virement instantané. Le cash est aussi accepté. Vous ne payez qu'à la fin." },
              { q: "Intervenez-vous s'il pleut ?", a: "Nous disposons d'une tonnelle pour les pluies fines. En cas de tempête, nous reportons gratuitement." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <details className="group bg-white rounded-2xl border border-slate-200/60 open:shadow-lg transition-all duration-300 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 font-bold text-slate-900 cursor-pointer list-none select-none hover:bg-slate-50 transition-colors">
                    {item.q}
                    <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                    {item.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xs">
              <div className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CarFront className="w-6 h-6 text-blue-600" />
                Shine<span className="text-blue-600">Go</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Le spécialiste du nettoyage automobile à domicile en province de Liège. Qualité showroom, sans vous déplacer.
              </p>
              <div className="flex gap-4">
                {/* Placeholder pour réseaux sociaux */}
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">IG</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-16">
              <div>
                <h4 className="font-bold mb-6 text-slate-900">Contact</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Phone className="w-4 h-4"/> 0472 30 37 01</li>
                  <li className="flex items-center gap-2 hover:text-blue-600 transition-colors"><MapPin className="w-4 h-4"/> Herve, Belgique</li>
                  <li className="flex items-center gap-2"><Sparkles className="w-4 h-4"/> Lun - Sam : 08h - 19h</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-slate-900">Légal</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Conditions Générales</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Confidentialité</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Mentions légales</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs text-slate-400 pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span>© 2025 Shine&Go. Fait avec soin en Belgique.</span>
            <span>Designé pour la performance.</span>
          </div>
        </div>
      </footer>

      {/* --- STICKY MOBILE CTA --- */}
      <div className={`fixed bottom-6 left-4 right-4 md:hidden z-40 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isScrolled ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <a 
          href="https://wa.me/32472303701"
          className="flex items-center justify-center gap-2 w-full h-14 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-slate-900/40 active:scale-95 transition-transform border border-white/10 backdrop-blur-sm"
        >
          <Phone className="w-5 h-5" />
          Réserver maintenant
        </a>
      </div>

      {/* Schema SEO pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoWash",
            "name": "Shine&Go",
            "priceRange": "€€",
            "telephone": "+32472303701",
            "areaServed": "Liège",
            "image": "https://images.unsplash.com/photo-1601362840469-51e4d8d58785"
          })
        }}
      />
    </main>
  )
}