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
        siteName: 'Shine And Go',
        images: [
            {
                url: 'https://shineandgo.be/og-image.jpg',
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
    return (
        <main className="container mx-auto px-6 py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Shine&Go",
                        "image": "https://shineandgo.be/og-image.jpg",
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
                        "sameAs": [
                            "https://www.facebook.com/votrepage",
                            "https://www.instagram.com/shineandgo/"
                        ],
                        "areaServed": ["Herve", "Verviers", "Liège", "Battice", "Soumagne", "Spa", "Fléron", "Visé"],
                        "url": "https://shineandgo.be/zones"
                    })
                }}
            />
            <h1 className="text-4xl font-light text-gray-900 mb-8 text-center">
                Nos zones d'intervention
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
                Nous nous déplaçons gratuitement dans toute la province de Liège.
            </p>

            {/* Placeholder for future dynamic list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                    <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Liège & Alentours</h2>
                    <p className="text-gray-500">Service quotidien</p>
                </div>
                {/* Add more zones here later */}
            </div>
        </main>
    )
}
