#!/usr/bin/env bash

# copy config
if [ ! -f "$(pwd)/bash/config.sh" ]; then
    cp "$(pwd)/bash/config.sample.sh" "$(pwd)/bash/config.sh"
fi

# set link to webfonts in fa
if [ -d "$(pwd)/node_modules/@fortawesome/fontawesome-free" ]; then

    if [ ! -d "$(pwd)/static/assets" ]; then
        mkdir -p "$(pwd)/static/assets"
    fi

    if [ ! -L "$(pwd)/static/assets/fonts" ]; then
        ln -s \
            "$(pwd)/node_modules/@fortawesome/fontawesome-free/webfonts" \
            "$(pwd)/static/assets/fonts"
    fi

    if [ ! -L "$(pwd)/static/assets/sprites" ]; then
        ln -s \
            "$(pwd)/node_modules/@fortawesome/fontawesome-free/sprites" \
            "$(pwd)/static/assets/sprites"
    fi

    if [ ! -L "$(pwd)/static/assets/svgs" ]; then
        ln -s \
            "$(pwd)/node_modules/@fortawesome/fontawesome-free/svgs" \
            "$(pwd)/static/assets/svgs"
    fi
fi

# init composer if needed
. $(pwd)"/bash/composer.sh"
