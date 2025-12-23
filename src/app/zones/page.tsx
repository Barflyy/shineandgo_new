import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Zones d\'Intervention | Nettoyage Voiture Domicile Liège',
    description: 'Découvrez nos zones d\'intervention pour le lavage auto à domicile : Liège, Herve, Verviers, Spa, Visé, Battice, Fléron, Soumagne. Déplacement gratuit.',
    alternates: {
        canonical: 'https://shineandgo.be/zones',
    },
    openGraph: {
        title: 'Zones d\'Intervention | Nettoyage Voiture Domicile Liège',
        description: 'Découvrez nos zones d\'intervention pour le lavage auto à domicile : Liège, Herve, Verviers, Spa, Visé, Battice, Fléron, Soumagne. Déplacement gratuit.',
        url: 'https://shineandgo.be/zones',
        siteName: 'Shine&Go',
        images: [
            {
                url: '/transformations/optimized/webp/apres01.webp',
                width: 1200,
                height: 630,
                alt: 'Zones intervention Shine and Go',
            },
        ],
        locale: 'fr_BE',
        type: 'website',
    },
}

export default function ZonesPage() {
    const regions = [
        {
            title: "Plateau de Herve",
            cities: [
                { name: 'Herve', href: '/nettoyage-voiture-herve' },
                { name: 'Battice', href: '/nettoyage-voiture-battice' },
                { name: 'Soumagne', href: '/nettoyage-voiture-soumagne' },
                { name: 'Aubel', href: '/nettoyage-voiture-aubel' },
                { name: 'Thimister', href: '/nettoyage-voiture-thimister' },
                { name: 'Clermont', href: '/nettoyage-voiture-clermont' },
                { name: 'Melier', href: '/nettoyage-voiture-melier' },
                { name: 'Charneux', href: '/nettoyage-voiture-charneux' },
                { name: 'Xhendelesse', href: '/nettoyage-voiture-xhendelesse' },
                { name: 'Bolland', href: '/nettoyage-voiture-bolland' },
                { name: 'Melen', href: '/nettoyage-voiture-melen' },
                { name: 'Olne', href: '/nettoyage-voiture-olne' },
            ]
        },
        {
            title: "Région de Verviers",
            cities: [
                { name: 'Verviers', href: '/nettoyage-voiture-verviers' },
                { name: 'Heusy', href: '/nettoyage-voiture-heusy' },
                { name: 'Ensival', href: '/nettoyage-voiture-ensival' },
                { name: 'Lambermont', href: '/nettoyage-voiture-lambermont' },
                { name: 'Dison', href: '/nettoyage-voiture-dison' },
                { name: 'Pepinster', href: '/nettoyage-voiture-pepinster' },
                { name: 'Theux', href: '/nettoyage-voiture-theux' },
                { name: 'Spa', href: '/nettoyage-voiture-spa' },
                { name: 'Jalhay', href: '/nettoyage-voiture-jalhay' },
                { name: 'Sart', href: '/nettoyage-voiture-sart' },
                { name: 'Limbourg', href: '/nettoyage-voiture-limbourg' },
                { name: 'Stavelot', href: '/nettoyage-voiture-stavelot' },
                { name: 'Malmedy', href: '/nettoyage-voiture-malmedy' },
                { name: 'Francorchamps', href: '/nettoyage-voiture-francorchamps' },
            ]
        },
        {
            title: "Grand Liège",
            cities: [
                { name: 'Liège', href: '/nettoyage-voiture-liege' },
                { name: 'Chaudfontaine', href: '/nettoyage-voiture-chaudfontaine' },
                { name: 'Embourg', href: '/nettoyage-voiture-embourg' },
                { name: 'Fléron', href: '/nettoyage-voiture-fleron' },
                { name: 'Beyne-Heusay', href: '/nettoyage-voiture-beyne-heusay' },
                { name: 'Herstal', href: '/nettoyage-voiture-herstal' },
                { name: 'Ans', href: '/nettoyage-voiture-ans' },
                { name: 'Rocourt', href: '/nettoyage-voiture-rocourt' },
                { name: 'Saint-Nicolas', href: '/nettoyage-voiture-saint-nicolas' },
                { name: 'Seraing', href: '/nettoyage-voiture-seraing' },
                { name: 'Boncelles', href: '/nettoyage-voiture-boncelles' },
                { name: 'Trooz', href: '/nettoyage-voiture-trooz' },
            ]
        },
        {
            title: "Basse-Meuse",
            cities: [
                { name: 'Visé', href: '/nettoyage-voiture-vise' },
                { name: 'Argenteau', href: '/nettoyage-voiture-argenteau' },
                { name: 'Hermalle', href: '/nettoyage-voiture-hermalle' },
                { name: 'Oupeye', href: '/nettoyage-voiture-oupeye' },
                { name: 'Dalhem', href: '/nettoyage-voiture-dalhem' },
                { name: 'Warsage', href: '/nettoyage-voiture-warsage' },
                { name: 'Bassenge', href: '/nettoyage-voiture-bassenge' },
                { name: 'Blegny', href: '/nettoyage-voiture-blegny' },
                { name: 'Saive', href: '/nettoyage-voiture-saive' },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 py-20 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Shine&Go",
                        "image": "/transformations/optimized/webp/apres01.webp",
                        "telephone": "+32472303701",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Rue de la Station 15",
                            "addressLocality": "Herve",
                            "postalCode": "4650",
                            "addressRegion": "Liège",
                            "addressCountry": "BE"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "50.6402",
                            "longitude": "5.7946"
                        },
                        "url": "https://shineandgo.be/zones",
                        "areaServed": regions.flatMap(r => r.cities.map(c => c.name))
                    })
                }}
            />

            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                        Zones d'intervention
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Shine&Go se déplace gratuitement à votre domicile ou sur votre lieu de travail partout en province de Liège.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {regions.map((region, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                {region.title}
                            </h2>
                            <ul className="space-y-3">
                                {region.cities.map((city) => (
                                    <li key={city.name}>
                                        <Link
                                            href={city.href}
                                            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-600 transition-colors"></span>
                                            {city.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-6">
                        Votre localité n'est pas dans la liste ?
                    </p>
                    <a
                        href="tel:+32472303701"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                    >
                        Appelez-nous pour vérifier
                    </a>
                </div>
            </div>
        </main>
    )
}
