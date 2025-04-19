/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  //basePath: "/callmelaura",
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
