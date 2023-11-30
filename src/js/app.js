'use strict';

// import './config.js';
// import 'alpinejs';
// import SimpleBar from 'simplebar';
// import GLightbox from 'glightbox';
// import Rellax from 'rellax';
// import MicroModal from 'micromodal';
// import LazyLoad from "vanilla-lazyload";
// import { tns } from 'tiny-slider/src/tiny-slider';
// import './modules/bootstrap-modules.js';
// import './modules/markjs.js';
// import './modules/smooth-scroll.js';
// import './modules/scroll-to-top.js';
// import './modules/timezone-offset.js';
import { $on } from './modules/utils';
import '../scss/styles.scss';

// runtime for events
//
// readystate -> loading
// readystatechange fired
// readystatechange changed -> interactive
// DOMContentLoaded fired
// readystatechange fired
// readystatechange changed -> complete
// load fired

// check readyState once
switch (document.readyState) {
    case 'loading':
        // The document is loading.
        console.log('readystate -> loading');
        break;
    case 'interactive':
        // The document has finished loading and we can access DOM elements.
        console.log('readystate -> interactive');
        break;
    case 'complete':
        // The page is fully loaded.
        console.log('readystate -> complete');
        break;
}

const init = () => {
    switch (document.readyState) {
        case 'loading':
            // The document is loading.
            console.log('readystate -> loading');
            break;
        case 'interactive':
            // The document has finished loading and we can access DOM elements.
            console.log('readystate -> interactive');
            break;
        case 'complete':
            // The page is fully loaded.
            console.log('readystate -> complete');
            break;
    }
};

init();

// fires if DOM is loaded, also without dependent resources
$on(document, 'DOMContentLoaded', () => {
    // The document has finished loading and we can access DOM elements.
    console.log('DOMContentLoaded fired');
});

// fires if DOM and all includes dependent resources are loaded
$on(window, 'load', () => {
    // The page is fully loaded includes all dependent resources.
    console.log('load fired');
});

// fires on every change of readychange. first fired on change from loading to interactive
$on(document, 'readystatechange', () => {
    console.log('readystatechange fired');

    switch (event.target.readyState) {
        case 'interactive':
            // The document has finished loading and we can access DOM elements.
            console.log('readystatechange changed -> interactive');
            init();
            break;
        case 'complete':
            // The page is fully loaded includes all dependent resources. Alternative to load event
            console.log('readystatechange changed -> complete');
            init();
            break;
    }
});
