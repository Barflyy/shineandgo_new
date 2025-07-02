'use client';

import { useState } from 'react';
import { Sparkles, Car, Droplets, Zap, CheckCircle, Info, MessageCircle } from 'lucide-react';

type VehicleType = 'Citadine' | 'Berline' | 'SUV' | 'Break' | 'Monospace' | 'Utilitaire';
type WashType = 'Nettoyage Intensif' | 'Entretien Régulier';
type DirtLevel = 'Propre' | 'Moyen' | 'Très sale';

const PRICES = {
  'Citadine': {
    'Nettoyage Intensif': 150,
    'Entretien Régulier': 70,
  },
  'Berline': {
    'Nettoyage Intensif': 159,
    'Entretien Régulier': 75,
  },
  'SUV': {
    'Nettoyage Intensif': 169,
    'Entretien Régulier': 80,
  },
  'Break': {
    'Nettoyage Intensif': 169,
    'Entretien Régulier': 80,
  },
  'Monospace': {
    'Nettoyage Intensif': 179,
    'Entretien Régulier': 85,
  },
  'Utilitaire': {
    'Nettoyage Intensif': 189,
    'Entretien Régulier': 90,
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
  const [washType, setWashType] = useState<WashType | null>(null);
  const [dirtLevel, setDirtLevel] = useState<DirtLevel | null>(null);

  const calculatePrice = () => {
    if (!vehicleType || !washType || !dirtLevel) return 0;
    const basePrice = PRICES[vehicleType][washType];
    const dirtLevelPrice = DIRT_LEVEL_PRICES[dirtLevel];
    return basePrice + dirtLevelPrice;
  };

  const generateWhatsAppMessage = () => {
    if (!vehicleType || !washType || !dirtLevel) return '';
    const message = `Bonjour, je souhaite un devis pour un ${vehicleType}, prestation ${washType}, niveau de saleté : ${dirtLevel}.`;
    return encodeURIComponent(message);
  };

  return (
    <section className="py-8 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-3 md:px-4 py-2 mb-4 md:mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Simulateur de Devis</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            Obtenez votre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">devis instantané</span>
          </h2>
        </div>

        <div className="max-w-3xl md:max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 lg:p-8 shadow-xl">
            <div className="space-y-6 md:space-y-8">
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
                        À partir de {PRICES[type]['Entretien Régulier']}€
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

              {/* Type de lavage */}
              <div className="space-y-3 md:space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-3 md:mb-4 flex items-center space-x-2">
                  <Droplets className="w-4 h-4 text-blue-400" />
                  <span>Type de lavage</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {(['Nettoyage Intensif', 'Entretien Régulier'] as WashType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setWashType(type)}
                      className={`relative bg-white/5 backdrop-blur-sm border rounded-lg p-4 md:p-6 transition-all duration-300 hover:bg-white/10 ${
                        washType === type 
                          ? 'border-blue-400 bg-blue-500/10' 
                          : 'border-white/10'
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
                                    {type === 'Nettoyage Intensif' 
                                      ? 'Nettoyage haut de gamme intérieur et extérieur pour un véhicule impeccable'
                                      : 'Entretien régulier pour garder un véhicule propre au quotidien'}
                                  </p>
                                  <div className="space-y-1 md:space-y-2">
                                    {type === 'Nettoyage Intensif' ? (
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
                                    ) : (
                                      <>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Aspiration rapide de l&apos;habitacle (tapis, sièges, coffre)</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Nettoyage des plastiques visibles et vitres</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs md:text-sm text-gray-300">Lavage extérieur simple mais soigné</span>
                                        </div>
                                        <div className="pt-2 text-xs md:text-sm text-gray-400 italic">
                                          Recommandé après un Nettoyage Intensif ou pour les véhicules déjà bien entretenus.
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-400 italic">
                                          Pas de nettoyage en profondeur ou textile.
                                        </div>
                                        <div className="pt-2 flex items-start space-x-2 bg-yellow-500/10 p-2 rounded">
                                          <span className="text-yellow-400 mt-1">⚠️</span>
                                          <span className="text-xs md:text-sm text-yellow-400">
                                            Disponible uniquement pour les clients ayant effectué un Nettoyage Intensif dans les 6 dernières semaines.
                                          </span>
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
                          {type === 'Nettoyage Intensif' 
                            ? 'Service complet haut de gamme'
                            : 'Entretien régulier premium'
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