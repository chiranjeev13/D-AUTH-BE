/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gateway.pinata.cloud",
        port: "",
        pathname:
          "/ipfs/QmU7mcwuiPdtHVSHZdcHhQKAtbMNnVLK49D8zJiVF7v6Ax/DAU.gif",
      },
    ],
  },
};
module.exports = nextConfig;
