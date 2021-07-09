#!bash

. $(pwd)"/bash/config.sh"

yarn build

MYDATE=$(date +"%Y-%m-%d_%H%M%S")
TMP_TARGET="/tmp"

if [ -d "$TMP_TARGET/$FILE" ]; then
    mv "$TMP_TARGET/$FILE" "$TMP_TARGET/$FILE"_$MYDATE
fi

mkdir $TMP_TARGET/$FILE

for i in "${STORAGE[@]}"; do
    echo "$i";

    if [ -d "$i" ] || [ -f "$i" ]; then
        cp -r "$i" "$TMP_TARGET/$FILE/$i"
    fi
done

cd $TMP_TARGET && zip -r $TARGET/$FILE.zip $FILE -x *.map*

rm -Rf $TMP_TARGET/$FILE
