import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight, Star } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Lavage Voiture Fumeur : Comment Éliminer l'Odeur de Tabac ? Guide Detailing | Shine&Go Detailing`,
  description: `Votre voiture sent le tabac ? Le nettoyage classique ne suffit pas. Découvrez comment neutraliser la nicotine et les odeurs avec l'ozone et les enzymes.`,
  keywords: "nettoyage voiture fumeur, enlever odeur tabac voiture, traitement ozone voiture liège, shampooing ciel de toit nicotine",
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-15',
    authors: ['Shine&Go'],
    images: [{ url: '/images/blog/lavage-voiture-fumeur.png' }]
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Lavage Voiture Fumeur : Comment Éliminer l'Odeur de Tabac ? Guide Detailing",
        "description": "Votre voiture sent le tabac ? Le nettoyage classique ne suffit pas. Découvrez comment neutraliser la nicotine et les odeurs avec l'ozone et les enzymes.",
        "image": "https://shineandgo.be/images/blog/lavage-voiture-fumeur.png",
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
          "@id": "https://shineandgo.be/blog/lavage-voiture-fumeur"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "L'odeur revient-elle après ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, si le traitement est complet (nettoyage + ozone), l'odeur est détruite à la source."
            }
          }, {
            "@type": "Question",
            "name": "Combien de temps dure l'intervention ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Comptez environ 3h pour un résultat optimal incluant le séchage et la ventilation."
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
          { label: 'Lavage Voiture Fumeur' }
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
              <Calendar className="w-4 h-4 text-blue-500" /> 12 Avr 2026
            </span>
            <span className="meta-text flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" /> 9 min de lecture
            </span>
          </div>

          <h1 className="article-title mb-8">
            Lavage Voiture Fumeur : Comment Éliminer l'Odeur de Tabac ? Guide Detailing
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl ring-1 ring-gray-100">
            <Image 
              src="/images/blog/lavage-voiture-fumeur.png" 
              alt="Lavage Voiture Fumeur : Comment Éliminer l'Odeur de Tabac ? Guide Detailing" 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="quote-box">
            <p className="quote-text">
              "L'odeur de tabac froid est l'une des plus difficiles à éliminer dans un habitacle. La nicotine se dépose partout : tissus, plastiques, vitres et même dans le circuit de ventilation. Pour retrouver un véhicule sain, il faut une approche scientifique."
            </p>
          </div>
        </header>

        {/* Content Silo Structure */}
        <div className="prose-shineandgo">

          <section className="mb-12">
            <h2>La Nicotine : Un goudron collant</h2>
            <p>La fumée de cigarette crée un film gras et jaunâtre sur toutes les surfaces. Ce film emprisonne les odeurs. Nous utilisons des agents dégraissants spécifiques qui cassent la liaison chimique de la nicotine avec le support sans abîmer vos plastiques ou votre cuir.</p>
          </section>

          <section className="mb-12">
            <h2>Le traitement à l'Ozone (O3)</h2>
            <p>L'étape cruciale est l'ozonisation. Le gaz ozone pénètre là où aucun chiffon ne va : à l'intérieur des mousses de sièges et dans les conduits d'aération. Il oxyde les molécules odorantes pour les détruire définitivement au lieu de simplement les masquer avec un parfum.</p>
          </section>


          {/* Conclusion Box */}
          <div className="cta-block my-12">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <Check className="w-6 h-6" /> En conclusion
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Un traitement anti-tabac complet redonne une seconde vie à votre intérieur et facilite grandement la revente.
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
                L'odeur revient-elle après ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Non, si le traitement est complet (nettoyage + ozone), l'odeur est détruite à la source.
              </div>
            </details>

            <details className="faq-accordion">
              <summary>
                Combien de temps dure l'intervention ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="faq-accordion-content mt-4">
                Comptez environ 3h pour un résultat optimal incluant le séchage et la ventilation.
              </div>
            </details>

          </div>

          {/* INTERNAL LINKING SILO */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 mb-12">
            <h3 className="subsection-title mb-6">Articles recommandés :</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <RelatedLink href="/blog/nettoyage-voiture-avant-vente" title="Nettoyage Avant Vente" /><RelatedLink href="/blog/nettoyage-siege-tissu-tache" title="Nettoyage Sièges Tissu" /><RelatedLink href="/blog/nettoyage-voiture-poils-chien-astuces" title="Extraction Poils de Chien" /><RelatedLink href="/blog/combien-coute-lavage-voiture-domicile" title="Prix Lavage Domicile" />
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
