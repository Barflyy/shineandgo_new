"use client"

import { Calendar, MapPin, Sparkles, Check } from "lucide-react"

export default function ModernProcess() {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Réservation instantanée",
      description: "Choisissez votre créneau en 2 clics via WhatsApp, téléphone ou notre agenda en ligne.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: MapPin,
      title: "On vient à vous",
      description: "Notre équipe se déplace à votre domicile ou bureau avec tout le matériel professionnel.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Transformation",
      description: "90 minutes de detailing premium avec produits Koch-Chemie. Vous vaquez à vos occupations.",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "04",
      icon: Check,
      title: "Résultat showroom",
      description: "Inspection finale ensemble, paiement après validation. Garantie satisfaction 7 jours.",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section className="relative py-32 bg-dark-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white/90 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Simple & rapide</span>
          </div>
          
          <h2 className="text-fluid-4xl font-display font-bold text-white mb-6">
            Comment ça marche ?
          </h2>
          
          <p className="text-fluid-lg text-white/70 max-w-2xl mx-auto">
            Un service pensé pour vous faire gagner du temps tout en offrant un résultat exceptionnel
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === steps.length - 1
            
            return (
              <div key={step.number} className="relative">
                {/* Connecting line */}
                {!isLast && (
                  <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
                )}

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 last:mb-0">
                  {/* Content - Left on even, Right on odd */}
                  <div className={`${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} p-1 shadow-glow`}>
                        <div className="w-full h-full rounded-3xl bg-dark-900 flex items-center justify-center">
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 pt-4">
                        <div className={`text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-4`}>
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-white/70 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual - Right on even, Left on odd */}
                  <div className={`${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`relative aspect-video rounded-3xl bg-gradient-to-br ${step.color} p-1 shadow-glow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-2`}>
                      <div className="w-full h-full rounded-3xl bg-dark-800 flex items-center justify-center overflow-hidden">
                        <div className={`text-9xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20`}>
                          {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-left">
              <div className="text-white font-semibold mb-1">Prêt à commencer ?</div>
              <div className="text-white/60 text-sm">Réservez votre créneau en moins de 2 minutes</div>
            </div>
            <a
              href="https://wa.me/32472303701"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Réserver maintenant</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

