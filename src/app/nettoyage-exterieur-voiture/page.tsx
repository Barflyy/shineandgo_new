import { Metadata } from 'next';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export const metadata: Metadata = {
  title: "Nettoyage extérieur voiture à domicile en Wallonie | Shine&Go",
  description: "Lavage extérieur voiture à domicile en Wallonie : carrosserie, jantes, vitres, protection hydrophobe. Dès 49€ avec Shine&Go.",
  openGraph: {
    title: "Nettoyage extérieur voiture à domicile en Wallonie | Shine&Go",
    description: "Lavage extérieur voiture à domicile en Wallonie : carrosserie, jantes, vitres, protection hydrophobe. Dès 49€ avec Shine&Go.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/nettoyage-exterieur-voiture",
    siteName: "Shine&Go Premium",
    images: [
      {
        url: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
        width: 1200,
        height: 630,
        alt: 'lavage extérieur voiture carrosserie jantes vitres Wallonie',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage extérieur voiture à domicile en Wallonie | Shine&Go",
    description: "Lavage extérieur voiture à domicile en Wallonie : carrosserie, jantes, vitres, protection hydrophobe. Dès 49€ avec Shine&Go.",
    images: ['/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg'],
  },
  alternates: {
    canonical: "https://www.shineandgo.be/nettoyage-exterieur-voiture",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'BE-WLX',
    'geo.placename': 'Wallonie',
    'DC.subject': 'Nettoyage extérieur voiture, Lavage auto mobile professionnel, Nettoyage automobile extérieur, Car wash extérieur, Lavage voiture extérieur à domicile, Service mobile extérieur',
  },
};

export default function NettoyageExterieurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-surface-light/30 to-hero-bg/40 overflow-x-hidden touch-optimized">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Header */}
      <Header />

      {/* Main content optimized for mobile-first responsive design */}
      <main className="overscroll-contain w-full scroll-mobile">
        
        {/* 1. HERO (above-the-fold) - Optimized for mobile viewport */}
        <section className="relative min-h-svh bg-gradient-to-b from-white to-slate-50">
          {/* Background pattern optimisé mobile */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.08),transparent_60%)] sm:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          {/* Container principal mobile-first optimisé avec padding adaptatif selon la taille du header */}
          <div className="mx-auto w-full max-w-7xl px-4 pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 min-h-svh flex flex-col">
            
            {/* Structure mobile-first : texte au-dessus, visuel en dessous - utilise tout l'espace disponible */}
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start flex-1">
              
              {/* ——— ZONE TEXTE (mobile-first, puis 6 colonnes desktop) ——— */}
              <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center sm:text-left relative z-10 flex-1 justify-center">
                
                {/* Section supérieure */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* 1. Badge localisation optimisé mobile */}
                  <span className="inline-flex items-center justify-center sm:justify-start rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 self-center sm:self-start max-w-full">
                    <span className="text-center sm:text-left break-words">Service Premium de Nettoyage Extérieur Voiture à Domicile en Wallonie</span>
                  </span>
                  
                  {/* 2. H1 optimisé mobile */}
                  <div>
                    <h1 
                      id="hero-title"
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight text-slate-900"
                    >
                      Nettoyage extérieur voiture à domicile en Wallonie
                    </h1>
                  </div>
                  
                  {/* 3. Sous-titre optimisé mobile */}
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-md mx-auto sm:mx-0">
                    Retrouvez une voiture éclatante et protégée grâce à notre <strong>service premium de nettoyage voiture extérieur à domicile</strong>. Shine&Go intervient à Liège, Herve, Verviers et partout en Wallonie pour un lavage auto professionnel et rapide.
                  </p>
                  
                  {/* 4. Triple bénéfice optimisé mobile */}
                  <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-x-4 sm:gap-y-1 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 flex-shrink-0">⏱️</span>
                      </div>
                      <span className="font-medium">✅ <strong>Intervention rapide en 45 minutes</strong></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 flex-shrink-0">🧴</span>
                      </div>
                      <span className="font-medium">🚗 <strong>Produits professionnels haut de gamme Koch-Chemie & CarPro</strong></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-100 flex items-center justify-center">
                        <span className="text-yellow-600 flex-shrink-0">⭐</span>
                      </div>
                      <span className="font-medium">⭐ <strong>Satisfaction 100 % garantie ou ré-intervention offerte</strong></span>
                    </li>
                  </ul>
                </div>
                
                {/* Section centrale */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* 5. Double CTA optimisé mobile */}
                  <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-lg mx-auto sm:mx-0 relative z-10">
                    <a
                      href="tel:+32472303701"
                      className="w-full sm:flex-1 rounded-xl bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-0 transition-all duration-200 active:scale-95 min-h-[44px] sm:min-h-[48px] flex items-center justify-center relative z-10 cursor-pointer text-sm sm:text-base"
                      aria-label="Réserver maintenant"
                    >
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <span>📞 <strong>0472 30 37 01</strong></span>
                        <span>•</span>
                        <span><strong>[Réserver maintenant]</strong></span>
                      </span>
                    </a>
                    
                    <a
                      href="https://calendly.com/shineandgo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 rounded-xl border-2 border-blue-600 bg-transparent px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-0 transition-all duration-200 active:scale-95 min-h-[44px] sm:min-h-[48px] flex items-center justify-center relative z-10 cursor-pointer text-sm sm:text-base"
                      aria-label="Réserver en ligne"
                    >
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <span>📅 <strong>Réserver en ligne</strong></span>
                      </span>
                    </a>
                  </div>
                  
                  {/* 6. Urgence optimisée mobile */}
                  <div className="flex justify-center sm:justify-start">
                    <p className="inline-flex items-center rounded-full bg-red-50 border border-red-200 px-3 py-1.5 text-xs sm:text-sm font-semibold text-red-700 animate-pulse">
                      <span>⏳ Plus que 2 créneaux libres cette semaine !</span>
                    </p>
                  </div>
                </div>
                
                {/* Section inférieure */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  {/* 7. Trust indicators optimisés mobile */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-1 text-xs sm:text-sm text-slate-600">
                    <span className="text-yellow-400 text-sm sm:text-base">★★★★★</span>
                    <span className="text-center sm:text-left">4,9/5 sur Google (30+ voitures transformées)</span>
                  </div>
                  
                  {/* Trust badge optimisé mobile */}
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-500 font-medium">
                    <span className="text-center sm:text-left">Paiement après prestation – <strong>100 % satisfait ou retouche offerte</strong></span>
                  </div>
                </div>
              </div>
              
              {/* ——— ZONE VISUEL desktop uniquement ——— */}
              <div className="hidden lg:block lg:order-last lg:col-span-6 lg:self-center">
                {/* Visuel desktop uniquement */}
                <div className="aspect-[4/3] w-full max-w-[700px] mx-auto rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden">
                  <img 
                    src="/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg" 
                    alt="lavage extérieur voiture carrosserie jantes vitres Wallonie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECTION "Lavage extérieur voiture : ce que comprend notre service" - Mobile-first spacing */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Lavage extérieur voiture : ce que comprend notre service
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🧼</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    Lavage complet
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Avec mousse active dégraissante
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💧</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    Rinçage haute pression
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Précis
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🔧</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    Nettoyage minutieux
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Des jantes et passages de roues
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🪟</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    Lavage des vitres
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Extérieures sans traces
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    Application cire protectrice
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Hydrophobe Koch-Chemie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION "Pourquoi choisir Shine&Go pour votre nettoyage extérieur ?" - Responsive container */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50/80 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Pourquoi choisir Shine&Go pour votre nettoyage extérieur voiture ?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">⏱️</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Intervention rapide
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  En 45 minutes
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">🧴</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Produits professionnels
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  Haut de gamme Koch-Chemie & CarPro
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Équipe expérimentée
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  En nettoyage auto extérieur à domicile
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Satisfaction 100 %
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  Garantie ou ré-intervention offerte
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION "Avis clients – Nettoyage extérieur voiture" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Avis clients – Nettoyage extérieur voiture
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">★★★★★</span>
                </div>
                <blockquote className="text-slate-700 text-lg italic mb-4">
                  « Ma voiture brille comme neuve, nettoyage extérieur au top ! »
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Julien</p>
                    <p className="text-slate-600 text-sm">Spa</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">★★★★★</span>
                </div>
                <blockquote className="text-slate-700 text-lg italic mb-4">
                  « Très satisfaite du service, les jantes et vitres sont impeccables ! »
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Anaïs</p>
                    <p className="text-slate-600 text-sm">Liège</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION "FAQ – Nettoyage extérieur voiture" */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50/80 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                FAQ – Nettoyage extérieur voiture
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Combien coûte un nettoyage extérieur voiture à domicile ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nos tarifs démarrent à 49€ pour un nettoyage extérieur complet, avec lavage, rinçage, nettoyage jantes et application de cire protectrice.
                  </p>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Quelle différence entre un car wash classique et votre lavage auto à domicile ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Notre service mobile utilise des produits professionnels premium et une technique de nettoyage plus minutieuse, avec application de cire protectrice pour un résultat durable.
                  </p>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Quels produits utilisez-vous pour le nettoyage extérieur auto ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous utilisons exclusivement des produits professionnels premium de Koch-Chemie et CarPro pour garantir un nettoyage efficace et une protection durable de votre véhicule.
                  </p>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Dans quelles zones intervenez-vous en Wallonie ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous intervenons dans toute la Wallonie, avec une présence renforcée à Liège, Verviers, Herve, Spa et Welkenraedt. Contactez-nous pour vérifier la disponibilité dans votre zone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECTION "Avantages supplémentaires du nettoyage extérieur voiture Shine&Go" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Avantages supplémentaires du nettoyage extérieur voiture Shine&Go
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏰</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  Gain de temps
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">
                  Plus besoin d'attendre au car wash
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🏠</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  Évitez les files
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">
                  Et la logistique : nous intervenons chez vous
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🚗</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  Compatible tous véhicules
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">
                  Citadine, break, SUV...
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✨</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  Finition professionnelle
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">
                  Avec des produits reconnus en detailing auto
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🗺️</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  Disponible partout
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center">
                  En Wallonie
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Nous intervenons dans toute la Wallonie, avec une présence renforcée à :
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-lg font-semibold text-slate-700">
                <div>Liège</div>
                <div>Verviers</div>
                <div>Herve</div>
                <div>Spa</div>
                <div>Welkenraedt</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECTION "Voir aussi" */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50/80 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Voir aussi
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="/nettoyage-interieur-voiture" className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 block group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🧹</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Lavage intérieur voiture à domicile
                  </h3>
                  <p className="text-slate-600">
                    Découvrez notre service de lavage intérieur voiture à domicile
                  </p>
                </div>
              </a>
              
              <a href="/nettoyage-complet-voiture" className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 block group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Lavage voiture complet à domicile
                  </h3>
                  <p className="text-slate-600">
                    Service complet intérieur et extérieur
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 8. SECTION CTA FINAL */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
                  ✅ Réservez votre nettoyage extérieur voiture dès maintenant !
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  📞 Contactez-nous directement par téléphone ou WhatsApp ou réservez en ligne via notre formulaire de réservation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+32472303701"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                  >
                    📞 0472 30 37 01
                  </a>
                  <a 
                    href="https://calendly.com/shineandgo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors duration-200 shadow-lg"
                  >
                    📅 Réserver en ligne
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Schema.org Organization + Services JSON-LD */}
      <Script
        id="organization-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shine&Go Premium",
            "alternateName": "Shine&Go",
            "description": "Service premium de nettoyage extérieur voiture mobile : lavage auto mobile professionnel, finition showroom garantie. Leader en Belgique avec produits professionnels Koch Chemie et CarPro.",
            "url": "https://www.shineandgo.be",
            "telephone": "+32472303701",
            "email": "contact@shineandgo.be",
            "logo": "https://www.shineandgo.be/logo.png",
            "image": "https://www.shineandgo.be/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rue Moreau, 20",
              "addressLocality": "Herve",
              "postalCode": "4650",
              "addressCountry": "BE",
              "addressRegion": "Wallonie"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.6391,
              "longitude": 5.7924
            },
            "openingHours": "Mo-Su 08:00-20:00",
            "priceRange": "49€-149€",
            "currenciesAccepted": "EUR",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "serviceArea": {
              "@type": "State",
              "name": "Wallonie"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Liège"
              },
              {
                "@type": "City", 
                "name": "Verviers"
              },
              {
                "@type": "City",
                "name": "Spa"
              },
              {
                "@type": "City",
                "name": "Huy"
              },
              {
                "@type": "City",
                "name": "Herve"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de nettoyage extérieur voiture premium",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage Extérieur Voiture Éclatant",
                    "description": "Lavage complet avec mousse active, rinçage haute pression, nettoyage jantes, vitres extérieures et application cire protectrice Koch-Chemie",
                    "serviceType": "Car Exterior Washing"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "49",
                    "priceCurrency": "EUR",
                    "minPrice": "49",
                    "maxPrice": "79"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              "https://www.facebook.com/shineandgo",
              "https://www.instagram.com/shineandgo"
            ],
            "founder": {
              "@type": "Person",
              "name": "Nathan Godfroid"
            },
            "foundingDate": "2023",
            "slogan": "Votre voiture comme neuve, directement chez vous"
          })
        }}
      />

      {/* Schema.org FAQ for Featured Snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Combien coûte un nettoyage extérieur voiture à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Chez Shine&Go, le prix commence à partir de 49€ pour un service professionnel à domicile en Wallonie, incluant lavage, rinçage, nettoyage jantes et application de cire protectrice."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle différence entre un car wash classique et votre lavage auto à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre service mobile utilise des produits professionnels premium et une technique de nettoyage plus minutieuse, avec application de cire protectrice pour un résultat durable."
                }
              },
              {
                "@type": "Question",
                "name": "Quels produits utilisez-vous pour le nettoyage extérieur auto ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous utilisons uniquement des produits professionnels reconnus comme Koch-Chemie et CarPro, pour un rendu impeccable et une protection durable."
                }
              },
              {
                "@type": "Question",
                "name": "Dans quelles zones intervenez-vous en Wallonie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous intervenons dans toute la Wallonie, avec une présence renforcée à Liège, Verviers, Herve, Spa et Welkenraedt."
                }
              }
            ]
          })
        }}
      />

      {/* Schema.org Service with Reviews */}
      <Script
        id="service-reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Nettoyage extérieur voiture à domicile",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shine&Go",
              "image": "https://www.shineandgo.be/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Herve",
                "addressRegion": "Wallonie",
                "postalCode": "4650",
                "addressCountry": "BE"
              },
              "telephone": "+32 472 30 37 01",
              "url": "https://www.shineandgo.be/nettoyage-exterieur-voiture"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Wallonie"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Julien"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Ma voiture brille comme neuve, nettoyage extérieur au top !"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Anaïs"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Très satisfaite du service, les jantes et vitres sont impeccables !"
              }
            ]
          })
        }}
      />

      {/* Schema.org Product Reviews for Rich Snippets */}
      <Script
        id="product-reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Nettoyage extérieur voiture à domicile Shine&Go",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "30",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "49",
              "availability": "https://schema.org/InStock",
              "url": "https://www.shineandgo.be/nettoyage-exterieur-voiture"
            }
          })
        }}
      />
    </div>
  );
}