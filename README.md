# OctoberCMS Webpack ES6+ Sass Boilerplate [![devDependency Status](https://david-dm.org/xitara/webpack-boilerplate/dev-status.svg)](https://david-dm.org/xitara/webpack-boilerplate/?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/xitara/webpack-boilerplate/badge.svg)](https://snyk.io//test/github/xitara/webpack-boilerplate)

A webpack 4 based boilerplate for OctoberCMS or other web projects.
In OctoberCMS clone the repo in the plugin or theme you want.
Otherwise clone the repo in a folder you want and change
`STORAGE` in `bash/config.sh` if needed

## Dependencies

- `yarn`
- `bash` to run `zip`, `fly`, `deploy` and `ftp`. I testet on debian/buster
- `lftp` to upload with ftp by `yarn ftp`

## Quick start

- clone the repo via `git clone https://github.com/xitara/webpack-boilerplate.git`
- `cd webpack-es6-sass-boilerplate`
- run `yarn` or `yarn fly` to fetch all the dependencies
- change settings in `package.json` and `bash/config.sh` if possible
- run `yarn start` to start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (`localhost:8080` will be opened automatically)
- start developing
- when you are done, run `yarn run build` to get the production version of your app

## Commands

- `start` - start the dev server
- `watch` - start webpack --watch
- `dwatch` - start webpack --watch in development-mode
- `build` - create build in `build` folder
- `dbuild` - create development build in `build` folder
- `zip` - build project and pack relevant folder/files to a zip-file one level down
- `deploy` - build project and deploy to a folder name in package.json one level down with backup if folder exists
- `ftp` - uploads build project per FTP. Configs in ./bash/config.sh
- `fly` - runs yarn install and, if composer.json exists, composer install
- `analyze` - analyze your production bundle
- `lint-code` - run an ESLint check
- `lint-style` - run a Stylelint check
- `check-eslint-config` - check if ESLint config contains any rules that are unnecessary or conflict with Prettier
- `check-stylelint-config` - check if Stylelint config contains any rules that are unnecessary or conflict with Prettier
- `cleanup` - delete build-folder, node_modulesand other generated files/folders. files in src and static stay untouched

## OctoberCMS specific commands

- `oc-init-theme` - adds folders to create a complete [OctoberCMS](https://ocotbercms.com) theme boilerplate
- `oc-kill-theme` - removes folders for OctoberCMS theme including `theme.yaml` and `conifg` from static. Handle with care, it's not recoverable

## OctoberCMS specific settings

- add the following lines to your `.htaccess` to access the compiled index.html inside your theme dev:
- it works with and without translation-prefix
```
##
## enable display index.html for development
##
RewriteRule ^themes/.*/index\.html - [L,NC]
RewriteRule ^.*/themes/(.*)/index\.html /themes/$1/index\.html [L,NC]
RewriteRule ^.*/themes/(.*)/(assets|resources)/(.*) /themes/$1/$2/$3 [L,NC]
```
