#!/bin/bash

. $(pwd)"/bash/config.sh"
. $(pwd)"/bash/deploy.sh"

lftp $FTP_HOST << EOF
    set ssl:verify-certificate false
    user $FTP_USER "$FTP_PASS"
    mirror \
        --reverse \
        --delete \
        --use-cache \
        --verbose \
        --allow-chown \
        --allow-suid \
        --no-umask \
        --parallel=10 \
        /$TARGET/$FILE $FTP_PATH
    bye
EOF
