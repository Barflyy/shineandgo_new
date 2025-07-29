# Guide d'Utilisation du Template de Page

## 📋 Vue d'ensemble

Le `PageTemplate` est un composant réutilisable qui permet de créer rapidement des pages avec la même structure que la page d'accueil, en personnalisant uniquement le contenu.

## 🚀 Comment utiliser le template

### 1. Import du template

```tsx
import { Metadata } from 'next';
import PageTemplate from '@/shared/components/PageTemplate';
```

### 2. Définition des métadonnées

```tsx
export const metadata: Metadata = {
  title: "Titre de votre page | Shine&Go | Devis Gratuit",
  description: "Description de votre page pour le SEO",
  openGraph: {
    title: "Titre Open Graph",
    description: "Description Open Graph",
    type: "website",
    locale: "fr_BE",
    url: "https://shineandgo.be/votre-url",
    siteName: "Shine&Go Premium",
  },
  alternates: {
    canonical: "https://shineandgo.be/votre-url",
  },
};
```

### 3. Utilisation du template

```tsx
export default function VotrePage() {
  return (
    <PageTemplate
      metadata={metadata}
      showHero={true}
      showSocialProof={true}
      showBeforeAfter={true}
      showServices={true}
      showHowItWorks={true}
      showFAQ={true}
      customSections={[
        // Vos sections personnalisées ici
      ]}
    />
  );
}
```

## ⚙️ Options du template

### Sections à afficher

- `showHero` : Affiche la section Hero (défaut: `true`)
- `showSocialProof` : Affiche la section "Pourquoi choisir Shine&Go" (défaut: `true`)
- `showBeforeAfter` : Affiche la section "Avant/Après" (défaut: `true`)
- `showServices` : Affiche la section "Nos Services" (défaut: `true`)
- `showHowItWorks` : Affiche la section "Comment ça marche" (défaut: `true`)
- `showFAQ` : Affiche la section FAQ (défaut: `true`)

### Sections personnalisées

```tsx
customSections={[
  <section key="section-1" className="w-full py-12 md:py-16 lg:py-20 container-mobile">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Votre titre
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Votre contenu
      </p>
    </div>
  </section>,
  // Autres sections...
]}
```

## 📝 Exemples d'utilisation

### Page de service

```tsx
export default function NettoyageExterieurPage() {
  return (
    <PageTemplate
      metadata={metadata}
      customSections={[
        <section key="service-info" className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nettoyage Extérieur Voiture à Domicile
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Service professionnel de nettoyage extérieur
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Ce qui est inclus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mousse active dégraissante</span>
                  </li>
                  {/* Autres éléments... */}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Tarifs
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Petite voiture</span>
                    <span className="font-bold text-green-600">49€</span>
                  </div>
                  {/* Autres tarifs... */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ]}
    />
  );
}
```

### Page de ville

```tsx
export default function VillePage() {
  return (
    <PageTemplate
      metadata={metadata}
      customSections={[
        <section key="ville-info" className="w-full py-12 md:py-16 lg:py-20 container-mobile">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Lavage Voiture à Domicile à [Ville]
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Service premium de lavage auto mobile
              </p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <p className="text-blue-800">
                <strong>Zone gratuite :</strong> Pas de frais de déplacement !
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Nos Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span><strong>Lavage Intérieur :</strong> 39€</span>
                  </li>
                  {/* Autres services... */}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Zones Desservies
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-gray-600">•</span>
                    <span className="ml-2">[Ville] (zone gratuite)</span>
                  </li>
                  {/* Autres villes... */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ]}
    />
  );
}
```

## 🎨 Classes CSS utiles

### Conteneurs
- `container-mobile` : Conteneur optimisé mobile
- `max-w-7xl` : Largeur maximale
- `px-4 sm:px-6 lg:px-8` : Padding responsive

### Espacement
- `py-12 md:py-16 lg:py-20` : Padding vertical responsive
- `mb-8`, `mb-12` : Marges bottom
- `gap-8` : Espacement entre éléments

### Couleurs
- `text-gray-900` : Texte principal
- `text-gray-600` : Texte secondaire
- `text-green-500` : Éléments positifs
- `text-blue-500` : Éléments informatifs
- `bg-white` : Fond blanc
- `bg-blue-50` : Fond bleu clair

### Composants
- `rounded-lg` : Coins arrondis
- `shadow-lg` : Ombre
- `border border-gray-200` : Bordure

## 📁 Structure recommandée

```
src/app/pages/
├── services/
│   ├── nettoyage-interieur-voiture/
│   │   └── page.tsx
│   ├── nettoyage-exterieur/
│   │   └── page.tsx
│   └── nettoyage-complet-voiture/
│       └── page.tsx
└── villes/
    ├── herve/
    │   └── page.tsx
    ├── liege/
    │   └── page.tsx
    └── verviers/
        └── page.tsx
```

## 🔧 Bonnes pratiques

1. **Métadonnées uniques** : Chaque page doit avoir des métadonnées uniques
2. **URLs canoniques** : Toujours définir l'URL canonique
3. **Sections personnalisées** : Utiliser des clés uniques pour les sections
4. **Responsive design** : Toujours tester sur mobile
5. **SEO** : Inclure des mots-clés pertinents dans les métadonnées

## 🚀 Déploiement

Le template génère automatiquement des pages statiques optimisées pour :
- Performance (pages pré-générées)
- SEO (métadonnées complètes)
- Accessibilité (structure sémantique)
- Mobile-first (design responsive) 