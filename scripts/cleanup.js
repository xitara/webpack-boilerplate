#!/usr/bin/env node

/* global
    require,
    process,
*/

import { execSync } from 'child_process';

try {
    console.log('Delete stats.json*');
    execSync('rm -f stats.json*');

    console.log('Delete manifest.json');
    execSync('rm -f manifest.json');

    console.log('Delete vendor');
    execSync('rm -fr vendor');

    console.log('Delete yarn*.lo*');
    execSync('rm -f yarn*.lo*');

    console.log('Delete composer.lock');
    execSync('rm -f composer.lock');

    console.log('Delete favicon.ico*');
    execSync('rm -f favicon.ico*');

    console.log('Delete assets');
    execSync('rm -fr assets');

    console.log('Delete theme.yaml*');
    execSync('rm -f theme.yaml*');

    console.log('Delete version.yaml*');
    execSync('rm -f version.yaml*');

    console.log('Delete config');
    execSync('rm -fr config');

    console.log('Delete index.html*');
    execSync('rm -f index.html*');

    console.log('Delete robots.txt');
    execSync('rm -f robots.txt');

    console.log('Delete assets-manifest.json*');
    execSync('rm -f assets-manifest.json*');

    console.log('Delete .husky');
    execSync('rm -fr .husky');

    console.log('Delete .docs');
    execSync('rm -fr .docs');

    console.log('Delete node_modules');
    execSync('rm -fr node_modules');
} catch (error) {
    console.error('Error remove files:', error);
    process.exit(1);
}
