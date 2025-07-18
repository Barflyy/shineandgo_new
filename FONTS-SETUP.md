# Configuration de la police Kamerik 105 Bold

## 📁 Structure des fichiers

La police Kamerik 105 Bold doit être placée dans le dossier `public/fonts/` avec les formats suivants :

```
public/
└── fonts/
    ├── Kamerik-105-Bold.woff2    (format recommandé - plus petit)
    ├── Kamerik-105-Bold.woff     (format de fallback)
    └── Kamerik-105-Bold.ttf      (format de fallback)
```

## 🎯 Utilisation

### Classes Tailwind disponibles

- `font-kamerik` - Utilise Kamerik 105 Bold
- `font-display` - Alias pour Kamerik 105 Bold

### Utilisation dans les composants

```jsx
// Titres principaux
<h1 className="text-4xl md:text-5xl font-extrabold font-kamerik">
  Titre principal
</h1>

// Titres secondaires
<h2 className="text-3xl font-bold font-kamerik">
  Titre secondaire
</h2>

// Logos et éléments de marque
<div className="text-2xl font-bold font-kamerik">
  Shine&Go
</div>
```

### CSS personnalisé

```css
/* Utilisation directe en CSS */
.kamerik-title {
  font-family: 'Kamerik 105', 'Inter', system-ui, sans-serif;
  font-weight: 700;
}
```

## 🔧 Configuration

### Fichiers modifiés

1. **`src/app/fonts.css`** - Définition des @font-face
2. **`src/app/layout.tsx`** - Import et configuration
3. **`src/app/globals.css`** - Application aux titres
4. **`tailwind.config.js`** - Classes Tailwind

### Fallback

Si Kamerik 105 Bold n'est pas disponible, le site utilise :
1. Inter (Google Fonts)
2. System UI
3. Sans-serif

## 📱 Performance

- **font-display: swap** - Affiche le texte immédiatement avec la police de fallback
- **WOFF2** - Format le plus optimisé pour le web
- **Preload** - Chargement prioritaire des polices critiques

## 🎨 Design System

La police Kamerik 105 Bold est utilisée pour :
- ✅ Titres H1, H2, H3, H4, H5, H6
- ✅ Logo et marque
- ✅ Éléments de navigation importants
- ✅ Call-to-actions principaux

Le texte de contenu utilise toujours Inter pour une meilleure lisibilité.

## 📋 Checklist d'installation

- [ ] Placer les fichiers de police dans `public/fonts/`
- [ ] Vérifier que les formats WOFF2, WOFF, TTF sont présents
- [ ] Tester le rendu sur différents navigateurs
- [ ] Vérifier la performance avec Lighthouse
- [ ] Tester la responsivité sur mobile

## 🚀 Déploiement

Les fichiers de police sont automatiquement servis par Next.js depuis le dossier `public/`. Aucune configuration supplémentaire n'est nécessaire pour la production. 