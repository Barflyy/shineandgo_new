"use client"

import { ArrowRight, Sparkles, Calendar } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-br from-brand-500/30 to-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 md:mb-8 animate-pulse">
            <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-orange-500"></span>
            </div>
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-xs sm:text-sm font-bold text-white">5 créneaux dispos cette semaine</span>
          </div>

          {/* Main CTA headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 md:mb-6 leading-[1.1] px-2">
            Prêt pour une voiture
            <span className="block mt-2 bg-gradient-to-r from-brand-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              impeccable ?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Réservez votre créneau en 30 secondes. Service à domicile garanti.
            <span className="block mt-2 text-base sm:text-lg text-white/60">
              🚗 Intérieur + Extérieur · ✨ Finition Showroom · ⚡ 90 min
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-12 px-4">
            <a
              href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20r%C3%A9server%20un%20cr%C3%A9neau%20pour%20le%20nettoyage%20de%20ma%20voiture"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("final_cta")}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-6 rounded-2xl bg-gradient-to-r from-brand-500 via-brand-600 to-blue-600 text-white font-bold text-base sm:text-lg shadow-[0_25px_70px_-15px_rgba(14,165,233,0.6)] hover:shadow-[0_30px_80px_-15px_rgba(14,165,233,0.8)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden touch-manipulation"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Sparkles className="relative w-5 h-5 sm:w-6 sm:h-6" />
              <span className="relative">Réserver maintenant</span>
              <ArrowRight className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2" />
            </a>

            <a
              href="tel:+32472303701"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-6 rounded-2xl bg-white/10 backdrop-blur-2xl border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 touch-manipulation"
            >
              <span className="text-sm sm:text-base">📞 +32 472 30 37 01</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/10 px-4">
            {[
              { value: "< 2h", label: "Réponse garantie" },
              { value: "4.9/5", label: "Note moyenne" },
              { value: "7j", label: "Garantie satisfait" },
              { value: "0€", label: "Frais déplacement*" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 font-display">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 md:mt-8 text-xs text-white/40">
            * Dans un rayon de 25km autour de Herve
          </p>

        </div>
      </div>
    </section>
  )
}
