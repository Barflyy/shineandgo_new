import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Nettoyage voiture à domicile en Wallonie | Shine&Go',
  description: 'Service de nettoyage automobile professionnel à domicile dans toute la Wallonie. Liège, Verviers, Spa, Huy, Herve et plus de 50 villes couvertes. Réservation en ligne.',
  openGraph: {
    title: 'Nettoyage voiture à domicile en Wallonie - Shine&Go',
    description: 'Service professionnel de nettoyage automobile à domicile dans toute la Wallonie. Plus de 50 villes couvertes.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Shine&Go',
    url: 'https://www.shineandgo.be/nettoyage-voiture',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.shineandgo.be/nettoyage-voiture',
  },
};

// Liste des villes principales
const cities = [
  { name: 'Liège', slug: 'liege', region: 'Province de Liège' },
  { name: 'Verviers', slug: 'verviers', region: 'Province de Liège' },
  { name: 'Spa', slug: 'spa', region: 'Province de Liège' },
  { name: 'Huy', slug: 'huy', region: 'Province de Liège' },
  { name: 'Herve', slug: 'herve', region: 'Province de Liège' },
  { name: 'Dison', slug: 'dison', region: 'Province de Liège' },
  { name: 'Aubel', slug: 'aubel', region: 'Province de Liège' },
  { name: 'Aywaille', slug: 'aywaille', region: 'Province de Liège' },
  { name: 'Amay', slug: 'amay', region: 'Province de Liège' },
  { name: 'Chaudfontaine', slug: 'chaudfontaine', region: 'Province de Liège' },
  { name: 'Ans', slug: 'ans', region: 'Province de Liège' },
  { name: 'Seraing', slug: 'seraing', region: 'Province de Liège' },
  { name: 'Flemalle', slug: 'flemalle', region: 'Province de Liège' },
  { name: 'Soumagne', slug: 'soumagne', region: 'Province de Liège' },
  { name: 'Olne', slug: 'olne', region: 'Province de Liège' },
  { name: 'Pepinster', slug: 'pepinster', region: 'Province de Liège' },
  { name: 'Stavelot', slug: 'stavelot', region: 'Province de Liège' },
  { name: 'Theux', slug: 'theux', region: 'Province de Liège' },
  { name: 'Malmedy', slug: 'malmedy', region: 'Province de Liège' },
  { name: 'Eupen', slug: 'eupen', region: 'Province de Liège' },
  { name: 'Vise', slug: 'vise', region: 'Province de Liège' },
  { name: 'Waremme', slug: 'waremme', region: 'Province de Liège' },
  { name: 'Welkenraedt', slug: 'welkenraedt', region: 'Province de Liège' },
  { name: 'Trooz', slug: 'trooz', region: 'Province de Liège' },
  { name: 'Esneux', slug: 'esneux', region: 'Province de Liège' },
  { name: 'Sprimont', slug: 'sprimont', region: 'Province de Liège' },
  { name: 'Baelen', slug: 'baelen', region: 'Province de Liège' },
  { name: 'Jalhay', slug: 'jalhay', region: 'Province de Liège' },
  { name: 'Limbourg', slug: 'limbourg', region: 'Province de Liège' },
  { name: 'Raeren', slug: 'raeren', region: 'Province de Liège' },
  { name: 'Kelmis', slug: 'kelmis', region: 'Province de Liège' },
  { name: 'Lontzen', slug: 'lontzen', region: 'Province de Liège' },
  { name: 'Plombieres', slug: 'plombieres', region: 'Province de Liège' },
  { name: 'Thimister', slug: 'thimister', region: 'Province de Liège' },
  { name: 'Blegny', slug: 'blegny', region: 'Province de Liège' },
  { name: 'Dalhem', slug: 'dalhem', region: 'Province de Liège' },
  { name: 'Engis', slug: 'engis', region: 'Province de Liège' },
  { name: 'Fleron', slug: 'fleron', region: 'Province de Liège' },
  { name: 'Jemeppe', slug: 'jemeppe', region: 'Province de Liège' },
  { name: 'Saint-Georges', slug: 'saint-georges', region: 'Province de Liège' },
  { name: 'Tilff', slug: 'tilff', region: 'Province de Liège' },
  { name: 'Wanze', slug: 'wanze', region: 'Province de Liège' },
  { name: 'Verlaine', slug: 'verlaine', region: 'Province de Liège' },
  { name: 'Trois-Ponts', slug: 'trois-ponts', region: 'Province de Liège' },
  { name: 'Waimes', slug: 'waimes', region: 'Province de Liège' },
  { name: 'Remouchamps', slug: 'remouchamps', region: 'Province de Liège' },
  { name: 'Robertville', slug: 'robertville', region: 'Province de Liège' },
  { name: 'Ovifat', slug: 'ovifat', region: 'Province de Liège' },
  { name: 'Francorchamps', slug: 'francorchamps', region: 'Province de Liège' },
  { name: 'Gemmenich', slug: 'gemmenich', region: 'Province de Liège' },
  { name: 'Vaals', slug: 'vaals', region: 'Province de Liège' },
  { name: 'Aix-la-Chapelle', slug: 'aix-la-chapelle', region: 'Province de Liège' },
  { name: 'Embourg', slug: 'embourg', region: 'Province de Liège' },
  { name: 'Montzen', slug: 'montzen', region: 'Province de Liège' },
  { name: 'Mouland', slug: 'mouland', region: 'Province de Liège' },
  { name: 'Nessonvaux', slug: 'nessonvaux', region: 'Province de Liège' },
  { name: 'Remicourt', slug: 'remicourt', region: 'Province de Liège' },
  { name: 'Donceel', slug: 'donceel', region: 'Province de Liège' },
  { name: 'Beaufays', slug: 'beaufays', region: 'Province de Liège' },
  { name: 'Argenteau', slug: 'argenteau', region: 'Province de Liège' }
];

export default function NettoyageVoiturePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              Nettoyage voiture à domicile
              <span className="block text-blue-600">en Wallonie</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Service professionnel de nettoyage automobile à domicile dans plus de 50 villes wallonnes. 
              Shine&Go intervient directement chez vous pour un résultat showroom garanti.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-slate-600">Villes couvertes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-slate-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-slate-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Service mobile</h3>
              <p className="text-slate-600">Nous venons directement chez vous, pas besoin de vous déplacer</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Qualité premium</h3>
              <p className="text-slate-600">Produits professionnels Koch-Chemie et CarPro</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Rapide et efficace</h3>
              <p className="text-slate-600">Résultat showroom en 90 minutes à 2h30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Villes par région */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nos zones d'intervention
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Province de Liège
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/nettoyage-voiture-${city.slug}`}
                  className="group block p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt pour un nettoyage auto premium ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Réservez votre créneau en ligne ou contactez-nous par WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Réserver en ligne
            </a>
            <a
              href="https://wa.me/32472303701"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 