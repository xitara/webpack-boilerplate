#!/usr/bin/env node

/* global
    require,
    process,
*/

import { execSync } from 'child_process';
import fs from 'fs';

if (fs.existsSync('./composer.json')) {
    try {
        // eslint-disable-next-line no-console
        console.log('Run composer install');
        execSync('composer install');
    } catch (error) {
        console.error('Error running composer install:', error);
        process.exit(1);
    }
} else {
    // eslint-disable-next-line no-console
    console.log('No composer.json found. Nothing to do.');
}
