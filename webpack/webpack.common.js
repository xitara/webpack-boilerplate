import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import TailwindCSS from '@tailwindcss/postcss7-compat'; // Update import
import fs from 'fs';
import path from 'path';

/**
 * Common configuration
 * @param {Object} config
 * @param {Object} process
 * @returns {Object}
 */
export const commonConfig = (config, process) => {
    /**
     * Define app directory
     */
    const appDirectory = fs.realpathSync(process.cwd());
    const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

    console.log(config.entrypoints);

    /**
     * Define parameters
     */
    const mode = process.env.NODE_ENV;
    const lib = process.custom.lib
        ? process.custom.lib
        : config.library != ''
          ? config.library
          : undefined;

    /**
     * Define common configuration
     */
    return {
        context: resolveApp(config.sourceDir),
        entry: config.entrypoints,
        output: {
            filename: `js/[name]${mode == 'development' ? '.debug' : ''}.js`,
            devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]',
            path: resolveApp(config.outputDir),
            // Example:
            // export const init = () => {}
            // Call: [lib].init();
            library: lib
                ? {
                      name: lib,
                      type: 'var',
                  }
                : undefined,
        },
        resolve: {
            symlinks: false,
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
                        enforce: true,
                    },
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.ts?$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
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
                                        'autoprefixer',
                                        'postcss-flexbugs-fixes',
                                        TailwindCSS('./tailwind.config.cjs'), // Update path to .cjs file
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
                filename: 'css/[name].css',
                chunkFilename: 'assets/css/[name].[id].css',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: config.staticDir,
                        noErrorOnMissing: true,
                        globOptions: {
                            dot: true,
                            gitignore: false,
                            ignore: ['**/README.md'],
                        },
                    },
                ],
            }),
        ],
    };
};
