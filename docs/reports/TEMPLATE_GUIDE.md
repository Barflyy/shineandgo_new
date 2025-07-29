# 🚀 Guide d'Utilisation du Template PageTemplate.tsx

## 📋 Vue d'Ensemble

Le `PageTemplate.tsx` est un composant réutilisable basé sur la structure de la page d'accueil de Shine&Go. Il permet de créer rapidement des pages avec des sections configurables.

## 🎯 Fonctionnalités

### ✅ Sections Disponibles
- **Hero** : Section d'en-tête avec titre, sous-titre, CTA
- **SocialProof** : Section "Pourquoi choisir Shine&Go ?"
- **BeforeAfter** : Section "Avant/Après : La Transformation"
- **Services** : Section "Nos Forfaits Sur-Mesure"
- **HowItWorks** : Section "Comment fonctionne notre service ?"
- **FAQ** : Section "Questions fréquentes"
- **CustomSections** : Sections personnalisées avec HTML

### ⚙️ Configuration

#### 1. Métadonnées de Base
```yaml
title: "Titre de votre page"
description: "Description SEO de votre page"
keywords: "mots-clés, séparés, par, des, virgules"
```

#### 2. Activation/Désactivation des Sections
```yaml
showHero: true          # Afficher le Hero
showSocialProof: true   # Afficher la section SocialProof
showBeforeAfter: true   # Afficher la section Avant/Après
showServices: true      # Afficher la section Services
showHowItWorks: true    # Afficher la section Comment ça marche
showFAQ: true          # Afficher la section FAQ
```

#### 3. Personnalisation du Hero
```yaml
heroContent:
  title: "Votre titre principal"
  subtitle: "Votre sous-titre"
  ctaText: "Texte du bouton CTA"
  features:
    - "Feature 1"
    - "Feature 2"
    - "Feature 3"
```

#### 4. Sections Personnalisées
```yaml
customSections:
  - id: "section-1"
    title: "Titre de la section"
    content: |
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Titre</h3>
          <p className="text-slate-600">Contenu</p>
        </div>
      </div>
```

## 📝 Exemple Complet

### Fichier Markdown : `content/pages/ma-page.md`

```yaml
---
title: "Ma Page Personnalisée | Shine&Go"
description: "Description SEO de ma page personnalisée"
keywords: "mot-clé1, mot-clé2, mot-clé3"
showHero: true
showSocialProof: false
showBeforeAfter: true
showServices: true
showHowItWorks: false
showFAQ: true
heroContent:
  title: "Mon Titre Personnalisé"
  subtitle: "Mon sous-titre personnalisé"
  ctaText: "Mon bouton personnalisé"
  features:
    - "Ma feature 1"
    - "Ma feature 2"
customSections:
  - id: "ma-section-1"
    title: "Ma Section Personnalisée"
    content: |
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Mon contenu personnalisé
        </h3>
        <p className="text-slate-600 mb-6">
          Description de ma section personnalisée.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl">
          Mon bouton
        </button>
      </div>
---

# Contenu Markdown de ma page

Ceci est le contenu Markdown de ma page qui sera affiché dans la section de contenu.

## Sous-titre

- Point 1
- Point 2
- Point 3

## Autre section

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

## 🎨 Classes CSS Disponibles

### Grilles
- `grid md:grid-cols-2` : Grille 2 colonnes sur desktop
- `grid md:grid-cols-3` : Grille 3 colonnes sur desktop
- `gap-8` : Espacement entre éléments

### Cartes
- `bg-white border border-slate-200 rounded-xl p-6 shadow-lg` : Carte standard
- `text-center` : Centrage du texte
- `mb-4`, `mb-6` : Marges bottom

### Boutons
- `bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl` : Bouton principal
- `bg-green-600 hover:bg-green-700` : Bouton secondaire

### Textes
- `text-slate-900` : Texte principal
- `text-slate-600` : Texte secondaire
- `text-xl font-bold` : Titre de section
- `text-2xl font-bold` : Titre principal

## 🔧 Utilisation Avancée

### 1. Créer une Page Minimaliste
```yaml
---
title: "Page Minimaliste"
showHero: true
showSocialProof: false
showBeforeAfter: false
showServices: false
showHowItWorks: false
showFAQ: false
---
```

### 2. Créer une Page de Services
```yaml
---
title: "Nos Services"
showHero: true
showSocialProof: true
showServices: true
showFAQ: true
customSections:
  - id: "services-details"
    title: "Détails de nos Services"
    content: |
      <div className="grid md:grid-cols-3 gap-6">
        <!-- Vos services personnalisés -->
      </div>
---
```

### 3. Créer une Page de Contact
```yaml
---
title: "Contactez-nous"
showHero: true
showFAQ: true
customSections:
  - id: "contact-form"
    title: "Formulaire de Contact"
    content: |
      <div className="max-w-2xl mx-auto">
        <!-- Votre formulaire de contact -->
      </div>
---
```

## 📱 Responsive Design

Le template est optimisé pour :
- **Mobile-first** : Design adapté aux petits écrans
- **Tablet** : Adaptation automatique
- **Desktop** : Version complète

## 🚀 Déploiement

1. Créez votre fichier `.md` dans `/content/pages/`
2. Configurez le frontmatter selon vos besoins
3. Ajoutez votre contenu Markdown
4. La page sera automatiquement disponible sur `/pages/[nom-du-fichier]`

## 🎯 Bonnes Pratiques

### ✅ À Faire
- Utilisez des IDs uniques pour les sections personnalisées
- Testez sur mobile et desktop
- Optimisez les images
- Rédigez des métadonnées SEO pertinentes

### ❌ À Éviter
- Ne pas utiliser de JavaScript dans le contenu HTML
- Ne pas surcharger avec trop de sections personnalisées
- Ne pas oublier les métadonnées SEO

## 🆘 Support

Pour toute question ou problème :
1. Consultez ce guide
2. Regardez les exemples dans `/content/pages/`
3. Contactez l'équipe de développement

---

**Template créé avec ❤️ pour Shine&Go** 