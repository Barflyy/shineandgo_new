'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Users, Star, CheckCircle, Gift, Clock, MapPin } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';
import { useViewportHeight } from '../hooks/useViewportHeight';

interface HeroNewProps {
  cityName?: string;
  neighborhoods?: string[];
  region?: string;
}

export default function HeroNew({ cityName = 'Herve', neighborhoods = [], region = 'province de Liège' }: HeroNewProps) {
  const isMobile = useMobile();
  const shouldAnimate = !isMobile;
  const { viewportInfo, getViewportStyles } = useViewportHeight();

  // Calculer la hauteur optimale pour le hero
  const heroStyles = getViewportStyles();
  
  // Ajuster le padding en fonction de la hauteur disponible
  const getPaddingClass = () => {
    const availableHeight = viewportInfo.availableHeight;
    if (availableHeight < 500) return 'py-2'; // Très petit écran
    if (availableHeight < 600) return 'py-3'; // Petit écran
    if (availableHeight < 700) return 'py-4'; // Écran moyen
    if (availableHeight < 800) return 'py-6'; // Grand écran
    return 'py-8'; // Très grand écran
  };

  // Décider si on affiche l'image en fonction de la hauteur disponible
  const shouldShowImage = viewportInfo.availableHeight > 600 && viewportInfo.width >= 1280;

  const handleBooking = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  const handlePhone = () => {
    try {
      window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erreur ouverture Calendly:', error);
    }
  };

  return (
    <section 
      className={`relative flex items-center justify-center ${getPaddingClass()} bg-gradient-to-br from-hero-bg to-white`}
      style={heroStyles}
    >
      {/* Background avec effet Lemlist */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-light/50 to-white"></div>
      
      {/* Container principal */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
          
          {/* H1 Principal - SEO optimisé */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-hero-title font-extrabold text-text-primary leading-tight px-2 sm:px-0">
              Nettoyage voiture à domicile à{' '}
              <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                {cityName}
              </span>
            </h1>

            {/* H3 Phrase d'accroche */}
            <h3 className="text-fluid-2 font-semibold text-text-primary max-w-3xl mx-auto px-2 sm:px-0">
              Lavage auto premium, résultat showroom en{' '}
              <span className="text-accent font-bold">&lt; 90 min</span>
            </h3>
          </div>

          {/* Bullet USP - Optimisé pour mobile */}
          <div className="px-2 sm:px-0">
            {shouldAnimate ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-ui-border shadow-sm text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-text-primary">100% mobile (eau + prise chez vous)</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-ui-border shadow-sm text-xs sm:text-sm">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0" />
                  <span className="font-medium text-text-primary">Produits pro haut de gamme Koch-Chemie</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-ui-border shadow-sm text-xs sm:text-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-text-primary">Garantie "Pas de WOW ? Retouche offerte"</span>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-ui-border shadow-sm text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-text-primary">100% mobile (eau + prise chez vous)</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-ui-border shadow-sm text-xs sm:text-sm">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0" />
                  <span className="font-medium text-text-primary">Produits pro haut de gamme Koch-Chemie</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-ui-border shadow-sm text-xs sm:text-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-text-primary">Garantie "Pas de WOW ? Retouche offerte"</span>
                </div>
              </div>
            )}
          </div>

          {/* CTA Primaire - Optimisé pour tous les appareils */}
          <div className="px-2 sm:px-0">
            {shouldAnimate ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-3 sm:space-y-4"
              >
                <button 
                  onClick={handleBooking}
                  className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
                  aria-label={`Réserver un nettoyage voiture à ${cityName}`}
                >
                  Réserver maintenant
                </button>
                
                {/* Micro-copy */}
                <p className="text-xs sm:text-sm text-text-primary">
                  Annulation gratuite jusqu'à 24h
                </p>
              </motion.div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                <button 
                  onClick={handleBooking}
                  className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
                  aria-label={`Réserver un nettoyage voiture à ${cityName}`}
                >
                  Réserver maintenant
                </button>
                
                {/* Micro-copy */}
                <p className="text-xs sm:text-sm text-text-primary">
                  Annulation gratuite jusqu'à 24h
                </p>
              </div>
            )}
          </div>

          {/* Image Hero - Affichage conditionnel basé sur l'espace disponible */}
          {shouldShowImage && (
            <div className="mt-4 sm:mt-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-ui-border shadow-sm">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                    </div>
                    <p className="text-text-primary font-medium text-sm sm:text-base">
                      Photo héro avant/après
                    </p>
                    <p className="text-xs sm:text-sm text-text-primary">
                      Alt: "nettoyage voiture – résultat avant et après lavage auto mobile Shine & Go"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Maillage interne pour les villes voisines - Responsive */}
          {neighborhoods.length > 0 && (
            <div className="mt-4 sm:mt-6 mx-2 sm:mx-0 p-3 sm:p-4 bg-surface-light/50 backdrop-blur-sm rounded-xl border border-ui-border">
              <p className="text-xs sm:text-sm text-text-primary">
                <span className="font-semibold">Service disponible aussi à :</span>{' '}
                {neighborhoods.slice(0, 3).map((neighborhood, index) => (
                  <span key={index}>
                    <a 
                      href={`/zone-intervention/${neighborhood.toLowerCase().replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ùûü]/g, 'u').replace(/[ôö]/g, 'o').replace(/[îï]/g, 'i').replace(/[ç]/g, 'c').replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                      className="text-accent hover:text-accent-hover underline transition-colors"
                      aria-label={`Service de nettoyage voiture à ${neighborhood}`}
                    >
                      {neighborhood}
                    </a>
                    {index < Math.min(2, neighborhoods.length - 1) ? ', ' : ''}
                  </span>
                ))}
                {neighborhoods.length > 3 && (
                  <span> et <a href="/zone-intervention" className="text-accent hover:text-accent-hover underline transition-colors">autres villes</a></span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Composant Shield pour l'icône de garantie
function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
} 