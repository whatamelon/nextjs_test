/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
  typescript:{
    ignoreBuildErrors:true
  }
  // resolve: {
  //   extensions: [".ts", ".tsx", ".js"]
  // },

}
