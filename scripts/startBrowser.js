#!/usr/bin/env node

import { exec } from 'child_process';
import os from 'os';

if (process.argv.length < 3) {
    console.error('Must run command with the URL you want to visit.');
    process.exit(1);
}

const URL = process.argv[2];

const openBrowser = (command) => {
    exec(command, (error) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        console.log(`Opening browser with URL: ${URL}`);
    });
};

if (process.env.BROWSER) {
    // Falls die Umgebungsvariable BROWSER gesetzt ist, wird sie verwendet.
    openBrowser(`${process.env.BROWSER} ${URL}`);
} else {
    const platform = os.platform();

    if (platform === 'win32') {
        // Windows nutzt `start` (Wichtig: URL in doppelte Anführungszeichen setzen!)
        openBrowser(`start "" "${URL}"`);
    } else if (platform === 'darwin') {
        // macOS nutzt `open`
        openBrowser(`open "${URL}"`);
    } else {
        // Linux sucht nach `xdg-open` oder `gnome-open`
        exec('which xdg-open || which gnome-open', (error, stdout) => {
            if (stdout) {
                openBrowser(`${stdout.trim()} "${URL}"`);
            } else {
                console.error("Can't find any browser");
            }
        });
    }
}
