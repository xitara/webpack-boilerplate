import config from '../config';
import { on, qs, qsa } from './utils';

/**
 * smooth scrolling on data-smooth-scroll
 */
export const smoothscroll = () => {
    qsa('[data-smooth-scroll]').forEach((elm) => {
        on(elm, 'click', (ev) => {
            ev.preventDefault();

            let scrollOffset: number = config.scrollOffset;

            if (Number((elm as HTMLElement).dataset.smoothScroll) > 0) {
                scrollOffset = Number((elm as HTMLElement).dataset.smoothScroll);
            }

            scroll({
                top:
                    Number(
                        (qs((ev.currentTarget as HTMLElement).getAttribute('href')) as HTMLElement)
                            .offsetTop
                    ) - scrollOffset,
                left: 0,
                behavior: 'smooth',
            });
        });
    });
};
