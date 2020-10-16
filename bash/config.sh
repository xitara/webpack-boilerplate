#!bash

# list of files and folder to pack/deploy
# STORAGE=(*.php assets classes controllers lang partials updates vendor config content layouts meta pages partials theme.yaml plugin.yaml version.yaml)
STORAGE=(*.php *.yaml *.xml assets console classes models controllers components tests lang partials updates vendor config content layouts meta pages partials backend)

# filename. default name from package.json example with jq (linux)
FILE=$(cat package.json | jq -r .name)

# target path
TARGET="$(pwd)/.."

# ftp for deploy
FTP_HOST=""
FTP_USER=""
FTP_PASS=""
FTP_PATH=""
