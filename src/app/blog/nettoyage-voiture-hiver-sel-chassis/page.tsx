import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Lavage Auto en Hiver : Comment Protéger votre Châssis du Sel ? | Shine&Go Detailing`,
  description: `Le sel de déneigement ronge les métaux et ternit le vernis. Apprenez pourquoi le lavage hivernal est une priorité absolue pour éviter la rouille.`,
  keywords: "lavage voiture hiver, sel déneigement carrosserie, nettoyage châssis voiture rouille, protection peinture hiver",
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-15',
    authors: ['Shine&Go'],
    images: [{ url: '/images/blog/default-blog.jpg' }]
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Lavage Auto en Hiver : Comment Protéger votre Châssis du Sel ?",
        "description": "Le sel de déneigement ronge les métaux et ternit le vernis. Apprenez pourquoi le lavage hivernal est une priorité absolue pour éviter la rouille.",
        "image": "https://shineandgo.be/images/blog/default-blog.jpg",
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
          "@id": "https://shineandgo.be/blog/lavage-voiture-hiver-sel-chassis"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Faut-il laver quand il gèle ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Il est préférable d'attendre une température légèrement positive et de bien sécher les joints de portes."
            }
          }, {
            "@type": "Question",
            "name": "Combien de lavages par hiver ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En période de fortes chutes de neige, un rinçage du châssis toutes les deux semaines est recommandé."
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
          { label: 'Lavage Hivernal' }
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Header SEO Optimized */}
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <span className="badge-category">Saisonnier</span>
            <span className="meta-text flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> 10 Jan 2026
            </span>
            <span className="meta-text flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" /> 8 min de lecture
            </span>
          </div>

          <h1 className="article-title mb-8">
            Lavage Auto en Hiver : Comment Protéger votre Châssis du Sel ?
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl ring-1 ring-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1552933061-90320eecd137?auto=format&fit=crop&q=80&w=1200"
              alt="Lavage Auto en Hiver : Comment Protéger votre Châssis du Sel ?"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="quote-box">
            <p className="quote-text">
              "L'hiver en Belgique rime avec routes salées. Si le sel assure notre sécurité, il est le pire ennemi de votre châssis et de vos bas de caisse. Sans un rinçage régulier, la corrosion s'installe discrètement."
            </p>
          </div>
        </header>

        {/* Content Silo Structure */}
        <div className="prose-shineandgo">

          <section className="mb-12">
            <h2>L'action corrosive du sel</h2>
            <p>Le sel est un agent oxydant puissant. Combiné à l'humidité, il accélère la formation de rouille sur toutes les parties métalliques exposées. Une attention particulière doit être portée au châssis, aux étriers de freins et aux passages de roues.</p>
          </section>

          <section className="mb-12">
            <h2>La protection par cire hydrophobe</h2>
            <p>Pour l'hiver, nous recommandons l'application d'une cire de protection. Elle crée une barrière entre la peinture et les contaminants extérieurs, facilitant grandement le nettoyage et empêchant le sel d'adhérer durablement à la carrosserie.</p>
          </section>

          {/* Conclusion Box */}
          <div className="cta-block my-12">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <Check className="w-6 h-6" /> En conclusion
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Un entretien préventif en hiver vous évitera des réparations coûteuses liées à la corrosion prématurée.
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
                  Faut-il laver quand il gèle ?
                  <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="faq-accordion-content mt-4">
                  Il est préférable d'attendre une température légèrement positive et de bien sécher les joints de portes.
                </div>
              </details>

              <details className="faq-accordion">
                <summary>
                  Combien de lavages par hiver ?
                  <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="faq-accordion-content mt-4">
                  En période de fortes chutes de neige, un rinçage du châssis toutes les deux semaines est recommandé.
                </div>
              </details>
            </div>
          </section>

          {/* Articles recommandés */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 mb-12">
            <h3 className="subsection-title mb-6">Articles recommandés :</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <RelatedLink href="/blog/lavage-voiture-avant-vente" title="Nettoyage Avant Vente" />
              <RelatedLink href="/blog/lavage-voiture-fumeur" title="Traitement Fumeur" />
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
                Intervention : <Link href="/lavage-voiture-liege" className="text-white underline hover:text-blue-100">Liège</Link>, <Link href="/lavage-voiture-herve" className="text-white underline hover:text-blue-100">Herve</Link>, <Link href="/lavage-voiture-verviers" className="text-white underline hover:text-blue-100">Verviers</Link>, <Link href="/lavage-voiture-soumagne" className="text-white underline hover:text-blue-100">Soumagne</Link>, <Link href="/lavage-voiture-fleron" className="text-white underline hover:text-blue-100">Fléron</Link>, <Link href="/lavage-voiture-vise" className="text-white underline hover:text-blue-100">Visé</Link>
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
