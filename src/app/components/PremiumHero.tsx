"use client"

import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function PremiumHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Premium gradient background avec depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">

          {/* Premium badge avec animation */}
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500 shadow-glow-sm"></span>
              </div>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold text-white">Service Premium · 4.9/5 · 5 places dispo</span>
            </div>
          </div>

          {/* Main headline - Optimisé SEO + Impact */}
          <div className="text-center mb-8 md:mb-10 animate-fade-in-up px-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
              L'Excellence Automobile
              <span className="block mt-2 md:mt-3 bg-gradient-to-r from-brand-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                à Votre Domicile
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-2">
              Service de detailing automobile premium mobile.
              <span className="block mt-2 text-base sm:text-lg md:text-xl text-white/60">
                Produits Koch-Chemie · Finition Showroom · 90 min
              </span>
            </p>
          </div>

          {/* Location badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 animate-fade-in-up px-2" style={{ animationDelay: '0.2s' }}>
            {['Herve', 'Verviers', 'Liège', 'Battice', 'Soumagne'].map((city) => (
              <span key={city} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/80 text-xs sm:text-sm font-medium">
                {city}
              </span>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("hero_premium")}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-6 rounded-2xl bg-gradient-to-r from-brand-500 via-brand-600 to-blue-600 text-white font-bold text-base sm:text-lg shadow-[0_20px_60px_-15px_rgba(14,165,233,0.5)] hover:shadow-[0_25px_70px_-15px_rgba(14,165,233,0.7)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden touch-manipulation"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative">Réserver mon créneau</span>
              <ArrowRight className="relative w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2" />
            </a>

            <a
              href="tel:+32472303701"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-6 rounded-2xl bg-white/10 backdrop-blur-2xl border-2 border-white/20 text-white font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 touch-manipulation"
            >
              <span>📞 Appeler directement</span>
            </a>
          </div>

          {/* Premium USPs - 3 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.5s' }}>
            {[
              {
                icon: Shield,
                title: "Garantie Satisfaction",
                desc: "7 jours ou remboursé",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Sparkles,
                title: "Finition Showroom",
                desc: "Niveau concession garanti",
                gradient: "from-brand-500 to-cyan-500"
              },
              {
                icon: Clock,
                title: "Service Express",
                desc: "90 minutes · À domicile",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-3 sm:mb-4 shadow-glow`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof bar */}
          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10 animate-fade-in-up px-4" style={{ animationDelay: '0.7s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[
                { value: "4.9/5", label: "Note moyenne", stars: true },
                { value: "42+", label: "Avis vérifiés" },
                { value: "90min", label: "Service complet" },
                { value: "100%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 font-display">
                    {stat.value}
                  </div>
                  {stat.stars && (
                    <div className="flex justify-center mb-1 sm:mb-2">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                  <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator élégant */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="flex flex-col items-center gap-2">
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
          <span className="text-xs text-white/40 font-medium">Défiler</span>
        </div>
      </div>
    </section>
  )
}

