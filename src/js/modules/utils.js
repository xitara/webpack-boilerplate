import config from '../config.js';

/**
 * initiate list of event listeners
 *
 * @type {Array}
 */
export let _listeners = [];

/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export const qs = (selector, scope) => {
    return (scope || document).querySelector(selector);
};

/**
 * querySelectorAll wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export const qsa = (selector, scope) => {
    return [...(scope || document).querySelectorAll(selector)];
};

/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
export const $on = (target, type, callback, capture) => {
    _listeners.push({ target: target, type: type, callback: callback, capture: !!capture });
    target.addEventListener(type, callback, !!capture);
    // target.preventDefault();
    // target.stopPropagation();

    if (type == 'click') {
        // eslint-disable-next-line prettier/prettier
        _listeners.push({
            target: target,
            type: 'touchend',
            callback: callback,
            capture: !!capture,
        });
        target.addEventListener('touchend', callback, !!capture);
        // target.preventDefault();
        // target.stopPropagation();
    }
};

/**
 * removeEventListener
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to remove
 */
export const $off = (target, type) => {
    for (let index in _listeners) {
        let item = _listeners[index];

        // let target = item.target;
        // let type = item.type;
        // let listener = item.listener;

        if (target == item.target && type == item.type) {
            target.removeEventListener(type, item.callback);
        }
    }
};

/**
 * trigger event
 *
 * @param  {Element} el   element to trigger
 * @param  {string} type event-type (e.g. click) to trigger
 */
export const $trigger = (target, type) => {
    if (target) {
        let event = target.dispatchEvent(
            new Event(type, {
                cancelable: true,
            })
        );
    }
};

/**
 * Register new event
 *
 * @param {string} name the event
 * @param {object} optional data
 */
export const $event = (event, data = {}) => {
    new CustomEvent(event, data);
};

/**
 * Fire event
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} name the event
 */
export const $fire = (elm, type) => {
    let event = new Event(type);
    elm.dispatchEvent(event);
};

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event name
 * @param {Function} handler Function called when the event bubbles to target
 *                           from an element matching selector
 * @param {boolean} [capture] Capture the event
 */
export const $delegate = (target, selector, type, handler, capture) => {
    const dispatchEvent = (event) => {
        const targetElement = event.target;
        const potentialElements = target.querySelectorAll(selector);

        for (let i = potentialElements.length; i >= 0; i--) {
            if (potentialElements[i] === targetElement) {
                handler.call(targetElement, event);
                break;
            }
        }
    };

    $on(target, type, dispatchEvent, !!capture);
};

/**
 * Scroll to a given position
 *
 * @param  {integer} position position in pixel from top
 */
export const $scroll = (position, left = 0, behavior = 'smooth') => {
    if (isNaN(position) && qs(position)) {
        let box = qs(position).getBoundingClientRect();
        position = box.top + window.scrollY - config.scrollOffset;
    }

    if (position < 1) {
        return;
    }

    window.scrollTo({
        top: position,
        left: left,
        behavior: behavior,
    });
};

/**
 * fetch data from url
 *
 * for use with cors payload you have to enable put and options in the routing of laravel etc.
 * Route::match(['put', 'options'], '/', function () {});
 *
 * @autor   mburghammer
 * @date    2020-11-23T22:38:07+01:00
 * @version 0.0.1
 * @since   0.0.1
 * @param   {string}    url     url to fetch data from
 * @param   {String}    method  method to fetch (GET, POST, PUT, OPTIONS).
 * @param   {Object}    payload json payload
 * @param   {String}    mode    mode like cors, no-cors etc.
 * @return  {object}            json-object
 */
export const $fetch = async (url, method = 'POST', payload = {}, headers = {}, mode = 'cors') => {
    let data = await fetch(url, {
        headers: {
            // Accept: 'application/json',
            // 'Content-Type': 'application/json',
            ...headers,
        },
        method: method,
        mode: mode,
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (response.ok) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error('Failed to load'));
            }
        })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch(function (error) {
            return Promise.reject(new Error(error));
        });

    return data;
};

/**
 * Get given query parameter if exists
 *
 * @param  {string} name of query paramter
 */
export const $get = (paramName) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
};

