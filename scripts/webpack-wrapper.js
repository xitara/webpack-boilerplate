/**
 * Webpack wrapper script to handle custom parameters and invoke webpack accordingly.
 * Reads entrypoints from webpack.meta.js and builds each one separately
 * including versioning.
 */
import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { config } from '../webpack.meta.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Get version from config file
 *
 * @param {string} configFile
 * @returns {string} version
 */
const getVersion = (configFile) => {
    console.log(configFile);

    const content = fs.readFileSync(configFile, 'utf8');
    const match = /version\s*:\s*['"]([^'"]+)['"]/.exec(content);
    return match ? match[1] : '0.0.1';
};

/**
 * Get the custom parameter from the command line arguments
 */
let args = process.argv.slice(2);

/**
 * Define params ti filter 'cause they are natic webpack params
 */
let nativeParams = [
    '--analyze',
    '--color',
    '--config',
    '--config-name',
    '--config-node-env',
    '--devtool',
    '--disable-interpret',
    '--entry',
    '--env',
    '--extends',
    '--fail-on-warnings',
    '--help',
    '--json',
    '--merge',
    '--mode',
    '--name',
    '--no-color',
    '--no-devtool',
    '--no-hot',
    '--no-stats',
    '--no-watch',
    '--no-watch-options-stdin',
    '--output-path',
    '--progress',
    '--stats',
    '--target',
    '--version',
    '--watch',
    '--watch-options-stdin',
    '-c',
    '-d',
    '-e',
    '-j',
    '-m',
    '-o',
    '-t',
    '-v',
    '-w',
];

/**
 * Write args in object
 */
// let param = [];
let webpackArgs = [];
let customArgs = [];
args.forEach((arg, i) => {
    if (nativeParams.includes(arg)) {
        // console.log('arg::', arg);

        // Check if args[i + 1] has no --, then concat arg with args[i + 1] as string
        if (args[i + 1] && !args[i + 1].includes('--')) {
            // console.log('args[i + 1]', args[i + 1]);

            arg += ' ' + args[i + 1];
            i++;
        }

        webpackArgs.push(arg);
        return;
    }

    if (arg.includes('--')) {
        arg = arg.replace('--', '');

        if (args[i + 1] && !args[i + 1].includes('--')) {
            customArgs.push(arg + '=' + args[i + 1]);
            i++;
        } else {
            customArgs.push(arg);
        }
    }
});

/**
 * Path to the webpack binary
 * @type {string}
 */
const webpackPath = resolve(__dirname, '../node_modules/.bin/webpack');

console.log(
    `"${webpackPath}" ${webpackArgs.join(' ')}${customArgs.length > 0 ? ' --env' : ''} ${customArgs.join(' ')}`
);

/**
 * Start webpack with the remaining arguments
 * @type {string}
 */
Object.entries(config.entrypoints).forEach(([name, entrypoint]) => {
    console.log(`Entrypoint: ${name} -> ${entrypoint}`);

    /**
     * Add Version to custom args
     */
    let actVersion = '0.0.1-dev';

    // console.log(config.sourceDir);
    // console.log(entrypoint.entry);
    // console.log(dirname(entrypoint.entry));

    if (typeof entrypoint === 'object' && entrypoint.versionFile) {
        actVersion = getVersion(
            './' + config.sourceDir + '/' + dirname(entrypoint.entry) + '/' + entrypoint.versionFile
        );
    }

    // switch (name) {
    //     case 'user_datalayer-builder':
    //         actVersion = getVersion('UserDataLayerConfig');
    //         break;
    //     case 'shoplytics_datalayer-builder-boilerplate':
    //         actVersion = getVersion('ShoplyticsDataLayerBoilerplateConfig');
    //         break;
    //     default:
    // }

    // console.log('actVersion', actVersion);

    customArgs.push(`VERSION=${actVersion}`);
    customArgs.push(`ENTRYPOINT=${name}`);

    // console.log('customArgs', customArgs);

    execSync(
        `"${webpackPath}" ${webpackArgs.join(' ')}${customArgs.length > 0 ? ' --env' : ''} ${customArgs.join(' ')}`,
        {
            stdio: 'inherit',
        }
    );
});
