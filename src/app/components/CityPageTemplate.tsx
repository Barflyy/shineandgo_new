import type { Metadata } from "next";
import Header from "./Header";
import NearbyCities from "./NearbyCities";
import CityServiceContent from "./CityServiceContent";
import StepByStepDevisSimulator from "./StepByStepDevisSimulator";
import TransformationsSection from "./TransformationsSection";
import { getCityData, getCityTemoignage, getNearbyCities, getCityDisplayName, getCitySpecificContent, getCitySectionContent } from "../utils/cityData";

interface CityPageTemplateProps {
  citySlug: string;
}

export async function generateMetadata({ params }: { params: { citySlug: string } }): Promise<Metadata> {
  const cityInfo = getCityData(params.citySlug);
  const cityName = cityInfo?.ville || params.citySlug;
  
  return {
    title: `Lavage voiture ${cityName} | Shine&Go à domicile`,
    description: `Nettoyage auto à ${cityName} : lavage intérieur/extérieur premium à domicile. Envoi direct sur WhatsApp. Réponse rapide.`,
    openGraph: {
      title: `Lavage voiture ${cityName} | Shine&Go à domicile`,
      description: `Nettoyage auto à ${cityName} : lavage intérieur/extérieur premium à domicile. Envoi direct sur WhatsApp. Réponse rapide.`,
      type: "website",
      locale: "fr_BE",
      url: `https://www.shineandgo.be/zone-intervention/${params.citySlug}`,
      siteName: "Shine&Go Premium",
    },
    twitter: {
      card: "summary_large_image",
      title: `Lavage voiture ${cityName} | Shine&Go à domicile`,
      description: `Nettoyage auto à ${cityName} : lavage intérieur/extérieur premium à domicile. Envoi direct sur WhatsApp. Réponse rapide.`,
    },
    alternates: {
      canonical: `/zone-intervention/${params.citySlug}`,
    },
  };
}

