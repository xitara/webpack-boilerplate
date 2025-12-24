import config from '../config';

/**
 * Interface for event listeners
 */
interface Listener {
    type: string;
    callback: EventListenerOrEventListenerObject;
    options: any;
}

/**
 * Use a WeakMap to store listeners with DOM elements as keys
 */
const listenersMap = new WeakMap<Element | Window | Document, Listener[]>();

/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export const qs = (selector: string, scope: Element = null) => {
    return (scope || document).querySelector(selector) as HTMLElement;
};

/**
 * querySelectorAll wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export const qsa = (selector: string, scope: Element = null) => {
    return Array.from((scope || document).querySelectorAll(selector));
};

/**
 * addEventListener wrapper
 *
 * @param {Document|Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {EventListenerOrEventListenerObject} callback Event callback
 * @param {boolean} [options]  Event options
 */
export const on = (
    target: Document | Element | Window,
    type: string,
    callback: EventListenerOrEventListenerObject,
    options: any = {}
) => {
    const listeners = listenersMap.get(target) || [];
    listeners.push({ type: type, callback, ...options });
    target.addEventListener(type, callback, { ...options });
    if (type == 'click') {
        listeners.push({ type: 'touchend', callback, ...options });
        target.addEventListener('touchend', callback, { ...options });
    }

    // console.log(listenersObj);
};

/**
 * removeEventListener
 *
 * @param {Document | Element | Window} target Target Element
 * @param {string} type Event name to remove
 */
export const off = (target: Document | Element | Window, type: string): void => {
    const listeners = listenersMap.get(target);
    if (listeners) {
        listenersMap.set(
            target,
            listeners.filter((listener) => {
                if (listener.type === type) {
                    target.removeEventListener(type, listener.callback);
                    return false;
                }
                return true;
            })
        );
    }
};

/**
 * trigger event
 *
 * @param {Element} target Element to trigger
 * @param {string} type Event type (e.g. click) to trigger
 */
export const trigger = (target: Element, type: string): void => {
    if (target) {
        target.dispatchEvent(
            new Event(type, {
                cancelable: true,
            })
        );
    }
};

/**
 * Register new event
 *
 * @param {string} event The event name
 * @param {object} [data] Optional data
 */
export const event = (event: string, data: object = {}): CustomEvent => {
    return new CustomEvent(event, { detail: data });
};

/**
 * Fire event
 *
 * @param {Element} elm Element which the event must bubble to
 * @param {string} type The event name
 */
export const fire = (elm: Element, type: string): void => {
    let event = new Event(type);
    elm.dispatchEvent(event);
};

/**
 * Scroll to a given position
 *
 * @param {number | string} position Position in pixels from top or a selector
 * @param {number} [left] Position in pixels from left
 * @param {ScrollBehavior} [behavior] Scroll behavior
 */
