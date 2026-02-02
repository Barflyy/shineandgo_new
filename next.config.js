const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclure le dossier scripts/ de la compilation
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Désactiver ESLint temporairement pour le build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optimisations pour les performances mobile
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: false, // Désactiver LightningCSS explicitement
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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
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
      // Optimisations pour les polices
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      // Optimisations pour les CSS critiques
      {
        source: '/_next/static/css/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
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

    // Ajouter les alias de chemins
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "src"),
      "@/app": path.join(__dirname, "src/app"),
      "@/shared": path.join(__dirname, "src/app/shared"),
      "@/components": path.join(__dirname, "src/app/shared/components"),
      "@/utils": path.join(__dirname, "src/app/shared/utils"),
      "@/types": path.join(__dirname, "src/app/shared/types"),
      "@/styles": path.join(__dirname, "src/app/shared/styles"),
      "@/features": path.join(__dirname, "src/app/features"),
      "@/api": path.join(__dirname, "src/app/api"),
      "@/content": path.join(__dirname, "content"),
      "@/docs": path.join(__dirname, "docs"),
    };

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
          // Optimisation spécifique pour les CSS
          styles: {
            name: 'styles',
            test: /\.css$/,
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

      // Optimisation des polices
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name].[hash][ext]',
        },
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
      {
        source: '/sitemap-index.xml',
        destination: '/api/sitemap-index',
      },
    ];
  },
  async redirects() {
    return [
      // 🔧 SEO: Redirection www vers non-www (version canonique)
      // Force toutes les URLs www.shineandgo.be vers shineandgo.be pour éviter la duplication de contenu
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.shineandgo.be' }],
        destination: 'https://shineandgo.be/:path*',
        permanent: true, // 301 - Redirection permanente pour le SEO
      },

      // 🔧 SEO: Redirection HTTP vers HTTPS
      // Améliore la sécurité et le référencement
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://shineandgo.be/:path*',
        permanent: true, // 301 - Redirection permanente
      },

      // 🔧 SEO: Redirection /services vers page d'accueil
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },

      // 🔧 SEO: Redirection anciennes URLs "zone-intervention"
      // Ex: /zone-intervention/herve -> /lavage-voiture-herve
      {
        source: '/zone-intervention/:slug',
        destination: '/lavage-voiture-:slug',
        permanent: true,
      },
      {
        source: '/zone-intervention',
        destination: '/zones',
        permanent: true,
      },

      // 🔧 SEO: Redirection anciennes URLs "nettoyage-voiture"
      // Ex: /nettoyage-voiture-verviers -> /lavage-voiture-verviers
      {
        source: '/nettoyage-voiture-:slug',
        destination: '/lavage-voiture-:slug',
        permanent: true,
      },

      // 🔧 SEO: Redirection pages services nettoyage spécifiques (si elles existaient)
      {
        source: '/nettoyage-interieur-voiture',
        destination: '/lavage-interieur-voiture',
        permanent: true,
      },
      {
        source: '/nettoyage-exterieur-voiture',
        destination: '/lavage-exterieur-voiture',
        permanent: true,
      },
      {
        source: '/nettoyage-complet-voiture',
        destination: '/lavage-complet-voiture',
        permanent: true,
      },

      // 🔧 SEO: Redirects for other missing legacy pages
      {
        source: '/nettoyage-voiture',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://wa.me/32472303701', // Redirecting to WhatsApp as there is no contact page
        permanent: false, // Temporary until a contact page is built
      },

      // 🧹 SEO: Redirections pages locales supprimées vers /zones
      // Ces petits villages n'avaient pas assez de trafic pour justifier des pages dédiées
      { source: '/lavage-voiture-argenteau', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-aubel', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-bassenge', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-beyne-heusay', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-blegny', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-bolland', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-boncelles', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-charneux', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-chaudfontaine', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-clermont', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-dalhem', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-embourg', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-ensival', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-fleron', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-francorchamps', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-herstal', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-jalhay', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-lambermont', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-limbourg', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-melier', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-olne', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-oupeye', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-pepinster', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-rocourt', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-saive', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-sart', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-stavelot', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-thimister', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-trooz', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-vise', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-warsage', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-xhendelesse', destination: '/zones', permanent: true },

      // 🧹 SEO: Redirections supplémentaires (GSC Coverage Validation 2026-02-02)
      { source: '/lavage-voiture-battice', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-baelen', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-kelmis', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-amay', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-sprimont', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-vaals', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-saint-georges', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-huy', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-malmedy', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-waremme', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-waimes', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-wanze', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-esneux', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-engis', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-robertville', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-aix-la-chapelle', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-beaufays', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-welkenraedt', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-ovifat', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-verlaine', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-montzen', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-soumagne', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-raeren', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-gemmenich', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-remicourt', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-donceel', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-nessonvaux', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-trois-ponts', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-mouland', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-plombieres', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-eupen', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-remouchamps', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-flemalle', destination: '/zones', permanent: true },
      { source: '/lavage-voiture-jemeppe', destination: '/zones', permanent: true },

      // 🧹 SEO: Redirections pages supprimées
      { source: '/blog', destination: '/', permanent: true },
      { source: '/legal', destination: '/mentions-legales', permanent: true },
      { source: '/prix-nettoyage-voiture-domicile', destination: '/prix-lavage-voiture-domicile', permanent: true },
    ];
  },
};

module.exports = nextConfig;
