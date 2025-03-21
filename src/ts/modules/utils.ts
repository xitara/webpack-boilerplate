import config from '../config';

/**
 * Interface for event listeners
 */
// interface Listener {
//     target: Element | Window | Document;
//     type: string;
//     callback: EventListenerOrEventListenerObject;
//     capture: boolean;
// }

// export let _listeners: Listener[] = [];

/**
 * Interface for event listeners
 */
interface Listener {
    type: string;
    callback: EventListenerOrEventListenerObject;
    capture: boolean;
}

/**
 * Use a WeakMap to store listeners with DOM elements as keys
 */
const listenersMap = new WeakMap<Element | Window | Document, Listener[]>();

/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} scope Optional scope element for the selector
 * @returns {Element | null} The matched element or null
 */
export const qs = (selector: string, scope?: Element): Element | null => {
    return (scope || document).querySelector<HTMLDivElement>(selector);
};

/**
 * querySelectorAll wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} scope Optional scope element for the selector
 * @returns {Element[]} Array of matched elements
 */
export const qsa = (selector: string, scope?: Element): Element[] => {
    return Array.from((scope || document).querySelectorAll<HTMLDivElement>(selector));
};

/**
 * addEventListener wrapper
 *
 * @param {Element | Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {EventListenerOrEventListenerObject} callback Event callback
 * @param {boolean} capture Capture the event
 */
export const on = (
    target: Element | Document | Window,
    type: string,
    callback: EventListenerOrEventListenerObject,
    capture?: boolean
): void => {
    const listeners = listenersMap.get(target) || [];
    listeners.push({ type, callback, capture });
    target.addEventListener(type, callback, capture);
    listenersMap.set(target, listeners);

    if (type === 'click') {
        target.addEventListener('touchend', callback, capture);
        listeners.push({ type: 'touchend', callback, capture });
    }
};

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event name
 * @param {boolean} capture Capture the event
 */
export const ona = (target: Element, selector: string, type: string, capture?: boolean): void => {
    qsa(selector, target).forEach((el) => {
        on(el, type, dispatchEvent, !!capture);
    });
};

/**
 * removeEventListener
 *
 * @param {Element | Window} target Target Element
 * @param {string} type Event name to remove
 */
export const off = (target: Element | Window, type: string): void => {
    const listeners = listenersMap.get(target);
    if (listeners) {
        listenersMap.set(
            target,
            listeners.filter((listener) => {
                if (listener.type === type) {
                    target.removeEventListener(type, listener.callback, listener.capture);
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
 * Fetch data from URL
 *
 * @param {string} url URL to fetch data from
 * @param {string} method Method to fetch (GET, POST, PUT, OPTIONS)
 * @param {object} payload JSON payload
 * @param {object} headers Headers for the request
 * @param {RequestMode} mode Mode like cors, no-cors, etc.
 * @returns {Promise<object>} JSON object
 */
export const fetchData = async (
    url: string,
    method: string = 'POST',
    payload: object = {},
    headers: object = {},
    mode: RequestMode = 'cors'
): Promise<object> => {
    let response = await fetch(url, {
        headers: {
            ...headers,
        },
        method: method,
        mode: mode,
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error('Failed to load');
    }

    return response.json();
};

/**
 * Get given query parameter if exists
 *
 * @param {string} paramName Name of query parameter
 * @returns {string | null} The value of the query parameter or null
 */
export const getQueryParam = (paramName: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
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
 * Generate a random number between min and max
 *
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number} Random number
 */
export const rand = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Observe mutations on a target element
 *
 * @param {Element} target Target element to observe
 */
export const observe = (target: Element): void => {
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            console.log('Mutation type:', mutation.type);
            console.log('Added nodes:', mutation.addedNodes);
        });
    });

    let config = {
        childList: true,
    };
    observer.observe(target, config);
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

/**
 * Add leading zero to a number
 *
 * @param {number} num Number to add leading zero
 * @returns {string} Number with leading zero
 */
export const lz = (num: number): string => {
    return (num < 10 ? '0' : '') + num;
};

/**
 * Inject a CSS file into the document
 *
 * @param {string} file CSS file to inject
 * @param {string} element Element to inject into
 */
export const inject = (file: string, element: string = 'head'): void => {
    const link = `<link type="text/css" rel="stylesheet" href="${file}" />`;
    qs(element)?.insertAdjacentHTML('afterbegin', link);
};

/**
 * Async timeout
 *
 * @param {number} ms Milliseconds to wait
 * @returns {Promise<void>} Promise that resolves after the timeout
 */
export const asyncTimeout = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

/**
 * Check if an email is valid
 *
 * @param {string} email Email to check
 * @returns {boolean} True if email is valid, false otherwise
 */
export const checkMail = (email: string): boolean => {
    const check = /^[\w-.]+@([\w-]+\.)+[\w-]{2,14}$/;
    return check.test(email);
};

/**
 * Round a float to a specified number of digits
 *
 * @param {number} float Float to round
 * @param {number} digits Number of digits to round to
 * @param {string} separator Separator for decimal point
 * @returns {string} Rounded float as a string
 */
export const round = (float: number, digits: number = 2, separator: string = ','): string => {
    return float.toFixed(digits).replace('.', separator);
};

/**
 * Get the viewport dimensions
 *
 * @returns {object} Viewport dimensions
 */
export const viewport = (): { width: number; height: number } => {
    return { width: window.innerWidth, height: window.innerHeight };
};

/**
 * Convert a string to a float
 *
 * @param {string} stringToConvert String to convert
 * @returns {number | null} Converted float or null
 */
export const toFloat = (stringToConvert: string): number | null => {
    if (stringToConvert === '') {
        return null;
    }

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
    } else if (commaCount === 1 && dotCount === 1) {
        if (cleanedString.indexOf(',') > cleanedString.indexOf('.')) {
            cleanedString = cleanedString.replace(/\./g, '');
            cleanedString = cleanedString.replace(/,/g, '.');
        } else {
            cleanedString = cleanedString.replace(/,/g, '');
        }
    }

    return parseFloat(cleanedString);
};
