import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "rc-util/es/utils/get": require.resolve("rc-util/es/utils/get"),
    };
    return config;
  },
};

export default nextConfig;
