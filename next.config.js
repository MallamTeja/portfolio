/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://app.forestry.io/login",
        permanent: true,
        basePath: false,
      },
    ];
  },
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  assetPrefix: '.',
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['cdn.simpleicons.org'], // Keep for backward compatibility
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack(config) {
    // Find the existing file loader rule
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test && rule.test.test('.svg')
    );

    // Exclude SVG from the default file loader
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            titleProp: true,
          },
        },
      ],
    });

    // Handle SVG in CSS/SCSS files
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(css|scss)$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
