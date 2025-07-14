'use client';

import { CheckCircle, Gift, Car, Truck, CarFront, Package, Truck as VanIcon } from 'lucide-react';
import { useEffect } from 'react';

export default function PricingTable() {
  useEffect(() => {
    // Charger le CSS Calendly
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Nettoyer les éléments lors du démontage du composant
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingLink) existingLink.remove();
      if (existingScript) existingScript.remove();
    };
  }, []);

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1'
      });
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-[clamp(1.2rem,4vw,1.75rem)] font-semibold text-balance break-words hyphens-auto text-white">
            Nos Prestations Premium
          </h2>
          <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 max-w-2xl mx-auto">
            Choisissez la prestation qui correspond à vos besoins. Tous nos services incluent des bonus exclusifs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 lg:mt-16">
          {/* Card 1 - Intérieur FRAÎCHEUR */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
            <div className="text-center mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3">🧽</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 break-words hyphens-auto">Intérieur « FRAÎCHEUR »</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">À partir de 39€</div>
              <p className="text-gray-500 text-xs">Durée : 45 min</p>
            </div>

            <div className="space-y-2 mb-4 flex-grow">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Aspiration complète</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Plastiques</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Vitres intérieures</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-xs sm:text-sm font-bold break-words hyphens-auto">CarPro Perl protection plastiques</span>
              </div>
            </div>

            {/* Tarifs directement visibles */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-lg p-2 sm:p-3 border border-green-500/20 mb-4">
              <h4 className="text-white font-bold mb-2 sm:mb-3 text-center text-xs">Tarifs Intérieur</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Car className="w-3 h-3 text-green-400" />
                    <span className="text-white text-xs">Citadine</span>
                  </div>
                  <div className="text-green-400 font-bold text-xs">39€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-green-400" />
                    <span className="text-white text-xs">Berline</span>
                  </div>
                  <div className="text-green-400 font-bold text-xs">44€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-green-400" />
                    <span className="text-white text-xs">Break</span>
                  </div>
                  <div className="text-green-400 font-bold text-xs">49€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-3 h-3 text-green-400" />
                    <span className="text-white text-xs">SUV/4x4</span>
                  </div>
                  <div className="text-green-400 font-bold text-xs">54€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Package className="w-3 h-3 text-green-400" />
                    <span className="text-white text-xs">Monospace</span>
                  </div>
                  <div className="text-green-400 font-bold text-xs">59€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <VanIcon className="w-3 h-3 text-green-400" />
                    <span className="text-white text-xs">Utilitaire</span>
                  </div>
                  <div className="text-green-400 font-bold text-xs">64€</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalendlyClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm"
            >
              <span>🧼 Je réserve ce nettoyage intérieur</span>
            </button>
          </div>

          {/* Card 2 - Extérieur BRILLANCE */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
            <div className="text-center mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3">✨</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 break-words hyphens-auto">Extérieur « BRILLANCE »</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">À partir de 49€</div>
              <p className="text-gray-500 text-xs">Durée : 45 min</p>
            </div>

            <div className="space-y-2 mb-4 flex-grow">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Mousse active</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Lavage main</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Vitres extérieures</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Seuils</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-xs sm:text-sm font-bold break-words hyphens-auto">ProtectorWax (Koch-Chemie) en offert</span>
              </div>
            </div>

            {/* Tarifs directement visibles */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-lg p-2 sm:p-3 border border-blue-500/20 mb-4">
              <h4 className="text-white font-bold mb-2 sm:mb-3 text-center text-xs">Tarifs Extérieur</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Car className="w-3 h-3 text-blue-400" />
                    <span className="text-white text-xs">Citadine</span>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">49€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-blue-400" />
                    <span className="text-white text-xs">Berline</span>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">54€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-blue-400" />
                    <span className="text-white text-xs">Break</span>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">59€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-3 h-3 text-blue-400" />
                    <span className="text-white text-xs">SUV/4x4</span>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">64€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Package className="w-3 h-3 text-blue-400" />
                    <span className="text-white text-xs">Monospace</span>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">69€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <VanIcon className="w-3 h-3 text-blue-400" />
                    <span className="text-white text-xs">Utilitaire</span>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">74€</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalendlyClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm"
            >
              <span>💧 Je choisis ce lavage extérieur</span>
            </button>
          </div>

          {/* Card 3 - Pack SÉRÉNITÉ */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col relative sm:col-span-2 lg:col-span-1">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
              POPULAIRE
            </div>
            
            <div className="text-center mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3">🛡️</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 break-words hyphens-auto">Pack « SÉRÉNITÉ »</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-2">À partir de 79€</div>
              <p className="text-gray-500 text-xs">Durée : 90 min</p>
            </div>

            <div className="space-y-2 mb-4 flex-grow">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Intérieur + Extérieur complets</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm break-words hyphens-auto">Protection express 2 mois</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-xs sm:text-sm font-bold break-words hyphens-auto">ProtectorWax (Koch-Chemie) en offert</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-xs sm:text-sm font-bold break-words hyphens-auto">CarPro Perl protection plastiques</span>
              </div>
            </div>

            {/* Tarifs directement visibles */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-400/5 rounded-lg p-2 sm:p-3 border border-purple-500/20 mb-4">
              <h4 className="text-white font-bold mb-2 sm:mb-3 text-center text-xs">Tarifs Pack Sérénité</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Car className="w-3 h-3 text-purple-400" />
                    <span className="text-white text-xs">Citadine</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xs">79€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-purple-400" />
                    <span className="text-white text-xs">Berline</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xs">89€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-purple-400" />
                    <span className="text-white text-xs">Break</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xs">99€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-3 h-3 text-purple-400" />
                    <span className="text-white text-xs">SUV/4x4</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xs">109€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Package className="w-3 h-3 text-purple-400" />
                    <span className="text-white text-xs">Monospace</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xs">119€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <VanIcon className="w-3 h-3 text-purple-400" />
                    <span className="text-white text-xs">Utilitaire</span>
                  </div>
                  <div className="text-purple-400 font-bold text-xs">129€</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalendlyClick}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-xs sm:text-sm"
            >
              <span>✨ Réserver un lavage voiture</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 