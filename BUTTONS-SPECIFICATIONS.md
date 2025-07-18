# Spécifications des Boutons - Design System

## 🎯 Types de boutons

### 1. CTA Primaire
**Exemple :** "Réserver maintenant", "Commencer maintenant"

```css
inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent
```

**Caractéristiques :**
- ✅ Fond bleu (`bg-accent`)
- ✅ Texte blanc
- ✅ Ombre moyenne (`shadow-md`)
- ✅ Hover en bleu plus clair (`hover:bg-accent-hover`)
- ✅ Focus ring bleue pour l'accessibilité

### 2. CTA Secondaire (Outline)
**Exemple :** "Voir les tarifs", "Choisir ce pack"

```css
inline-flex items-center gap-2 rounded-full border border-ui-border bg-white px-6 py-3 text-sm font-semibold text-text-primary shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent
```

**Caractéristiques :**
- ✅ Fond blanc avec bordure
- ✅ Texte principal (`text-text-primary`)
- ✅ Ombre légère (`shadow-sm`)
- ✅ Hover en gris très clair (`hover:bg-slate-50`)
- ✅ Focus ring bleue pour l'accessibilité

### 3. Lien Simple
**Exemple :** "Voir tous les avis Google", "Connexion"

```css
text-sm font-medium text-text-primary hover:text-accent transition-colors
```

**Caractéristiques :**
- ✅ Texte principal sans fond
- ✅ Hover en bleu (`hover:text-accent`)
- ✅ Transition douce des couleurs

## 🎨 Design System

### Rayon
- **Tous les boutons** : `rounded-full` (pill)

### Ombres
- **CTA primaire** : `shadow-md` (relief moyen)
- **CTA secondaire** : `shadow-sm` (relief léger)

### Accessibilité
- **Focus ring** : `focus-visible:ring-2 focus-visible:ring-accent`
- **Outline** : `focus-visible:outline`
- **Navigation clavier** : Support complet

### Responsive
- **Gap** : `gap-2` sur desktop, `gap-1.5` sur mobile (`sm:gap-1.5`)
- **Padding** : `px-6 py-3` (constant)
- **Taille de texte** : `text-sm` (constant)

## 📱 Responsive Design

### Desktop (≥ 640px)
```css
gap-2 /* Espacement normal entre éléments */
```

### Mobile (< 640px)
```css
gap-1.5 /* Espacement réduit pour mobile serré */
```

## 🔧 Classes utilitaires

### Classes CSS personnalisées
```css
.btn-responsive {
  @apply inline-flex items-center gap-2 sm:gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent;
}

.btn-primary {
  @apply bg-accent text-white shadow-md hover:bg-accent-hover;
}

.btn-secondary {
  @apply border border-ui-border bg-white text-text-primary shadow-sm hover:bg-slate-50;
}

.btn-link {
  @apply text-sm font-medium text-text-primary hover:text-accent transition-colors;
}
```

### Utilisation
```jsx
// Bouton primaire
<button className="btn-responsive btn-primary">
  Réserver maintenant
</button>

// Bouton secondaire
<button className="btn-responsive btn-secondary">
  Voir les tarifs
</button>

// Lien simple
<a className="btn-link">
  Voir tous les avis
</a>
```

## 📋 Composants mis à jour

### ✅ Composants corrigés
- `src/app/components/Hero.tsx` - Boutons CTA primaire et secondaire
- `src/app/components/Header.tsx` - Bouton CTA primaire (desktop et mobile)
- `src/app/components/BenefitsSection.tsx` - Bouton CTA primaire
- `src/app/components/ProcessSection.tsx` - Bouton CTA primaire
- `src/app/components/PricingTable.tsx` - Boutons CTA primaire et secondaire
- `src/app/components/Testimonials.tsx` - Lien simple
- `src/app/components/TransformationsSection.tsx` - Bouton CTA primaire
- `src/app/components/BookingButton.tsx` - Bouton CTA primaire

## 🎯 Avantages

### Design
- ✅ Cohérence visuelle sur tout le site
- ✅ Rayon pill moderne et accessible
- ✅ Ombres appropriées pour la hiérarchie

### Accessibilité
- ✅ Focus ring visible pour la navigation clavier
- ✅ Contraste suffisant
- ✅ Taille de touche minimale (44px)

### Responsive
- ✅ Adaptation automatique sur mobile
- ✅ Espacement optimisé selon l'écran
- ✅ Performance maintenue

### Maintenance
- ✅ Classes réutilisables
- ✅ Design system centralisé
- ✅ Facilité de modification globale 