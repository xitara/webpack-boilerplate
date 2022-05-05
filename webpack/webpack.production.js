'use strict';

const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const paths = require('./paths');
const glob = require('glob');

const production = {
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
            },
        }),
        new StatsWriterPlugin({ fields: null, filename: 'stats.json' }),
        new WebpackAssetsManifest(),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css",
            chunkFilename: "assets/css/[id].css"
        }),
        new CssoWebpackPlugin(),
        new CompressionPlugin({
            exclude: /\.yaml/,
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        // new PurgeCssPlugin({
            // paths: glob.sync(`${paths.src}{/**/*.htm,/**/*}`, { nodir: true }),
        // }),
    ],
    // devtool: 'source-map',
};

module.exports = production;
