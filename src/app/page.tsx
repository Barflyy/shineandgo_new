'use client'

import { ArrowRight, Check, Star, Phone, Mail, MapPin, Clock, Sparkles, Menu, X, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navVisible, setNavVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100">

      {/* NAVIGATION */}
      <nav role="navigation" aria-label="Navigation principale" className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out ${scrolled ? 'py-3 shadow-sm' : 'py-5'
        } ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            Shine<span className="text-blue-600">&</span>Go
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="#tarifs" className="hover:text-blue-600 transition-colors" aria-label="Voir nos tarifs">Tarifs</a>
              <a href="#services" className="hover:text-blue-600 transition-colors" aria-label="Découvrir nos services">Services</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors" aria-label="Questions fréquentes">FAQ</a>
            </div>
            <a
              href="tel:+32472303701"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
              aria-label="Appeler Shine&Go au 0472 30 37 01"
            >
              0472 30 37 01
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="tel:+32472303701"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full"
            >
              Appeler
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-fade-in-up">
            <a href="#tarifs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50">Tarifs</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50">Services</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50">FAQ</a>
            <a href="https://wa.me/32472303701" className="mt-2 w-full py-3 bg-gray-900 text-white text-center rounded-xl font-medium">
              Réserver par WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* HERO - Minimaliste épuré */}
      <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge discret */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 rounded-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="text-sm font-medium text-blue-900">4.9/5 sur Google</span>
            </div>

            {/* Titre épuré */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fade-in-up text-balance" style={{ animationDelay: '0.2s' }}>
              Nettoyage voiture à&nbsp;domicile
              <span className="block font-semibold mt-2 text-gray-900">Liège · Herve · Verviers</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed px-4 animate-fade-in-up text-pretty max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
              Service premium mobile en&nbsp;Wallonie
              <span className="block mt-2 text-base text-gray-400 font-normal">Intervention en&nbsp;48h · Satisfait ou&nbsp;remboursé</span>
            </p>

            {/* Badge d'urgence */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-semibold text-orange-900">Plus que 3&nbsp;créneaux cette&nbsp;semaine</span>
            </div>

            {/* CTA simple */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/32472303701"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5"
                aria-label="Réserver un nettoyage via WhatsApp"
              >
                Réserver en ligne
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+32472303701"
                className="w-full sm:w-auto px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
                aria-label="Appeler maintenant pour réserver"
              >
                0472 30 37 01
              </a>
            </div>

            {/* Info clés */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Service en 90 min</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Produits Koch-Chemie</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Garantie satisfaction</span>
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
                { ville: 'Herve', href: '/nettoyage-voiture-herve' },
                { ville: 'Verviers', href: '/nettoyage-voiture-verviers' },
                { ville: 'Liège', href: '/lavage-voiture-liege' },
                { ville: 'Battice', href: '/lavage-voiture-battice' },
                { ville: 'Soumagne', href: '/lavage-voiture-soumagne' },
                { ville: 'Spa', href: '/nettoyage-voiture-spa' },
                { ville: 'Fléron', href: '/nettoyage-voiture-fleron' },
                { ville: 'Visé', href: '/nettoyage-voiture-vise' },
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
                <h3 className="font-semibold text-gray-900 mb-2">Note 4.9/5</h3>
                <p className="text-sm text-gray-600 text-pretty">Plus de 150&nbsp;avis clients vérifiés sur&nbsp;Google My&nbsp;Business</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Intervention rapide</h3>
                <p className="text-sm text-gray-600 text-pretty">Réservation en&nbsp;48h, intervention en&nbsp;moins de&nbsp;2h&nbsp;chrono</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES */}
      <section id="tarifs" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4 text-balance">
              Tarifs transparents
            </h2>
            <p className="text-lg text-gray-600 text-pretty">
              Pas de surprise, déplacement inclus dans&nbsp;le&nbsp;prix
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Intérieur */}
            <article className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">Intérieur</h3>
                <p className="text-sm text-gray-500">Rénovation habitacle</p>
              </div>
              <div className="mb-8 pb-8 border-b border-gray-100">
                <div className="text-5xl font-light text-gray-900 mb-1">65€</div>
                <p className="text-sm text-gray-400">Durée : ~1h00</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'Aspiration complète',
                  'Pressing sièges & tapis',
                  'Dépoussiérage plastiques',
                  'Vitres intérieures',
                  'Désodorisation'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur à 65€"
                className="w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors"
              >
                Réserver
              </a>
            </article>

            {/* Complet */}
            <article className="relative bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:shadow-2xl hover:shadow-gray-900/20 hover:-translate-y-1 transition-all duration-300 flex flex-col md:scale-105 md:z-10 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Best Seller
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-white mb-2">Complet</h3>
                <p className="text-sm text-gray-400">Remise à neuf totale</p>
              </div>
              <div className="mb-8 pb-8 border-b border-gray-800">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl line-through text-gray-600 font-light">150€</span>
                  <div className="text-5xl font-light text-white">120€</div>
                </div>
                <p className="text-sm text-green-400 font-medium">Économisez 30€ · Meilleure offre</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'Intérieur complet inclus',
                  'Extérieur complet inclus',
                  'Traitement des cuirs',
                  'Protection céramique spray',
                  'Garantie satisfaction'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite le nettoyage complet à 120€"
                className="w-full py-4 bg-white text-gray-900 font-bold rounded-xl text-center hover:bg-gray-100 transition-colors"
              >
                Réserver le complet
              </a>
            </article>

            {/* Extérieur */}
            <article className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">Extérieur</h3>
                <p className="text-sm text-gray-500">Lavage & Protection</p>
              </div>
              <div className="mb-8 pb-8 border-b border-gray-100">
                <div className="text-5xl font-light text-gray-900 mb-1">85€</div>
                <p className="text-sm text-gray-400">Durée : ~1h15</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'Lavage main (2 seaux)',
                  'Nettoyage jantes',
                  'Dégoudronnage',
                  'Cire de protection',
                  'Brillant pneus'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur à 85€"
                className="w-full py-4 border border-gray-200 text-gray-900 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors"
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
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Pressing intérieur</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">
                    Taches sur les sièges ? Odeurs persistantes ? Notre injecteur-extracteur professionnel élimine la saleté incrustée au cœur des fibres pour un habitacle sain et frais.
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

      {/* GALERIE AVANT/APRÈS */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4 text-balance">
                Nos résultats parlent d'eux-mêmes
              </h2>
              <p className="text-lg text-gray-600 text-pretty">
                Transformations réelles de&nbsp;véhicules&nbsp;clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { before: 'avant01.webp', after: 'apres01.webp', title: 'Intérieur complet BMW Série 3' },
                { before: 'avant02.webp', after: 'apres02.webp', title: 'Extérieur + Céramique Audi A4' },
                { before: 'avant03.webp', after: 'apres03.webp', title: 'Pressing sièges Mercedes' },
                { before: 'avant04.webp', after: 'apres04.webp', title: 'Lavage complet Tesla Model 3' },
              ].map((item, i) => (
                <div key={i} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative overflow-hidden">
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                          AVANT
                        </div>
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">Photo avant</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                          APRÈS
                        </div>
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <span className="text-blue-600 text-sm">Photo après</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://wa.me/32472303701"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Voir plus de réalisations
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
                { q: "Combien de temps ça dure\u00A0?", a: "Comptez 1h pour un\u00A0intérieur ou\u00A0extérieur seul, et environ 2h pour la formule complète. Nous prenons le temps nécessaire pour un résultat parfait." },
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

      {/* FOOTER - Maillage interne SEO */}
      <footer className="py-12 sm:py-16 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Shine<span className="text-blue-600">&</span>Go
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 text-pretty">
                Service mobile de&nbsp;nettoyage et lavage automobile professionnel à&nbsp;domicile en&nbsp;Wallonie
              </p>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                  ))}
                </div>
                <span className="text-gray-600 ml-1">4.9/5 Google</span>
              </div>
            </div>

            {/* Services - Liens internes */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Nos services</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="/nettoyage-interieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Nettoyage intérieur voiture
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-exterieur-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Lavage extérieur voiture
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-complet-voiture" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Nettoyage complet voiture
                  </a>
                </li>
                <li>
                  <a href="/prix-nettoyage-voiture-domicile" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Prix et tarifs
                  </a>
                </li>
              </ul>
            </div>

            {/* Zones - SEO local */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Zones d'intervention</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a href="/nettoyage-voiture-herve" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Nettoyage voiture Herve
                  </a>
                </li>
                <li>
                  <a href="/nettoyage-voiture-verviers" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Lavage voiture Verviers
                  </a>
                </li>
                <li>
                  <a href="/lavage-voiture-liege" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Lavage voiture Liège
                  </a>
                </li>
                <li>
                  <a href="/lavage-voiture-battice" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Nettoyage voiture Battice
                  </a>
                </li>
                <li>
                  <a href="/lavage-voiture-soumagne" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Lavage voiture Soumagne
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base text-balance">Contact</h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="tel:+32472303701"
                    className="hover:text-gray-900 transition-colors"
                    aria-label="Téléphone Shine&Go"
                  >
                    0472 30 37 01
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="mailto:contact@shineandgo.be"
                    className="hover:text-gray-900 transition-colors"
                  >
                    contact@shineandgo.be
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-pretty">Service mobile<br />Herve, Wallonie, Belgique</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-gray-500">
              © 2025 Shine&Go. Nettoyage voiture professionnel à domicile.
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <a href="/mentions-legales" className="hover:text-gray-900 transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-gray-900 transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CTA Flottant WhatsApp */}
      <a
        href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </a>

      {/* Schema.org - Enhanced */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go",
            "image": "https://shineandgo.be/og-image.jpg",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "addressCountry": "BE"
            },
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
  )
}

// Add Tailwind animation for pulse
// This is handled in globals.css or tailwind.config