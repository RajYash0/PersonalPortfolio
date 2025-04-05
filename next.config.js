/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  assetPrefix: "",
  reactStrictMode: true,
  output: "standalone", // Optional: if you need a standalone build
  experimental: {
    appDir: true, // Ensure this matches your usage
  },
};

module.exports = nextConfig;
