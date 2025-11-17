"use client"

import Image from "next/image"
import { trackWhatsApp } from "@/lib/analytics"
import { Sparkles, Star } from "lucide-react"

interface PremiumHeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function PremiumHero({
  title = "Conciergerie de lavage auto à domicile",
  subtitle = "Finition showroom à la main. Discrétion, ponctualité, priorité week‑end. Herve, Verviers, Liège.",
  ctaText = "Réserver un créneau privé",
  ctaHref = "https://wa.me/32472303701",
}: PremiumHeroProps) {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Badge */}
        <div className="flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-medium">Service premium disponible</span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-12 text-center">
          <h1 className="mx-auto max-w-5xl text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            {title.split(' ').slice(0, 3).join(' ')}
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              {title.split(' ').slice(3).join(' ')}
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* Visual with floating effect */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto max-w-6xl group">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:shadow-blue-500/20">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/transformations/optimized/webp/apres02.webp"
                  alt="Lavage premium – résultat showroom"
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Floating badges on image */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <div className="backdrop-blur-xl bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5</span>
                  </div>
                  <div className="backdrop-blur-xl bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("hero_premium")}
            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_80px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <span className="text-2xl">📲</span>
            <span>{ctaText}</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="tel:+32472303701"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-5 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
          >
            <span className="text-2xl">📞</span>
            <span>Appeler maintenant</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">100% à la main</span>
          </div>
          <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Créneaux week-end</span>
          </div>
          <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Satisfaction garantie</span>
          </div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

