import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zones d\'intervention - Nettoyage Auto Premium | Shine&Go',
  description: 'Découvrez toutes nos zones d\'intervention pour le nettoyage automobile premium. Service mobile à domicile dans plus de 60 villes de la région de Liège.',
  keywords: [
    'zones intervention nettoyage auto',
    'villes desservies nettoyage voiture',
    'service mobile nettoyage automobile',
    'nettoyage auto région liège',
    'car wash mobile wallonie',
    'détailing automobile mobile',
    'nettoyage voiture domicile',
    'service premium nettoyage auto'
  ],
  openGraph: {
    title: 'Zones d\'intervention - Nettoyage Auto Premium | Shine&Go',
    description: 'Découvrez toutes nos zones d\'intervention pour le nettoyage automobile premium. Service mobile à domicile dans plus de 60 villes.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Shine&Go',
  },
  alternates: {
    canonical: 'https://www.shineandgo.be/zone-intervention',
  },
};

// Liste des villes principales avec leurs informations
const mainCities = [
  { slug: 'liege', name: 'Liège', population: '200.000+', type: 'Ville principale' },
  { slug: 'verviers', name: 'Verviers', population: '55.000+', type: 'Ville historique' },
  { slug: 'spa', name: 'Spa', population: '10.000+', type: 'Ville thermale' },
  { slug: 'huy', name: 'Huy', population: '21.000+', type: 'Ville médiévale' },
  { slug: 'herve', name: 'Herve', population: '17.000+', type: 'Berceau Shine&Go' },
  { slug: 'dison', name: 'Dison', population: '15.000+', type: 'Ville industrielle' },
  { slug: 'aubel', name: 'Aubel', population: '4.000+', type: 'Commune rurale' },
  { slug: 'aywaille', name: 'Aywaille', population: '12.000+', type: 'Porte des Ardennes' }
];

// Liste des autres villes
const otherCities = [
  'aix-la-chapelle', 'amay', 'ans', 'argenteau', 'baelen', 'battice', 'beaufays',
  'berloz', 'blegny', 'chaudfontaine', 'dalhem', 'donceel', 'embourg', 'engis',
  'esneux', 'eupen', 'flemalle', 'fleron', 'francorchamps', 'gemmenich', 'jalhay',
  'jemeppe', 'kelmis', 'limbourg', 'lontzen', 'malmedy', 'marchin', 'montzen',
  'mouland', 'nessonvaux', 'olne', 'ovifat', 'pepinster', 'plombieres', 'raeren',
  'remicourt', 'remouchamps', 'robertville', 'saint-georges', 'seraing', 'soumagne',
  'sprimont', 'stavelot', 'theux', 'thimister', 'tilff', 'trois-ponts', 'trooz',
  'vaals', 'verlaine', 'vise', 'waimes', 'wanze', 'waremme', 'welkenraedt'
];

export default function ZonesInterventionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos Zones d'Intervention
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez toutes nos zones d'intervention pour le nettoyage automobile premium. 
            Service mobile à domicile dans plus de 60 villes de la région de Liège.
          </p>
        </div>

        {/* Villes principales */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Villes Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainCities.map((city) => (
              <Link 
                key={city.slug}
                href={`/zone-intervention/${city.slug}`}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{city.population}</p>
                  <p className="text-green-400 text-xs font-medium">{city.type}</p>
                  <div className="mt-4 inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full border border-green-400/30">
                    <span className="text-green-300 text-xs font-medium">Disponible</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Autres villes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Autres Villes Desservies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {otherCities.map((citySlug) => {
              const cityName = citySlug.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ');
              
              return (
                <Link 
                  key={citySlug}
                  href={`/zone-intervention/${citySlug}`}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-white group-hover:text-green-300 transition-colors">
                      {cityName}
                    </h3>
                    <div className="mt-2 inline-flex items-center bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-2 py-1 rounded-full border border-blue-400/30">
                      <span className="text-blue-300 text-xs">Service mobile</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à redonner l'éclat à votre véhicule ?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour un devis personnalisé et profitez de nos services premium dans votre ville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-400/30 hover:scale-105 hover:border-emerald-400/50"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Devis gratuit WhatsApp
              </Link>
              <Link 
                href="tel:+32472303701"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 rounded-xl font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-400/30 hover:scale-105 hover:border-cyan-400/50"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