export default function CityPageTemplate({ citySlug }: CityPageTemplateProps) {
  const cityInfo = getCityData(citySlug);
  const cityName = cityInfo?.ville || citySlug;
  const nearbyCities = getNearbyCities(citySlug);
  const temoignage = getCityTemoignage(citySlug);

  // Créer la liste des villes voisines pour le composant NearbyCities
  const nearbyCitiesList = nearbyCities.map(city => ({
    name: getCityDisplayName(city),
    slug: city
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-'),
    distance: "-"
  }));

  // Fonction pour encoder les messages WhatsApp
  const encodeWhatsAppMessage = (message: string) => {
    return encodeURIComponent(message);
  };

  // Messages WhatsApp pré-remplis
  const whatsappDevisMessage = encodeWhatsAppMessage(`Bonjour Shine&Go, je souhaite un devis pour un nettoyage voiture à ${cityName} !`);
  const whatsappContactMessage = encodeWhatsAppMessage(`Bonjour Shine&Go, je souhaite un devis pour le nettoyage de ma voiture à ${cityName}.`);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <Header cityName={cityName} />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nettoyage voiture à {cityName} – Service mobile haut de gamme
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Intro + promesse locale avec CTA WhatsApp */}
        <div className="text-center mb-8">
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
            Vous cherchez un car wash de qualité à {cityName} ? Shine&Go vous propose un service professionnel de nettoyage auto à domicile. En un clic, demandez votre devis gratuit via WhatsApp 👇
          </p>
          <a 
            href={`https://wa.me/32472303701?text=${whatsappDevisMessage}`}
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Demander un devis via WhatsApp
          </a>
        </div>

        {/* Content Section */}
        <CityServiceContent
          city={cityName}
          region="ville et environs"
          villages={nearbyCities.slice(0, 5)}
          nearbyCities={[cityName, ...nearbyCities]}
        />

        {/* Pourquoi choisir Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Pourquoi choisir Shine&Go à {cityName} ?
                </h2>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  {getCitySectionContent(citySlug, 'why-choose-intro')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-3 rounded-lg mr-4">
                      <span className="text-xl md:text-2xl">🚗</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Car wash à domicile</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Profitez d&apos;un car wash {cityName} sans bouger de chez vous. Nous venons à {cityName} et dans les environs pour un lavage voiture premium.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 p-3 rounded-lg mr-4">
                      <span className="text-xl md:text-2xl">🧽</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Nettoyage auto haut de gamme</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Nos produits (Koch Chemie, CarPro) garantissent un nettoyage auto {cityName} irréprochable, intérieur et extérieur.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-3 rounded-lg mr-4">
                      <span className="text-xl md:text-2xl">⚡</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Service rapide & flexible</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Intervention 7j/7 à {cityName}, prise de rendez-vous simple, lavage à domicile ou sur votre lieu de travail.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 p-3 rounded-lg mr-4">
                      <span className="text-xl md:text-2xl">🏆</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Satisfaction garantie</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Plus de 50 clients locaux déjà conquis à {cityName}. Nettoyage véhicule avec résultat professionnel et clients ravis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Devis Simulator Section */}
        <section className="py-8 md:py-16">
          <StepByStepDevisSimulator city={cityName} />
        </section>

        {/* Transformations Section */}
        <section className="py-8 md:py-16">
          <TransformationsSection />
        </section>

        {/* Services Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Nos services à {cityName}
                </h2>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  {getCitySectionContent(citySlug, 'services-intro')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-3 rounded-lg mr-4">
                      <span className="text-xl md:text-2xl">🚘</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Nettoyage extérieur</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 leading-relaxed text-sm md:text-base list-disc list-inside">
                    <li>Prélavage sans contact à la mousse active (canon à mousse)</li>
                    <li>Lavage manuel carrosserie avec gants microfibres premium</li>
                    <li>Nettoyage jantes, passages de roues et pneus</li>
                    <li>Séchage microfibre et souffleur pour les zones sensibles</li>
                    <li>Application d&apos;un traitement hydrophobe</li>
                    <li>Finition brillante sans traces</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 p-3 rounded-lg mr-4">
                      <span className="text-xl md:text-2xl">🧼</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Nettoyage intérieur</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 leading-relaxed text-sm md:text-base list-disc list-inside">
                    <li>Aspiration complète (sièges, tapis, moquettes, coffre, recoins)</li>
                    <li>Soufflage des grilles de ventilation et zones difficiles d&apos;accès</li>
                    <li>Nettoyage en profondeur des plastiques et éléments de bord</li>
                    <li>Traitement anti-statique sur les plastiques et surfaces</li>
                    <li>Vitres intérieures nettoyées sans traces</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="contact-section w-full flex flex-col items-center justify-center gap-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Besoin d&apos;un devis à {cityName} ?</h2>
                <p className="text-gray-300 text-base md:text-lg mb-2">{getCitySectionContent(citySlug, 'contact-intro')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <a 
                  href={`https://wa.me/32472303701?text=${whatsappContactMessage}`}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-green-400/20"
                  aria-label="WhatsApp Direct"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp Direct</span>
                </a>
                <a 
                  href="tel:+32472303701"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-blue-400/20"
                  aria-label="Appel Direct"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Appel Direct</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignage personnalisé si disponible */}
        {temoignage.texte && (
          <section className="py-8 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                    Témoignage client à {cityName}
                  </h2>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl text-center">
                  <p className="text-gray-300 text-lg italic mb-4">&quot;{temoignage.texte}&quot;</p>
                  {temoignage.auteur && (
                    <p className="text-gray-400 text-right">— {temoignage.auteur}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Questions fréquentes à {cityName}
                </h2>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  {getCitySpecificContent(citySlug, 'faq')}
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">❓ Proposez-vous un car wash à domicile à {cityName} ?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Oui, Shine&amp;Go propose un service de car wash mobile à {cityName} et dans toute la région. Notre équipe se déplace directement chez vous pour un nettoyage auto professionnel, que vous habitiez le centre-ville ou les zones rurales autour de {cityName}.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">💶 Quels sont vos tarifs de lavage voiture à {cityName} ?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Nos tarifs varient selon le type de véhicule et le niveau de service choisi. Nous proposons des forfaits adaptés aux particuliers et aux entreprises à {cityName}. Contactez-nous pour un devis personnalisé gratuit, sans engagement.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">🌄 Est-ce que Shine&amp;Go intervient en zone rurale autour de {cityName} ?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Absolument ! Nous intervenons dans toute la région de {cityName}, y compris les zones rurales et les villages voisins. Notre service mobile nous permet de nous déplacer partout où vous en avez besoin.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">⏰ Quels sont vos horaires d&apos;intervention à {cityName} ?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Nous intervenons 7 jours sur 7 à {cityName}, du lundi au dimanche, de 8h à 19h. Nous nous adaptons à vos disponibilités et pouvons également intervenir sur votre lieu de travail.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">🚗 Quels types de véhicules nettoyez-vous à {cityName} ?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Nous nettoyons tous types de véhicules à {cityName} : voitures particulières, SUV, utilitaires, voitures de luxe, etc. Nos prestations s&apos;adaptent à chaque type de véhicule pour un résultat optimal.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">📞 Comment prendre rendez-vous pour un lavage à {cityName} ?</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Pour prendre rendez-vous à {cityName}, contactez-nous par téléphone, WhatsApp ou via notre formulaire en ligne. Nous vous proposons rapidement un créneau adapté à vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Villes voisines */}
        <NearbyCities currentCity={cityName} nearbyCities={nearbyCitiesList} />
      </main>


    </div>
  );
} 