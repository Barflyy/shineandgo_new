import { Building2, Check, Mail, Phone, Briefcase, Users, Calendar, ArrowRight } from 'lucide-react'
import Breadcrumbs from "@/components/Breadcrumbs"
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Lavage Voiture Entreprise & Flotte | Shine&Go B2B Liège',
    description: 'Service de nettoyage de flotte automobile pour entreprises en province de Liège. Lavage sur site ou à domicile. Facturation mensuelle. Devis gratuit sous 24h.',
    alternates: {
        canonical: 'https://shineandgo.be/entreprises',
    },
    openGraph: {
        title: 'Lavage Voiture Entreprise & Flotte | Shine&Go B2B',
        description: 'Service de nettoyage de flotte automobile pour entreprises. Lavage sur site ou à domicile. Facturation mensuelle. Devis gratuit sous 24h.',
        url: 'https://shineandgo.be/entreprises',
        siteName: 'Shine&Go',
        images: [
            {
                url: '/transformations/optimized/webp/apres01.webp',
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
            <Breadcrumbs
                items={[
                    { label: 'Accueil', href: '/' },
                    { label: 'Entreprises' }
                ]}
            />

            {/* HERO */}
            <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                            <Building2 className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-blue-100">Solutions Corporate & Flottes</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
                            Nettoyage de Flotte Automobile <span className="block font-semibold mt-2 text-blue-400">Province de Liège</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light max-w-2xl mx-auto">
                            Optimisez la valeur de vos actifs et soignez votre image de marque. Nous gérons l'entretien de votre parc automobile directement sur votre parking ou au domicile de vos employés.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:info@shineandgo.be?subject=Demande de devis B2B - Flotte Automobile"
                                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                            >
                                <Mail className="w-4 h-4" />
                                Demander un devis B2B
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

            {/* NOS SOLUTIONS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light text-gray-900 mb-4">Nos solutions sur-mesure</h2>
                        <p className="text-gray-600">Une approche flexible pour répondre aux besoins de chaque entreprise</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-100 transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Briefcase className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Flotte Partagée</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">Idéal pour les parcs de véhicules de fonction ou utilitaires. Nous intervenons sur votre parking d'entreprise de manière programmée.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-500" /> Facturation mensuelle</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-500" /> Rapport d'intervention</li>
                            </ul>
                        </div>

                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-100 transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Employee Benefits</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">Offrez le nettoyage de voiture comme avantage extra-légal. Nous intervenons directement au domicile de vos collaborateurs.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-500" /> Valorisation RH</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-500" /> Couverture Wallonie</li>
                            </ul>
                        </div>

                        <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-100 transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Calendar className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Préparation Vente</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">Nettoyage profond avant retour de leasing ou mise en vente de vos véhicules de société.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-500" /> Gain de plus-value</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-500" /> Pressing complet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ B2B */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center text-balance">Questions Entreprises</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Proposez-vous une facturation périodique ?", a: "Oui, nous mettons en place une facturation mensuelle regroupant toutes les interventions effectuées sur votre flotte." },
                                { q: "Quelles sont vos capacités d'intervention ?", a: "Nous pouvons traiter jusqu'à 5 véhicules par jour et par unité mobile. Pour des flottes plus importantes, nous planifions les passages sur plusieurs jours." },
                                { q: "Avez-vous besoin d'accès à l'eau sur nos parkings ?", a: "Idéalement oui, mais nous possédons des solutions autonomes si aucun point d'eau n'est accessible sur votre site." },
                                { q: "Intervenez-vous sur les utilitaires ?", a: "Tout à fait. Nous nettoyons les citadines, berlines, SUV mais aussi les camionnettes et utilitaires légers." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="font-medium text-gray-900 mb-2">{item.q}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT B2B */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-blue-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 relative">Optimisez votre flotte dès aujourd'hui</h2>
                        <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto relative">
                            Contactez notre responsable B2B pour une analyse gratuite de vos besoins et un devis personnalisé.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
                            <a
                                href="mailto:info@shineandgo.be"
                                className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Nous écrire
                            </a>
                            <a
                                href="tel:+32472303701"
                                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                0472 30 37 01
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

