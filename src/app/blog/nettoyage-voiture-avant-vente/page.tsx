import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Nettoyage Voiture Avant Vente : Gagnez jusqu'à 1500€ de Plus | Shine&Go Detailing`,
  description: `Vendre sa voiture rapidement et au meilleur prix demande une préparation esthétique irréprochable. Découvrez comment le detailing augmente votre plus-value.`,
  keywords: "préparation voiture vente, nettoyage auto avant vente liège, augmenter prix revente voiture, detailing premium belgique",
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-15',
    authors: ['Shine&Go'],
    images: [{ url: '/images/blog/lavage-voiture-avant-vente.png' }]
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Nettoyage Voiture Avant Vente : Gagnez jusqu'à 1500€ de Plus",
        "description": "Vendre sa voiture rapidement et au meilleur prix demande une préparation esthétique irréprochable. Découvrez comment le detailing augmente votre plus-value.",
        "image": "https://shineandgo.be/images/blog/lavage-voiture-avant-vente.png",
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
          "@id": "https://shineandgo.be/blog/lavage-voiture-avant-vente"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Est-ce rentable ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolument. Un pack vente à 150€ permet souvent de maintenir un prix de vente 500€ à 1000€ plus élevé."
            }
          }, {
            "@type": "Question",
            "name": "Faites-vous les photos ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous pouvons vous conseiller sur les meilleurs angles une fois que le véhicule brille sous tous ses aspects."
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

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <span className="badge-category">Conseils</span>
            <span className="meta-text flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> 10 Avr 2026
            </span>
            <span className="meta-text flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" /> 10 min de lecture
            </span>
          </div>

          <h1 className="article-title mb-8">
            Nettoyage Voiture Avant Vente : Gagnez jusqu'à 1500€ de Plus
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl ring-1 ring-gray-100">
            <Image
              src="/images/blog/lavage-voiture-avant-vente.png"
              alt="Nettoyage Voiture Avant Vente"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="quote-box">
            <p className="quote-text">
              "La vente d'un véhicule se joue souvent dans les 30 premières secondes. Un acheteur qui voit une voiture impeccable projettera un entretien mécanique sérieux. À l'inverse, une voiture sale est le meilleur argument pour une négociation agressive."
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="prose-shineandgo">

          <section className="mb-12">
            <h2>L'effet 'Showroom' pour déclencher le coup de coeur</h2>
            <p>Un detailing complet inclut le nettoyage des jantes, la brillance des pneus et un habitacle sans aucune poussière. Cet aspect 'neuf' rassure l'acheteur et justifie un prix haut de gamme. C'est l'investissement le plus rentable avant de poster votre annonce sur AutoScout24 ou Marketplace.</p>
          </section>

          <section className="mb-12">
            <h2>Le moteur : Propre mais honnête</h2>
            <p>Un compartiment moteur dépoussiéré montre que vous prenez soin de chaque détail. Nous évitons le brillant silicone excessif qui peut paraître suspect, préférant un aspect d'usine propre et sain qui inspire une confiance totale.</p>
          </section>

          {/* Conclusion */}
          <div className="cta-block my-12">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <Check className="w-6 h-6" /> En conclusion
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Préparer sa voiture, c'est vendre plus vite et sans négociation démesurée.
              </p>
              <p className="text-blue-300 font-medium">
                Shine&Go : L'excellence du detailing mobile partout en province de Liège.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <section className="mt-16 mb-12">
            <h2 className="section-title flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
              Questions Fréquentes
            </h2>
            <div className="space-y-4">
              <details className="faq-accordion">
                <summary>
                  Est-ce rentable ?
                  <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="faq-accordion-content mt-4">
                  Absolument. Un pack vente à 150€ permet souvent de maintenir un prix de vente 500€ à 1000€ plus élevé.
                </div>
              </details>

              <details className="faq-accordion">
                <summary>
                  Faites-vous les photos ?
                  <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="faq-accordion-content mt-4">
                  Nous pouvons vous conseiller sur les meilleurs angles une fois que le véhicule brille sous tous ses aspects.
                </div>
              </details>
            </div>
          </section>

          {/* Articles recommandés */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 mb-12">
            <h3 className="subsection-title mb-6">Articles recommandés :</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <RelatedLink href="/blog/lavage-voiture-fumeur" title="Traitement Fumeur" />
              <RelatedLink href="/blog/nettoyage-siege-tissu-tache" title="Nettoyage Sièges Tissu" />
            </div>
          </div>

          {/* CTA FINAL */}
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
    <Link href={href} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-400 hover:shadow-md transition-all group">
      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Star className="w-5 h-5" />
      </div>
      <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors uppercase text-xs tracking-wider line-clamp-1">{title}</span>
    </Link>
  )
}
