/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "placehold.co",
        hostname: "pro-bucket.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
