# Guide d'implémentation Google My Business pour Shine&Go

## 🎯 Objectif
Ce guide vous explique comment intégrer votre fiche Google My Business à votre site web pour améliorer votre SEO et votre visibilité locale.

## 📋 Étapes de configuration

### 1. Configuration de Google My Business

#### A. Créer/Configurer votre fiche Google My Business
1. Allez sur [Google My Business](https://business.google.com/)
2. Connectez-vous avec votre compte Google
3. Créez une nouvelle fiche ou récupérez votre fiche existante
4. Remplissez toutes les informations :
   - **Nom de l'entreprise** : Shine&Go Premium
   - **Adresse** : Rue Moreau, 20, 4650 Herve, Belgique
   - **Téléphone** : +32 472 30 37 01
   - **Site web** : https://www.shineandgo.be
   - **Catégorie** : Service de nettoyage automobile
   - **Horaires** : Lun-Dim 8h-20h
   - **Services** : Car wash, nettoyage intérieur/extérieur, service à domicile

#### B. Vérification de propriété
1. Choisissez la méthode de vérification par courrier postal
2. Recevez le code de vérification par la poste
3. Entrez le code dans Google My Business
4. Votre fiche sera maintenant "Vérifiée"

### 2. Configuration Google Search Console

#### A. Ajouter votre site
1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété : `https://www.shineandgo.be`
3. Choisissez la méthode de vérification par balise HTML

#### B. Récupérer le code de vérification
1. Copiez le code de vérification fourni par Google
2. Remplacez `votre-code-de-verification-google` dans `src/app/layout.tsx`
3. Décommentez les lignes de vérification :

```typescript
verification: {
  google: 'votre-vrai-code-de-verification',
},
```

### 3. Configuration des données structurées

#### A. Mettre à jour la configuration
Éditez le fichier `src/app/config/google-my-business.ts` :

```typescript
export const googleMyBusinessConfig = {
  businessId: "VOTRE-VRAI-ID-ENTREPRISE", // Remplacez par votre vrai ID
  // ... autres configurations
  socialLinks: {
    googleMyBusiness: "VOTRE-VRAI-LIEN-GMB" // Remplacez par votre vrai lien GMB
  }
};
```

#### B. Vérifier les données structurées
1. Utilisez l'outil de test de données structurées de Google
2. Testez votre URL : https://www.shineandgo.be
3. Vérifiez que toutes les informations sont correctes

### 4. Optimisation SEO locale

#### A. Mots-clés locaux
Ajoutez ces mots-clés dans vos métadonnées :
- "car wash Herve"
- "nettoyage auto Verviers"
- "lavage voiture Dison"
- "service nettoyage automobile région Liège"

#### B. Citations locales
Créez des citations cohérentes sur :
- PagesJaunes.be
- 118000.be
- Yelp
- Facebook Business
- LinkedIn Company

### 5. Intégration du widget

Le widget Google My Business est maintenant intégré dans votre site. Il affiche :
- ✅ Nom de l'entreprise
- ⭐ Note et nombre d'avis
- 📍 Adresse
- 📞 Téléphone
- 🕒 Horaires d'ouverture
- 🗺️ Lien vers Google Maps
- 💬 Lien WhatsApp

## 🔧 Personnalisation avancée

### A. Couleurs du widget
Modifiez les classes CSS dans `GoogleMyBusinessWidget.tsx` :
```typescript
className="bg-blue-600" // Couleur principale
className="bg-green-600" // Couleur WhatsApp
```

### B. Informations dynamiques
Pour récupérer les vraies données Google My Business :
1. Utilisez l'API Google My Business
2. Remplacez les données statiques par des appels API
3. Mettez en place un cache pour les performances

## 📊 Suivi et analytics

### A. Google Analytics
1. Ajoutez votre ID Google Analytics dans `src/app/analytics.tsx`
2. Suivez les conversions depuis Google My Business

### B. Google Search Console
1. Surveillez les requêtes de recherche
2. Analysez les clics depuis les résultats de recherche
3. Optimisez en fonction des données

## 🚀 Bonnes pratiques

### A. Cohérence des informations
- ✅ Même nom partout
- ✅ Même adresse partout
- ✅ Même téléphone partout
- ✅ Mêmes horaires partout

### B. Contenu régulier
- Publiez des posts sur Google My Business
- Répondez aux avis clients
- Ajoutez des photos de vos réalisations
- Mettez à jour les informations

### C. Optimisation continue
- Surveillez vos performances
- Ajustez les mots-clés
- Améliorez les avis clients
- Optimisez les images

## 🔍 Vérification

### Checklist de vérification :
- [ ] Fiche Google My Business créée et vérifiée
- [ ] Code de vérification Google Search Console ajouté
- [ ] Données structurées correctes
- [ ] Widget intégré sur le site
- [ ] Informations cohérentes partout
- [ ] Citations locales créées
- [ ] Analytics configuré

## 📞 Support

Pour toute question ou problème :
- Consultez la documentation Google My Business
- Utilisez les forums Google
- Contactez le support Google si nécessaire

---

**Note importante** : Ce guide est spécifique à Shine&Go. Adaptez les informations selon vos besoins spécifiques. 