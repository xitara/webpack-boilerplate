// import './config.js';
// import SimpleBar from 'simplebar';
// import GLightbox from 'glightbox';
// import Rellax from 'rellax';
// import MicroModal from 'micromodal';
// import LazyLoad from "vanilla-lazyload";
import { tns } from 'tiny-slider/src/tiny-slider';
// import './modules/bootstrap-modules.js';
// import "./modules/highlight";
// import './modules/smooth-scroll.js';
// import './modules/scroll-to-top.js';
// import './modules/timezone-offset.js';
import { buybox_floating, buybox_dropdown } from './modules/buybox-floating.mjs';
import { initTestimonialsSlider } from './modules/testimonials-slider';
import { fetchData, qs, qsa, on, trigger } from './modules/utils';
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

//         const cartQuantity = qs('.cart--quantity');
//         const main = '.navigation--entry.entry--cart';
//         let displayButton = 'none';

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main).cloneNode(true) as HTMLElement;

//                 if (cartQuantity) {
//                     let quantity = (cartQuantity as HTMLElement).innerText;
//                     console.log(quantity);

//                     if (parseInt(quantity) > 0) {
//                         displayButton = 'block';
//                     }
//                 }

//                 el.classList.add('__new-cart-button');
//                 el.classList.add(
//                     'buybox--button',
//                     'buybox--button-unit',
//                     'block',
//                     'btn',
//                     'is--icon-right',
//                     'is--center',
//                     'is--large'
//                 );

//                 let a = qs('a', el) as HTMLElement;
//                 a.innerHTML = 'Warenkorb ansehen <i class="icon--basket"></i>';

//                 qs('.buybox--button-unit').insertAdjacentElement('afterend', el);

//                 el.style.display = displayButton || 'none';
//             }
//         }, 500);
//     };

//     test021v1();
// }

// if (!qs('.modified-test021v2')) {
//     // console.log('startup');

//     const test021v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test021v2');
//             }
//         });

//         const cartQuantity = qs('.cart--quantity');
//         const main = '.navigation--entry.entry--cart';
//         let displayButton = 'none';

//         console.log('ab~', cartQuantity);

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main).cloneNode(true) as HTMLElement;

//                 if (cartQuantity) {
//                     let quantity = (cartQuantity as HTMLElement).innerText;
//                     console.log('ab~', quantity);

//                     if (parseInt(quantity) > 0) {
//                         displayButton = 'block';
//                     }
//                 }

//                 el.classList.add('__new-cart-button');
//                 el.classList.add(
//                     'buybox--button',
//                     'block',
//                     'btn',
//                     'is--icon-right',
//                     'is--center',
//                     'is--large'
//                 );

//                 let a = qs('a', el) as HTMLElement;
//                 a.innerHTML = 'Warenkorb ansehen <i class="icon--basket"></i>';

//                 qs('.buybox--button-unit').insertAdjacentElement('afterend', el);

//                 // qs(main).classList.add('__new-cart-button2');

//                 let wrapper = qs('.buybox--button-container').cloneNode(true) as HTMLElement;
//                 wrapper.classList.add('__new-cart-button-wrapper');

//                 qs('.buybox--button-unit ~ .__new-cart-button').remove();
//                 qs('.buybox--button-unit').remove();
//                 // qsa('.__new-cart-button')[1].remove();

//                 qs('.amazon-pay-button-wrapper.buybox--button', wrapper).remove();
//                 qs('.paypal-unified-ec--outer-button-container', wrapper).remove();

//                 qs('.buybox--form').insertAdjacentElement('afterbegin', wrapper);

//                 // console.log('ab~', el);
//                 // console.log('ab~', displayButton);

//                 (qs('.__new-cart-button') as HTMLElement).style.display = displayButton || 'none';

//                 // if (displayButton == 'none') {
//                 // el.classList.add('is--hidden');
//                 // }
//             }
//         }, 500);
//     };

//     test021v2();
// }

// const testimonials: { stars: number; date: string; name: string; comment: string }[] = [];

// testimonials.push({
//     stars: 5.0,
//     date: '12.06.2024',
//     name: 'Anonym',
//     comment:
//         'Habe schon mehrmals hier bestellt und bin immer sehr zufrieden. Schnelle Lieferung, einwandfreie und gut verpackte Artikel und immer ein Update zum Versand und zur Lieferung. Gerne wieder! 👍',
// });

