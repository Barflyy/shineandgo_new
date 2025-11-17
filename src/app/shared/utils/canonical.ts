/**
 * 🔧 SEO: Fonction utilitaire pour générer les URLs canoniques
 * Force toujours la version sans www pour éviter la duplication de contenu
 * Compatible avec Vercel et SSR Next.js
 */

export function generateCanonicalUrl(path: string = '/'): string {
  // 🔧 SEO: Nettoyer le path (enlever les slashes multiples et trailing slash)
  const cleanPath = path.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  
  // 🔧 SEO: Construire l'URL canonique sans www
  return `https://shineandgo.be${cleanPath}`;
}

export function generateAlternates(path: string = '/') {
  return {
    canonical: generateCanonicalUrl(path),
  };
}

/**
 * Fonction pour vérifier si l'URL actuelle est canonique
 * Utile pour les redirections côté client
 */
export function isCanonicalUrl(url: string): boolean {
  return url.startsWith('https://shineandgo.be') && !url.includes('www.');
} 