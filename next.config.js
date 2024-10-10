/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false, // React Strict Mode can help identify potential performance issues (off for build)
  output: "standalone", // use for docker
  experimental: {
    //Optimize package imports
    optimizePackageImports: ["framer-motion"], // Opt
  },
  images: {
    // domains: ['localhost'],
    formats: ["image/webp"],
    remotePatterns: [
      //For NextImage
      {
        protocol: "https",
        hostname: "down-vn.img.susercontent.com",
        port: "",
        pathname: "/file/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/backend/api/:path*",
        destination: `${process.env.BACKEND_URL || "http://localhost:<BE-PORT>"}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
