"use client"

import { ArrowRight, Play, Check } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function ModernHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-950 to-slate-950">
      {/* Simplified elegant gradient background */}
      <div className="absolute inset-0">
        {/* Top glow */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-600/20 via-purple-600/10 to-transparent"></div>
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        
        {/* Diagonal accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-600/5"></div>
      </div>

      {/* Clean noise texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Trust badge with subtle urgency */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 animate-fade-in">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
            </div>
            <span className="text-sm font-medium text-white/90">Noté 4.9/5 · Seulement 5 créneaux dispo cette semaine</span>
          </div>

          {/* Main title - Optimisé SEO Premium */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up px-4">
            Nettoyage Voiture Premium
            <span className="block mt-2 bg-gradient-to-r from-brand-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Herve · Verviers · Liège
            </span>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl text-white/90">
              Excellence Mobile à Domicile
            </span>
          </h1>

          {/* Subtitle - Vocabulaire Premium */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Nettoyage voiture professionnel à domicile. Produits Koch-Chemie exclusifs. 
            Finition niveau concession garantie. Service mobile en 90 minutes. À partir de 65€.
            <span className="block mt-2 text-base sm:text-lg text-white/60">Herve · Verviers · Liège · Battice · 25km autour</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12 md:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("hero_modern")}
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-base sm:text-lg shadow-glow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto touch-manipulation"
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <button className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto touch-manipulation">
              <Play className="w-5 h-5" />
              <span>Voir résultat</span>
            </button>
          </div>

          {/* Social proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-dark-900 flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">30+</div>
                <div className="text-xs text-white/60">Clients ce mois</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">90 min</div>
                <div className="text-xs text-white/60">Service complet</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">4.9/5</div>
                <div className="text-xs text-white/60">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
        </div>
      </div>
    </section>
  )
}

