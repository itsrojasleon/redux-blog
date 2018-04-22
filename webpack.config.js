const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'stylus-loader'],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images/',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    htmlWebpackPlugin,
    new ExtractTextPlugin('index.css'),
  ],
};
