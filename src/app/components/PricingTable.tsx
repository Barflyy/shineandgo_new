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
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Nos Prestations Premium
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Choisissez la prestation qui correspond à vos besoins. Tous nos services incluent des bonus exclusifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Intérieur FRAÎCHEUR */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 h-full flex flex-col">
            <div className="text-center mb-4">
              <div className="text-3xl md:text-4xl mb-3">🧽</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Intérieur « FRAÎCHEUR »</h3>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">À partir de 39€</div>
              <p className="text-gray-500 text-xs">Durée : 45 min</p>
            </div>

            <div className="space-y-2 mb-4 flex-grow">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Aspiration complète</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Plastiques</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Vitres intérieures</span>
              </div>
              <div className="flex items-start space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-sm font-bold">CarPro Perl protection plastiques</span>
              </div>
            </div>

            {/* Tarifs directement visibles */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-lg p-3 border border-green-500/20 mb-4">
              <h4 className="text-white font-bold mb-3 text-center text-xs">Tarifs Intérieur</h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Car className="w-3 h-3 text-green-400" />
                    <span className="text-white">Citadine</span>
                  </div>
                  <div className="text-green-400 font-bold">39€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-green-400" />
                    <span className="text-white">Berline</span>
                  </div>
                  <div className="text-green-400 font-bold">44€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-green-400" />
                    <span className="text-white">Break</span>
                  </div>
                  <div className="text-green-400 font-bold">49€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-3 h-3 text-green-400" />
                    <span className="text-white">SUV/4x4</span>
                  </div>
                  <div className="text-green-400 font-bold">54€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Package className="w-3 h-3 text-green-400" />
                    <span className="text-white">Monospace</span>
                  </div>
                  <div className="text-green-400 font-bold">59€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <VanIcon className="w-3 h-3 text-green-400" />
                    <span className="text-white">Utilitaire</span>
                  </div>
                  <div className="text-green-400 font-bold">64€</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalendlyClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 text-sm"
            >
              <span>🧼 Je réserve ce nettoyage intérieur</span>
            </button>
          </div>

          {/* Card 2 - Extérieur BRILLANCE */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
            <div className="text-center mb-4">
              <div className="text-3xl md:text-4xl mb-3">✨</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Extérieur « BRILLANCE »</h3>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">À partir de 49€</div>
              <p className="text-gray-500 text-xs">Durée : 45 min</p>
            </div>

            <div className="space-y-2 mb-4 flex-grow">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mousse active</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Lavage main</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Vitres extérieures</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Seuils</span>
              </div>
              <div className="flex items-start space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-sm font-bold">ProtectorWax (Koch-Chemie) en offert</span>
              </div>
            </div>

            {/* Tarifs directement visibles */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-lg p-3 border border-blue-500/20 mb-4">
              <h4 className="text-white font-bold mb-3 text-center text-xs">Tarifs Extérieur</h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Car className="w-3 h-3 text-blue-400" />
                    <span className="text-white">Citadine</span>
                  </div>
                  <div className="text-blue-400 font-bold">49€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-blue-400" />
                    <span className="text-white">Berline</span>
                  </div>
                  <div className="text-blue-400 font-bold">54€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-blue-400" />
                    <span className="text-white">Break</span>
                  </div>
                  <div className="text-blue-400 font-bold">59€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-3 h-3 text-blue-400" />
                    <span className="text-white">SUV/4x4</span>
                  </div>
                  <div className="text-blue-400 font-bold">64€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Package className="w-3 h-3 text-blue-400" />
                    <span className="text-white">Monospace</span>
                  </div>
                  <div className="text-blue-400 font-bold">69€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <VanIcon className="w-3 h-3 text-blue-400" />
                    <span className="text-white">Utilitaire</span>
                  </div>
                  <div className="text-blue-400 font-bold">74€</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalendlyClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 text-sm"
            >
              <span>💧 Je choisis ce lavage extérieur</span>
            </button>
          </div>

          {/* Card 3 - Pack SÉRÉNITÉ */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              POPULAIRE
            </div>
            
            <div className="text-center mb-4">
              <div className="text-3xl md:text-4xl mb-3">🛡️</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Pack « SÉRÉNITÉ »</h3>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">À partir de 79€</div>
              <p className="text-gray-500 text-xs">Durée : 90 min</p>
            </div>

            <div className="space-y-2 mb-4 flex-grow">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Intérieur + Extérieur complets</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Protection express 2 mois</span>
              </div>
              <div className="flex items-start space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-sm font-bold">ProtectorWax (Koch-Chemie) en offert</span>
              </div>
              <div className="flex items-start space-x-3">
                <Gift className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300 text-sm font-bold">CarPro Perl protection plastiques</span>
              </div>
            </div>

            {/* Tarifs directement visibles */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-400/5 rounded-lg p-3 border border-purple-500/20 mb-4">
              <h4 className="text-white font-bold mb-3 text-center text-xs">Tarifs Pack Sérénité</h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Car className="w-3 h-3 text-purple-400" />
                    <span className="text-white">Citadine</span>
                  </div>
                  <div className="text-purple-400 font-bold">79€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-purple-400" />
                    <span className="text-white">Berline</span>
                  </div>
                  <div className="text-purple-400 font-bold">89€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <CarFront className="w-3 h-3 text-purple-400" />
                    <span className="text-white">Break</span>
                  </div>
                  <div className="text-purple-400 font-bold">99€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Truck className="w-3 h-3 text-purple-400" />
                    <span className="text-white">SUV/4x4</span>
                  </div>
                  <div className="text-purple-400 font-bold">109€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <Package className="w-3 h-3 text-purple-400" />
                    <span className="text-white">Monospace</span>
                  </div>
                  <div className="text-purple-400 font-bold">119€</div>
                </div>
                <div className="flex items-center justify-between p-1 bg-white/5 rounded">
                  <div className="flex items-center space-x-1">
                    <VanIcon className="w-3 h-3 text-purple-400" />
                    <span className="text-white">Utilitaire</span>
                  </div>
                  <div className="text-purple-400 font-bold">129€</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalendlyClick}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
            >
              <span>✨ Je veux ma voiture showroom</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 