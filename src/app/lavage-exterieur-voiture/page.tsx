import { ArrowRight, Check, Star, Clock, Sparkles, Car, Phone, MapPin, Shield, Droplets } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lavage Voiture Extérieur à Domicile Liège | Dès 85€ - Shine&Go',
  description: 'Lavage voiture extérieur à domicile en région liégeoise. Lavage main technique 2 seaux, jantes, cire protection hydrophobe. Produits Koch-Chemie. Dès 85€. ☎ 0472 30 37 01',
  alternates: {
    canonical: 'https://shineandgo.be/lavage-exterieur-voiture',
  },
  openGraph: {
    title: 'Lavage Voiture Extérieur à Domicile | Shine&Go',
    description: 'Lavage extérieur voiture professionnel à domicile. Technique 2 seaux, jantes, cire. Dès 85€.',
    url: 'https://shineandgo.be/lavage-exterieur-voiture',
    siteName: 'Shine&Go',
    locale: 'fr_BE',
    type: 'website',
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lavage Extérieur Voiture à Domicile",
  "description": "Lavage extérieur professionnel à la main : technique 2 seaux anti-rayures, nettoyage jantes, dégoudronnage, cire protection hydrophobe.",
  "image": "https://shineandgo.be/images/realisations/lavage-complet-audi-rs3.webp",
  "brand": {
    "@type": "LocalBusiness",
    "name": "Shine&Go"
  },
  "offers": {
    "@type": "Offer",
    "price": "85",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
    "url": "https://shineandgo.be/lavage-exterieur-voiture"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte un lavage extérieur voiture à domicile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos tarifs démarrent à 85€ pour un lavage extérieur complet à la main. Un supplément s'applique selon la taille du véhicule."
      }
    },
    {
      "@type": "Question",
      "name": "La technique 2 seaux, c'est quoi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est la méthode professionnelle anti-rayures : un seau pour le shampoing, un pour rincer le gant. Cela évite de remettre les saletés sur la carrosserie et garantit 0 micro-rayure."
      }
    },
    {
      "@type": "Question",
      "name": "Avez-vous besoin d'eau ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous utilisons un nettoyeur haute pression professionnel. Nous avons besoin d'un robinet à moins de 25m. Si ce n'est pas possible, nous avons une réserve d'eau."
      }
    },
    {
      "@type": "Question",
      "name": "Et s'il pleut ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si vous n'avez pas d'abri (carport, garage), nous devrons reporter. Nous vous contacterons la veille si la météo est mauvaise."
      }
    }
  ]
}

