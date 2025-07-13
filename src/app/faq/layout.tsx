import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ Nettoyage Auto - Questions Fréquentes | Shine&Go Premium",
  description: "Toutes les réponses à vos questions sur le nettoyage automobile. Prix, durée, produits utilisés, garanties. Service premium à domicile dans toute la région.",
  keywords: [
    "faq nettoyage auto",
    "questions nettoyage voiture",
    "prix nettoyage auto",
    "durée nettoyage voiture",
    "produits nettoyage auto",
    "garantie nettoyage voiture",
    "service mobile nettoyage",
    "nettoyage auto domicile",
    "devis nettoyage voiture",
    "comment nettoyer voiture"
  ],
  openGraph: {
    title: "FAQ Nettoyage Auto - Questions Fréquentes | Shine&Go Premium",
    description: "Toutes les réponses à vos questions sur le nettoyage automobile. Prix, durée, produits utilisés, garanties.",
    type: "website",
    locale: "fr_BE",
    url: "https://www.shineandgo.be/faq",
    siteName: "Shine&Go Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Nettoyage Auto - Questions Fréquentes | Shine&Go Premium",
    description: "Toutes les réponses à vos questions sur le nettoyage automobile. Prix, durée, produits utilisés, garanties.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 