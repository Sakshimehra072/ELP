/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "randomuser.me", "images.unsplash.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
