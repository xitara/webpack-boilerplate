export class Cookie {
    /**
     * set cookie
     *
     * @param  {string} key      cookie var
     * @param  {string} value    cookie value (default is 0)
     * @param  {number} expire   expire time in days. Default is 30 days
     * @return {boolean}     true if cookie is set, false if cookie is not set
     */
    set(key: string, value: string | number = 0, expire: number = 30): boolean {
        let date = new Date();
        date.setDate(date.getDate() + expire);

        if (document.cookie.split('; ').find((row) => row.startsWith(key + '=' + value))) {
            document.cookie = key + '=' + value + '; expires=' + date.toUTCString();
            return document.cookie
                .split('; ')
                .some((item) => item.trim().startsWith(key + '=' + value));
        }
    }

    /**
     * get cookie
     *
     * @param  {string} key      cookie var
     * @return {null|bool|string}     value if cookie exists and value is null, true if value is given and same value as in cookie, false if value is given and not the same value as in cookie, null if key not exists
     */
    get(key: string): null | boolean | string {
        if (document.cookie.split(';').some((item) => item.trim().startsWith(key + '='))) {
            const value = document.cookie
                .split('; ')
                .find((row) => row.startsWith(key + '='))
                .split('=')[1];

            if (value !== null) {
                return value;
            }
        }

        return null;
    }

    /**
     * check cookie
     *
     * @param  {string} key      cookie var
     * @param  {string} value    cookie value
     * @return {null|bool|string}     value if cookie exists and value is null, true if value is given and same value as in cookie, false if value is given and not the same value as in cookie, null if key not exists
     */
    check(key: string, value: string | null = null): null | boolean | string {
        // eslint-disable-next-line
        // console.log('check cookie: ' + key + '=' + value);

        if (document.cookie.split(';').some((item) => item.trim().startsWith(key + '='))) {
            const cookieValue = document.cookie
                .split('; ')
                .find((row) => row.startsWith(key + '='))
                .split('=')[1];

            if (value === null) {
                return cookieValue;
            }

            if (cookieValue === value) {
                return true;
            }

            return false;
        }

        return null;
    }

    /**
     * remove cookie
     *
     * @param  {string} key      cookie var
     * @param  {string} value    cookie value
     * @return {boolean}     true if cookie exists, false if no cookie found
     */
    remove(key: string, value: string): boolean {
        if (!document.cookie.split('; ').find((row) => row.startsWith(key + '=' + value))) {
            document.cookie = key + '=' + value + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            return true;
        }

        return false;
    }
}
