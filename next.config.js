/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/OussamaBengoudifa",
  assetPrefix: "/OussamaBengoudifa",
};

module.exports = nextConfig;
