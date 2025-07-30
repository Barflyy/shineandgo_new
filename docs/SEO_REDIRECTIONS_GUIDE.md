# Guide SEO : Redirections www vers non-www et URLs Canoniques

## 🎯 Objectif
Forcer toutes les URLs `www.shineandgo.be` vers `shineandgo.be` (sans www) pour éviter la duplication de contenu et améliorer le SEO.

## 📁 Fichiers modifiés

### 1. `next.config.js`
**Redirections 301 automatiques :**
```javascript
async redirects() {
  return [
    // Redirection www vers non-www (version canonique)
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.shineandgo.be' }],
      destination: 'https://shineandgo.be/:path*',
      permanent: true, // 301
    },
    // Redirection HTTP vers HTTPS
    {
      source: '/:path*',
      has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
      destination: 'https://shineandgo.be/:path*',
      permanent: true, // 301
    },
  ];
}
```

### 2. `src/app/shared/utils/canonical.ts`
**Fonction utilitaire pour URLs canoniques :**
```typescript
export function generateCanonicalUrl(path: string = '/'): string {
  const cleanPath = path.replace(/\/+/g, '/');
  return `https://shineandgo.be${cleanPath}`;
}
```

### 3. `src/app/layout.tsx`
**URL canonique globale :**
```typescript
import { generateCanonicalUrl } from "./shared/utils/canonical";

export const metadata: Metadata = {
  // ...
  alternates: {
    canonical: generateCanonicalUrl('/'),
  },
};
```

### 4. `src/app/api/sitemap/route.ts`
**Sitemap avec URLs sans www :**
```typescript
const baseUrl = 'https://shineandgo.be'
```

## 🧪 Comment tester les redirections

### Test 1 : Redirection www vers non-www
```bash
# Test avec curl
curl -I https://www.shineandgo.be
# Doit retourner : HTTP/1.1 301 Moved Permanently
# Location: https://shineandgo.be/

curl -I https://www.shineandgo.be/nettoyage-interieur-voiture
# Doit retourner : HTTP/1.1 301 Moved Permanently
# Location: https://shineandgo.be/nettoyage-interieur-voiture
```

### Test 2 : URLs canoniques
```bash
# Vérifier les balises canonical
curl https://shineandgo.be | grep -i canonical
# Doit retourner : <link rel="canonical" href="https://shineandgo.be/" />

curl https://shineandgo.be/nettoyage-interieur-voiture | grep -i canonical
# Doit retourner : <link rel="canonical" href="https://shineandgo.be/nettoyage-interieur-voiture" />
```

### Test 3 : Sitemap
```bash
# Vérifier le sitemap
curl https://shineandgo.be/sitemap.xml
# Doit contenir uniquement des URLs https://shineandgo.be/ (sans www)
```

## 🔍 Outils de vérification

### 1. Google Search Console
- Vérifier que les redirections 301 sont détectées
- S'assurer qu'aucune erreur de duplication de contenu

### 2. Outils en ligne
- [Redirect Checker](https://redirect-checker.org/)
- [HTTP Status Checker](https://httpstatus.io/)

### 3. Extension navigateur
- **Redirect Path** (Chrome/Firefox)
- **SEO Meta in 1 Click** (Chrome)

## ⚠️ Points d'attention

### Compatibilité Vercel
✅ Les redirections Next.js sont automatiquement gérées par Vercel
✅ Les headers sont optimisés pour la performance
✅ Le cache est configuré pour les redirections

### Compatibilité SSR
✅ Les redirections fonctionnent côté serveur
✅ Les URLs canoniques sont générées côté serveur
✅ Pas d'impact sur le JavaScript côté client

## 🚀 Déploiement

1. **Commit et push :**
```bash
git add .
git commit -m "🔧 SEO: Redirections www vers non-www et URLs canoniques"
git push
```

2. **Vérification Vercel :**
- Les redirections sont actives immédiatement
- Pas de configuration supplémentaire nécessaire

3. **Monitoring :**
- Surveiller les erreurs 404 dans Google Search Console
- Vérifier que les anciennes URLs www sont bien redirigées

## 📊 Métriques à surveiller

- **Redirections 301** : Toutes les URLs www doivent rediriger
- **URLs canoniques** : Toutes les pages doivent avoir une balise canonical
- **Sitemap** : Uniquement des URLs sans www
- **Performance** : Pas d'impact sur les Core Web Vitals 