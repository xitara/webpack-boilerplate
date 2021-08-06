#!/usr/bin/env bash

. $(pwd)"/bash/config.sh"

yarn build

MYDATE=$(date +"%Y-%m-%d_%H%M%S")
FILE="deploy_"$FILE

if [ -d "$TARGET/$FILE" ]; then
    mv "$TARGET/$FILE" "$TARGET/$FILE"_$MYDATE
fi

mkdir $TARGET/$FILE

for i in "${STORAGE[@]}"; do
    echo "$i";

    if [ -d "$i" ] || [ -f "$i" ]; then
        cp -r "$i" "$TARGET/$FILE/$i"
    fi
done
