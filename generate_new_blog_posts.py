import os

articles = [
    {
        "slug": "nettoyage-voiture-luxe",
        "title": "Nettoyage Voiture de Luxe : Notre Service Premium",
        "title_short": "Nettoyage Voiture de Luxe",
        "description": "Votre véhicule d'exception mérite un soin particulier. Découvrez notre service de nettoyage haut de gamme pour voitures de luxe et prestige.",
        "category": "Premium",
        "date": "20 Mai 2024",
        "readTime": "8 min",
        "image": "/images/blog/nettoyage-voiture-luxe.png",
        "intro": "Une voiture de luxe n'est pas qu'un simple moyen de transport, c'est une pièce d'orfèvrerie mécanique. Son entretien ne peut être confié à n'importe qui.",
        "sections": [
            {"title": "Produits pH Neutre", "content": "Nous utilisons exclusivement des produits certifiés sans danger pour les finitions délicates."},
            {"title": "Technique des 2 Seaux", "content": "Zéro micro-rayure garantie grâce à nos gants en laine de mouton."}
        ],
        "conclusion": "L'excellence n'est pas une option, c'est notre standard.",
        "faq": [{"q": "Protection céramique ?", "a": "Oui, nous proposons des traitements longue durée."}]
    },
    {
        "slug": "lavage-utilitaire-camionnette",
        "title": "Lavage Utilitaire & Camionnette à Domicile",
        "title_short": "Lavage Utilitaire",
        "description": "Professionnels, soignez votre image de marque. Nous lavons vos utilitaires directement sur votre lieu de travail.",
        "category": "Pro",
        "date": "22 Mai 2024",
        "readTime": "5 min",
        "intro": "Votre camionnette est votre première carte de visite. Un véhicule propre renvoie une image de sérieux.",
        "sections": [
            {"title": "Gain de Temps", "content": "Nous intervenons pendant vos heures de bureau ou le soir."},
            {"title": "Nettoyage Cabine", "content": "Nous remettons l'habitacle à neuf pour votre confort quotidien."}
        ],
        "conclusion": "Une flotte propre, c'est un business qui brille.",
        "faq": [{"q": "Faites-vous les marquages ?", "a": "Oui, nous respectons vos stickers publicitaires."}]
    },
    {
        "slug": "nettoyage-voiture-apres-vacances",
        "title": "Nettoyage Voiture Retour de Vacances (Sable, Sel, Insectes)",
        "title_short": "Retour de Vacances",
        "description": "Sable de plage, sel marin ou moustiques écrasés ? Nos conseils pour nettoyer votre voiture après un long voyage.",
        "category": "Besoin",
        "date": "24 Juin 2024",
        "readTime": "6 min",
        "intro": "Les vacances laissent des souvenirs, mais aussi beaucoup de saleté. Le sable et le sel peuvent être corrosifs s'ils ne sont pas retirés rapidement.",
        "sections": [
            {"title": "Extraction du Sable", "content": "Le sable s'incruste partout. Nous utilisons des brosses vibrantes pour le faire remonter des fibres de moquette."},
            {"title": "Décontamination des Insectes", "content": "Les moustiques séchés peuvent attaquer le vernis. Nous utilisons des agents enzymatiques pour les dissoudre sans frotter."}
        ],
        "conclusion": "Repartez sur une base saine pour la rentrée.",
        "faq": [{"q": "Le sel est-il dangereux ?", "a": "Oui, il favorise la rouille, un rinçage du châssis est indispensable."}]
    },
    {
        "slug": "nettoyage-voiture-enfants",
        "title": "Nettoyage Voiture avec Enfants : Miettes, Taches, Odeurs",
        "title_short": "Voiture & Enfants",
        "description": "Sièges auto tachés et miettes au fond du coffre ? Découvrez notre protocole spécial 'famille' pour un habitacle sain.",
        "category": "Famille",
        "date": "30 Juin 2024",
        "readTime": "7 min",
        "intro": "Voyager avec des enfants est un défi pour la propreté de votre voiture. Jus renversés, biscuits écrasés... nous gérons tout.",
        "sections": [
            {"title": "Pressing des Sièges", "content": "Nous nettoyons en profondeur les sièges pour éliminer taches de lait et de nourriture."},
            {"title": "Désinfection Totale", "content": "Nous utilisons des produits bactéricides pour garantir un environnement sain à vos enfants."}
        ],
        "conclusion": "Une voiture propre pour des trajets plus sereins.",
        "faq": [{"q": "Produits toxiques ?", "a": "Non, tous nos produits sont rincés et certifiés sans danger après séchage."}]
    }
]

