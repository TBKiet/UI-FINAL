/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Optimizes for containerized environments like Railway
  images: {
    domains: [
      'lh3.googleusercontent.com', 
      'res.cloudinary.com',
      'railway.app',
      'web-production-e2973.up.railway.app'
    ],
  },
};

export default nextConfig; 