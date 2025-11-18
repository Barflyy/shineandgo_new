"use client"

import { Sparkles, Droplets, Car, Package } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function ModernServices() {
  const services = [
    {
      icon: Droplets,
      title: "Intérieur Premium",
      price: "65",
      duration: "45 min",
      features: [
        "Aspiration complète habitacle + coffre",
        "Nettoyage tableau de bord & console",
        "Vitres intérieures impeccables",
        "Désodorisation naturelle"
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: Car,
      title: "Extérieur Showroom",
      price: "85",
      duration: "50 min",
      features: [
        "Prélavage haute pression",
        "Lavage à la main 2 passes",
        "Séchage microfibre dédié",
        "Protection hydrophobe 6 semaines"
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      icon: Package,
      title: "Formule Complète",
      price: "120",
      duration: "90 min",
      features: [
        "Tout Intérieur + Extérieur",
        "Traitement cuirs & plastiques",
        "Jantes & pneus brillance profonde",
        "Garantie satisfaction 7 jours"
      ],
      gradient: "from-orange-500 to-red-500",
      popular: true
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
      {/* Luxury decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      {/* Golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-8 animate-fade-in shadow-[0_0_30px_rgba(251,191,36,0.15)]">
            <Sparkles className="w-4 h-4" />
            <span className="tracking-wider">NOS FORMULES</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 sm:mb-8 animate-fade-in-up">
            <span className="block text-white">Formules</span>
            <span className="block mt-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              Prestige
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            Chaque formule inclut : <span className="text-amber-400">déplacement gratuit · produits professionnels · garantie satisfaction</span>
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div 
                key={service.title}
                className={`group relative ${service.popular ? 'lg:-mt-4' : ''}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Luxury Popular badge */}
                {service.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black text-sm font-bold shadow-[0_0_40px_rgba(251,191,36,0.5)] flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span className="tracking-wide">CHOIX PRESTIGE</span>
                    </div>
                  </div>
                )}

                {/* Luxury Card */}
                <div className={`relative h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 transition-all duration-500 border-2 ${
                  service.popular 
                    ? 'border-amber-500/40 shadow-[0_0_60px_rgba(251,191,36,0.2)] hover:shadow-[0_0_80px_rgba(251,191,36,0.3)] lg:hover:-translate-y-3' 
                    : 'border-amber-500/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_rgba(251,191,36,0.15)] lg:hover:-translate-y-3'
                }`}>
                  
                  {/* Luxury Icon */}
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 sm:mb-8 shadow-[0_0_30px_rgba(251,191,36,0.3)] border border-amber-400/20`}>
                    <Icon className="w-9 h-9 text-white" />
                  </div>

                  {/* Luxury Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{service.title}</h3>
                  
                  {/* Luxury Duration */}
                  <div className="flex items-center gap-2 text-amber-400/80 text-sm sm:text-base mb-6 sm:mb-8">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{service.duration}</span>
                  </div>

                  {/* Luxury Price */}
                  <div className="mb-8 sm:mb-10 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-500/10 border-2 border-amber-500/30 shadow-[inset_0_0_30px_rgba(251,191,36,0.1)]">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent`}>
                        {service.price}€
                      </span>
                      <span className="text-white/60 text-lg sm:text-xl font-light">/ service</span>
                    </div>
                    <div className="mt-3 text-sm text-amber-400/80 font-light tracking-wide">
                      Prix tout compris · Déplacement gratuit
                    </div>
                  </div>

                  {/* Luxury Features */}
                  <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mt-0.5 shadow-[0_0_15px_rgba(251,191,36,0.3)]`}>
                          <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/80 text-sm sm:text-base leading-relaxed font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Luxury CTA */}
                  <a
                    href={`https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`service_${service.title.toLowerCase().replace(/\s+/g, "_")}`)}
                    className={`group/btn relative w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 active:scale-95 sm:hover:scale-105 touch-manipulation min-h-[60px] overflow-hidden ${
                      service.popular
                        ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)]'
                        : 'bg-white/10 backdrop-blur-xl border-2 border-amber-500/30 text-white hover:bg-white/15 hover:border-amber-500/50'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                    <span className="relative z-10">Réserver Maintenant</span>
                    <svg className="relative z-10 w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Luxury Additional info */}
        <div className="mt-20 text-center relative z-10">
          <p className="text-white/60 mb-8 text-base sm:text-lg font-light">
            <span className="text-amber-400">✓</span> Déplacement gratuit dans un rayon de 25km · 
            <span className="text-amber-400">✓</span> Paiement après validation · 
            <span className="text-amber-400">✓</span> Garantie satisfaction
          </p>
          <a
            href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20un%20devis%20personnalis%C3%A9"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border-2 border-amber-500/20 text-white text-base font-medium hover:bg-white/10 hover:border-amber-500/40 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Besoin d'un devis personnalisé ? Contactez-nous</span>
          </a>
        </div>
      </div>
    </section>
  )
}