/**
 * set cookie
 *
 * @param  {string} $var      cookie var
 * @param  {string} $value    cookie value
 * @param  {integer} $expire cookie expiring time in days. default: 30 days
 */
export const $sc = ($var, $value, $expire = 30) => {
    let date = new Date();
    // console.log(date);
    date.setDate(date.getDate() + $expire);
    // console.log(date);
    console.log(date.toUTCString);
    console.log(document.cookie);

    // eslint-disable-next-line
    console.log('search cookie: ' + $var + '=' + $value + ';');

    if (!document.cookie.split('; ').find((row) => row.startsWith($var + '=' + $value))) {
        console.log(
            'set cookie: ' + $var + '=' + $value + '; expires=' + date.toUTCString() + '; path=/'
        );
        document.cookie = $var + '=' + $value + '; expires=' + date.toUTCString() + '; path=/';
    }

    console.log(document.cookie);
    // alert(document.cookie);
};

/**
 * check cookie
 *
 * @param  {string} $var      cookie var
 * @param  {string} $value    cookie value
 * @return {null|bool|string}]     value if cookie exists and $value is null, true if value is given and same value as in cookie, false if value is given and not the same value as in cookie, null if $var not exists
 */
export const $cc = ($var, $value = null) => {
    // eslint-disable-next-line
    console.log('check cookie: ' + $var + '=' + $value);

    if (document.cookie.split(';').some((item) => item.trim().startsWith($var + '='))) {
        const value = document.cookie
            .split('; ')
            .find((row) => row.startsWith($var + '='))
            .split('=')[1];

        if ($value === null) {
            return value;
        }

        if ($value == value) {
            return true;
        }

        return false;
    }

    return null;
};

/**
 * delete cookie
 *
 * @param  {string} $var      cookie var
 * @param  {string} $value    cookie value
 * @return {bool}     true if cookie exists, false if no cookie found
 */
export const $dc = ($var, $value) => {
    // eslint-disable-next-line
    console.log('delete cookie: ' + $var + '=' + $value);

    if (!document.cookie.split('; ').find((row) => row.startsWith($var + '=' + $value))) {
        document.cookie = $var + '=' + $value + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        return true;
    }

    return false;
};

export const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// export const crypto = async (data, key1) => {
//     // Debug-Logging
//     console.log(JSON.stringify(data));

//     // const data = 'Very genuine data';

//     const key = await window.crypto.subtle.generateKey({
//             name: 'HMAC',
//             hash: {
//                 name: 'SHA-256'
//             },
//         },
//         true,
//         ['sign', 'verify']);

//     // Debug-Logging
//     console.log(key);

//     let enc = new TextEncoder().encode(JSON.stringify(data));
//     const signature = await window.crypto.subtle.sign('HMAC', key, enc);

//     signature.then(console.log(signature)); // ArrayBuffer(32)

//     const valid = await window.crypto.subtle.verify('HMAC', key, signature, enc);

//     console.log(valid);

//     return signature;
// };

export const obs = (target) => {
    // console.log('target');
    // alert(target);

    // let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    let observer = new MutationObserver((mutations) => {
        alert(mutation);
        mutations.forEach((mutation) => {
            console.log('test: ' + mutation.type);
            // if (typeof mutation.addedNodes[0] !== 'undefined') {
            console.log('test: ' + mutation.addedNodes[0]);

            // observer.disconnect();
            // return mutation.addedNodes[0];
            // }
        });
    });

    let config = {
        // attributes: true,
        childList: true,
        // characterData: true,
        // subtree: true
    };
    observer.observe(target, config);
};

export const slugify = (string) => {
    return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

export const lz = (num) => {
    num = (num < 10 ? '0' : '') + num;
    return num;
};

export const inject = (file, element = 'head') => {
    var link = '<link type="text/css" rel="Stylesheet" href="';
    link += file + '" />';

    if (qs(element)) {
        qs(element).insertAdjacentHTML('afterbegin', link);
    }
};

// await asyncTimeout(1000);
export const asyncTimeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export const checkMail = (email) => {
    let check = /^[\w-.]+@([\w-]+\.)+[\w-]{2,14}$/;
    return check.test(email);
};

export const round = (float, digits = 2, separator = ',') => {
    return float.toFixed(digits).replace('.', separator);
};

export const viewport = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};
