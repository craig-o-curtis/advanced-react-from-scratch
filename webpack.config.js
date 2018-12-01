const path = require('path');

const config = {
  // entry: ['babel-polyfill', './lib/renderers/dom.js'], // absolute
  // when encounters require or import, use these paths:
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: ['babel-polyfill', 'renderers/dom.js'], // relative
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js$)/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;