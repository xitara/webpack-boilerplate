const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

module.exports = {
  context: paths.src,
  entry: {
    app: `./js/app.js`,
  },
  output: {
    filename: `js/[name].[hash:8].js`,
    path: paths.build,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer'), require('postcss-flexbugs-fixes')],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../fonts',
            outputPath: 'fonts',
            name: '[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../images',
            outputPath: 'images',
            name: '[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'scss/[name].[hash:8].css',
    }),
    new CopyWebpackPlugin([{ from: paths.static }]),
  ],
};
