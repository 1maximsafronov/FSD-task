const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './public'),
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true
        }
      },
      {
       test: /\.scss$/,
       use: [
         'style-loader',
         MiniCssExtractPlugin.loader,
         {
           loader: 'css-loader',
           options: { sourceMap: true }
         }, {
           loader: 'sass-loader',
           options: { sourceMap: true }
         }
       ]
      },
      {
        test: /\.(woff|woff2|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: "index.html"
    }),
  ],
};
