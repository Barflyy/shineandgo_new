'use client';

import { useState } from 'react';
import { CheckCircle, MessageCircle, ArrowRight, ArrowLeft, Shield, Clock, MapPin, Sparkles } from 'lucide-react';
import React from 'react';

type ServiceCategory = 'Nettoyage' | 'Detailing';
type VehicleType = 'Citadine' | 'Berline' | 'Break' | 'SUV' | 'Monospace' | 'Utilitaire';
type ServiceType = 'Intérieur seul' | 'Extérieur seul' | 'Intérieur + Extérieur';

interface StepByStepDevisSimulatorProps {
  city?: string;
}

const PRICES = {
  'Nettoyage': {
    'Citadine': {
      'Intérieur seul': 39,
      'Extérieur seul': 49,
      'Intérieur + Extérieur': 79,
    },
    'Berline': {
      'Intérieur seul': 44,
      'Extérieur seul': 54,
      'Intérieur + Extérieur': 89,
    },
    'SUV': {
      'Intérieur seul': 49,
      'Extérieur seul': 59,
      'Intérieur + Extérieur': 99,
    },
    'Break': {
      'Intérieur seul': 54,
      'Extérieur seul': 64,
      'Intérieur + Extérieur': 109,
    },
    'Monospace': {
      'Intérieur seul': 59,
      'Extérieur seul': 69,
      'Intérieur + Extérieur': 119,
    },
    'Utilitaire': {
      'Intérieur seul': 64,
      'Extérieur seul': 74,
      'Intérieur + Extérieur': 129,
    },
  },
  'Detailing': {
    'Citadine': {
      'Intérieur seul': 180,
      'Extérieur seul': 120,
      'Intérieur + Extérieur': 280,
    },
    'Berline': {
      'Intérieur seul': 200,
      'Extérieur seul': 140,
      'Intérieur + Extérieur': 320,
    },
    'SUV': {
      'Intérieur seul': 220,
      'Extérieur seul': 160,
      'Intérieur + Extérieur': 360,
    },
    'Break': {
      'Intérieur seul': 210,
      'Extérieur seul': 150,
      'Intérieur + Extérieur': 340,
    },
    'Monospace': {
      'Intérieur seul': 230,
      'Extérieur seul': 170,
      'Intérieur + Extérieur': 380,
    },
    'Utilitaire': {
      'Intérieur seul': 250,
      'Extérieur seul': 190,
      'Intérieur + Extérieur': 420,
    },
  },
};

const VEHICLE_ICONS = {
  'Citadine': '🚗',
  'Berline': '🚙',
  'Break': '🚗',
  'SUV': '🚐',
  'Monospace': '🚐',
  'Utilitaire': '🚚',
};

// Descriptions détaillées des services
const SERVICE_DESCRIPTIONS = {
  'Intérieur seul': {
    title: 'Nettoyage intérieur',
    description: 'Aspiration de l\'habitacle, nettoyage plastiques, nettoyage des vitres',
    details: [
      'Aspiration de l\'habitacle',
      'Nettoyage plastiques',
      'Nettoyage des vitres',
      'Nettoyage des tapis de sols'
    ]
  },
  'Extérieur seul': {
    title: 'Nettoyage extérieur',
    description: 'Prélavage à la mousse active, lavage manuel, jantes et protection',
    details: [
      'Prélavage à la mousse active',
      'Lavage manuel de la carrosserie',
      'Jantes et pneus (face visible)',
      'Vitres extérieures',
      'Seuils de portes',
      'Séchage micro fibre sans traces'
    ]
  },
  'Intérieur + Extérieur': {
    title: 'Nettoyage complet',
    description: 'Intérieur + Extérieur - Transformation garantie',
    details: [
      'Tous les services intérieur',
      'Tous les services extérieur',
      'Résultat garanti'
    ]
  }
};