// testimonials.push({
//     stars: 5.0,
//     date: '31.05.2024',
//     name: 'Anonym',
//     comment:
//         '<h4>Toller Kundenservice</h4>Schnelle Lieferung, sehr gute Ware und ein top Kundenservice, hilfsbereit und Lösungsorientiert. Ich werde wieder bestellen.',
// });

// testimonials.push({
//     stars: 5.0,
//     date: 'vor 4 Tagen',
//     name: 'Anonym',
//     comment:
//         '<h4>Hammer Helm</h4>Schnelle Lieferung alles gut. Ich bin sehr zufrieden. Eine klare Kaufempfehlung.',
// });

// testimonials.push({
//     stars: 5.0,
//     date: '01.06.2024',
//     name: 'Anonym',
//     comment: 'Mega, zufrieden; Ausgesucht, bestellt, passt, geiles Design. Nichts zu meckern',
// });

// testimonials.push({
//     stars: 5.0,
//     date: 'vor 12 Tagen',
//     name: 'Anonym',
//     comment: 'Alles ohne Probleme. Lieferzeit. Retoure, Neubestellung',
// });

// testimonials.push({
//     stars: 5.0,
//     date: '08.06.2024',
//     name: 'Anonym',
//     comment: 'Schnelle Lieferung cooles produkt',
// });

// testimonials.push({
//     stars: 5.0,
//     date: 'vor 13 Tagen',
//     name: 'Anonym',
//     comment: 'Unkompliziert und faire Preise',
// });

// testimonials.push({
//     stars: 5.0,
//     date: '11.06.2024',
//     name: 'Anonym',
//     comment: 'Top Lieferung, alles bestens',
// });

// testimonials.push({
//     stars: 5.0,
//     date: 'vor 13 Tagen',
//     name: 'Anonym',
//     comment: 'Hat alles super geklappt',
// });

// testimonials.push({
//     stars: 5.0,
//     date: 'vor 13 Tagen',
//     name: 'Anonym',
//     comment: 'Alles super',
// });

// testimonials.push({
//     stars: 5.0,
//     date: '10.06.2024',
//     name: 'Anonym',
//     comment: 'Top Service',
// });

// testimonials.push({
//     stars: 5.0,
//     date: '05.06.2024',
//     name: 'Anonym',
//     comment: '<h4>The Rebelmaker</h4>Alles Super',
// });

// testimonials.push({
//     stars: 5.0,
//     date: 'vor 12 Tagen',
//     name: 'Anonym',
//     comment: 'Sehr gut !',
// });

// testimonials.push({
//     stars: 5.0,
//     date: '26.04.2024',
//     name: 'Anonym',
//     comment:
//         'Sehr schnelle Lieferung sehr sehr schnelle Lieferung. Amazon ist dagegen langsam. Der Umtausch ging ohne Probleme, auch sehr sehr schnell.👍👍👍',
// });

// if (!qs('.modified-test22v1')) {
//     const test22v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test22v1');
//             }
//         });

//         const main = '.emotion--container';

//         const interval1 = setInterval(() => {
//             let section = document.createElement('section');
//             const sliderClass = 'testimonials--outer-container';
//             section.classList.add(sliderClass);

//             const classes = [
//                 'emotion--element',
//                 'col-2',
//                 'row-1',
//                 'start-col-1',
//                 'start-row-1',
//                 'col-xs-2',
//                 'start-col-xs-1',
//                 'row-xs-1',
//                 'start-row-xs-1',
//                 'is--hidden-xs',
//                 'col-s-2',
//                 'start-col-s-1',
//                 'row-s-1',
//                 'start-row-s-1',
//                 'is--hidden-s',
//                 'col-m-6',
//                 'start-col-m-2',
//                 'row-m-2',
//                 'start-row-m-41',
//                 'col-l-6',
//                 'start-col-l-2',
//                 'row-l-2',
//                 'start-row-l-42',
//                 'col-xl-6',
//                 'start-col-xl-2',
//                 'row-xl-2',
//                 'start-row-xl-39',
//             ];

//             classes.forEach((className) => {
//                 section.classList.add(className);
//             });

//             qs(main).insertAdjacentElement('beforeend', section);

//             const sliderId = 'new-review-slider';

