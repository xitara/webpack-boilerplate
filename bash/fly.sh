#!bash

yarn install

if [[ -f ./composer.json ]]; then
    composer install
fi
