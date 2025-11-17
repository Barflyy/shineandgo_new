import { trackWhatsApp } from "@/lib/analytics"
import { Check, Sparkles } from "lucide-react"

interface Offer {
  name: string;
  price: string;
  bullets: readonly string[];
  href: string;
  theme: "gradient" | "dark";
  tag?: string;
  duration?: string;
}

export default function PremiumOffers() {
  const offers: Offer[] = [
    {
      name: "Essentiel Privé",
      price: "150",
      duration: "90 min",
      bullets: [
        "Extérieur à la main: prélavage, contact, jantes, vitres, dressing pneus",
        "Intérieur propre & net: dépoussiérage, aspirateur habitacle + coffre",
        "Protection rapide hydrophobe (~2–6 semaines)",
      ],
      href: "https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule Essentiel Privé",
      theme: "gradient",
    },
    {
      name: "Signature Privé",
      price: "249",
      duration: "120 min",
      bullets: [
        "Tout l'Essentiel + intérieur approfondi (aérateurs, contre‑portes, console)",
        "Finitions premium: dressing plastiques satiné, soin cuirs",
        "Protection renforcée (~2–3 mois)",
      ],
      href: "https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule Signature Privé",
      theme: "dark",
      tag: "Recommandé",
    },
  ]

  return (
    <section id="tarifs" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Prestations Premium</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Deux formules,
            <span className="block bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">
              zéro compromis
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Pas de lavage express. Seulement du travail de qualité, 
            avec des produits professionnels et un résultat showroom.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {offers.map((offer, idx) => (
            <div
              key={offer.name}
              className={`group relative ${
                offer.tag 
                  ? 'lg:scale-105 lg:-translate-y-2' 
                  : ''
              }`}
            >
              {/* Tag Badge */}
              {offer.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{offer.tag}</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-3xl overflow-hidden transition-all duration-300 ${
                  offer.theme === "dark"
                    ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl hover:shadow-slate-900/50'
                    : 'bg-white border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-blue-200'
                } ${offer.tag ? 'ring-2 ring-amber-400/20' : ''}`}
              >
                {/* Gradient Overlay for dark theme */}
                {offer.theme === "dark" && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-slate-900/50 pointer-events-none" />
                )}

                <div className="relative p-8 md:p-10">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
                      offer.theme === "dark" ? 'text-white' : 'text-slate-900'
                    }`}>
                      {offer.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-medium opacity-60">À partir de</span>
                      <span className={`text-5xl md:text-6xl font-bold tracking-tight ${
                        offer.theme === "dark" 
                          ? 'bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent'
                      }`}>
                        {offer.price}€
                      </span>
                    </div>
                    {offer.duration && (
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                        offer.theme === "dark"
                          ? 'bg-white/10 text-white/80'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {offer.duration}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {offer.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                          offer.theme === "dark"
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-blue-50 text-blue-600'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={`text-sm leading-relaxed ${
                          offer.theme === "dark" ? 'text-slate-200' : 'text-slate-700'
                        }`}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={offer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp(`offer_${offer.name.toLowerCase().replace(/\s+/g, "_")}`)}
                    className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                      offer.theme === "dark"
                        ? 'bg-white text-slate-900 hover:bg-slate-50 shadow-lg hover:shadow-xl hover:scale-[1.02]'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Réserver maintenant</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Options */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-lg">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Options supplémentaires
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">🚗</div>
                <div className="font-semibold text-slate-900 mb-1">Pick-up & return</div>
                <div className="text-sm text-slate-600">+ 1,00 €/km (min. 25 €)</div>
              </div>
              <div className="group p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">🌙</div>
                <div className="font-semibold text-slate-900 mb-1">Week-end / soir</div>
                <div className="text-sm text-slate-600">+ 20–30 % (créneaux limités)</div>
              </div>
              <div className="group p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">🚙</div>
                <div className="font-semibold text-slate-900 mb-1">Grand gabarit / état chargé</div>
                <div className="text-sm text-slate-600">+ 20–40 €</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

