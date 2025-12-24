const { execSync } = require('child_process');
const { resolve } = require('path');

/**
 * Get the custom parameter from the command line arguments
 */
let args = process.argv.slice(2);

// console.log('args:', args);

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
        // console.log('arg:', arg);

        arg = arg.replace('--', '');

        // if (arg.includes('=')) {
        // let [key, value] = arg.split('=');

        // console.log('key:', key);
        // console.log('value:', value);

        // customArgs.push(arg);
        // process.env[key] = value;
        // }

        if (args[i + 1] && !args[i + 1].includes('--')) {
            // console.log('args[i + 1]:', args[i + 1]);

            // process.env[arg] = args[i + 1];
            customArgs.push(arg + '=' + args[i + 1]);
            i++;
        } else {
            customArgs.push(arg);
            // process.env[arg] = true;
        }
    }
});

/**
 * Path to the webpack binary
 * @type {string}
 */
const webpackPath = resolve(__dirname, '../node_modules/.bin/webpack');

// console.log('webpack:', webpackPath, webpackArgs.join(' '), '--env ' + customArgs.join(' '));
// console.log('customArgs:', customArgs);
console.log(
    `${webpackPath} ${webpackArgs.join(' ')}${customArgs.length > 0 ? ' --env' : ''} ${customArgs.join(' ')}`
);

// console.log('ENV:', process.env);

// return;

/**
 * Start webpack with the remaining arguments
 * @type {string}
 */
execSync(
    `${webpackPath} ${webpackArgs.join(' ')}${customArgs.length > 0 ? ' --env' : ''} ${customArgs.join(' ')}`,
    {
        stdio: 'inherit',
    }
);
