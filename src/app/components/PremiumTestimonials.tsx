import { Star, Quote, MapPin } from "lucide-react"

export default function PremiumTestimonials() {
  const reviews = [
    { 
      name: "Marie L.", 
      city: "Liège", 
      quote: "Service impeccable et discret", 
      text: "Réservation simple, voiture nickel sans que je doive me déplacer. Un vrai gain de temps !",
      rating: 5,
      initials: "ML",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Pierre D.", 
      city: "Verviers", 
      quote: "Rien à voir avec un carwash", 
      text: "Intérieur satiné, cuir nourri, jantes parfaites. C'est du travail de pro, je recommande vivement.",
      rating: 5,
      initials: "PD",
      color: "from-purple-500 to-purple-600"
    },
    { 
      name: "Sophie V.", 
      city: "Spa", 
      quote: "Ponctualité et qualité au rendez-vous", 
      text: "Prise de clés le matin, restitution à l'heure. Résultat showroom, exactement ce que j'attendais.",
      rating: 5,
      initials: "SV",
      color: "from-emerald-500 to-emerald-600"
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="testimonials-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span>Avis clients</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Ils nous font
            <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              confiance
            </span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-slate-900">4.9/5</div>
              <div className="text-sm text-slate-600">Note moyenne</div>
            </div>
            <div className="hidden sm:block h-16 w-px bg-slate-300" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">30+</div>
              <div className="text-sm text-slate-600">Clients satisfaits</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <div 
              key={review.name}
              className="group relative"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-slate-900" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="relative text-lg font-semibold text-slate-900 mb-4">
                  "{review.quote}"
                </blockquote>

                {/* Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{review.name}</div>
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <MapPin className="w-3 h-3" />
                      <span>{review.city}</span>
                    </div>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Vérifié</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a 
            href="https://g.page/r/REVIEW_LINK/review" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-900 font-semibold hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span>Voir tous les avis</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