// Composant pour l'étape de sélection du véhicule
const VehicleSelectionStep = ({ vehicleType, setVehicleType }: { vehicleType: VehicleType | null, setVehicleType: (type: VehicleType) => void }) => (
  <div className="w-full max-w-4xl">
    <div className="text-center mb-3 sm:mb-4">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Quel type de véhicule ?</h2>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
      {(Object.keys(VEHICLE_ICONS) as VehicleType[]).map((type) => (
        <button
          key={type}
          onClick={() => setVehicleType(type)}
          className={`group relative p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 ${
            vehicleType === type 
              ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 shadow-xl shadow-blue-500/25' 
              : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 hover:bg-white/15'
          }`}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
              {VEHICLE_ICONS[type]}
            </div>
            <div className="font-bold text-white text-xs sm:text-sm">{type}</div>
            {vehicleType === type && (
              <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  </div>
);

// Composant pour l'étape de sélection du service
const ServiceSelectionStep = ({ serviceType, selectService }: { serviceType: ServiceType | null, selectService: (service: ServiceType) => void }) => (
  <div className="w-full max-w-5xl">
    <div className="text-center mb-2 sm:mb-4">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Choisissez votre prestation</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
      {/* Service Intérieur */}
      <div
        onClick={() => selectService('Intérieur seul')}
        className={`group relative p-2 sm:p-4 rounded-lg sm:rounded-xl transition-colors duration-200 cursor-pointer ${
          serviceType === 'Intérieur seul' 
            ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 shadow-xl shadow-green-500/25' 
            : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 hover:bg-white/15'
        }`}
      >
        <div className="text-center mb-2">
          <div className="text-xl sm:text-3xl mb-1 transition-transform duration-200 group-hover:scale-105">🧽</div>
          <h3 className="text-sm sm:text-lg font-bold text-white mb-1">{SERVICE_DESCRIPTIONS['Intérieur seul'].title}</h3>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs font-semibold text-green-400 flex items-center justify-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            INCLUS
          </div>
          <div className="space-y-1">
            {SERVICE_DESCRIPTIONS['Intérieur seul'].details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-gray-300">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
        

      </div>

      {/* Service Extérieur */}
      <div
        onClick={() => selectService('Extérieur seul')}
        className={`group relative p-2 sm:p-4 rounded-lg sm:rounded-xl transition-colors duration-200 cursor-pointer ${
          serviceType === 'Extérieur seul' 
            ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 shadow-xl shadow-blue-500/25' 
            : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30 hover:bg-white/15'
        }`}
      >
        <div className="text-center mb-2">
          <div className="text-xl sm:text-3xl mb-1 transition-transform duration-200 group-hover:scale-105">🚿</div>
          <h3 className="text-sm sm:text-lg font-bold text-white mb-1">{SERVICE_DESCRIPTIONS['Extérieur seul'].title}</h3>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs font-semibold text-blue-400 flex items-center justify-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            INCLUS
          </div>
          <div className="space-y-1">
            {SERVICE_DESCRIPTIONS['Extérieur seul'].details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-gray-300">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
        

      </div>

      {/* Service Complet */}
      <div
        onClick={() => selectService('Intérieur + Extérieur')}
        className={`group relative p-2 sm:p-4 rounded-lg sm:rounded-xl transition-colors duration-200 cursor-pointer ${
          serviceType === 'Intérieur + Extérieur' 
            ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 shadow-xl shadow-purple-500/25' 
            : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 hover:border-purple-400/50 hover:bg-purple-500/25'
        }`}
      >
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-bold z-10">
          POPULAIRE
        </div>
        
        <div className="text-center mb-2">
          <div className="text-xl sm:text-3xl mb-1 transition-transform duration-200 group-hover:scale-105">✨</div>
          <h3 className="text-sm sm:text-lg font-bold text-white mb-1">{SERVICE_DESCRIPTIONS['Intérieur + Extérieur'].title}</h3>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs font-semibold text-purple-400 flex items-center justify-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            INCLUS
          </div>
          <div className="space-y-1">
            {SERVICE_DESCRIPTIONS['Intérieur + Extérieur'].details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-gray-300">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
        

      </div>
    </div>
  </div>
);

// Composant pour l'étape de récapitulatif
const SummaryStep = ({ vehicleType, serviceType, serviceCategory, calculatePrice }: {
  vehicleType: VehicleType | null;
  serviceType: ServiceType | null;
  serviceCategory: ServiceCategory | null;
  calculatePrice: () => number;
}) => (
  <div className="w-full max-w-4xl">
    <div className="text-center mb-3 sm:mb-4">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Votre devis personnalisé</h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
      {/* Carte principale */}
      <div className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-xl">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <div className="text-2xl sm:text-3xl mr-2 sm:mr-3">{VEHICLE_ICONS[vehicleType as VehicleType]}</div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-white">{vehicleType}</div>
            <div className="text-gray-400 text-xs sm:text-sm">Véhicule sélectionné</div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-400/20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="text-lg sm:text-xl">
                {serviceType === 'Intérieur seul' && '🧽'}
                {serviceType === 'Extérieur seul' && '🚿'}
                {serviceType === 'Intérieur + Extérieur' && '✨'}
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base">
                  {serviceType && SERVICE_DESCRIPTIONS[serviceType].title}
                </div>
                <div className="text-gray-400 text-xs">
                  {serviceType && SERVICE_DESCRIPTIONS[serviceType].description}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {serviceCategory && vehicleType && serviceType ? PRICES[serviceCategory][vehicleType][serviceType] : 0}€
              </div>
              <div className="text-gray-400 text-xs">Prix de base</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-400/20">
            <div className="text-sm sm:text-base font-bold text-white">Total estimé</div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {calculatePrice()}€
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-2 sm:mt-3 text-center">
          * Prix indicatif. Devis définitif après inspection
        </p>
      </div>

      {/* Avantages */}
      <div className="space-y-2 sm:space-y-3">
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-lg p-2 sm:p-3">
          <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            <h4 className="font-semibold text-green-400 text-xs sm:text-sm">Commodité</h4>
          </div>
          <p className="text-xs text-gray-300">
            Je viens à vous, pas besoin de vous déplacer.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-2 sm:p-3">
          <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <h4 className="font-semibold text-blue-400 text-xs sm:text-sm">Gain de temps</h4>
          </div>
          <p className="text-xs text-gray-300">
            Votre voiture est propre pendant que vous bossez, mangez, vous reposez.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-lg p-2 sm:p-3">
          <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            <h4 className="font-semibold text-purple-400 text-xs sm:text-sm">Soin et professionnalisme</h4>
          </div>
          <p className="text-xs text-gray-300">
            Je travaille seul, avec les meilleurs produits. Pas à la chaîne.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-lg p-2 sm:p-3">
          <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <h4 className="font-semibold text-yellow-400 text-xs sm:text-sm">Confiance</h4>
          </div>
          <p className="text-xs text-gray-300">
            Un seul prestataire, toujours le même niveau de service.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function StepByStepDevisSimulator({ city }: StepByStepDevisSimulatorProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory | null>(null);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);

  const totalSteps = 3;

  const calculatePrice = () => {
    if (!serviceCategory || !vehicleType || !serviceType) return 0;
    const basePrice = PRICES[serviceCategory][vehicleType][serviceType];
    return basePrice;
  };

  const generateWhatsAppMessage = () => {
    if (!serviceCategory || !vehicleType || !serviceType) return '';
    const message = `Bonjour ! 😊 Je souhaiterais avoir un devis pour un(e) ${vehicleType}, avec la formule ${serviceType} (${serviceCategory}) à ${city ?? ''}.\nPourriez-vous me confirmer le tarif estimé à ${calculatePrice()}€ et me donner vos prochaines disponibilités ? Merci beaucoup !`;
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
      case 3: return true;
      default: return false;
    }
  };

  const selectService = (service: ServiceType) => {
    setServiceType(service);
  };

  // Définir automatiquement le serviceCategory basé sur le serviceType
  React.useEffect(() => {
    if (serviceType) {
      setServiceCategory('Nettoyage');
    }
  }, [serviceType]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-5xl">
        {/* En-tête avec progression */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Devis personnalisé</h1>
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Étape {currentStep} sur {totalSteps}</p>
          
          {/* Indicateur de progression */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i + 1 <= currentStep ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl h-[750px] sm:h-[600px]">
          <div className="flex flex-col h-full">
            {/* Contenu des étapes */}
            <div className="flex-1 flex items-center justify-center">
              {currentStep === 1 && (
                <VehicleSelectionStep 
                  vehicleType={vehicleType} 
                  setVehicleType={setVehicleType} 
                />
              )}

              {currentStep === 2 && (
                <ServiceSelectionStep 
                  serviceType={serviceType} 
                  selectService={selectService} 
                />
              )}

              {currentStep === 3 && (
                <SummaryStep 
                  vehicleType={vehicleType}
                  serviceType={serviceType}
                  serviceCategory={serviceCategory}
                  calculatePrice={calculatePrice}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="mt-8 sm:mt-8 flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-1 sm:space-x-2 px-4 sm:px-6 py-3 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  currentStep === 1 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-600 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-br from-white/20 to-white/10 text-white hover:from-white/30 hover:to-white/20 border border-white/20'
                }`}
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Précédent</span>
              </button>

              <button
                onClick={currentStep < totalSteps ? nextStep : () => window.open(`https://wa.me/32472303701?text=${generateWhatsAppMessage()}`, '_blank')}
                disabled={currentStep < totalSteps ? !canProceed() : false}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-6 sm:px-8 py-3 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  currentStep < totalSteps 
                    ? (canProceed()
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gradient-to-br from-gray-700 to-gray-600 text-gray-500 cursor-not-allowed')
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25'
                }`}
              >
                {currentStep < totalSteps ? (
                  <>
                    <span>Suivant</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>WhatsApp</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}