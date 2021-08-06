#!/usr/bin/env bash

if [ -z $1 ]; then
    echo "Must run command with the url you want to visit."
    exit 1
else
    URL=$1
fi

[[ -x $BROWSER ]] && exec "$BROWSER" "$URL"
path=$(which xdg-open || which gnome-open) && exec "$path" "$URL"

if open -Ra "safari" ; then
    echo "VERIFIED: 'Safari' is installed, opening browser..."
    open -a safari "$URL"
else
    echo "Can't find any browser"
fi
