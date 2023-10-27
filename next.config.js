/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    serverActions: true
  },
    images: {
        domains: ['res.cloudinary.com',"www.androidcentral.com", "th.bing.com", "media.licdn.com"]
      },
}
module.exports = nextConfig