//             if (qs('.' + sliderClass)) {
//                 clearInterval(interval1);

//                 let slider = initTestimonialsSlider(
//                     testimonials,
//                     '.' + sliderClass,
//                     0,
//                     true,
//                     sliderId
//                 );
//             }
//         }, 500);

//         const interval2 = setInterval(() => {
//             let section = document.createElement('section');
//             const sliderClass = 'testimonials--outer-container2';
//             section.classList.add(sliderClass);

//             const classes = [
//                 'emotion--element',
//                 'col-2',
//                 'row-1',
//                 'start-col-1',
//                 'start-row-1',
//                 'col-xs-2',
//                 'start-col-xs-1',
//                 'row-xs-5',
//                 'start-row-xs-112',
//                 'col-s-2',
//                 'start-col-s-1',
//                 'row-s-5',
//                 'start-row-s-112',
//                 'col-m-6',
//                 'start-col-m-2',
//                 'row-m-2',
//                 'start-row-m-45',
//                 'col-l-6',
//                 'start-col-l-2',
//                 'row-l-2',
//                 'start-row-l-46',
//                 'col-xl-6',
//                 'start-col-xl-2',
//                 'row-xl-2',
//                 'start-row-xl-43',
//             ];

//             classes.forEach((className) => {
//                 section.classList.add(className);
//             });

//             qs(main).insertAdjacentElement('beforeend', section);

//             const sliderId = 'new-review-slider2';

//             if (qs('.' + sliderClass)) {
//                 clearInterval(interval2);

//                 let slider = initTestimonialsSlider(
//                     testimonials,
//                     '.' + sliderClass,
//                     0,
//                     true,
//                     sliderId
//                 );
//             }
//         }, 500);
//     };

//     test22v1();
// }

// if (!qs('.modified-test24v1')) {
//     const test24v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test24v1');
//             }
//         });

//         const main = '.filter--trigger'; //  Filtern

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let html = qs(main).innerHTML.replace('Filtern', 'Was suchst Du?');
//                 qs(main).innerHTML = html;
//             }
//         });
//     };

//     test24v1();
// }

// if (!qs('.modified-test24v2')) {
//     const test24v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test24v2');
//             }
//         });

//         const main = '.filter--trigger'; //  Filtern

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let html = qs(main).innerHTML.replace('Filtern', 'Wonach suchst Du?');
//                 qs(main).innerHTML = html;
//             }
//         });
//     };

//     test24v2();
// }

// Zusammenfassung #004v1, #007v1, #021v2, #018v1
// let offsetTop = 300;
// let offsetBottom = 400;

// const addCartPopup = () => {
//     let el = qs('[name="sAddToBasket"]');
//     let elm = qs('.configurator--form select');
//     let price = (qs('.product--buybox .price--content') as HTMLElement).innerText;
//     let name = (qs('.product--buybox .product--title') as HTMLElement).innerText;

//     /**
//      * generate dropdown for sizes etc. if exists
//      */
//     let selectHtml = '';
//     if (qs('.product--configurator')) {
//         let el1 = qs('.product--configurator').cloneNode(true) as Element;
//         let heading = qs('.configurator--label', el1);
//         let select = qs('select', el1);
//         select.classList.add('__new-configurator-dropdown');
//         select.removeAttribute('data-ajax-select-variants');
//         select.setAttribute('name', 'new-configurator-dropdown');
//         // selectHtml = buybox_dropdown(heading.innerText, select.outerHTML);
//         selectHtml = buybox_dropdown('Wähle deine Größe:', select.outerHTML);
//     }

//     qs('.buybox--button-container', el).insertAdjacentHTML(
//         'afterend',
//         buybox_floating(price, name, selectHtml)
//     );

//     if (qs('.__new-configurator-dropdown')) {
//         let ncd = qs('.__new-configurator-dropdown');

//         on(ncd, 'change', () => {
//             qsa('option', elm).forEach((elm2) => {
//                 elm2.removeAttribute('selected');
//             });

//             let selectedOption = qs('option:checked', ncd) as HTMLOptionElement;
//             qs('option[value="' + selectedOption.value + '"]', elm).setAttribute(
//                 'selected',
//                 'selected'
//             );

//             // eslint-disable-next-line no-undef
//             $('.configurator--form select').trigger('change');
//             trigger(qs('.configurator--form select'), 'change');

