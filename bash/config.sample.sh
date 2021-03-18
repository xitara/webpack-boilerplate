#!bash

# list of files and folder to pack/deploy. top: plugins, aber empty line, themes
STORAGE=(
    *.php
    assets
    backend
    classes
    components
    config
    console
    controllers
    lang
    models
    partials
    reportwidgets
    updates
    vendor
    plugin.yaml

    content
    layouts
    meta
    pages
    theme.yaml
    version.yaml
    favicon.ico*
    robots.txt
    *manifest.json*
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
