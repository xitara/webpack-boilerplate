# OctoberCMS Webpack ES6+ Sass Boilerplate [![devDependency Status](https://david-dm.org/xitara/webpack-boilerplate/dev-status.svg)](https://david-dm.org/xitara/webpack-boilerplate/?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/xitara/webpack-boilerplate/badge.svg)](https://snyk.io//test/github/xitara/webpack-boilerplate)

A webpack 4 based boilerplate for OctoberCMS or other web projects.
In OctoberCMS clone the repo in the plugin or theme you want.
Otherwise clone the repo in a folder, you want and change `STORAGE` in `bash/config.sh`

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

- `cleanup` - reset boilerplate but keeps all files in src
- `start` - start the dev server
- `watch` - start webpack --watch
- `dwatch` - start webpack --watch
- `build` - create build
- `dbuild` - create development-build
- `zip` - creates a zip-file with all relevant files/folders
- `deploy` - creates runnable folder one level down
- `ftp` - runs `yarn deploy` and upload files/folders with lftp
- `fly` - runs `composer install` if possible after `yarn install`
- `analyze` - analyze your production bundle
- `lint-code` - run an ESLint check
- `lint-style` - run a Stylelint check
- `check-eslint-config` - check if ESLint config contains any rules that are unnecessary or conflict with Prettier
- `check-stylelint-config` - check if Stylelint config contains any rules that are unnecessary or conflict with Prettier
- `clear` - delete build-folder
- `cleanup` - delete build-folder and node_modules

## Included

- [Webpack 4](https://github.com/webpack/webpack) JavaScript module bundler
- [Autoprefixer](https://github.com/postcss/autoprefixer) for vendor prefixes (browser compability)
- [Babel 7](https://babeljs.io/) compiler ES6+ code into a backwards compatible version of JavaScript
- [Prettier](https://prettier.io/) an opinionated code formatter
- [SASS](http://sass-lang.com) preprocessor for CSS
- [Eslint](https://eslint.org) JavaScript linter
- [Stylelint](http://stylelint.io) CSS/SASS linter
- [lint-staged](https://github.com/okonet/lint-staged) run linting and formatting your files that are marked as "staged" via `git add` before you commit.
