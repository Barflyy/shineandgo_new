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
    publishedTime: '2024-05-15',
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
        "datePublished": "2024-05-15",
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
          { label: 'Blog Detailing', href: '/blog' },
          { label: 'Lavage Voiture Fumeur' }
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header SEO Optimized */}
        <header className="mb-16">
          <Link href="/blog" className="inline-flex items-center text-blue-600 font-bold mb-8 hover:gap-2 transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux guides experts
          </Link>

          <div className="flex flex-wrap gap-4 items-center text-sm mb-8">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs">
              Problèmes
            </span>
            <span className="flex items-center gap-2 text-gray-500 font-medium">
              <Calendar className="w-4 h-4 text-blue-500" /> 12 Avr 2024
            </span>
            <span className="flex items-center gap-2 text-gray-500 font-medium">
              <Clock className="w-4 h-4 text-blue-500" /> 9 min de lecture
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
            Lavage Voiture Fumeur : Comment Éliminer l'Odeur de Tabac ? Guide Detailing
          </h1>

          {/* <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl ring-1 ring-gray-100">
            <Image 
              src="/images/blog/lavage-voiture-fumeur.png" 
              alt="Lavage Voiture Fumeur : Comment Éliminer l'Odeur de Tabac ? Guide Detailing" 
              fill 
              className="object-cover"
              priority
            />
          </div> */}

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-8 border-blue-600 p-10 rounded-r-[2rem] mb-16 shadow-sm">
            <p className="text-2xl text-blue-900 italic font-medium leading-relaxed">
              "L'odeur de tabac froid est l'une des plus difficiles à éliminer dans un habitacle. La nicotine se dépose partout : tissus, plastiques, vitres et même dans le circuit de ventilation. Pour retrouver un véhicule sain, il faut une approche scientifique."
            </p>
          </div>
        </header>

        {/* Content Silo Structure */}
        <div className="prose prose-xl prose-blue max-w-none text-gray-700 leading-relaxed font-light">

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <Sparkles className="text-blue-600 w-8 h-8 flex-shrink-0" /> La Nicotine : Un goudron collant
            </h2>
            <p className="text-xl leading-relaxed">La fumée de cigarette crée un film gras et jaunâtre sur toutes les surfaces. Ce film emprisonne les odeurs. Nous utilisons des agents dégraissants spécifiques qui cassent la liaison chimique de la nicotine avec le support sans abîmer vos plastiques ou votre cuir.</p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <Sparkles className="text-blue-600 w-8 h-8 flex-shrink-0" /> Le traitement à l'Ozone (O3)
            </h2>
            <p className="text-xl leading-relaxed">L'étape cruciale est l'ozonisation. Le gaz ozone pénètre là où aucun chiffon ne va : à l'intérieur des mousses de sièges et dans les conduits d'aération. Il oxyde les molécules odorantes pour les détruire définitivement au lieu de simplement les masquer avec un parfum.</p>
          </section>


          {/* Conclusion Box */}
          <div className="bg-gray-900 p-10 md:p-16 rounded-[3rem] text-white my-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-blue-400">
                <Check className="w-8 h-8" /> En conclusion
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Un traitement anti-tabac complet redonne une seconde vie à votre intérieur et facilite grandement la revente.
              </p>
              <p className="text-lg text-blue-300 font-medium">
                Shine&Go : L'excellence du detailing mobile partout en province de Liège.
              </p>
            </div>
          </div>

          {/* FAQ Schema Optimized */}
          <h2 className="text-4xl font-black text-gray-900 mt-24 mb-10 flex items-center gap-4">
            <div className="w-2 h-10 bg-blue-600 rounded-full" /> Questions Fréquentes
          </h2>
          <div className="space-y-6 mb-24">

            <details className="group bg-white border border-gray-100 rounded-3xl p-8 cursor-pointer hover:border-blue-300 transition-all hover:shadow-lg">
              <summary className="font-black text-xl text-gray-900 flex justify-between items-center list-none text-balance">
                L'odeur revient-elle après ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </span>
              </summary>
              <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-100 pt-6 font-light">
                Non, si le traitement est complet (nettoyage + ozone), l'odeur est détruite à la source.
              </div>
            </details>

            <details className="group bg-white border border-gray-100 rounded-3xl p-8 cursor-pointer hover:border-blue-300 transition-all hover:shadow-lg">
              <summary className="font-black text-xl text-gray-900 flex justify-between items-center list-none text-balance">
                Combien de temps dure l'intervention ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </span>
              </summary>
              <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-100 pt-6 font-light">
                Comptez environ 3h pour un résultat optimal incluant le séchage et la ventilation.
              </div>
            </details>

          </div>

          {/* INTERNAL LINKING SILO */}
          <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 mb-24 font-sans">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Articles recommandés sur le même sujet :</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <RelatedLink href="/blog/nettoyage-voiture-avant-vente" title="Nettoyage Avant Vente" /><RelatedLink href="/blog/nettoyage-siege-tissu-tache" title="Nettoyage Sièges Tissu" /><RelatedLink href="/blog/nettoyage-voiture-poils-chien-astuces" title="Extraction Poils de Chien" /><RelatedLink href="/blog/combien-coute-lavage-voiture-domicile" title="Prix Lavage Domicile" />
            </div>
          </div>

          {/* CTA FINAL DE CONVERSION */}
          <div className="p-10 md:p-20 bg-blue-600 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200 isolation-auto">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-blue-400/20 backdrop-blur-md rounded-full text-sm font-bold mb-6">SERVICES À DOMICILE</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Envie de retrouver un <br /> habitacle comme neuf ?</h2>
              <p className="text-xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
                Nos experts interviennent chez vous avec tout le matériel pro. Gagnez du temps et profitez d'une voiture impeccable.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/#tarifs"
                  className="px-12 py-6 bg-white text-blue-600 font-black rounded-full hover:scale-105 transition-all shadow-xl text-xl flex items-center justify-center gap-2"
                >
                  Calculer mon tarif <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/32472303701"
                  className="px-12 py-6 bg-blue-900 text-white font-black rounded-full hover:bg-blue-800 transition-all text-xl"
                >
                  WhatsApp Pro
                </a>
              </div>

              <div className="mt-8 text-blue-200 text-sm font-medium">
                Intervention à domicile : <Link href="/zones" className="text-white underline hover:text-blue-100 transition-colors">Herve, Liège, Verviers, Spa et toute la province.</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
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
