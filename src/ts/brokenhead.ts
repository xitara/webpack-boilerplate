// import './config.js';
// import SimpleBar from 'simplebar';
// import GLightbox from 'glightbox';
// import Rellax from 'rellax';
// import MicroModal from 'micromodal';
// import LazyLoad from "vanilla-lazyload";
// import { tns } from 'tiny-slider/src/tiny-slider';
// import './modules/bootstrap-modules.js';
// import "./modules/highlight";
// import './modules/smooth-scroll.js';
// import './modules/scroll-to-top.js';
// import './modules/timezone-offset.js';
// import {
//     initTestimonialsSlider,
//     Testimonial,
// } from "./modules/testimonials-slider.ts";
import { qs, qsa } from './modules/utils';
import '../scss/brokenhead.scss';

// on(document, "DOMContentLoaded", () => {
//     console.log(qs("body"));

//     let message: string = "Hello, World!";
//     console.log(message);
// });

// if (!qs('.modified-test015v1')) {
//     // console.log('startup');

//     const test015v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test015v1');
//             }
//         });

//         // console.log('test015v1');

//         const main = '.confirm--outer-container';

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main);

//                 // console.log(el);

//                 let img = document.createElement('img');
//                 img.src = 'https://extern.conversion.consulting/cdn/lock.png';

//                 let div = document.createElement('div');
//                 div.innerHTML = ' 100% Sicherer Checkout durch 256-Bit TLS-Verschlüsselung.';
//                 div.classList.add('__new-div');

//                 // console.log(div);

//                 div.insertAdjacentElement('afterbegin', img);

//                 el.insertAdjacentElement('afterbegin', div);
//             }
//         }, 500);
//     };

//     test015v1();
// }

// if (!qs('.modified-test015v2')) {
//     // console.log('startup');

//     const test015v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test015v2');
//             }
//         });

//         // console.log('test015v2');

//         const main = '.confirm--inner-container';

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main);

//                 // console.log(el);

//                 let img = document.createElement('img');
//                 img.src = 'https://extern.conversion.consulting/cdn/lock.png';

//                 let div1 = document.createElement('div');
//                 div1.classList.add('__new-div');
//                 let div2 = document.createElement('div');
//                 div2.innerHTML = ' 100% Sicherer Checkout durch 256-Bit TLS-Verschlüsselung.';

//                 // console.log(div);

//                 div1.insertAdjacentElement('afterbegin', div2);
//                 div2.insertAdjacentElement('afterbegin', img);

//                 // el.insertAdjacentElement('afterbegin', div1.cloneNode(true) as HTMLElement);
//                 qsa('.actions--bottom')[0].insertAdjacentElement(
//                     'beforeend',
//                     div1.cloneNode(true) as HTMLElement
//                 );
//                 qsa('.actions--bottom')[1].insertAdjacentElement('beforeend', div1);
//             }
//         }, 500);
//     };

//     test015v2();
// }
