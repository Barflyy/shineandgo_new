import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Nettoyer le Ciel de Toit sans Décoller | Shine&Go`,
  description: `Découvrez tout ce qu'il faut savoir sur nettoyer le ciel de toit sans décoller. Conseils d'experts Shine&Go.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-01',
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Nettoyer le Ciel de Toit sans Décoller",
        "author": {
          "@type": "Organization",
          "name": "Shine & Go"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Shine & Go",
          "logo": {
            "@type": "ImageObject",
            "url": "https://shineandgo.be/logo.png"
          }
        },
        "datePublished": "2026-05-15",
        "image": "https://shineandgo.be/images/blog/default-blog.jpg"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Est-ce cher ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le prix dépend de l'état du véhicule, contactez-nous pour un devis."
            }
          }
        ]
      }
    ]
  }

  return (
    <main className="bg-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' }, 
          { label: 'Nettoyer le Ciel de Toit sans Décoller' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 font-medium">
            <span className="badge-category">Problèmes</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 15 Juil 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Nettoyer le Ciel de Toit sans Décoller
          </h1>

          <div className="quote-box">
            <p className="quote-text">
              "Le service de nettoyer le ciel de toit sans décoller est essentiel pour maintenir votre véhicule en bon état."
            </p>
          </div>
        </header>

        <div className="prose-shineandgo">
          
          
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <ShieldCheck className="text-blue-600 w-8 h-8 flex-shrink-0" /> Pourquoi le problème de nettoyer le ciel de toit sans décoller persiste ?
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              Traiter le nettoyer le ciel de toit sans décoller est souvent un cauchemar pour les particuliers. La raison est simple : les méthodes grand public ne traitent souvent que la surface visible du problème.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Les odeurs s'incrustent dans les mousses des sièges, les taches grasses repoussent si elles ne sont pas extraites en profondeur, et les micro-rayures nécessitent un polissage abrasif maîtrisé pour disparaître sans percer le vernis.
            </p>
          </section>

          <section className="mb-12">
            <h2>L'approche professionnelle Shine&Go</h2>
            <div className="bg-white shadow-xl shadow-gray-100 rounded-3xl p-8 border border-gray-100">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                    Contre le nettoyer le ciel de toit sans décoller, nous déployons l'artillerie lourde du detailing :
                </p>
                <div className="grid gap-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Chimie Active</h3>
                            <p className="text-gray-600">Utilisation d'enzymes gloutons pour les odeurs organiques ou de dissolvants spécifiques pour les goudrons et résines, sans abîmer les supports.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Action Mécanique & Thermique</h3>
                            <p className="text-gray-600">La vapeur sèche à 160°C ou l'injection-extraction permettent de désincruster ce que la main seule ne peut atteindre.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <Check className="text-blue-600 w-8 h-8 flex-shrink-0" /> Résultat Garanti
            </h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Ne perdez plus de temps et d'argent dans des produits miracles de supermarché. Pour le nettoyer le ciel de toit sans décoller, une intervention unique d'un pro vaut souvent moins cher que l'accumulation de tentatives ratées, sans parler du risque d'aggraver la situation.
            </p>
          </section>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-4">
            
            <details className="faq-accordion">
              <summary>
                Est-ce cher ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Le prix dépend de l'état du véhicule, contactez-nous pour un devis.
              </div>
            </details>
        
          </div>

          <div className="cta-block-light mt-16">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <span className="badge glass text-white font-semibold mb-6">
                SERVICE À DOMICILE
              </span>
              <h2 className="cta-title text-white">Envie d'un résultat professionnel ?</h2>
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
                Intervention : <Link href="/lavage-voiture-liege" className="text-white underline hover:text-blue-100">Liège</Link>, <Link href="/lavage-voiture-herve" className="text-white underline hover:text-blue-100">Herve</Link>, <Link href="/lavage-voiture-verviers" className="text-white underline hover:text-blue-100">Verviers</Link>, <Link href="/lavage-voiture-soumagne" className="text-white underline hover:text-blue-100">Soumagne</Link>, <Link href="/lavage-voiture-fleron" className="text-white underline hover:text-blue-100">Fléron</Link>, <Link href="/lavage-voiture-vise" className="text-white underline hover:text-blue-100">Visé</Link>
              </div>
            
          </div>
          
          </div></div></article>
    </main>
  )
}
