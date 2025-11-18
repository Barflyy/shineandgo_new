'use client'

import { ArrowRight, Check, Star, Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomePage() {
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
    <main className="bg-white min-h-screen">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out ${
        scrolled ? 'py-2 sm:py-3 shadow-lg' : 'py-4 sm:py-5'
      } ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-6 sm:px-6 flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-gray-900">
            Shine<span className="text-blue-600">&</span>Go
          </div>
          <a
            href="tel:+32472303701"
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-full hover:bg-blue-700 transition-colors touch-manipulation"
            aria-label="Appeler Shine&Go pour un nettoyage voiture"
          >
            <span className="hidden sm:inline">0472 30 37 01</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </nav>

      {/* HERO - SEO Optimisé */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge avis Google - Rich Snippet */}
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-full">
              <div className="flex gap-0.5" aria-label="Note 4.9 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">4.9/5 sur Google</span>
            </div>

            {/* H1 - Mots-clés primaires */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Nettoyage voiture à domicile
              <span className="block font-normal mt-1 sm:mt-2">Herve, Verviers, Liège</span>
            </h1>

            {/* Description - LSI Keywords */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 font-light leading-relaxed px-4 sm:px-0">
              Service mobile de lavage automobile professionnel en Wallonie
              <span className="block mt-2 text-sm sm:text-base text-gray-400">
                Nettoyage intérieur et extérieur • Dès 65€ • En 90 minutes
              </span>
            </p>

            {/* CTA - Touch Friendly */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à domicile"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 touch-manipulation min-h-[56px]"
                aria-label="Réserver un lavage voiture par WhatsApp"
              >
                Réserver mon nettoyage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all touch-manipulation min-h-[56px] flex items-center justify-center"
                aria-label="Appeler pour nettoyage voiture"
              >
                📞 0472 30 37 01
              </a>
            </div>

            {/* USPs - Mots-clés secondaires */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-500">
              <span>✓ Intervention rapide en 90 min</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Produits professionnels Koch-Chemie</span>
              <span className="hidden sm:inline">·</span>
              <span>✓ Garantie satisfaction 7 jours</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ZONES - SEO Local Boost */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Nettoyage voiture mobile en Wallonie
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Service à domicile dans toute la région liégeoise
              </p>
            </div>

            {/* Grille zones - Liens internes SEO */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { ville: 'Herve', href: '/nettoyage-voiture-herve' },
                { ville: 'Verviers', href: '/nettoyage-voiture-verviers' },
                { ville: 'Liège', href: '/lavage-voiture-liege' },
                { ville: 'Battice', href: '/lavage-voiture-battice' },
                { ville: 'Soumagne', href: '/lavage-voiture-soumagne' },
                { ville: 'Spa', href: '/nettoyage-voiture-spa' },
              ].map((zone) => (
                <a
                  key={zone.ville}
                  href={zone.href}
                  className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all text-center"
                  aria-label={`Nettoyage voiture ${zone.ville}`}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {zone.ville}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Lavage à domicile
                  </div>
                </a>
              ))}
            </div>

            {/* CTA zones étendues */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">
                Autre ville ? Nous intervenons jusqu'à 25km autour de Herve
              </p>
              <a 
                href="tel:+32472303701" 
                className="inline-flex items-center gap-2 mt-3 text-blue-600 font-medium hover:gap-3 transition-all"
              >
                Vérifier ma zone
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOS FORMULES - Mots-clés prix */}
      <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          
          {/* Header avec mots-clés */}
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3 sm:mb-4">
              Tarifs nettoyage voiture à domicile
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Prix fixes et transparents • Déplacement gratuit 25km
            </p>
          </div>

          {/* Cards avec rich snippets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            
            {/* Intérieur - Optimisé "nettoyage intérieur voiture" */}
            <article className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-1">
                  Nettoyage intérieur voiture
                </h3>
                <p className="text-sm text-gray-500">Durée: 45-60 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100">
                <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-1">
                  <span itemProp="price">65</span>€
                </div>
                <meta itemProp="priceCurrency" content="EUR" />
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Aspiration complète sièges et tapis',
                  'Nettoyage tableau de bord',
                  'Vitres intérieures impeccables',
                  'Protection UV anti-fissures',
                  'Désodorisation habitacle'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite un nettoyage intérieur à 65€"
                className="block w-full py-3 sm:py-3.5 border border-gray-900 text-gray-900 font-medium rounded-full text-center hover:bg-gray-900 hover:text-white transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver l'intérieur
              </a>
            </article>

            {/* Extérieur - Optimisé "lavage voiture" */}
            <article className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-1">
                  Lavage extérieur voiture
                </h3>
                <p className="text-sm text-gray-500">Durée: 60-75 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-100">
                <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-1">
                  <span itemProp="price">85</span>€
                </div>
                <meta itemProp="priceCurrency" content="EUR" />
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Lavage 2 seaux pH neutre',
                  'Décontamination clay bar',
                  'Polish léger micro-rayures',
                  'Cire protection hydrophobe 3 mois',
                  'Jantes et pneus brillance noire'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur à 85€"
                className="block w-full py-3 sm:py-3.5 border border-gray-900 text-gray-900 font-medium rounded-full text-center hover:bg-gray-900 hover:text-white transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver l'extérieur
              </a>
            </article>

            {/* Complet - Optimisé "nettoyage complet voiture" */}
            <article className="relative bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-900">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-3 sm:px-4 py-1 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Le plus populaire</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-normal text-white mb-1">
                  Nettoyage complet voiture
                </h3>
                <p className="text-sm text-gray-400">Durée: 90-120 minutes</p>
              </div>
              
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-800">
                <div className="text-4xl sm:text-5xl font-light text-white mb-1">
                  <span itemProp="price">120</span>€
                </div>
                <meta itemProp="priceCurrency" content="EUR" />
                <p className="text-sm text-green-400">Économisez 30€ vs séparé</p>
              </div>
              
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Tout le nettoyage intérieur inclus',
                  'Tout le lavage extérieur inclus',
                  'Traitement cuirs et plastiques',
                  'Protection longue durée 3 mois',
                  'Garantie satisfaction 7 jours'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/32472303701?text=Je souhaite le nettoyage complet à 120€"
                className="block w-full py-3 sm:py-3.5 bg-white text-gray-900 font-medium rounded-full text-center hover:bg-gray-100 transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                Réserver le forfait complet
              </a>
            </article>
          </div>

          {/* Info prix - Long-tail keywords */}
          <div className="text-center mt-8 sm:mt-12 space-y-3">
            <p className="text-xs sm:text-sm text-gray-500 px-4">
              ✓ Déplacement gratuit jusqu'à 25km de Herve • ✓ Paiement après validation du résultat • ✓ Devis gratuit sans engagement
            </p>
            <a 
              href="/prix-nettoyage-voiture-domicile"
              className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
            >
              Voir le détail des prix
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES DETAILLÉS - Contenu SEO */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
                Service de nettoyage automobile mobile
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Detailing professionnel à domicile en Wallonie
              </p>
            </div>

            {/* Grille services - Contenu riche */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              
              {/* Service 1 */}
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-3">
                  Lavage à la main professionnel
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Contrairement au lavage automatique qui raye la peinture, notre méthode 2 seaux avec produits Koch-Chemie préserve votre carrosserie. Nous utilisons des mitaines microfibre premium et un savon pH neutre pour un résultat showroom sans risque.
                </p>
                <a 
                  href="/nettoyage-exterieur-voiture"
                  className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Service 2 */}
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-3">
                  Nettoyage intérieur en profondeur
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Aspiration haute puissance, nettoyage vapeur des tissus, traitement anti-bactérien et protection UV. Idéal pour éliminer les taches, les odeurs et redonner un coup de neuf à votre habitacle. Parfait avant une vente ou simplement pour votre confort.
                </p>
                <a 
                  href="/nettoyage-interieur-voiture"
                  className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Service 3 */}
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-3">
                  Service mobile à domicile
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nous venons chez vous, à votre bureau ou n'importe où en Wallonie. Plus besoin de perdre du temps en station de lavage. Vous continuez vos activités pendant que nous prenons soin de votre véhicule. Intervention rapide sous 48h.
                </p>
              </div>

              {/* Service 4 */}
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-3">
                  Produits professionnels Koch-Chemie
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nous utilisons exclusivement la gamme Koch-Chemie, leader mondial du detailing automobile. Ces produits professionnels allemands garantissent un résultat supérieur et une protection longue durée, sans abîmer votre véhicule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Rich Snippets SEO */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Tout savoir sur notre service de lavage voiture
              </p>
            </div>

            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: "Quel est le prix d'un nettoyage voiture à domicile ?",
                  a: "Nos tarifs démarrent à 65€ pour un nettoyage intérieur, 85€ pour l'extérieur, et 120€ pour le forfait complet (intérieur + extérieur). Le déplacement est gratuit jusqu'à 25km de Herve."
                },
                {
                  q: "Combien de temps dure un lavage voiture complet ?",
                  a: "Un nettoyage complet prend entre 90 et 120 minutes selon l'état du véhicule. L'intérieur seul prend 45-60 min, et l'extérieur 60-75 min. Nous ne bâclons jamais le travail pour aller vite."
                },
                {
                  q: "Intervenez-vous à Herve, Verviers et Liège ?",
                  a: "Oui, nous couvrons toute la région : Herve, Verviers, Liège, Battice, Soumagne, Spa et tous les villages dans un rayon de 25km. Au-delà, un supplément de 0,50€/km s'applique."
                },
                {
                  q: "Quels produits utilisez-vous pour le lavage ?",
                  a: "Nous utilisons exclusivement des produits professionnels Koch-Chemie, leader mondial du detailing. Savons pH neutre, cires hydrophobes, protection UV, tout est conçu pour préserver votre peinture et vos surfaces."
                },
                {
                  q: "Comment réserver un nettoyage voiture ?",
                  a: "Vous pouvez réserver par WhatsApp (0472 30 37 01) ou téléphone. Nous intervenons généralement sous 48h. Paiement uniquement après validation du résultat, vous ne prenez aucun risque."
                }
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-white p-6 rounded-xl border border-gray-100"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 
                    className="text-lg font-medium text-gray-900 mb-3"
                    itemProp="name"
                  >
                    {faq.q}
                  </h3>
                  <div 
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <p 
                      className="text-gray-600 leading-relaxed"
                      itemProp="text"
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA FAQ */}
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">D'autres questions ?</p>
              <a
                href="https://wa.me/32472303701?text=J'ai une question sur vos services de nettoyage voiture"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all"
              >
                Contactez-nous
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES - Avis clients SEO */}
      <section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-3 sm:mb-4">
              Avis clients vérifiés
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Plus de 30 clients satisfaits chaque mois
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sophie Laurent',
                location: 'Herve',
                service: 'Nettoyage complet',
                text: 'Service impeccable ! Ma voiture n\'a jamais été aussi propre. Nathan est professionnel, ponctuel et utilise vraiment de bons produits. Le résultat est digne d\'un showroom.'
              },
              {
                name: 'Marc Dubois',
                location: 'Verviers',
                service: 'Lavage extérieur',
                text: 'Excellent rapport qualité/prix pour ce lavage automobile. Les produits Koch-Chemie font vraiment la différence. La peinture brille comme au premier jour. Je recommande vivement.'
              },
              {
                name: 'Julie Klein',
                location: 'Liège',
                service: 'Nettoyage intérieur + extérieur',
                text: 'Mon SUV avait 3 ans sans detailing complet. Le résultat est bluffant. L\'intérieur sent bon, les sièges sont impeccables et l\'extérieur brille. Service mobile très pratique.'
              }
            ].map((testimonial, i) => (
              <article 
                key={i} 
                className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100"
                itemScope 
                itemType="https://schema.org/Review"
              >
                <div className="flex gap-0.5 mb-4 sm:mb-6" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gray-900 text-gray-900" />
                  ))}
                </div>
                <p 
                  className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                  itemProp="reviewBody"
                >
                  "{testimonial.text}"
                </p>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="font-medium text-gray-900" itemProp="name">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.service}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Lien avis Google */}
          <div className="text-center mt-12">
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all"
            >
              Voir tous les avis Google (4.9/5)
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL - Conversion optimisée */}
      <section className="py-16 sm:py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              Réservez votre nettoyage voiture
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Intervention à domicile sous 48h • Déplacement gratuit 25km • Paiement après validation
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <a
                href="https://wa.me/32472303701?text=Bonjour, je souhaite réserver un nettoyage voiture à domicile"
                className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 touch-manipulation min-h-[56px]"
                aria-label="Réserver par WhatsApp"
              >
                📲 Réserver par WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-gray-200 text-gray-900 font-medium rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all touch-manipulation min-h-[56px] flex items-center justify-center"
                aria-label="Appeler maintenant"
              >
                📞 0472 30 37 01
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-500">
              Réponse rapide en moins de 2h • Devis gratuit sans engagement
            </p>
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
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Service mobile de nettoyage et lavage automobile professionnel à domicile en Wallonie
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
              <h4 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
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
                  <span>Service mobile<br/>Herve, Wallonie, Belgique</span>
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

      {/* Schema.org - LocalBusiness + FAQ + Review */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shine&Go - Nettoyage Voiture à Domicile",
            "description": "Service mobile de nettoyage et lavage automobile professionnel à domicile en Wallonie. Produits Koch-Chemie. Intervention rapide Herve, Verviers, Liège.",
            "image": "https://shineandgo.be/og-image.jpg",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "priceRange": "€€",
            "url": "https://shineandgo.be",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Herve",
              "addressRegion": "Liège",
              "postalCode": "4650",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.6386",
              "longitude": "5.7942"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Herve"
              },
              {
                "@type": "City",
                "name": "Verviers"
              },
              {
                "@type": "City",
                "name": "Liège"
              },
              {
                "@type": "City",
                "name": "Battice"
              },
              {
                "@type": "City",
                "name": "Soumagne"
              }
            ],
            "openingHours": "Mo-Su 08:00-20:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage automobile",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage intérieur voiture",
                    "description": "Aspiration, nettoyage surfaces, vitres, protection UV"
                  },
                  "price": "65",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lavage extérieur voiture",
                    "description": "Lavage 2 seaux, décontamination, polish, cire protection"
                  },
                  "price": "85",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage complet voiture",
                    "description": "Intérieur + extérieur complet, traitement cuirs, garantie 7 jours"
                  },
                  "price": "120",
                  "priceCurrency": "EUR"
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/shineandgo",
              "https://www.instagram.com/shineandgo"
            ]
          })
        }}
      />
    </main>
  )
}