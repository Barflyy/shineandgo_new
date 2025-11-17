"use client"

import { Shield, Clock, Award, Sparkles, Check, X } from "lucide-react"

export default function PremiumTrustBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Garantie 7 jours",
      description: "Satisfaction garantie ou remboursé",
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
      description: "90 minutes à votre domicile",
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
      feature: "Service à domicile",
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
      feature: "Paiement après validation",
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
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-dark-900 mb-6">
            Pourquoi choisir
            <span className="block mt-2 bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Shine&Go ?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-2xl mx-auto">
            L'excellence du service premium avec la commodité du mobile
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="group relative">
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-dark-100 hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-dark-900 mb-10">
            Shine&Go vs Lavages traditionnels
          </h3>

          <div className="bg-white rounded-3xl shadow-2xl border-2 border-dark-100 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-br from-slate-50 to-white border-b-2 border-dark-100">
              <div className="text-sm font-semibold text-dark-600">Caractéristiques</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-bold shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  <span>Shine&Go</span>
                </div>
              </div>
              <div className="text-center text-sm font-semibold text-dark-600">
                Lavages classiques
              </div>
            </div>

            {/* Table rows */}
            <div className="divide-y divide-dark-100">
              {comparison.map((item, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="text-sm font-medium text-dark-700 flex items-center">
                    {item.feature}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.us ? (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-dark-200 flex items-center justify-center">
                        <X className="w-5 h-5 text-dark-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.others ? (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-dark-200 flex items-center justify-center">
                        <X className="w-5 h-5 text-dark-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            { icon: "=", text: "Paiement sécurisé" },
            { icon: "=á", text: "RC Pro assurée" },
            { icon: "P", text: "100% Satisfaction" },
            { icon: "=ñ", text: "Réservation facile" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-dark-100 shadow-lg">
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-dark-700">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-16 text-center">
          <p className="text-lg text-dark-600">
            <span className="font-bold text-brand-600">30+ clients satisfaits</span> ce mois-ci ·
            <span className="font-bold text-brand-600"> 0 client insatisfait</span> depuis le lancement
          </p>
        </div>

      </div>
    </section>
  )
}
