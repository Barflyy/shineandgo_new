import cityData from '../../../villes_shineandgo_enrichi.json';

interface CityContent {
  ville: string;
  description: string;
  avantages: string[];
  temoignages: Array<{
    name: string;
    rating: number;
    text: string;
    localisation?: string;
    type_vehicule?: string;
  }>;
  servicesSpecifiques: string[];
  statistiques: {
    noteMoyenne: string;
    satisfaction: string;
    clientsRavis: string;
    interventionsMensuelles?: string;
  };
  anecdotes: string[];
  population?: string;
  typeVille?: string;
  particularites?: string[];
  clienteleType?: string;
}

function getCityContent(citySlug: string): CityContent {
  const data = cityData as any;
  const city = data[citySlug];
  if (!city || !city.contenu_enrichi) {
    // fallback générique si la ville n'est pas enrichie
    const cityName = city?.ville || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
    return {
      ville: cityName,
      description: `Service premium de nettoyage automobile à ${cityName} et ses environs. Notre équipe mobile intervient dans toute la région pour redonner l'éclat à votre véhicule avec des produits haut de gamme.`,
      avantages: [
        `Intervention dans tout ${cityName}`,
        'Produits professionnels allemands',
        'Service 7j/7 disponible',
        'Garantie satisfaction incluse'
      ],
      temoignages: [
        { name: 'Client satisfait', rating: 5, text: `Service excellent à ${cityName} ! Très professionnel et efficace.`, localisation: cityName },
        { name: 'Client ravi', rating: 5, text: 'Résultat exceptionnel, je recommande vivement !', localisation: 'Région' },
        { name: 'Client fidèle', rating: 4, text: 'Service pratique à domicile, très satisfait.', localisation: 'Environs' }
      ],
      servicesSpecifiques: [
        'Nettoyage intérieur et extérieur complet',
        'Traitement hydrophobe ProtectorWax',
        'Protection plastiques CarPro Perl',
        'Nettoyage jantes et pneus'
      ],
      statistiques: {
        noteMoyenne: '4.8',
        satisfaction: '100%',
        clientsRavis: '30+'
      },
      anecdotes: []
    };
  }
  // Génération dynamique à partir du JSON enrichi
  const c = city.contenu_enrichi;
  const infos = city.informations_locales || {};
  return {
    ville: city.ville,
    description: c.description_variantes[0],
    avantages: c.avantages_specifiques,
    temoignages: c.temoignages_locaux.map((t: { nom: string; note: number; texte: string; localisation?: string; type_vehicule?: string }) => ({
      name: t.nom,
      rating: t.note,
      text: t.texte,
      localisation: t.localisation,
      type_vehicule: t.type_vehicule
    })),
    servicesSpecifiques: c.services_detailles,
    statistiques: {
      noteMoyenne: c.statistiques_locales.note_moyenne,
      satisfaction: c.statistiques_locales.satisfaction,
      clientsRavis: c.statistiques_locales.clients_ravis,
      interventionsMensuelles: c.statistiques_locales.interventions_mensuelles
    },
    anecdotes: c.anecdotes_locales,
    population: infos.population,
    typeVille: infos.type_ville,
    particularites: infos.particularites,
    clienteleType: infos.clientele_type
  };
}

export { getCityContent };
export type { CityContent }; 