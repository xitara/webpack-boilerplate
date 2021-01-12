#!bash

# list of files and folder to pack/deploy
STORAGE=(*.php *.xml *.yaml assets backend classes components config console content controllers lang layouts meta models pages partials phpunit.xml plugin.yaml tests theme.yaml updates vendor  version.yaml  views)

# filename. default name from package.json example with jq (linux)
FILE=$(cat package.json | jq -r .name)

# target path
TARGET="$(pwd)/.."

# ftp for deploy
FTP_HOST=""
FTP_USER=""
FTP_PASS=""
FTP_PATH=""
