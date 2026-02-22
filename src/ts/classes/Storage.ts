// import config from '../config.js';

export class LocalStorage {
    prefix: string | null;

    constructor(prefix: string | null = null) {
        if (prefix) {
            this.prefix = prefix + '_';
        } else {
            this.prefix = '';
        }
    }

    set(key: string, value: string) {
        return localStorage.setItem(this.prefix + key, value);
    }

    get(key: string) {
        return localStorage.getItem(this.prefix + key);
    }

    check(key: string) {
        return localStorage.getItem(this.prefix + key) == null ? null : true;
    }

    remove(key: string) {
        return localStorage.removeItem(this.prefix + key);
    }

    /**
     * Remove only items from local storage with the prefix
     */
    clear() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(this.prefix)) {
                localStorage.removeItem(key);
            }
        }
    }
}

export class SessionStorage {
    prefix: string | null;

    constructor(prefix: string | null = null) {
        if (prefix) {
            this.prefix = prefix + '_';
        } else {
            this.prefix = '';
        }
    }

    set(key: string, value: string) {
        return sessionStorage.setItem(this.prefix + key, value);
    }

    get(key: string) {
        return sessionStorage.getItem(this.prefix + key);
    }

    check(key: string) {
        return sessionStorage.getItem(this.prefix + key) == null ? null : true;
    }

    remove(key: string) {
        return sessionStorage.removeItem(this.prefix + key);
    }

    clear() {
        return sessionStorage.clear();
    }
}
