'use client'

import { ArrowRight, Check, Star, Phone, Mail, MapPin, Clock, Sparkles, ShieldCheck, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 20) {
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
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      
      {/* BACKGROUND ACCENTS - Donne un effet de brillance subtil */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-50/50 blur-[100px]" />
      </div>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'
      } ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
             {/* Logo simple avec icone */}
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Shine<span className="text-blue-600">&</span>Go
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#tarifs" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Tarifs</a>
            <a href="#zones" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Zones</a>
            <a
              href="tel:+32472303701"
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              0472 30 37 01
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#tarifs" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Tarifs</a>
              <a href="tel:+32472303701" className="text-blue-600 font-bold">Appeler maintenant</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO - Modernisé avec typographie forte */}
      <section className="relative pt-36 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge Trust - Style 'pill' moderne */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm animate-fade-in-up">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700 border-l border-gray-200 pl-2 ml-1">
                4.9/5 <span className="text-gray-400 font-normal">sur Google</span>
              </span>
            </div>

            {/* Titre H1 Impactant */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up delay-100">
              Le nettoyage voiture <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                réinventé à domicile
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
              Service de detailing mobile premium en Wallonie. <br className="hidden sm:block" />
              Nous transformons votre véhicule pendant que vous restez chez vous.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
              <a
                href="https://wa.me/32472303701"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Réserver en ligne
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                0472 30 37 01
              </a>
            </div>

            {/* Trust metrics - Design épuré */}
            <div className="grid grid-cols-3 gap-4 sm:gap-12 border-t border-gray-100/50 pt-8 sm:pt-10 animate-fade-in-up delay-500">
              {[
                { label: "Déplacement offert", sub: "Rayon 25km" },
                { label: "Produits Premium", sub: "Koch-Chemie" },
                { label: "Disponibilité", sub: "Sous 48h" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.label}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZONES - Carte interactive visuelle */}
      <section id="zones" className="py-20 bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Partout où vous êtes <br />
                <span className="text-blue-600">en Province de Liège</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Pas besoin de bouger. Que vous soyez à la maison ou au bureau, notre camionnette autonome équipée arrive chez vous.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne', 'Spa', 'Fléron', 'Visé'].map((city) => (
                  <span key={city} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Déplacement gratuit jusqu'à 25km de Herve
              </p>
            </div>
            
            {/* Illustration abstraite de la zone (ou placeholder pour une carte) */}
            <div className="md:w-1/2 w-full">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                   {[
                    { ville: 'Herve', icon: '📍' }, { ville: 'Liège', icon: '🏙️' },
                    { ville: 'Verviers', icon: '🏭' }, { ville: 'Spa', icon: '🌲' }
                   ].map((z, i) => (
                     <div key={i} className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                       <span className="text-2xl">{z.icon}</span>
                       <div>
                         <div className="font-bold text-gray-900">{z.ville}</div>
                         <div className="text-xs text-green-600 font-medium">Zone couverte</div>
                       </div>
                     </div>
                   ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                  <p className="text-blue-800 font-medium text-sm">Vous habitez ailleurs ?</p>
                  <a href="tel:+32472303701" className="text-blue-600 text-sm underline hover:text-blue-800">Appelez-nous pour vérifier</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS - Design Cards Modernes */}
      <section id="tarifs" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Tarifs clairs, sans surprise</h2>
            <p className="text-lg text-gray-600">Choisissez la formule adaptée à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            
            {/* Option 1 */}
            <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intérieur</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tight">65€</span>
                <span className="text-gray-400 text-sm">/ véhicule</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Aspiration complète', 'Dépoussiérage plastiques', 'Vitres intérieures', 'Désodorisation', 'Contours de portes'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-semibold text-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                Choisir Intérieur
              </a>
            </div>

            {/* Option 3 (Populaire - Mis au milieu visuellement sur desktop) */}
            <div className="relative bg-gray-900 p-8 rounded-3xl shadow-2xl shadow-blue-900/20 transform md:-translate-y-4 border border-gray-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Le plus demandé
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Complet (Int+Ext)</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-white tracking-tight">120€</span>
              </div>
              <p className="text-green-400 text-sm font-medium mb-6">Économisez 30€ sur ce pack</p>
              
              <div className="h-px bg-gray-800 mb-6" />

              <ul className="space-y-4 mb-8">
                {['Tout le pack Intérieur', 'Lavage main pH neutre', 'Jantes & Pneus', 'Cire de protection (3 mois)', 'Traitement plastiques'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-[-2px]">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-4 rounded-xl bg-white text-gray-900 font-bold text-center hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
                Réserver le Complet
              </a>
            </div>

            {/* Option 2 */}
            <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extérieur</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tight">85€</span>
                <span className="text-gray-400 text-sm">/ véhicule</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Prélavage mousse active', 'Lavage main 2 seaux', 'Décontamination', 'Séchage microfibre', 'Brillant pneus'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/32472303701" className="block w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-semibold text-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                Choisir Extérieur
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* AVANTAGES / SERVICES - Grid bento */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Zéro Rayure Garantie</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les rouleaux automatiques rayent votre carrosserie. Notre méthode manuelle avec gants microfibres et technique "deux seaux" préserve l'éclat de votre peinture.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Produits Koch-Chemie®</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous utilisons exclusivement la référence allemande du detailing. Des produits pH neutres, biodégradables et ultra-efficaces pour un résultat durable.
                  </p>
                </div>
              </div>

               <div className="bg-blue-600 p-8 rounded-3xl shadow-lg shadow-blue-600/20 md:col-span-2 flex flex-col md:flex-row items-center gap-8 text-white">
                 <div className="flex-1">
                   <h3 className="text-2xl font-bold mb-3">100% Autonome</h3>
                   <p className="text-blue-100 leading-relaxed">
                     Notre véhicule est équipé d'eau et d'électricité. Nous n'avons besoin de rien de votre part, juste les clés de la voiture. Idéal sur le parking de votre entreprise ou devant chez vous.
                   </p>
                 </div>
                 <div className="shrink-0 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Clock className="w-12 h-12 text-white" />
                 </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Simplifiée */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Faut-il préparer quelque chose ?", a: "Rien du tout ! Assurez-vous simplement que la voiture soit accessible. Nous avons notre propre eau et électricité." },
              { q: "Combien de temps ça dure ?", a: "Comptez environ 1h30 pour un nettoyage complet. Nous prenons le temps nécessaire pour un résultat parfait." },
              { q: "Comment payer ?", a: "Paiement facile sur place après validation du résultat : Espèces, Payconiq ou virement instantané." }
            ].map((item, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 open:bg-white open:shadow-lg open:border-transparent transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 list-none">
                  {item.q}
                  <span className="transition group-open:rotate-180">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 animate-fade-in">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - Clean & Simple */}
      <footer className="py-12 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-xl font-bold text-white">
              Shine<span className="text-blue-500">&</span>Go
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Accueil</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer" />
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="text-center text-xs border-t border-gray-800 pt-8">
            &copy; 2025 Shine&Go Belgique. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Schema.org (Conservé de l'original pour le SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go",
            "image": "https://shineandgo.be/og-image.jpg",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "addressCountry": "BE"
            }
          })
        }}
      />

      {/* Floating Action Button (Apparaît au scroll) */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <a
          href="https://wa.me/32472303701"
          className="flex items-center gap-3 px-6 py-4 bg-gray-900 text-white font-bold rounded-full shadow-2xl hover:bg-blue-600 transition-colors group"
        >
          <span className="hidden sm:inline">Réserver</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </main>
  )
}