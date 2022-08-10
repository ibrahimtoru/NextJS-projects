/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "wadanKhan",
        mongodb_password: "toruKhan123",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "wadanKhan",
      mongodb_password: "toruKhan123",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-site-dev",
    },
  };
};

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;
