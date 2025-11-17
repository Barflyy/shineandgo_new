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
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span>Avis clients vérifiés</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-6 px-4">
            Ils ont essayé,
            <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              ils adorent
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-dark-600 px-4">
            Plus de 30 clients satisfaits ce mois-ci dans la région de Liège
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 rounded-2xl bg-white border border-dark-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-dark-900 mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-dark-700">{stat.label}</div>
              <div className="text-xs text-dark-500 mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl border-2 border-dark-200 p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-yellow-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-dark-900" />
              </div>

              {/* Verified badge */}
              {testimonial.verified && (
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Vérifié</span>
                  </div>
                </div>
              )}

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="relative text-dark-700 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Service tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6">
                <span>{testimonial.service}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-dark-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-dark-900">{testimonial.name}</div>
                  <div className="flex items-center gap-1 text-xs text-dark-600">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
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
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-dark-900">4.9/5</span>
              </div>
              <div className="text-dark-700 font-medium mb-1">Noté sur Google</div>
              <div className="text-dark-600 text-sm">Basé sur 32 avis authentiques</div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-dark-200 text-dark-900 font-semibold hover:border-brand-500 hover:shadow-lg transition-all whitespace-nowrap"
            >
              <span>Voir tous les avis</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

