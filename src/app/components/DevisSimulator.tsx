'use client';

import { useState } from 'react';
import { Car, Droplets, Zap, CheckCircle, Info, MessageCircle } from 'lucide-react';

type VehicleType = 'Citadine' | 'Berline' | 'SUV' | 'Break' | 'Monospace' | 'Utilitaire';
type ServiceType = 'Intérieur seul' | 'Extérieur seul' | 'Intérieur + Extérieur';
type DirtLevel = 'Propre' | 'Moyen' | 'Très sale';

const PRICES = {
  'Citadine': {
    'Intérieur seul': 95,
    'Extérieur seul': 65,
    'Intérieur + Extérieur': 149,
  },
  'Berline': {
    'Intérieur seul': 105,
    'Extérieur seul': 70,
    'Intérieur + Extérieur': 159,
  },
  'SUV': {
    'Intérieur seul': 115,
    'Extérieur seul': 80,
    'Intérieur + Extérieur': 179,
  },
  'Break': {
    'Intérieur seul': 110,
    'Extérieur seul': 75,
    'Intérieur + Extérieur': 169,
  },
  'Monospace': {
    'Intérieur seul': 120,
    'Extérieur seul': 85,
    'Intérieur + Extérieur': 189,
  },
  'Utilitaire': {
    'Intérieur seul': 130,
    'Extérieur seul': 90,
    'Intérieur + Extérieur': 199,
  },
};

const DIRT_LEVEL_PRICES = {
  'Propre': 0,
  'Moyen': 20,
  'Très sale': 40,
};

const VEHICLE_ICONS = {
  'Citadine': '🚗',
  'Berline': '🚙',
  'SUV': '🚐',
  'Break': '🚗',
  'Monospace': '🚐',
  'Utilitaire': '🚚',
};

