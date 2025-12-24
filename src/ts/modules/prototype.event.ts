export {};

/**
 * Extend the String prototype
 */
declare global {
    interface String {
        fire(target: Element, type: string): void;
    }
}

/**
 * trigger event
 *
 * @param {Element} target Element to trigger
 * @param {string} type Event type (e.g. click) to trigger
 */
interface TriggerEventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

String.prototype.fire = function (target: Element, type: string): void {
    if (target) {
        const eventOptions: TriggerEventOptions = {
            cancelable: true,
        };
        target.dispatchEvent(new Event(type, eventOptions));
    }
};
