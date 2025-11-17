import { trackCall, trackWhatsApp, trackCalendly } from "@/lib/analytics"

export default function PremiumFinalCTA() {
  const openCalendly = () => {
    try {
      trackCalendly("final_premium")
      window.open("https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go", "_blank", "noopener,noreferrer")
    } catch {}
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-10%,rgba(245,158,11,.18),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Créneau privé</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl text-slate-300">À domicile ou en pick‑up & return. Places limitées / semaine.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("cta_final")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg hover:bg-emerald-500"
            >
              <span className="text-xl">📲</span> WhatsApp
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <button
              onClick={openCalendly}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-slate-900 shadow-lg hover:bg-gray-100"
            >
              <span className="text-xl">🗓️</span> Disponibilités
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="tel:+32472303701"
              onClick={() => trackCall("cta_final")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-4 font-semibold text-white shadow-lg hover:bg-slate-700"
            >
              <span className="text-xl">📞</span> Être rappelé
              <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2"><span>★★★★★</span><span>4,9/5 — 30+ avis</span></div>
            <span className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2"><span>✋</span><span>À la main</span></div>
            <span className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2"><span>🚗</span><span>Pick‑up & return</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

