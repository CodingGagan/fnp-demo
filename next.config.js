module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, BuildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/server/pages/about.html' }
    }
  },
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: ['www.fnp.com'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // basePath: 'http://localhost:3000/',
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'images',
      },
    });
    return config;
  }
};
