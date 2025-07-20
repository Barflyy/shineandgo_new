'use client';

import { Check, Star, Zap } from 'lucide-react';
import { servicePacks } from '@/lib/packs';

export default function PricingTable() {
  return (
    <section id="services-section" className="py-24 bg-gradient-to-br from-slate-50/70 via-gray-50/80 to-white/90 relative overflow-hidden backdrop-blur-sm shadow-inner border-y border-white/40">
      {/* Enhanced background with sophisticated decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/30 rounded-full blur-2xl shadow-lg"></div>
        <div className="absolute bottom-20 right-1/5 w-28 h-28 bg-gradient-to-br from-purple-200/25 to-violet-300/20 rounded-full blur-xl shadow-md"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-300/25 rounded-full blur-lg shadow-sm"></div>
        
        {/* Enhanced pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(30deg,transparent_40%,theme(colors.gray.400)_40%,theme(colors.gray.400)_60%,transparent_60%)] bg-[length:20px_35px]"></div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/12 backdrop-blur-[0.5px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>🔥 OFFRE LIMITÉE -10%</span>
          </div>
          <h2 className="text-[clamp(1.5rem,1.2rem+2vw,2.25rem)] font-bold text-text-primary mb-4 drop-shadow-sm px-4 break-words leading-tight" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
            Choisissez votre formule (Prix barrés = prix normal)
          </h2>
          <p className="text-[clamp(1rem,0.9rem+0.8vw,1.25rem)] text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
            <span className="font-semibold text-orange-600">⚡ Seulement 15 créneaux disponibles cette semaine</span>
          </p>
        </div>

        {/* Enhanced pricing grid with modern design */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-100/20 rounded-full blur-xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {servicePacks.map((pack, index) => (
              <div
                key={pack.id}
                className={`relative group ${pack.popular ? 'md:-mt-4' : ''}`}
              >
                {/* Enhanced Popular Badge */}
                {pack.popular && (
                  <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-accent to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-lg ring-2 ring-white">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <span className="break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>Le plus populaire</span>
                    </div>
                  </div>
                )}

                {/* Enhanced Card with modern design */}
                <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border-2 h-full p-6 sm:p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] relative overflow-hidden ${pack.popular ? 'border-accent ring-2 ring-accent/20' : 'border-gray-200 hover:border-blue-300'}`}>
                  
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 opacity-5 ${pack.popular ? 'bg-gradient-to-br from-blue-400 to-indigo-600' : 'bg-gradient-to-br from-gray-400 to-slate-600'}`}></div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60"></div>
                  {pack.popular && (
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-accent to-blue-600 rounded-full opacity-40"></div>
                  )}
                  
                  {/* Enhanced header */}
                  <div className="text-center mb-6 sm:mb-8 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 break-words leading-tight" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                      {pack.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                      {pack.description}
                    </p>
                    
                    {/* Enhanced pricing with better visual hierarchy */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-xl text-gray-400 line-through font-medium">
                          {pack.originalPrice}€
                        </span>
                        <span className={`text-3xl sm:text-4xl font-bold ${pack.popular ? 'bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                          {pack.price}€
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold break-words ring-1 ring-green-200/50" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                        Économie : {pack.savings}€ (-10%)
                      </div>
                    </div>
                  </div>

                  {/* Enhanced duration badge */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-100/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200/50">
                      <span className="text-sm text-gray-700 font-medium">
                        ⏱️ Durée : {pack.duration}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced features */}
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
                    {pack.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm sm:text-base break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                        <div className="bg-green-100/80 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        </div>
                        <span className="leading-relaxed text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced CTA Button */}
                  <button className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative z-10 break-words ${pack.popular 
                    ? 'bg-gradient-to-r from-accent to-blue-600 hover:from-accent-hover hover:to-blue-700 text-white ring-2 ring-accent/20 hover:ring-accent/40' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 hover:shadow-xl border border-gray-300'
                  }`} style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                    {pack.buttonText}
                    {pack.popular && <div className="w-2 h-2 bg-white rounded-full animate-pulse ml-2 inline-block"></div>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced guarantee section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-green-50/80 via-white to-emerald-50/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-green-100/50 ring-1 ring-white/50 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>✅ Garantie satisfaction</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 break-words leading-tight" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
              Satisfait ou refait gratuitement
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
              Si vous n'êtes pas 100% satisfait du résultat, <span className="font-semibold text-green-600">on recommence gratuitement</span> ou vous êtes remboursé.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { icon: Star, text: "4.9/5 satisfaction", color: "text-yellow-500" },
                { icon: Check, text: "1500+ voitures transformées", color: "text-green-500" },
                { icon: Zap, text: "Résultat garanti", color: "text-blue-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-200/50 break-words" style={{ wordBreak: 'keep-all', hyphens: 'auto', overflowWrap: 'break-word' }}>
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 