articles.extend([
    {
        "slug": "nettoyage-siege-tissu-tache",
        "title": "Comment Nettoyer des Sièges en Tissu Très Tachés ?",
        "title_short": "Sièges Tissus Tachés",
        "description": "Tache de graisse, café ou auréoles de boisson ? Découvrez comment notre service d'injection-extraction redonne vie à vos tissus.",
        "category": "Problèmes",
        "date": "15 Mai 2024",
        "readTime": "6 min",
        "intro": "Les sièges en tissu sont de véritables éponges à taches. Un simple coup de spray ne suffit pas pour retirer la saleté incrustée en profondeur.",
        "sections": [
            {"title": "L'Injection-Extraction", "content": "Nous injectons un produit nettoyant à coeur avant d'aspirer immédiatement la saleté et l'eau pour un séchage rapide."},
            {"title": "Désinfection Thermique", "content": "La vapeur haute pression permet de tuer les bactéries et acariens nichés dans les mousses."}
        ],
        "conclusion": "Ne changez pas vos sièges, nettoyez-les comme des pros.",
        "faq": [{"q": "Temps de séchage ?", "a": "Comptez 2 à 4 heures selon la température ambiante."}]
    },
    {
        "slug": "nettoyage-voiture-poils-chien-astuces",
        "title": "Extraction Poils de Chien : La Solution pour un Habitacle Sain",
        "title_short": "Poils de Chien",
        "description": "Les poils d'animaux sont un cauchemar à aspirer. Nos techniques pro pour les retirer de chaque recoin de votre voiture.",
        "category": "Problèmes",
        "date": "22 Mai 2024",
        "readTime": "7 min",
        "intro": "Aimer ses animaux ne veut pas dire accepter leurs poils partout. Les fibres des moquettes de voiture retiennent les poils comme du velcro.",
        "sections": [
            {"title": "Brossage Électrostatique", "content": "Nous utilisons des brosses spéciales qui soulèvent les poils les plus incrustés."},
            {"title": "Traitement Anti-Odeur", "content": "L'aspiration ne suffit pas, nous traitons l'habitacle pour supprimer l'odeur de 'chien mouillé'."}
        ],
        "conclusion": "Retrouvez une voiture saine pour vous et vos passagers.",
        "faq": [{"q": "Poils de chat aussi ?", "a": "Oui, même les poils les plus fins sont extraits avec notre méthode."}]
    },
    {
        "slug": "nettoyage-voiture-hiver-sel-chassis",
        "title": "Lavage Hivernal : Protégez votre Châssis contre le Sel",
        "title_short": "Lavage & Sel",
        "description": "Le sel de déneigement est le pire ennemi de votre carrosserie. Pourquoi un lavage régulier est vital durant l'hiver en Belgique.",
        "category": "Saisonnier",
        "date": "10 Jan 2024",
        "readTime": "5 min",
        "intro": "En hiver, les routes belges sont saturées de sel. C'est un agent hautement corrosif qui attaque votre châssis et votre vernis.",
        "sections": [
            {"title": "Rinçage Haute Pression", "content": "Il est crucial de rincer les passages de roues et le bas de caisse pour évacuer les dépôts salins."},
            {"title": "Protection Cire", "content": "Une couche de protection hydrophobe aide à empêcher le sel d'adhérer à la peinture."}
        ],
        "conclusion": "L'entretien d'hiver est l'assurance vie de votre carrosserie.",
        "faq": [{"q": "Fréquence en hiver ?", "a": "Un rinçage rapide toutes les deux semaines est idéal."}]
    }
])

