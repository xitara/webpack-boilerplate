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
import { qs, qsa, getCookie, setCookie, getQueryParam } from './modules/utils';
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

// const text = `
//     <li><span>✓</span> <strong>Über 400 Jahre Erfahrung</strong></li><li> – Seit 1618 im Edelmetallhandel tätig</li>
//     <li><span>✓</span> <strong>Ständige Preisaktualisierung</strong></li><li> – Immer faire & transparente Kurse</li>
//     <li><span>✓</span> <strong>Echte Gold- & Silberexperten</strong></li><li> – Persönliche Beratung per Telefon</li>
//     <li><span>✓</span> <strong>Schneller & sicherer Versand</strong></li><li> – Neutral & versichert mit Tracking</li>
//     <li><span>✓</span> <strong>100% Echtheitsgarantie</strong></li><li> – Zertifizierte Münzen & Barren</li>
//     <li><span>✓</span> <strong>Ladengeschäft in Nürnberg</strong></li><li> – Vor Ort kaufen & beraten lassen</li>
//     <li><span>✓</span> <strong>Geprüfter Edelmetallhändler</strong></li><li> – Vertrauenswürdig & langjährig etabliert</li>
// `;

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

// if (!qs('.modified-test004v2')) {
//     // console.log('startup');

//     const test004v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test004v2');
//             }
//         });

//         const main = qs('.form-horizontal');
//         // console.log(main);

//         const interval1 = setInterval(() => {
//             if (main) {
//                 clearInterval(interval1);

//                 let div = document.createElement('div');
//                 let hr = document.createElement('hr');
//                 hr.classList.add('yellhr', 'hidden-xs');
//                 let ul = document.createElement('ul');
//                 div.insertAdjacentElement('afterbegin', ul);
//                 div.insertAdjacentElement('afterbegin', hr);
//                 div.classList.add('__new-div');
//                 ul.insertAdjacentHTML('afterbegin', text);
//                 ul.classList.add('__new-ul');

//                 main.insertAdjacentElement('afterend', div);
//             }
//         }, 500);
//     };

//     test004v2();
// }

// if (!qs('.modified-test007v1')) {
//     // console.log('startup');

//     const test007v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test007v1');
//             }
//         });

//         const main = qs('#footer-top');
//         // console.log(main);

//         const interval1 = setInterval(() => {
//             if (main) {
//                 clearInterval(interval1);

//                 let div = document.createElement('div');
//                 div.classList.add('__new-div');

//                 let div2 = document.createElement('div');
//                 div2.classList.add('__new-wrapper');

//                 div.insertAdjacentHTML('beforeend', '<span>Sie können uns vertrauen!</span>');
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(3) > a', main).outerHTML
//                 );
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(4) > img', main).outerHTML
//                 );
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(6) > a', main).outerHTML
//                 );
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(7) > a', main).outerHTML
//                 );

//                 div2.insertAdjacentElement('afterbegin', div);
//                 console.log(div2);

//                 const target = qs('#header .col-sm-9 .padright:nth-of-type(3)');

//                 console.log(target);

//                 if (target) {
//                     div2.classList.add('__desktop');
//                     target.insertAdjacentElement('afterend', div2);
//                 } else {
//                     const target2 = qs('#header .col-sm-9.alright');

//                     div2.classList.add('__mobile', 'col-sm-9', 'alright');

//                     console.log(target2);

//                     if (target2) {
//                         target2.insertAdjacentElement('afterend', div2);
//                     }
//                 }
//             }
//         }, 500);
//     };

//     test007v1();
// }

// if (!qs('.modified-test007v2')) {
//     // console.log('startup');

//     const test007v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test007v2');
//             }
//         });

//         const main = qs('#footer-top');
//         // console.log(main);

//         const interval1 = setInterval(() => {
//             if (main) {
//                 clearInterval(interval1);

//                 let div = document.createElement('div');
//                 div.classList.add('__new-div');

//                 let div2 = document.createElement('div');
//                 div2.classList.add('__new-wrapper');

//                 // div.insertAdjacentHTML('beforeend', '<span>Sie können uns vertrauen!</span>');
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(3) > a', main).outerHTML
//                 );
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(4) > img', main).outerHTML
//                 );
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(6) > a', main).outerHTML
//                 );
//                 div.insertAdjacentHTML(
//                     'beforeend',
//                     qs('.col-md-2:nth-of-type(7) > a', main).outerHTML
//                 );

