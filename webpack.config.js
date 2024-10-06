const path = require('path');

module.exports = {
  entry: './cypress/support/index.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'cypress/dist'),
    filename: 'output.js'
  }
};
