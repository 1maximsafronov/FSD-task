const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: {
    'css/style.css':'./src/sass/style.scss'
  },
  output: {
    filename: 'index.html',
    path: path.join(__dirname, '/public/'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
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
         },
         {
           loader: 'sass-loader',
           options: { sourceMap: true}
         }
       ]
      },
      {
        test: /\.(woff|woff2|ttf|svg)$/,
        loader: 'file-loader',
        exclude: '/src/img/',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        exclude: '/src/fonts/',
        options: {
          name: '[name].[ext]'
        }
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/fonts/'),
        to: path.resolve(__dirname, 'public/fonts/'),
      },
      {
        from: path.resolve(__dirname, 'src/img'),
        to: path.resolve(__dirname, 'public/img'),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/search-room.pug',
      filename: "search-room.html"
    }),
  ],
};
