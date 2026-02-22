#!/usr/bin/env node

/* global
    require,
    __dirname,
    module,
*/

// config.js

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const STORAGE = [
    '*.php',
    'assets',
    'backend',
    'behaviors',
    'classes',
    'components',
    'config',
    'console',
    'controllers',
    'factories',
    'lang',
    'models',
    'partials',
    'plugin.yaml',
    'reportwidgets',
    'traits',
    'updates',
    'vendor',
    'views',
    '*manifest.json*',
    'content',
    'favicon.ico*',
    'layouts',
    'meta',
    'pages',
    'robots.txt',
    'theme.yaml',
    'version.yaml',
];

const FILE = packageJson.name;
const VERSION = packageJson.version;

const TARGET = path.resolve(__dirname, '..');

const ftp = {
    host: '',
    port: '',
    user: '',
    pass: '',
    path: '',
};

module.exports = {
    STORAGE,
    FILE,
    VERSION,
    TARGET,
    ftp,
};
