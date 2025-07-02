#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validation SEO - Shine&Go\n');

// Vérification du sitemap
function validateSitemap() {
  console.log('📋 Vérification du sitemap...');
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('❌ Sitemap non trouvé');
    return false;
  }
  
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Vérifier qu'il n'y a pas d'URLs avec ancres
  if (sitemap.includes('#') || sitemap.includes('hreflang')) {
    console.log('❌ Sitemap contient des URLs avec ancres ou hreflang');
    return false;
  }
  
  // Vérifier la structure de base
  if (!sitemap.includes('<urlset') || !sitemap.includes('<url>')) {
    console.log('❌ Structure sitemap invalide');
    return false;
  }
  
  console.log('✅ Sitemap valide');
  return true;
}

// Vérification du robots.txt
function validateRobots() {
  console.log('\n🤖 Vérification du robots.txt...');
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  
  if (!fs.existsSync(robotsPath)) {
    console.log('❌ Robots.txt non trouvé');
    return false;
  }
  
  const robots = fs.readFileSync(robotsPath, 'utf8');
  
  if (!robots.includes('Sitemap:')) {
    console.log('❌ Sitemap non référencé dans robots.txt');
    return false;
  }
  
  console.log('✅ Robots.txt valide');
  return true;
}

// Vérification du manifest
function validateManifest() {
  console.log('\n📱 Vérification du manifest...');
  const manifestPath = path.join(__dirname, '../public/manifest.json');
  
  if (!fs.existsSync(manifestPath)) {
    console.log('❌ Manifest non trouvé');
    return false;
  }
  
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    if (!manifest.icons || manifest.icons.length === 0) {
      console.log('❌ Manifest sans icônes');
      return false;
    }
    
    // Vérifier que les icônes existent
    for (const icon of manifest.icons) {
      const iconPath = path.join(__dirname, '../public', icon.src);
      if (!fs.existsSync(iconPath)) {
        console.log(`❌ Icône manquante: ${icon.src}`);
        return false;
      }
    }
    
    console.log('✅ Manifest valide');
    return true;
  } catch (error) {
    console.log('❌ Manifest JSON invalide');
    return false;
  }
}

// Vérification des images référencées
function validateImages() {
  console.log('\n🖼️ Vérification des images...');
  const layoutPath = path.join(__dirname, '../src/app/layout.tsx');
  
  if (!fs.existsSync(layoutPath)) {
    console.log('❌ Layout.tsx non trouvé');
    return false;
  }
  
  const layout = fs.readFileSync(layoutPath, 'utf8');
  const imageMatches = layout.match(/['"`]\/[^'"`]*\.(jpg|jpeg|png|svg|webp)['"`]/g);
  
  if (imageMatches) {
    for (const match of imageMatches) {
      const imagePath = match.replace(/['"`]/g, '');
      const fullPath = path.join(__dirname, '../public', imagePath);
      
      if (!fs.existsSync(fullPath)) {
        console.log(`❌ Image manquante: ${imagePath}`);
        return false;
      }
    }
  }
  
  console.log('✅ Toutes les images référencées existent');
  return true;
}

// Vérification du structured data
function validateStructuredData() {
  console.log('\n📊 Vérification du structured data...');
  const structuredDataPath = path.join(__dirname, '../public/structured-data.json');
  
  if (!fs.existsSync(structuredDataPath)) {
    console.log('❌ Structured data non trouvé');
    return false;
  }
  
  try {
    const structuredData = JSON.parse(fs.readFileSync(structuredDataPath, 'utf8'));
    
    if (!structuredData['@type'] || !structuredData.name) {
      console.log('❌ Structured data incomplet');
      return false;
    }
    
    console.log('✅ Structured data valide');
    return true;
  } catch (error) {
    console.log('❌ Structured data JSON invalide');
    return false;
  }
}

// Exécution des validations
const validations = [
  validateSitemap,
  validateRobots,
  validateManifest,
  validateImages,
  validateStructuredData
];

let allValid = true;

for (const validation of validations) {
  if (!validation()) {
    allValid = false;
  }
}

console.log('\n' + '='.repeat(50));

if (allValid) {
  console.log('🎉 Toutes les validations SEO sont passées !');
  console.log('\n📋 Prochaines étapes :');
  console.log('1. Déployer les changements');
  console.log('2. Configurer Google Search Console');
  console.log('3. Soumettre le sitemap');
  console.log('4. Surveiller l\'indexation');
} else {
  console.log('⚠️ Certaines validations ont échoué. Veuillez corriger les erreurs.');
}

console.log('\n📖 Consultez SEO-GOOGLE-INDEXATION.md pour plus de détails.'); 