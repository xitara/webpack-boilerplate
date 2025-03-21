#!/usr/bin/env node

import { exec } from 'child_process';
const args = process.argv.slice(2);

function runCommand(command) {
    return new Promise((resolve, reject) => {
        const childProcess = exec(command);

        childProcess.stdout.on('data', (data) => {
            console.log(data.toString().trim());
        });

        childProcess.stderr.on('data', (data) => {
            const lines = data.toString().split('\n');
            lines.forEach((line) => {
                if (line.includes('[webpack.Progress]')) {
                    line = line.replace(/\s*\[webpack.Progress\]\s*/, '');
                    line = line.replace('<s>', '').trim();

                    process.stdout.write(line + '\x1b[0G');
                }
            });
        });
        childProcess.on('exit', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command "${command}" failed with exit code ${code}`));
            }
        });
    });
}

async function main() {
    try {
        await runCommand(`yarn dbuild ${args.join(' ')}`);
        await runCommand(`yarn build ${args.join(' ')} --rf`);
    } catch (error) {
        console.error('Error executing script: ', error);
    }
}

main();
