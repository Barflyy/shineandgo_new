"use client"

import { ArrowRight, Play, Check, Crown, Sparkles as SparklesIcon, Star } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background luxueux - Marble texture effect */}
      <div className="absolute inset-0">
        {/* Marble veins effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q25 25 50 0 T100 0' stroke='white' fill='none' opacity='0.5'/%3E%3Cpath d='M0 50 Q25 75 50 50 T100 50' stroke='white' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Dramatic golden light from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-radial from-amber-600/20 via-yellow-600/10 to-transparent blur-[100px]"></div>
        
        {/* Side accent lights */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[600px] bg-gradient-radial from-amber-500/10 to-transparent blur-[80px]"></div>
        <div className="absolute top-1/3 -right-20 w-[400px] h-[600px] bg-gradient-radial from-yellow-500/10 to-transparent blur-[80px]"></div>
      </div>

      {/* Golden ornamental lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-30" style={{ top: '3px' }}></div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Luxury badge avec couronne */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative flex items-center gap-4 px-8 py-4 bg-black/80 backdrop-blur-2xl border-2 border-amber-500/40 rounded-full">
                <Crown className="w-6 h-6 text-amber-400" />
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="h-6 w-px bg-amber-500/30"></div>
                <span className="text-amber-100 font-serif text-sm tracking-[0.2em] uppercase">Excellence Premium</span>
              </div>
            </div>
          </div>

          {/* Titre repensé - Typographie élégante */}
          <div className="text-center space-y-8 mb-20">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500/50"></div>
                <SparklesIcon className="w-5 h-5 text-amber-400" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500/50"></div>
              </div>
              
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight">
                <span className="block text-white/90 font-light italic">L'Art du</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 font-normal" style={{
                  textShadow: '0 0 80px rgba(251, 191, 36, 0.3)'
                }}>
                  Detailing
                </span>
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed tracking-wide">
                Un service d'exception pour véhicules d'exception.
                <br />
                <span className="text-amber-400/90">Koch-Chemie Professional</span> · Garantie Showroom
              </p>
              
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/20 blur-2xl"></div>
                  <div className="relative bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 rounded-2xl px-8 py-6 backdrop-blur-xl">
                    <div className="text-5xl sm:text-6xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                      dès 65€
                    </div>
                    <div className="mt-2 text-xs tracking-[0.3em] text-amber-400/70 uppercase">Herve · Verviers · Liège</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs repensés - Layout vertical élégant */}
          <div className="flex flex-col items-center gap-6 mb-24">
            {/* CTA Principal - Design majestueux */}
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("hero_modern")}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full border-2 border-amber-300 shadow-2xl hover:shadow-amber-500/50 transition-all duration-500">
                <span className="text-black font-serif text-xl tracking-wide">Réserver un Créneau</span>
                <div className="h-8 w-px bg-black/20"></div>
                <ArrowRight className="w-6 h-6 text-black transition-transform group-hover:translate-x-2 duration-300" />
              </div>
            </a>
            
            {/* CTA Secondaire */}
            <button className="group flex items-center gap-3 text-amber-400/80 hover:text-amber-300 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500/30 flex items-center justify-center group-hover:border-amber-400/50 group-hover:bg-amber-500/10 transition-all duration-300">
                <Play className="w-5 h-5" />
              </div>
              <span className="text-sm tracking-wider uppercase font-light">Découvrir nos réalisations</span>
            </button>
          </div>

          {/* Social Proof Repensé - Layout horizontal raffiné */}
          <div className="flex flex-wrap items-center justify-center gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl"></div>
                <div className="relative text-5xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500">30+</div>
              </div>
              <div className="text-xs tracking-[0.3em] text-white/40 uppercase">Clients Premium</div>
              <div className="text-xs tracking-wider text-amber-400/60">ce mois</div>
            </div>
            
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
            
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full border border-amber-500/40 flex items-center justify-center bg-amber-500/5">
                  <Check className="w-7 h-7 text-amber-400" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-xs tracking-[0.3em] text-white/40 uppercase">Service Express</div>
              <div className="text-xs tracking-wider text-amber-400/60">90 minutes</div>
            </div>
            
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs tracking-[0.3em] text-white/40 uppercase">Excellence</div>
              <div className="text-xs tracking-wider text-amber-400/60">4.9/5 · 87 avis</div>
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

