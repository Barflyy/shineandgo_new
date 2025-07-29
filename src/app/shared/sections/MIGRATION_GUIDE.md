# Guide de Migration vers les Sections Modulaires

Ce guide explique comment migrer du code inline vers les sections modulaires.

## Avant (Code Inline)

```tsx
// Page d'accueil avec code inline
export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION - Code inline */}
      <section className="snap-start min-h-svh w-full relative">
        <div className="relative min-h-screen flex items-center justify-center bg-white">
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Lavage voiture à domicile en Wallonie
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Service mobile professionnel...
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tally.so/r/w5POJQ" className="...">
                Devis gratuit
              </a>
              <a href="https://wa.me/32472303701" className="...">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION - Code inline */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-mobile">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ServicesSection />
        </div>
      </section>
      
      {/* 3. ZONES DESSERVIES - Code inline */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-mobile bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zones desservies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Service mobile à domicile...
            </p>
          </div>
          {/* ... plus de code inline ... */}
        </div>
      </section>
    </div>
  );
}
```

## Après (Sections Modulaires)

```tsx
// Page d'accueil avec sections modulaires
import {
  HeroSection,
  ServicesSectionWrapper,
  ServiceAreasSection,
  TestimonialsSectionWrapper,
  SocialProofSectionWrapper,
  BeforeAfterSectionWrapper,
  HowItWorksSectionWrapper,
  FAQSectionWrapper
} from '@/shared/sections';

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION - Modulaire */}
      <HeroSection />

      {/* 2. SERVICES SECTION - Modulaire */}
      <ServicesSectionWrapper />
      
      {/* 3. SERVICE AREAS SECTION - Modulaire */}
      <ServiceAreasSection />
      
      {/* 4. TESTIMONIALS SECTION - Modulaire */}
      <TestimonialsSectionWrapper />
      
      {/* 5. SOCIAL PROOF SECTION - Modulaire */}
      <SocialProofSectionWrapper />
      
      {/* 6. BEFORE/AFTER SECTION - Modulaire */}
      <BeforeAfterSectionWrapper />
      
      {/* 7. HOW IT WORKS SECTION - Modulaire */}
      <HowItWorksSectionWrapper />
      
      {/* 8. FAQ SECTION - Modulaire */}
      <FAQSectionWrapper />
    </div>
  );
}
```

## Avantages de la Migration

### 1. **Réutilisabilité**
- Les sections peuvent être utilisées sur différentes pages
- Pas besoin de dupliquer le code

### 2. **Cohérence**
- Même mise en page et style sur tout le site
- Modifications centralisées

### 3. **Maintenabilité**
- Code plus propre et organisé
- Modifications dans un seul fichier

### 4. **Personnalisation**
- Props pour adapter le contenu selon les besoins
- Flexibilité pour différentes pages

### 5. **Performance**
- Code optimisé et modulaire
- Chargement plus rapide

## Étapes de Migration

### Étape 1 : Identifier les Sections
1. Repérer les sections répétitives dans vos pages
2. Identifier les sections avec du code inline
3. Lister les sections à modulariser

### Étape 2 : Créer les Composants Modulaires
1. Extraire le code inline dans des composants séparés
2. Ajouter des props pour la personnalisation
3. Créer les wrappers pour les composants existants

### Étape 3 : Remplacer dans les Pages
1. Importer les sections modulaires
2. Remplacer le code inline par les composants
3. Tester la fonctionnalité

### Étape 4 : Optimiser
1. Personnaliser les props selon les besoins
2. Ajuster les styles si nécessaire
3. Vérifier la cohérence

## Exemples de Personnalisation

### HeroSection avec Props Personnalisées
```tsx
<HeroSection 
  title="Titre personnalisé pour cette page"
  subtitle="Description spécifique à cette page"
  primaryCtaText="Réserver maintenant"
  primaryCtaLink="https://calendly.com/..."
  secondaryCtaText="Demander un devis"
  secondaryCtaLink="https://tally.so/..."
/>
```

### ServiceAreasSection avec Titre Personnalisé
```tsx
<ServiceAreasSection 
  title="Zones desservies pour le nettoyage intérieur"
  subtitle="Service mobile de nettoyage intérieur à domicile"
/>
```

## Structure Recommandée

```
src/app/shared/sections/
├── index.ts                    # Export de toutes les sections
├── HeroSection.tsx            # Section d'en-tête modulaire
├── ServiceAreasSection.tsx    # Section zones desservies
├── ServicesSectionWrapper.tsx # Wrapper pour ServicesSection
├── TestimonialsSectionWrapper.tsx
├── SocialProofSectionWrapper.tsx
├── BeforeAfterSectionWrapper.tsx
├── HowItWorksSectionWrapper.tsx
├── FAQSectionWrapper.tsx
├── README.md                  # Documentation
└── MIGRATION_GUIDE.md        # Ce guide
```

## Bonnes Pratiques

1. **Nommage** : Utiliser des noms clairs et descriptifs
2. **Props** : Définir des props avec des valeurs par défaut
3. **Documentation** : Commenter le code et créer des guides
4. **Tests** : Tester chaque section individuellement
5. **Performance** : Optimiser les imports et le rendu

## Migration Progressive

Vous pouvez migrer progressivement :
1. Commencer par une page simple
2. Tester et valider
3. Migrer les autres pages une par une
4. Optimiser et ajuster selon les besoins 