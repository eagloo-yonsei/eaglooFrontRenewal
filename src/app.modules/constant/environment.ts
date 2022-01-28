/* SSR */
const processEnv = process.env.EAGLOO_NODE_ENV;

export const isTestEnvironment =
  processEnv === 'development' || processEnv === 'development-qa';
