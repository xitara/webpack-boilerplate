import { WebpackAssetsManifest } from 'webpack-assets-manifest';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CssoWebpackPlugin from 'csso-webpack-plugin';
import { StatsWriterPlugin } from 'webpack-stats-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';

/**
 * Production configuration
 * @param {Object} config
 * @returns
 */
export const production = (config) => {
    /**
     * Create RegEx pattern to exclude dev entrypoints from minification
     */
    // const filePattern = Object.keys(config.entrypointsDev).length
    //     ? new RegExp(
    //           Object.values(config.entrypointsDev)
    //               .map((file) => {
    //                   const fileName = file.split('/').pop();
    //                   return fileName.replace('.ts', '.js').replace('.scss', '.css');
    //               })
    //               .map((name) => name.replace(/\./g, '\\.'))
    //               .join('|')
    //       )
    //     : undefined;

    // console.log('Removing functions type:', typeof config.removeFunctions);
    // console.log('Removing functions:', config.removeFunctions);

    return {
        optimization: {
            minimize: true,
            minimizer: [
                // new TerserPlugin({
                //     terserOptions: {
                //         format: {
                //             beautify: true,
                //         },
                //         mangle: {
                //             reserved: config.reserveFunctions,
                //         },
                //         compress: {
                //             pure_funcs:
                //                 process.custom['remove-functions'] === true ||
                //                 process.custom['rf'] === true
                //                     ? config.removeFunctions
                //                     : [],
                //         },
                //     },
                //     include: filePattern,
                // }),
                new TerserPlugin({
                    terserOptions: {
                        compress: true,
                        mangle: {
                            reserved: config.reserveFunctions,
                        },
                        compress: {
                            // pure_funcs: ['console.log'],
                            pure_funcs:
                                process.custom['remove-functions'] === true ||
                                process.custom['rf'] === true
                                    ? config.removeFunctions
                                    : [],
                        },
                    },
                    // exclude: filePattern,
                }),
            ],
        },
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
                filename: 'css/[name].css',
                chunkFilename: 'css/[id].css',
            }),
            new CssoWebpackPlugin.default(),
        ],
    };
};
