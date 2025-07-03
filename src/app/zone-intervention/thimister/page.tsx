import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Lavage voiture Thimister | Shine&Go à domicile",
  description: "Nettoyage automobile à Thimister : service intérieur/extérieur à domicile avec produits professionnels. Intervention rapide, devis gratuit.",
  openGraph: {
    title: "Lavage voiture Thimister | Shine&Go à domicile",
    description: "Nettoyage automobile à Thimister : service intérieur/extérieur à domicile avec produits professionnels. Intervention rapide, devis gratuit.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/zone-intervention/thimister",
    siteName: "Shine&Go Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavage voiture Thimister | Shine&Go à domicile",
    description: "Nettoyage automobile à Thimister : service intérieur/extérieur à domicile avec produits professionnels. Intervention rapide, devis gratuit.",
  },
  alternates: {
    canonical: `/zone-intervention/thimister`,
  },
};

export default function CityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <Header cityName="Thimister" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nettoyage voiture à Thimister - Service à domicile premium
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Content Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed text-lg">
              Vous habitez à Thimister, village rural du Pays de Herve, ou dans les environs comme Herve, Battice ou Clermont ? Profitez du service de nettoyage automobile à domicile de Shine&Go. Nous intervenons sur place, sans branchement nécessaire, avec des produits haut de gamme. Que vous ayez besoin d&apos;un nettoyage intérieur minutieux pour éliminer les traces de vos déplacements quotidiens, d&apos;un lavage extérieur sans trace ou d&apos;une prestation complète, nous adaptons notre méthode à chaque véhicule. Idéal pour les clients exigeants de la région souhaitant gagner du temps sans faire de compromis sur la qualité. Réservez votre créneau directement en ligne en quelques clics.
            </p>
          </div>
        </div>

        {/* Services Highlight */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nettoyage Intérieur</h3>
              <p className="text-white/80">
                Nettoyage complet de l&apos;habitacle, si&egrave;ges, tableau de bord, moquettes et vitres int&eacute;rieures.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Nettoyage Extérieur</h3>
              <p className="text-white/80">
                Lavage ext&eacute;rieur professionnel, cirage, nettoyage des jantes et traitement des pneus.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt pour un nettoyage professionnel à Thimister ?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Obtenez votre devis personnalis&eacute; en quelques clics et profitez d&apos;un service premium &agrave; domicile.
            </p>
            <Link 
              href="/#devis"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Obtenir un devis gratuit
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Intervention rapide</h4>
              <p className="text-white/70 text-sm">Sous 2h dans Thimister et environs</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Produits professionnels</h4>
              <p className="text-white/70 text-sm">Koch Chemie &amp; &eacute;quipements haut de gamme</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Service premium</h4>
              <p className="text-white/70 text-sm">Satisfaction garantie 5/5 ⭐</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-white/60">
              © 2025 Shine&Go Premium - Service de nettoyage automobile à Thimister et environs
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">
                Retour &agrave; l&apos;accueil
              </Link>
              <Link href="/#contact" className="text-white/60 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 