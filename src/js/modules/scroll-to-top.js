import config from '../config.js';
import { $on, qs } from './utils';
import { scrollToTopButton } from '../templates/scroll-to-top.js';

/**
 * generate scroll to top button
 */
$on(document, 'DOMContentLoaded', () => {
    if (!qs('.scroll-to-top')) {
        if (typeof scrollToTopOptions == 'undefined') {
            document.body.insertAdjacentHTML('beforeend', scrollToTopButton());
        } else {
            document.body.insertAdjacentHTML(
                'beforeend',
                // eslint-disable-next-line no-undef
                scrollToTopButton(scrollToTopOptions.title, scrollToTopOptions.text)
            );
        }
    }

    const interval = setInterval(() => {
        if (qs('.scroll-to-top')) {
            clearInterval(interval);

            let el = qs('.scroll-to-top');

            const scrollToTop = () => {
                if (document.body.scrollTop > config.scrollOffset ||
                    document.documentElement.scrollTop > config.scrollOffset
                ) {
                    el.style.display = 'block';
                } else {
                    el.style.display = 'none';
                }
            };

            $on(el, 'click', () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });

            $on(window, 'scroll', () => {
                scrollToTop();
            });

            scrollToTop();
        }
    }, 500);
});
