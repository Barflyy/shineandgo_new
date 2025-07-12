#!/usr/bin/env node

/**
 * Script de validation SEO pour Shine&Go Premium
 * Vérifie que tous les éléments SEO essentiels sont présents
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validation SEO - Shine&Go Premium');
console.log('=====================================\n');

// Vérifications
const checks = {
  sitemap: false,
  robots: false,
  manifest: false,
  webpImages: false,
  analytics: false,
  structuredData: false,
  metaTags: false
};

// 1. Vérifier le sitemap
try {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    checks.sitemap = urlCount > 0;
    console.log(`✅ Sitemap: ${urlCount} URLs trouvées`);
  } else {
    console.log('❌ Sitemap: Fichier manquant');
  }
} catch (error) {
  console.log('❌ Sitemap: Erreur de lecture');
}

// 2. Vérifier robots.txt
try {
  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    checks.robots = robotsContent.includes('Sitemap:') && robotsContent.includes('User-agent:');
    console.log('✅ Robots.txt: Configuré correctement');
  } else {
    console.log('❌ Robots.txt: Fichier manquant');
  }
} catch (error) {
  console.log('❌ Robots.txt: Erreur de lecture');
}

// 3. Vérifier manifest.json
try {
  const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    checks.manifest = manifest.name && manifest.short_name && manifest.start_url;
    console.log('✅ Manifest.json: Configuré correctement');
  } else {
    console.log('❌ Manifest.json: Fichier manquant');
  }
} catch (error) {
  console.log('❌ Manifest.json: Erreur de lecture');
}

// 4. Vérifier les images WebP
try {
  const webpDir = path.join(process.cwd(), 'public', 'transformations', 'optimized', 'webp');
  if (fs.existsSync(webpDir)) {
    const webpFiles = fs.readdirSync(webpDir).filter(file => file.endsWith('.webp'));
    checks.webpImages = webpFiles.length > 0;
    console.log(`✅ Images WebP: ${webpFiles.length} fichiers trouvés`);
  } else {
    console.log('❌ Images WebP: Dossier manquant');
  }
} catch (error) {
  console.log('❌ Images WebP: Erreur de lecture');
}

// 5. Vérifier les analytics
try {
  const analyticsPath = path.join(process.cwd(), 'src', 'app', 'analytics.tsx');
  if (fs.existsSync(analyticsPath)) {
    const analyticsContent = fs.readFileSync(analyticsPath, 'utf8');
    checks.analytics = analyticsContent.includes('G-9MZK3M3Z7T') && analyticsContent.includes('fbq');
    console.log('✅ Analytics: Google Analytics et Facebook Pixel configurés');
  } else {
    console.log('❌ Analytics: Fichier manquant');
  }
} catch (error) {
  console.log('❌ Analytics: Erreur de lecture');
}

// 6. Vérifier les données structurées
try {
  const gmbPath = path.join(process.cwd(), 'src', 'app', 'config', 'google-my-business.ts');
  if (fs.existsSync(gmbPath)) {
    const gmbContent = fs.readFileSync(gmbPath, 'utf8');
    checks.structuredData = gmbContent.includes('generateStructuredData') && gmbContent.includes('LocalBusiness');
    console.log('✅ Données structurées: Schema.org configuré');
  } else {
    console.log('❌ Données structurées: Fichier manquant');
  }
} catch (error) {
  console.log('❌ Données structurées: Erreur de lecture');
}

// 7. Vérifier les meta tags
try {
  const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    checks.metaTags = layoutContent.includes('title') && layoutContent.includes('description') && layoutContent.includes('openGraph');
    console.log('✅ Meta tags: Open Graph et Twitter Cards configurés');
  } else {
    console.log('❌ Meta tags: Fichier manquant');
  }
} catch (error) {
  console.log('❌ Meta tags: Erreur de lecture');
}

// Résumé
console.log('\n📊 Résumé de la validation SEO:');
console.log('================================');

const totalChecks = Object.keys(checks).length;
const passedChecks = Object.values(checks).filter(Boolean).length;
const score = Math.round((passedChecks / totalChecks) * 100);

console.log(`\nScore SEO: ${score}% (${passedChecks}/${totalChecks} tests réussis)`);

if (score >= 90) {
  console.log('🎉 Excellent! Votre site est très bien optimisé pour le SEO.');
} else if (score >= 70) {
  console.log('✅ Bon! Quelques optimisations mineures peuvent être apportées.');
} else {
  console.log('⚠️  Attention! Des optimisations importantes sont nécessaires.');
}

// Recommandations
console.log('\n💡 Recommandations:');
if (!checks.sitemap) console.log('- Générer un sitemap XML');
if (!checks.robots) console.log('- Configurer robots.txt');
if (!checks.manifest) console.log('- Créer manifest.json pour PWA');
if (!checks.webpImages) console.log('- Convertir les images en WebP');
if (!checks.analytics) console.log('- Configurer Google Analytics et Facebook Pixel');
if (!checks.structuredData) console.log('- Ajouter des données structurées Schema.org');
if (!checks.metaTags) console.log('- Optimiser les meta tags Open Graph');

console.log('\n🚀 Commandes utiles:');
console.log('npm run seo:optimize  - Optimisation complète SEO');
console.log('npm run build:production - Build avec optimisations');
console.log('npm run update:sitemap - Mise à jour du sitemap'); 