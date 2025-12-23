import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Prix Lavage Voiture à Domicile 2026 : Est-ce plus Cher qu'une Station ? | Shine&Go Detailing`,
  description: `Découvrez les tarifs réels d'un lavage auto à domicile. Comparatif complet entre station haute pression, portique rouleaux et detailing professionnel.`,
  keywords: "prix lavage voiture domicile, tarif nettoyage auto liège, combien coûte detailing voiture, lavage auto pas cher belgique",
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-15',
    authors: ['Shine&Go'],
    images: [{ url: '/images/blog/combien-coute-lavage-voiture-domicile.png' }]
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Prix Lavage Voiture à Domicile 2026 : Est-ce plus Cher qu'une Station ?",
        "description": "Découvrez les tarifs réels d'un lavage auto à domicile. Comparatif complet entre station haute pression, portique rouleaux et detailing professionnel.",
        "image": "https://shineandgo.be/images/blog/combien-coute-lavage-voiture-domicile.png",
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
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://shineandgo.be/blog/combien-coute-lavage-voiture-domicile"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Y a-t-il des frais de déplacement ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Chez Shine&Go, tout est inclus dans le forfait annoncé pour la province de Liège."
            }
          }, {
            "@type": "Question",
            "name": "Quels sont vos moyens de paiement ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous acceptons les paiements mobiles (Payconiq) et espèces sur place."
            }
          }
        ]
      }
    ]
  }

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Prix Lavage Domicile' }
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Header SEO Optimized */}
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>

          <div className="flex flex-wrap gap-4 items-center text-sm mb-8">
            <span className="badge-category">
              Tarifs
            </span>
            <span className="meta-text flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> 15 Avr 2026
            </span>
            <span className="meta-text flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" /> 11 min de lecture
            </span>
          </div>

          <h1 className="article-title mb-8">
            Prix Lavage Voiture à Domicile 2026 : Est-ce plus Cher qu'une Station ?
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl ring-1 ring-gray-100">
            <Image 
              src="/images/blog/combien-coute-lavage-voiture-domicile.png" 
              alt="Prix Lavage Voiture à Domicile 2026 : Est-ce plus Cher qu'une Station ?" 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="quote-box">
            <p className="quote-text">
              "La question du prix est souvent le premier frein au service à domicile. Pourtant, quand on additionne le temps perdu, le coût du carburant et la qualité finale, le calcul est souvent surprenant."
            </p>
          </div>
        </header>

        {/* Content Silo Structure */}
        <div className="prose-shineandgo">

          <section className="mb-12">
            <h2>Station vs Domicile : Le vrai coût</h2>
            <p>Une station haute pression vous coûtera entre 10€ et 20€ pour un résultat superficiel. Un service à domicile comme Shine&Go commence dès 65€ pour un intérieur complet réalisé par un expert avec du matériel pro. La différence ? La durée de propreté et la préservation de vos matériaux.</p>
          </section>

          <section className="mb-12">
            <h2>Les facteurs qui influencent le tarif</h2>
            <p>Le prix dépend principalement de la catégorie de votre véhicule (Citadine, SUV, Utilitaire) et de son état de saleté. Un véhicule qui n'a pas été lavé depuis un an demandera plus de temps et de produits qu'un entretien régulier.</p>
          </section>


          {/* Conclusion Box */}
          <div className="cta-block my-12">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <Check className="w-6 h-6" /> En conclusion
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Le service à domicile est un investissement dans la longévité de votre véhicule et votre confort personnel.
              </p>
              <p className="text-blue-300 font-medium">
                Shine&Go : L'excellence du detailing mobile partout en province de Liège.
              </p>
            </div>
          </div>

          {/* FAQ Schema Optimized */}
          <h2 className="section-title flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
            Questions Fréquentes
          </h2>
          <div className="space-y-4">

            <details className="faq-accordion">
              <summary>
                Y a-t-il des frais de déplacement ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Chez Shine&Go, tout est inclus dans le forfait annoncé pour la province de Liège.
              </div>
            </details>

            <details className="faq-accordion">
              <summary>
                Quels sont vos moyens de paiement ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Nous acceptons les paiements mobiles (Payconiq) et espèces sur place.
              </div>
            </details>

          </div>

          {/* INTERNAL LINKING SILO */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 mb-12">
            <h3 className="subsection-title mb-6">Articles recommandés :</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <RelatedLink href="/blog/nettoyage-voiture-avant-vente" title="Nettoyage Avant Vente" /><RelatedLink href="/blog/lavage-voiture-fumeur" title="Traitement Fumeur" /><RelatedLink href="/blog/nettoyage-siege-tissu-tache" title="Nettoyage Sièges Tissu" /><RelatedLink href="/blog/nettoyage-voiture-poils-chien-astuces" title="Extraction Poils de Chien" />
            </div>
          </div>

          {/* CTA FINAL DE CONVERSION */}
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

function RelatedLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all group">
      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Star className="w-5 h-5" />
      </div>
      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-1">{title}</span>
    </Link>
  )
}
