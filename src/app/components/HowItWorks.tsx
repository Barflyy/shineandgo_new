'use client';

import { Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-accent text-xs sm:text-sm font-medium">Processus simplifié</span>
          </div>
          <h2 className="text-[clamp(1.2rem,4vw,1.75rem)] font-semibold text-balance break-words hyphens-auto text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Comment ça marche ?
          </h2>
          <p className="text-[clamp(1rem,3.5vw,1.25rem)] break-words hyphens-auto text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Un processus simple en 3 étapes pour un résultat exceptionnel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 lg:mt-16">
          {/* Étape 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-500">
                    <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 break-words hyphens-auto">Réservez en 60 s</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow break-words hyphens-auto">
                  Formulaire ou WhatsApp pour un devis rapide
                </p>
              </div>
            </div>
            {/* Arrow connector */}
            <div className="hidden lg:block absolute top-1/2 -right-6 z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-500">
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 break-words hyphens-auto">On vient chez vous</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow break-words hyphens-auto">
                  Eau + 220 V à prévoir
                </p>
              </div>
            </div>
            {/* Arrow connector */}
            <div className="hidden lg:block absolute top-1/2 -right-6 z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="group relative sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-500">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 break-words hyphens-auto">Admirez le résultat</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 flex-grow break-words hyphens-auto">
                  Résultat garanti
                </p>
                <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
                  <span className="text-green-300 text-xs sm:text-sm font-medium">🛡️ Garantie Wipe-&-Wow incluse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 