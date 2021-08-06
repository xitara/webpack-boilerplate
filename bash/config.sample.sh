#!/usr/bin/env bash

# list of files and folder to pack/deploy. top: plugins, aber empty line, themes
STORAGE=(
    *.php
    assets
    backend
    behaviors
    classes
    components
    config
    console
    controllers
    factories
    lang
    models
    partials
    plugin.yaml
    reportwidgets
    traits
    updates
    vendor
    views

    *manifest.json*
    content
    favicon.ico*
    layouts
    meta
    pages
    robots.txt
    theme.yaml
    version.yaml
)

# filename. default name from package.json example with jq (linux)
FILE=$(cat package.json | jq -r .name)

# target path
TARGET="$(pwd)/.."

# ftp for deploy. default port ist 21 if none is given
FTP_HOST=""
FTP_PORT=""
FTP_USER=""
FTP_PASS=""
FTP_PATH=""
