/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "retailbd.com" },
      { hostname: "th.bing.com" },
      { hostname: "media.licdn.com" },
      { hostname: "cdn.shopify.com" },
      { hostname: "img.clerk.com" },
      { hostname: "wallpapercave.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
  swcMinify: true,
  productionBrowserSourceMaps: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://www.montre-shop.com/:path*",
      },
    ]
  },
}
module.exports = nextConfig
