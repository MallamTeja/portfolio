/** @type {import('next').NextConfig} */
// Next.js server configuration file
// This file contains all server-side configuration options for the portfolio application
const nextConfig = {
  // Define server-side redirects that happen before a request is completed
  async redirects() {
    return [
      {
        source: "/admin", // Redirect from /admin path
        destination: "https://app.forestry.io/login", // External destination URL
        permanent: true, // 308 permanent redirect (good for SEO)
        basePath: false, // Don't apply basePath to this redirect
      },
    ];
  },
  // Define URL rewrites for mapping one URL to another without changing the visible URL
  async rewrites() {
    return [
      {
        source: "/favicon.ico", // When user requests /favicon.ico
        destination: "/favicons/favicon.ico", // Serve from /favicons/ directory instead
      },
    ];
  },
  
  // File extensions that Next.js should treat as pages
  // This allows TypeScript, JavaScript, Markdown, MDX, and HTML files to be used as pages
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  
  // Enable React Strict Mode for better development practices and warnings
  reactStrictMode: true,
  
  // Add trailing slashes to URLs (e.g., /about becomes /about/)
  trailingSlash: true,
  
  // Static export configuration for generating static HTML files
  output: 'export', // Export as static HTML (no Node.js server required)
  assetPrefix: '.', // Use relative paths for assets
  basePath: '', // No base path prefix for the application
  
  // Image optimization settings for Next.js Image component
  images: {
    unoptimized: true, // Disable image optimization (required for static export)
    dangerouslyAllowSVG: true, // Allow SVG images (be careful with untrusted sources)
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // CSP for SVG files to prevent XSS attacks
    // Legacy domains list for external image sources (deprecated in favor of remotePatterns)
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'cdn.simpleicons.org',
      'upload.wikimedia.org',
      'cdn-icons-png.flaticon.com',
      'cdn.worldvectorlogo.com',
      'seaborn.pydata.org',
      'pytorch.org'
    ],
    // Modern way to specify allowed external image sources with more fine-grained control
    remotePatterns: [
      {
        protocol: 'https', // Only allow HTTPS protocol
        hostname: 'raw.githubusercontent.com', // GitHub raw content
        pathname: '/**' // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'github.com', // GitHub main site
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org', // Simple Icons CDN for brand icons
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // Wikimedia image uploads
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com', // Flaticon CDN for icons
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com', // World Vector Logo CDN
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'seaborn.pydata.org', // Seaborn documentation images
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'pytorch.org', // PyTorch documentation images
        pathname: '/**'
      }
    ]
  },
  
  // Next.js compiler options for build-time optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" // Remove console.* calls in production for better performance
  },
  
  // Custom webpack configuration to extend the default build behavior
  webpack: (config, { isServer }) => {
    // Polyfill Node.js modules for client-side bundles
    // Some npm packages try to use Node.js built-in modules which don't exist in the browser
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // File system module not available in browser
        path: false, // Path module not available in browser
        os: false // Operating system module not available in browser
      };
    }

    // Add SVGR loader to transform SVG files into React components
    // This allows importing SVG files as JSX components
    config.module.rules.push({
      test: /\.svg$/i, // Match .svg files
      issuer: /\.[jt]sx?$/, // Only for files imported from .js, .jsx, .ts, or .tsx
      use: [
        {
          loader: '@svgr/webpack', // Use SVGR webpack loader
          options: {
            svgo: false, // Disable SVGO optimization (keep original SVG)
            titleProp: true // Add title prop for accessibility
          }
        }
      ]
    });

    // Return the modified webpack configuration
    return config;
  }
};

// Export the Next.js configuration object for use by the Next.js framework
module.exports = nextConfig;
