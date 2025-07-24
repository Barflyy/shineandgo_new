import { Metadata } from 'next';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

export const metadata: Metadata = {
  title: "Nettoyage complet voiture à domicile (intérieur & extérieur) | Shine&Go",
  description: "Nettoyage complet voiture à domicile en Wallonie (intérieur + extérieur). Protections premium, résultat showroom en 90 min. Dès 79€.",
  openGraph: {
    title: "Nettoyage complet voiture à domicile (intérieur & extérieur) | Shine&Go",
    description: "Nettoyage complet voiture à domicile en Wallonie (intérieur + extérieur). Protections premium, résultat showroom en 90 min. Dès 79€.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/nettoyage-complet-voiture",
    siteName: "Shine&Go Premium",
    images: [
      {
        url: '/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg',
        width: 1200,
        height: 630,
        alt: 'nettoyage complet voiture intérieur extérieur protection hydrophobe Wallonie',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettoyage complet voiture à domicile (intérieur & extérieur) | Shine&Go",
    description: "Nettoyage complet voiture à domicile en Wallonie (intérieur + extérieur). Protections premium, résultat showroom en 90 min. Dès 79€.",
    images: ['/transformations/berline-familiale-propre-apres-nettoyage-herve.jpeg'],
  },
  alternates: {
    canonical: "https://www.shineandgo.be/nettoyage-complet-voiture",
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
    'DC.subject': 'Nettoyage complet voiture, Lavage auto complet mobile, Nettoyage automobile intérieur extérieur, Car wash complet, Lavage voiture complet à domicile, Service mobile complet',
  },
};

export default function NettoyageCompletPage() {
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
                    <span className="text-center sm:text-left break-words">Service Premium de Nettoyage Complet Voiture à Domicile en Wallonie</span>
                  </span>
                  
                  {/* 2. H1 optimisé mobile */}
                  <div>
                    <h1 
                      id="hero-title"
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight text-slate-900"
                    >
                      Nettoyage complet voiture à domicile en Wallonie (intérieur & extérieur)
                    </h1>
                  </div>
                  
                  {/* 3. Sous-titre optimisé mobile */}
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-md mx-auto sm:mx-0">
                    Choisissez la formule la plus complète : <strong>nettoyage intérieur + lavage extérieur voiture à domicile</strong>, réalisé par Shine&Go à Liège, Herve, Verviers, Spa et partout en Wallonie. Résultat showroom garanti, en moins de 90 minutes, sans que vous ayez à vous déplacer.
                  </p>
                  
                  {/* 4. Triple bénéfice optimisé mobile */}
                  <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-x-4 sm:gap-y-1 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 flex-shrink-0">⏱️</span>
                      </div>
                      <span className="font-medium">✅ <strong>Résultat showroom garanti en 90 minutes</strong></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 flex-shrink-0">🧴</span>
                      </div>
                      <span className="font-medium">🚗 <strong>Produits professionnels Koch-Chemie & CarPro</strong></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-100 flex items-center justify-center">
                        <span className="text-yellow-600 flex-shrink-0">⭐</span>
                      </div>
                      <span className="font-medium">⭐ <strong>Service disponible 7j/7, créneaux rapides sous 72h</strong></span>
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
                      <span>⚡ Créneaux limités cette semaine – Réservez dès maintenant votre nettoyage complet voiture !</span>
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
                    alt="nettoyage complet voiture intérieur extérieur protection hydrophobe Wallonie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SECTION "Ce que comprend le nettoyage complet voiture" - Mobile-first spacing */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Ce que comprend le nettoyage complet voiture
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Section Intérieur */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🧹</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Nettoyage Intérieur
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Aspiration complète</h4>
                      <p className="text-slate-600 text-sm">Sièges, tapis, sols & coffre</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Nettoyage plastiques</h4>
                      <p className="text-slate-600 text-sm">Tableau de bord et consoles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Vitres intérieures</h4>
                      <p className="text-slate-600 text-sm">Sans traces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Protection UV</h4>
                      <p className="text-slate-600 text-sm">CarPro Perl</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section Extérieur */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚿</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Nettoyage Extérieur
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Mousse active dégraissante</h4>
                      <p className="text-slate-600 text-sm">Lavage complet</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Rinçage haute pression</h4>
                      <p className="text-slate-600 text-sm">Précis et efficace</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Jantes & vitres extérieures</h4>
                      <p className="text-slate-600 text-sm">Seuils de porte inclus</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Cire protectrice hydrophobe</h4>
                      <p className="text-slate-600 text-sm">Koch-Chemie (2 mois)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section Matériel professionnel */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Matériel professionnel fourni
              </h3>
              <p className="text-slate-700 text-lg mb-4">
                Karcher, aspirateur, produits premium — il suffit d'un point d'eau + prise 230 V
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                <span className="bg-white px-3 py-1 rounded-full">⚡ Karcher haute pression</span>
                <span className="bg-white px-3 py-1 rounded-full">🧹 Aspirateur professionnel</span>
                <span className="bg-white px-3 py-1 rounded-full">🧴 Produits premium</span>
                <span className="bg-white px-3 py-1 rounded-full">💧 Point d'eau requis</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION "Pourquoi choisir Shine&Go pour un nettoyage auto complet ?" - Responsive container */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50/80 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Pourquoi choisir Shine&Go pour un nettoyage auto complet ?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">⏰</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Gain de temps
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  Tout est fait chez vous, en une seule intervention
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Résultat showroom
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  Garanti ou ré-intervention gratuite
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">🧴</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Produits professionnels
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  Koch-Chemie, CarPro & techniques de detailing auto
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">📅</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 text-center mb-2">
                  Service disponible
                </h3>
                <p className="text-slate-600 text-center leading-relaxed mb-6">
                  7j/7, créneaux rapides sous 72h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECTION "Avis clients – Nettoyage complet voiture" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Avis clients – Nettoyage complet voiture
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">★★★★★</span>
                </div>
                <blockquote className="text-slate-700 text-lg italic mb-4">
                  « Prestation complète, intérieur/extérieur impeccable. Service mobile ultra pratique ! »
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    D
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Damien</p>
                    <p className="text-slate-600 text-sm">Liège</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">★★★★★</span>
                </div>
                <blockquote className="text-slate-700 text-lg italic mb-4">
                  « Ma voiture est comme neuve après le nettoyage complet. Je recommande ! »
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Aline</p>
                    <p className="text-slate-600 text-sm">Verviers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION "FAQ – Nettoyage complet voiture" */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50/80 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                FAQ – Nettoyage complet voiture
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Quel est le prix d'un nettoyage complet voiture à domicile ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nos tarifs démarrent à 79€ pour un nettoyage complet intérieur et extérieur, incluant toutes les protections et finitions premium.
                  </p>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Combien de temps dure le service complet (intérieur + extérieur) ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Le nettoyage complet prend environ 90 minutes pour un résultat showroom, incluant toutes les étapes intérieur et extérieur.
                  </p>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Quels produits utilisez-vous pour protéger l'intérieur et la carrosserie ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous utilisons CarPro Perl pour l'intérieur (protection UV) et Koch-Chemie pour l'extérieur (cire hydrophobe 2 mois).
                  </p>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Dans quelles zones de Wallonie intervenez-vous ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nous intervenons dans toute la Wallonie, avec une présence renforcée à Liège, Verviers, Herve, Spa et Welkenraedt.
                  </p>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Faut-il prévoir quelque chose avant votre intervention ?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Il suffit d'un point d'eau et d'une prise 230V. Nous apportons tout le matériel professionnel nécessaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECTION "Disponible partout en Wallonie" */}
        <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                Disponible partout en Wallonie
              </h2>
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
                    Nettoyage intérieur voiture à domicile
                  </h3>
                  <p className="text-slate-600">
                    Service de nettoyage intérieur voiture à domicile
                  </p>
                </div>
              </a>
              
              <a href="/nettoyage-exterieur-voiture" className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 block group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🚿</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Nettoyage extérieur voiture à domicile
                  </h3>
                  <p className="text-slate-600">
                    Service de nettoyage extérieur voiture à domicile
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
                  ✅ Réservez votre nettoyage complet voiture dès maintenant !
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  📞 Contactez-nous par téléphone ou WhatsApp ou réservez en ligne via notre formulaire de réservation.
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
            "description": "Service premium de nettoyage complet voiture mobile : intérieur + extérieur, protections premium, résultat showroom garanti. Leader en Belgique avec produits professionnels Koch Chemie et CarPro.",
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
            "priceRange": "79€-149€",
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
              "name": "Services de nettoyage complet voiture premium",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage Complet Voiture Premium",
                    "description": "Nettoyage intérieur + extérieur complet : aspiration, plastiques, vitres, jantes, cire protectrice Koch-Chemie, protection UV CarPro Perl",
                    "serviceType": "Complete Car Washing"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "79",
                    "priceCurrency": "EUR",
                    "minPrice": "79",
                    "maxPrice": "149"
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
                "name": "Quel est le prix d'un nettoyage complet voiture à domicile ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos tarifs démarrent à 79€ pour un nettoyage complet intérieur et extérieur, incluant toutes les protections et finitions premium."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure le service complet (intérieur + extérieur) ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le nettoyage complet prend environ 90 minutes pour un résultat showroom, incluant toutes les étapes intérieur et extérieur."
                }
              },
              {
                "@type": "Question",
                "name": "Quels produits utilisez-vous pour protéger l'intérieur et la carrosserie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous utilisons CarPro Perl pour l'intérieur (protection UV) et Koch-Chemie pour l'extérieur (cire hydrophobe 2 mois)."
                }
              },
              {
                "@type": "Question",
                "name": "Dans quelles zones de Wallonie intervenez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous intervenons dans toute la Wallonie, avec une présence renforcée à Liège, Verviers, Herve, Spa et Welkenraedt."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il prévoir quelque chose avant votre intervention ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Il suffit d'un point d'eau et d'une prise 230V. Nous apportons tout le matériel professionnel nécessaire."
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
            "serviceType": "Nettoyage complet voiture à domicile",
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
              "url": "https://www.shineandgo.be/nettoyage-complet-voiture"
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
                  "name": "Damien"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Prestation complète, intérieur/extérieur impeccable. Service mobile ultra pratique !"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Aline"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Ma voiture est comme neuve après le nettoyage complet. Je recommande !"
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
            "name": "Nettoyage complet voiture à domicile Shine&Go",
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
              "price": "79",
              "availability": "https://schema.org/InStock",
              "url": "https://www.shineandgo.be/nettoyage-complet-voiture"
            }
          })
        }}
      />
    </div>
  );
}