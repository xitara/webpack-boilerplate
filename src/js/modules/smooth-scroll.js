import { $on, qs, qsa } from './utils';

/**
 * smooth scrolling on data-smooth-scroll
 */
$on(document, 'DOMContentLoaded', () => {
    qsa('[data-smooth-scroll]').forEach((elm) => {
        $on(elm, 'click', (ev) => {
            ev.preventDefault();

            scroll({
                top: qs(ev.currentTarget.getAttribute('href')).offsetTop,
                left: 0,
                behavior: 'smooth',
            });
        });
    });
});
