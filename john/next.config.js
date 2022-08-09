/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      'i.picsum.photos',
      'ifh.cc/g',
      's3.us-west-2.amazonaws.com',
    ],
    format: ['image/png', 'image/webp', 'image/jpeg', 'image/jpg']
  },
}

module.exports = nextConfig
