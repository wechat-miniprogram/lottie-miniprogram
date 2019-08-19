const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'commonjs',
    filename: 'index.js',
    path: path.resolve(__dirname, 'miniprogram_dist'),
  },
  devtool: '',
  module: {
    rules: [{
      test: /\.js$/i,
      use: [{
        loader: 'eslint-loader',
      }, {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      }],
      exclude: /node_modules/
    }, {
      test: /\.js$/i,
      loader: 'string-replace-loader',
      options: {
        search: '__[STANDALONE]__',
        replace: '',
      }
    }]
  },
  plugins: [],
}
