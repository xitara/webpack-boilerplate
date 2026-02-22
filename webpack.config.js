import { merge } from 'webpack-merge';
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

    /** ===================================================================== */
    /**                            start of config                            */
    /** ===================================================================== */

    /**
     * Define entrypoints
     * @type {Object}
     */
    let config = {
        /**
         * Relative to src directory
         * @type {Object}
         */
        entrypoints: {
            // ambitop: './ts/ambitop.ts',
            // brokenhead: './ts/brokenhead.ts',
            'shop-raumweltenheiss': './ts/shop-raumweltenheiss.ts',
            // 'gold-silber-muenzen-shop': './ts/gold-silber-muenzen-shop.ts',
            // 'snippet-debugger': './ts/snippet-debugger.ts',
            // app: './ts/app.ts',
            // app: `./js/app.js`,
            // print: `./scss/print.scss`,
            // breakpoints: `./scss/breakpoints.scss`,
        },

        /**
         * Add additional entrypoints in development mode
         * @type {Object}
         */
        entrypointsDev: {
            // app1: './ts/app1.ts',
            // icon_list: `./scss/icon_list.scss`,
        },

        /**
         * Define library name
         * can b e overwritten by --lib FooBar
         * leave empty to disable
         * @type {string}
         */
        library: [],

        /**
         * Define functions to keep unchanged in terser plugin
         * @type {Array}
         */
        reserveFunctions: [''],

        /**
         * Define functions to remove in terser plugin
         * @type {Array}
         */
        removeFunctions: [],

        /**
         * Define console methods to remove
         * @type {Array}
         */
        removeConsoleMethods: [
            'assert',
            'clear',
            'count',
            'countReset',
            'debug',
            'dir',
            'dirxml',
            // "error",
            'group',
            'groupCollapsed',
            'groupEnd',
            'info',
            'log',
            'profile',
            'profileEnd',
            'table',
            'time',
            'timeEnd',
            'timeLog',
            'timeStamp',
            'trace',
            'warn',
        ],

        /**
         * Define source directory
         * @type {string}
         */
        sourceDir: 'src',

        /**
         * Define directory with static files
         * @type {string}
         */
        staticDir: 'static',

        /**
         * Define output directory
         * @type {string}
         */
        outputDir: 'assets',
    };
    /** ===================================================================== */
    /**                             end of config                             */
    /** ===================================================================== */

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
    Object.keys(argv.env).forEach((key) => {
        if (key.includes('WEBPACK_')) {
            delete argv.env[key];
        }
    });

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