//             // test 9v3
//             trigger(document as unknown as Element, 'scroll');
//         });
//     }

//     on(document, 'scroll', () => {
//         if (qs('#buybox-floating')) {
//             // above top-offset
//             if (window.scrollY < offsetTop) {
//                 qs('#buybox-floating').classList.add('floating-buybox-hidden');
//             }

//             // between top-offset and botrtom-offset
//             if (
//                 window.scrollY >= offsetTop &&
//                 qs('body').scrollHeight - window.scrollY - window.innerHeight >= offsetBottom
//             ) {
//                 qs('#buybox-floating').classList.remove('floating-buybox-hidden');
//             }

//             // below bottom-offset
//             if (qs('body').scrollHeight - window.scrollY - window.innerHeight < offsetBottom) {
//                 qs('#buybox-floating').classList.add('floating-buybox-hidden');
//             }
//         }
//     });

//     trigger(document as unknown as Element, 'scroll');
// };

// addCartPopup();

// if (!qs('.modified-test004v1')) {
//     qs('body').classList.add('modified-test004v1');

//     let logo;

//     if (qs('.header-logo-main-link')) {
//         logo = qs('.header-logo-main-link > img');
//         qs('.header-logo-main').parentElement.parentElement.remove();
//     }

//     if (qs('.home-link')) {
//         let home = qs('.home-link');
//         home.innerHTML = logo.outerHTML;
//         home.classList.add('new-home-link');
//         home.classList.remove('home-link');
//     }

//     let el1 = qs('.main-navigation-menu a:nth-of-type(7)');
//     let el2 = qs('.main-navigation-menu a:nth-of-type(8)');
//     let el3 = qs('.main-navigation-menu a:nth-of-type(9)');
//     let el4 = qs('.main-navigation-menu a:nth-of-type(10)');

//     el1.remove();
//     el2.remove();
//     el3.remove();
//     el4.remove();

//     let first = qs('.main-navigation-menu a:nth-of-type(1)');
//     first.insertAdjacentHTML('afterend', el1.outerHTML);
//     first.insertAdjacentHTML('afterend', el4.outerHTML);
//     first.insertAdjacentHTML('afterend', el3.outerHTML);
//     first.insertAdjacentHTML('afterend', el2.outerHTML);
// }

// if (!qs('.modified-test007v1')) {
//     // workaround for chrome on iOS
//     const interval0 = setInterval(() => {
//         if (qs('body')) {
//             clearInterval(interval0);
//             qs('body').classList.add('modified-test007v1');
//         }
//     });

//     const test007v1 = () => {
//         const interval1 = setInterval(() => {
//             if (qs('.buybox--inner .product--tax')) {
//                 clearInterval(interval1);

//                 let html = qs('.buybox--inner .product--tax').outerHTML;
//                 html = html.replace('<a', 'Versand in DE frei <a');
//                 html = html.replace('zzgl. Versandkosten', '(Versandkosten Ausland)');
//                 qs('.buybox--inner .product--tax').outerHTML = html;
//             }
//         }, 500);
//     };

//     test007v1();
// }

// const testimonials: any[] = [];

// testimonials.push({
//     date: '12.06.2024',
//     comment:
//         'Habe schon mehrmals hier bestellt und bin immer sehr zufrieden. Schnelle Lieferung, einwandfreie und gut verpackte Artikel und immer ein Update zum Versand und zur Lieferung. Gerne wieder! 👍',
// });

// testimonials.push({
//     date: '31.05.2024',
//     comment:
//         '<h4>Toller Kundenservice</h4>Schnelle Lieferung, sehr gute Ware und ein top Kundenservice, hilfsbereit und Lösungsorientiert. Ich werde wieder bestellen.',
// });

// testimonials.push({
//     date: 'vor 4 Tagen',
//     comment:
//         '<h4>Hammer Helm</h4>Schnelle Lieferung alles gut. Ich bin sehr zufrieden. Eine klare Kaufempfehlung.',
// });

// testimonials.push({
//     date: '01.06.2024',
//     comment: 'Mega, zufrieden; Ausgesucht, bestellt, passt, geiles Design. Nichts zu meckern',
// });

// testimonials.push({
//     date: 'vor 12 Tagen',
//     comment: 'Alles ohne Probleme. Lieferzeit. Retoure, Neubestellung',
// });

