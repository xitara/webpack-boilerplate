import config from '../config';

export class Log {
    private static imageUrl: string = config.imageUrl;
    private static imageSize: string = '14px 14px';

    static log(
        message: string | Array<any> | Object,
        data: Array<any> | Object | null = null
    ): void {
        this.group('log', message, data);
    }

    static debug(
        message: string | Array<any> | Object,
        data: Array<any> | Object | null = null
    ): void {
        this.group('debug', message, data);
    }

    static info(
        message: string | Array<any> | Object,
        data: Array<any> | Object | null = null
    ): void {
        this.group('info', message, data);
    }

    static warn(
        message: string | Array<any> | Object,
        data: Array<any> | Object | null = null
    ): void {
        this.group('warn', message, data);
    }

    static group(
        level: 'log' | 'debug' | 'info' | 'warn' | 'error' = 'log',
        message: string | Array<any> | Object,
        data: Array<any> | Object | null = null
    ): void {
        const css = `
            background: url(${Log.imageUrl}) no-repeat;
            background-size: ${Log.imageSize};
            padding-left: 20px;
        `;

        if (typeof message !== 'string' && data === null) {
            console.groupCollapsed('~ %cLogger [' + level.toLocaleUpperCase() + ']', css);
            console.log(JSON.stringify(message, null, 4));
            console.log('Raw data:', message);
            console.groupEnd();
            return;
        }

        if (data) {
            console.groupCollapsed(
                '~ %cLogger [' + level.toLocaleUpperCase() + '] ' + message,
                css
            );
            console.log(JSON.stringify(data, null, 4));
            console.log('Raw data:', data);
            console.groupEnd();
            return;
        }

        console[level]('~ %cLogger [' + level.toUpperCase() + '] ' + message, css);
    }
}

// Aufruf der statischen Methoden
// Log.debug('Dies ist eine Debug-Nachricht');
// Log.debug('Dies ist eine Debug-Nachricht');
// Log.info('Dies ist eine Info-Nachricht');
// Log.warn('Dies ist eine Warnung');
// Log.error('Dies ist eine Fehlermeldung');
// Log.debug(config);
