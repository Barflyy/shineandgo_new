import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Zones d\'Intervention | Lavage Voiture Domicile Liège',
    description: 'Découvrez nos zones d\'intervention pour le lavage auto à domicile : Liège, Herve, Verviers, Spa, Visé, Battice, Fléron, Soumagne. Déplacement gratuit.',
    alternates: {
        canonical: 'https://shineandgo.be/zones',
    },
    openGraph: {
        title: 'Zones d\'Intervention | Lavage Voiture Domicile Liège',
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
                { name: 'Herve', href: '/lavage-voiture-herve' },
                { name: 'Battice', href: '/lavage-voiture-battice' },
                { name: 'Soumagne', href: '/lavage-voiture-soumagne' },
                { name: 'Aubel', href: '/lavage-voiture-aubel' },
                { name: 'Thimister', href: '/lavage-voiture-thimister' },
                { name: 'Clermont', href: '/lavage-voiture-clermont' },
                { name: 'Melier', href: '/lavage-voiture-melier' },
                { name: 'Charneux', href: '/lavage-voiture-charneux' },
                { name: 'Xhendelesse', href: '/lavage-voiture-xhendelesse' },
                { name: 'Bolland', href: '/lavage-voiture-bolland' },
                { name: 'Melen', href: '/lavage-voiture-melen' },
                { name: 'Olne', href: '/lavage-voiture-olne' },
            ]
        },
        {
            title: "Région de Verviers",
            cities: [
                { name: 'Verviers', href: '/lavage-voiture-verviers' },
                { name: 'Heusy', href: '/lavage-voiture-heusy' },
                { name: 'Ensival', href: '/lavage-voiture-ensival' },
                { name: 'Lambermont', href: '/lavage-voiture-lambermont' },
                { name: 'Dison', href: '/lavage-voiture-dison' },
                { name: 'Pepinster', href: '/lavage-voiture-pepinster' },
                { name: 'Theux', href: '/lavage-voiture-theux' },
                { name: 'Spa', href: '/lavage-voiture-spa' },
                { name: 'Jalhay', href: '/lavage-voiture-jalhay' },
                { name: 'Sart', href: '/lavage-voiture-sart' },
                { name: 'Limbourg', href: '/lavage-voiture-limbourg' },
                { name: 'Stavelot', href: '/lavage-voiture-stavelot' },
                { name: 'Malmedy', href: '/lavage-voiture-malmedy' },
                { name: 'Francorchamps', href: '/lavage-voiture-francorchamps' },
            ]
        },
        {
            title: "Grand Liège",
            cities: [
                { name: 'Liège', href: '/lavage-voiture-liege' },
                { name: 'Chaudfontaine', href: '/lavage-voiture-chaudfontaine' },
                { name: 'Embourg', href: '/lavage-voiture-embourg' },
                { name: 'Fléron', href: '/lavage-voiture-fleron' },
                { name: 'Beyne-Heusay', href: '/lavage-voiture-beyne-heusay' },
                { name: 'Herstal', href: '/lavage-voiture-herstal' },
                { name: 'Ans', href: '/lavage-voiture-ans' },
                { name: 'Rocourt', href: '/lavage-voiture-rocourt' },
                { name: 'Saint-Nicolas', href: '/lavage-voiture-saint-nicolas' },
                { name: 'Seraing', href: '/lavage-voiture-seraing' },
                { name: 'Boncelles', href: '/lavage-voiture-boncelles' },
                { name: 'Trooz', href: '/lavage-voiture-trooz' },
            ]
        },
        {
            title: "Basse-Meuse",
            cities: [
                { name: 'Visé', href: '/lavage-voiture-vise' },
                { name: 'Argenteau', href: '/lavage-voiture-argenteau' },
                { name: 'Hermalle', href: '/lavage-voiture-hermalle' },
                { name: 'Oupeye', href: '/lavage-voiture-oupeye' },
                { name: 'Dalhem', href: '/lavage-voiture-dalhem' },
                { name: 'Warsage', href: '/lavage-voiture-warsage' },
                { name: 'Bassenge', href: '/lavage-voiture-bassenge' },
                { name: 'Blegny', href: '/lavage-voiture-blegny' },
                { name: 'Saive', href: '/lavage-voiture-saive' },
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
