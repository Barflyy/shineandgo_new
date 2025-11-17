"use client"

import Image from "next/image"
import { trackWhatsApp } from "@/lib/analytics"

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
    <section className="relative min-h-[90svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,#1f2937_10%,transparent),radial-gradient(900px_500px_at_90%_-20%,#0f172a_15%,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(229,192,123,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-slate-200 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Service privé premium
          </span>
        </div>

        {/* Title */}
        <div className="mt-8 text-center">
          <h1 className="mx-auto max-w-5xl text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Visual */}
        <div className="mt-10 md:mt-14">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src="/transformations/optimized/webp/apres02.webp"
                alt="Lavage premium – résultat showroom"
                fill
                sizes="100vw"
                className="object-cover opacity-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp("hero_premium")}
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 text-base md:text-lg font-semibold text-slate-900 shadow-[0_10px_40px_rgba(245,158,11,.25)] hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            <span className="text-xl">📲</span>
            {ctaText}
            <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Sub details */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2"><span>✋</span><span>À la main</span></div>
          <span className="h-4 w-px bg-slate-700" />
          <div className="flex items-center gap-2"><span>🗓️</span><span>Créneaux week‑end</span></div>
          <span className="h-4 w-px bg-slate-700" />
          <div className="flex items-center gap-2"><span>🚗</span><span>Pick‑up & return</span></div>
        </div>
      </div>
    </section>
  )
}

