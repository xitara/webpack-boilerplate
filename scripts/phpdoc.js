#!/usr/bin/env node

import { spawn } from 'child_process';
import os from 'os';
import { promisify } from 'util';
import { exec } from 'child_process';

const execPromise = promisify(exec);

async function getProgramPath(program) {
    try {
        const command = os.platform() === 'win32' ? `where ${program}` : `which ${program}`;
        const { stdout } = await execPromise(command);
        return stdout.trim();
    } catch {
        throw new Error('Programm nicht gefunden.');
    }
}

async function runPhpDocumentor() {
    try {
        const fullPath = await getProgramPath('phpDocumentor.phar');
        console.log(`Gefunden unter: ${fullPath}`);

        // PHP-Prozess mit voller Ausgabe an die Bash übergeben
        const phpProcess = spawn('php', [fullPath], { stdio: 'inherit' });

        phpProcess.on('close', (code) => {
            console.log(`phpDocumentor wurde beendet mit Code ${code}`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

runPhpDocumentor();
