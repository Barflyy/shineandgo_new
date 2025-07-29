# Sections Modulaires Shine&Go

Ce dossier contient des composants de sections modulaires qui peuvent être réutilisés sur différentes pages du site.

## Sections Disponibles

### 1. HeroSection
Section d'en-tête personnalisable avec titre, sous-titre et boutons CTA.

```tsx
import { HeroSection } from '@/shared/sections';

<HeroSection 
  title="Titre personnalisé"
  subtitle="Sous-titre personnalisé"
  primaryCtaText="Devis gratuit"
  primaryCtaLink="https://tally.so/r/w5POJQ"
  secondaryCtaText="WhatsApp"
  secondaryCtaLink="https://wa.me/32472303701"
/>
```

### 2. ServiceAreasSection
Section des zones desservies avec villes et codes postaux.

```tsx
import { ServiceAreasSection } from '@/shared/sections';

<ServiceAreasSection 
  title="Zones desservies"
  subtitle="Service mobile à domicile dans un rayon de 25 km"
/>
```

### 3. Wrappers pour Composants Existants

#### ServicesSectionWrapper
```tsx
import { ServicesSectionWrapper } from '@/shared/sections';

<ServicesSectionWrapper />
```

#### TestimonialsSectionWrapper
```tsx
import { TestimonialsSectionWrapper } from '@/shared/sections';

<TestimonialsSectionWrapper />
```

#### SocialProofSectionWrapper
```tsx
import { SocialProofSectionWrapper } from '@/shared/sections';

<SocialProofSectionWrapper />
```

#### BeforeAfterSectionWrapper
```tsx
import { BeforeAfterSectionWrapper } from '@/shared/sections';

<BeforeAfterSectionWrapper />
```

#### HowItWorksSectionWrapper
```tsx
import { HowItWorksSectionWrapper } from '@/shared/sections';

<HowItWorksSectionWrapper />
```

#### FAQSectionWrapper
```tsx
import { FAQSectionWrapper } from '@/shared/sections';

<FAQSectionWrapper />
```

## Utilisation sur une Page

```tsx
import { 
  HeroSection,
  ServicesSectionWrapper,
  ServiceAreasSection,
  FAQSectionWrapper 
} from '@/shared/sections';

export default function MaPage() {
  return (
    <div>
      <HeroSection 
        title="Titre de ma page"
        subtitle="Description de ma page"
      />
      
      <ServicesSectionWrapper />
      
      <ServiceAreasSection />
      
      <FAQSectionWrapper />
    </div>
  );
}
```

## Avantages

1. **Réutilisabilité** : Les sections peuvent être utilisées sur différentes pages
2. **Cohérence** : Même mise en page et style sur tout le site
3. **Maintenabilité** : Modifications centralisées dans un seul fichier
4. **Personnalisation** : Props pour adapter le contenu selon les besoins
5. **Performance** : Code optimisé et modulaire

## Structure des Fichiers

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
└── README.md                  # Documentation
``` 