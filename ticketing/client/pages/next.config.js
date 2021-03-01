module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOption.poll = 300;
    return config;
  },
};
