/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // KEEPING your existing allowed domain
      {
        protocol: "https",
        hostname: "pro-bucket.s3.us-east-1.amazonaws.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "https://ibb.co.com",
      // },
      // ADD THIS NEW OBJECT for the testimonial images
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // ADD THIS LINE TO HIDE THE DEVELOPMENT STATUS BADGE
  devIndicators: false,
};

module.exports = nextConfig;
