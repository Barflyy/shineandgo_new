import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Star, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Comment Enlever l'Odeur de Cigarette dans une Voiture ? (Méthodes Pro) | Shine&Go`,
  description: `L'odeur de tabac dans une voiture est tenace. Découvrez nos méthodes professionnelles (ozone, nettoyage profond) pour éliminer définitivement l'odeur de cigarette.`,
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
        "headline": "Comment Enlever l'Odeur de Cigarette dans une Voiture ? (Méthodes Pro)",
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
        "datePublished": "2026-01-20",
        "image": "https://shineandgo.be/images/blog/enlever-odeur-cigarette-voiture.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien de temps dure un traitement à l'ozone ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le cycle machine dure environ 45min, mais il faut ensuite aérer le véhicule pendant 1h. Comptez une demi-journée pour la prestation complète (nettoyage + ozone)."
            }
          }, {
            "@type": "Question",
            "name": "L'odeur revient-elle après ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, si le nettoyage a été fait correctement avant l'ozone, l'odeur est détruite définitivement. Sauf si vous recommencez à fumer dedans bien sûr !"
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
          { label: "Enlever l'Odeur de Cigarette" }
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

        {/* Header Article */}
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>

          <div className="flex flex-wrap gap-4 items-center mb-8">
            <span className="badge-category">Problème</span>
            <span className="meta-text flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-500" /> 20 Jan 2026
            </span>
            <span className="meta-text flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" /> 8 min de lecture
            </span>
          </div>

          <h1 className="article-title mb-8">
            Comment Enlever l'Odeur de Cigarette dans une Voiture ? (Méthodes Pro)
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-xl ring-1 ring-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1552933061-90320eecd137?auto=format&fit=crop&q=80&w=1200"
              alt="Enlever odeur cigarette voiture"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="quote-box">
            <p className="quote-text">
              "Rien de pire que d'acheter une voiture d'occasion qui sent le cendrier froid, ou de vouloir vendre la sienne avec cette odeur persistante. L'odeur de cigarette ne se cache pas, elle s'incruste. Voici comment s'en débarrasser pour de bon."
            </p>
          </div>
        </header>

        {/* Contenu */}
        <div className="prose-shineandgo">

          <section className="mb-12">
            <h2>Pourquoi l'odeur de tabac est si tenace ?</h2>
            <p>
              La fumée de cigarette contient des milliers de particules microscopiques qui pénètrent partout : dans les tissus des sièges, la moquette, le ciel de toit (c'est souvent lui le coupable !), et même dans les conduits d'aération. Masquer l'odeur avec un 'sapin magique' ne fait que créer un mélange écœurant.
            </p>
          </section>

          <section className="mb-12">
            <h2>Méthode 1 : Le Grand Nettoyage (Indispensable)</h2>
            <p>
              Avant tout traitement, il faut éliminer la source. Cela signifie vider TOUS les cendriers, nettoyer toutes les surfaces plastiques avec un APC (nettoyant tout usage) pour enlever le film de nicotine jaune/gras, et shampouiner les tissus. N'oubliez pas de nettoyer les vitres intérieures, souvent couvertes d'un film gras de fumée.
            </p>
          </section>

          <section className="mb-12">
            <h2>Méthode 2 : Le Traitement à l'Ozone (La Solution Pro)</h2>
            <p>
              C'est l'arme fatale. Un générateur d'ozone est placé dans la voiture fermée pendant 30 à 60 minutes. L'ozone (O3) va oxyder les molécules responsables des odeurs et tuer les bactéries. C'est la seule méthode qui atteint les conduits d'aération et les fibres profondes. Chez Shine&Go, nous combinons toujours nettoyage manuel + ozone pour un résultat 100% garanti.
            </p>
          </section>

          <section className="mb-12">
            <h2>Méthode 3 : Les Solutions Maison (Efficacité Limitée)</h2>
            <p>
              Le vinaigre blanc ou le café moulu peuvent absorber une partie des odeurs légères, mais ils ne viendront pas à bout d'une voiture de fumeur régulier. C'est souvent une perte de temps pour des odeurs incrustées depuis des années.
            </p>
          </section>

          {/* Conclusion */}
          <div className="cta-block my-12">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-400">
                <Check className="w-6 h-6" /> En conclusion
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Ne laissez pas une mauvaise odeur gâcher votre plaisir de conduire ou faire chuter le prix de revente de votre auto.
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
                  Combien de temps dure un traitement à l'ozone ?
                  <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="faq-accordion-content mt-4">
                  Le cycle machine dure environ 45min, mais il faut ensuite aérer le véhicule pendant 1h. Comptez une demi-journée pour la prestation complète (nettoyage + ozone).
                </div>
              </details>

              <details className="faq-accordion">
                <summary>
                  L'odeur revient-elle après ?
                  <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="faq-accordion-content mt-4">
                  Non, si le nettoyage a été fait correctement avant l'ozone, l'odeur est détruite définitivement. Sauf si vous recommencez à fumer dedans bien sûr !
                </div>
              </details>
            </div>
          </section>

          {/* Articles recommandés */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 mb-12">
            <h3 className="subsection-title mb-6">Articles recommandés :</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <RelatedLink href="/blog/lavage-voiture-avant-vente" title="Nettoyage Avant Vente" />
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
                Intervention : <Link href="/lavage-voiture-liege" className="text-white underline hover:text-blue-100">Liège</Link>, <Link href="/lavage-voiture-herve" className="text-white underline hover:text-blue-100">Herve</Link>, <Link href="/lavage-voiture-verviers" className="text-white underline hover:text-blue-100">Verviers</Link>, <Link href="/lavage-voiture-soumagne" className="text-white underline hover:text-blue-100">Soumagne</Link>, <Link href="/lavage-voiture-fleron" className="text-white underline hover:text-blue-100">Fléron</Link>, <Link href="/lavage-voiture-vise" className="text-white underline hover:text-blue-100">Visé</Link>
              </div></div></div></div></article>
    </main>
  )
}

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
