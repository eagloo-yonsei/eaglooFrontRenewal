const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['urlencoded-body-parser']);

const processEnv = process.env;

const NEXT_CONFIG = {
  distDir: './.next',
  swcMinify: true,

  webpack: (config) => {
    config.resolve.modules = [...config.resolve.modules, '../src'];
    return config;
  },

  env: {
    EAGLOO_NODE_ENV: processEnv.EAGLOO_NODE_ENV,
    EAGLOO_API_URI: processEnv.EAGLOO_API_URI,
  },
};

const PLUGINS = [[withTM]];

module.exports = withPlugins(PLUGINS, NEXT_CONFIG);
