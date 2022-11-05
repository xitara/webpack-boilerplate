const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TailwindCSS = require('tailwindcss');
const paths = require('./paths');
// const glob = require('glob');

module.exports = {
    context: paths.src,
    entry: {
        app: `./js/app.js`,
        print: `./scss/print.scss`,
        breakpoints: `./scss/breakpoints.scss`,
    },
    output: {
        filename: `assets/js/[name].js`,
        path: paths.build,
    },
    resolve: {
        symlinks: false,
    },
    cache: {
        type: 'memory',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            url: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                sourceMap: true,
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                    require('postcss-flexbugs-fixes'),
                                ],
                                postCss: [
                                    TailwindCSS('tailwind.config.js'),
                                ],
                                processCssUrls: false,
                            },
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
                        publicPath: 'assets/fonts',
                        outputPath: 'assets',
                        name: '[path][name].[ext]',
                        esModule: false,
                    },
                },
            },
            {
                test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: 'assets/images',
                        outputPath: 'assets',
                        name: '[path][name].[ext]',
                        esModule: false,
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: 'assets/css/[name].[id].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: paths.static },
            ]
        }),
    ],
};