export default function DevisSimulator() {
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [dirtLevel, setDirtLevel] = useState<DirtLevel | null>(null);

  const calculatePrice = () => {
    if (!vehicleType || !serviceType || !dirtLevel) return 0;
    const basePrice = PRICES[vehicleType][serviceType];
    const dirtLevelPrice = DIRT_LEVEL_PRICES[dirtLevel];
    return basePrice + dirtLevelPrice;
  };

  const generateWhatsAppMessage = () => {
    if (!vehicleType || !serviceType || !dirtLevel) return '';
    const message = `Bonjour, je souhaite un devis pour un ${vehicleType}, prestation ${serviceType}, niveau de saleté : ${dirtLevel}.`;
    return encodeURIComponent(message);
  };

  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Obtenez votre devis instantané
          </h2>
        </div>

        <div className="max-w-3xl md:max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 shadow-xl">
            <div className="space-y-8 md:space-y-10">
              {/* Type de véhicule */}
              <div className="space-y-3 md:space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-3 md:mb-4 flex items-center space-x-2">
                  <Car className="w-4 h-4 text-blue-400" />
                  <span>Type de véhicule</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {(Object.keys(VEHICLE_ICONS) as VehicleType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setVehicleType(type)}
                      className={`group relative bg-white/5 backdrop-blur-sm border rounded-lg p-3 md:p-4 transition-all duration-300 hover:bg-white/10 ${
                        vehicleType === type ? 'border-blue-400 bg-blue-500/10' : 'border-white/10'
                      }`}
                    >
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">{VEHICLE_ICONS[type]}</div>
                      <div className="font-medium text-xs md:text-sm">{type}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        À partir de {PRICES[type]['Extérieur seul']}€
                      </div>
                      {vehicleType === type && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-blue-400 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type de service */}
              <div className="space-y-3 md:space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-3 md:mb-4 flex items-center space-x-2">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  <span>Type de service</span>
                </label>
                <div className="space-y-3 md:space-y-4">
                  {(['Intérieur seul', 'Extérieur seul', 'Intérieur + Extérieur'] as ServiceType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setServiceType(type)}
                      className={`group relative bg-white/5 backdrop-blur-sm border rounded-lg p-4 md:p-6 transition-all duration-300 hover:bg-white/10 w-full text-left ${
                        serviceType === type ? 'border-blue-400 bg-blue-500/10' : 'border-white/10'
                      }`}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-base md:text-lg font-bold">{type}</h3>
                            <div className="relative group/info">
                              <Info className="w-4 h-4 text-blue-400 cursor-help hover:text-blue-300 transition-colors" />
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 md:w-80 p-3 md:p-4 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover/info:visible group-hover/info:opacity-100 transition-all duration-200 z-10 pointer-events-none border border-white/10">
                                <div className="space-y-2 md:space-y-3">
                                  <p className="text-sm font-medium text-white">
                                    {type === 'Intérieur seul' 
                                      ? 'Nettoyage complet de l\'intérieur du véhicule'
                                      : type === 'Extérieur seul'
                                      ? 'Lavage extérieur professionnel avec finitions'
                                      : 'Nettoyage haut de gamme intérieur et extérieur pour un véhicule impeccable'
                                    }
                                  </p>
                                  <div className="space-y-1 md:space-y-2">
                                    {type === 'Intérieur seul' ? (
                                      <>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Aspiration complète (sièges, tapis, moquette, coffre)</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Nettoyage des plastiques, vitres, contours, joints</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Détails et finitions intérieures</span>
                                        </div>
                                        <div className="pt-2 text-xs md:text-sm text-gray-400 italic">
                                          Idéal pour un entretien régulier de l&apos;intérieur.
                                        </div>
                                      </>
                                    ) : type === 'Extérieur seul' ? (
                                      <>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Lavage extérieur soigné avec finitions</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Détails extérieurs (jantes, seuils, plastiques)</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Protection et brillance</span>
                                        </div>
                                        <div className="pt-2 text-xs md:text-sm text-gray-400 italic">
                                          Idéal pour un lavage extérieur rapide et efficace.
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Aspiration complète (sièges, tapis, moquette, coffre)</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Nettoyage des plastiques, vitres, contours, joints</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Lavage extérieur soigné avec finitions</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Détails extérieurs (jantes, seuils, plastiques)</span>
                                        </div>
                                        <div className="pt-2 text-xs md:text-sm text-gray-400 italic">
                                          Idéal pour un véhicule très sale ou un entretien ponctuel complet.
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-400 italic">
                                          Aucun shampouinage des sièges inclus.
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">
                          {type === 'Intérieur seul' 
                            ? 'Service intérieur complet'
                            : type === 'Extérieur seul'
                            ? 'Service extérieur premium'
                            : 'Service complet haut de gamme'
                          }
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Niveau de saleté */}
              <div className="space-y-3 md:space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-3 md:mb-4 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span>Niveau de saleté</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {(['Propre', 'Moyen', 'Très sale'] as DirtLevel[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDirtLevel(level)}
                      className={`relative bg-white/5 backdrop-blur-sm border rounded-lg p-3 md:p-4 transition-all duration-300 hover:bg-white/10 ${
                        dirtLevel === level 
                          ? 'border-blue-400 bg-blue-500/10' 
                          : 'border-white/10'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-base md:text-lg font-bold mb-1">{level}</div>
                        <div className="text-sm text-gray-400">
                          +{DIRT_LEVEL_PRICES[level]}€
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Résultat du devis */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 md:p-6 text-center">
                <div className="text-xl md:text-2xl font-bold text-white mb-2">
                  Devis estimé : {calculatePrice()}€
                </div>
                <p className="text-gray-300 text-sm mb-4 md:mb-6">
                  Prix indicatif - Devis personnalisé gratuit sur demande
                </p>
                <a 
                  href={`https://wa.me/32472303701?text=${generateWhatsAppMessage()}`}
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 md:px-6 py-3 md:py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Demander un devis WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 