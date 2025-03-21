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

// /**
//  * Example for DOMContentLoaded event
//  *
//  * @autor   mburghammer
//  * @date    2024-07-08T19:55:01+02:00
//  * @version 0.0.1
//  * @since   0.0.1
//  * @example
//  */
// on(document, 'DOMContentLoaded', () => {
//     console.log(qs('DOMContentLoaded'));

//     let message: string = 'Hello, World!';
//     console.log(message);

//     const app = document.getElementById('app');
//     console.log(app);

//     if (app) {
//         app.innerHTML = message;
//     }

//     return app;
// });

// /**
//  * Example for readystate
//  *
//  * @autor   mburghammer
//  * @date    2024-07-08T19:55:01+02:00
//  * @version 0.0.1
//  * @since   0.0.1
//  * @param   {object}    document.readyState readyState event
//  * @example
//  */
// const init: Function = (readyState: string) => {
//     switch (readyState) {
//         case 'loading':
//             loading();
//             break;
//         case 'interactive':
//             interactive();
//             break;
//         case 'complete':
//             complete();
//             break;
//     }
// };

// /**
//  * trigger init on startup
//  *
//  * @autor   mburghammer
//  * @date    2024-07-08T19:55:01+02:00
//  * @version 0.0.1
//  * @since   0.0.1
//  * @param   {object}    document.readyState readyState event
//  */
// init(document.readyState);

// /**
//  * trigger init on readyState event fires
//  *
//  * @autor   mburghammer
//  * @date    2024-07-08T19:56:14+02:00
//  * @version 0.0.1
//  * @since   0.0.1
//  * @param   {document}    document           document
//  * @param   {string}    'readystatechange' event to listen on
//  * @param   {object}    ev event data
//  */
// on(document, 'readystatechange', (ev) => {
//     init((ev.target as Document).readyState);
// });

// /**
//  * Example for loading
//  *
//  * @autor   mburghammer
//  * @date    2024-07-08T19:55:01+02:00
//  * @version 0.0.1
//  * @since   0.0.1
//  * @example
//  */
// const loading: Function = () => {
//     console.log('Loading');
// };

// /**
//  * Example for interactive
//  *
//  * @autor   mburghammer
//  * @date    2024-07-08T19:55:01+02:00
//  * @version 0.0.1
//  * @since   0.0.1
//  * @example
//  */
// const interactive: Function = () => {
//     console.log('Interactive');
// };

// /**
//  * Example for complete
//  *
//  * @autor   mburghammer
//  * @date    2024-07-08T19:55:01+02:00
//  * @version 0.0.1
//  * @since   0.0.1
//  * @example
//  */
// const complete: Function = () => {
//     console.log('Complete');
// };

// const snippetUrl = 'https://app.shoplytics.de/scripts/VODqJvxckR7tI2ptf0nEOoTW4nBALSjguNkzC80KhUVgTZ5mLYiF9GdB9P5Dj67C.js';

declare global {
    interface Window {
        snippetUrl: string;
    }
}

declare var snippetUrl: string;
const l = new LocalStorage('sl');

if (getQueryParam('debug') === '0') {
    console.log('Debug mode is disabled, removing flag');
    l.remove('debug');
}

if (getQueryParam('debug') === '1' || l.get('debug') === '1') {
    console.log('Debug mode is enabled, loading snippet');
    l.set('debug', '1');
    qs('head').appendChild(document.createElement('script')).src = snippetUrl;
}
