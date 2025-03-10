/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any other image domains you'll use
  },
  // Enable webpack transpiling for mapbox-gl
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    // Add worker-loader
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/,
      loader: 'worker-loader',
      options: {
        filename: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    });

    return config;
  },
  // Add these lines to explicitly set the port
  server: {
    port: 3000, // Default Next.js port
    host: 'localhost',
  },
  transpilePackages: ['leaflet', 'leaflet-side-by-side'],
};

module.exports = nextConfig; 