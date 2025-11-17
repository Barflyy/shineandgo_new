# Polices du site Shine&Go

## 📁 Fichiers requis

Pour que la typographie fonctionne correctement, vous devez ajouter les fichiers suivants dans ce dossier :

### **Lemfont Bold**
- `Lemfont-Bold.woff2` - Format moderne (priorité)
- `Lemfont-Bold.woff` - Format legacy
- `Lemfont-Bold.ttf` - Format fallback

## 🎯 Structure finale
```
public/fonts/
├── README.md
├── Lemfont-Bold.woff2     # À ajouter
├── Lemfont-Bold.woff      # À ajouter
└── Lemfont-Bold.ttf       # À ajouter
```

## ⚙️ Configuration

Une fois les fichiers ajoutés, la configuration est automatique :

1. **fonts.css** - Définit les @font-face
2. **layout.tsx** - Configure les variables CSS
3. **globals.css** - Applique les styles

## 🎨 Utilisation

- **H1, H2** → Lemfont Bold automatiquement
- **H3, H4, H5, H6, p, span, div, button, a** → Inter automatiquement
- **Classes utilitaires** : `.font-lemfont` et `.font-inter`

## 📱 Performance

- **font-display: swap** pour un chargement optimisé
- **Fallbacks** robustes pour tous les navigateurs
- **Preload** pour Inter via Next.js

---

**Note** : Les fichiers de police ne sont pas inclus dans le repository pour des raisons de licence. Veuillez les ajouter manuellement. 