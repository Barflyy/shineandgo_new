import { Shield, Clock, Sparkles, Calendar } from "lucide-react"

export default function PremiumValues() {
  const values = [
    { 
      icon: Sparkles, 
      title: "Finition showroom", 
      desc: "Procédé manuel, microfibres dédiées, produits haut de gamme.",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: Clock, 
      title: "Ponctualité & discrétion", 
      desc: "Créneaux privés, intervention soignée chez vous.",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: Shield, 
      title: "Satisfaction garantie", 
      desc: "Inspection finale et paiement après validation.",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      icon: Calendar, 
      title: "Week-end prioritaire", 
      desc: "Créneaux samedi/dimanche pour agendas chargés.",
      color: "from-amber-500 to-amber-600"
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Notre engagement</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            L'exigence d'un
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              service privé
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Pensé pour préserver votre capital automobile avec le plus grand soin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon
            return (
              <div 
                key={v.title} 
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300">
                  {/* Gradient top border on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br ${v.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                  
                  {/* Hover decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-slate-50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900">30+</div>
              <div className="text-sm text-slate-600 mt-1">Clients satisfaits</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-slate-300" />
            <div>
              <div className="text-3xl font-bold text-slate-900">4.9/5</div>
              <div className="text-sm text-slate-600 mt-1">Note moyenne</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-slate-300" />
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-600 mt-1">À la main</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-slate-300" />
            <div>
              <div className="text-3xl font-bold text-slate-900">25km</div>
              <div className="text-sm text-slate-600 mt-1">Rayon d'action</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