# Quick win additional common topics
additional_slugs = [
    ("nettoyage-siege-cuir", "Entretien Sièges Cuir : Nettoyage & Hydratation", "Conseils"),
    ("lavage-moteur-sans-risque", "Lavage Moteur Voiture : Guide Complet", "Conseils"),
    ("nettoyage-ciel-de-toit", "Nettoyer le Ciel de Toit sans Décoller", "Problèmes"),
    ("preparer-voiture-controle-technique", "Contrôle Technique : Préparation Visuelle", "Conseils"),
    ("detailing-voiture-neuve", "Protection Voiture Neuve : Est-ce Utile ?", "Conseils"),
    ("nettoyage-voiture-electrique", "Nettoyage Voiture Électrique : Spécificités", "Véhicule"),
    ("lavage-suv-4x4-specialise", "Lavage SUV et 4x4 : Pourquoi c'est différent ?", "Véhicule"),
    ("prix-nettoyage-siege-tache", "Prix Nettoyage Siège Tache par Tache", "Tarifs")
]

for slug, title, cat in additional_slugs:
    articles.append({
        "slug": slug,
        "title": title,
        "title_short": title.split(':')[0],
        "description": f"Découvrez tout ce qu'il faut savoir sur {title.lower()}. Conseils d'experts Shine&Go.",
        "category": cat,
        "date": "15 Juil 2024",
        "readTime": "5 min",
        "intro": f"Le service de {title.lower()} est essentiel pour maintenir votre véhicule en bon état.",
        "sections": [
            {"title": "Pourquoi est-ce important ?", "content": "Un entretien régulier prévient les dégradations irréversibles."},
            {"title": "Notre approche", "content": "Nous utilisons des techniques professionnelles adaptées à chaque cas."}
        ],
        "conclusion": "Faites confiance à des professionnels pour un résultat optimal.",
        "faq": [{"q": "Est-ce cher ?", "a": "Le prix dépend de l'état du véhicule, contactez-nous pour un devis."}]
    })

template = """import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: `__TITLE__ | Shine&Go`,
  description: `__DESCRIPTION__`,
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
        "image": "__IMAGE__"
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Besoin d'un résultat professionnel ?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Nos experts Shine&Go interviennent à domicile partout en province de Liège. Gagnez du temps et profitez d'un résultat showroom.
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
          </div>
        </div>
      </article>
    </main>
  )
}
"""

for art in articles:
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

    image_path = art.get('image', "https://shineandgo.be/images/blog/default-blog.jpg")

    content = template.replace("__TITLE__", art['title'])
    content = content.replace("__TITLE_SHORT__", art['title_short'])
    content = content.replace("__DESCRIPTION__", art['description'])
    content = content.replace("__CATEGORY__", art['category'])
    content = content.replace("__DATE__", art['date'])
    content = content.replace("__READ_TIME__", art['readTime'])
    content = content.replace("__INTRO__", art['intro'])
    content = content.replace("__SECTIONS_HTML__", sections_html)
    content = content.replace("__CONCLUSION__", art['conclusion'])
    content = content.replace("__FAQ_HTML__", faq_html)
    content = content.replace("__FAQ_JSON__", faq_json)
    content = content.replace("__IMAGE__", image_path)
    
    dir_path = f"/Users/nathan/shineandgo_new-main/src/app/blog/{art['slug']}"
    os.makedirs(dir_path, exist_ok=True)
    with open(f"{dir_path}/page.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Created {art['slug']}")
