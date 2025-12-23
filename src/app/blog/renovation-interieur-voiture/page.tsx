import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `Rénovation Intérieur Voiture : Quand le Nettoyage ne Suffit Plus | Shine&Go`,
  description: `Découvrez tout ce qu'il faut savoir sur rénovation intérieur voiture : quand le nettoyage ne suffit plus. Conseils d'experts Shine&Go.`,
  openGraph: {
    type: 'article',
    publishedTime: '2024-05-01',
    authors: ['Shine&Go'],
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Rénovation Intérieur Voiture : Quand le Nettoyage ne Suffit Plus",
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
          { label: 'Rénovation Intérieur Voiture ' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <header className="mb-12">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 font-medium">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Offres</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 15 Juil 2024</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min de lecture</span>
          </div>

          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8">
            Rénovation Intérieur Voiture : Quand le Nettoyage ne Suffit Plus
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-3xl mb-12">
            <p className="text-xl text-blue-900 italic font-medium leading-relaxed">
              "Le service de rénovation intérieur voiture : quand le nettoyage ne suffit plus est essentiel pour maintenir votre véhicule en bon état."
            </p>
          </div>
        </header>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          
          
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <Sparkles className="text-blue-600 w-8 h-8 flex-shrink-0" /> Pourquoi le rénovation intérieur voiture est essentiel ?
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              Beaucoup de propriétaires sous-estiment l'importance de ce point. Pourtant, négliger le rénovation intérieur voiture peut entraîner une dégradation accélérée de vos matériaux (cuirs, plastiques, tissus) et une perte significative de la valeur de revente de votre véhicule.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              Au-delà de l'esthétique, il s'agit de préserver votre capital automobile. Une intervention professionnelle permet de stopper l'usure et de redonner un aspect 'sortie d'usine' durable.
            </p>
          </section>

          <section className="mb-20">
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

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <Sparkles className="text-blue-600 w-8 h-8 flex-shrink-0" /> La solution Shine&Go : Expertise à Domicile
            </h2>
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <p className="text-xl leading-relaxed text-blue-900 mb-6">
                Pour garantir un résultat parfait sur le rénovation intérieur voiture, nous utilisons une approche méthodique :
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

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">FAQ - Questions Fréquentes</h2>
          <div className="space-y-4">
            
            <details className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="font-bold text-gray-900 flex justify-between items-center list-none text-balance">
                Est-ce cher ?
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed border-t pt-4">
                Le prix dépend de l'état du véhicule, contactez-nous pour un devis.
              </div>
            </details>
        
          </div>

          <div className="mt-20 p-8 sm:p-16 bg-blue-600 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Besoin d'un résultat professionnel ?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Nos experts Shine&Go interviennent à domicile partout en province de Liège. Gagnez du temps et profitez d'un résultat showroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/#tarifs"
                  className="px-10 py-5 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg text-lg"
                >
                  Voir nos tarifs
                </Link>
                <a
                  href="https://wa.me/32472303701"
                  className="px-10 py-5 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-all text-lg flex items-center justify-center gap-2"
                >
                  Devis WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
