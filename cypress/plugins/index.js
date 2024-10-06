const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../../webpack.config.js'),
    watch: false,
  };

  on('file:preprocessor', webpack(options));

  // Mochawesome plugin setup
  require('cypress-mochawesome-reporter/plugin')(on);
  
  return config; // Ensure to return the config
};
