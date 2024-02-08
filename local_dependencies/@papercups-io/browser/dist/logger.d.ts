declare class Logger {
    debugModeEnabled: boolean;
    constructor(debugModeEnabled?: boolean);
    debug(...args: any): void;
    log(...args: any): void;
    info(...args: any): void;
    warn(...args: any): void;
    error(...args: any): void;
}
export default Logger;
