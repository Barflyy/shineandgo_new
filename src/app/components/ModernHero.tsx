"use client"

import { ArrowRight, Play, Check } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function ModernHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black px-4">
      {/* Luxury golden gradient background */}
      <div className="absolute inset-0">
        {/* Top golden glow */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-amber-500/10 via-yellow-600/5 to-transparent"></div>
        
        {/* Bottom golden accent */}
        <div className="absolute bottom-0 inset-x-0 h-[400px] bg-gradient-to-t from-amber-900/10 to-transparent"></div>
        
        {/* Diagonal luxury accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-600/5"></div>
        
        {/* Radial golden spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
      </div>

      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-0 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Luxury trust badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 backdrop-blur-xl border border-amber-500/20 mb-6 sm:mb-8 animate-fade-in text-center shadow-[0_0_30px_rgba(251,191,36,0.15)]">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-amber-100">4.9/5 · Service d'Excellence</span>
          </div>

          {/* Main title - Ultra Premium */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 sm:mb-8 leading-[1.05] tracking-tight animate-fade-in-up">
            <span className="block text-white">Detailing Automobile</span>
            <span className="block mt-3 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              Prestige & Excellence
            </span>
            <span className="block mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/80 tracking-wide">
              L'Art du Soin Automobile
            </span>
          </h1>

          {/* Subtitle - Luxury Copy */}
          <p className="text-base sm:text-xl md:text-2xl text-white/60 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Une expérience de detailing haut de gamme, directement chez vous.
            <span className="block mt-3 text-white/80">Produits professionnels Koch-Chemie · Résultat showroom garanti</span>
            <span className="block mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">À partir de 65€</span>
            <span className="block mt-2 text-sm sm:text-base text-amber-400/80 tracking-wider">HERVE · VERVIERS · LIÈGE · BATTICE</span>
          </p>

          {/* Luxury CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("hero_modern")}
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black font-bold text-base sm:text-lg shadow-[0_0_40px_rgba(251,191,36,0.4)] active:scale-95 sm:hover:scale-105 sm:hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-500 w-full sm:w-auto touch-manipulation min-h-[60px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <span className="relative z-10">Réserver Maintenant</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <button className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border-2 border-amber-500/30 text-white font-semibold text-base sm:text-lg active:bg-white/10 sm:hover:bg-white/10 sm:hover:border-amber-500/50 transition-all duration-300 w-full sm:w-auto touch-manipulation min-h-[60px]">
              <Play className="w-5 h-5 text-amber-400" />
              <span>Voir le Résultat</span>
            </button>
          </div>

          {/* Luxury Social proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-amber-500/10">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 border-3 border-black flex items-center justify-center text-sm font-bold text-black shadow-lg">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-amber-400">30+</div>
                <div className="text-xs text-white/60 tracking-wide">CLIENTS CE MOIS</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-amber-500/10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg">
                <Check className="w-7 h-7 text-black font-bold" strokeWidth={3} />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-amber-400">90 min</div>
                <div className="text-xs text-white/60 tracking-wide">SERVICE COMPLET</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-amber-500/10">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-amber-400">4.9/5</div>
                <div className="text-xs text-white/60 tracking-wide">NOTE MOYENNE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-amber-500/30 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
        </div>
      </div>
    </section>
  )
}

