"use client"

import { Sparkles, Droplets, Car, Package } from "lucide-react"
import { trackWhatsApp } from "@/lib/analytics"

export default function ModernServices() {
  const services = [
    {
      icon: Droplets,
      title: "Intérieur Premium",
      price: "49",
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
      price: "69",
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
      price: "99",
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
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-dark-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Nos formules</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-6 animate-fade-in-up px-4">
            Choisissez votre
            <span className="block bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              niveau de brillance
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-dark-600 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            Service mobile premium · Produits professionnels · Résultat garanti
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
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
                <div className={`relative h-full rounded-2xl md:rounded-3xl bg-white p-6 md:p-8 transition-all duration-500 border-2 ${
                  service.popular 
                    ? 'border-orange-200 shadow-2xl hover:shadow-orange-100 lg:hover:-translate-y-2' 
                    : 'border-dark-200 shadow-xl hover:shadow-2xl lg:hover:-translate-y-2'
                }`}>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} style={{
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`
                      }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{service.title}</h3>
                  
                  {/* Duration */}
                  <div className="flex items-center gap-2 text-dark-600 text-sm mb-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service.duration}</span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-bold bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                        {service.price}€
                      </span>
                      <span className="text-dark-500">/ service</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-dark-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`service_${service.title.toLowerCase().replace(/\s+/g, "_")}`)}
                    className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 ${
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
        <div className="mt-16 text-center">
          <p className="text-dark-600 mb-6">
            ✓ Déplacement gratuit dans un rayon de 25km · ✓ Paiement après validation · ✓ Garantie satisfaction
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-100 text-dark-700 text-sm font-medium">
            <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Besoin d'un devis personnalisé ? Contactez-nous</span>
          </div>
        </div>
      </div>
    </section>
  )
}

