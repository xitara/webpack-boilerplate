/**
 * Change configs in webpack.meta.js
 * This file merges common configuration with environment specific configuration
 */

import { merge } from 'webpack-merge';
import { config } from './webpack.meta.js';
import { commonConfig } from './webpack/webpack.common.js';
import { production } from './webpack/webpack.production.js';
import { development } from './webpack/webpack.development.js';

/**
 * Define configuration
 * @param {Object} env
 * @param {Object} argv
 * @returns {Object}
 * @see https://webpack.js.org/configuration/configuration-types/
 */
export default (env, argv) => {
    /**
     * Check if mode is set
     */
    if (!argv.mode) {
        throw new Error('You must pass an --mode flag into your build for webpack to work!');
    }

    /**
     * Add additional entrypoints in development mode
     */
    config.entrypoints = {
        ...config.entrypoints,
        ...config.entrypointsDev,
    };

    /**
     *  Remove all console.xxx methods
     */
    config.removeFunctions += config.removeConsoleMethods.map((method) => `console.${method}`);

    /**
     * Convert to array if it is a string
     */
    if (typeof config.removeFunctions === 'string') {
        config.removeFunctions = config.removeFunctions.split(',');
    }

    /**
     * Define configuration for different environments
     */
    const configs = {
        production: production,
        development: development,
    };

    /**
     * Remove all entries from argv.env that key includes WEBPACK_
     */
    if (argv.env && typeof argv.env === 'object') {
        Object.keys(argv.env).forEach((key) => {
            if (key.includes('WEBPACK_')) {
                delete argv.env[key];
            }
        });
    }

    /**
     *
     */
    process.custom = argv.env;
    process.env.NODE_ENV = argv.mode;

    /**
     * Merge common configuration with environment specific configuration
     */
    const envConfig = configs[argv.mode](config);

    /**
     * Merge common configuration with environment specific configuration
     */
    return merge(commonConfig(config, process), envConfig);
};
