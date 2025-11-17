"use client"

import { Shield, Clock, Award, Sparkles, Check, X } from "lucide-react"

export default function PremiumTrustBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Garantie 7 jours",
      description: "Satisfaction garantie ou rembourse",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Sparkles,
      title: "Produits Premium",
      description: "Koch-Chemie & CarPro exclusifs",
      gradient: "from-brand-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Service Express",
      description: "90 minutes a votre domicile",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Finition Showroom",
      description: "Niveau concession garanti",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const comparison = [
    {
      feature: "Service a domicile",
      us: true,
      others: false
    },
    {
      feature: "Produits professionnels",
      us: true,
      others: false
    },
    {
      feature: "Garantie satisfaction",
      us: true,
      others: false
    },
    {
      feature: "Paiement apres validation",
      us: true,
      others: false
    },
    {
      feature: "Protection hydrophobe incluse",
      us: true,
      others: false
    }
  ]

  return (
    <section className="relative py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-4 md:mb-6 px-2">
            Pourquoi choisir
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Shine&Go ?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark-600 max-w-2xl mx-auto px-4">
            Excellence du service premium avec la commodite du mobile
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-20 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="group relative">
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white border-2 border-dark-100 hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-3 sm:mb-4 shadow-lg`}>
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto px-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-dark-900 mb-8 md:mb-10">
            Shine&Go vs Lavages traditionnels
          </h3>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-dark-100 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 bg-gradient-to-br from-slate-50 to-white border-b-2 border-dark-100">
              <div className="text-xs sm:text-sm font-semibold text-dark-600">Caracteristiques</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs sm:text-sm font-bold shadow-lg">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Shine&Go</span>
                  <span className="sm:hidden">Nous</span>
                </div>
              </div>
              <div className="text-center text-xs sm:text-sm font-semibold text-dark-600">
                <span className="hidden sm:inline">Lavages classiques</span>
                <span className="sm:hidden">Autres</span>
              </div>
            </div>

            {/* Table rows */}
            <div className="divide-y divide-dark-100">
              {comparison.map((item, i) => (
                <div key={i} className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="text-xs sm:text-sm font-medium text-dark-700 flex items-center">
                    {item.feature}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.us ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-dark-200 flex items-center justify-center">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-dark-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.others ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-dark-200 flex items-center justify-center">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-dark-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-4">
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border-2 border-dark-100 shadow-lg">
            <span className="text-xl sm:text-2xl">🔒</span>
            <span className="text-xs sm:text-sm font-semibold text-dark-700">Paiement securise</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border-2 border-dark-100 shadow-lg">
            <span className="text-xl sm:text-2xl">🛡️</span>
            <span className="text-xs sm:text-sm font-semibold text-dark-700">RC Pro assuree</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border-2 border-dark-100 shadow-lg">
            <span className="text-xl sm:text-2xl">⭐</span>
            <span className="text-xs sm:text-sm font-semibold text-dark-700">100% Satisfaction</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border-2 border-dark-100 shadow-lg">
            <span className="text-xl sm:text-2xl">📱</span>
            <span className="text-xs sm:text-sm font-semibold text-dark-700">Reservation facile</span>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-base sm:text-lg text-dark-600">
            <span className="font-bold text-brand-600">30+ clients satisfaits</span> ce mois-ci -
            <span className="font-bold text-brand-600"> 0 client insatisfait</span> depuis le lancement
          </p>
        </div>

      </div>
    </section>
  )
}
