import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Prix Nettoyage Siège Tache par Tache | Shine&Go`,
  description: `Découvrez tout ce qu'il faut savoir sur prix nettoyage siège tache par tache. Conseils d'experts Shine&Go.`,
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
        "headline": "Prix Nettoyage Siège Tache par Tache",
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
          { label: 'Prix Nettoyage Siège Tache par Tache' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 font-medium">
            <span className="badge-category">Tarifs</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 15 Juil 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Prix Nettoyage Siège Tache par Tache
          </h1>

          <div className="quote-box">
            <p className="quote-text">
              "Le service de prix nettoyage siège tache par tache est essentiel pour maintenir votre véhicule en bon état."
            </p>
          </div>
        </header>

        <div className="prose-shineandgo">
          
          
          <section className="mb-12">
            <h2>Comprendre le prix du prix nettoyage siège tache par tache</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              Une question revient souvent : pourquoi existe-t-il de tels écarts de prix pour le prix nettoyage siège tache par tache ? La réponse réside dans la différence fondamentale entre un simple "lavage" et une véritable prestation de "detailing".
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Là où une station de lavage automatise le processus en 5 minutes avec des brosses agressives, un detailer passe plusieurs heures à traiter chaque centimètre carré du véhicule avec des outils de précision.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <ShieldCheck className="text-blue-600 w-8 h-8 flex-shrink-0" /> Ce qui influence le devis final
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">1. La Taille</h3>
                    <p className="text-gray-600 text-sm">Une Fiat 500 demande logiquement moins de produits et de temps qu'un Range Rover ou une camionnette utilitaire.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">2. L'État initial</h3>
                    <p className="text-gray-600 text-sm">Poils de chiens incrustés, moisissures, taches de vomi ou boue séchée nécessitent des équipements spécifiques (injecteur-extracteur, vapeur) qui allongent la prestation.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">3. Le Niveau de finition</h3>
                    <p className="text-gray-600 text-sm">Souhaitez-vous juste "propre" ou "comme neuf" ? L'ajout de protections céramiques, le dressing des plastiques ou le soin des cuirs sont des étapes premium.</p>
                </div>
            </div>
          </section>

          <section className="mb-12">
            <h2>Est-ce un investissement rentable ?</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              Absolument. Un véhicule régulièrement entretenu par un professionnel se revend en moyenne <strong>15% à 20% plus cher</strong>.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Pour le prix nettoyage siège tache par tache, voir cela comme une dépense est une erreur : c'est un investissement qui protège la valeur de votre capital automobile contre la décote naturelle et l'usure du temps.
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
                Intervention : <Link href="/zones" className="text-white underline hover:text-blue-100">Herve, Liège, Verviers, Spa</Link>
              </div>
            
          </div>
          
          </div></div></article>
    </main>
  )
}
