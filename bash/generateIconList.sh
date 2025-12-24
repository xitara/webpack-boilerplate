#!/usr/bin/env bash

# pathes relative to plugin-root, while called with 'yarn iconlist'
SOURCE_FILE="assets/css/icon_list.css"
TARGET_FILE="assets/meta/icons.yaml"

if [ -f $SOURCE_FILE ]; then
    # empty target file
    true > $TARGET_FILE

    while IFS= read -r line; do
        if [ "${line:0:3}" != '/*!' ] && [ "${line:0:3}" != '/*#' ] && [ "${line:0:2}" == '/*' ]; then
            echo "$line" | sed 's/\/\*//' | sed 's/\*\///'
            echo "$line" | sed 's/\/\*//' | sed 's/\*\///' >> $TARGET_FILE
        fi
    done < $SOURCE_FILE
else
    echo $SOURCE_FILE not exists
fi
