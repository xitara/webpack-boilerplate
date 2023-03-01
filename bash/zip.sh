#!/usr/bin/env bash

. $(pwd)"/bash/config.sh"

TMP_PATH=$(echo `pwd` | awk -F / -v OFS=/ '{ print $(NF-1), $NF }')
TARGET_FILE=$FILE
# TARGET_FILE=$(echo $FILE | cut -d '-' -f2)

yarn build

MYDATE=$(date +"%Y-%m-%d_%H%M%S")
TMP_TARGET="/tmp"

if [ -d "$TMP_TARGET/$TMP_PATH" ]; then
    mv "$TMP_TARGET/$TMP_PATH" "$TMP_TARGET/$TMP_PATH"_$MYDATE
fi

mkdir $TMP_TARGET/$TMP_PATH -p

for i in "${STORAGE[@]}"; do
    echo "$i";

    if [ -d "$i" ] || [ -f "$i" ]; then
        cp -r "$i" "$TMP_TARGET/$TMP_PATH/$i"
    fi
done

cd $TMP_TARGET && zip -r $TARGET/$TARGET_FILE"_"$VERSION.zip $TMP_PATH -x *.map*

rm -Rf $TMP_TARGET/$TMP_PATH
