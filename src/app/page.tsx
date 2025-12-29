import { ArrowRight, Check, Star, Clock, Sparkles, Car, Armchair, MapPin, Phone, X, Droplets, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lavage Voiture à Domicile Liège, Verviers, Herve | Shine&Go',
    description: 'Service de lavage voiture à domicile en région liégeoise. Lavage voiture professionnel, nettoyage véhicule intérieur/extérieur. Dès 65€. Déplacement gratuit. ☎ 0472 30 37 01',
    alternates: {
        canonical: 'https://shineandgo.be',
    },
    openGraph: {
        title: 'Lavage Voiture à Domicile | Shine&Go Liège',
        description: 'Lavage voiture professionnel à domicile. Service mobile premium en Wallonie. Dès 65€.',
        url: 'https://shineandgo.be',
        siteName: 'Shine&Go',
        locale: 'fr_BE',
        type: 'website',
    },
}

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://shineandgo.be/#organization",
    "name": "Shine&Go",
    "description": "Service professionnel de lavage voiture à domicile en région liégeoise.",
    "url": "https://shineandgo.be",
    "telephone": "+32472303701",
    "priceRange": "€€",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Herve",
        "addressRegion": "Liège",
        "addressCountry": "BE"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "156"
    }
}

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Combien coûte un lavage voiture à domicile ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nos tarifs démarrent à 65€ pour un lavage intérieur, 85€ pour l'extérieur, et 120€ pour la formule complète."
            }
        },
        {
            "@type": "Question",
            "name": "Dans quelles villes intervenez-vous ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nous intervenons dans toute la région liégeoise : Liège, Herve, Verviers, Spa, Battice, et plus de 40 autres communes."
            }
        },
        {
            "@type": "Question",
            "name": "Combien de temps dure un lavage complet ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Un lavage complet intérieur + extérieur dure environ 2 à 3 heures selon l'état du véhicule."
            }
        }
    ]
}

