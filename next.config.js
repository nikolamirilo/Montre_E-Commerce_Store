/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {hostname:'res.cloudinary.com'},
          {hostname:"retailbd.com"},
          {hostname:"th.bing.com"},
          {hostname:"media.licdn.com"},
          {hostname:"cdn.shopify.com"},
        ]
      },
      serverActions: {
        bodySizeLimit: '5mb',
      },
}
module.exports = nextConfig
