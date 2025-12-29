import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
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

  // Configuration Turbopack (remplace experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
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
      // Redirection www vers non-www (version canonique)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.shineandgo.be' }],
        destination: 'https://shineandgo.be/:path*',
        permanent: true, // 301
      },

      // 1. ANCIENNES URLs ZONE (ex: /zone-intervention/herve)
      {
        source: '/zone-intervention/:city',
        destination: '/lavage-voiture-:city',
        permanent: true,
      },
      // Gestion des extensions .html
      {
        source: '/zone-intervention/:city.html',
        destination: '/lavage-voiture-:city',
        permanent: true,
      },
      // Root /zone-intervention -> /zones
      {
        source: '/zone-intervention',
        destination: '/zones',
        permanent: true,
      },

      // 2. ANCIENNES URLs NETTOYAGE (ex: /nettoyage-voiture-spa)
      // Note: Le paramètre :slug prendra "spa" dans "nettoyage-voiture-spa"
      // SI la source est /nettoyage-voiture-:slug, cela matche /nettoyage-voiture-spa ??
      // NON, Next.js route matching is path segment based usually.
      // Mais :slug peut matcher le reste.
      // Si la page est /nettoyage-voiture-spa, c'est un seul segment.
      // Donc je dois utiliser une regex pour capturer la fin.
      {
        source: '/nettoyage-voiture-:city',
        destination: '/lavage-voiture-:city',
        permanent: true,
      },
      // Et pour .html
      {
        source: '/nettoyage-voiture-:city.html',
        destination: '/lavage-voiture-:city',
        permanent: true,
      },

      // 3. ANCIENNES URLs CAR-WASH (ex: /car-wash-verviers)
      {
        source: '/car-wash-:city',
        destination: '/lavage-voiture-:city',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
