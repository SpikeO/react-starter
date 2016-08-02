const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const config = {
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
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
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
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
      path.join(__dirname, 'node_modules', 'src'),
    ],
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  postcss: function postcssSetup() {
    return [
      precss,
      autoprefixer({
        browsers: ['last 3 versions']
      })];
  }
};
module.exports = config;
