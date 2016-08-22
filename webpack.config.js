import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/src/main.js'),
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
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
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
