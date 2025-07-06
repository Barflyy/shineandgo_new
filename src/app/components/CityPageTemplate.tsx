import type { Metadata } from "next";
import Link from "next/link";
import Header from "./Header";
import NearbyCities from "./NearbyCities";
import CityServiceContent from "./CityServiceContent";
import StepByStepDevisSimulator from "./StepByStepDevisSimulator";
import TransformationsSection from "./TransformationsSection";
import { getCityData, getCityAccroche, getCityTemoignage, getNearbyCities, getCityDisplayName } from "../utils/cityData";

interface CityPageTemplateProps {
  citySlug: string;
}

export function generateMetadata(citySlug: string): Metadata {
  const cityInfo = getCityData(citySlug);
  const cityName = cityInfo?.ville || citySlug;
  
  return {
    title: `Lavage voiture ${cityName} | Shine&Go à domicile`,
    description: `Service de nettoyage automobile à ${cityName} : lavage intérieur/extérieur à domicile avec produits haut de gamme. Intervention rapide, devis gratuit.`,
    openGraph: {
      title: `Lavage voiture ${cityName} | Shine&Go à domicile`,
      description: `Service de nettoyage automobile à ${cityName} : lavage intérieur/extérieur à domicile avec produits haut de gamme. Intervention rapide, devis gratuit.`,
      type: "website",
      locale: "fr_BE",
      url: `https://www.shineandgo.be/zone-intervention/${citySlug}`,
      siteName: "Shine&Go Premium",
    },
    twitter: {
      card: "summary_large_image",
      title: `Lavage voiture ${cityName} | Shine&Go à domicile`,
      description: `Service de nettoyage automobile à ${cityName} : lavage intérieur/extérieur à domicile avec produits haut de gamme. Intervention rapide, devis gratuit.`,
    },
    alternates: {
      canonical: `/zone-intervention/${citySlug}`,
    },
  };
}

