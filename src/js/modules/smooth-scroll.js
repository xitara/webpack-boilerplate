import config from '../config.js';
import { $on, qs, qsa } from './utils';

/**
 * smooth scrolling on data-smooth-scroll
 */
$on(document, 'DOMContentLoaded', () => {
    qsa('[data-smooth-scroll]').forEach((elm) => {
        $on(elm, 'click', (ev) => {
            ev.preventDefault();

            let scrollOffset = config.scrollOffset;

            if (elm.dataset.smoothScroll > 0) {
                scrollOffset = elm.dataset.smoothScroll;
            }

            scroll({
                top: qs(ev.currentTarget.getAttribute('href')).offsetTop - scrollOffset,
                left: 0,
                behavior: 'smooth',
            });
        });
    });
});
