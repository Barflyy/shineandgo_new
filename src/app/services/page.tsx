"use client";

import { Sparkles, Car, Star, Shield, Clock, MapPin, Phone, Mail, Check, CheckCircle, Gift, CarFront, Truck, Package, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function ServicesPage() {
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
    <div className="min-h-screen text-white bg-slate-900 relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Header Flyer */}
      <div className="relative z-10 pt-8 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SHINE&GO PREMIUM
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Service de Nettoyage Automobile à Domicile
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>5/5 Évaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Garantie Satisfait</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Service 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Flyer */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            NOS PRESTATIONS PREMIUM
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            {/* Intérieur FRAÎCHEUR */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col">
              <div className="text-center mb-4">
                <div className="text-3xl md:text-4xl mb-3">🧽</div>
                <h3 className="text-xl font-bold text-white mb-2">Intérieur « FRAÎCHEUR »</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">À partir de 39€</div>
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

              {/* Tarifs Intérieur */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-lg p-3 border border-green-500/20">
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
                      <Truck className="w-3 h-3 text-green-400" />
                      <span className="text-white">Utilitaire</span>
                    </div>
                    <div className="text-green-400 font-bold">64€</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extérieur BRILLANCE */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col">
              <div className="text-center mb-4">
                <div className="text-3xl md:text-4xl mb-3">✨</div>
                <h3 className="text-xl font-bold text-white mb-2">Extérieur « BRILLANCE »</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">À partir de 49€</div>
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

              {/* Tarifs Extérieur */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-lg p-3 border border-blue-500/20">
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
                      <Truck className="w-3 h-3 text-blue-400" />
                      <span className="text-white">Utilitaire</span>
                    </div>
                    <div className="text-blue-400 font-bold">74€</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pack SÉRÉNITÉ */}
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                POPULAIRE
              </div>
              
              <div className="text-center mb-4">
                <div className="text-3xl md:text-4xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-2">Pack « SÉRÉNITÉ »</h3>
                <div className="text-2xl font-bold text-purple-400 mb-2">À partir de 79€</div>
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

              {/* Tarifs Pack Sérénité */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-400/5 rounded-lg p-3 border border-purple-500/20">
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
                      <Truck className="w-3 h-3 text-purple-400" />
                      <span className="text-white">Utilitaire</span>
                    </div>
                    <div className="text-purple-400 font-bold">129€</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Produits Professionnels</h4>
              <p className="text-sm text-gray-300">Koch Chemie haut de gamme</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Service à Domicile</h4>
              <p className="text-sm text-gray-300">Intervention chez vous 7j/7</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Garantie Satisfait</h4>
              <p className="text-sm text-gray-300">100% satisfait ou remboursé</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 