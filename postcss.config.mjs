/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
    // Optimisations de performance CSS (production uniquement)
    ...(process.env.NODE_ENV === 'production' && {
      'cssnano': {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifyGradients: true,
          minifyParams: true,
          minifySelectors: true,
          mergeLonghand: true,
          mergeRules: true,
          reduceIdents: false, // Garder les identifiants pour éviter les conflits
          reduceInitial: true,
          reduceTransforms: true,
          uniqueSelectors: true,
          zindex: false, // Éviter les problèmes avec les z-index
        }]
      },
      'postcss-font-display': {
        display: 'swap',
      },
      'postcss-sort-media-queries': {
        sort: 'mobile-first',
      },
    }),
  },
}

export default config
