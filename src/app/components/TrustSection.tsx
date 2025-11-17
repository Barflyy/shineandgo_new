"use client"

import { Shield, Award, Lock, CheckCircle2 } from "lucide-react"

export default function TrustSection() {
  const guarantees = [
    {
      icon: Shield,
      title: "Assurance RC Pro",
      description: "Votre véhicule est couvert par notre assurance responsabilité civile professionnelle pendant toute la durée du service.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Garantie Satisfaction 7 jours",
      description: "Si vous n'êtes pas 100% satisfait, nous revenons gratuitement pour une retouche ou vous remboursons intégralement.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: CheckCircle2,
      title: "Paiement après validation",
      description: "Vous payez uniquement après avoir inspecté et validé le résultat. C'est notre engagement qualité.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Lock,
      title: "Sécurité & Confidentialité",
      description: "Procédure stricte de gestion des clés. Vos données personnelles sont protégées et jamais partagées.",
      color: "from-amber-500 to-amber-600"
    }
  ]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-dark-50 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Vos garanties</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-dark-900 mb-4">
            Votre tranquillité d'esprit,
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              notre priorité
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            Nous prenons toutes les précautions pour que vous puissiez nous confier votre véhicule en toute sérénité
          </p>
        </div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {guarantees.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={item.title}
                className="group relative bg-white rounded-2xl p-6 border-2 border-dark-200 transition-all duration-300 hover:border-brand-300 hover:shadow-xl lg:hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                    <Icon className="w-7 h-7 text-dark-900" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-dark-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-dark-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-dark-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span>+150 clients satisfaits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>Noté 4.9/5 sur Google</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>Certifié detailing pro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span>Produits Koch-Chemie</span>
          </div>
        </div>
      </div>
    </section>
  )
}

