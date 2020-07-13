#!/bin/bash

. $(pwd)"/bash/config.sh"

yarn build

# STORAGE=(*.php assets classes controllers lang partials updates vendor config content layouts meta pages partials theme.yaml plugin.yaml version.yaml)
# FILE=$(cat package.json | jq -r .name)
# TARGET="$(pwd)/.."
MYDATE=$(date +"%Y-%m-%d_%H%M%S")

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
