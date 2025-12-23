import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, AlertTriangle, ArrowRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Protection Céramique Voiture : Ça Vaut le Coup ? (Avis Honnête) | Shine&Go`,
  description: `Tout le monde parle de traitement céramique. Mais est-ce vraiment utile ? Analyse des avantages, prix et durée de vie réelle.`,
  openGraph: {
    type: 'article',
    publishedTime: '2026-01-20',
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Protection Céramique Voiture : Ça Vaut le Coup ? (Avis Honnête)",
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
        "datePublished": "2026-01-05",
        "image": "https://shineandgo.be/images/blog/protection-ceramique-voiture-avis.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien de temps ça dure ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "De 12 mois à 5 ans selon la qualité du produit et si la voiture dort au garage."
            }
          }, {
            "@type": "Question",
            "name": "Puis-je passer aux rouleaux avec une céramique ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "C'est déconseillé. Les rouleaux micro-rayent la céramique et réduisent sa durée de vie. Privilégiez le lavage main."
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
          { label: 'Protection Céramique Voiture ' }
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        {/* Header Article */}
        <header className="mb-12 text-center md:text-left">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>

          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 justify-center md:justify-start">
            <span className="badge-category">Expertise</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 05 Mar 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 12 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Protection Céramique Voiture : Ça Vaut le Coup ? (Avis Honnête)
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
            <p className="text-xl text-blue-900 italic">
              "Brillance extrême, facilité de lavage... La céramique vend du rêve. Mais à 500€ ou 1000€ la prestation, est-ce un investissement rentable pour votre véhicule ?"
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">

          {/* Sections dynamiques */}

          <section className="mb-12">
            <h2>C'est quoi une Céramique ?</h2>
            <div dangerouslySetInnerHTML={{ __html: `Ce n'est pas une cire. C'est une couche de verre liquide (dioxyde de silice SiO2) qui durcit chimiquement sur le vernis. Elle crée une seconde peau très dure et hydrophobe.` }} />
          </section>


          <section className="mb-12">
            <h2>Les Vrais Avantages</h2>
            <div dangerouslySetInnerHTML={{ __html: `<ul><li><strong>Facilité de lavage incroyable :</strong> La saleté n'accroche plus. Un coup de jet d'eau suffit souvent.</li><li><strong>Brillance :</strong> Un effet miroir permanent.</li><li><strong>Protection chimique :</strong> Résiste aux fientes d'oiseaux et résine mieux qu'un vernis nu.</li></ul>` }} />
          </section>


          <section className="mb-12">
            <h2>Ce que la Céramique NE FAIT PAS</h2>
            <div dangerouslySetInnerHTML={{ __html: `Elle ne rend pas la voiture invulnérable. Elle ne protège pas contre les coups de portières, les rayures de clés ou les gros chocs. C'est une protection sacrificielle, pas un bouclier magique.` }} />
          </section>


          <section className="mb-12">
            <h2>Le Verdict</h2>
            <div dangerouslySetInnerHTML={{ __html: `Pour une voiture neuve ou récente que vous voulez garder belle : OUI. Pour une voiture ancienne très abîmée : Non, sauf si vous faites une rénovation polissage avant.` }} />
          </section>


          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
            <p>La céramique est le meilleur investissement esthétique actuel, à condition d'avoir des attentes réalistes.</p>
          </div>

          <h2>FAQ - Questions Fréquentes</h2>
          <div className="space-y-6">

            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Combien de temps ça dure ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                De 12 mois à 5 ans selon la qualité du produit et si la voiture dort au garage.
              </div>
            </details>


            <details className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-medium text-gray-900 flex justify-between items-center">
                Puis-je passer aux rouleaux avec une céramique ?
                <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-4 text-gray-600 pl-4 border-l-2 border-blue-100">
                C'est déconseillé. Les rouleaux micro-rayent la céramique et réduisent sa durée de vie. Privilégiez le lavage main.
              </div>
            </details>

          </div>

          {/* CTA FINAL */}
          <div className="mt-20 p-8 sm:p-12 bg-gray-900 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2>Besoin d'un résultat professionnel ?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Nos experts Shine&Go interviennent partout en province de Liège. Évitez les efforts, on s'occupe de tout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#tarifs"
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-900/50"
                >
                  Voir nos tarifs
                </Link>
                <a
                  href="https://wa.me/32472303701"
                  className="px-8 py-4 bg-transparent border border-gray-500 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                >
                  Devis WhatsApp
                </a>
              </div>
            
          </div>
          
          </div></div></article>
    </main>
  )
}
