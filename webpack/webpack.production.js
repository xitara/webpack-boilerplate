'use strict';

const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
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
        // new PurgeCssPlugin({
            // paths: glob.sync(`**/*.htm*`),
            // defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        // }),
    ],
    // devtool: 'source-map',
};

module.exports = production;
