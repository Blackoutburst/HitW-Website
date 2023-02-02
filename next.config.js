/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['visage.surgeplay.com'],
},
}

module.exports = nextConfig
