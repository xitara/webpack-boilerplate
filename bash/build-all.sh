#!/usr/bin/env bash

yarn build $@ --env no-cl
yarn dbuild $@
