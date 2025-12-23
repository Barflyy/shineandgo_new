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
        <div className="container mx-auto px-6 max-w-7xl">
            {/* Hero Section */}
            <div className="relative mb-24 text-center mx-auto pt-20 pb-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-[4rem] -z-10 blur-3xl" />

                <div className="relative">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-blue-100 text-blue-700 text-xs font-black mb-8 shadow-sm tracking-[0.2em] uppercase">
                        <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" /> Guide Expert 2024
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-950 mb-8 tracking-tighter leading-[0.95]">
                        Le Blog du <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Detailing</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                        Secrets de pro, guides d'achat et astuces d'entretien pour transformer votre véhicule en showroom roulant.
                    </p>

                    {/* Search Bar - Premium Glassmorphism */}
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex items-center bg-white rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] focus-within:ring-2 focus-within:ring-blue-500/20 transition-all overflow-hidden h-20">
                            <div className="pl-8 text-gray-400">
                                <Search className="w-6 h-6" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Chercher un sujet (ex: cuir, prix, jantes...)"
                                className="w-full px-6 bg-transparent outline-none text-lg font-medium text-gray-900 placeholder:text-gray-400"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="pr-8 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Filter - Modern Pill Design */}
            <div className="flex flex-wrap justify-center gap-2 mb-24">
                {categories.map(cat => (
                    <button
                        key={cat.slug}
                        onClick={() => setActiveCategory(cat.slug)}
                        className={`px-8 py-3 rounded-2xl text-[13px] font-bold transition-all duration-300 uppercase tracking-widest border ${activeCategory === cat.slug
                            ? 'bg-gray-900 border-gray-900 text-white shadow-xl shadow-gray-200'
                            : 'bg-white border-gray-100 text-gray-500 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/30'
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
                            <Star className="text-amber-400 fill-amber-400 w-8 h-8" /> À la une
                        </h2>
                        {allArticles.filter(a => a.featured).map(article => (
                            <Link
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="group relative block rounded-[3rem] overflow-hidden bg-white border border-gray-100 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700"
                            >
                                <div className="grid lg:grid-cols-2 gap-0">
                                    <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                                        <Image
                                            src={article.image || '/images/blog/default-blog.jpg'}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-8 left-8">
                                            <span className="bg-white/90 backdrop-blur-md text-blue-700 px-4 py-2 rounded-xl text-sm font-bold shadow-lg uppercase tracking-wider">
                                                {categories.find(c => c.slug === article.category)?.name || article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/50">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-500" /> {article.date}</span>
                                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /> {article.readTime}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-[1.15] tracking-tight">
                                            {article.title.split(' | ')[0]}
                                        </h2>
                                        <p className="text-gray-600 text-lg md:text-xl mb-10 line-clamp-3 leading-relaxed font-light">
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
                                            <span className="text-4xl font-bold text-blue-50/50 group-hover:text-blue-100 transition-colors leading-none">0{i + 1}</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug text-base">
                                                    {a.title.split(' | ')[0]}
                                                </h3>
                                                <span className="text-[10px] font-bold text-blue-500/60 uppercase tracking-widest mt-1 block">{a.readTime} • {a.category}</span>
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
            <div className="relative overflow-hidden bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center mb-24">
                <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 bg-blue-400/10 rounded-full blur-[80px]" />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-blue-500/20">
                        <TrendingUp className="w-10 h-10 text-blue-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Redonnez de la valeur à votre véhicule
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                        Nos experts interviennent chez vous pour un résultat showroom sans concession. Gagnez du temps et de l'argent.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/#tarifs"
                            className="px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all text-xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)]"
                        >
                            Obtenir un devis gratuit
                        </Link>
                        <a
                            href="https://wa.me/32472303701"
                            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all text-xl backdrop-blur-sm"
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
            className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={article.image || '/images/blog/default-blog.jpg'}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6">
                    <span className="bg-white/95 backdrop-blur-sm text-blue-600 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                        {categoryName}
                    </span>
                </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-blue-500/70"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight tracking-tight">
                    {article.title.split(' | ')[0]}
                </h3>
                <p className="text-gray-500 text-sm md:text-base line-clamp-3 mb-8 leading-relaxed font-light flex-1">
                    {article.excerpt}
                </p>
                <div className="pt-6 border-t border-gray-50">
                    <span className="inline-flex items-center text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                        Consulter l'article <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </div>
            </div>
        </Link>
    )
}

