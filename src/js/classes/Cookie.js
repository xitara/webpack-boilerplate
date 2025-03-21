export class Cookie {
    set(key, value, expire = 30) {
        let date = new Date();
        date.setDate(date.getDate() + expire);

        if (!document.cookie.split('; ').find((row) => row.startsWith(key + '=' + value))) {
            document.cookie = key + '=' + value + '; expires=' + date.toUTCString();
        }
    }

    /**
     * get cookie
     *
     * @param  {string} key      cookie var
     * @param  {string} value    cookie value
     * @return {null|bool|string}]     value if cookie exists and value is null, true if value is given and same value as in cookie, false if value is given and not the same value as in cookie, null if key not exists
     */
    get(key) {
        // eslint-disable-next-line
        // console.log('get cookie: ' + key + '=' + value);

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
     * @return {null|bool|string}]     value if cookie exists and value is null, true if value is given and same value as in cookie, false if value is given and not the same value as in cookie, null if key not exists
     */
    check(key, value = null) {
        // eslint-disable-next-line
        // console.log('check cookie: ' + key + '=' + value);

        if (document.cookie.split(';').some((item) => item.trim().startsWith(key + '='))) {
            const value = document.cookie
                .split('; ')
                .find((row) => row.startsWith(key + '='))
                .split('=')[1];

            if (value === null) {
                return value;
            }

            if (value == value) {
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
     * @return {bool}     true if cookie exists, false if no cookie found
     */
    remove(key, value) {
        // eslint-disable-next-line
        // console.log('remove cookie: ' + key + '=' + value);

        if (!document.cookie.split('; ').find((row) => row.startsWith(key + '=' + value))) {
            document.cookie = key + '=' + value + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            return true;
        }

        return false;
    }
}