export default function NettoyageExterieurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-gray-50 min-h-screen font-sans">

        {/* HERO - Minimaliste */}
        <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 rounded-full">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">4.9/5 sur Google</span>
              </div>

              {/* Titre H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Lavage voiture extérieur à domicile
              </h1>

              <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
                Lavage à la main, technique 2 seaux anti-rayures, jantes, cire protection. On vient chez vous en région liégeoise.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur"
                  className="group px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  Réserver dès 85€
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+32472303701"
                  className="px-8 py-4 text-gray-600 font-medium flex items-center gap-2 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0472 30 37 01
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* CONTENU - Bento Grid */}
        <div className="container mx-auto px-4 sm:px-6 py-16 space-y-8">

          {/* CE QUI EST INCLUS */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ce qui est inclus</h2>
              <p className="text-gray-500">Chaque prestation extérieur comprend</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🚿", title: "Pré-lavage mousse active", desc: "Décollage des saletés sans contact" },
                { icon: "🧽", title: "Lavage main 2 seaux", desc: "Technique anti-rayures professionnelle" },
                { icon: "🛞", title: "Jantes & pneus", desc: "Décontamination ferreuse + dressing noir" },
                { icon: "💧", title: "Dégoudronnage", desc: "Élimination goudron, résine, insectes" },
                { icon: "🧴", title: "Cire hydrophobe", desc: "Protection qui fait perler l'eau" },
                { icon: "🪟", title: "Vitres extérieures", desc: "Pare-brise et vitres impeccables" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNIQUE 2 SEAUX - Point différenciateur */}
          <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Pourquoi la technique 2 seaux ?</h2>
              <p className="text-lg text-slate-300 mb-8">
                Les car washes automatiques utilisent des rouleaux qui rayent votre carrosserie.
                Notre technique manuelle à 2 seaux garantit <strong className="text-white">zéro micro-rayure</strong>.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-2xl mb-3">❌</div>
                  <h3 className="font-semibold mb-2">Car Wash automatique</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Rouleaux qui rayent la peinture</li>
                    <li>• Produits agressifs</li>
                    <li>• Séchage qui laisse des traces</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-green-500/30">
                  <div className="text-2xl mb-3">✅</div>
                  <h3 className="font-semibold mb-2">Shine&Go – 2 seaux</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Gant microfibre doux</li>
                    <li>• Produits premium Koch-Chemie</li>
                    <li>• Séchage microfibre + soufflage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* TARIFS + UPSELL COMPLET */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Extérieur */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Extérieur</h3>
                <div className="text-4xl font-bold text-gray-900 mt-4">Dès 85€</div>
                <p className="text-sm text-gray-500 mt-1">Supplément selon taille</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Lavage main 2 seaux", "Jantes & pneus", "Dégoudronnage", "Cire hydrophobe"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur"
                className="block w-full py-4 border border-gray-200 text-gray-900 font-semibold rounded-full text-center hover:bg-gray-50 transition-colors"
              >
                Réserver
              </a>
            </div>

            {/* Complet - Upsell */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</div>
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Intérieur + Extérieur</h3>
                <div className="text-4xl font-bold mt-4">Dès 120€</div>
                <p className="text-sm text-green-400 mt-1">Économisez 30€</p>
              </div>
              <ul className="space-y-3 mb-8">
                {["Tout l'extérieur", "Aspiration intérieur", "Plastiques & vitres", "Désodorisation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-green-400" /> {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/32472303701?text=Je souhaite le lavage complet"
                className="block w-full py-4 bg-white text-slate-900 font-bold rounded-full text-center hover:bg-gray-100 transition-colors"
              >
                Réserver le complet
              </a>
            </div>
          </div>

          {/* POURQUOI NOUS */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Pourquoi choisir Shine&Go ?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Satisfait ou remboursé", desc: "Garantie sur chaque prestation" },
                { icon: Droplets, title: "0 micro-rayure", desc: "Technique 2 seaux certifiée" },
                { icon: Clock, title: "Service rapide", desc: "Intervention en 1h30-2h" },
                { icon: MapPin, title: "À domicile", desc: "On vient chez vous" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ZONES D'INTERVENTION */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Zones d'intervention</h2>
              <p className="text-gray-500">Déplacement gratuit en région liégeoise</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Liège", "Herve", "Verviers", "Spa", "Battice", "Soumagne", "Fléron", "Visé", "Seraing"].map((ville, i) => (
                <Link
                  key={i}
                  href={`/lavage-voiture-${ville.toLowerCase().replace('é', 'e')}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  {ville}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/zones" className="text-blue-600 font-medium hover:underline">
                Voir toutes les zones →
              </Link>
            </div>
          </section>

          {/* TÉMOIGNAGES */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Avis clients</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-500">sur Google</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Laurent B.", city: "Soumagne", text: "Voiture noire, j'avais peur des rayures. Résultat impeccable, aucune trace !" },
                { name: "Michel J.", city: "Verviers", text: "Les jantes étaient noires de freins, elles sont revenues comme neuves." },
                { name: "Isabelle K.", city: "Spa", text: "Super pratique au bureau. La cire tient vraiment, l'eau perle dessus." },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{item.text}"</p>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">{item.name}</span>
                    <span className="text-gray-500"> · {item.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Questions fréquentes</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Combien coûte un lavage extérieur ?", a: "Nos tarifs démarrent à 85€. Un supplément s'applique selon la taille du véhicule." },
                { q: "C'est quoi la technique 2 seaux ?", a: "Un seau pour le shampoing, un pour rincer le gant. Cela évite de remettre les saletés sur la carrosserie et garantit 0 micro-rayure." },
                { q: "Avez-vous besoin d'eau ?", a: "Oui, un robinet à moins de 25m. Si impossible, nous avons une réserve d'eau (à préciser)." },
                { q: "Et s'il pleut ?", a: "Sans abri (carport/garage), nous devrons reporter. On vous contacte la veille si météo défavorable." },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Une carrosserie qui brille ?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Réservez votre lavage extérieur et retrouvez l'éclat du premier jour.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur"
                className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Réserver maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+32472303701"
                className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0472 30 37 01
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
