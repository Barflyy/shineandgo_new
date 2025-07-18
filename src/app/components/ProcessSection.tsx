'use client';

import { Calendar, Truck, Star } from 'lucide-react';
import { Card } from './Card';

export default function ProcessSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Réservez en 2 min',
      description: 'Choisissez votre créneau idéal en ligne. Confirmation immédiate + rappel automatique.',
      details: ['⏰ Créneaux 7j/7 de 8h à 20h', '📱 Confirmation SMS immédiate', '🔄 Annulation gratuite 24h'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      iconBg: 'from-blue-100 to-indigo-100'
    },
    {
      icon: Truck,
      title: 'On arrive chez vous',
      description: 'Équipement pro + produits premium inclus. Installation en 5 min, zéro contrainte.',
      details: ['🚚 Équipement complet fourni', '⏱️ Ponctualité garantie (ou 10€ offerts)', '💧 Seul besoin : un point d\'eau'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      iconBg: 'from-green-100 to-emerald-100'
    },
    {
      icon: Star,
      title: 'Admirez le résultat',
      description: 'Voiture showroom en 90 min chrono. Garantie WOW! ou on recommence gratuitement.',
      details: ['✨ Résultat garanti niveau concession', '🛡️ Garantie satisfaction 100%', '💡 Conseils d\'entretien offerts'],
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      iconBg: 'from-purple-100 to-violet-100'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white/90 via-slate-50/50 to-gray-50/80 relative overflow-hidden backdrop-blur-sm border-y border-white/30 shadow-lg">
      {/* Enhanced background with sophisticated decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-200/25 to-sky-300/35 rounded-full blur-2xl shadow-md"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-indigo-300/25 rounded-full blur-xl shadow-sm"></div>
        <div className="absolute top-1/2 right-1/5 w-16 h-16 bg-gradient-to-br from-green-200/35 to-emerald-300/30 rounded-full blur-lg shadow-sm"></div>
        
        {/* Enhanced wave pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(45deg,transparent_25%,theme(colors.slate.400)_25%,theme(colors.slate.400)_26%,transparent_26%,transparent_74%,theme(colors.slate.400)_74%,theme(colors.slate.400)_75%,transparent_75%),linear-gradient(-45deg,transparent_25%,theme(colors.slate.400)_25%,theme(colors.slate.400)_26%,transparent_26%,transparent_74%,theme(colors.slate.400)_74%,theme(colors.slate.400)_75%,transparent_75%)] bg-[length:20px_20px]"></div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>🔄 Processus simple</span>
          </div>
          <h2 className="text-[clamp(1.5rem,1.2rem+2vw,2.25rem)] font-bold text-text-primary mb-4 drop-shadow-sm px-4 break-words leading-tight" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
            Comment ça marche ?
          </h2>
          <p className="text-[clamp(1rem,0.9rem+0.8vw,1.25rem)] text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
            3 étapes simples pour transformer votre voiture. <span className="font-semibold text-blue-600">Plus simple qu'une livraison pizza !</span>
          </p>
        </div>

        {/* Enhanced Process Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                {/* Mobile connector (for steps after the first) */}
                {index > 0 && (
                  <div className="md:hidden absolute -top-4 left-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-200 to-transparent transform -translate-x-1/2"></div>
                )}
                
                <Card className="text-center h-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100/50 ring-1 ring-white/50 backdrop-blur-sm">
                  {/* Enhanced step number */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.bgColor} shadow-xl ring-1 ring-white/50 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center`}>
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${step.iconBg} shadow-lg flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg ring-2 ring-white">
                      {index + 1}
                    </div>
                    {/* Decorative glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-xl scale-150 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Enhanced content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 drop-shadow-sm break-words leading-tight" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                    {step.description}
                  </p>

                  {/* Enhanced features list */}
                  <ul className="space-y-2 sm:space-y-3 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-50/80 via-white to-slate-50/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100/50 ring-1 ring-white/50 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>✅ Simplicité garantie</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words leading-tight" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
              Prêt en 2 minutes chrono ?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
              Plus de 90% de nos clients disent que c'est <span className="font-semibold text-blue-600">"plus simple qu'une commande en ligne"</span>
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ring-2 ring-green-200/50 hover:ring-green-300/70 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
              🚀 Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 