// testimonials.push({
//     date: '08.06.2024',
//     comment: 'Schnelle Lieferung cooles produkt',
// });

// testimonials.push({
//     date: 'vor 13 Tagen',
//     comment: 'Unkompliziert und faire Preise',
// });

// testimonials.push({
//     date: '11.06.2024',
//     comment: 'Top Lieferung, alles bestens',
// });

// testimonials.push({
//     date: 'vor 13 Tagen',
//     comment: 'Hat alles super geklappt',
// });

// testimonials.push({
//     date: 'vor 13 Tagen',
//     comment: 'Alles super',
// });

// testimonials.push({
//     date: '10.06.2024',
//     comment: 'Top Service',
// });

// testimonials.push({
//     date: '05.06.2024',
//     comment: '<h4>The Rebelmaker</h4>Alles Super',
// });

// testimonials.push({
//     date: 'vor 12 Tagen',
//     comment: 'Sehr gut !',
// });

// testimonials.push({
//     date: '26.04.2024',
//     comment:
//         'Sehr schnelle Lieferung sehr sehr schnelle Lieferung. Amazon ist dagegen langsam. Der Umtausch ging ohne Probleme, auch sehr sehr schnell.👍👍👍',
// });

// // console.log(testimonials);

// if (!qs('.modified-test018v1')) {
//     const test018v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test018v1');
//             }
//         });

//         const interval1 = setInterval(() => {
//             if (qs('.product--detail-upper')) {
//                 clearInterval(interval1);

//                 qs('.product--detail-upper').insertAdjacentHTML(
//                     'afterend',
//                     '<div id="new-review-slider"></div>'
//                 );

//                 let el = qs('#new-review-slider');

//                 for (let i = 0; i < 6; i++) {
//                     // let data = testimonials[rand(0, 12)];
//                     let data = testimonials[i];
//                     let html = testimonial(data.comment, data.date);

//                     el.insertAdjacentHTML('afterbegin', html);
//                 }

//                 tns({
//                     container: '#new-review-slider',
//                     items: 4,
//                     slideBy: 2,
//                     autoplay: true,
//                     // gutter: 15,
//                     controls: true,
//                     // controlsText: ['&lsaquo;', '&rsaquo;'],
//                     controlsText: ['‹', '›'],
//                     nav: false,
//                     center: true,
//                     responsive: {
//                         0: {
//                             items: 1,
//                         },
//                         640: {
//                             items: 2,
//                         },
//                         900: {
//                             items: 3,
//                         },
//                         1200: {
//                             items: 4,
//                         },
//                     },
//                 });
//             }
//         }, 500);
//     };

//     test018v1();
// }

// if (!qs('.modified-test021v2')) {
//     // console.log('startup');

//     const test021v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test021v2');
//             }
//         });

//         const cartQuantity = qs('.cart--quantity');
//         const main = '.navigation--entry.entry--cart';
//         let displayButton = 'none';

//         console.log('ab~', cartQuantity);

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 let el = qs(main).cloneNode(true) as HTMLElement;

//                 if (cartQuantity) {
//                     let quantity = (cartQuantity as HTMLElement).innerText;
//                     console.log('ab~', quantity);

//                     if (parseInt(quantity) > 0) {
//                         displayButton = 'block';
//                     }
//                 }

//                 el.classList.add('__new-cart-button');
//                 el.classList.add(
//                     'buybox--button',
//                     'block',
//                     'btn',
//                     'is--icon-right',
//                     'is--center',
//                     'is--large'
//                 );

//                 let a = qs('a', el) as HTMLElement;
//                 a.innerHTML = 'Warenkorb ansehen <i class="icon--basket"></i>';

//                 qs('.buybox--button-unit').insertAdjacentElement('afterend', el);

//                 // qs(main).classList.add('__new-cart-button2');

//                 let wrapper = qs('.buybox--button-container').cloneNode(true) as HTMLElement;
//                 wrapper.classList.add('__new-cart-button-wrapper');

//                 qs('.buybox--button-unit ~ .__new-cart-button').remove();
//                 qs('.buybox--button-unit').remove();
//                 // qsa('.__new-cart-button')[1].remove();

//                 qs('.amazon-pay-button-wrapper.buybox--button', wrapper).remove();
//                 qs('.paypal-unified-ec--outer-button-container', wrapper).remove();

