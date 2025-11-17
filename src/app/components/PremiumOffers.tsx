import { trackWhatsApp } from "@/lib/analytics"

interface Offer {
  name: string;
  price: string;
  bullets: readonly string[];
  href: string;
  theme: "blue" | "slate";
  tag?: string;
}

export default function PremiumOffers() {
  const offers: Offer[] = [
    {
      name: "Essentiel Privé",
      price: "dès 150 €",
      bullets: [
        "Extérieur à la main: prélavage, contact, jantes, vitres, dressing pneus",
        "Intérieur propre & net: dépoussiérage, aspirateur habitacle + coffre",
        "Protection rapide hydrophobe (~2–6 semaines)",
      ],
      href: "https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule Essentiel Privé",
      theme: "blue",
    },
    {
      name: "Signature Privé",
      price: "249–299 €",
      bullets: [
        "Tout l'Essentiel + intérieur approfondi (aérateurs, contre‑portes, console)",
        "Finitions premium: dressing plastiques satiné, soin cuirs",
        "Protection renforcée (~2–3 mois)",
      ],
      href: "https://wa.me/32472303701?text=Bonjour, je souhaite réserver la formule Signature Privé",
      theme: "slate",
      tag: "Recommandé",
    },
  ]

  return (
    <section id="tarifs" className="relative py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Prestations & tarifs
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            Deux formules haut de gamme. Pas de « lavage express ».
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offers.map((o) => (
            <div key={o.name} className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              {o.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  💎 {o.tag}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900">{o.name}</h3>
                <div className={`mt-1 text-3xl font-extrabold ${o.theme === "blue" ? "text-blue-600" : "text-slate-800"}`}>{o.price}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {o.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp(`offer_${o.name.toLowerCase().replace(/\s+/g, "_")}`)}
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-colors ${o.theme === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800 hover:bg-slate-900"}`}
                >
                  <span>📲</span>
                  <span>Réserver</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h4 className="text-lg font-semibold text-slate-900">Options</h4>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200 p-4"><strong>Pick‑up & return</strong><br/>+ 1,00 €/km (min. 25 €)</div>
            <div className="rounded-xl border border-slate-200 p-4"><strong>Week‑end / soir</strong><br/>+ 20–30 % (créneaux limités)</div>
            <div className="rounded-xl border border-slate-200 p-4"><strong>Grand gabarit / état chargé</strong><br/>+ 20–40 €</div>
          </div>
        </div>
      </div>
    </section>
  )
}

