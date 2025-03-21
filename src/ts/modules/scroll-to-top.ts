import config from '../config';
import { on, qs } from './utils';
import { scrollToTopButton } from '../templates/scroll-to-top.js';

declare const scrollToTopOptions: { title?: string; text?: string };

/**
 * generate scroll to top button
 */
on(document, 'DOMContentLoaded', () => {
    if (!qs('.scroll-to-top')) {
        if (typeof scrollToTopOptions == 'undefined') {
            document.body.insertAdjacentHTML('beforeend', scrollToTopButton());
        } else {
            document.body.insertAdjacentHTML(
                'beforeend',
                scrollToTopButton(scrollToTopOptions.title, scrollToTopOptions.text)
            );
        }
    }

    const interval = setInterval(() => {
        if (qs('.scroll-to-top')) {
            clearInterval(interval);

            let el = qs('.scroll-to-top') as HTMLElement;

            const scrollToTop = () => {
                if (
                    document.body.scrollTop > config.scrollOffset ||
                    document.documentElement.scrollTop > config.scrollOffset
                ) {
                    (el as HTMLElement).style.display = 'block';
                } else {
                    (el as HTMLElement).style.display = 'none';
                }
            };

            on(el, 'click', () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });

            on(window, 'scroll', () => {
                scrollToTop();
            });

            scrollToTop();
        }
    }, 500);
});
