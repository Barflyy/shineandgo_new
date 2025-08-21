export default function PremiumTestimonials() {
  const reviews = [
    { name: "Marie", city: "Liège", quote: "Service impeccable et discret.", text: "Réservation simple, voiture nickel sans que je doive me déplacer." },
    { name: "Pierre", city: "Verviers", quote: "Rien à voir avec un carwash.", text: "Intérieur satiné, cuir nourri, jantes parfaites." },
    { name: "Sophie", city: "Spa", quote: "Prise de clés le matin, restitution à l'heure.", text: "Résultat showroom, je recommande." },
  ] as const

  return (
    <section className="relative py-16 md:py-20 bg-slate-50" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">Avis vérifiés</h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex text-yellow-400">{Array.from({ length: 5 }).map((_, i) => (<span key={i}>⭐</span>))}</div>
            <span className="text-xl font-semibold text-slate-900">4,9/5 — 30+ avis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 text-white grid place-items-center text-2xl">👤</div>
                <blockquote className="text-slate-700 italic">« {r.quote} »</blockquote>
                <p className="mt-4 text-sm text-slate-600">{r.text}</p>
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{r.name}</p>
                  <p className="text-sm text-slate-600">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

