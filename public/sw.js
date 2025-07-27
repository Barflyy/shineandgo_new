// Service Worker pour Shine&Go - Optimisation du cache et des performances
const CACHE_NAME = 'shineandgo-v1.2.0';
const STATIC_CACHE = 'static-v1.2.0';
const DYNAMIC_CACHE = 'dynamic-v1.2.0';

// Ressources critiques à mettre en cache immédiatement
const STATIC_ASSETS = [
  '/',
  '/nettoyage-voiture',
  '/nettoyage-interieur-voiture',
  '/nettoyage-exterieur-voiture',
  '/nettoyage-complet-voiture',
  '/nettoyage-voiture-liege',
  '/nettoyage-voiture-herve',
  '/nettoyage-voiture-verviers',
  '/nettoyage-voiture-spa',
  '/nettoyage-voiture-welkenraedt',
  '/nettoyage-voiture-dison',
  '/nettoyage-voiture-aywaille',
  '/nettoyage-voiture-chaudfontaine',
  '/nettoyage-voiture-seraing',
  '/nettoyage-voiture-flemalle',
  '/favicon.ico',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-index.xml'
];

// Ressources statiques (CSS, JS, images)
const STATIC_RESOURCES = [
  '/fonts/Lemfont-Bold.woff2',
  '/fonts/Lemfont-Bold.woff',
  '/transformations/webp/berline-familiale-propre-apres-nettoyage-herve.webp',
  '/transformations/webp/berline-familiale-sale-avant-nettoyage-herve.webp',
  '/transformations/webp/citadine-premium-propre-apres-lavage-aubel.webp',
  '/transformations/webp/citadine-premium-sale-avant-lavage-aubel.webp',
  '/transformations/webp/interieur-voiture-propre-apres-nettoyage-dison.webp',
  '/transformations/webp/interieur-voiture-sale-avant-nettoyage-dison.webp',
  '/transformations/webp/monospace-familial-propre-apres-nettoyage-huy.webp',
  '/transformations/webp/monospace-familial-sale-avant-nettoyage-huy.webp',
  '/transformations/webp/suv-premium-propre-apres-lavage-verviers.webp',
  '/transformations/webp/suv-premium-sale-avant-lavage-verviers.webp',
  '/transformations/webp/utilitaire-commercial-propre-apres-nettoyage-liege.webp',
  '/transformations/webp/utilitaire-commercial-sale-avant-nettoyage-liege.webp',
  '/transformations/webp/voiture-sport-propre-apres-detailing-spa.webp',
  '/transformations/webp/voiture-sport-sale-avant-detailing-spa.webp'
];

// Configuration du cache
const CACHE_CONFIG = {
  // Cache statique : 30 jours
  static: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    maxEntries: 100
  },
  // Cache dynamique : 7 jours
  dynamic: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    maxEntries: 50
  },
  // Cache images : 60 jours
  images: {
    maxAge: 60 * 24 * 60 * 60 * 1000,
    maxEntries: 200
  }
};

// Installation du service worker
self.addEventListener('install', event => {
  console.log('🚀 Service Worker installé');
  
  event.waitUntil(
    Promise.all([
      // Mettre en cache les ressources statiques
      caches.open(STATIC_CACHE).then(cache => {
        console.log('📦 Mise en cache des ressources statiques');
        return cache.addAll(STATIC_ASSETS);
      }),
      // Mettre en cache les ressources critiques
      caches.open(STATIC_CACHE).then(cache => {
        console.log('📦 Mise en cache des ressources critiques');
        return cache.addAll(STATIC_RESOURCES);
      })
    ]).then(() => {
      console.log('✅ Cache initial configuré');
      // Activer immédiatement le nouveau service worker
      return self.skipWaiting();
    })
  );
});

// Activation du service worker
self.addEventListener('activate', event => {
  console.log('🔄 Service Worker activé');
  
  event.waitUntil(
    Promise.all([
      // Nettoyer les anciens caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== CACHE_NAME) {
              console.log('🗑️ Suppression du cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Prendre le contrôle de tous les clients
      self.clients.claim()
    ])
  );
});

// Interception des requêtes
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignorer les requêtes non-GET
  if (request.method !== 'GET') {
    return;
  }
  
  // Ignorer les requêtes externes (analytics, etc.)
  if (url.origin !== self.location.origin) {
    return;
  }
  
  // Stratégie de cache selon le type de ressource
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isImage(url.pathname)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE, CACHE_CONFIG.images));
  } else if (isAPIRequest(url.pathname)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE, CACHE_CONFIG.dynamic));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE, CACHE_CONFIG.dynamic));
  }
});

// Stratégie Cache First (pour les ressources statiques)
async function cacheFirst(request, cacheName, config = CACHE_CONFIG.static) {
  try {
    // Essayer le cache d'abord
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      // Vérifier l'âge du cache
      if (isCacheValid(cachedResponse, config.maxAge)) {
        return cachedResponse;
      }
    }
    
    // Si pas en cache ou expiré, récupérer depuis le réseau
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Mettre en cache la nouvelle réponse
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
      
      // Nettoyer le cache si nécessaire
      await cleanCache(cacheName, config.maxEntries);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('❌ Erreur cache first:', error);
    
    // Fallback vers le cache même expiré
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback vers une page d'erreur
    return new Response('Erreur de connexion', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Stratégie Network First (pour les pages dynamiques)
async function networkFirst(request, cacheName, config = CACHE_CONFIG.dynamic) {
  try {
    // Essayer le réseau d'abord
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Mettre en cache la réponse
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
      
      // Nettoyer le cache si nécessaire
      await cleanCache(cacheName, config.maxEntries);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('❌ Erreur network first:', error);
    
    // Fallback vers le cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback vers une page d'erreur
    return new Response('Erreur de connexion', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Vérifier si une ressource est statique
function isStaticAsset(pathname) {
  return STATIC_ASSETS.includes(pathname) || 
         STATIC_RESOURCES.some(resource => pathname.includes(resource));
}

// Vérifier si c'est une image
function isImage(pathname) {
  return /\.(jpg|jpeg|png|webp|avif|svg|ico)$/i.test(pathname);
}

// Vérifier si c'est une requête API
function isAPIRequest(pathname) {
  return pathname.startsWith('/api/') || 
         pathname.includes('sitemap') ||
         pathname.includes('robots');
}

// Vérifier si le cache est encore valide
function isCacheValid(response, maxAge) {
  const cacheDate = response.headers.get('date');
  if (!cacheDate) return true;
  
  const cacheTime = new Date(cacheDate).getTime();
  const currentTime = Date.now();
  
  return (currentTime - cacheTime) < maxAge;
}

// Nettoyer le cache
async function cleanCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxEntries) {
    // Supprimer les entrées les plus anciennes
    const entriesToDelete = keys.slice(0, keys.length - maxEntries);
    await Promise.all(entriesToDelete.map(key => cache.delete(key)));
    console.log(`🧹 Cache ${cacheName} nettoyé: ${entriesToDelete.length} entrées supprimées`);
  }
}

// Gestion des messages du client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Gestion des erreurs
self.addEventListener('error', event => {
  console.error('❌ Erreur Service Worker:', event.error);
});

// Gestion des rejets de promesses non gérés
self.addEventListener('unhandledrejection', event => {
  console.error('❌ Promesse rejetée non gérée:', event.reason);
});

console.log('🔧 Service Worker Shine&Go chargé'); 