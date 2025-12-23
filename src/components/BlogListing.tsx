'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, Search, Sparkles, Star, TrendingUp, X } from 'lucide-react'
import { allArticles, categories } from '@/constants/blog-articles'

export default function BlogListing() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')

    // Filtrage dynamique
    const filteredArticles = useMemo(() => {
        return allArticles.filter(article => {
            const matchesSearch = !searchQuery ||
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesCategory = activeCategory === 'all' || article.category === activeCategory

            return matchesSearch && matchesCategory
        })
    }, [searchQuery, activeCategory])

    const isSearching = searchQuery.length > 0 || activeCategory !== 'all'

    return (
        <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="relative mb-20 text-center max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] -z-10" />
                <div className="py-20 px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                        <Sparkles className="w-4 h-4" /> GUIDE EXPERT 2024
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                        Le Blog du <span className="text-blue-600">Detailing</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
                        Conseils d'experts, comparatifs honnêtes et secrets de pro pour un véhicule comme neuf.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher par mot-clé (ex: cuir, odeur, prix...)"
                            className="w-full h-16 pl-16 pr-16 rounded-full bg-white border border-gray-100 shadow-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-lg"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-6 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-20">
                {categories.map(cat => (
                    <button
                        key={cat.slug}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === cat.slug
                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg'
                            : 'bg-white border-gray-100 text-gray-600 hover:border-blue-400 hover:text-blue-600'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Results Section */}
            {isSearching ? (
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Résultats ({filteredArticles.length})
                        </h2>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                            className="text-sm font-bold text-blue-600 hover:underline"
                        >
                            Afficher tous les articles
                        </button>
                    </div>

                    {filteredArticles.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArticles.map(article => (
                                <ArticleCard key={article.slug} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                            <Search className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun résultat</h3>
                            <p className="text-gray-500">Essayez avec d'autres mots-clés ou changez de catégorie.</p>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {/* Featured Post (Only when not searching) */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
                            <Star className="text-amber-400 fill-amber-400" /> À la une
                        </h2>
                        {allArticles.filter(a => a.featured).map(article => (
                            <Link
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="group relative block rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-8 left-8">
                                            <span className="bg-white/90 backdrop-blur-md text-blue-700 px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                                                {categories.find(c => c.slug === article.category)?.name || article.category}
                                            </span>
                                        </div>
                                    </div> */}
                                    <div className="p-10 md:p-16 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
                                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-600 text-xl mb-10 line-clamp-3 leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 text-blue-600 font-bold text-lg group-hover:gap-5 transition-all">
                                            Lire l'article complet <ArrowRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Standard Grid */}
                    <div className="grid lg:grid-cols-4 gap-12 mb-24">
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-500 w-fit">
                                Plus lus
                            </h2>
                            <ul className="space-y-8">
                                {allArticles.slice(1, 5).map((a, i) => (
                                    <li key={a.slug} className="group">
                                        <Link href={`/blog/${a.slug}`} className="flex gap-4 items-start">
                                            <span className="text-4xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">0{i + 1}</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                                                    {a.title}
                                                </h3>
                                                <span className="text-xs text-gray-400">{a.readTime}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
                            {allArticles.filter(a => !a.featured).map(article => (
                                <ArticleCard key={article.slug} article={article} />
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* Newsletter / CTA Box */}
            <div className="relative overflow-hidden bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center">
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <TrendingUp className="w-16 h-16 text-blue-500 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                        Redonnez de la valeur à votre véhicule
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Nos experts interviennent chez vous pour un résultat showroom sans concession.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/#tarifs"
                            className="px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all text-xl shadow-2xl shadow-blue-900/40"
                        >
                            Obtenir un devis gratuit
                        </Link>
                        <a
                            href="https://wa.me/32472303701"
                            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-xl"
                        >
                            WhatsApp Expert
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ArticleCard({ article }: { article: any }) {
    const categoryName = categories.find(c => c.slug === article.category)?.name || article.category

    return (
        <Link
            href={`/blog/${article.slug}`}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
            {/* <div className="relative h-64 overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div> */}
            <div className="p-8">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                        {categoryName}
                    </span>
                    <span className="flex items-center gap-1 font-medium"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {article.excerpt}
                </p>
                <span className="inline-flex items-center text-blue-600 font-bold group-hover:gap-3 transition-all">
                    Lire la suite <ArrowRight className="w-4 h-4 ml-2" />
                </span>
            </div>
        </Link>
    )
}
