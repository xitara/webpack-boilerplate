import { $on, qsa } from './utils';

/**
 * add timezone-offset to links with data-tz
 */
$on(document, 'DOMContentLoaded', () => {
    qsa('[data-tz]').forEach((elm) => {
        let d = new Date();
        elm.href += '/' + d.getTimezoneOffset();
    });
});
