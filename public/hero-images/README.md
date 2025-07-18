# Images du Héros - Shine & Go

Ce dossier contient les images utilisées dans les sections héros du site web Shine & Go.

## 📁 Structure recommandée

```
hero-images/
├── hero-main.jpg          # Image principale du héros (page d'accueil)
├── hero-before-after.jpg  # Image avant/après pour le héros
├── hero-mobile.jpg        # Image optimisée pour mobile
├── hero-tablet.jpg        # Image optimisée pour tablette
└── hero-desktop.jpg       # Image optimisée pour desktop
```

## 🎯 Spécifications techniques

### Formats acceptés
- **JPEG** : Pour les photos avec compression optimale
- **WebP** : Pour une meilleure performance (recommandé)
- **PNG** : Pour les images avec transparence

### Tailles recommandées
- **Desktop** : 1200x800px (ratio 3:2)
- **Tablet** : 800x600px (ratio 4:3)
- **Mobile** : 600x400px (ratio 3:2)

### Optimisation
- **Poids maximum** : 500KB par image
- **Compression** : 80-85% pour JPEG
- **Qualité WebP** : 85-90%

## 🖼️ Utilisation dans le code

### Exemple avec Next.js Image
```jsx
import Image from 'next/image';

<Image
  src="/hero-images/hero-main.jpg"
  alt="Nettoyage voiture professionnel - Avant/après"
  width={1200}
  height={800}
  className="w-full h-auto"
  priority
/>
```

### Exemple responsive
```jsx
<picture>
  <source
    srcSet="/hero-images/hero-desktop.webp"
    media="(min-width: 1024px)"
  />
  <source
    srcSet="/hero-images/hero-tablet.webp"
    media="(min-width: 768px)"
  />
  <img
    src="/hero-images/hero-mobile.jpg"
    alt="Nettoyage voiture professionnel"
    className="w-full h-auto"
  />
</picture>
```

## 📝 Bonnes pratiques

### Contenu des images
- ✅ **Avant/après** : Montrer la transformation
- ✅ **Voitures propres** : Résultats finaux impressionnants
- ✅ **Équipement pro** : Montrer le professionnalisme
- ✅ **Service mobile** : Montrer l'intervention à domicile

### Accessibilité
- **Alt text descriptif** : Décrire l'image et son contexte
- **Contraste** : S'assurer que le texte reste lisible
- **Taille minimale** : 44x44px pour les éléments cliquables

### Performance
- **Lazy loading** : Pour les images non critiques
- **Priority** : Pour les images above the fold
- **Preload** : Pour les images critiques

## 🔄 Mise à jour

1. Ajoutez votre nouvelle image dans ce dossier
2. Suivez la convention de nommage
3. Optimisez l'image (compression, taille)
4. Mettez à jour le code correspondant
5. Testez sur différents appareils

## 📱 Responsive Design

Les images du héros doivent être optimisées pour :
- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px
- **Desktop** : 1024px+

## 🎨 Style visuel

- **Couleurs** : Cohérentes avec la charte graphique
- **Composition** : Centrée sur le résultat
- **Luminosité** : Équilibrée pour la lisibilité du texte
- **Contraste** : Suffisant pour le texte superposé 