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
    <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-dark-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-50 text-brand-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Nos formules</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4 md:mb-6 animate-fade-in-up px-2">
            Choisissez votre
            <span className="block mt-1 bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              niveau de brillance
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-dark-600 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Service mobile premium · Produits pro · Résultat garanti
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
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold shadow-lg flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Le plus populaire</span>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full rounded-2xl md:rounded-3xl bg-white p-5 sm:p-6 md:p-8 transition-all duration-500 border-2 ${
                  service.popular
                    ? 'border-orange-200 shadow-2xl hover:shadow-orange-100 lg:hover:-translate-y-2'
                    : 'border-dark-200 shadow-xl hover:shadow-2xl lg:hover:-translate-y-2'
                }`}>

                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-900 mb-2">{service.title}</h3>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-dark-600 text-xs sm:text-sm mb-4 sm:mb-6">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service.duration}</span>
                  </div>

                  {/* Price */}
                  <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-dark-200">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl sm:text-5xl font-bold text-dark-900`}>
                        {service.price}€
                      </span>
                      <span className="text-dark-500 text-base sm:text-lg">/ service</span>
                    </div>
                    <div className="mt-1.5 sm:mt-2 text-xs text-dark-600">
                      Prix tout compris · Déplacement gratuit
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                        <div className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}>
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-dark-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`service_${service.title.toLowerCase().replace(/\s+/g, "_")}`)}
                    className={`group/btn w-full flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 touch-manipulation ${
                      service.popular
                        ? `bg-gradient-to-r ${service.gradient} shadow-lg hover:shadow-xl`
                        : `bg-gradient-to-r ${service.gradient} shadow-lg hover:shadow-xl`
                    }`}
                  >
                    <span>Réserver</span>
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center px-4">
          <p className="text-xs sm:text-sm md:text-base text-dark-600 mb-4 sm:mb-6">
            ✓ Déplacement gratuit dans un rayon de 25km · ✓ Paiement après validation · ✓ Garantie satisfaction
          </p>
          <a
            href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20un%20devis%20personnalis%C3%A9"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-dark-100 text-dark-700 text-xs sm:text-sm font-medium hover:bg-dark-200 transition-colors touch-manipulation"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden sm:inline">Besoin d'un devis personnalisé ? Contactez-nous</span>
            <span className="sm:hidden">Devis personnalisé</span>
          </a>
        </div>
      </div>
    </section>
  )
}

