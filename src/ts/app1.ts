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
import { on, qs } from './modules/utils';
import '../scss/styles.scss';

on(document, 'DOMContentLoaded', () => {
    console.log(qs('body'));

    let message: string = 'Hello, World!';
    console.log(message);

    const app = document.getElementById('app');
    console.log(app);

    if (app) {
        app.innerHTML = message;
    }

    return app;
});

const test = () => {
    qs('body').classList.add('test');
    console.log('test');
};

test();
