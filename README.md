# Webpack ES6+ Sass Boilerplate [![devDependency Status](https://david-dm.org/xitara/webpack-boilerplate/dev-status.svg)](https://david-dm.org/xitara/webpack-boilerplate/?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/xitara/webpack-boilerplate/badge.svg)](https://snyk.io//test/github/xitara/webpack-boilerplate)

A webpack 4 based boilerplate for web apps.

## Getting started

- clone the repo via `git clone https://github.com/xitara/webpack-boilerplate.git`
- `cd webpack-es6-sass-boilerplate`
- run `yarn install` to fetch all the dependencies
- run `yarn run start` to start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (`localhost:8080` will be opened automatically)
- start developing
- when you are done, run `yarn run build` to get the production version of your app

## Commands

- `start` - start the dev server
- `watch` - start webpack --watch
- `build` - create build in `build` folder
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
