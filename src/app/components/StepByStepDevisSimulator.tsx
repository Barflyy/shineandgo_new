'use client';

import { useState } from 'react';
import { CheckCircle, MessageCircle, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

type VehicleType = 'Citadine' | 'Berline' | 'SUV' | 'Break' | 'Monospace' | 'Utilitaire';
type ServiceType = 'Intérieur seul' | 'Extérieur seul' | 'Intérieur + Extérieur';
type DirtLevel = 'Propre' | 'Moyen' | 'Très sale';

interface StepByStepDevisSimulatorProps {
  city?: string;
}

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

const SERVICES = ['Intérieur seul', 'Extérieur seul', 'Intérieur + Extérieur'] as ServiceType[];

export default function StepByStepDevisSimulator({ city }: StepByStepDevisSimulatorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [dirtLevel, setDirtLevel] = useState<DirtLevel>('Propre');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const totalSteps = 4;

  const calculatePrice = () => {
    if (!vehicleType || !serviceType || !dirtLevel) return 0;
    const basePrice = PRICES[vehicleType][serviceType];
    const dirtLevelPrice = DIRT_LEVEL_PRICES[dirtLevel];
    return basePrice + dirtLevelPrice;
  };

  const generateWhatsAppMessage = () => {
    if (!vehicleType || !serviceType || !dirtLevel) return '';
    const message = `Bonjour ! 😊 Je souhaiterais avoir un devis pour un(e) ${vehicleType}, avec la formule ${serviceType} à ${city ?? ''}.\nNiveau de saleté : ${dirtLevel}.\nPourriez-vous me confirmer le tarif estimé à ${calculatePrice()}€ et me donner vos prochaines disponibilités ? Merci beaucoup !`;
    return encodeURIComponent(message);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return vehicleType !== null;
      case 2: return serviceType !== null;
      case 3: return dirtLevel !== null;
      case 4: return true; // Étape de récapitulatif
      default: return false;
    }
  };

  const selectService = (service: ServiceType) => {
    setServiceType(service);
  };

  // Trie dynamique des services selon le prix pour le véhicule sélectionné
  const sortedServices = vehicleType
    ? [...SERVICES].sort((a, b) => PRICES[vehicleType][a] - PRICES[vehicleType][b])
    : SERVICES;

  return (
    <div className="relative">
      <div className="container mx-auto px-4">

        <div className="max-w-lg mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl h-[600px] flex flex-col">
            
            {/* Indicateur de progression */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400">Étape {currentStep} sur {totalSteps}</span>
                <span className="text-xs text-gray-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Titre de l'étape */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-1">
                {(() => {
                  switch (currentStep) {
                    case 1: return 'Type de véhicule';
                    case 2: return 'Service premium';
                    case 3: return '';
                    case 4: return 'Récapitulatif';
                    default: return '';
                  }
                })()}
              </h3>
              <p className="text-xs text-gray-400">
                {(() => {
                  switch (currentStep) {
                    case 1: return 'Sélectionnez la catégorie de votre voiture';
                    case 2: return 'Choisissez votre prestation';
                    case 3: return '';
                    case 4: return 'Vérifiez votre demande avant envoi WhatsApp';
                    default: return '';
                  }
                })()}
              </p>
            </div>

            {/* Contenu de l'étape */}
            <div className="mb-4 flex-1 flex flex-col justify-center items-center">
              {currentStep === 1 && (
                <div className="w-full max-w-lg grid grid-cols-2 gap-3">
                  {(Object.keys(VEHICLE_ICONS) as VehicleType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setVehicleType(type)}
                      className={`relative backdrop-blur-sm border rounded-lg p-3 transition-all duration-300 hover:bg-white/10 min-h-[80px] ${
                        vehicleType === type ? 'border-blue-400 bg-blue-500/10' : 'border-white/10'
                      }`}
                      style={vehicleType === type ? undefined : { backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <div className="text-xl mb-1">{VEHICLE_ICONS[type]}</div>
                      <div className="font-medium text-xs">{type}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        À partir de {PRICES[type]['Extérieur seul']}€
                      </div>
                      {vehicleType === type && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {currentStep === 2 && (
                <div className="w-full max-w-md">
                  {/* Indicateurs de progression du carrousel */}
                  <div className="flex justify-center mb-3 space-x-2">
                    {sortedServices.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentServiceIndex ? 'bg-blue-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Carte du service actuel avec flèches intégrées */}
                  <div className="relative flex items-center justify-center">
                    {/* Flèche gauche */}
                    <button
                      onClick={() => setCurrentServiceIndex(currentServiceIndex - 1)}
                      disabled={currentServiceIndex === 0}
                      className={`absolute left-0 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 text-white ${
                        currentServiceIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
                      }`}
                      style={{ top: '50%', transform: 'translateY(-50%)' }}
                      aria-label="Service précédent"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-h-[160px] w-full mx-10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-base font-bold text-white">{sortedServices[currentServiceIndex]}</h3>
                        {serviceType === sortedServices[currentServiceIndex] && (
                          <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-2 text-xs text-gray-300 mb-4">
                        {sortedServices[currentServiceIndex] === 'Intérieur seul' && (
                          <>
                            <p>🧽 <strong>Nettoyage complet intérieur</strong></p>
                            <p>• Aspiration complète (sièges, tapis, coffre)</p>
                            <p>• Nettoyage plastiques, vitres, contours</p>
                            <p>• Détails et finitions intérieures</p>
                            <p className="text-xs text-gray-400 italic mt-1">
                              Idéal pour un entretien régulier de l&apos;intérieur.
                            </p>
                          </>
                        )}
                        {sortedServices[currentServiceIndex] === 'Extérieur seul' && (
                          <>
                            <p>🚿 <strong>Lavage extérieur premium</strong></p>
                            <p>• Lavage extérieur soigné avec finitions</p>
                            <p>• Détails extérieurs (jantes, seuils)</p>
                            <p>• Protection et brillance</p>
                            <p className="text-xs text-gray-400 italic mt-1">
                              Idéal pour un lavage extérieur rapide et efficace.
                            </p>
                          </>
                        )}
                        {sortedServices[currentServiceIndex] === 'Intérieur + Extérieur' && (
                          <>
                            <p>✨ <strong>Service complet haut de gamme</strong></p>
                            <p>• Intérieur et extérieur inclus</p>
                            <p>• Produits professionnels Koch Chemie</p>
                            <p>• Détail minutieux complet</p>
                            <p className="text-xs text-gray-400 italic mt-1">
                              Idéal pour un véhicule très sale ou un entretien ponctuel complet.
                            </p>
                          </>
                        )}
                      </div>

                      {vehicleType && (
                        <div className="border-t border-white/10 pt-3">
                          <div className="text-blue-400 font-bold text-base">
                            {PRICES[vehicleType][sortedServices[currentServiceIndex]]}€
                          </div>
                          <div className="text-xs text-gray-400">Prix pour votre {vehicleType}</div>
                        </div>
                      )}

                      {/* Bouton de sélection */}
                      <button
                        onClick={() => selectService(sortedServices[currentServiceIndex])}
                        className={`w-full mt-3 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm ${
                          serviceType === sortedServices[currentServiceIndex]
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                      >
                        {serviceType === sortedServices[currentServiceIndex] ? 'Sélectionné ✓' : 'Sélectionner ce service'}
                      </button>
                    </div>

                    {/* Flèche droite */}
                    <button
                      onClick={() => setCurrentServiceIndex(currentServiceIndex + 1)}
                      disabled={currentServiceIndex === sortedServices.length - 1}
                      className={`absolute right-0 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 text-white ${
                        currentServiceIndex === sortedServices.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                      }`}
                      style={{ top: '50%', transform: 'translateY(-50%)' }}
                      aria-label="Service suivant"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="w-full max-w-lg flex flex-col items-center">
                  <div className="mb-6 w-full text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl">🧼</span>
                      <span className="ml-2 text-lg font-bold text-white">Quel est l’état actuel du véhicule ?</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3 w-full">
                    {(['Propre', 'Moyen', 'Très sale'] as DirtLevel[]).map((level) => (
                      <button
                        key={level}
                        onClick={() => setDirtLevel(level)}
                        className={`relative bg-white/5 backdrop-blur-sm border rounded-lg p-4 transition-all duration-300 hover:bg-white/10 min-h-[80px] text-left ${
                          dirtLevel === level 
                            ? 'border-blue-400 bg-blue-500/10' 
                            : 'border-white/10'
                        }`}
                      >
                        <div className="flex items-center mb-1">
                          <div className="text-base font-bold mr-2">
                            {level === 'Propre' && '◽ Propre'}
                            {level === 'Moyen' && '◽ Sale'}
                            {level === 'Très sale' && '◽ Très sale'}
                          </div>
                          {dirtLevel === level && (
                            <div className="ml-2 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-2.5 h-2.5 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-300">
                          {level === 'Propre' && 'Entretien récent, pas de poils ni taches'}
                          {level === 'Moyen' && 'Poussières, traces, usage normal'}
                          {level === 'Très sale' && 'Taches incrustées, poils, sable, odeurs'}
                        </div>
                        <div className="text-blue-400 font-semibold text-sm mt-2">
                          +{DIRT_LEVEL_PRICES[level]}€
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="w-full max-w-lg bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-semibold text-white text-sm">Type de véhicule</div>
                        <div className="text-xs text-gray-400">{vehicleType}</div>
                      </div>
                      <div className="text-blue-400 font-bold text-sm">{PRICES[vehicleType!][serviceType!]}€</div>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-semibold text-white text-sm">Type de service</div>
                        <div className="text-xs text-gray-400">{serviceType}</div>
                      </div>
                      <div className="text-blue-400 font-bold text-sm">Inclus</div>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-semibold text-white text-sm">Niveau de saleté</div>
                        <div className="text-xs text-gray-400">{dirtLevel}</div>
                      </div>
                      <div className="text-blue-400 font-bold text-sm">+{DIRT_LEVEL_PRICES[dirtLevel!]}€</div>
                    </div>

                    <div className="border-t border-white/10 pt-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-base font-bold text-white">Total estimé</div>
                        <div className="text-xl font-bold text-blue-400">{calculatePrice()}€</div>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">
                        * Prix indicatif. Devis définitif après inspection du véhicule
                      </p>
                      <div className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm">🎁</span>
                          <h4 className="font-semibold text-green-400 text-xs">Cadeau inclus</h4>
                        </div>
                        <p className="text-xs text-gray-300">
                          <strong>Protection et brillance</strong> offerte.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
                    currentStep === 1 
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Précédent</span>
                </button>

                <button
                  onClick={currentStep < totalSteps ? nextStep : () => window.open(`https://wa.me/32472303701?text=${generateWhatsAppMessage()}`, '_blank')}
                  disabled={currentStep < totalSteps ? !canProceed() : false}
                  className={`flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm w-32 ${
                    currentStep < totalSteps 
                      ? (canProceed()
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed')
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {currentStep < totalSteps ? (
                    <>
                      <span>{currentStep === 3 ? 'Récap' : 'Suivant'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}