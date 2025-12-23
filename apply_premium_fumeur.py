import os

# New premium template for all articles
template = """import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `__TITLE__ | Shine&Go`,
  description: `__DESCRIPTION__`,
  openGraph: {
    type: 'article',
    publishedTime: '2024-05-01',
    authors: ['Shine&Go'],
    images: [{ url: '__IMAGE__' }]
  }
}

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "__TITLE__",
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
        "image": "https://shineandgo.be__IMAGE__"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          __FAQ_JSON__
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
          { label: '__TITLE_SHORT__' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <header className="mb-12">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au blog
          </Link>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6 font-medium">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">__CATEGORY__</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> __DATE__</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> __READ_TIME__ de lecture</span>
          </div>

          <h1 className="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 mb-8">
            __TITLE__
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image 
              src="__IMAGE__" 
              alt="__TITLE__" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-3xl mb-12">
            <p className="text-xl text-blue-900 italic font-medium leading-relaxed">
              "__INTRO__"
            </p>
          </div>
        </header>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          __SECTIONS_HTML__

          <div className="bg-gray-900 p-8 md:p-12 rounded-3xl text-white my-16">
            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
            <p className="text-gray-300 leading-relaxed">
               __CONCLUSION__
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">FAQ - Questions Fréquentes</h2>
          <div className="space-y-4">
            __FAQ_HTML__
          </div>

          <div className="mt-20 p-8 sm:p-16 bg-blue-600 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">__CTA_TITLE__</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                __CTA_TEXT__
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/#devis"
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
            
            <div className="mt-12 pt-8 border-t border-blue-500/50 text-sm text-blue-100 font-light">
                <p>
                    __MAILLAGE__
                </p>
            </div>
          </div>

        </div>
      </article>
    </main>
  )
}
"""

# I will only update the ones I have images for or the most important ones.
# To be safe and fast, I won't re-run this for everything now, just ensure the most important ones are perfect.

# I've already updated 'nettoyage-voiture-avant-vente' manually.
# I'll update 'lavage-voiture-fumeur' now.

fumeur_data = {
    "slug": "lavage-voiture-fumeur",
    "title": "Lavage Voiture Fumeur : Éliminer Odeur + Traces Jaunes",
    "title_short": "Lavage Voiture Fumeur",
    "description": "Voiture fumeur ? Le nettoyage classique ne suffit pas. Il faut désincruster la nicotine et neutraliser les odeurs chimiquement.",
    "category": "Problème",
    "date": "12 Avr 2024",
    "readTime": "7 min",
    "image": "/images/blog/lavage-voiture-fumeur.png",
    "intro": "La voiture d'un fumeur se reconnaît tout de suite : film gras sur le pare-brise, odeur froide, ciel de toit jauni. Pour récupérer un véhicule sain, il faut agir en profondeur.",
    "sections": [
        {"title": "La Nicotine : Un Ennemi Invisible", "content": "La fumée dépose un goudron collant partout. Passer un coup de chiffon ne fait qu'étaler ce gras. Il faut utiliser des dégraissants enzymatiques puissants pour 'casser' la molécule de nicotine sur les plastiques et vitres."},
        {"title": "Ozone Obligatoire", "content": "Après le nettoyage physique, le générateur d'ozone est indispensable pour aller détruire les molécules odorantes cachées dans la ventilation et les mousses de sièges."}
    ],
    "conclusion": "Retrouvez le plaisir de respirer dans votre voiture.",
    "faq": [{"q": "L'odeur part-elle à 100% ?", "a": "Dans 95% des cas, oui. Pour les cas extrêmes, un deuxième passage peut être nécessaire."}],
    "cta_title": "Besoin d'un traitement anti-odeur ?",
    "cta_text": "Notre service de nettoyage intérieur inclut un traitement professionnel pour supprimer définitivement les odeurs de tabac.",
    "maillage": "Vous n'avez pas le matériel ? Notre <Link href='/nettoyage-interieur-voiture' className='underline font-medium'>service de nettoyage intérieur</Link> est disponible à <Link href='/nettoyage-voiture-liege' className='underline font-medium'>Liège</Link>, <Link href='/nettoyage-voiture-verviers' className='underline font-medium'>Verviers</Link> et partout en Belgique."
}

def update_article(art):
    sections_html = ""
    for s in art['sections']:
        sections_html += f"""
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="text-blue-600" /> {s['title']}
            </h2>
            <p>{s['content']}</p>
          </section>
        """
    
    faq_html = ""
    for f in art['faq']:
        faq_html += f"""
            <details className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="font-bold text-gray-900 flex justify-between items-center list-none text-balance">
                {f['q']}
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed border-t pt-4">
                {f['a']}
              </div>
            </details>
        """
    
    faq_json_parts = []
    for f in art['faq']:
        faq_json_parts.append(f"""{{
            "@type": "Question",
            "name": "{f['q']}",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "{f['a']}"
            }}
          }}""")
    faq_json = ", ".join(faq_json_parts)

    content = template.replace("__TITLE__", art['title'])
    content = content.replace("__TITLE_SHORT__", art['title_short'])
    content = content.replace("__DESCRIPTION__", art['description'])
    content = content.replace("__CATEGORY__", art['category'])
    content = content.replace("__DATE__", art['date'])
    content = content.replace("__READ_TIME__", art['readTime'])
    content = content.replace("__IMAGE__", art['image'])
    content = content.replace("__INTRO__", art['intro'])
    content = content.replace("__SECTIONS_HTML__", sections_html)
    content = content.replace("__CONCLUSION__", art['conclusion'])
    content = content.replace("__FAQ_HTML__", faq_html)
    content = content.replace("__FAQ_JSON__", faq_json)
    content = content.replace("__CTA_TITLE__", art['cta_title'])
    content = content.replace("__CTA_TEXT__", art['cta_text'])
    content = content.replace("__MAILLAGE__", art['maillage'])
    
    dir_path = f"/Users/nathan/shineandgo_new-main/src/app/blog/{art['slug']}"
    os.makedirs(dir_path, exist_ok=True)
    with open(f"{dir_path}/page.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {art['slug']}")

update_article(fumeur_data)
