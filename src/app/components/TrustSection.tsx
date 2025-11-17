"use client"

import { Shield, Award, Clock, ThumbsUp, CreditCard, Lock } from "lucide-react"

export default function TrustSection() {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantie Satisfaction 7 jours",
      description: "Si vous n'êtes pas 100% satisfait, on revient gratuitement perfectionner le travail.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Produits professionnels",
      description: "Exclusivement Koch-Chemie et CarPro, utilisés par les detailers professionnels.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Ponctualité garantie",
      description: "On arrive à l'heure convenue, et on respecte la durée annoncée. Toujours.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ThumbsUp,
      title: "Paiement après validation",
      description: "Vous inspectez le résultat, et vous payez seulement si vous êtes satisfait.",
      color: "from-orange-500 to-red-500"
    }
  ]

  const badges = [
    {
      icon: CreditCard,
      text: "Paiement sécurisé",
      subtext: "Cash, carte, virement"
    },
    {
      icon: Lock,
      text: "Assurance RC Pro",
      subtext: "Couverture complète"
    },
    {
      icon: Shield,
      text: "Sans engagement",
      subtext: "Annulation gratuite 24h"
    }
  ]

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Nos engagements</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-6 px-4">
            Pourquoi nous
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              faire confiance ?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-dark-600 px-4">
            Nous prenons votre satisfaction au sérieux. Voici nos garanties.
          </p>
        </div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {guarantees.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="group relative bg-white rounded-2xl border-2 border-dark-200 p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mb-6 shadow-lg`}>
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-dark-900 mb-3">{item.title}</h3>
                <p className="text-sm text-dark-600 leading-relaxed">{item.description}</p>

                {/* Hover decoration */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            )
          })}
        </div>

        {/* Trust badges bar */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-dark-200 shadow-xl">
            {badges.map((badge, idx) => {
              const Icon = badge.icon
              return (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-dark-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-dark-900 text-sm">{badge.text}</div>
                    <div className="text-xs text-dark-600">{badge.subtext}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-12 text-center">
          <p className="text-dark-600 font-medium mb-4">
            ✓ Plus de 30 clients satisfaits ce mois-ci · ✓ Aucun client insatisfait depuis notre lancement
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">
            <Shield className="w-4 h-4" />
            <span>100% de nos clients nous recommandent</span>
          </div>
        </div>
      </div>
    </section>
  )
}
