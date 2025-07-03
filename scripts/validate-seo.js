#!/usr/bin/env node

/**
 * Script de validation SEO pour Shine&Go Premium
 * Vérifie que tous les éléments SEO essentiels sont présents
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validation SEO - Shine&Go Premium\n');

// Configuration
const config = {
  siteUrl: 'https://www.shineandgo.be',
  requiredFiles: [
    'public/robots.txt',
    'public/sitemap.xml',
    'public/manifest.json',
    'public/structured-data.json',
    'src/app/layout.tsx'
  ],
  requiredMetaTags: [
    'title',
    'description',
    'keywords',
    'robots',
    'canonical',
    'openGraph',
    'twitter'
  ],
  requiredStructuredData: [
    '@type',
    'name',
    'description',
    'url',
    'telephone',
    'address',
    'geo',
    'openingHoursSpecification',
    'aggregateRating'
  ]
};

// Fonctions de validation
function checkFileExists(filePath) {
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? '✅' : '❌'} ${filePath} ${exists ? 'existe' : 'MANQUANT'}`);
  return exists;
}

function validateRobotsTxt() {
  const robotsPath = 'public/robots.txt';
  if (!fs.existsSync(robotsPath)) return false;
  
  const content = fs.readFileSync(robotsPath, 'utf8');
  const checks = [
    { name: 'User-agent: *', found: content.includes('User-agent: *') },
    { name: 'Allow: /', found: content.includes('Allow: /') },
    { name: 'Sitemap', found: content.includes('Sitemap:') },
    { name: 'Googlebot', found: content.includes('Googlebot') }
  ];
  
  console.log('\n📋 Validation robots.txt:');
  checks.forEach(check => {
    console.log(`  ${check.found ? '✅' : '❌'} ${check.name}`);
  });
  
  return checks.every(check => check.found);
}

function validateSitemap() {
  const sitemapPath = 'public/sitemap.xml';
  if (!fs.existsSync(sitemapPath)) return false;
  
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const checks = [
    { name: 'XML declaration', found: content.includes('<?xml version="1.0"') },
    { name: 'urlset namespace', found: content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"') },
    { name: 'Homepage URL', found: content.includes('https://www.shineandgo.be/') },
    { name: 'Image sitemap', found: content.includes('xmlns:image') }
  ];
  
  console.log('\n🗺️  Validation sitemap.xml:');
  checks.forEach(check => {
    console.log(`  ${check.found ? '✅' : '❌'} ${check.name}`);
  });
  
  return checks.every(check => check.found);
}

function validateStructuredData() {
  const dataPath = 'public/structured-data.json';
  if (!fs.existsSync(dataPath)) return false;
  
  const content = fs.readFileSync(dataPath, 'utf8');
  const data = JSON.parse(content);
  
  console.log('\n🏷️  Validation structured-data.json:');
  config.requiredStructuredData.forEach(field => {
    const hasField = data.hasOwnProperty(field);
    console.log(`  ${hasField ? '✅' : '❌'} ${field}`);
  });
  
  // Vérifications spécifiques
  const specificChecks = [
    { name: 'LocalBusiness type', found: data['@type'] === 'LocalBusiness' },
    { name: 'Phone number', found: data.telephone && data.telephone.includes('+32') },
    { name: 'Address', found: data.address && data.address.streetAddress },
    { name: 'Reviews', found: data.review && data.review.length > 0 },
    { name: 'Services', found: data.hasOfferCatalog && data.hasOfferCatalog.itemListElement }
  ];
  
  specificChecks.forEach(check => {
    console.log(`  ${check.found ? '✅' : '❌'} ${check.name}`);
  });
  
  return config.requiredStructuredData.every(field => data.hasOwnProperty(field));
}

function validateManifest() {
  const manifestPath = 'public/manifest.json';
  if (!fs.existsSync(manifestPath)) return false;
  
  const content = fs.readFileSync(manifestPath, 'utf8');
  const data = JSON.parse(content);
  
  console.log('\n📱 Validation manifest.json:');
  const checks = [
    { name: 'name', found: data.name && data.name.includes('Shine&Go') },
    { name: 'short_name', found: data.short_name },
    { name: 'description', found: data.description },
    { name: 'start_url', found: data.start_url === '/' },
    { name: 'display', found: data.display === 'standalone' },
    { name: 'theme_color', found: data.theme_color },
    { name: 'icons', found: data.icons && data.icons.length > 0 }
  ];
  
  checks.forEach(check => {
    console.log(`  ${check.found ? '✅' : '❌'} ${check.name}`);
  });
  
  return checks.every(check => check.found);
}

function generateSeoReport() {
  console.log('\n📊 RAPPORT SEO COMPLET\n');
  console.log('='.repeat(50));
  
  // Vérification des fichiers
  console.log('\n📁 FICHIERS REQUIS:');
  let filesOk = 0;
  config.requiredFiles.forEach(file => {
    if (checkFileExists(file)) filesOk++;
  });
  
  // Validation détaillée
  const validations = [
    { name: 'robots.txt', fn: validateRobotsTxt },
    { name: 'sitemap.xml', fn: validateSitemap },
    { name: 'structured-data.json', fn: validateStructuredData },
    { name: 'manifest.json', fn: validateManifest }
  ];
  
  let validationsOk = 0;
  validations.forEach(validation => {
    if (validation.fn()) validationsOk++;
  });
  
  // Résumé
  console.log('\n' + '='.repeat(50));
  console.log('📈 RÉSUMÉ:');
  console.log(`Fichiers requis: ${filesOk}/${config.requiredFiles.length}`);
  console.log(`Validations: ${validationsOk}/${validations.length}`);
  
  const score = Math.round((filesOk + validationsOk) / (config.requiredFiles.length + validations.length) * 100);
  console.log(`\n🎯 Score SEO: ${score}%`);
  
  if (score >= 90) {
    console.log('🌟 Excellent! Le SEO est bien optimisé.');
  } else if (score >= 70) {
    console.log('✅ Bon! Quelques améliorations possibles.');
  } else {
    console.log('⚠️  Attention! Des améliorations sont nécessaires.');
  }
  
  // Recommandations
  console.log('\n💡 RECOMMANDATIONS:');
  console.log('1. Vérifiez que Google Search Console est configuré');
  console.log('2. Soumettez le sitemap à Google et Bing');
  console.log('3. Testez les données structurées avec Google Rich Results Test');
  console.log('4. Vérifiez la vitesse de chargement avec PageSpeed Insights');
  console.log('5. Surveillez les performances dans Google Analytics');
}

// Exécution
if (require.main === module) {
  generateSeoReport();
}

module.exports = { generateSeoReport, validateRobotsTxt, validateSitemap, validateStructuredData, validateManifest }; 