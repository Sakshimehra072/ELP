import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['edmy-react.hibootstrap.com', 'img.freepik.com'], // Add all external domains used for images
  },
};

export default nextConfig;





// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
