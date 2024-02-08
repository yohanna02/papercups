export declare const cookie: {
    get: (name: string) => string | null;
    parse: (name: string) => any;
    setSeconds: (name: string, value: string, seconds?: number | undefined, crossSubdomain?: string | undefined, isSecure?: boolean | undefined) => void;
    set: (name: string, value: string, days?: number | undefined, crossSubdomain?: string | undefined, isSecure?: boolean | undefined) => string | undefined;
    remove: (name: string, crossSubdomain: string) => void;
};
export declare const local: {
    isSupported: () => boolean;
    error: (msg: any) => void;
    get: (name: string) => string | null;
    parse: (name: string) => any;
    set: (name: string, value: string) => void;
    remove: (name: string) => void;
};
export declare const session: {
    isSupported: () => boolean;
    error: (msg: any) => void;
    get: (name: string) => string | null;
    parse: (name: string) => any;
    set: (name: string, value: string) => void;
    remove: (name: string) => void;
};
