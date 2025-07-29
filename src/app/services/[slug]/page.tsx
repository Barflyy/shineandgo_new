import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

// Données statiques pour les services
const servicesData = {
  'nettoyage-interieur-voiture': {
    title: 'Nettoyage Intérieur Voiture',
    description: 'Service complet de nettoyage intérieur avec aspiration et protection UV',
    price: 'À partir de 39€',
    duration: '45-60 minutes',
    features: [
      'Aspiration complète sièges & sols',
      'Nettoyage tableau de bord et plastiques',
      'Vitres intérieures sans traces',
      'Protection UV avec CarPro Perl'
    ],
    content: `
      <h2>Service de nettoyage intérieur professionnel</h2>
      <p>Notre service de nettoyage intérieur voiture comprend une aspiration complète, un nettoyage des surfaces et une protection UV pour préserver votre véhicule.</p>
    `
  },
  'nettoyage-exterieur-voiture': {
    title: 'Nettoyage Extérieur Voiture',
    description: 'Lavage extérieur professionnel avec protection hydrophobe',
    price: 'À partir de 49€',
    duration: '60-75 minutes',
    features: [
      'Mousse active dégraissante',
      'Lavage manuel technique professionnel',
      'Vitres extérieures & seuils impeccables',
      'ProtectorWax Koch-Chemie inclus'
    ],
    content: `
      <h2>Lavage extérieur de qualité showroom</h2>
      <p>Notre service de lavage extérieur utilise des produits professionnels pour un résultat brillant et durable.</p>
    `
  },
  'nettoyage-complet-voiture': {
    title: 'Pack Sérénité - Lavage Complet',
    description: 'Service complet intérieur et extérieur avec protection longue durée',
    price: 'À partir de 79€',
    duration: '90-120 minutes',
    features: [
      'Lavage intérieur & extérieur complet',
      'Mousse active & rinçage haute pression',
      'Protection 2 mois ProtectorWax',
      'Plastiques protégés CarPro Perl'
    ],
    content: `
      <h2>Service complet premium</h2>
      <p>Le pack sérénité combine nos meilleurs services pour un résultat showroom garanti.</p>
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = servicesData[slug as keyof typeof servicesData]
  
  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative z-10" style={{backgroundColor: 'white', opacity: 1}}>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            
            {service.description && (
              <p className="text-xl text-gray-600 mb-6">
                {service.description}
              </p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {service.price && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900">Prix</h3>
                  <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                </div>
              )}
              
              {service.duration && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900">Durée estimée</h3>
                  <p className="text-xl font-semibold text-green-600">{service.duration}</p>
                </div>
              )}
            </div>
            
            {service.features && service.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Caractéristiques
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {service.content && (
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.content }} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 