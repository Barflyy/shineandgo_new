export default function PremiumValues() {
  const values = [
    { icon: "💎", title: "Finition showroom", desc: "Procédé manuel, microfibres dédiées, produits haut de gamme." },
    { icon: "🕰️", title: "Ponctualité & discrétion", desc: "Créneaux privés, intervention soignée chez vous." },
    { icon: "🛡️", title: "Satisfaction garantie", desc: "Inspection finale et paiement après validation." },
    { icon: "📅", title: "Week‑end prioritaire", desc: "Créneaux samedi/dimanche pour agendas chargés." },
  ]

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            L'exigence d'un service privé
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            Pensé pour préserver votre capital automobile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <div className="mb-4 text-2xl">{v.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

