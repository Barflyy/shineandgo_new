'use client';

import { Sparkles, Lock, Star, Clock, Shield } from 'lucide-react';
import HeroBeforeAfter from './HeroBeforeAfter';

export default function Hero() {
  // Fonction pour tracker les clics CTA
  const handleBooking = () => {
    // GA4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_cta_showroom', {
        event_category: 'hero_section',
        event_label: 'showroom',
        value: 1
      });
    }
    
    // Ouverture Calendly
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  const handleDevis = () => {
    // GA4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_cta_devis', {
        event_category: 'hero_section',
        event_label: 'devis',
        value: 1
      });
    }
    
    // Ouverture du formulaire Tally
    try {
      window.open('https://tally.so/r/w295DD', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture formulaire devis:', error);
    }
  };

  return (
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
                <Sparkles className="w-3 h-3 mr-1 flex-shrink-0" />
                <span className="text-center sm:text-left break-words">Service Premium de Nettoyage & Lavage Voiture à Domicile en Wallonie</span>
              </span>
              
              {/* 2. H1 optimisé mobile */}
              <div>
                <h1 
                  id="hero-title"
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight text-slate-900"
                >
                  Lavage voiture à domicile en Wallonie – Shine&Go
                </h1>
              </div>
              
              {/* 3. Sous-titre optimisé mobile */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-md mx-auto sm:mx-0">
                Fini les files d'attente au car wash traditionnel. Shine&Go vous propose un <strong>lavage voiture professionnel à domicile</strong> avec une <strong>finition showroom garantie</strong> en moins de 90 min.
              </p>
              
              {/* 4. Triple bénéfice optimisé mobile */}
              <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-x-4 sm:gap-y-1 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-1.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  </div>
                  <span className="font-medium">✅ <strong>Résultat showroom garanti</strong></span>
                </li>
                <li className="flex items-center gap-1.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  </div>
                  <span className="font-medium">🚗 <strong>Service rapide (moins de 90 min)</strong></span>
                </li>
                <li className="flex items-center gap-1.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 flex-shrink-0" />
                  </div>
                  <span className="font-medium">⭐ <strong>4,9/5 sur Google (30+ avis)</strong></span>
                </li>
              </ul>
            </div>
            
            {/* Section centrale */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* 5. Double CTA optimisé mobile */}
              <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-lg mx-auto sm:mx-0 relative z-10">
                <button
                  onClick={handleBooking}
                  className="w-full sm:flex-1 rounded-xl bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-0 transition-all duration-200 active:scale-95 min-h-[44px] sm:min-h-[48px] flex items-center justify-center relative z-10 cursor-pointer text-sm sm:text-base"
                  aria-label="Réserver maintenant"
                >
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span>📞 <strong>0472 30 37 01</strong></span>
                    <span>•</span>
                    <span><strong>[Réserver maintenant]</strong></span>
                  </span>
                </button>
                
                <button
                  onClick={handleDevis}
                  className="w-full sm:flex-1 rounded-xl border-2 border-blue-600 bg-transparent px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-0 transition-all duration-200 active:scale-95 min-h-[44px] sm:min-h-[48px] flex items-center justify-center relative z-10 cursor-pointer text-sm sm:text-base"
                  aria-label="Devis gratuit en ligne"
                >
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <span>⚡ <strong>Devis gratuit immédiat – 10€ offerts</strong></span>
                  </span>
                </button>
              </div>
              
              {/* 6. Urgence optimisée mobile */}
              <div className="flex justify-center sm:justify-start">
                <p className="inline-flex items-center rounded-full bg-red-50 border border-red-200 px-3 py-1.5 text-xs sm:text-sm font-semibold text-red-700 animate-pulse">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 flex-shrink-0" />
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
                <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
                <span className="text-center sm:text-left">Paiement après prestation – <strong>100 % satisfait ou retouche offerte</strong></span>
              </div>
            </div>
          </div>
          
          {/* ——— ZONE VISUEL desktop uniquement ——— */}
          <div className="hidden lg:block lg:order-last lg:col-span-6 lg:self-center">
            {/* Visuel desktop uniquement */}
            <div className="aspect-[4/3] w-full max-w-[700px] mx-auto rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden">
              <HeroBeforeAfter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}