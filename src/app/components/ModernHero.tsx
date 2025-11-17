"use client"

import { ArrowRight, Play, Check } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function ModernHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-40"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 animate-fade-in">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
            </div>
            <span className="text-sm font-medium text-white/90">Noté 4.9/5 · +30 clients satisfaits ce mois</span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up px-4">
            Votre voiture mérite
            <span className="block mt-2 bg-gradient-to-r from-brand-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              le traitement VIP
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Service mobile premium de detailing automobile. À domicile ou en pick-up.
            <span className="block mt-2 text-base sm:text-lg text-white/60">Herve · Verviers · Liège · 25km autour</span>
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

