# 🎯 Guide d'utilisation du dossier Hero Images

## 📁 Structure créée

```
public/hero-images/
├── README.md           # Documentation complète
├── config.json         # Configuration des images
├── IMG_1186.JPG        # Votre image actuelle
└── [vos-nouvelles-images] # À ajouter
```

## 🚀 Comment ajouter votre nouvelle image

### Option 1 : Utilisation du script automatique (recommandé)

1. **Installer les prérequis** (si pas déjà fait) :
   ```bash
   brew install imagemagick webp
   ```

2. **Optimiser votre image** :
   ```bash
   node scripts/optimize-hero-images.js public/hero-images/IMG_1186.JPG
   # ou
   node scripts/optimize-hero-images.js ~/Desktop/votre-nouvelle-photo.jpg
   ```

3. **Le script va créer automatiquement** :
   - `hero-main.jpg` (1200x800px)
   - `hero-desktop.webp` (1200x800px)
   - `hero-tablet.webp` (800x600px)
   - `hero-mobile.webp` (600x400px)

### Option 2 : Ajout manuel

1. **Ajoutez votre image** dans `public/hero-images/`
2. **Renommez-la** selon la convention :
   - `hero-main.jpg` (image principale)
   - `hero-before-after.jpg` (si avant/après)
   - `hero-mobile.jpg` (version mobile)

3. **Optimisez-la** avec un outil en ligne ou Photoshop

## 🎨 Spécifications recommandées

### Tailles d'images
- **Desktop** : 1200x800px (ratio 3:2)
- **Tablet** : 800x600px (ratio 4:3)
- **Mobile** : 600x400px (ratio 3:2)

### Formats
- **JPEG** : Qualité 80-85%
- **WebP** : Qualité 85-90% (recommandé)

### Poids maximum
- **500KB** par image pour de bonnes performances

## 📱 Utilisation dans le code

Le composant `Hero.tsx` a été mis à jour pour utiliser le nouveau dossier :

```jsx
// Image responsive avec fallback
<picture>
  <source
    srcSet="/hero-images/hero-desktop.webp"
    media="(min-width: 1024px)"
  />
  <source
    srcSet="/hero-images/hero-tablet.webp"
    media="(min-width: 768px)"
  />
  <Image
    src="/hero-images/hero-main.jpg"
    alt="Nettoyage voiture professionnel à Herve - Résultat showroom garanti"
    width={600}
    height={400}
    className="w-full h-auto"
    priority
  />
</picture>
```

## 🔧 Personnalisation

### Changer l'image principale
1. Remplacez `hero-main.jpg` par votre nouvelle image
2. Mettez à jour l'alt text si nécessaire
3. Testez sur différents appareils

### Ajouter des versions responsive
1. Créez les versions desktop/tablet/mobile
2. Utilisez le script d'optimisation
3. Les images WebP seront créées automatiquement

## 📋 Checklist avant mise en production

- [ ] Image optimisée (< 500KB)
- [ ] Alt text descriptif
- [ ] Test sur mobile
- [ ] Test sur tablette
- [ ] Test sur desktop
- [ ] Performance vérifiée
- [ ] Accessibilité validée

## 🆘 Dépannage

### Image trop lourde
```bash
# Réduire la qualité
node scripts/optimize-hero-images.js --quality 75 votre-image.jpg
```

### Image floue
- Vérifiez la résolution source (minimum 1200px de large)
- Utilisez une image de haute qualité

### Problème d'affichage
- Vérifiez les chemins dans le code
- Testez avec l'image de fallback

## 📞 Support

Si vous avez des questions :
1. Consultez le `README.md` dans le dossier
2. Vérifiez la `config.json` pour les paramètres
3. Testez avec le script d'optimisation

---

**🎉 Votre dossier hero-images est prêt ! Ajoutez votre nouvelle image et profitez d'un héros optimisé !** 