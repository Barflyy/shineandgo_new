'use client';

import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleBooking = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_cta_showroom', {
        event_category: 'hero_section',
        event_label: 'showroom',
        value: 1
      });
    }
    
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-hero-bg via-white to-surface-light">
      {/* Background elements - style Shine&Go */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes - couleurs du site */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-shine-blue-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-shine-blue-light/10 to-accent/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-surface-cta/20 to-accent/5 rounded-full blur-2xl"></div>
        
        {/* Subtle grid pattern - style Shine&Go */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main container - optimisé mobile */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="w-full py-20 sm:py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Text content - centré mobile */}
            <div className="text-center lg:text-left space-y-8 sm:space-y-10">
              
              {/* Rating badge - style Shine&Go */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-surface-cta to-surface-light backdrop-blur-sm border border-shine-blue-light/50 rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-shine-blue-dark">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">4,9/5</span>
                  <span className="text-shine-blue-primary">sur Google</span>
                </div>
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                <span className="text-text-primary">Premium</span>
              </div>

              {/* Main headline - typographie Shine&Go */}
              <div className="space-y-4 sm:space-y-5">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  <span className="text-text-primary">
                    Lavage auto
                  </span>
                  <br />
                  <span className="text-shine-blue-primary">
                    à domicile
                  </span>
                  <br />
                  <span className="text-text-primary">en Wallonie</span>
                </h1>
              </div>

              {/* Subtitle - style Shine&Go */}
              <div>
                <p className="text-lg sm:text-xl lg:text-xl text-text-primary font-light leading-relaxed">
                  <span className="font-medium">Finition showroom</span> garantie en{' '}
                  <span className="font-semibold text-accent">90 min</span>
                </p>
              </div>

              {/* CTA button - style Shine&Go */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={handleBooking}
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-green-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50 text-base sm:text-lg"
                  aria-label="Réserver maintenant"
                >
                  <span className="flex items-center space-x-3 sm:space-x-4">
                    <span className="text-xl sm:text-2xl">🚗</span>
                    <span>Réserver maintenant</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                </button>
              </div>

              {/* Trust indicators - style Shine&Go */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-text-primary/70">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Garantie satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Produits premium</span>
                </div>
              </div>
            </div>

            {/* Hero image - style Shine&Go */}
            <div className="relative order-first lg:order-last hidden lg:block">
              <div className="relative">
                {/* Main image container */}
                <div className="relative w-full h-64 sm:h-80 lg:w-80 lg:h-[350px] xl:w-96 xl:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-surface-light via-white to-surface-cta border border-ui-border shadow-card lg:mx-auto">
                  
                  {/* Image conditionnelle */}
                  {isDesktop && (
                    /* Desktop image - portrait */
                    <img
                      src="/hero-images/lavage-interieur-voiture.jpeg"
                      alt="Nettoyage intérieur voiture professionnel à domicile - Résultat showroom garanti"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  )}
                  
                  {/* Sophisticated overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-shine-blue-primary/5"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/20 to-shine-blue-primary/20 rounded-full blur-sm"></div>
                  <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-shine-blue-light/20 to-accent/20 rounded-full blur-sm"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-accent to-shine-blue-primary rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-shine-blue-light to-accent rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator - style Shine&Go */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-ui-border rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-accent rounded-full mt-1 sm:mt-2"></div>
        </div>
      </div>
    </section>
  );
}