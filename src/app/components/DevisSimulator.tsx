'use client';

import { useState } from 'react';
import { Sparkles, Car, Droplets, Zap, CheckCircle, Info } from 'lucide-react';

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
  const [vehicleType, setVehicleType] = useState<VehicleType>('Citadine');
  const [washType, setWashType] = useState<WashType>('Entretien Régulier');
  const [dirtLevel, setDirtLevel] = useState<DirtLevel>('Propre');

  const calculatePrice = () => {
    const basePrice = PRICES[vehicleType][washType];
    const dirtLevelPrice = DIRT_LEVEL_PRICES[dirtLevel];
    return basePrice + dirtLevelPrice;
  };

  const generateWhatsAppMessage = () => {
    const message = `Bonjour, je souhaite un devis pour un ${vehicleType}, prestation ${washType}, niveau de saleté : ${dirtLevel}.`;
    return encodeURIComponent(message);
  };

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden devis-simulator">
      {/* Background Elements SUPPRIMÉS */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-4 sm:px-6 py-2 mb-4 border border-white/20">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-xs sm:text-sm font-medium">Simulateur de Devis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 hero-title">
            Obtenez votre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">devis instantané</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
            <div className="space-y-6 sm:space-y-8">
              {/* Type de véhicule */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center space-x-2">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span>Type de véhicule</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {(Object.keys(VEHICLE_ICONS) as VehicleType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setVehicleType(type)}
                      className={`group relative bg-white/5 backdrop-blur-sm border devis-option ${
                        vehicleType === type ? 'border-blue-400' : 'border-white/10'
                      } rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-white/10 hover:scale-105`}
                    >
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 devis-option-icon">{VEHICLE_ICONS[type]}</div>
                      <div className="font-medium text-xs sm:text-sm devis-option-title">{type}</div>
                      <div className="text-xs text-gray-400 mt-1 devis-option-description">
                        À partir de {PRICES[type]['Entretien Régulier']}€
                      </div>
                      {vehicleType === type && (
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type de lavage */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center space-x-2">
                  <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span>Type de lavage</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {(['Nettoyage Intensif', 'Entretien Régulier'] as WashType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setWashType(type)}
                      className={`relative bg-gradient-to-br devis-option ${
                        washType === type 
                          ? 'from-blue-500/20 to-cyan-500/20 border-blue-400' 
                          : 'from-white/5 to-white/5 border-white/10'
                      } backdrop-blur-sm border rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all duration-300 hover:from-blue-500/10 hover:to-cyan-500/10`}
                    >
                      <div className="flex flex-col devis-option-content">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg sm:text-xl font-bold devis-option-title">{type}</h3>
                            <div className="relative group/info">
                              <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 cursor-help hover:text-blue-300 transition-colors" />
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 sm:w-96 p-3 sm:p-4 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover/info:visible group-hover/info:opacity-100 transition-all duration-200 z-10 pointer-events-none border border-white/10">
                                <div className="space-y-2 sm:space-y-3">
                                  <p className="text-xs sm:text-sm font-medium text-white">
                                    {type === 'Nettoyage Intensif' 
                                      ? 'Nettoyage haut de gamme intérieur et extérieur pour un véhicule impeccable'
                                      : 'Entretien régulier pour garder un véhicule propre au quotidien'}
                                  </p>
                                  <div className="space-y-1 sm:space-y-2">
                                    {type === 'Nettoyage Intensif' ? (
                                      <>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs sm:text-sm text-gray-300">Aspiration complète (sièges, tapis, moquette, coffre)</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs sm:text-sm text-gray-300">Nettoyage des plastiques, vitres, contours, joints</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs sm:text-sm text-gray-300">Lavage extérieur soigné avec finitions</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs sm:text-sm text-gray-300">Détails extérieurs (jantes, seuils, plastiques)</span>
                                        </div>
                                        <div className="pt-2 text-xs sm:text-sm text-gray-400 italic">
                                          Idéal pour un véhicule très sale ou un entretien ponctuel complet.
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400 italic">
                                          Aucun shampouinage des sièges inclus.
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs sm:text-sm text-gray-300">Aspiration rapide de l&apos;habitacle (tapis, sièges, coffre)</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs sm:text-sm text-gray-300">Nettoyage des plastiques visibles et vitres</span>
                                        </div>
                                        <div className="flex items-start space-x-2">
                                          <span className="text-green-400 mt-1">✔️</span>
                                          <span className="text-xs sm:text-sm text-gray-300">Lavage extérieur simple mais soigné</span>
                                        </div>
                                        <div className="pt-2 text-xs sm:text-sm text-gray-400 italic">
                                          Recommandé après un Nettoyage Intensif ou pour les véhicules déjà bien entretenus.
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400 italic">
                                          Pas de nettoyage en profondeur ou textile.
                                        </div>
                                        <div className="pt-2 flex items-start space-x-2 bg-yellow-500/10 p-2 rounded">
                                          <span className="text-yellow-400 mt-1">⚠️</span>
                                          <span className="text-xs sm:text-sm text-yellow-400">
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
                          <div className="text-lg sm:text-xl font-bold text-blue-400 devis-option-price">
                            {PRICES[vehicleType][type]}€
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 devis-option-description">
                          {type === 'Nettoyage Intensif' 
                            ? 'Nettoyage haut de gamme intérieur et extérieur pour un véhicule impeccable'
                            : 'Entretien régulier pour garder un véhicule propre au quotidien'}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Niveau de saleté */}
              <div className="space-y-3 sm:space-y-4">
                <label className="block text-sm font-medium text-gray-300 mb-2 sm:mb-3 flex items-center space-x-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span>Niveau de saleté</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {(['Propre', 'Moyen', 'Très sale'] as DirtLevel[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDirtLevel(level)}
                      className={`group relative bg-white/5 backdrop-blur-sm border devis-option ${
                        dirtLevel === level ? 'border-blue-400' : 'border-white/10'
                      } rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-white/10 hover:scale-105`}
                    >
                      <div className="flex flex-col items-center text-center devis-option-content">
                        <div className="text-2xl sm:text-3xl mb-2 devis-option-icon">
                          {level === 'Propre' ? '✨' : level === 'Moyen' ? '🧹' : '🧼'}
                        </div>
                        <div className="font-medium text-sm sm:text-base devis-option-title">{level}</div>
                        <div className="text-xs text-gray-400 mt-1 devis-option-description">
                          {level === 'Propre' 
                            ? 'Véhicule régulièrement entretenu, nécessite un nettoyage standard.'
                            : level === 'Moyen'
                            ? 'Véhicule nécessitant un nettoyage plus approfondi.'
                            : 'Véhicule très sale nécessitant un nettoyage intensif et détaillé.'}
                        </div>
                        <div className="text-sm font-semibold text-blue-400 mt-2 devis-option-price">
                          {DIRT_LEVEL_PRICES[level] > 0 ? `+${DIRT_LEVEL_PRICES[level]}€ TTC` : 'Pas de majoration'}
                        </div>
                        {dirtLevel === level && (
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prix estimé */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-sm sm:text-base text-gray-300 mb-2">Prix estimé</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-4">
                  {calculatePrice()} €
                </div>
                <a
                  href={`https://wa.me/32472303701?text=${generateWhatsAppMessage()}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl cta-button"
                >
                  <span>Demander un devis sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 