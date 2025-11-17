"use client"

import { trackCall, trackWhatsApp, trackCalendly } from "@/lib/analytics"
import { Calendar, Phone, MessageCircle, Star, Clock, MapPin } from "lucide-react"

export default function PremiumFinalCTA() {
  const openCalendly = () => {
    try {
      trackCalendly("final_premium")
      window.open("https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go", "_blank", "noopener,noreferrer")
    } catch {}
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-200 backdrop-blur-xl mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-medium">Places limitées</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Réservez votre
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              créneau privé
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            À domicile ou en pick-up & return. Service premium disponible 7j/7.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* WhatsApp - Primary */}
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("cta_final")}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-[2px] shadow-[0_10px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl px-6 py-5 text-center">
                <div className="flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span className="font-bold text-white text-lg">WhatsApp</span>
                  <svg className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-emerald-100 text-xs mt-2">Réponse immédiate</div>
              </div>
            </a>

            {/* Calendly - Secondary */}
            <button
              onClick={openCalendly}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/20 px-6 py-5 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-6 h-6 text-white" />
                <span className="font-bold text-white text-lg">Agenda</span>
                <svg className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="text-slate-300 text-xs mt-2">Voir créneaux</div>
            </button>

            {/* Phone - Tertiary */}
            <a
              href="tel:+32472303701"
              onClick={() => trackCall("cta_final")}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/20 px-6 py-5 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-white" />
                <span className="font-bold text-white text-lg">Appeler</span>
                <svg className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="text-slate-300 text-xs mt-2">0472 30 37 01</div>
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3 fill-yellow-400" />
              <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-sm text-slate-400">30+ avis</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">90 min</div>
              <div className="text-sm text-slate-400">Durée moyenne</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">25 km</div>
              <div className="text-sm text-slate-400">Rayon d'action</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <svg className="w-8 h-8 text-emerald-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-slate-400">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            ✓ Paiement après validation · ✓ Créneaux week-end disponibles · ✓ Produits professionnels
          </p>
        </div>
      </div>
    </section>
  )
}

