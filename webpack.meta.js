import { version } from 'os';

/**
 * Define configuration
 * @param {Object} env
 * @param {Object} argv
 * @returns {Object}
 * @see https://webpack.js.org/configuration/configuration-types/
 */
export const config = {
    /**
     * entry: Relative to src directory - Entrypoint file
     * versionFile: Relative to entry directory - File to get version from
     * @type {Object}
     */
    entrypoints: {
        // 'user_datalayer-builder': {
        // entry: './ts/datalayer-builder/user.ts',
        // versionFile: 'UserDataLayerConfig.ts',
        // },
        'shoplytics_datalayer-builder-boilerplate': {
            entry: './ts/datalayer-builder/boilerplate.ts',
            versionFile: 'ShoplyticsDataLayerBoilerplateConfig.ts',
        },
        // 'shoplytics_datalayer-builder': './ts/datalayer-builder/app.ts',
        // 'shoplytics_datalayer-builder-modified': './ts/datalayer-builder/modified.ts',
        // 'shoplytics_datalayer-builder-bigcommerce': './ts/datalayer-builder/bigcommerce.ts',
        // 'shoplytics_datalayer-builder-xt-commerce': './ts/datalayer-builder/xt-commerce.ts',
        // 'shoplytics_datalayer-builder-joomla': './ts/datalayer-builder/joomla.ts',
        // 'shoplytics_datalayer-builder-shopware': './ts/datalayer-builder/shopware.ts',
        // 'shoplytics_datalayer-builder-woocommerce': './ts/datalayer-builder/woocommerce.ts',
        // 'shoplytics_datalayer-builder-plentymarkets': './ts/datalayer-builder/plentymarkets.ts',
        // 'shoplytics_datalayer-builder-shopify': './ts/datalayer-builder/shopify.ts',
        // 'shoplytics_datalayer-builder-thaigutschein': './ts/datalayer-builder/thaigutschein.ts',
        // shoplytics_consent_banner: './ts/shoplytics-consent-banner/app.ts',
        // shoplytics_form_autotracking: './js/shoplytics_form_autotracking.js',
        // pushDataLayer: './js/pushDataLayer.js',
        // customPixel: './ts/customPixel.ts',
        // app: `./js/app.js`,
        // app_ts: `./ts/app.ts`,
        // print: `./scss/print.scss`,
        // breakpoints: `./scss/breakpoints.scss`,
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
    library: '',

    /**
     * Define functions to keep unchanged in terser plugin
     * @type {Array}
     */
    reserveFunctions: ['app'],

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
