import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import NearbyCities from "../../components/NearbyCities";
import FeaturesSection from "../../components/FeaturesSection";
import CityServiceContent from "../../components/CityServiceContent";

export const metadata: Metadata = {
  title: "Lavage voiture Raeren | Shine&Go à domicile",
  description: "Service de nettoyage automobile à Raeren : lavage intérieur/extérieur à domicile avec produits haut de gamme. Intervention rapide, devis gratuit.",
  openGraph: {
    title: "Lavage voiture Raeren | Shine&Go à domicile",
    description: "Service de nettoyage automobile à Raeren : lavage intérieur/extérieur à domicile avec produits haut de gamme. Intervention rapide, devis gratuit.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/zone-intervention/raeren",
    siteName: "Shine&Go Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavage voiture Raeren | Shine&Go à domicile",
    description: "Service de nettoyage automobile à Raeren : lavage intérieur/extérieur à domicile avec produits haut de gamme. Intervention rapide, devis gratuit.",
  },
  alternates: {
    canonical: `/zone-intervention/raeren`,
  },
};

export default function CityPage() {
  const nearbyCities = [
    { name: "Eupen", slug: "eupen", distance: "19 km" },
    { name: "Kelmis", slug: "kelmis", distance: "16 km" },
    { name: "Lontzen", slug: "lontzen", distance: "16 km" },
    { name: "Aix-la-Chapelle", slug: "aix-la-chapelle", distance: "8 km" },
    { name: "Vaals", slug: "vaals", distance: "19 km" },
    { name: "Spa", slug: "spa", distance: "12 km" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <Header cityName="Raeren" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nettoyage voiture à Raeren - Service à domicile premium
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Content Section */}
        <CityServiceContent
          city="Raeren"
          region="commune germanophone"
          villages={["Eupen","Kelmis","Lontzen","Aix-la-Chapelle","Vaals"]}
          nearbyCities={["Eupen","Kelmis","Lontzen","Aix-la-Chapelle","Vaals","Spa"]}
        />

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            {/* Badge Premium */}
            <div className="absolute top-6 right-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                ⭐ Premium
              </span>
            </div>

            {/* Main content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt pour un nettoyage professionnel à <span className="text-yellow-300">Raeren</span> ?
              </h2>
              
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Obtenez votre devis personnalisé en quelques clics et profitez d'un service premium à domicile avec nos produits haut de gamme.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/90 text-sm">Devis gratuit</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-white/90 text-sm">Intervention rapide</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-white/90 text-sm">Service premium</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href="/#devis"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Obtenir un devis gratuit
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Spacing between CTA and FeaturesSection */}
        <div className="mb-8"></div>

        <FeaturesSection cityName="Raeren" />

        {/* Spacing between FeaturesSection and NearbyCities */}
        <div className="mb-8"></div>

        {/* Villes voisines Section */}
        <NearbyCities currentCity="Raeren" nearbyCities={nearbyCities} />

        {/* Spacing between NearbyCities and Footer */}
        <div className="mb-8"></div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-white/60">
              © 2025 Shine&Go Premium - Service de nettoyage automobile à Raeren et environs
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