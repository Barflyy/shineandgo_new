"use client"

import { Star, Quote, MapPin, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function RealTestimonials() {
  const testimonials = [
    {
      name: "Thomas B.",
      location: "Herve",
      date: "Il y a 2 semaines",
      rating: 5,
      text: "Service impeccable ! Ma BMW X5 avait 3 ans sans nettoyage professionnel. Le résultat est bluffant, on dirait qu'elle sort de chez le concessionnaire. L'équipe est ponctuelle et professionnelle.",
      service: "Formule Complète",
      verified: true,
      avatar: "TB"
    },
    {
      name: "Sophie M.",
      location: "Liège Centre",
      date: "Il y a 1 semaine",
      rating: 5,
      text: "Franchement impressionnée ! J'avais des taches de café sur les sièges depuis des mois, impossible à enlever. Ils ont tout fait partir. Le service à domicile est tellement pratique, je recommande à 200%.",
      service: "Nettoyage Intérieur",
      verified: true,
      avatar: "SM"
    },
    {
      name: "Marc L.",
      location: "Verviers",
      date: "Il y a 3 jours",
      rating: 5,
      text: "Meilleur investissement pour ma voiture cette année. Le detailing extérieur avec la protection hydrophobe est incroyable. L'eau perle littéralement sur la carrosserie. Prix honnête, résultat pro.",
      service: "Extérieur Showroom",
      verified: true,
      avatar: "ML"
    }
  ]

  const stats = [
    { value: "4.9/5", label: "Note moyenne", sublabel: "Sur 32 avis" },
    { value: "100%", label: "Satisfaction", sublabel: "Client garanti" },
    { value: "48h", label: "Réponse", sublabel: "Moyenne" },
    { value: "30+", label: "Clients", sublabel: "Ce mois-ci" }
  ]

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
            <span>Avis clients vérifiés</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 mb-4 md:mb-6 px-4">
            Ils ont essayé,
            <span className="block mt-1 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              ils adorent
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-dark-600 px-4">
            Plus de 30 clients satisfaits ce mois-ci dans la région de Liège
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white border border-dark-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-dark-700">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-dark-500 mt-0.5 sm:mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl sm:rounded-2xl border-2 border-dark-200 p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-yellow-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 opacity-10">
                <Quote className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-dark-900" />
              </div>

              {/* Verified badge */}
              {testimonial.verified && (
                <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6">
                  <div className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] sm:text-xs font-semibold">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Vérifié</span>
                  </div>
                </div>
              )}

              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 mt-6 sm:mt-7 md:mt-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="relative text-dark-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Service tag */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-medium mb-4 sm:mb-5 md:mb-6">
                <span>{testimonial.service}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-dark-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm sm:text-base text-dark-900">{testimonial.name}</div>
                  <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-dark-600">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                    <span className="truncate">{testimonial.location}</span>
                    <span className="text-dark-400">·</span>
                    <span className="whitespace-nowrap">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-sm sm:text-base text-dark-900">4.9/5</span>
              </div>
              <div className="text-dark-700 font-medium text-sm sm:text-base mb-0.5 sm:mb-1">Noté sur Google</div>
              <div className="text-dark-600 text-xs sm:text-sm">Basé sur 32 avis authentiques</div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border-2 border-dark-200 text-dark-900 font-semibold text-sm sm:text-base hover:border-brand-500 hover:shadow-lg transition-all whitespace-nowrap touch-manipulation"
            >
              <span>Voir tous les avis</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

