'use strict';

// import './config.js';
// import 'alpinejs';
// import SimpleBar from 'simplebar';
// import GLightbox from 'glightbox';
// import Rellax from 'rellax';
// import MicroModal from 'micromodal';
// import LazyLoad from "vanilla-lazyload";
// import { tns } from 'tiny-slider/src/tiny-slider';
// import './modules/highlight';
// import './modules/smooth-scroll.js';
// import './modules/scroll-to-top.js';
// import './modules/timezone-offset.js';
// import './modules/prototype.event';
// import './modules/prototype.math';
// import { Cookie } from './classes/Cookie';
// import { Logger } from './classes/Logger';
import { LocalStorage } from './classes/Storage';
// import { camelCase, snakeCase, kebabCase, titleCase, pascalCase, constantCase } from './modules/cases';
import { on, qs, getQueryParam } from './modules/utils';
// import '../scss/styles.scss';
// import { slugify } from '../../../ab-suite2/src/ts/modules/utils';

// const snippetUrl = 'https://app.shoplytics.de/scripts/VODqJvxckR7tI2ptf0nEOoTW4nBALSjguNkzC80KhUVgTZ5mLYiF9GdB9P5Dj67C.js';

// <script>const sl.snippetUrl = 'https://shl.andoria.xitara.net/scripts/nc6wQiE8zKZ1rkgSVHiU4LvzuK0OWdPlktmH0lNSpOb8qbAqUtjWercBMf46LvsA.js';</script>

// <script>var sl = { snippetUrl: 'https://shl.andoria.xitara.net/scripts/nc6wQiE8zKZ1rkgSVHiU4LvzuK0OWdPlktmH0lNSpOb8qbAqUtjWercBMf46LvsA.js' }</script>
// <script src="https://extern.conversion.consulting/cdn/js/snippet-debugger.js"></script>

declare global {
    interface Window {
        sl: { snippetUrl: string };
    }
}

declare var sl: { snippetUrl: string };
const l = new LocalStorage('sl');

if (getQueryParam('debug') === '0') {
    console.log('Debug mode is disabled, removing flag');
    l.remove('debug');
}

if (getQueryParam('debug') === '1' || l.get('debug') === '1') {
    console.log('Debug mode is enabled, loading snippet');
    l.set('debug', '1');

    if (window.sl?.snippetUrl) {
        qs('head').appendChild(document.createElement('script')).src = sl.snippetUrl;
    } else {
        console.error('No snippet URL found, please set the `sl.snippetUrl` variable');
    }
}
