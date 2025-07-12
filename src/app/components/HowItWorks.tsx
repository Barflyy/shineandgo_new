'use client';

import { Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-accent text-sm font-medium">Processus simplifié</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Comment ça marche ?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Un processus simple en 3 étapes pour un résultat exceptionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Étape 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-500">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Réservez en 60 s</h3>
                <p className="text-gray-300 text-base leading-relaxed flex-grow">
                  Formulaire ou WhatsApp pour un devis rapide
                </p>
              </div>
            </div>
            {/* Arrow connector */}
            <div className="hidden md:block absolute top-1/2 -right-6 z-20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-500">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">On vient chez vous</h3>
                <p className="text-gray-300 text-base leading-relaxed flex-grow">
                  Eau + 220 V à prévoir
                </p>
              </div>
            </div>
            {/* Arrow connector */}
            <div className="hidden md:block absolute top-1/2 -right-6 z-20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-500">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Admirez le résultat</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-3 flex-grow">
                  Résultat garanti
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
                  <span className="text-green-300 text-sm font-medium">🛡️ Garantie Wipe-&-Wow incluse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 