//                 qs('.buybox--form').insertAdjacentElement('afterbegin', wrapper);

//                 // console.log('ab~', el);
//                 // console.log('ab~', displayButton);

//                 (qs('.__new-cart-button') as HTMLElement).style.display = displayButton || 'none';

//                 // if (displayButton == 'none') {
//                 // el.classList.add('is--hidden');
//                 // }
//             }
//         }, 500);
//     };

//     test021v2();
// }

// if (!qs('.modified-test25v2')) {
//     const test25v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test25v2');
//             }
//         });

//         const main = '.buy-btn--cart-text'; //  Filtern

//         const interval1 = setInterval(() => {
//             console.log('~ab interval');

//             if (qs(main)) {
//                 clearInterval(interval1);

//                 qsa(main).forEach((el, i) => {
//                     let price = (qs('.price--content') as HTMLElement)?.innerText;
//                     // let text = (qs('.buy-btn--cart-text', el) as HTMLElement)?.innerText;

//                     // console.log('ab~ price', price);
//                     // console.log('ab~ main', qs(main));
//                     // console.log('ab~ el', el);

//                     if (price && !qs('.__new-button-price', el)) {
//                         // console.log('ab~ first element');
//                         (el as HTMLElement).innerHTML =
//                             (el as HTMLElement).innerText +
//                             '<span class="__new-button-price"> für ' +
//                             price +
//                             '</span>';
//                     }
//                 });
//             }
//         });

//         const main2 = '#buybox-floating'; //  Filtern

//         const interval2 = setInterval(() => {
//             console.log('~ab interval2');

//             if (qs(main2)) {
//                 clearInterval(interval2);

//                 // console.log('ab~ main', qs(main2));

//                 if (qs('.buybox--button-unit')) {
//                     qs('#buybox-floating .buybox--button').innerHTML =
//                         qs('.buybox--button-unit').innerHTML;
//                 }
//             }
//         });
//     };

//     test25v2();

//     if (typeof $ !== 'undefined') {
//         $(document).on('ajaxComplete', function (ev, req, conf) {
//             // console.log(ev);
//             test25v2();
//         });
//     }
// }

// if (!qs('.modified-test25v3')) {
//     const test25v3 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test25v3');
//             }
//         });

//         const main = '.buy-btn--cart-text'; //  Filtern

//         const interval1 = setInterval(() => {
//             if (qs(main)) {
//                 clearInterval(interval1);

//                 qsa(main).forEach((el) => {
//                     let price = (qs('.price--content') as HTMLElement)?.innerText;

//                     console.log('ab~', price);

//                     if (price && !qs('.__new-button-price', el)) {
//                         (el as HTMLElement).innerHTML =
//                             (el as HTMLElement).innerText +
//                             '<span class="__new-button-price">' +
//                             ' (' +
//                             price +
//                             ')' +
//                             '</span>';
//                     }
//                 });
//             }
//         });
//     };

//     test25v3();

//     $(document).on('ajaxComplete', function (ev, req, conf) {
//         // console.log(ev);
//         test25v3();
//     });
// }

// if (!qs('.modified-test26v1')) {
//     const test26v1 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test11v1');
//                 qs('body').classList.add('modified-test26v1');
//             }
//         });
//     };

//     test26v1();
// }

// if (!qs('.modified-test26v2')) {
//     const test26v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test11v1');
//                 qs('body').classList.add('modified-test26v2');
//             }
//         });

//         const main = '.header-main';
//         let html = `Fragen zur bestellung?<br><a href="tel:+499619302410">0961 - 930 24 10</a> <small>(Mo-Fr 9.00-18.00 Uhr)</small>`;
//         let timer1 = 10;
//         // console.log('ab~', html);

//         // console.log('ab~ href', window.location.href);
//         // console.log('ab~ href', window.location.href.indexOf('checkout/cart'));

//         // check if URL contains "checkout/cart"
//         if (window.location.href.indexOf('checkout/cart') > -1) {
//             const interval1 = setInterval(() => {
//                 if (qs(main)) {
//                     clearInterval(interval1);

//                     qsa(main).forEach((el) => {
//                         let div = document.createElement('div');
//                         div.classList.add('__new-header-phone1');
//                         div.innerHTML = html;

