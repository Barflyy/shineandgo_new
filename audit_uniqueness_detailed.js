const fs = require('fs');

// Lire le fichier JSON des villes
const cityJson = JSON.parse(fs.readFileSync('villes_shineandgo_enrichi.json', 'utf8'));
const allCitySlugs = Object.keys(cityJson);

// Lire le fichier cityContent.ts
const cityContentFile = fs.readFileSync('src/app/utils/cityContent.ts', 'utf8');

// Extraire toutes les villes et leur contenu
const cityMatches = cityContentFile.match(/'([a-z0-9-]+)':\s*{[\s\S]*?}\s*(,|$)/g);
const cityData = {};
if (cityMatches) {
  cityMatches.forEach(match => {
    const citySlug = match.match(/'([a-z0-9-]+)'/)[1];
    // Extraire le contenu unique
    const uniqueContentMatch = match.match(/uniqueContent:\s*`([^`]*)`/);
    const uniqueContent = uniqueContentMatch ? uniqueContentMatch[1] : '';
    // Anecdotes
    const anecdotesMatch = match.match(/localAnecdotes:\s*\[([\s\S]*?)\]/);
    const anecdotes = anecdotesMatch ? anecdotesMatch[1].match(/"([^"]+)"/g)?.map(a => a.replace(/"/g, '')) || [] : [];
    // Parkings
    const parkingMatch = match.match(/parkingSpots:\s*\[([\s\S]*?)\]/);
    const parkingSpots = parkingMatch ? parkingMatch[1].match(/"([^"]+)"/g)?.map(p => p.replace(/"/g, '')) || [] : [];
    // Zones populaires
    const areasMatch = match.match(/popularAreas:\s*\[([\s\S]*?)\]/);
    const popularAreas = areasMatch ? areasMatch[1].match(/"([^"]+)"/g)?.map(a => a.replace(/"/g, '')) || [] : [];
    cityData[citySlug] = {
      uniqueContent,
      anecdotes,
      parkingSpots,
      popularAreas
    };
  });
}

console.log(`\n🔍 ANALYSE DÉTAILLÉE DE L'UNICITÉ - ${allCitySlugs.length} VILLES\n`);

let excellent = 0, generic = 0, missing = 0;
const missingCities = [];

allCitySlugs.forEach(citySlug => {
  const data = cityData[citySlug];
  if (!data) {
    console.log(`🚨 MANQUANTE ${citySlug.toUpperCase()} (pas de contenu dans cityContent.ts)`);
    missing++;
    missingCities.push(citySlug);
    return;
  }
  // Vérifier si le contenu est générique
  const isGeneric =
    data.uniqueContent.includes('Shine&Go intervient dans tous les quartiers') &&
    data.uniqueContent.includes('Nous connaissons les habitudes locales') &&
    data.uniqueContent.includes('marché du dimanche') &&
    data.uniqueContent.includes('salle communale');
  // Anecdotes génériques
  const genericAnecdotes =
    data.anecdotes.some(a => a.includes('marché du dimanche')) &&
    data.anecdotes.some(a => a.includes('salle communale')) &&
    data.anecdotes.some(a => a.includes('paysages vallonnés'));
  // Parkings génériques
  const genericParking =
    data.parkingSpots.includes('Place du Marché') &&
    data.parkingSpots.includes('Parking de la salle communale') &&
    data.parkingSpots.includes("Parking de l'école");
  // Zones génériques
  const genericAreas =
    data.popularAreas.includes('Centre') &&
    data.popularAreas.includes('Zone rurale') &&
    data.popularAreas.includes('Proximité');
  // Score unicité
  let uniquenessScore = 100;
  if (isGeneric) uniquenessScore -= 30;
  if (genericAnecdotes) uniquenessScore -= 20;
  if (genericParking) uniquenessScore -= 15;
  if (genericAreas) uniquenessScore -= 15;
  if (data.uniqueContent.length < 150) uniquenessScore -= 10;
  const status = uniquenessScore >= 80 ? '✅ EXCELLENT' :
                 uniquenessScore >= 60 ? '⚠️  MOYEN' :
                 uniquenessScore >= 40 ? '❌ FAIBLE' : '🚨 CRITIQUE';
  if (uniquenessScore >= 80) excellent++;
  else generic++;
  console.log(`${status} ${citySlug.toUpperCase()}`);
  console.log(`   Score: ${uniquenessScore}/100`);
  console.log(`   Contenu: ${data.uniqueContent.length} caractères`);
  console.log(`   Contenu générique: ${isGeneric ? 'OUI' : 'NON'}`);
  console.log(`   Anecdotes génériques: ${genericAnecdotes ? 'OUI' : 'NON'}`);
  console.log(`   Parkings génériques: ${genericParking ? 'OUI' : 'NON'}`);
  console.log(`   Zones génériques: ${genericAreas ? 'OUI' : 'NON'}`);
  console.log(`   Contenu: "${data.uniqueContent.substring(0, 100)}..."`);
  console.log('');
});

console.log(`\n📊 STATISTIQUES GLOBALES:`);
console.log(`   Total des villes: ${allCitySlugs.length}`);
console.log(`   Villes avec contenu unique: ${excellent}`);
console.log(`   Villes avec contenu générique: ${generic}`);
console.log(`   Villes manquantes: ${missing}`);
console.log(`   Score d'unicité global: ${Math.round((excellent / allCitySlugs.length) * 100)}%`);
if (missingCities.length > 0) {
  console.log(`\n🚨 VILLES MANQUANTES DANS cityContent.ts (${missingCities.length}):`);
  missingCities.forEach(city => {
    console.log(`   - ${city}`);
  });
} 