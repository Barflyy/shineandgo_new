'use client';

import { MessageCircle, Phone, Users, Star, CheckCircle, Gift, Clock } from 'lucide-react';

interface HeroProps {
  cityName?: string;
  neighborhoods?: string[];
  region?: string;
}

export default function Hero({ cityName, neighborhoods = [], region = 'province de Liège' }: HeroProps) {
  return (
    <section id="accueil" className="w-full min-h-[80svh] sm:min-h-[75svh] md:min-h-[70svh] lg:min-h-[65svh] flex items-center justify-center py-8 md:py-12 lg:py-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 relative overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 md:space-y-6">
        {/* Titre principal SEO avec typographie fluide */}
        <h1 className="text-[clamp(1.8rem,6vw,3rem)] font-bold leading-tight text-balance break-words hyphens-auto text-center">
          <span className="inline-block">
            <span 
              className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              style={{
                animation: 'pulse 2s ease-in-out infinite'
              }}
            >
              Nettoyage voiture à {cityName || 'domicile'}
            </span>
          </span>
        </h1>

        {/* Sous-titre avec typographie fluide */}
        <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 font-medium">
          <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent font-semibold">
            Votre voiture showroom à {cityName || 'domicile'} en 90 minutes
          </span>
          <span className="text-gray-300">, sans bouger le petit doigt !</span>
        </p>

        {/* Paragraphe d'introduction SEO avec meilleure gestion mobile */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="space-y-3 text-[clamp(0.9rem,2.5vw,1.1rem)] break-words hyphens-auto text-gray-200 leading-relaxed">
            <p>
              <span className="text-emerald-300 font-semibold">Shine&Go</span> est spécialisé dans le <span className="text-emerald-300 font-semibold">nettoyage voiture à domicile à {cityName || 'domicile'}</span>{neighborhoods.length > 0 ? `, ${neighborhoods.join(', ')}` : ''}.
            </p>
            <p>
              Notre service 100% mobile réalise un <span className="text-emerald-300 font-semibold">lavage voiture complet</span> (intérieur + extérieur) avec des produits haut de gamme <span className="text-green-300 font-medium">Koch Chemie</span> et <span className="text-green-300 font-medium">CarPro</span>.
            </p>
            <p>
              Que vous cherchiez un <span className="text-emerald-300 font-semibold">nettoyage auto rapide</span> ou un traitement showroom complet, notre service s'adapte à vos besoins.
            </p>
          </div>
        </div>

        {/* Badge bonus avec responsive amélioré */}
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-yellow-400/30 shadow-lg max-w-sm sm:max-w-none">
          <Gift className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400 flex-shrink-0" />
          <span className="text-yellow-300 text-xs sm:text-sm md:text-base font-semibold">40 € de traitements PRO offerts : ProtectorWax (Koch-Chemie) + CarPro Perl</span>
        </div>

        {/* Benefits list avec responsive amélioré */}
        <div className="hidden sm:flex flex-col md:flex-row gap-2 sm:gap-4 justify-center">
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base text-gray-300 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border border-green-400/20">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
            <span className="text-green-300 font-medium">100 % mobile</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base text-gray-300 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border border-blue-400/20">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
            <span className="text-blue-300 font-medium">90 min chrono</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base text-gray-300 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border border-yellow-400/20">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" />
            <span className="text-yellow-300 font-medium">5/5</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base text-gray-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border border-purple-400/20">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
            <span className="text-purple-300 font-medium">Pas de WOW ? Retouche gratuite</span>
          </div>
        </div>

        {/* CTA Button avec responsive amélioré */}
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                });
              }
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-emerald-400/30 min-h-[44px] min-w-[44px]"
            aria-label={`Réserver un nettoyage voiture à ${cityName || 'domicile'}`}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            <span className="text-sm sm:text-base md:text-lg">Réserver un nettoyage voiture à {cityName || 'domicile'}</span>
          </button>
          
          {/* CTA secondaire */}
          <button 
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
                });
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-blue-400/30 min-h-[44px] min-w-[44px]"
            aria-label={`Obtenir un devis pour un lavage auto à ${cityName || 'domicile'}`}
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            <span className="text-sm sm:text-base md:text-lg">Obtenir un devis pour un lavage auto à {cityName || 'domicile'}</span>
          </button>
        </div>

        {/* Maillage interne pour les villes voisines */}
        {neighborhoods.length > 0 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
            <p className="text-sm text-blue-200 break-words hyphens-auto">
              <span className="font-semibold">Service disponible aussi à :</span>{' '}
              {neighborhoods.slice(0, 3).map((neighborhood, index) => (
                <span key={index}>
                  <a 
                    href={`/zone-intervention/${neighborhood.toLowerCase().replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ùûü]/g, 'u').replace(/[ôö]/g, 'o').replace(/[îï]/g, 'i').replace(/[ç]/g, 'c').replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                    className="text-blue-300 hover:text-blue-200 underline transition-colors"
                    aria-label={`Service de nettoyage voiture à ${neighborhood}`}
                  >
                    {neighborhood}
                  </a>
                  {index < Math.min(2, neighborhoods.length - 1) ? ', ' : ''}
                </span>
              ))}
              {neighborhoods.length > 3 && (
                <span> et <a href="/zone-intervention" className="text-blue-300 hover:text-blue-200 underline transition-colors">autres villes</a></span>
              )}
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 