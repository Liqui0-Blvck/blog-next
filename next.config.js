/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        hostname: 'media.graphassets.com'
      }
    ]
  }
}
