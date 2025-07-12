const fs = require('fs');
const { glob } = require('glob');
const { JSDOM } = require('jsdom');
const natural = require('natural');

const THRESHOLD = 0.30;
const files = glob.sync('src/app/zone-intervention/**/page.tsx');

console.log('🔍 AUDIT DUPLICATE CONTENT');
console.log('============================');
console.log(`📁 Fichiers analysés: ${files.length}`);
console.log('');

// util : strip JSX + HTML balises
const strip = (str) =>
  str.replace(/<[^>]+>/g, ' ')
     .replace(/[\s\n\r]+/g, ' ')
     .trim()
     .toLowerCase();

// Charge & nettoie le contenu textuel
const texts = files.map((f) => {
  const raw = fs.readFileSync(f, 'utf8');
  const match = raw.match(/AUTO-CONTENT-START([\s\S]*)AUTO-CONTENT-END/);
  if (!match) return { f, text: '' };
  const jsx = match[1];
  const dom = new JSDOM(`<div>${jsx}</div>`);
  // Récupère le texte rendu
  const text = strip(dom.window.document.body.textContent || '');
  return { f, text };
});

console.log('📊 Analyse du contenu:');
texts.forEach(({ f, text }) => {
  const cityName = f.split('/').pop()?.replace('/page.tsx', '') || 'unknown';
  console.log(`  ${cityName}: ${text.length} caractères`);
});
console.log('');

// TF-IDF
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();
texts.forEach(({ text }, i) => tfidf.addDocument(text, i));

function cosine(docA, docB) {
  const vecA = [], vecB = [];
  const dict = tfidf.documents[docA];
  Object.keys(dict).forEach((term) => {
    vecA.push(tfidf.tfidf(term, docA));
    vecB.push(tfidf.tfidf(term, docB));
  });
  // produit scalaire / norme
  const dot = vecA.reduce((s, v, i) => s + v * vecB[i], 0);
  const normA = Math.sqrt(vecA.reduce((s, v) => s + v * v, 0));
  const normB = Math.sqrt(vecB.reduce((s, v) => s + v * v, 0));
  return dot / (normA * normB || 1);
}

const duplicates = [];
for (let i = 0; i < texts.length; i++) {
  for (let j = i + 1; j < texts.length; j++) {
    const sim = cosine(i, j);
    if (sim > THRESHOLD) duplicates.push([sim, texts[i].f, texts[j].f]);
  }
}

console.log('🚨 RÉSULTATS - PAGES AVEC SIMILARITÉ > 30%:');
console.log('=============================================');

if (duplicates.length === 0) {
  console.log('✅ Aucune page avec similarité > 30% détectée !');
  console.log('🎉 Toutes les pages ont du contenu unique.');
} else {
  duplicates
    .sort((a, b) => b[0] - a[0])
    .forEach(([sim, a, b]) => {
      const cityA = a.split('/').pop()?.replace('/page.tsx', '') || 'unknown';
      const cityB = b.split('/').pop()?.replace('/page.tsx', '') || 'unknown';
      console.log(`${(sim * 100).toFixed(1)}% - ${cityA} ↔ ${cityB}`);
    });
}

console.log('');
console.log('📈 STATISTIQUES:');
console.log(`  - Pages analysées: ${files.length}`);
console.log(`  - Paires avec similarité > 30%: ${duplicates.length}`);
console.log(`  - Seuil de détection: ${THRESHOLD * 100}%`);

// Analyse détaillée du contenu
console.log('');
console.log('🔍 ANALYSE DÉTAILLÉE:');
texts.forEach(({ f, text }, i) => {
  const cityName = f.split('/').pop()?.replace('/page.tsx', '') || 'unknown';
  const words = text.split(' ').length;
  console.log(`  ${cityName}: ${words} mots, ${text.length} caractères`);
}); 