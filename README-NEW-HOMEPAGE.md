# Shine&Go - Nouvelle Page d'Accueil Moderne

## 🎯 Objectif
Refactorisation complète de la page d'accueil pour créer une expérience moderne, fluide et conversion-focused, inspirée du design de lemlist.

## 🎨 Design System
- **Background**: Blanc pur (#FFFFFF)
- **Accent/CTA**: Bleu #2563EB (`blue-600`) + hover #3B82F6 (`blue-500`)
- **Cartes légères**: #F5F9FF (`sky-50`) avec `rounded-3xl` + `shadow-sm`
- **Police**: Inter via `next/font/google`, poids 400/600/800
- **Espacement**: `py-20 md:py-24` (rythme vertical)
- **Header**: Sticky avec backdrop-blur et border
- **Animations**: Framer Motion fade-up avec `whileInView` et `staggerChildren:0.1`

## 📁 Structure des Fichiers

### Composants Principaux
```
src/app/components/
├── Header.tsx              # Header sticky avec navigation
├── Hero.tsx                # Section héro avec CTA principal
├── SocialProof.tsx         # Statistiques et avis Google
├── BenefitsSection.tsx     # 3 avantages clés du service
├── ProcessSection.tsx      # Étapes du processus (3 étapes)
├── PricingTable.tsx        # Tableau des tarifs (3 packs)
├── BeforeAfter.tsx         # Slider avant/après
├── Testimonials.tsx        # Carousel de témoignages
├── LocalSEO.tsx            # Zones d'intervention
├── FinalCTA.tsx            # CTA final
├── FAQ.tsx                 # Accordéon FAQ
└── Footer.tsx              # Footer moderne
```

### Données
```
src/lib/
└── packs.ts                # Données des packs de services
```

### Pages
```
src/app/
├── layout.tsx              # Layout avec Inter font
├── page.tsx                # Page d'accueil principale
└── globals.css             # Styles globaux
```

## 🚀 Fonctionnalités

### Animations Framer Motion
- Fade-up animations sur scroll
- Stagger animations pour les listes
- Hover effects sur les boutons
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Grid layouts adaptatifs
- Typography fluide

### SEO Optimisé
- Métadonnées complètes
- Schema.org LocalBusiness JSON-LD
- Mots-clés français intégrés
- Structure sémantique

### Performance
- Images optimisées avec Next.js Image
- Lazy loading des composants
- Font optimization avec Inter
- Minimal bundle size

## 🎯 Sections de la Page

1. **Hero** - Titre principal + CTA "Réserver maintenant"
2. **SocialProof** - Google ★4,9/5 + compteur véhicules
3. **Benefits** - Service mobile, Efficacité, Finition detailing
4. **Process** - Réservez → Je me déplace → Admirez
5. **PricingTable** - 3 packs (39€, 69€, 129€)
6. **BeforeAfter** - Slider transformations
7. **Testimonials** - Carousel avis clients
8. **LocalSEO** - Villes desservies
9. **FinalCTA** - Bannière finale
10. **FAQ** - Accordéon questions

## 🔧 Installation et Utilisation

1. **Dépendances requises** (déjà installées) :
   - `framer-motion` pour les animations
   - `lucide-react` pour les icônes
   - `next/font/google` pour Inter

2. **Structure des données** :
   - Les packs sont définis dans `src/lib/packs.ts`
   - Les villes sont listées dans le même fichier

3. **Personnalisation** :
   - Couleurs dans `globals.css`
   - Animations dans chaque composant
   - Contenu dans les composants respectifs

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🎨 Couleurs Utilisées

```css
--blue-600: #2563EB (accent principal)
--blue-500: #3B82F6 (hover)
--sky-50: #F5F9FF (background cards)
--gray-900: #111827 (text)
--gray-600: #4B5563 (text secondary)
--white: #FFFFFF (background)
```

## 🚀 Déploiement

La page est prête pour la production avec :
- Optimisations SEO complètes
- Performance optimisée
- Accessibilité respectée
- Animations fluides
- Design moderne et professionnel 