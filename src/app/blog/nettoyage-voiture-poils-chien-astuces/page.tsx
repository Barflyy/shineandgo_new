import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Comment Enlever les Poils de Chien dans une Voiture ? Solutions de Pros | Shine&Go Detailing`,
  description: `Les poils d'animaux sont impossibles à aspirer ? Apprenez les techniques de detailing pour extraire les poils incrustés dans vos moquettes et sièges.`,
  keywords: "nettoyer voiture poils chien, enlever poil animaux voiture, aspirateur voiture puissant poil, detailing voiture belgique",
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
        "headline": "Comment Enlever les Poils de Chien dans une Voiture ? Solutions de Pros",
        "description": "Les poils d'animaux sont impossibles à aspirer ? Apprenez les techniques de detailing pour extraire les poils incrustés dans vos moquettes et sièges.",
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
          "@id": "https://shineandgo.be/blog/lavage-voiture-poils-chien-astuces"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Peut-on extraire 100% des poils ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dans les moquettes 'velours' de qualité, oui. Dans les moquettes 'bouclées' bas de gamme, l'extraction est plus complexe mais le résultat reste spectaculaire."
            }
          }, {
            "@type": "Question",
            "name": "Faites-vous les poils de chat ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, bien qu'ils soient plus fins, nous avons les outils adaptés pour les retirer."
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
          { label: 'Extraction Poils de Chien' }
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
              Problèmes
            </span>
            <span className="meta-text flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> 22 Mai 2026
            </span>
            <span className="meta-text flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" /> 7 min de lecture
            </span>
          </div>

          <h1 className="article-title mb-8">
            Comment Enlever les Poils de Chien dans une Voiture ? Solutions de Pros
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl ring-1 ring-gray-100">
            <Image 
              src="https://images.unsplash.com/photo-1552933061-90320eecd137?auto=format&fit=crop&q=80&w=1200" 
              alt="Comment Enlever les Poils de Chien dans une Voiture ? Solutions de Pros" 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="quote-box">
            <p className="quote-text">
              "Si vous avez un Golden Retriever ou un Berger Allemand, vous savez que leurs poils agissent comme du velcro sur les moquettes de voiture. Un aspirateur classique de station de lavage ne suffit jamais pour un résultat impeccable."
            </p>
          </div>
        </header>

        {/* Content Silo Structure */}
        <div className="prose-shineandgo">

          <section className="mb-12">
            <h2>Le matériel indispensable</h2>
            <p>Pour retirer les poils les plus tenaces, les detailers utilisent des brosses en caoutchouc spéciales ou des pierres ponces synthétiques. En frottant doucement, les poils se regroupent en petits tas faciles à aspirer. L'utilisation d'un compresseur à air (Torunador) permet aussi de déloger les poils coincés sous les rails de sièges.</p>
          </section>

          <section className="mb-12">
            <h2>La méthode Shine&Go</h2>
            <p>Nos experts à domicile ne se contentent pas de brosser. Nous utilisons l'électricité statique et des aspirateurs à haute dépression. Nous traitons ensuite l'habitacle pour éliminer l'odeur de chien mouillé souvent associée à la présence d'animaux, pour un intérieur sain comme au premier jour.</p>
          </section>


          {/* Conclusion Box */}
          <div className="cta-block my-12">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <Check className="w-6 h-6" /> En conclusion
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Ne laissez pas les poils d'animaux ruiner votre expérience de conduite ou la valeur de votre véhicule.
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
                Peut-on extraire 100% des poils ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Dans les moquettes 'velours' de qualité, oui. Dans les moquettes 'bouclées' bas de gamme, l'extraction est plus complexe mais le résultat reste spectaculaire.
              </div>
            </details>

            <details className="faq-accordion">
              <summary>
                Faites-vous les poils de chat ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Oui, bien qu'ils soient plus fins, nous avons les outils adaptés pour les retirer.
              </div>
            </details>

          </div>

          {/* INTERNAL LINKING SILO */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 mb-12">
            <h3 className="subsection-title mb-6">Articles recommandés :</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <RelatedLink href="/blog/lavage-voiture-avant-vente" title="Nettoyage Avant Vente" /><RelatedLink href="/blog/lavage-voiture-fumeur" title="Traitement Fumeur" /><RelatedLink href="/blog/nettoyage-siege-tissu-tache" title="Nettoyage Sièges Tissu" /><RelatedLink href="/blog/combien-coute-lavage-voiture-domicile" title="Prix Lavage Domicile" />
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
