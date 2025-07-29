# Shine&Go Premium - Landing Page Mobile Optimisée

Site web premium pour service de nettoyage automobile à Herve et dans la région. Optimisé mobile-first avec un score Lighthouse > 90.

## 🚀 Optimisations Mobile Réalisées

### ✅ 1. Design Responsive Mobile-First
- **Approche mobile-first** : CSS optimisé pour les écrans de 360px à 768px
- **Unités flexibles** : Utilisation de `clamp()`, `%`, `vw` au lieu de largeurs fixes
- **Flexbox/Grid** : Layout adaptatif avec Tailwind CSS
- **Breakpoints testés** : 360px, 414px, 768px, 1024px

### ✅ 2. Taille & Lisibilité
- **Police minimale 16px** : Tous les textes respectent la taille minimale recommandée
- **Boutons tactiles 48x48px** : Minimum pour une utilisation confortable
- **Pas de scroll horizontal** : Layout optimisé pour éviter les débordements
- **Espacement optimal** : Marges et paddings adaptés au mobile

### ✅ 3. Navigation Mobile
- **Menu hamburger optimisé** : Bouton 48x48px, animation fluide
- **Navigation à une main** : Tous les éléments accessibles facilement
- **Header sticky** : Navigation toujours accessible
- **Menu mobile épuré** : Design clair et intuitif

### ✅ 4. Performances & Vitesse
- **Images optimisées** : WebP/AVIF, lazy loading, responsive
- **Polices locales** : Geist avec `display: swap` et preload
- **Bundle optimisé** : Code splitting, compression, minification
- **Cache optimisé** : Headers de cache pour les ressources statiques

### ✅ 5. Comportement UX
- **Bouton WhatsApp flottant** : 56x56px, toujours visible
- **CTA principaux** : Boutons d'action en zone visible immédiatement
- **Pas de popups intrusifs** : UX fluide sans interruptions
- **Animations réduites** : Respect des préférences utilisateur

### ✅ 6. SEO Mobile
- **Meta viewport optimisé** : Configuration mobile-first
- **Données structurées** : Schema.org LocalBusiness complet
- **Sitemap optimisé** : URLs principales indexées
- **Robots.txt** : Configuration pour Googlebot-Mobile

### ✅ 7. Accessibilité & UX
- **Contraste amélioré** : Couleurs optimisées pour la lisibilité
- **Focus visible** : Indicateurs de focus pour la navigation clavier
- **Animations respectueuses** : Support `prefers-reduced-motion`
- **Écrans tactiles** : Optimisations pour les interactions tactiles

## 📱 Breakpoints Supportés

| Écran | Largeur | Optimisations |
|-------|---------|---------------|
| Mobile Small | 360px | Layout compact, boutons 48px |
| Mobile Medium | 414px | Navigation optimisée |
| Mobile Large | 768px | Grilles adaptatives |
| Tablet | 1024px | Layout hybride |

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 15.3.3
- **Styling** : Tailwind CSS 4
- **Polices** : Geist (optimisées)
- **Icons** : Lucide React
- **Animations** : Framer Motion
- **Optimisation** : Critters CSS

## 📊 Métriques de Performance

### Objectifs Atteints
- ✅ **First Contentful Paint** : < 1.5s
- ✅ **Largest Contentful Paint** : < 2.5s
- ✅ **Cumulative Layout Shift** : < 0.1
- ✅ **First Input Delay** : < 100ms
- ✅ **Score Lighthouse Mobile** : > 90

### Optimisations Techniques
- **Bundle Size** : 209 kB (First Load JS)
- **Images** : WebP/AVIF avec lazy loading
- **CSS** : Inline critical CSS avec Critters
- **Fonts** : Preload avec display swap
- **Cache** : Headers optimisés pour mobile

## 🚀 Installation & Développement

```bash
# Installation
npm install

# Développement
npm run dev

# Build de production
npm run build

# Test des performances
npm run test:mobile
```

## 📱 Test Mobile

Pour tester les performances mobile :

```bash
# Test Lighthouse automatique
npm run test:mobile

# Ou manuellement
npm run build
npm run start
# Puis ouvrir http://localhost:3000 dans Chrome DevTools (mode mobile)
```

## 🎯 Checklist Mobile Complète

### ✅ Design Responsive
- [x] Approche mobile-first dans le CSS
- [x] Unités flexibles (%, em, vw)
- [x] Flexbox/CSS Grid pour l'organisation
- [x] Breakpoints testés (360px, 414px, 768px, 1024px)

### ✅ Taille & Lisibilité
- [x] Police minimale 16px pour le texte principal
- [x] Boutons & liens 48x48px minimum
- [x] Pas de texte tronqué
- [x] Pas de scroll horizontal

### ✅ Navigation Mobile
- [x] Menu hamburger clair et épuré
- [x] Menu facile à ouvrir/fermer à une main
- [x] Header sticky sans cacher le contenu

### ✅ Performances & Vitesse
- [x] Images optimisées (WebP, compression, lazy loading)
- [x] Lazy loading sur les images hors viewport
- [x] Ressources inutiles supprimées
- [x] Polices locales limitées (1-2 familles)

### ✅ Comportement UX
- [x] Pas de popups intrusifs
- [x] Bouton WhatsApp flottant sur mobile
- [x] CTA principaux dans la zone visible

### ✅ SEO Mobile
- [x] Contenu mobile identique au desktop
- [x] Meta viewport optimisé
- [x] Compatible Google Mobile-Friendly Test

### ✅ Accessibilité & UX
- [x] Contraste suffisant (WCAG)
- [x] Focus clair sur les champs
- [x] Animations respectueuses

## 📞 Contact

- **WhatsApp** : +32 472 30 37 01
- **Téléphone** : +32 472 30 37 01
- **Email** : contact@shinego.be
- **Adresse** : Rue Moreau, 20, 4650 Herve

---

**Shine&Go Premium** - Excellence en nettoyage automobile 🚗✨