//                         if (!qs('.__new-header-phone1')) {
//                             el.insertAdjacentElement('afterend', div);
//                         }
//                     });
//                 }

//                 if (timer1-- <= 0) {
//                     clearInterval(interval1);
//                 }
//             }, 500);
//         }

//         const main2 = '.container--title';
//         // let timer2 = 10;
//         // console.log('ab~', qs(main2));

//         const interval2 = setInterval(() => {
//             // console.log('ab~ interval2');

//             if (qs(main2)) {
//                 clearInterval(interval2);

//                 // console.log('ab~ interval2 inside');

//                 qsa(main2).forEach((el) => {
//                     let div = document.createElement('div');
//                     div.classList.add('__new-header-phone2');
//                     div.innerHTML = html;

//                     // console.log('ab~', qs('.__new-header-phone2'));

//                     if (!qs('.__new-header-phone2')) {
//                         el.insertAdjacentElement('afterend', div);
//                     }
//                 });
//             }

//             // if (timer2-- <= 0) {
//             //     clearInterval(interval2);
//             // }
//         }, 500);
//     };

//     test26v2();

//     $(document).on('ajaxComplete', function (ev, req, conf) {
//         // console.log(ev);
//         test26v2();
//     });
// }

// if (!qs('.modified-test27v2')) {
//     const test27v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test27v2');
//             }
//         });

//         const main = '.cel.support-text';
//         let html = `Fragen zur Bestellung?<br><a href="tel:+499619302410">0961 - 930 24 10</a> <small>(Mo-Fr 9.00-18.00 Uhr)</small>`;
//         let timer1 = 10;
//         // console.log('ab~', html);

//         console.log('ab~ href', window.location.href);
//         console.log('ab~ href', window.location.href.indexOf('checkout/cart'));

//         // check if URL contains "checkout/cart"
//         if (window.location.href.indexOf('checkout') > -1) {
//             const interval1 = setInterval(() => {
//                 if (qs(main)) {
//                     clearInterval(interval1);

//                     qsa(main).forEach((el) => {
//                         // let div = document.createElement('div');
//                         // div.classList.add('__new-header-phone1');

//                         qs(main).innerHTML = html;

//                         // if (!qs('.__new-header-phone1')) {
//                         // el.insertAdjacentElement('afterend', div);
//                         // }
//                     });
//                 }

//                 if (timer1-- <= 0) {
//                     clearInterval(interval1);
//                 }
//             }, 500);
//         }
//     };

//     // $(document).on('ajaxComplete', function (ev, req, conf) {
//     // console.log(ev);
//     // test27v2();
//     // });

//     test27v2();
// }

// if (!qs('.modified-test27v3')) {
//     const test27v3 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test27v3');
//             }
//         });

//         const main = '.cel.support-text';
//         let html = `Fragen zur Bestellung?<br><a href="tel:+499619302410">0961 - 930 24 10</a> <small>(Mo-Fr 9.00-18.00 Uhr)</small>`;
//         let timer1 = 10;
//         // console.log('ab~', html);

//         // console.log('ab~ href', window.location.href);
//         // console.log('ab~ href', window.location.href.indexOf('checkout/cart'));

//         // check if URL contains "checkout/cart"
//         if (window.location.href.indexOf('checkout/') > -1) {
//             const interval1 = setInterval(() => {
//                 if (qs(main)) {
//                     clearInterval(interval1);

//                     qsa(main).forEach((el) => {
//                         // let div = document.createElement('div');
//                         // div.classList.add('__new-header-phone1');

//                         qs(main).innerHTML = html;

//                         // if (!qs('.__new-header-phone1')) {
//                         // el.insertAdjacentElement('afterend', div);
//                         // }
//                     });
//                 }

//                 if (timer1-- <= 0) {
//                     clearInterval(interval1);
//                 }
//             }, 500);
//         }
//     };

//     // $(document).on('ajaxComplete', function (ev, req, conf) {
//     //     // console.log(ev);
//     //     test27v3();
//     // });

//     test27v3();
// }

// if (!qs('.modified-test28v2')) {
//     const test28v2 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test28v2');
//             }
//         });

//         const main1 = qs('.ShippingDateTextContainer');
//         let timer1 = 10;

//         const interval1 = setInterval(() => {
//             if (main1) {
//                 clearInterval(interval1);

