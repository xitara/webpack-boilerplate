import config from '../config';

// Originale Konsolenmethoden speichern
const originalConsole: Record<string, (...args: any[]) => void> = {
    log: console.log,
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
};

// Funktion, um Datei + Zeilennummer des Aufrufs zu extrahieren
const getCaller = (): string => {
    const stackLines = new Error().stack?.split('\n') || [];
    // console.log('dlb2~ stackLines:', stackLines);

    const callerLine = stackLines[3]?.trim() || 'undef'; // Stack[3] = der Aufrufende
    // console.log('dlb2~ callerLine:', callerLine);

    const match = callerLine.match(/\((.*):(\d+):(\d+)\)/);
    // console.log('dlb2~ match:', match);
    return match ? `${match[1]}:${match[2]}` : 'undef';

    // const stack1 = console.trace();
    // console.log('dlb2~ stack:', stack1);

    // const stack = new Error().stack?.split('\n') || [];
    // const caller = stack[2] || 'undef';
    //
    // return caller;
};

// Generische Logging-Funktion
const customConsole = (method: keyof Console, data: any[]): void => {
    const caller = getCaller();

    // const stack = getTrace();
    // console.log('dlb2~ stack:', stack);

    const css = `
    background: url(${config.imageUrl}) no-repeat;
    background-size: 14px 14px;
    padding-left: 20px;
    `;

    // console.trace();

    // console.log('dlb2~ caller:', caller);

    console.log('dlb2~ data:', data);
    console.log('dlb2~ data.length:', data.length);
    console.trace();
    // return;
    const message = data.length > 0 ? data.shift() : null;
    // console.log('dlb2~ message:', message);

    // console.log('dlb2~ data:', data);

    if (typeof message !== 'string' && data[0] === 'undefined') {
        console.log('dlb2~ no string, no object');

        console.groupCollapsed(`~ %cLogger [${method.toUpperCase()}]`, css);
        // console.log(...args);
        // originalConsole[method](message, ...data); // Original-Methode aufrufen
        // console.apply(console[method], data);
        originalConsole[method].apply(console, [caller]);
        originalConsole[method].apply(console, [JSON.stringify(data, null, 4)]);
        originalConsole[method].apply(console, ['Raw data:', ...data]);
        console.groupEnd();
    } else if (typeof data === 'object' && data.length > 0) {
        console.log('dlb2~ string, object');
        // const json = JSON.stringify(data, null, 4);

        console.groupCollapsed(`~ %cLogger [${method.toUpperCase()}] ${message}`, css);
        // originalConsole[method].apply(console, data);
        originalConsole[method].apply(console, [caller]);
        originalConsole[method].apply(console, [JSON.stringify(data, null, 4)]);
        // originalConsole[method].apply(console, [json]);
        originalConsole[method].apply(console, ['Raw data:', ...data]);
        console.groupEnd();
    } else {
        console.log('dlb2~ string, no object');
        console.log(`~ %cLogger [${method.toUpperCase()}] ${message}`, css);
        // originalConsole[method].apply(console, [caller]);
        // originalConsole[method].apply(console, [data]);
        //     console.debug('args:', args);
        //     (console[method] as (...data: any[]) => void)(
        //         `[${method.toUpperCase()}] ${caller} →`,
        //         ...args,
        //         css
        //     );
    }

    // if (args.length === 1 && typeof args[0] === "object") {
    //     console.groupCollapsed(`[${method.toUpperCase()}] ${caller}`);
    //     originalConsole[method](args[0]); // Original-Methode aufrufen
    //     console.groupEnd();
    // } else {
    //     originalConsole[method](`[${method.toUpperCase()}] ${caller} →`, ...args);
    // }
};

// const arg = args.length = 1 ? args : ...args;

// Konsole überschreiben mit Arrow Functions
// console.log = (...args: any[]) => customConsole('log', args);
console.debug = (arg, ...args) => {
    // console.log('dlb2~ args:', arg, args);
    customConsole('debug', [arg, args.length > 0 ? args : null]);
};
// console.info = (...args: any[]) => customConsole('info', args);
// console.warn = (...args: any[]) => customConsole('warn', args);
// console.error = (...args: any[]) => customConsole('error', args);
