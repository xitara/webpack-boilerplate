// import config from '../config.js';

export class LocalStorage {
    constructor(prefix = null) {
        if (prefix) {
            this.prefix = prefix + '_';
        } else {
            this.prefix = ''
        }
    }

    set(key, value) {
        return localStorage.setItem(this.prefix + key, value);
    }

    get(key) {
        return localStorage.getItem(this.prefix + key);
    }

    check(key) {
        return localStorage.getItem(this.prefix + key) == null ? null : true;
    }

    remove(key) {
        return localStorage.removeItem(this.prefix + key);
    }

    clear() {
        return localStorage.clear();
    }
}

export class SessionStorage {
    constructor(prefix = null) {
        if (prefix) {
            this.prefix = prefix + '_';
        } else {
            this.prefix = ''
        }
    }

    set(key, value) {
        return sessionStorage.setItem(this.prefix + key, value);
    }

    get(key) {
        return sessionStorage.getItem(this.prefix + key);
    }

    check(key) {
        return sessionStorage.getItem(this.prefix + key) == null ? null : true;
    }

    remove(key) {
        return sessionStorage.removeItem(this.prefix + key);
    }

    clear() {
        return sessionStorage.clear();
    }
}
