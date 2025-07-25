import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclure le dossier scripts/ de la compilation
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Désactiver ESLint temporairement pour le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Optimisations pour les performances mobile
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Optimisation des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [360, 414, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Optimisations WebP
    unoptimized: false,
    loader: 'default',
    path: '/_next/image',
  },
  
  // Compression et optimisation
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Optimisations de build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Optimisations pour mobile
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Headers SEO
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/transformations/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/transformations/optimized/webp/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/webp',
          },
        ],
      },
      // Optimisations pour les assets statiques
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optimisation du webpack
  webpack: (config, { dev, isServer }) => {
    // Exclure le dossier scripts/ de la compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /scripts/,
    });
    
    // Optimisations pour la production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
      
      // Optimisation des images
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            },
          },
        ],
      });
    }
    
    return config;
  },
  
  // Configuration pour le SEO
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  async redirects() {
    return [
      // Redirection de la page principale zone-intervention vers la page d'accueil
      {
        source: '/zone-intervention',
        destination: '/',
        permanent: true,
      },
      // Redirections des pages de villes individuelles
      {
        source: '/zone-intervention/aix-la-chapelle',
        destination: '/nettoyage-voiture-aix-la-chapelle',
        permanent: true,
      },
      {
        source: '/zone-intervention/amay',
        destination: '/nettoyage-voiture-amay',
        permanent: true,
      },
      {
        source: '/zone-intervention/ans',
        destination: '/nettoyage-voiture-ans',
        permanent: true,
      },
      {
        source: '/zone-intervention/argenteau',
        destination: '/nettoyage-voiture-argenteau',
        permanent: true,
      },
      {
        source: '/zone-intervention/aubel',
        destination: '/nettoyage-voiture-aubel',
        permanent: true,
      },
      {
        source: '/zone-intervention/aywaille',
        destination: '/nettoyage-voiture-aywaille',
        permanent: true,
      },
      {
        source: '/zone-intervention/baelen',
        destination: '/nettoyage-voiture-baelen',
        permanent: true,
      },
      {
        source: '/zone-intervention/battice',
        destination: '/nettoyage-voiture-battice',
        permanent: true,
      },
      {
        source: '/zone-intervention/beaufays',
        destination: '/nettoyage-voiture-beaufays',
        permanent: true,
      },
      {
        source: '/zone-intervention/berloz',
        destination: '/nettoyage-voiture-berloz',
        permanent: true,
      },
      {
        source: '/zone-intervention/blegny',
        destination: '/nettoyage-voiture-blegny',
        permanent: true,
      },
      {
        source: '/zone-intervention/chaudfontaine',
        destination: '/nettoyage-voiture-chaudfontaine',
        permanent: true,
      },
      {
        source: '/zone-intervention/dalhem',
        destination: '/nettoyage-voiture-dalhem',
        permanent: true,
      },
      {
        source: '/zone-intervention/dison',
        destination: '/nettoyage-voiture-dison',
        permanent: true,
      },
      {
        source: '/zone-intervention/donceel',
        destination: '/nettoyage-voiture-donceel',
        permanent: true,
      },
      {
        source: '/zone-intervention/embourg',
        destination: '/nettoyage-voiture-embourg',
        permanent: true,
      },
      {
        source: '/zone-intervention/engis',
        destination: '/nettoyage-voiture-engis',
        permanent: true,
      },
      {
        source: '/zone-intervention/esneux',
        destination: '/nettoyage-voiture-esneux',
        permanent: true,
      },
      {
        source: '/zone-intervention/eupen',
        destination: '/nettoyage-voiture-eupen',
        permanent: true,
      },
      {
        source: '/zone-intervention/flemalle',
        destination: '/nettoyage-voiture-flemalle',
        permanent: true,
      },
      {
        source: '/zone-intervention/fleron',
        destination: '/nettoyage-voiture-fleron',
        permanent: true,
      },
      {
        source: '/zone-intervention/francorchamps',
        destination: '/nettoyage-voiture-francorchamps',
        permanent: true,
      },
      {
        source: '/zone-intervention/gemmenich',
        destination: '/nettoyage-voiture-gemmenich',
        permanent: true,
      },
      {
        source: '/zone-intervention/herve',
        destination: '/nettoyage-voiture-herve',
        permanent: true,
      },
      {
        source: '/zone-intervention/huy',
        destination: '/nettoyage-voiture-huy',
        permanent: true,
      },
      {
        source: '/zone-intervention/jalhay',
        destination: '/nettoyage-voiture-jalhay',
        permanent: true,
      },
      {
        source: '/zone-intervention/jemeppe',
        destination: '/nettoyage-voiture-jemeppe',
        permanent: true,
      },
      {
        source: '/zone-intervention/kelmis',
        destination: '/nettoyage-voiture-kelmis',
        permanent: true,
      },
      {
        source: '/zone-intervention/limbourg',
        destination: '/nettoyage-voiture-limbourg',
        permanent: true,
      },
      {
        source: '/zone-intervention/lontzen',
        destination: '/nettoyage-voiture-lontzen',
        permanent: true,
      },
      {
        source: '/zone-intervention/malmedy',
        destination: '/nettoyage-voiture-malmedy',
        permanent: true,
      },
      {
        source: '/zone-intervention/marchin',
        destination: '/nettoyage-voiture-marchin',
        permanent: true,
      },
      {
        source: '/zone-intervention/montzen',
        destination: '/nettoyage-voiture-montzen',
        permanent: true,
      },
      {
        source: '/zone-intervention/mouland',
        destination: '/nettoyage-voiture-mouland',
        permanent: true,
      },
      {
        source: '/zone-intervention/nessonvaux',
        destination: '/nettoyage-voiture-nessonvaux',
        permanent: true,
      },
      {
        source: '/zone-intervention/olne',
        destination: '/nettoyage-voiture-olne',
        permanent: true,
      },
      {
        source: '/zone-intervention/ovifat',
        destination: '/nettoyage-voiture-ovifat',
        permanent: true,
      },
      {
        source: '/zone-intervention/pepinster',
        destination: '/nettoyage-voiture-pepinster',
        permanent: true,
      },
      {
        source: '/zone-intervention/plombieres',
        destination: '/nettoyage-voiture-plombieres',
        permanent: true,
      },
      {
        source: '/zone-intervention/raeren',
        destination: '/nettoyage-voiture-raeren',
        permanent: true,
      },
      {
        source: '/zone-intervention/remicourt',
        destination: '/nettoyage-voiture-remicourt',
        permanent: true,
      },
      {
        source: '/zone-intervention/remouchamps',
        destination: '/nettoyage-voiture-remouchamps',
        permanent: true,
      },
      {
        source: '/zone-intervention/robertville',
        destination: '/nettoyage-voiture-robertville',
        permanent: true,
      },
      {
        source: '/zone-intervention/saint-georges',
        destination: '/nettoyage-voiture-saint-georges',
        permanent: true,
      },
      {
        source: '/zone-intervention/seraing',
        destination: '/nettoyage-voiture-seraing',
        permanent: true,
      },
      {
        source: '/zone-intervention/soumagne',
        destination: '/nettoyage-voiture-soumagne',
        permanent: true,
      },
      {
        source: '/zone-intervention/spa',
        destination: '/nettoyage-voiture-spa',
        permanent: true,
      },
      {
        source: '/zone-intervention/sprimont',
        destination: '/nettoyage-voiture-sprimont',
        permanent: true,
      },
      {
        source: '/zone-intervention/stavelot',
        destination: '/nettoyage-voiture-stavelot',
        permanent: true,
      },
      {
        source: '/zone-intervention/theux',
        destination: '/nettoyage-voiture-theux',
        permanent: true,
      },
      {
        source: '/zone-intervention/thimister',
        destination: '/nettoyage-voiture-thimister',
        permanent: true,
      },
      {
        source: '/zone-intervention/tilff',
        destination: '/nettoyage-voiture-tilff',
        permanent: true,
      },
      {
        source: '/zone-intervention/trois-ponts',
        destination: '/nettoyage-voiture-trois-ponts',
        permanent: true,
      },
      {
        source: '/zone-intervention/trooz',
        destination: '/nettoyage-voiture-trooz',
        permanent: true,
      },
      {
        source: '/zone-intervention/vaals',
        destination: '/nettoyage-voiture-vaals',
        permanent: true,
      },
      {
        source: '/zone-intervention/verlaine',
        destination: '/nettoyage-voiture-verlaine',
        permanent: true,
      },
      {
        source: '/zone-intervention/verviers',
        destination: '/nettoyage-voiture-verviers',
        permanent: true,
      },
      {
        source: '/zone-intervention/vise',
        destination: '/nettoyage-voiture-vise',
        permanent: true,
      },
      {
        source: '/zone-intervention/waimes',
        destination: '/nettoyage-voiture-waimes',
        permanent: true,
      },
      {
        source: '/zone-intervention/wanze',
        destination: '/nettoyage-voiture-wanze',
        permanent: true,
      },
      {
        source: '/zone-intervention/waremme',
        destination: '/nettoyage-voiture-waremme',
        permanent: true,
      },
      {
        source: '/zone-intervention/welkenraedt',
        destination: '/nettoyage-voiture-welkenraedt',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