export const scroll = (
    position: number | string,
    left: number = 0,
    behavior: ScrollBehavior = 'smooth'
): void => {
    if (typeof position === 'string' && qs(position)) {
        let box = qs(position)!.getBoundingClientRect();
        position = box.top + window.scrollY - config.scrollOffset;
    }

    if (typeof position === 'number' && position < 1) {
        return;
    }

    window.scrollTo({
        top: typeof position === 'number' ? position : 0,
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
 * call example:
 * const data = fetchData([LUR]);
 * data.then(data) => {
 *     console.log(data);
 * };
 *
 * @autor   mburghammer
 * @date    2020-11-23T22:38:07+01:00
 * @version 0.0.1
 * @since   0.0.1
 * @param   {string}    url     url to fetch data from
 * @param   {string}    method  method to fetch (GET, POST, PUT, OPTIONS).
 * @param   {object}    payload json payload
 * @param   {object}    headers additional headers
 * @param   {RequestMode}    mode    mode like cors, no-cors etc.
 * @return  {object}            json-object
 */
export const fetchData = async (
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'OPTIONS' = 'POST',
    payload: Record<string, any> = {},
    headers: Record<string, string> = {},
    mode: RequestMode = 'cors'
): Promise<any> => {
    console.log('dlb~ Url:', url);

    let data = await fetch(url, {
        headers: {
            ...headers,
        },
        method: method,
        mode: mode,
        // send no payload wenn method is GET
        body: method == 'GET' ? null : JSON.stringify(payload),
    })
        .then((response) => {
            console.log('dlb~', response);
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
 * @param {string} paramName Name of query parameter
 * @returns {string | null} The value of the query parameter or null
 */
export const getQueryParam = (paramName: string, url: string | null = null): string | null => {
    if (!url) url = window.location.search;

    /**
     * check if URL includes ? then split it to get the query part
     */
    if (url.includes('?')) {
        url = url.split('?')[1];
    }

    const urlParams = new URLSearchParams(url);
    return urlParams.get(paramName);
};

/**
 * Set cookie
 *
 * @param {string} name Cookie name
 * @param {string} value Cookie value
 * @param {number} expire Cookie expiring time in days. Default: 30 days
 */
export const setCookie = (name: string, value: string, expire: number = 30): void => {
    let date = new Date();
    date.setDate(date.getDate() + expire);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

/**
 * Check cookie
 *
 * @param {string} name Cookie name
 * @param {string} value Cookie value
 * @returns {boolean | string | null} Value if cookie exists and value is null, true if value is given and same value as in cookie, false if value is given and not the same value as in cookie, null if name not exists
 */
export const checkCookie = (name: string, value?: string): boolean | string | null => {
    const cookie = document.cookie.split('; ').find((row) => row.startsWith(`${name}=`));
    if (!cookie) return null;

    const cookieValue = cookie.split('=')[1];
    if (value === undefined) return cookieValue;
    return value === cookieValue;
};

/**
 * Delete cookie
 *
 * @param {string} name Cookie name
 * @param {string} value Cookie value
 * @returns {boolean} True if cookie exists, false if no cookie found
 */
export const deleteCookie = (name: string, value: string): boolean => {
    if (document.cookie.split('; ').find((row) => row.startsWith(`${name}=${value}`))) {
        document.cookie = `${name}=${value}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        return true;
    }
    return false;
};

/**
 * Generate a random string without special chars.
 *
 * @param {number} min - Lowest random number
 * @param {number} max - Highest random number
 * @return {number} The generated random number.
 */
export const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generate a random string without special chars.
 *
 * @param {number} length - The length of the string to generate.
 * @return {string} The generated random string.
 */
export const randomString = (length: number = 20): string => {
    let newString: string;
    let possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        newString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    return newString;
};

export const obs = (
    parentSelector: string,
    targetSelector: string,
    callback: Function,
    parameter: Array<any> = [],
    throttleTime: number = 5000 // in Millisekunden
) => {
    console.debug('utils~ obs targetSelector: ', targetSelector);

    let lastExecution = 0;

    const observer = new MutationObserver((mutations) => {
        const now = Date.now();

        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const targetElement = qs(targetSelector);

                if (targetElement && now - lastExecution > throttleTime) {
                    console.debug('utils~ target element found: ', targetElement);
                    console.log('utils~ obs callback: ', callback);

                    lastExecution = now;
                    callback(...parameter);
                }
            }
        });
    });

    const parent = qs(parentSelector);
    if (parent) {
        observer.observe(parent, { childList: true, subtree: true });
    } else {
        console.warn('utils~ obs: Parent selector not found:', parentSelector);
    }
};

/**
 * Slugify a string
 *
 * @param {string} string String to slugify
 * @returns {string} Slugified string
 */
export const slugify = (string: string): string => {
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

// await asyncTimeout(1000);
export const asyncTimeout = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export const checkMail = (email: string) => {
    let check = /^[\w-.]+@([\w-]+\.)+[\w-]{2,14}$/;
    return check.test(email);
};

export const round = (floatingNumber: number, digits = 2, separator = ',') => {
    console.log('utils~ round: ', floatingNumber, digits, separator);
    console.log('utils~ round toFixed: ', floatingNumber.toFixed(digits));
    console.log('utils~ round toFixed: ', floatingNumber.toFixed(digits).replace('.', separator));

    return floatingNumber.toFixed(digits).replace('.', separator);
};

export const viewport = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

export const toFloat = (stringToConvert: string, digits = 2) => {
    if (stringToConvert == '') {
        return null;
    }

    console.log('utils~ stringToConvert: ', stringToConvert);

    let cleanedString = stringToConvert.replace(/[^0-9\.,]/g, '');
    let commaCount = (cleanedString.match(/,/g) || []).length;
    let dotCount = (cleanedString.match(/\./g) || []).length;

    if (commaCount > 1 && dotCount === 1) {
        cleanedString = cleanedString.replace(/\./g, '');
        cleanedString = cleanedString.replace(/,/g, '.');
    } else if (commaCount === 1 && dotCount > 1) {
        cleanedString = cleanedString.replace(/,/g, '');
    } else if (commaCount === 1 && dotCount === 0) {
        cleanedString = cleanedString.replace(/,/g, '.');
        // } else if (commaCount === 0 && dotCount === 1) {
    } else if (commaCount === 1 && dotCount === 1) {
        if (cleanedString.indexOf(',') > cleanedString.indexOf('.')) {
            cleanedString = cleanedString.replace(/\./g, '');
            cleanedString = cleanedString.replace(/,/g, '.');
        } else {
            cleanedString = cleanedString.replace(/,/g, '');
        }
    }

    console.log('utils~ cleanedString: ', cleanedString);
    console.log('utils~ parseFloat(cleanedString): ', parseFloat(cleanedString));

    return parseFloat(parseFloat(cleanedString).toFixed(digits));
};
