# Configuration Typographique - Shine&Go

## 🎯 Configuration des polices

### **Lemfont Bold** - Gros titres (H1, H2)
- **Usage** : Titres principaux et sous-titres importants
- **Poids** : Bold (700)
- **Éléments** : H1, H2
- **Fallback** : Inter, Arial, Helvetica, sans-serif

### **Inter** - Corps de texte et éléments secondaires
- **Usage** : Texte courant, paragraphes, boutons, liens
- **Poids** : Variable (400-700)
- **Éléments** : H3, H4, H5, H6, p, span, div, button, a
- **Fallback** : Arial, Helvetica, sans-serif

## 📁 Structure des fichiers

### **Fichiers de polices**
```
src/app/fonts.css          # Définition @font-face pour Lemfont
src/app/layout.tsx         # Configuration Next.js et variables CSS
src/app/globals.css        # Styles typographiques globaux
```

### **Fichiers de polices à ajouter**
```
public/fonts/
├── Lemfont-Bold.woff2     # Format moderne (priorité)
├── Lemfont-Bold.woff      # Format legacy
└── Lemfont-Bold.ttf       # Format fallback
```

## ⚙️ Configuration technique

### **1. Définition des polices (fonts.css)**
```css
@font-face {
  font-family: 'Lemfont';
  src: url('/fonts/Lemfont-Bold.woff2') format('woff2'),
       url('/fonts/Lemfont-Bold.woff') format('woff'),
       url('/fonts/Lemfont-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### **2. Configuration Next.js (layout.tsx)**
```typescript
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const lemfont = {
  fontFamily: 'Lemfont, Inter, system-ui, sans-serif',
  variable: '--font-lemfont',
};
```

### **3. Variables CSS**
```css
:root {
  --font-inter: 'Inter', Arial, Helvetica, sans-serif;
  --font-lemfont: 'Lemfont, Inter, system-ui, sans-serif';
}
```

### **4. Styles globaux (globals.css)**
```css
/* Lemfont pour les gros titres */
h1, h2 {
  font-family: var(--font-lemfont), 'Lemfont', 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 700;
}

/* Inter pour le reste */
h3, h4, h5, h6, p, span, div, button, a {
  font-family: var(--font-inter), 'Inter', Arial, Helvetica, sans-serif;
}

/* Classes utilitaires */
.font-lemfont {
  font-family: var(--font-lemfont), 'Lemfont', 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 700;
}

.font-inter {
  font-family: var(--font-inter), 'Inter', Arial, Helvetica, sans-serif;
}
```

## 🎨 Utilisation dans les composants

### **Titres principaux (H1, H2)**
```jsx
// Utilise automatiquement Lemfont Bold
<h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">
  Titre principal
</h1>

<h2 className="text-3xl font-bold text-text-primary mb-4">
  Sous-titre important
</h2>
```

### **Titres secondaires (H3, H4, H5, H6)**
```jsx
// Utilise automatiquement Inter
<h3 className="text-2xl font-bold text-text-primary mb-4">
  Titre de section
</h3>

<h4 className="text-xl font-semibold text-text-primary mb-2">
  Titre de sous-section
</h4>
```

### **Classes utilitaires**
```jsx
// Forcer Lemfont
<div className="font-lemfont text-2xl">
  Texte en Lemfont Bold
</div>

// Forcer Inter
<div className="font-inter text-lg">
  Texte en Inter
</div>
```

## 📱 Responsive et accessibilité

### **Tailles de police fluides**
```css
/* Titres responsifs */
.text-fluid-1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}

.text-fluid-2 {
  font-size: clamp(1.25rem, 3vw, 2rem);
}
```

### **Optimisations de performance**
- **font-display: swap** pour un chargement optimisé
- **Preload** pour Inter via Next.js
- **Fallbacks** robustes pour tous les navigateurs

### **Accessibilité**
- **Contraste** : Respect des ratios WCAG
- **Taille minimale** : 16px pour la lisibilité mobile
- **Line-height** : 1.6 pour une lecture confortable

## 🔧 Maintenance

### **Ajout de nouvelles polices**
1. Placer les fichiers dans `public/fonts/`
2. Ajouter les `@font-face` dans `fonts.css`
3. Configurer les variables dans `layout.tsx`
4. Mettre à jour les styles dans `globals.css`

### **Vérification de la cohérence**
- Tous les H1 et H2 utilisent Lemfont
- Tous les autres éléments utilisent Inter
- Fallbacks appropriés pour tous les navigateurs

### **Tests recommandés**
- Vérifier le chargement sur différents appareils
- Tester les fallbacks sur navigateurs anciens
- Contrôler la performance avec les outils de développement

## 📊 Impact visuel

### **Avant (Inter uniquement)**
- Typographie uniforme mais moins distinctive
- Hiérarchie visuelle moins marquée
- Identité visuelle moins forte

### **Après (Lemfont + Inter)**
- Hiérarchie visuelle claire et distinctive
- Identité de marque renforcée
- Lecture plus engageante et professionnelle

---

**Date** : 2025-01-27  
**Statut** : ✅ Configuré  
**Polices** : Lemfont Bold (titres) + Inter (corps) 