export default function CityPageTemplate({ citySlug }: CityPageTemplateProps) {
  const cityInfo = getCityData(citySlug);
  const cityName = cityInfo?.ville || citySlug;
  const nearbyCities = getNearbyCities(citySlug);
  const accroche = getCityAccroche(citySlug);
  const temoignage = getCityTemoignage(citySlug);

  // Créer la liste des villes voisines pour le composant NearbyCities
  const nearbyCitiesList = nearbyCities.map(city => ({
    name: getCityDisplayName(city),
    slug: city.toLowerCase().replace(/\s+/g, '-'),
    distance: "-"
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <Header cityName={cityName} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nettoyage voiture à {cityName} - Service à domicile premium
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Phrase d'accroche personnalisée */}
        <div className="text-center mb-8">
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {/* On remplace les slugs par les noms accentués dans l'accroche */}
            {accroche.replace(/\(([^)]*)\)/, (match, voisines) =>
              `(${voisines.split(',').map((v: string) => getCityDisplayName(v.trim().toLowerCase().replace(/\s+/g, '-'))).join(', ')})`
            )}
          </p>
        </div>

        {/* Content Section */}
        <CityServiceContent
          city={cityName}
          region="ville et environs"
          villages={nearbyCities.slice(0, 5)}
          nearbyCities={[cityName, ...nearbyCities]}
        />

        {/* Pourquoi choisir Section */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Pourquoi choisir Shine&Go à {cityName} ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">🚗 Car wash à domicile</h3>
                <p className="text-white/90">Profitez d&apos;un car wash {cityName} sans bouger de chez vous. Nous venons à {cityName} et dans les environs pour un lavage voiture premium.</p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">🧽 Nettoyage auto haut de gamme</h3>
                <p className="text-white/90">Nos produits (Koch Chemie, CarPro) garantissent un nettoyage auto {cityName} irréprochable, intérieur et extérieur.</p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">⚡ Service rapide & flexible</h3>
                <p className="text-white/90">Intervention 7j/7 à {cityName}, prise de rendez-vous simple, lavage à domicile ou sur votre lieu de travail.</p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">🏆 Satisfaction garantie</h3>
                <p className="text-white/90">Plus de 50 clients locaux déjà conquis à {cityName}. Nettoyage véhicule avec résultat professionnel et clients ravis.</p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">💼 Pour particuliers & pros</h3>
                <p className="text-white/90">Nettoyage voiture entreprise {cityName}, flotte professionnelle ou véhicule personnel : nous adaptons nos prestations à vos besoins.</p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">✨ Detailing & protection</h3>
                <p className="text-white/90">Spécialistes du detailing {cityName}, nous proposons aussi lavage intérieur voiture et protection carrosserie.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Transformations Avant/Après */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Transformations à {cityName}
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Découvrez nos réalisations avant/après dans la région. 
                Chaque transformation témoigne de notre expertise et de notre souci du détail.
              </p>
            </div>
            <TransformationsSection />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">Nos services à {cityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">🚘 Nettoyage extérieur</h3>
                <ul className="space-y-3 text-white/90 list-disc list-inside">
                  <li>Prélavage sans contact à la mousse active (canon à mousse)</li>
                  <li>Lavage manuel carrosserie avec gants microfibres premium</li>
                  <li>Nettoyage jantes, passages de roues et pneus</li>
                  <li>Séchage microfibre et souffleur pour les zones sensibles</li>
                  <li>Application d&apos;un traitement hydrophobe</li>
                  <li>Finition brillante sans traces</li>
                </ul>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">🧼 Nettoyage intérieur</h3>
                <ul className="space-y-3 text-white/90 list-disc list-inside">
                  <li>Aspiration complète (sièges, tapis, moquettes, coffre, recoins)</li>
                  <li>Soufflage des grilles de ventilation et zones difficiles d&apos;accès</li>
                  <li>Nettoyage en profondeur des plastiques et éléments de bord</li>
                  <li>Traitement anti-statique sur les plastiques et surfaces</li>
                  <li>Vitres intérieures nettoyées sans traces</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">✨ Qualité & Service</h4>
              <ul className="text-white/90 space-y-3 list-disc list-inside">
                <li>Produits haut de gamme (Koch Chemie, CarPro, P&S)</li>
                <li>Intervention à domicile ou sur lieu de travail</li>
                <li>Service premium et professionnel, sans rouleaux ni machines agressives</li>
                <li>Durée moyenne de la prestation : 2 à 3 heures</li>
                <li>Adapté à tous types de véhicules : citadine, SUV, utilitaire, voiture de luxe, etc.</li>
                                  <li>Forfaits spécifiques pour véhicules très sales ou d&apos;entreprise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Tarifs indicatifs */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-2xl">💶</span>
              Exemples de tarifs à {cityName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-400/20 to-purple-600/10 rounded-2xl p-6 border border-blue-400/20 shadow group hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">✨</span>
                  <h3 className="text-lg font-bold text-blue-100">Nettoyage intensif</h3>
                </div>
                <ul className="text-blue-100/90 text-base space-y-1 mb-2">
                  <li>Citadine : 150€</li>
                  <li>Berline : 159€</li>
                  <li>SUV/Break : 169€</li>
                  <li>Monospace : 179€</li>
                  <li>Utilitaire : 189€</li>
                </ul>
                <div className="text-xs text-blue-100/70">Intérieur + extérieur complet</div>
              </div>
              <div className="bg-gradient-to-br from-green-400/20 to-blue-600/10 rounded-2xl p-6 border border-green-400/20 shadow group hover:scale-105 transition-transform flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🏢</span>
                    <h3 className="text-lg font-bold text-green-100">Forfait entreprise</h3>
                  </div>
                  <div className="text-green-100/90 text-base mb-2">Sur devis personnalisé</div>
                  <div className="text-xs text-green-100/70">Flotte, utilitaires, pros</div>
                </div>
                <div className="mt-4 text-center">
                  <Link 
                    href="/#devis"
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Obtenir un devis gratuit
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-white/60 mt-2">Tarifs indicatifs, hors options et niveau de saleté.</div>
          </div>
        </div>

        {/* Simulateur de devis */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Devis personnalisé à {cityName}
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Obtenez un devis instantané et personnalisé pour votre véhicule. 
                Notre simulateur vous guide étape par étape pour un tarif précis.
              </p>
            </div>
            <StepByStepDevisSimulator />
          </div>
        </div>

        {/* Témoignage personnalisé si disponible */}
        {temoignage.texte && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-purple-900/40 via-pink-800/30 to-blue-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/20 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Témoignage client à {cityName}</h2>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <p className="text-white/90 text-lg italic mb-4">&quot;{temoignage.texte}&quot;</p>
                {temoignage.auteur && (
                  <p className="text-white/70 text-right">— {temoignage.auteur}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">Questions fréquentes à {cityName}</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">❓ Proposez-vous un car wash à domicile à {cityName} ?</h3>
                <p className="text-white/90 leading-relaxed">
                  Oui, Shine&amp;Go propose un service de car wash mobile à {cityName} et dans toute la région. Notre équipe se déplace directement chez vous pour un nettoyage auto professionnel, que vous habitiez le centre-ville ou les zones rurales autour de {cityName}.
                </p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">💶 Quels sont vos tarifs de lavage voiture à {cityName} ?</h3>
                <p className="text-white/90 leading-relaxed">
                  Nos tarifs varient selon le type de véhicule et le niveau de service choisi. Nous proposons des forfaits adaptés aux particuliers et aux entreprises à {cityName}. Contactez-nous pour un devis personnalisé gratuit, sans engagement.
                </p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">🌄 Est-ce que Shine&amp;Go intervient en zone rurale autour de {cityName} ?</h3>
                <p className="text-white/90 leading-relaxed">
                  Absolument ! Nous intervenons dans toute la région de {cityName}, y compris les zones rurales et les villages voisins. Notre service mobile nous permet de nous déplacer partout où vous en avez besoin.
                </p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">⏰ Quels sont vos horaires d&apos;intervention à {cityName} ?</h3>
                <p className="text-white/90 leading-relaxed">
                  Nous intervenons 7 jours sur 7 à {cityName}, du lundi au dimanche, de 8h à 19h. Nous nous adaptons à vos disponibilités et pouvons également intervenir sur votre lieu de travail.
                </p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">🚗 Quels types de véhicules nettoyez-vous à {cityName} ?</h3>
                <p className="text-white/90 leading-relaxed">
                  Nous nettoyons tous types de véhicules à {cityName} : voitures particulières, SUV, utilitaires, voitures de luxe, etc. Nos prestations s&apos;adaptent à chaque type de véhicule pour un résultat optimal.
                </p>
              </div>
              <div className="bg-slate-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">📞 Comment prendre rendez-vous pour un lavage à {cityName} ?</h3>
                <p className="text-white/90 leading-relaxed">
                  Pour prendre rendez-vous à {cityName}, contactez-nous par téléphone, WhatsApp ou via notre formulaire en ligne. Nous vous proposons rapidement un créneau adapté à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Villes voisines */}
        <NearbyCities currentCity={cityName} nearbyCities={nearbyCitiesList} />
      </main>
    </div>
  );
} 