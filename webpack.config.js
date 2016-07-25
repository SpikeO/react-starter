var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
      {
        test:   /\.scss$/,
        loader: "style-loader!css-loader?modules!postcss-loader!sass-loader"
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  }
};
module.exports = config;