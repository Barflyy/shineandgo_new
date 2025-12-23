import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Lavage Voiture de Collection : Précautions Essentielles | Shine&Go`,
  description: `Découvrez tout ce qu'il faut savoir sur lavage voiture de collection : précautions essentielles. Conseils d'experts Shine&Go.`,
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
        "headline": "Lavage Voiture de Collection : Précautions Essentielles",
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
          { label: 'Lavage Voiture de Collection ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        <header className="mb-12">
          <Link href="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 font-medium">
            <span className="badge-category">Collection</span>
            <span className="meta-text flex items-center gap-2"><Calendar className="w-4 h-4" /> 15 Juil 2026</span>
            <span className="meta-text flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min de lecture</span>
          </div>

          <h1 className="article-title mb-8">
            Lavage Voiture de Collection : Précautions Essentielles
          </h1>

          <div className="quote-box">
            <p className="quote-text">
              "Le service de lavage voiture de collection : précautions essentielles est essentiel pour maintenir votre véhicule en bon état."
            </p>
          </div>
        </header>

        <div className="prose-shineandgo">
          
          
          <section className="mb-12">
            <h2>Pourquoi le lavage voiture de collection est essentiel ?</h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              Beaucoup de propriétaires sous-estiment l'importance de ce point. Pourtant, négliger le lavage voiture de collection peut entraîner une dégradation accélérée de vos matériaux (cuirs, plastiques, tissus) et une perte significative de la valeur de revente de votre véhicule.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Au-delà de l'esthétique, il s'agit de préserver votre capital automobile. Une intervention professionnelle permet de stopper l'usure et de redonner un aspect 'sortie d'usine' durable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <ShieldCheck className="text-blue-600 w-8 h-8 flex-shrink-0" /> Les 3 erreurs à éviter absolument
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Utiliser des produits ménagers</h3>
                  <p className="text-gray-600">Le liquide vaisselle ou les nettoyants multi-surfaces sont souvent trop agressifs pour les vernis et les cuirs automobiles. Ils assèchent les matières et créent des micro-rayures.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agir trop tard</h3>
                  <p className="text-gray-600">Attendre que la saleté soit incrustée rend le nettoyage deux fois plus difficile et coûteux. L'entretien régulier est la clé de la longévité.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ignorer les finitions</h3>
                  <p className="text-gray-600">Un nettoyage sans protection (cire, dressing plastiques) ne dure pas. Les surfaces, mises à nu, se ré-encrassent immédiatement si elles ne sont pas protégées.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>La solution Shine&Go : Expertise à Domicile</h2>
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <p className="text-xl leading-relaxed text-blue-900 mb-6">
                Pour garantir un résultat parfait sur le lavage voiture de collection, nous utilisons une approche méthodique :
              </p>
              <ul className="grid md:grid-cols-2 gap-6">
                <li className="flex items-center gap-3 text-blue-800 font-medium">
                  <Check className="w-5 h-5 text-blue-600" /> Diagnostic précis de l'état
                </li>
                <li className="flex items-center gap-3 text-blue-800 font-medium">
                  <Check className="w-5 h-5 text-blue-600" /> Chimie professionnelle (pH neutre)
                </li>
                <li className="flex items-center gap-3 text-blue-800 font-medium">
                  <Check className="w-5 h-5 text-blue-600" /> Outillage spécialisé (Vapeur, souffleur)
                </li>
                <li className="flex items-center gap-3 text-blue-800 font-medium">
                  <Check className="w-5 h-5 text-blue-600" /> Finitions et protections haut de gamme
                </li>
              </ul>
            </div>
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
