import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog Shine&Go - Conseils Nettoyage Auto & Detailing',
    description: 'Découvrez nos guides experts sur le nettoyage automobile, le detailing, les produits professionnels et l\'entretien de votre véhicule.',
}

export default function BlogIndex() {
    const articles = [
        {
            slug: 'nettoyage-interieur-voiture-guide-complet',
            title: 'Nettoyage Intérieur Voiture : Le Guide Complet 2024',
            excerpt: 'Découvrez comment nettoyer l\'intérieur de votre voiture comme un pro. Aspirateur, plastiques, sièges... On vous dit tout !',
            image: '/images/blog/nettoyage-interieur.webp',
            category: 'Guide',
            date: '15 Jan 2024',
            readTime: '10 min',
            featured: true
        },
        {
            slug: 'enlever-odeur-cigarette-voiture',
            title: "Comment Enlever l'Odeur de Cigarette dans une Voiture ?",
            excerpt: "L'odeur de tabac est tenace. Découvrez nos méthodes professionnelles (ozone, nettoyage profond) pour éliminer définitivement l'odeur.",
            image: '/images/blog/odeur-cigarette.webp',
            category: 'Problème',
            date: '20 Jan 2024',
            readTime: '8 min',
            featured: false
        },
        {
            slug: 'nettoyer-siege-cuir-voiture',
            title: "Nettoyer et Entretenir ses Sièges en Cuir : Guide Expert",
            excerpt: "Le cuir demande un entretien spécifique. Apprenez à nettoyer, nourrir et protéger vos sièges auto pour éviter les craquelures.",
            image: '/images/blog/nettoyage-cuir.webp',
            category: 'Tutoriel',
            date: '25 Jan 2024',
            readTime: '12 min',
            featured: false
        },
        {
            slug: 'detailing-voiture-prix-belgique',
            title: "Prix Detailing Voiture en Belgique : Tarifs 2024",
            excerpt: "Combien coûte un detailing auto ? Comparatif des prix en Belgique pour le nettoyage intérieur, le polissage et la protection céramique.",
            image: '/images/blog/prix-detailing.webp',
            category: 'Guide Prix',
            date: '02 Fev 2024',
            readTime: '10 min',
            featured: false
        },
        {
            slug: 'enlever-tache-siege-tissu-voiture',
            title: "Enlever une Tache sur Siège Tissu : 7 Méthodes",
            excerpt: "Café, gras, sang... Chaque tache a sa solution. Découvrez comment nettoyer vos sièges en tissu sans faire d'auréoles.",
            image: '/images/blog/tache-siege.webp',
            category: 'Tutoriel',
            date: '10 Fev 2024',
            readTime: '15 min',
            featured: false
        },
        {
            slug: 'nettoyage-voiture-apres-hiver',
            title: "Nettoyage de Printemps Auto : Réparer les Dégâts de l'Hiver",
            excerpt: "Sel, boue, humidité... L'hiver est rude pour votre voiture. La checklist indispensable pour la remettre à neuf.",
            image: '/images/blog/nettoyage-hiver.webp',
            category: 'Saisonnier',
            date: '20 Fev 2024',
            readTime: '8 min',
            featured: false
        },
        {
            slug: 'protection-ceramique-voiture-avis',
            title: "Protection Céramique Voiture : Ça Vaut le Coup ?",
            excerpt: "Tout le monde parle de traitement céramique. Mais est-ce vraiment utile ? Analyse des avantages, prix et durée de vie réelle.",
            image: '/images/blog/ceramique-avis.webp',
            category: 'Expertise',
            date: '05 Mar 2024',
            readTime: '12 min',
            featured: false
        },
        {
            slug: 'nettoyer-voiture-poils-chien',
            title: "Poils de Chien dans la Voiture : La Solution",
            excerpt: "Votre chien laisse des souvenirs partout ? Voici les techniques des pros pour retirer les poils incrustés.",
            image: '/images/blog/poils-chien.webp',
            category: 'Tutoriel',
            date: '15 Mar 2024',
            readTime: '6 min',
            featured: false
        },
        {
            slug: 'lavage-auto-vs-lavage-main',
            title: "Station de Lavage vs Lavage à la Main",
            excerpt: "Rouleaux, Karcher ou lavage main ? Quel est le meilleur choix pour votre peinture et votre portefeuille ?",
            image: '/images/blog/rouleaux-vs-main.webp',
            category: 'Comparatif',
            date: '22 Mar 2024',
            readTime: '9 min',
            featured: false
        },
        {
            slug: 'enlever-resine-arbre-voiture',
            title: "Taches de Résine sur Voiture : Comment les Enlever",
            excerpt: "La résine de pin colle et durcit. Ne grattez surtout pas ! Voici comment la dissoudre en douceur.",
            image: '/images/blog/resine-voiture.webp',
            category: 'Saisonnier',
            date: '05 Avr 2024',
            readTime: '5 min',
            featured: false
        }
    ]


    return (
        <main className="bg-white min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                        Le Blog Shine&Go
                    </h1>
                    <p className="text-xl text-gray-600">
                        Conseils d'experts et astuces pour l'entretien de votre véhicule
                    </p>
                </div>

                {/* Featured Post (Article 1) */}
                <div className="mb-20">
                    {articles.filter(a => a.featured).map(article => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group relative block rounded-3xl overflow-hidden bg-gray-50 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-200">
                                        {/* Placeholder color until image exists */}
                                    </div>
                                    {/* <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-blue-100 text-blue-300 text-4xl">
                                        🖼️
                                    </div>
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                                            {article.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" /> {article.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> {article.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                                        Lire l'article <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Articles List - Grid for non-featured articles */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {articles.filter(a => !a.featured).map(article => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-200 text-3xl">
                                    📝
                                </div>
                                {/* <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium">
                                        {article.category}
                                    </span>
                                    <span>{article.readTime}</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
                                    {article.excerpt}
                                </p>
                                <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                                    Lire la suite <ArrowRight className="w-3 h-3 ml-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>


                {/* Newsletter / CTA */}
                <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-medium mb-4">Besoin d'un nettoyage professionnel ?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Gagnez du temps et profitez d'un résultat showroom sans bouger de chez vous.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#devis"
                            className="px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition-all"
                        >
                            Voir nos tarifs
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    )
}
