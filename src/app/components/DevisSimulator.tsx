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
    <section className="py-12 sm:py-16 relative overflow-hidden">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
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
                      className={`group relative bg-white/5 backdrop-blur-sm border ${
                        vehicleType === type ? 'border-blue-400' : 'border-white/10'
                      } rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-white/10 hover:scale-105`}
                    >
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{VEHICLE_ICONS[type]}</div>
                      <div className="font-medium text-xs sm:text-sm">{type}</div>
                      <div className="text-xs text-gray-400 mt-1">
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
                      className={`relative bg-gradient-to-br ${
                        washType === type 
                          ? 'from-blue-500/20 to-cyan-500/20 border-blue-400' 
                          : 'from-white/5 to-white/5 border-white/10'
                      } backdrop-blur-sm border rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all duration-300 hover:from-blue-500/10 hover:to-cyan-500/10`}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg sm:text-xl font-bold">{type}</h3>
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
                          <div className="text-xl sm:text-2xl font-bold text-blue-400">{PRICES[vehicleType][type]}€</div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {type === 'Nettoyage Intensif' 
                            ? 'Nettoyage haut de gamme intérieur et extérieur pour un véhicule impeccable'
                            : 'Entretien régulier pour garder un véhicule propre au quotidien'}
                        </p>
                        {washType === type && (
                          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                        )}
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
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {(['Propre', 'Moyen', 'Très sale'] as DirtLevel[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDirtLevel(level)}
                      className={`relative bg-white/5 backdrop-blur-sm border ${
                        dirtLevel === level ? 'border-blue-400' : 'border-white/10'
                      } rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-white/10`}
                    >
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                          <div className="text-xl sm:text-2xl">
                            {level === 'Propre' ? '✨' : level === 'Moyen' ? '🧹' : '🧼'}
                          </div>
                          <div className="relative group/info">
                            <Info className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 cursor-help hover:text-blue-300 transition-colors" />
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 sm:w-64 p-2 sm:p-3 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover/info:visible group-hover/info:opacity-100 transition-all duration-200 z-10 pointer-events-none border border-white/10">
                              <p className="text-xs sm:text-sm text-gray-300">
                                {level === 'Propre' 
                                  ? 'Véhicule régulièrement entretenu, nécessite un nettoyage standard.'
                                  : level === 'Moyen'
                                  ? 'Véhicule nécessitant un nettoyage plus approfondi.'
                                  : 'Véhicule très sale nécessitant un nettoyage intensif et détaillé.'}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="font-medium text-xs sm:text-sm">{level}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {DIRT_LEVEL_PRICES[level] > 0 ? `+${DIRT_LEVEL_PRICES[level]}€ TTC` : 'Pas de majoration'}
                        </div>
                      </div>
                      {dirtLevel === level && (
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prix estimé */}
              <div className="text-center py-4 sm:py-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10">
                <p className="text-base sm:text-lg font-medium text-gray-300 mb-1 sm:mb-2">Prix estimé</p>
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {calculatePrice()} €
                </p>
              </div>

              {/* Bouton WhatsApp */}
              <div className="text-center">
                <a
                  href={`https://wa.me/32472303701?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="relative z-10">Demander un devis sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 