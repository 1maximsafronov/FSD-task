const path = require(`path`);
const fs = require(`fs`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

const PATHS = {
  src: path.join(__dirname, `./src`),
  build: path.join(__dirname, `./build`),
};

const PAGES_DIR = PATHS.src + `/html/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(`.html`));

module.exports = {
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `js/main.js`,
    path: PATHS.build,
    publicPath: `/`,
  },
  devtool: `source-map`,
  devServer: {
    contentBase: PATHS.build,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: `pug-loader`,
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: `/node_modules/`,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: `file-loader`,
        exclude: `/src/fonts/`,
        options: {
          name: `[name].[ext]`,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: `file-loader`,
        exclude: `/src/img/`,
        options: {
          name: `[name].[ext]`,
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: `style-loader`,
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: `css-loader`,
            options: {
              sourceMap: true,
            },
          },
          {
            loader: `postcss-loader`,
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
          {
            loader: `sass-loader`,
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: `style-loader`,
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: `css-loader`,
            options: {
              sourceMap: true,
            },
          },
          {
            loader: `postcss-loader`,
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/style.css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PATHS.src + `/img`,
          to: `img`,
        },
        {
          from: PATHS.src + `/fonts`,
          to: `fonts`,
        },
      ],
    }),
    // new HtmlWebpackPlugin({
    //   hash: false,
    //   template: PATHS.src + '/index.html',
    //   filename: 'index.html',
    // }),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.html/, `.html`)}`,
        })
    ),
  ],
};