export default function TestCardsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <main className="bg-gray-50 min-h-screen font-sans">

                {/* HERO - Minimaliste */}
                <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 rounded-full">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-600">4.9/5 sur Google</span>
                            </div>

                            {/* Titre */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                                Lavage voiture à domicile
                            </h1>

                            <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
                                Service professionnel en région liégeoise. On vient chez vous, vous profitez du résultat.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://wa.me/32472303701"
                                    className="group px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
                                >
                                    Réserver
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="tel:+32472303701"
                                    className="px-8 py-4 text-gray-600 font-medium flex items-center gap-2 hover:text-gray-900 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    0472 30 37 01
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CONTENU - Bento Grid */}
                <div className="container mx-auto px-4 sm:px-6 py-16 space-y-8">

                    {/* SECTION - Nos Services Détaillés */}
                    <section>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nos Services</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Un nettoyage méticuleux adapté à vos besoins</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Intérieur */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Armchair className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Intérieur</h3>
                                <div className="text-3xl font-bold text-gray-900 mb-4">Dès 65€</div>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Aspiration complète</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Nettoyage plastiques & tableau de bord</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Vitres intérieures</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Désodorisation</li>
                                </ul>
                                <a href="https://wa.me/32472303701?text=Je souhaite un lavage intérieur" className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all">
                                    Réserver <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Complet - Mise en avant */}
                            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-4 right-4 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</div>
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <Sparkles className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Complet</h3>
                                <div className="text-3xl font-bold mb-4">Dès 120€</div>
                                <ul className="space-y-2 text-sm text-slate-300 mb-6">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Tout l'intérieur</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Lavage extérieur à la main</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Jantes, pneus, passages de roues</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Protection hydrophobe</li>
                                </ul>
                                <a href="https://wa.me/32472303701?text=Je souhaite le lavage complet" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-all">
                                    Réserver <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Extérieur */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Car className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Extérieur</h3>
                                <div className="text-3xl font-bold text-gray-900 mb-4">Dès 85€</div>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Lavage manuel deux seaux</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Jantes & passages de roues</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Séchage microfibre</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Dressing pneus</li>
                                </ul>
                                <a href="https://wa.me/32472303701?text=Je souhaite un lavage extérieur" className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all">
                                    Réserver <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* SECTION - Pourquoi pas un Car Wash ? */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Car Wash vs Shine&Go</h2>
                            <p className="text-gray-600">Pourquoi le lavage automatique abîme votre voiture</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Car Wash - Le mal */}
                            <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                        <X className="w-5 h-5 text-red-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-red-900">Car Wash automatique</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Rouleaux qui créent des micro-rayures',
                                        'Produits agressifs qui ternissent le vernis',
                                        'Séchage insuffisant = traces de calcaire',
                                        'Intérieur non nettoyé',
                                        'Aucune attention aux détails'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-red-800">
                                            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Shine&Go - Le bien */}
                            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-900">Shine&Go à domicile</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Lavage à la main, zéro micro-rayures',
                                        'Produits Koch-Chemie professionnels',
                                        'Séchage au souffleur + microfibre',
                                        'Intérieur + extérieur traités',
                                        'Attention méticuleuse à chaque recoin'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-green-800">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* BENTO GRID - Zones + Avantages */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                        {/* Zones */}
                        <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Zones d'intervention</h2>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Herve', 'Verviers', 'Liège', 'Spa', 'Battice', 'Soumagne', 'Fléron', 'Visé'].map((ville) => (
                                    <Link
                                        key={ville}
                                        href={`/lavage-voiture-${ville.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                                        className="px-4 py-2 bg-gray-100 hover:bg-slate-900 hover:text-white rounded-full text-sm font-medium text-gray-700 transition-all"
                                    >
                                        {ville}
                                    </Link>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">Déplacement inclus dans un rayon de 25km autour de Herve</p>
                        </div>

                        {/* Avantages */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-200 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                                <Droplets className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">Produits Premium</h3>
                            <p className="text-sm text-gray-500">Gamme Koch-Chemie exclusivement</p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 border border-gray-200 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">Intervention rapide</h3>
                            <p className="text-sm text-gray-500">Sous 48h en moyenne</p>
                        </div>
                    </div>

                    {/* CLUB ENTRETIEN */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/10 border border-white/20 rounded-full">
                                    <Sparkles className="w-4 h-4 text-white" />
                                    <span className="text-sm font-medium text-white">Offre Fidélité</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Club Entretien -25%
                                </h2>
                                <p className="text-slate-300 mb-6">
                                    Après votre 1er lavage, bénéficiez de -25% sur tous vos passages suivants réservés sous 6 semaines.
                                </p>
                                <ul className="space-y-2">
                                    {['Même qualité de prestation', 'Créneaux prioritaires', 'Sans engagement'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                            <Check className="w-4 h-4 text-green-400" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/10 text-center">
                                <p className="text-slate-400 text-sm uppercase tracking-wide mb-2">Formule Complète</p>
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="text-xl text-slate-500 line-through">120€</span>
                                    <span className="text-5xl font-bold text-white">90€</span>
                                </div>
                                <p className="text-green-400 font-medium mb-6">Économisez 30€</p>
                                <a
                                    href="https://wa.me/32472303701?text=Je souhaite rejoindre le Club Entretien"
                                    className="block w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-100 transition-all"
                                >
                                    Rejoindre le club
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* TÉMOIGNAGES */}
                    <section>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Ils nous font confiance</h2>
                            <p className="text-gray-600">+150 avis 5 étoiles sur Google</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: 'Thomas M.', location: 'Herve', text: 'Service impeccable ! Le detailing intérieur a fait des miracles : plastiques brillants, tapis impeccables.' },
                                { name: 'Sophie L.', location: 'Verviers', text: 'Très pratique le service à domicile. Professionnel, ponctuel et résultat bluffant.' },
                                { name: 'Marc D.', location: 'Liège', text: 'Ma BMW sort du concession ! Prix très correct pour la qualité du travail.' },
                            ].map((t, i) => (
                                <div key={i} className="bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</p>
                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="font-semibold text-gray-900">{t.name}</div>
                                        <div className="text-sm text-gray-500">{t.location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Questions fréquentes</h2>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                { q: "Besoin d'eau ou d'électricité ?", a: "Idéalement oui, une prise et un robinet à moins de 25m. Si ce n'est pas possible, prévenez-nous." },
                                { q: "Combien de temps ça dure ?", a: "Comptez environ 3h pour une prestation complète." },
                                { q: "Comment payer ?", a: "Paiement après prestation : espèces, Payconiq ou virement." },
                                { q: "Et s'il pleut ?", a: "Pour l'extérieur, nous devrons reporter. Pour l'intérieur, on peut travailler sous une pluie fine." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                                    <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                                    <p className="text-gray-600">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA FINAL */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Prêt pour une voiture impeccable ?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                            Réservez maintenant et profitez d'un service premium directement chez vous.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/32472303701"
                                className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 hover:-translate-y-0.5"
                            >
                                Réserver maintenant
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="tel:+32472303701"
                                className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                0472 30 37 01
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
