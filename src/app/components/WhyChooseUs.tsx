"use client"

import { Home, Droplets, Clock, Wallet, CheckCircle2, Sparkles } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Home,
      title: "Votre Temps Préservé",
      description: "Intervention à domicile ou bureau. Zéro déplacement, zéro contrainte. Pendant que nous travaillons, vous aussi.",
      highlight: "Gain de 2-3h"
    },
    {
      icon: Droplets,
      title: "Excellence Professionnelle",
      description: "Produits Koch-Chemie & CarPro exclusifs. Les mêmes standards que les concessions premium. Aucun compromis sur vos matériaux.",
      highlight: "Standards concession"
    },
    {
      icon: Clock,
      title: "Efficacité Premium",
      description: "90 minutes pour une transformation complète. Rapidité sans sacrifier la qualité professionnelle.",
      highlight: "90 min"
    },
    {
      icon: Wallet,
      title: "Transparence Totale",
      description: "Tarification claire sans surprises. Le prix annoncé inclut tout : déplacement, produits premium, garantie satisfaction.",
      highlight: "Tout inclus"
    },
    {
      icon: CheckCircle2,
      title: "Garantie Excellence",
      description: "Inspection conjointe du résultat. Paiement uniquement après validation. Garantie satisfaction 7 jours.",
      highlight: "7 jours"
    },
    {
      icon: Sparkles,
      title: "Protection Durable",
      description: "Traitement hydrophobe professionnel inclus. Votre véhicule conserve son éclat 4 à 6 semaines. Durabilité maximale.",
      highlight: "4-6 semaines"
    }
  ]

  const comparison = [
    { label: "Garagiste traditionnel", price: "120-200€", time: "4-5h", quality: "Premium mais long", convenience: "⚠️ Déplacement + délai" },
    { label: "Station automatique", price: "15-25€", time: "30 min", quality: "Basique / Rayures", convenience: "⚠️ Risque carrosserie" },
    { label: "⭐Shine&Go Premium", price: "65-120€", time: "0h pour vous", quality: "Excellence pro", convenience: "✓ Mobile premium", highlight: true }
  ]

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>La différence Shine&Go</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-6 px-4">
            L'Excellence Shine&Go
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Pourquoi 30+ clients nous choisissent
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-dark-600 px-4">
            Nettoyage voiture premium qui transforme votre véhicule. Notre service 
            mobile professionnel garantit une finition niveau concession, sans 
            compromis sur la qualité.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-dark-200 p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
              >
                {/* Highlight badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                    {benefit.highlight}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-dark-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Comparison table */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-3">
              Comparaison honnête : nettoyage voiture premium vs station automatique
            </h3>
            <p className="text-dark-600">
              Pour que vous puissiez faire le bon choix entre notre <strong>nettoyage voiture premium</strong> à domicile 
              et les solutions traditionnelles, en toute transparence
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border-2 border-dark-200 shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b-2 border-dark-200">
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-dark-900">Solution</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-dark-900">Prix</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-dark-900">Temps perdu</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-dark-900">Qualité</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-dark-900">Praticité</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={`border-b border-dark-200 last:border-0 ${row.highlight ? 'bg-gradient-to-r from-blue-50 to-cyan-50 font-semibold' : ''}`}
                  >
                    <td className="px-4 md:px-6 py-4 text-sm text-dark-900">
                      {row.highlight && <span className="mr-2">⭐</span>}
                      {row.label}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-sm text-dark-700">{row.price}</td>
                    <td className="px-4 md:px-6 py-4 text-sm text-dark-700">{row.time}</td>
                    <td className="px-4 md:px-6 py-4 text-sm text-dark-700">{row.quality}</td>
                    <td className="px-4 md:px-6 py-4 text-sm text-dark-700">{row.convenience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-dark-600 text-sm">
              💡 <span className="font-semibold">L'excellence accessible :</span> un service de 
              <strong> nettoyage voiture premium</strong> à prix juste, sans perdre une minute de votre temps. 
              Notre <strong>service mobile professionnel</strong> vous fait gagner 2-3h.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 max-w-2xl">
            <div className="text-xl md:text-2xl font-bold text-dark-900">
              Prêt à découvrir la différence ?
            </div>
            <div className="text-dark-600">
              Rejoignez les 30+ clients satisfaits ce mois-ci
            </div>
            <a
              href="https://wa.me/32472303701?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20un%20nettoyage%20de%20voiture"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-base md:text-lg hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Devis gratuit en 2 min</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

