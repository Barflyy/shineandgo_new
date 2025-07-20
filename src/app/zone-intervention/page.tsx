'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

// Fonction pour formater les noms de villes
const formatCityName = (citySlug: string) => {
  return citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};



// Composant de recherche amélioré
function CitySearch({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Ex. Liège, Herve, Spa..."
          className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Rechercher une ville"
        />
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}

// Données des villes principales
const mainCities = [
  { name: 'Liège', slug: 'liege', population: '200 000+', type: 'Ville principale' },
  { name: 'Verviers', slug: 'verviers', population: '55 000+', type: 'Ville principale' },
  { name: 'Seraing', slug: 'seraing', population: '64 000+', type: 'Ville principale' },
  { name: 'Herstal', slug: 'herstal', population: '40 000+', type: 'Ville principale' },
  { name: 'Ans', slug: 'ans', population: '28 000+', type: 'Ville principale' },
  { name: 'Saint-Nicolas', slug: 'saint-nicolas', population: '24 000+', type: 'Ville principale' },
  { name: 'Flémalle', slug: 'flemalle', population: '26 000+', type: 'Ville principale' },
  { name: 'Chaudfontaine', slug: 'chaudfontaine', population: '21 000+', type: 'Ville principale' }
];

// Exemples de villes
const exampleCities = [
  'huy', 'spa', 'theux', 'aywaille', 'soumagne', 'bassenge',
  'dalhem', 'oupeye', 'visé', 'herve', 'beyne-heusay', 'fléron'
];

// Toutes les villes
const allCities = [
  'aix-la-chapelle', 'amay', 'ans', 'argenteau', 'aubel', 'aywaille',
  'baelen', 'battice', 'beaufays', 'berloz', 'blegny', 'chaudfontaine',
  'dalhem', 'dison', 'donceel', 'embourg', 'engis', 'esneux',
  'eupen', 'flemalle', 'fleron', 'francorchamps', 'gemmenich', 'herve',
  'huy', 'jalhay', 'jemeppe', 'kelmis', 'liege', 'limbourg',
  'lontzen', 'malmedy', 'marchin', 'montzen', 'mouland', 'nessonvaux',
  'olne', 'ovifat', 'pepinster', 'plombieres', 'raeren', 'remicourt',
  'remouchamps', 'robertville', 'saint-georges', 'seraing', 'soumagne',
  'spa', 'sprimont', 'stavelot', 'theux', 'thimister', 'tilff',
  'trois-ponts', 'trooz', 'vaals', 'verlaine', 'verviers', 'vise',
  'waimes', 'wanze', 'waremme', 'welkenraedt'
];

export default function ZonesInterventionPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allCities.filter(city => 
      formatCityName(city).toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredMainCities = useMemo(() => {
    if (!searchQuery.trim()) return mainCities;
    return mainCities.filter(city => 
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      


      {/* Header */}
      <Header />

      {/* Hero Section - Réécrit avec promesse claire */}
      <section className="relative min-h-screen overflow-hidden bg-white w-full">
        {/* Background épuré simple */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        
        {/* Container principal avec système de centrage universel */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen w-full max-w-none px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Spacer pour le header */}
          <div className="h-14 sm:h-16 md:h-20 flex-shrink-0"></div>
          
          {/* Contenu centré */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                
                {/* Badge de certification */}
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-600/20 mb-4 sm:mb-6">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-blue-600 font-medium text-sm">Pro certifié Koch-Chemie</span>
            </div>

                {/* Titre principal avec promesse claire */}
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-slate-900">
                    <span className="block">
                      Votre voiture retrouve l'éclat du concessionnaire,
                    </span>
                    <span className="block text-blue-600">
                      sans bouger de votre allée
                    </span>
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    <strong>Valeting premium à domicile</strong> partout en Province de Liège
                    <br className="hidden sm:block" />
                    Intervention sous 48h • Matériel complet fourni
                  </p>
                </div>

                {/* Garanties épurées */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-5xl mx-auto flex-wrap">
                  <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Déplacement offert ≤ 25 km</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Finition garantie 100% satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">+60 communes desservies</span>
                  </div>
                </div>

                {/* Social Proof renforcé */}
                <div className="inline-flex items-center bg-slate-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-slate-200">
                  <div className="flex items-center mr-2 sm:mr-4">
                    <div className="flex text-yellow-400 mr-1 sm:mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-slate-700 font-semibold text-sm sm:text-base">5,0</span>
                  </div>
                  <span className="text-slate-700 font-medium text-xs sm:text-sm">+30 avis • Réponse &lt; 5 min</span>
                </div>

                {/* CTAs épurés */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 w-full max-w-lg mx-auto">
                  
                  {/* CTA Principal */}
                  <button 
                    onClick={() => window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer')}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">Réserver en 3 clics</span>
                  </button>
                  
                  {/* CTA Secondaire */}
                  <a 
                    href="https://wa.me/32472303701?text=Bonjour, je souhaite un devis pour un nettoyage auto"
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base min-w-0"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z"/>
                    </svg>
                    <span className="truncate">Chat WhatsApp</span>
                  </a>

                </div>

                {/* Zone d'intervention */}
                <div className="text-center pt-4">
                  <p className="text-sm sm:text-base text-slate-600 mb-1">
                    Nous venons à vous dans <strong>+60 communes</strong>, sous 48h
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Province de Liège • Déplacement gratuit inclus
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Comment ça marche" - Nouvelle */}
      <section className="w-full py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Un processus simple en 3 étapes pour redécouvrir votre voiture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Je réserve</h3>
              <p className="text-slate-600">En 3 clics, choisissez votre créneau et votre formule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nous venons</h3>
              <p className="text-slate-600">Notre équipe arrive à l'heure avec tout le matériel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Je redécouvre</h3>
              <p className="text-slate-600">Votre voiture retrouve son éclat d'origine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recherche de villes - Améliorée */}
      <section className="w-full py-6 sm:py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Votre ville est-elle desservie ?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-4 text-sm sm:text-base px-4">
              Tapez le nom de votre ville pour vérifier si nous intervenons chez vous
            </p>
            <p className="text-xs sm:text-sm text-slate-500 px-4">
              Pas dans la liste ? Contactez-nous, nous ajoutons régulièrement de nouvelles communes.
            </p>
          </div>
          <CitySearch onSearch={setSearchQuery} />
        </div>
      </section>

      {/* Villes principales */}
      {filteredMainCities.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Villes Principales
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Nos zones d'intervention prioritaires avec service premium garanti
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredMainCities.map((city) => (
                <Link 
                  key={city.slug}
                  href={`/zone-intervention/${city.slug}`}
                  className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:border-blue-300 transition-colors duration-200 hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-2">Intervention sous 48h</p>
                    <p className="text-blue-600 text-xs font-medium mb-3">{city.type}</p>
                    <div className="inline-flex items-center bg-blue-200 px-3 py-1 rounded-full border border-blue-300">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-blue-700 text-xs font-medium">Service Premium</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Résultats de recherche */}
      {searchQuery && filteredCities.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Villes trouvées pour "{searchQuery}"
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                {filteredCities.length} ville{filteredCities.length > 1 ? 's' : ''} correspondante{filteredCities.length > 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredCities.map((citySlug) => {
                const cityName = formatCityName(citySlug);
                
                return (
                  <Link 
                    key={citySlug}
                    href={`/zone-intervention/${citySlug}`}
                    className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-300 transition-colors duration-200 hover:shadow-md"
                  >
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                        {cityName}
                      </h3>
                      <div className="inline-flex items-center bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1.5"></div>
                        <span className="text-blue-600 text-xs font-medium">Mobile</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Message si aucune ville trouvée */}
      {searchQuery && filteredMainCities.length === 0 && filteredCities.length === 0 && (
        <section className="w-full py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                Pas encore chez vous...
              </h3>
              <p className="text-slate-600 mb-4 text-sm sm:text-base">
                Indiquez-nous votre commune, nous vous contactons quand c'est possible !
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
              >
                Voir toutes les villes
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Exemples de villes (quand pas de recherche) */}
      {!searchQuery && (
        <section className="w-full py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Quelques exemples de villes desservies
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Et bien d'autres... Utilisez la recherche pour trouver votre ville
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {exampleCities.map((citySlug) => {
                const cityName = formatCityName(citySlug);
                
                return (
                  <Link 
                    key={citySlug}
                    href={`/zone-intervention/${citySlug}`}
                    className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-300 transition-colors duration-200 hover:shadow-md"
                  >
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                        {cityName}
                      </h3>
                      <div className="inline-flex items-center bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1.5"></div>
                        <span className="text-blue-600 text-xs font-medium">Mobile</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-slate-600 text-xs sm:text-sm px-4">
                +50 autres villes disponibles • Utilisez la recherche ci-dessus
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - Améliorée */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Questions Fréquentes
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Intervenez-vous à Eupen ?
              </h3>
              <p className="text-slate-600">
                Oui, nous intervenons dans toute la Province de Liège, y compris Eupen et les communes germanophones.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Combien de temps dure l'intervention ?
              </h3>
              <p className="text-slate-600">
                Entre 90 minutes et 3 heures selon la formule choisie et l'état de votre véhicule.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Quels produits utilisez-vous ?
              </h3>
              <p className="text-slate-600">
                Nous utilisons exclusivement les produits professionnels Koch-Chemie, reconnus pour leur qualité et leur respect des peintures.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Comment réserver ?
              </h3>
              <p className="text-slate-600 mb-4">
                C'est simple ! Cliquez sur "Réserver en 3 clics" ci-dessus, choisissez votre créneau et votre formule. Ou contactez-nous par WhatsApp pour une réponse immédiate.
              </p>
              <button
                onClick={() => window.open('https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go?hide_event_type_details=1&hide_gdpr_banner=1', '_blank', 'noopener,noreferrer')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Réserver maintenant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
