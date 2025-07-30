# 🔧 Guide de Test : Redirections SEO et URLs Canoniques

## 🎯 Objectif
Valider que toutes les redirections 301 fonctionnent correctement et que les URLs canoniques sont bien générées.

## 🧪 Tests de Redirections

### Test 1 : Redirection www vers non-www
```bash
# Test page d'accueil
curl -I https://www.shineandgo.be
# ✅ Doit retourner : HTTP/1.1 301 Moved Permanently
# ✅ Location: https://shineandgo.be/

# Test page service
curl -I https://www.shineandgo.be/nettoyage-interieur-voiture
# ✅ Doit retourner : HTTP/1.1 301 Moved Permanently
# ✅ Location: https://shineandgo.be/nettoyage-interieur-voiture
```

### Test 2 : Redirection /services vers page d'accueil
```bash
# Test /services
curl -I https://shineandgo.be/services
# ✅ Doit retourner : HTTP/1.1 301 Moved Permanently
# ✅ Location: https://shineandgo.be/

# Test /services/ (avec slash)
curl -I https://shineandgo.be/services/
# ✅ Doit retourner : HTTP/1.1 301 Moved Permanently
# ✅ Location: https://shineandgo.be/
```

### Test 3 : Redirection HTTP vers HTTPS
```bash
# Test HTTP
curl -I http://shineandgo.be
# ✅ Doit retourner : HTTP/1.1 301 Moved Permanently
# ✅ Location: https://shineandgo.be/
```

## 🔍 Tests des URLs Canoniques

### Test 1 : Balises canonical
```bash
# Page d'accueil
curl https://shineandgo.be | grep -i canonical
# ✅ Doit retourner : <link rel="canonical" href="https://shineandgo.be/" />

# Page service
curl https://shineandgo.be/nettoyage-interieur-voiture | grep -i canonical
# ✅ Doit retourner : <link rel="canonical" href="https://shineandgo.be/nettoyage-interieur-voiture" />
```

### Test 2 : Meta tags Open Graph
```bash
# Vérifier og:url
curl https://shineandgo.be | grep -i "og:url"
# ✅ Doit retourner : <meta property="og:url" content="https://shineandgo.be/" />
```

## 🗺️ Test du Sitemap

### Test 1 : Contenu du sitemap
```bash
# Vérifier le sitemap
curl https://shineandgo.be/sitemap.xml
# ✅ Doit contenir uniquement des URLs https://shineandgo.be/ (sans www)
# ✅ Ne doit PAS contenir /services
# ✅ Doit contenir les pages existantes uniquement
```

### Test 2 : Validation XML
```bash
# Vérifier que le XML est valide
curl https://shineandgo.be/sitemap.xml | xmllint --format -
# ✅ Doit retourner un XML valide sans erreurs
```

## 🔧 Tests dans Google Search Console

### Étape 1 : Vérifier les redirections
1. Aller dans **Google Search Console**
2. Sélectionner votre propriété `shineandgo.be`
3. Aller dans **Couverture** > **Erreurs**
4. Vérifier qu'il n'y a plus d'erreurs 404 pour `/services`

### Étape 2 : Soumettre le sitemap
1. Aller dans **Sitemaps**
2. Ajouter `https://shineandgo.be/sitemap.xml`
3. Vérifier que toutes les URLs sont indexées

### Étape 3 : Vérifier les redirections
1. Aller dans **URL Inspection**
2. Tester `https://www.shineandgo.be`
3. Vérifier que la redirection 301 est détectée

## 🚀 Tests de Performance

### Test 1 : Temps de réponse
```bash
# Test de performance des redirections
time curl -I https://www.shineandgo.be
# ✅ Doit être rapide (< 200ms)
```

### Test 2 : Compatibilité Vercel
```bash
# Vérifier les headers Vercel
curl -I https://shineandgo.be
# ✅ Doit contenir : x-vercel-cache
# ✅ Doit contenir : x-vercel-id
```

## ⚠️ Points d'attention

### Compatibilité SSR
- ✅ Les redirections fonctionnent côté serveur
- ✅ Les URLs canoniques sont générées côté serveur
- ✅ Pas d'impact sur le JavaScript côté client

### Compatibilité Vercel
- ✅ Les redirections Next.js sont automatiquement gérées
- ✅ Le cache est configuré pour les redirections
- ✅ Les headers sont optimisés

## 📊 Métriques à surveiller

### Google Search Console
- **Redirections 301** : Toutes les URLs www doivent rediriger
- **Erreurs 404** : Plus d'erreurs pour `/services`
- **Indexation** : Toutes les pages canoniques indexées

### Analytics
- **Trafic** : Pas de perte de trafic après redirections
- **Conversions** : Maintien des taux de conversion

## 🎯 Validation finale

### Checklist de validation :
- [ ] Toutes les URLs www redirigent vers non-www
- [ ] `/services` redirige vers `/`
- [ ] Toutes les pages ont une balise canonical
- [ ] Le sitemap ne contient que des URLs valides
- [ ] Pas d'erreurs 404 dans Google Search Console
- [ ] Les redirections sont rapides (< 200ms)
- [ ] Compatible avec Vercel et SSR

### Commandes de test rapides :
```bash
# Test complet en une commande
curl -I https://www.shineandgo.be && \
curl -I https://shineandgo.be/services && \
curl https://shineandgo.be/sitemap.xml | head -20
```

## 🔄 Monitoring continu

### Surveiller dans Google Search Console :
1. **Couverture** > **Erreurs** : Vérifier qu'il n'y a plus d'erreurs
2. **URL Inspection** : Tester régulièrement les redirections
3. **Sitemaps** : Vérifier que le sitemap est à jour

### Alertes à configurer :
- Erreurs 404 sur `/services`
- Redirections 301 qui ne fonctionnent pas
- URLs canoniques manquantes 