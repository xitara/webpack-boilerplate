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
import { qs } from './modules/utils';
import '../scss/gold-silber-muenzen-shop.scss';

// on(document, "DOMContentLoaded", () => {
//     console.log(qs("body"));

//     let message: string = "Hello, World!";
//     console.log(message);
// });

/**
 * Interval value in milliseconds and timeout value in milliseconds
 */
export const intervalValue = 500;
const timeoutValue = 10000;

// // #002v1
// // $(document).ready(function () {
// ($ as any)(".artikelslick").slick(
//     "slickSetOption",
//     {
//         // centerMode: true,
//         // centerPadding: "350px",
//         // slidesToShow: 1,
//         // dots: false,
//         // infinite: true,
//         // arrows: true,
//         // asNavFor: ".slider-nav",
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     centerPadding: "240px",
//                 },
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     centerPadding: "180px",
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     centerPadding: "120px",
//                 },
//             },
//             // {
//             //     breakpoint: 768,
//             //     settings: {
//             //         centerPadding: "50px",
//             //     },
//             // },
//         ],
//     },
//     true
// );

// // ($ as any)(".slider-nav").slick({
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     asNavFor: ".artikelslick",
// //     dots: false,
// //     infinite: false,
// //     centerMode: true,
// //     focusOnSelect: true,
// // });
// // });

// // window.onscroll = function () {
// // scrollfunction();
// // };

// // function scrollfunction() {
// //     var winScroll =
// //         document.body.scrollTop || document.documentElement.scrollTop;
// //     var height =
// //         document.documentElement.scrollHeight -
// //         document.documentElement.clientHeight;
// //     var scrolled = (winScroll / height) * 100;
// //     const myBar = document.getElementById("myBar");
// //     if (myBar) {
// //         myBar.style.width = scrolled + "%";
// //     }
// // }

// #003v2
// if (!qs('.modified-test003v2')) {
//     const test003v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 const body = qs('body');
//                 if (body) {
//                     body.classList.add('modified-test003v2');
//                 }
//             }
//         });

//         let elapsed = 0;
//         const interval1 = setInterval(() => {
//             elapsed += intervalValue;

//             const mainElementSelector = '[name="basket_form"] .onstockbutton';

//             if (qs(mainElementSelector) || elapsed >= 10000) {
//                 clearInterval(interval1);

//                 if (elapsed >= timeoutValue) {
//                     console.error(
//                         "Element '" + mainElementSelector + "' not found within 10 seconds."
//                     );
//                 }

//                 /**
//                  * Test itself
//                  */
//                 const el = qs(mainElementSelector).cloneNode(true) as HTMLElement;
//                 console.log(el);

//                 el?.classList.add('__new-wk-button');

//                 const cartElement = qs('#cart');
//                 if (cartElement && el) {
//                     console.log(cartElement);

//                     cartElement.insertAdjacentElement('afterbegin', el);
//                 }
//             }
//         }, intervalValue);
//     };
//     test003v2();
// }

const text = `
    <li><span>✓</span> <strong>Über 400 Jahre Erfahrung</strong></li><li> – Seit 1618 im Edelmetallhandel tätig</li>
    <li><span>✓</span> <strong>Ständige Preisaktualisierung</strong></li><li> – Immer faire & transparente Kurse</li>
    <li><span>✓</span> <strong>Echte Gold- & Silberexperten</strong></li><li> – Persönliche Beratung per Telefon</li>
    <li><span>✓</span> <strong>Schneller & sicherer Versand</strong></li><li> – Neutral & versichert mit Tracking</li>
    <li><span>✓</span> <strong>100% Echtheitsgarantie</strong></li><li> – Zertifizierte Münzen & Barren</li>
    <li><span>✓</span> <strong>Ladengeschäft in Nürnberg</strong></li><li> – Vor Ort kaufen & beraten lassen</li>
    <li><span>✓</span> <strong>Geprüfter Edelmetallhändler</strong></li><li> – Vertrauenswürdig & langjährig etabliert</li>
`;

// if (!qs('.modified-test004v1')) {
//     // console.log('startup');

//     const test004v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test004v1');
//             }
//         });

//         const main = qs('.yellhr:nth-of-type(1)');
//         // console.log(main);

//         const interval1 = setInterval(() => {
//             if (main) {
//                 clearInterval(interval1);

//                 let div = document.createElement('div');
//                 // let hr = document.createElement('hr');
//                 // hr.classList.add('yellhr');
//                 let ul = document.createElement('ul');
//                 div.insertAdjacentElement('afterbegin', ul);
//                 // div.insertAdjacentElement('afterbegin', hr);
//                 div.classList.add('__new-div');
//                 ul.insertAdjacentHTML('afterbegin', text);
//                 ul.classList.add('__new-ul');

//                 main.insertAdjacentElement('afterend', div);
//             }
//         }, 500);
//     };

//     test004v1();
// }

if (!qs('.modified-test004v2')) {
    // console.log('startup');

    const test004v2 = () => {
        // workaround for chrome on iOS
        const interval0 = setInterval(() => {
            if (qs('body')) {
                clearInterval(interval0);
                qs('body').classList.add('modified-test004v2');
            }
        });

        const main = qs('.form-horizontal');
        // console.log(main);

        const interval1 = setInterval(() => {
            if (main) {
                clearInterval(interval1);

                let div = document.createElement('div');
                let hr = document.createElement('hr');
                hr.classList.add('yellhr', 'hidden-xs');
                let ul = document.createElement('ul');
                div.insertAdjacentElement('afterbegin', ul);
                div.insertAdjacentElement('afterbegin', hr);
                div.classList.add('__new-div');
                ul.insertAdjacentHTML('afterbegin', text);
                ul.classList.add('__new-ul');

                main.insertAdjacentElement('afterend', div);
            }
        }, 500);
    };

    test004v2();
}
