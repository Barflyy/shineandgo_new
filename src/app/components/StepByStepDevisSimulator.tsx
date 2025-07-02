'use client';

import { useState } from 'react';
import { Sparkles, CheckCircle, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

type VehicleType = 'Citadine' | 'Berline' | 'SUV' | 'Break' | 'Monospace' | 'Utilitaire';
type DirtLevel = 'Propre' | 'Moyen' | 'Très sale';

const PRICES = {
  'Citadine': {
    'Nettoyage Intensif': 149,
  },
  'Berline': {
    'Nettoyage Intensif': 159,
  },
  'SUV': {
    'Nettoyage Intensif': 169,
  },
  'Break': {
    'Nettoyage Intensif': 169,
  },
  'Monospace': {
    'Nettoyage Intensif': 179,
  },
  'Utilitaire': {
    'Nettoyage Intensif': 189,
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

export default function StepByStepDevisSimulator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [dirtLevel, setDirtLevel] = useState<DirtLevel | null>(null);

  const totalSteps = 4;

  const calculatePrice = () => {
    if (!vehicleType || !dirtLevel) return 0;
    const basePrice = PRICES[vehicleType]['Nettoyage Intensif'];
    const dirtLevelPrice = DIRT_LEVEL_PRICES[dirtLevel];
    return basePrice + dirtLevelPrice;
  };

  const generateWhatsAppMessage = () => {
    if (!vehicleType || !dirtLevel) return '';
    const message = `Bonjour ! 😊 Je souhaiterais avoir un devis pour un(e) ${vehicleType}, avec la formule Nettoyage Intensif.\nNiveau de saleté : ${dirtLevel}.\nPourriez-vous me confirmer le tarif estimé à ${calculatePrice()}€ et me donner vos prochaines disponibilités ? Merci beaucoup !`;
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
      case 2: return true; // Nettoyage Intensif est automatiquement sélectionné
      case 3: return dirtLevel !== null;
      case 4: return true; // Étape de récapitulatif
      default: return false;
    }
  };

  // Removed unused functions getStepTitle and getStepIcon

  return (
    <section className="py-6 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-3 py-1.5 mb-3">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium">Simulateur de Devis</span>
          </div>
          <h2 className="text-xl font-bold mb-3">
            Obtenez votre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">devis instantané</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl h-[600px] overflow-y-auto flex flex-col flex-1">
            
            {/* Indicateur de progression */}
            <div className="mb-6">
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
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {(() => {
                  switch (currentStep) {
                    case 1: return 'Type de véhicule';
                    case 2: return 'Service premium';
                    case 3: return 'Niveau de saleté';
                    case 4: return 'Récapitulatif';
                    default: return '';
                  }
                })()}
              </h3>
              <p className="text-xs text-gray-400">
                {(() => {
                  switch (currentStep) {
                    case 1: return 'Sélectionnez la catégorie de votre voiture';
                    case 2: return 'Découvrez le détail de la prestation';
                    case 3: return 'Indiquez l\'état de propreté de votre véhicule';
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
                        À partir de {PRICES[type]['Nettoyage Intensif']}€
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
                <div className="w-full max-w-md space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-blue-400 bg-blue-500/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">Nettoyage Intensif Premium</h3>
                      <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>✨ <strong>Service complet haut de gamme</strong> - Intérieur et extérieur</p>
                      <p>🧽 <strong>Produits professionnels</strong> - Koch Chemie, CarPro, P&S</p>
                      <p>🎯 <strong>Détail minutieux</strong> - Chaque centimètre traité</p>
                      <p>⚡ <strong>Intervention rapide</strong> - Résultat en 2-3 heures</p>
                    </div>
                    {vehicleType && (
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="text-blue-400 font-bold text-lg">
                          {PRICES[vehicleType]['Nettoyage Intensif']}€
                        </div>
                        <div className="text-xs text-gray-400">Prix de base pour votre {vehicleType}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="w-full max-w-lg grid grid-cols-1 gap-3">
                  {(['Propre', 'Moyen', 'Très sale'] as DirtLevel[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDirtLevel(level)}
                      className={`relative bg-white/5 backdrop-blur-sm border rounded-lg p-4 transition-all duration-300 hover:bg-white/10 min-h-[80px] ${
                        dirtLevel === level 
                          ? 'border-blue-400 bg-blue-500/10' 
                          : 'border-white/10'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-base font-bold mb-1">{level}</div>
                        <div className="text-xs text-gray-400 mb-2">
                          {level === 'Propre' && 'Véhicule déjà entretenu'}
                          {level === 'Moyen' && 'Quelques salissures'}
                          {level === 'Très sale' && 'Nettoyage en profondeur'}
                        </div>
                        <div className="text-blue-400 font-semibold text-sm">
                          +{DIRT_LEVEL_PRICES[level]}€
                        </div>
                      </div>
                      {dirtLevel === level && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
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
                      <div className="text-blue-400 font-bold text-sm">{PRICES[vehicleType!]['Nettoyage Intensif']}€</div>
                    </div>

                    <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-semibold text-white text-sm">Type de service</div>
                        <div className="text-xs text-gray-400">Nettoyage Intensif</div>
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
    </section>
  );
}