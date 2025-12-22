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
        }
        // D'autres articles seront ajoutés ici
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
