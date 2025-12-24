#!/usr/bin/env node

/* global
    require,
    process,
    __dirname,
*/

const { execSync } = require('child_process');
const path = require('path');

const configPath = path.join(__dirname, 'bash', 'config.sh');
const deployPath = path.join(__dirname, 'bash', 'deploy.sh');
const { FTP_HOST, FTP_PORT, FTP_USER, FTP_PASS, FTP_PATH, TARGET, FILE } = require(configPath);

function setDefaultFtpPort() {
    if (!FTP_PORT) {
        FTP_PORT = 21;
    }
}

function deployUsingLftp() {
    const lftpCommand =
        `set ssl:verify-certificate false\n` +
        `user ${FTP_USER} "${FTP_PASS}"\n` +
        `mirror --reverse --delete --use-cache --verbose --allow-chown --allow-suid --no-umask --parallel=10 /${TARGET}/${FILE} ${FTP_PATH}\n` +
        `bye`;

    try {
        execSync(`echo -e "${lftpCommand}" | lftp ${FTP_HOST} -p ${FTP_PORT}`, {
            stdio: 'inherit',
        });
    } catch (error) {
        console.error('Error deploying using lftp:', error);
        process.exit(1);
    }
}

function cleanup() {
    try {
        execSync(`rm ${path.join(TARGET, FILE)} -Rfv`);
    } catch (error) {
        console.error('Error cleaning up:', error);
        process.exit(1);
    }
}

setDefaultFtpPort();
deployUsingLftp();
cleanup();
