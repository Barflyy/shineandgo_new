# ✅ Checklist de Vérification Avant Déploiement

## 🎯 ÉTAPE 1 : Build Test (5 min)

### Dans votre terminal :

```bash
cd /Users/nathan/shineandgo_new-main

# Installer les dépendances (si pas déjà fait)
npm install

# Lancer le build
npm run build
```

### ✅ Résultat attendu :
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    ...
├ ○ /car-wash-battice                    ...
├ ○ /lavage-voiture-liege                ...
├ ○ /nettoyage-voiture-herve             ...
└ ○ /nettoyage-voiture-verviers          ...
```

### ❌ Si erreurs TypeScript :
- Lisez le message d'erreur
- Corrigez le fichier indiqué
- Relancez `npm run build`

---

## 🎯 ÉTAPE 2 : Test Local (10 min)

### Lancer le serveur de dev :

```bash
npm run dev
```

### ✅ Vérifier ces pages :

1. **Page d'accueil**
   - URL : http://localhost:3000
   - ✅ Bouton sticky téléphone en bas à droite visible ?
   - ✅ Organization Schema présent ? (Ctrl+U pour voir source)

2. **Herve**
   - URL : http://localhost:3000/nettoyage-voiture-herve
   - ✅ Titre : "Nettoyage Voiture à Domicile Herve | En 90min dès 49€"
   - ✅ H1 : "Nettoyage voiture à domicile Herve – En 90min dès 49€"
   - ✅ FAQ visible ?
   - ✅ Bouton WhatsApp cliquable ?

3. **Verviers**
   - URL : http://localhost:3000/nettoyage-voiture-verviers
   - ✅ Titre : "Nettoyage Voiture à Domicile Verviers | En 90min dès 49€"
   - ✅ Contenu adapté à Verviers ?

4. **Battice** (NOUVELLE)
   - URL : http://localhost:3000/car-wash-battice
   - ✅ Page charge sans erreur ?
   - ✅ Titre : "Car Wash Battice | Lavage Voiture Mobile..."
   - ✅ FAQ adaptée à Battice ?

5. **Liège** (NOUVELLE)
   - URL : http://localhost:3000/lavage-voiture-liege
   - ✅ Page charge sans erreur ?
   - ✅ Titre : "Lavage Voiture à Domicile Liège..."
   - ✅ Mention de Grivegnée, Angleur, Bressoux ?

6. **Sitemap**
   - URL : http://localhost:3000/sitemap.xml
   - ✅ XML valide ?
   - ✅ Toutes les pages listées ?

---

## 🎯 ÉTAPE 3 : Vérifier les Métadonnées (5 min)

### Pour chaque page importante :

1. Ouvrir la page dans le navigateur
2. Faire **Ctrl+U** (ou Cmd+U sur Mac) pour voir le source
3. Vérifier que vous voyez :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Nettoyage Voiture à Domicile Herve | En 90min dès 49€ - Shine&Go</title>
  <meta name="description" content="Nettoyage voiture à domicile à Herve..."/>
  <link rel="canonical" href="https://shineandgo.be/nettoyage-voiture-herve"/>
  
  <!-- OpenGraph -->
  <meta property="og:title" content="..."/>
  <meta property="og:url" content="https://shineandgo.be/..."/>
  
  <!-- Schema.org -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Shine&Go - Nettoyage Voiture Herve",
      ...
    }
  </script>
</head>
```

### ✅ Points à vérifier :
- [ ] Titre unique sur chaque page
- [ ] Description 150-160 caractères
- [ ] URL canonique correcte : `https://shineandgo.be/...`
- [ ] Schema.org présent avec coordonnées GPS
- [ ] OpenGraph complet

---

## 🎯 ÉTAPE 4 : Test du Bouton Téléphone (2 min)

### Sur chaque page :

1. Vérifier que le bouton sticky est visible en bas à droite
2. Cliquer dessus
3. ✅ Doit ouvrir l'application téléphone avec : `+32472303701`

### Sur mobile (si possible) :

1. Ouvrir une page sur votre smartphone
2. Cliquer sur le bouton sticky
3. ✅ Doit composer directement le numéro

---

## 🚀 ÉTAPE 5 : Déploiement (2 min)

### Si tout est OK ci-dessus :

```bash
# Vérifier les changements
git status

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "feat: SEO optimization - Server Components, nouvelles pages ville, Schema.org"

# Push (Vercel déploie automatiquement)
git push
```

### ✅ Attendu :
- Vercel détecte le push
- Build automatique (2-3 min)
- Déploiement sur https://shineandgo.be

---

## 📊 ÉTAPE 6 : Vérification Post-Déploiement (10 min)

### A. Vérifier que les pages sont en ligne :

1. https://shineandgo.be/nettoyage-voiture-herve
2. https://shineandgo.be/nettoyage-voiture-verviers
3. https://shineandgo.be/car-wash-battice
4. https://shineandgo.be/lavage-voiture-liege
5. https://shineandgo.be/sitemap.xml

### B. Tester sur mobile :

1. Ouvrir une page sur smartphone
2. ✅ Responsive ?
3. ✅ Bouton téléphone cliquable ?
4. ✅ Images chargent bien ?

