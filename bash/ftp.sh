#!/usr/bin/env bash

. $(pwd)"/bash/config.sh"
. $(pwd)"/bash/deploy.sh"

 if [ "$FTP_PORT" = "" ]; then
    FTP_PORT=21
fi

lftp $FTP_HOST -p $FTP_PORT << EOF
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

rm $TARGET/$FILE -Rfv
