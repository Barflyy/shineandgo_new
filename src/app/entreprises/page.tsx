import { Building2, Check, Mail, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Lavage Voiture Entreprise & Flotte | Shine&Go B2B',
    description: 'Service de nettoyage de flotte automobile pour entreprises. Lavage sur site ou à domicile. Facturation mensuelle. Devis gratuit sous 24h.',
    alternates: {
        canonical: 'https://shineandgo.be/entreprises',
    },
    openGraph: {
        title: 'Lavage Voiture Entreprise & Flotte | Shine&Go B2B',
        description: 'Service de nettoyage de flotte automobile pour entreprises. Lavage sur site ou à domicile. Facturation mensuelle. Devis gratuit sous 24h.',
        url: 'https://shineandgo.be/entreprises',
        siteName: 'Shine And Go',
        images: [
            {
                url: 'https://shineandgo.be/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Lavage voiture entreprise flotte Shine and Go',
            },
        ],
        locale: 'fr_BE',
        type: 'website',
    },
}

export default function EntreprisePage() {
    return (
        <main className="bg-white min-h-screen font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Nettoyage Flotte Automobile Entreprise",
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
                            ]
                        },
                        "serviceType": "B2B",
                        "areaServed": ["Herve", "Verviers", "Liège", "Battice", "Soumagne", "Spa", "Fléron", "Visé"],
                        "description": "Service de nettoyage de flotte automobile pour entreprises. Lavage sur site ou à domicile. Facturation mensuelle."
                    })
                }}
            />
            {/* HERO */}
            <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                            <Building2 className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-blue-100">Service Professionnel B2B</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
                            Lavage de Flotte Automobile <span className="block font-semibold mt-2 text-blue-400">pour Entreprises</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light max-w-2xl mx-auto">
                            Valorisez l'image de votre société avec des véhicules impeccables.
                            Intervention sur site ou au domicile de vos collaborateurs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:info@shineandgo.be"
                                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4" />
                                Demander un devis
                            </a>
                            <a
                                href="tel:+32472303701"
                                className="px-8 py-4 border border-slate-700 text-white font-medium rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                0472 30 37 01
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AVANTAGES */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: 'Image de Marque',
                                desc: 'Des véhicules toujours propres pour refléter le professionnalisme de votre entreprise.',
                            },
                            {
                                title: 'Gain de Temps',
                                desc: 'Nous intervenons pendant les heures de bureau, sur votre parking. Aucun déplacement nécessaire.',
                            },
                            {
                                title: 'Flexibilité Totale',
                                desc: 'Formules ponctuelles ou contrats d\'entretien réguliers. Facturation simplifiée.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
