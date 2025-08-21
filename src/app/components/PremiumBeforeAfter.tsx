import Image from "next/image"

export default function PremiumBeforeAfter() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">Avant / Après</h2>
          <p className="mt-4 text-lg md:text-xl text-slate-600">Transformation visible, valeur préservée.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700"><span>🚫</span>Avant</h3>
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/transformations/optimized/webp/avant01.webp" alt="Avant nettoyage" width={1280} height={720} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <p className="mt-3 text-center text-slate-700 text-sm">Traces d'usage, saletés et voile terne.</p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-emerald-700"><span>✨</span>Après</h3>
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/transformations/optimized/webp/apres01.webp" alt="Après nettoyage" width={1280} height={720} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <p className="mt-3 text-center text-slate-700 text-sm">Finition showroom, protection appliquée.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