//                 div2.insertAdjacentElement('afterbegin', div);
//                 console.log(div2);

//                 const target = qs('#header .col-sm-9 .padright:nth-of-type(3)');

//                 console.log(target);

//                 if (target) {
//                     div2.classList.add('__desktop');
//                     target.insertAdjacentElement('afterend', div2);
//                 } else {
//                     const target2 = qs('#header .col-sm-9.alright');

//                     div2.classList.add('__mobile', 'col-sm-9', 'alright');

//                     console.log(target2);

//                     if (target2) {
//                         target2.insertAdjacentElement('afterend', div2);
//                     }
//                 }
//             }
//         }, 500);
//     };

//     test007v2();
// }

// if (!qs('.modified-test009v1')) {
//     // console.log('startup');

//     const test009v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test009v1');
//             }
//         });

//         // console.log('test009v1');

//         const main = '#cart .yellhr:nth-of-type(1)';

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main);

//                 let img = document.createElement('img');
//                 img.src = 'https://extern.conversion.consulting/cdn/lock.png';

//                 let div = document.createElement('div');
//                 div.innerHTML = ' Sicher durch 256-Bit TLS-Verschlüsselung';
//                 div.classList.add('__new-div');

//                 div.insertAdjacentElement('afterbegin', img);
//                 el.insertAdjacentElement('beforebegin', div);
//             }
//         }, 500);
//     };

//     test009v1();
// }

// if (!qs('.modified-test009v2')) {
//     const test009v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test009v2');
//             }
//         });

//         const main = '[name="zahlungform"]';

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main);

//                 let img = document.createElement('img');
//                 img.src = 'https://extern.conversion.consulting/cdn/lock.png';

//                 let div = document.createElement('div');
//                 div.innerHTML = ' Sicher durch 256-Bit TLS-Verschlüsselung';
//                 div.classList.add('__new-div');

//                 div.insertAdjacentElement('afterbegin', img);
//                 el.insertAdjacentElement('beforebegin', div);
//             }
//         }, 500);
//     };

//     test009v2();
// }

// if (!qs('.modified-test012v1')) {
//     const test012v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test012v1');
//             }
//         });

//         const main = 'header #row-brand .brand';

