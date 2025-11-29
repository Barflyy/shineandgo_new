import { Check, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Tarifs Nettoyage Voiture | Prix Transparents Shine&Go',
    description: 'Consultez nos tarifs pour le nettoyage auto à domicile. Intérieur dès 65€, Extérieur dès 85€, Complet dès 120€. Devis gratuit.',
    alternates: {
        canonical: 'https://shineandgo.be/tarifs',
    },
    openGraph: {
        title: 'Tarifs Nettoyage Voiture | Prix Transparents Shine&Go',
        description: 'Consultez nos tarifs pour le nettoyage auto à domicile. Intérieur dès 65€, Extérieur dès 85€, Complet dès 120€. Devis gratuit.',
        url: 'https://shineandgo.be/tarifs',
        siteName: 'Shine And Go',
        images: [
            {
                url: 'https://shineandgo.be/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Tarifs nettoyage voiture domicile Shine and Go',
            },
        ],
        locale: 'fr_BE',
        type: 'website',
    },
}

export default function TarifsPage() {
    return (
        <main className="bg-white min-h-screen font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Tarifs Nettoyage Voiture",
                        "provider": {
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
                            "priceRange": "65€ - 120€"
                        },
                        "offers": [
                            { "@type": "Offer", "name": "Intérieur", "price": "65", "priceCurrency": "EUR" },
                            { "@type": "Offer", "name": "Extérieur", "price": "85", "priceCurrency": "EUR" },
                            { "@type": "Offer", "name": "Complet", "price": "120", "priceCurrency": "EUR" }
                        ]
                    })
                }}
            />
            <section className="pt-28 pb-12 sm:pt-40 sm:pb-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
                        Nos Tarifs
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Des prix clairs, sans surprise. Déplacement inclus dans la zone de Liège.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Intérieur */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Intérieur</h3>
                            <div className="text-4xl font-light text-gray-900 mb-6">65€</div>
                            <ul className="space-y-3 mb-8 text-gray-600">
                                <li className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> Aspiration complète</li>
                                <li className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> Plastiques & Vitres</li>
                                <li className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> Désinfection</li>
                            </ul>
                            <Link href="/nettoyage-interieur-voiture" className="block w-full py-3 text-center border border-gray-300 rounded-xl font-medium hover:bg-gray-50">
                                Détails
                            </Link>
                        </div>

                        {/* Complet */}
                        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl text-white relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">Best Seller</div>
                            <h3 className="text-2xl font-semibold mb-2">Complet</h3>
                            <div className="text-4xl font-light mb-6">120€</div>
                            <ul className="space-y-3 mb-8 text-slate-300">
                                <li className="flex gap-2"><Check className="w-5 h-5 text-blue-400" /> Tout l'intérieur</li>
                                <li className="flex gap-2"><Check className="w-5 h-5 text-blue-400" /> Lavage extérieur main</li>
                                <li className="flex gap-2"><Check className="w-5 h-5 text-blue-400" /> Cire de protection</li>
                            </ul>
                            <Link href="/nettoyage-complet-voiture" className="block w-full py-3 text-center bg-blue-600 rounded-xl font-medium hover:bg-blue-500">
                                Réserver
                            </Link>
                        </div>

                        {/* Extérieur */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Extérieur</h3>
                            <div className="text-4xl font-light text-gray-900 mb-6">85€</div>
                            <ul className="space-y-3 mb-8 text-gray-600">
                                <li className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> Prélavage mousse</li>
                                <li className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> Lavage main (2 seaux)</li>
                                <li className="flex gap-2"><Check className="w-5 h-5 text-green-500" /> Jantes & Pneus</li>
                            </ul>
                            <Link href="/nettoyage-exterieur-voiture" className="block w-full py-3 text-center border border-gray-300 rounded-xl font-medium hover:bg-gray-50">
                                Détails
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
