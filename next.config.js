/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
  typescript:{
    ignoreBuildErrors:true
  },
  webpack5: false,
  // resolve: {
  //   extensions: [".ts", ".tsx", ".js"]
  // },

}