//         // console.log(qsa(main));

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 qsa(main).forEach((element) => {
//                     // console.log(element);

//                     (element as HTMLAnchorElement).href =
//                         'https://www.gold-silber-muenzen-shop.de/';
//                 });
//             }
//         }, 500);
//     };

//     test012v1();
// }

// if (!qs('.modified-test013v1')) {
//     // console.log('startup');

//     const test013v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test013v1', 'modified-test006v1');
//             }
//         });
//     };

//     test013v1();
// }

// const text = `
//     <li><span>✓</span> <strong>Über 400 Jahre Erfahrung</strong></li><li><span>–</span>Seit 1618 im Edelmetallhandel tätig</li>
//     <li><span>✓</span> <strong>Ständige Preisaktualisierung</strong></li><li><span>–</span>Immer faire & transparente Kurse</li>
//     <li><span>✓</span> <strong>Echte Gold- & Silberexperten</strong></li><li><span>–</span>Persönliche Beratung per Telefon</li>
//     <li><span>✓</span> <strong>Schneller & sicherer Versand</strong></li><li><span>–</span>Neutral & versichert mit Tracking</li>
//     <li><span>✓</span> <strong>100% Echtheitsgarantie</strong></li><li><span>–</span>Zertifizierte Münzen & Barren</li>
//     <li><span>✓</span> <strong>Ladengeschäft in Nürnberg</strong></li><li><span>–</span>Vor Ort kaufen & beraten lassen</li>
//     <li><span>✓</span> <strong>Geprüfter Edelmetallhändler</strong></li><li><span>–</span>Vertrauenswürdig & langjährig etabliert</li>
// `;

// if (!qs('.modified-test014v1')) {
//     // console.log('startup');

//     const test014v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test014v1');
//             }
//         });

//         const main = qs('#CM_TextArea_9');
//         // console.log(main);

//         const interval1 = setInterval(() => {
//             if (main) {
//                 clearInterval(interval1);

//                 let div = document.createElement('div');
//                 let h2 = document.createElement('h2');
//                 h2.innerText = 'Ihre Vorteile bei uns:';

//                 let ul = document.createElement('ul');
//                 div.insertAdjacentElement('afterbegin', ul);
//                 div.insertAdjacentElement('afterbegin', h2);
//                 div.classList.add('__new-div');
//                 ul.insertAdjacentHTML('afterbegin', text);
//                 ul.classList.add('__new-ul');

//                 main.insertAdjacentElement('beforebegin', div);
//             }
//         }, 500);
//     };

//     test014v1();
// }

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

//         let main = qs('.onstockbutton');
//         // console.log(main);

//         const interval1 = setInterval(() => {
//             if (main) {
//                 clearInterval(interval1);

//                 qsa('.onstockbutton').forEach((el) => {
//                     (el as HTMLElement).innerText = 'Produkt aufrufen';
//                 });
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
//                 qs('body').classList.add('modified-test015v2', 'modified-test017v1');
//             }
//         });

//         let main = qs('.onstockbutton');
//         // console.log(main);

//         const interval1 = setInterval(() => {
//             if (main) {
//                 clearInterval(interval1);

//                 qsa('.onstockbutton').forEach((el) => {
//                     (el as HTMLElement).innerText = 'Details ansehen';
//                 });
//             }
//         }, 500);
//     };

//     test015v2();
// }

// change_current_sort=a-z
// change_current_sort=z-a
// change_current_sort=price-asc
// change_current_sort=price-desc
// change_current_sort=discount
// change_current_sort=sells
// change_current_sort=availability
// change_current_sort=newest

// if (!qs('.modified-test016v1')) {
//     // console.log('startup');

//     const test016v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test016v1');
//             }
//         });

//         if (!getCookie('sortRedirectDone')) {
//             // get full URI, attach parameter change_current_sort=newest and redirect to it
//             const currentUrl = window.location.href;
//             const newUrl = new URL(currentUrl);
//             newUrl.searchParams.set('change_current_sort', 'a-z');
//             // console.log(newUrl.toString());
//             setCookie('sortRedirectDone', 'true', 10);

//             window.location.href = newUrl.toString();
//         }
//     };

//     test016v1();
// }

// if (!qs('.modified-test016v2')) {
//     // console.log('startup');

//     const test016v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test016v2');
//             }
//         });

//         if (!getCookie('sortRedirectDone')) {
//             // get full URI, attach parameter change_current_sort=newest and redirect to it
//             const currentUrl = window.location.href;
//             const newUrl = new URL(currentUrl);
//             newUrl.searchParams.set('change_current_sort', 'discount');
//             // console.log(newUrl.toString());
//             setCookie('sortRedirectDone', 'true', 10);

//             window.location.href = newUrl.toString();
//         }
//     };

//     test016v2();
// }

// if (!qs('.modified-test016v3')) {
//     // console.log('startup');

//     const test016v3 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test016v3');
//             }
//         });

//         if (!getCookie('sortRedirectDone')) {
//             // get full URI, attach parameter change_current_sort=newest and redirect to it
//             const currentUrl = window.location.href;
//             const newUrl = new URL(currentUrl);
//             newUrl.searchParams.set('change_current_sort', 'availability');
//             // console.log(newUrl.toString());
//             setCookie('sortRedirectDone', 'true', 10);

//             window.location.href = newUrl.toString();
//         }
//     };

//     test016v3();
// }

// if (!qs('.modified-test016v4')) {
//     // console.log('startup');

//     const test016v4 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test016v4');
//             }
//         });

//         if (!getCookie('sortRedirectDone')) {
//             // get full URI, attach parameter change_current_sort=newest and redirect to it
//             const currentUrl = window.location.href;
//             const newUrl = new URL(currentUrl);
//             newUrl.searchParams.set('change_current_sort', 'newest');
//             // console.log(newUrl.toString());
//             setCookie('sortRedirectDone', 'true', 10);

//             window.location.href = newUrl.toString();
//         }
//     };

//     test016v4();
// }

// #017v2+3
// if (!qs('.modified-test017v2')) {
//     // console.log('startup');

//     const test017v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test017v2');
//             }
//         });

//         if (!getQueryParam('view') && qs('.list-sort li:nth-of-type(3) a')) {
//             // die gesamte URL holen, den Parameter view=list anhängen oder view=gallery in view=list ändern und weiterleiten. dabei alle anderen Parameter beibehalten
//             // const currentUrl = window.location.href;
//             // const newUrl = new URL(currentUrl);
//             const newUrl = (qs('.list-sort li:nth-of-type(3) a') as HTMLAnchorElement).href;
//             // newUrl.searchParams.set('view', 'list');

//             console.log(newUrl.toString());
//             window.location.href = newUrl.toString();
//         }
//     };

//     test017v2();
// }

// if (!qs('.modified-test018v2')) {
//     // console.log('startup');

//     const test018v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test018v2');
//             }
//         });

//         let text = 'In den Warenkorb';
//         (qs('.btn-xsbuy .visible-xs') as HTMLElement).innerText = text;

//         qsa('.purchbuybuttonsb button[type="submit"]').forEach((el) => {
//             (el as HTMLButtonElement).innerText = text;
//         });
//     };

//     test018v2();
// }

// if (!qs('.modified-test019v2')) {
//     // console.log('startup');

//     const test019v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test019v2');
//             }
//         });

//         let text = 'Zahlungspflichtig bestellen';
//         if (qs('#checkoutbtn')) {
//             (qs('#checkoutbtn') as HTMLElement).innerText = text;
//         }
//     };

//     test019v2();
// }

// if (!qs('.modified-test020v1')) {
//     // console.log('startup');

//     const test020v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test020v1');
//             }
//         });
//     };

//     test020v1();
// }

// if (!qs('.modified-test020v2')) {
//     // console.log('startup');

//     const test020v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test020v2');
//             }
//         });
//     };

//     test020v2();
// }

// if (!qs('.modified-test020v3')) {
//     // console.log('startup');

//     const test020v3 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test020v3');
//             }
//         });
//     };

//     test020v3();
// }

// if (!qs('.modified-test021v1')) {
//     // console.log('startup');

//     const test021v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test021v1');
//             }
//         });

//         if (!getQueryParam('view') && qs('.list-sort li:nth-of-type(3) a')) {
//             // die gesamte URL holen, den Parameter view=list anhängen oder view=gallery in view=list ändern und weiterleiten. dabei alle anderen Parameter beibehalten
//             // const currentUrl = window.location.href;
//             // const newUrl = new URL(currentUrl);
//             const anchorHref = (qs('.list-sort li:nth-of-type(3) a') as HTMLAnchorElement).href;
//             const newUrl = new URL(anchorHref);
//             newUrl.searchParams.set('view', 'gallery');

//             console.log(newUrl.toString());
//             window.location.href = newUrl.toString();
//         }
//     };

//     test021v1();
// }

// if (!qs('.modified-test022v2')) {
//     const test022v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test022v2');
//                 // qs('body').classList.add('modified-test009v2');
//             }
//         });

//         const main = '.linieab';

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main);

//                 let img = document.createElement('img');
//                 img.src = 'https://extern.conversion.consulting/cdn/lock.png';

//                 let div = document.createElement('div');
//                 div.innerHTML =
//                     ' <b>Unser Datenschutz-Versprechen:</b> <br>Wir behandeln alle Ihre Daten 100% vertraulich. Wir geben Ihre Daten niemals ohne Ihr Einverständnis an Dritte weiter. <br>Wir ehren Ihr Vertrauen und garantieren die Sicherheit Ihrer Daten.';
//                 div.classList.add('__new-secure-div');

//                 div.insertAdjacentElement('afterbegin', img);
//                 el.insertAdjacentElement('beforebegin', div);
//             }
//         }, 500);
//     };

//     test022v2();
// }

if (!qs('.modified-test022v3')) {
    const test022v3 = () => {
        // workaround for chrome on iOS
        const interval0 = setInterval(() => {
            if (qs('body')) {
                clearInterval(interval0);
                qs('body').classList.add('modified-test022v3');
                // qs('body').classList.add('modified-test009v2');
            }
        });

        const main = '.linieab';

        const interval1 = setInterval(() => {
            if (qs(main)) {
                clearInterval(interval1);

                let el = qs(main);

                let img = document.createElement('img');
                img.src = 'https://extern.conversion.consulting/cdn/lock.png';

                let div = document.createElement('div');
                div.innerHTML =
                    ' <b>Unser Datenschutz-Versprechen:</b> <br>Wir behandeln alle Ihre Daten 100% vertraulich. Wir geben Ihre Daten niemals ohne Ihr Einverständnis an Dritte weiter.';
                div.classList.add('__new-secure-div');

                div.insertAdjacentElement('afterbegin', img);
                el.insertAdjacentElement('beforebegin', div);
            }
        }, 500);
    };

    test022v3();
}
