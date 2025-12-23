'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ChevronRight, Star, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

interface ArticleLayoutProps {
    children: React.ReactNode
    title: string
    category: string
    date: string
    readTime: string
    image?: string
    excerpt: string
    breadcrumbLabel: string
    relatedArticles?: { href: string; title: string }[]
}

export default function ArticleLayout({
    children,
    title,
    category,
    date,
    readTime,
    image,
    excerpt,
    breadcrumbLabel,
    relatedArticles = []
}: ArticleLayoutProps) {
    const defaultImage = 'https://images.unsplash.com/photo-1552933061-90320eecd137?auto=format&fit=crop&q=80&w=1200'

    return (
        <main className="bg-white min-h-screen">
            <Breadcrumbs
                items={[
                    { label: 'Blog', href: '/blog' },
                    { label: breadcrumbLabel }
                ]}
            />

            <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Header */}
                <header className="mb-12 md:mb-16">
                    <Link
                        href="/blog"
                        className="link-arrow mb-8 inline-flex"
                    >
                        <ArrowLeft className="w-4 h-4" /> Retour au blog
                    </Link>

                    <div className="flex flex-wrap gap-4 items-center mb-8">
                        <span className="badge-category">{category}</span>
                        <span className="meta-text flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500" /> {date}
                        </span>
                        <span className="meta-text flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" /> {readTime}
                        </span>
                    </div>

                    <h1 className="article-title mb-8">{title}</h1>

                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl ring-1 ring-gray-100">
                        <Image
                            src={image || defaultImage}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>

                    <div className="quote-box">
                        <p className="quote-text">{excerpt}</p>
                    </div>
                </header>

                {/* Article Content */}
                <div className="prose-shineandgo">
                    {children}
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 mt-16 mb-12">
                        <h3 className="subsection-title mb-6">Articles recommandés :</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {relatedArticles.map((article, i) => (
                                <RelatedLink key={i} href={article.href} title={article.title} />
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Final */}
                <div className="cta-block-light mt-16">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px]" />
                    <div className="relative z-10">
                        <span className="badge glass text-white font-semibold mb-6">
                            SERVICE À DOMICILE
                        </span>
                        <h2 className="cta-title text-white">
                            Envie d'un résultat professionnel ?
                        </h2>
                        <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Nos experts interviennent chez vous avec tout le matériel pro. Gagnez du temps et profitez d'une voiture impeccable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#tarifs"
                                className="btn btn-large bg-white text-blue-600 font-bold hover:bg-gray-100 shadow-xl"
                            >
                                Voir les tarifs <ChevronRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="https://wa.me/32472303701"
                                className="btn btn-large bg-blue-900 text-white hover:bg-blue-800"
                            >
                                WhatsApp Pro
                            </a>
                        </div>
                        <div className="mt-8 text-blue-200 text-sm font-medium">
                            Intervention : <Link href="/zones" className="text-white underline hover:text-blue-100">Herve, Liège, Verviers, Spa</Link>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}

// Composant pour les FAQ
export function FAQSection({ items }: { items: { question: string; answer: string }[] }) {
    return (
        <section className="mt-16 mb-12">
            <h2 className="section-title flex items-center gap-3 mb-8">
                <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
                Questions Fréquentes
            </h2>
            <div className="space-y-4">
                {items.map((item, i) => (
                    <details key={i} className="faq-accordion">
                        <summary>
                            {item.question}
                            <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                                <ArrowRight className="w-5 h-5 rotate-90" />
                            </span>
                        </summary>
                        <div className="faq-accordion-content mt-4">
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    )
}

// Composant pour la conclusion
export function ConclusionBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="cta-block my-12">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                    <Check className="w-6 h-6" /> En conclusion
                </h3>
                <div className="text-lg text-gray-300 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    )
}

// Composant pour les liens internes
function RelatedLink({ href, title }: { href: string; title: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all group"
        >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Star className="w-5 h-5" />
            </div>
            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-1">
                {title}
            </span>
        </Link>
    )
}
