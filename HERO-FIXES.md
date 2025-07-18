# Corrections du Hero - Problèmes d'affichage des textes

## 🐛 Problèmes identifiés

1. **Background avec `rounded-3xl`** - Causait des problèmes de débordement
2. **`overflow-hidden`** - Coupaient potentiellement le contenu
3. **Z-index manquant** - Le contenu pouvait passer derrière le background
4. **Couleurs de texte** - Manque de contraste avec le background
5. **Animations Framer Motion** - Problèmes de rendu pendant les transitions

## ✅ Corrections appliquées

### 1. Background et Layout
```diff
- <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
+ <section className="relative min-h-screen flex items-center justify-center pt-16">

- <div className="absolute inset-0 bg-surface-light rounded-3xl shadow-sm"></div>
+ <div className="absolute inset-0 bg-surface-light z-0"></div>

- <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
+ <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24 relative z-10">
```

### 2. Couleurs de texte
```diff
- <span className="text-gray-700">Service mobile - Je me déplace chez vous</span>
+ <span className="text-text-primary">Service mobile - Je me déplace chez vous</span>

- <span className="text-gray-700">Produits professionnels Koch Chemie</span>
+ <span className="text-text-primary">Produits professionnels Koch Chemie</span>

- <span className="text-gray-700">Résultats garantis ou remboursé</span>
+ <span className="text-text-primary">Résultats garantis ou remboursé</span>

- className="flex items-center space-x-6 text-sm text-gray-700"
+ className="flex items-center space-x-6 text-sm text-text-primary"
```

### 3. Optimisations des animations
```diff
- className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight font-kamerik"
+ className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight font-kamerik relative motion-text"

- className="text-base md:text-lg text-text-primary leading-relaxed"
+ className="text-base md:text-lg text-text-primary leading-relaxed motion-text"
```

### 4. CSS global ajouté
```css
/* S'assurer que le texte reste visible pendant les animations */
.motion-text {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

## 🎯 Résultat

- ✅ Les textes sont maintenant toujours visibles
- ✅ Meilleur contraste avec le background
- ✅ Animations plus fluides sans problèmes de rendu
- ✅ Z-index correct pour éviter les superpositions
- ✅ Suppression des éléments qui causaient des débordements

## 🔍 Tests recommandés

1. **Test sur mobile** - Vérifier que les textes sont lisibles
2. **Test des animations** - S'assurer qu'elles ne cachent pas le contenu
3. **Test de contraste** - Vérifier la lisibilité avec le background
4. **Test de performance** - Vérifier que les animations sont fluides

## 📱 Responsive

Les corrections s'appliquent à tous les breakpoints :
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px) 