---

## 🎯 ÉTAPE 7 : Google Search Console (20 min)

### À faire IMMÉDIATEMENT après déploiement :

### A. Soumettre le sitemap

1. Aller sur https://search.google.com/search-console
2. Sélectionner votre propriété `shineandgo.be`
3. Menu gauche → **Sitemaps**
4. Ajouter : `https://shineandgo.be/sitemap.xml`
5. Cliquer **"Envoyer"**

✅ **Attendu** : "Sitemap envoyé" (statut vert dans quelques heures)

### B. Indexer les nouvelles pages

Pour chaque page, faire :

1. Menu gauche → **Inspection d'URL**
2. Coller l'URL complète
3. Attendre le résultat
4. Cliquer **"Demander l'indexation"**

**Pages à indexer en priorité** :

1. ✅ `https://shineandgo.be/car-wash-battice`
2. ✅ `https://shineandgo.be/lavage-voiture-liege`
3. ✅ `https://shineandgo.be/nettoyage-voiture-herve` (réindexation)
4. ✅ `https://shineandgo.be/nettoyage-voiture-verviers` (réindexation)

**Délai** : Google indexera dans 1-7 jours

---

## 📈 ÉTAPE 8 : Suivi des Résultats

### Jour 1 (Aujourd'hui)
- [x] Build réussi
- [x] Pages testées localement
- [x] Déployé sur Vercel
- [x] Sitemap soumis à GSC
- [x] Pages indexées dans GSC

### Jour 7 (Semaine 1)
- [ ] Vérifier GSC → Nouvelles pages apparaissent ?
- [ ] Noter premières impressions
- [ ] Vérifier position Battice (devrait être top 3-5)
- [ ] Vérifier impressions Herve (devrait commencer à augmenter)

### Jour 14 (Semaine 2)
- [ ] Analyser clics/impressions
- [ ] Comparer avec avant (15 clics → objectif 25-35)
- [ ] Identifier pages qui performent

### Jour 30 (Mois 1)
- [ ] Vérifier objectif 50-70 clics/semaine atteint ?
- [ ] Position moyenne améliorée ?
- [ ] Décider si créer pages optionnelles (Prix, Soumagne)

---

## 🎯 Métriques à Surveiller (GSC)

| Métrique | Aujourd'hui | Objectif J+7 | Objectif J+30 |
|----------|-------------|--------------|---------------|
| Clics/semaine | 15 | 25-35 | 50-70 |
| Position moyenne | 17.9 | 12-15 | 8-10 |
| Impressions | 523 | 700+ | 1000+ |
| CTR | 2.9% | 4-5% | 6-8% |

### Pages spécifiques à surveiller :

**car-wash-battice** :
- Position actuelle : 4.42 (page 1 !)
- Impressions : 19/semaine
- Objectif J+7 : **Position 2-3, 30-40 impressions, 3-5 clics**

**lavage-voiture-liege** :
- Position actuelle : 23 (page 3)
- Objectif J+30 : **Position 10-15, 100+ impressions, 10-15 clics**

**nettoyage-voiture-herve** :
- Position actuelle : bonne (page 2)
- Impressions : 58/semaine, 0 clic actuellement ❌
- Objectif J+7 : **5-10 clics/semaine** ✅

---

## ⚠️ Si Problèmes

### Erreur de build :
1. Lire le message d'erreur
2. Corriger le fichier TypeScript indiqué
3. Relancer `npm run build`

### Page ne charge pas :
1. Vérifier les logs Vercel
2. Vérifier dans le code qu'il n'y a pas d'import manquant
3. Tester en local avec `npm run dev`

### Métadonnées manquantes :
1. Vérifier que le fichier `page.tsx` exporte bien `metadata`
2. Vérifier qu'il n'y a pas `'use client'` au début du fichier
3. Rebuild

---

## 🎉 Checklist Finale

- [ ] Build production sans erreurs
- [ ] Toutes les pages testées en local
- [ ] Bouton sticky téléphone fonctionne
- [ ] Métadonnées visibles dans le source (Ctrl+U)
- [ ] Sitemap.xml accessible
- [ ] Déployé sur Vercel
- [ ] Sitemap soumis à GSC
- [ ] 4 pages indexées dans GSC
- [ ] Rendez-vous dans 7 jours pour analyser les résultats ! 📊

---

## 💡 Pages Optionnelles (À faire plus tard)

Si vous avez le temps (30 min chacune) :

### Priorité 1 : Prix Nettoyage Voiture
- Position : 10.2
- Recherche commerciale = forte intention
- ROI : Élevé

### Priorité 2 : Car Wash Soumagne
- Position : 7.5
- Volume faible, attendre résultats Battice

### Priorité 3 : Variantes Verviers/Herve
- Créer seulement si trafic "car wash" dans GSC

---

## 📞 Support

En cas de problème :
1. Vérifier les logs Vercel
2. Tester localement `npm run dev`
3. Lire les erreurs TypeScript
4. Vérifier GSC après 48h

**Le projet est prêt ! Bon déploiement ! 🚀**