//                 let dateString = (qs('b', main1) as HTMLElement).innerText?.split(', ')[1];

//                 if (dateString) {
//                     console.log('~ab datestring:', dateString);
//                 }

//                 let text = 'Bei Bestellung bis ' + dateString + ' - 14:00 Uhr';
//                 let html = main1.innerHTML.split('<br>')[0] + '<br>' + text;

//                 main1.innerHTML = html;
//             }

//             if (timer1-- <= 0) {
//                 clearInterval(interval1);
//             }
//         }, 500);
//     };

//     // $(document).on('ajaxComplete', function (ev, req, conf) {
//     //     // console.log(ev);
//     //     test28v2();
//     // });

//     test28v2();
// }

// if (!qs('.modified-test28v3')) {
//     const test28v3 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test28v3');
//             }
//         });

//         const main1 = qs('.ShippingDateTextContainer');
//         let timer1 = 10;

//         const interval1 = setInterval(() => {
//             if (main1) {
//                 clearInterval(interval1);

//                 let dateString = (qs('b', main1) as HTMLElement).innerText?.split(', ')[1];

//                 if (dateString) {
//                     console.log('~ab datestring:', dateString);
//                 }

//                 let icon = 'https://app.shoplytics.de/scripts/images/Siegel.svg';
//                 let imgHtml = '<img src="' + icon + '" alt="Siegel">';
//                 let text = 'Bei Bestellung bis ' + dateString + ' - 14:00 Uhr';
//                 let html = main1.innerHTML.split('<br>')[0] + '<br>' + text + imgHtml;

//                 main1.innerHTML = html;
//             }

//             if (timer1-- <= 0) {
//                 clearInterval(interval1);
//             }
//         }, 500);
//     };

//     // $(document).on('ajaxComplete', function (ev, req, conf) {
//     //     // console.log(ev);
//     //     test28v3();
//     // });

//     test28v3();
// }

// if (!qs('.modified-test28v4')) {
//     const test28v4 = () => {
//         // workaround for chrome on iOS
//         const interval0 = setInterval(() => {
//             if (qs('body')) {
//                 clearInterval(interval0);
//                 qs('body').classList.add('modified-test28v4');
//             }
//         });

//         const main1 = qs('.ShippingDateTextContainer');
//         let timer1 = 10;

//         const interval1 = setInterval(() => {
//             if (main1) {
//                 clearInterval(interval1);

//                 let dateString = (qs('b', main1) as HTMLElement).innerText?.split(', ')[1];

//                 if (dateString) {
//                     console.log('~ab datestring:', dateString);
//                 }

//                 let text = 'Bei Bestellung bis ' + dateString + ' um 14:00 Uhr';
//                 let html = main1.innerHTML.split('<br>')[0] + '<br>' + text;

//                 main1.innerHTML = html;
//             }

//             if (timer1-- <= 0) {
//                 clearInterval(interval1);
//             }
//         }, 500);
//     };

//     // $(document).on('ajaxComplete', function (ev, req, conf) {
//     //     // console.log(ev);
//     //     test28v4();
//     // });

//     test28v4();
// }

if (!qs('.modified-test029v2')) {
    const test029v2 = () => {
        // workaround for chrome on iOS
        const interval0 = setInterval(() => {
            if (qs('body')) {
                clearInterval(interval0);
                qs('body').classList.add('modified-test029v2');
            }
        });

        const main = '.register--action';

        const interval1 = setInterval(() => {
            if (qs(main)) {
                clearInterval(interval1);

                let el = qs(main);

                // console.log(el);

                let img = document.createElement('img');
                img.src = 'https://extern.conversion.consulting/cdn/lock.png';

                let div1 = document.createElement('div');
                div1.classList.add('__new-div2');
                let div2 = document.createElement('div');
                div2.innerHTML = ' Sicherer Checkout durch 256-Bit TLS-Verschlüsselung.';

                // console.log(div);

                div1.insertAdjacentElement('afterbegin', div2);
                div2.insertAdjacentElement('afterbegin', img);

                // el.insertAdjacentElement('afterbegin', div1.cloneNode(true) as HTMLElement);
                el.insertAdjacentElement('beforeend', div1.cloneNode(true) as HTMLElement);
                // qsa('.actions--bottom')[1].insertAdjacentElement('beforeend', div1);
            }
        }, 500);
    };

    test029v2();
}
