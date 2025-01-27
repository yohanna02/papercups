export declare const helpers: (win: any) => {
    ArrayProto: any[];
    FuncProto: Function;
    ObjProto: Object;
    toString: () => string;
    hasOwnProperty: (v: string | number | symbol) => boolean;
    win: any;
    windowConsole: any;
    navigator: any;
    document: any;
    windowOpera: any;
    screen: any;
    userAgent: any;
    intl: any;
    nativeBind: (this: Function, thisArg: any, ...argArray: any[]) => any;
    nativeForEach: (callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void;
    nativeIndexOf: (searchElement: any, fromIndex?: number | undefined) => number;
    nativeIsArray: (arg: any) => arg is any[];
    slice: (start?: number | undefined, end?: number | undefined) => any[];
    breaker: {};
    __NOOP: () => void;
    __NOOPTIONS: {};
    isFunction: (f: any) => boolean;
    isString: (obj: any) => boolean;
    includes: (str: any, needle: any) => boolean;
    isUndefined: (obj: any) => boolean;
    timestamp: () => number;
    each: (obj: any, iterator: any, context?: any) => void;
    trim: (str: string) => string;
    extend: (obj: any, ...args: Array<any>) => any;
    bind: (func: any, context: any) => any;
    truncate: (obj: any, length: number) => any;
    stripEmptyProperties: (obj: any) => any;
    HTTPBuildQuery: (formdata: any, arg_separator?: any) => string;
    JSONEncode: (mixed_val: any) => any;
    JSONDecode: (source: any) => any;
    utf8Encode: (string: string) => string;
    base64Encode: (data: any) => any;
    getQueryParam: (url: string, param: string) => string;
};
