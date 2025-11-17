"use client"

import { ArrowRight, Sparkles, Clock, Shield } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-medium text-white/90">Réservez maintenant</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Prêt à redonner vie
            <span className="block bg-gradient-to-r from-brand-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              à votre véhicule ?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Réservez votre créneau en 2 minutes. Service à domicile dans les 48h.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20réserver%20un%20nettoyage%20premium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("final_cta")}
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold text-lg shadow-glow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span>Réserver par WhatsApp</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+32472303701"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <span>Appeler maintenant</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-400" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">48h</div>
                <div className="text-xs text-white/60">Intervention rapide</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand-400" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">100%</div>
                <div className="text-xs text-white/60">Satisfaction garantie</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-brand-400" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">4.9/5</div>
                <div className="text-xs text-white/60">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
