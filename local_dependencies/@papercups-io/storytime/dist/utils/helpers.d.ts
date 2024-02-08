export declare const ArrayProto: any[];
export declare const FuncProto: Function;
export declare const ObjProto: Object;
export declare const toString: () => string;
export declare const hasOwnProperty: (v: string | number | symbol) => boolean;
export declare const win: Window & typeof globalThis;
export declare const windowConsole: Console;
export declare const navigator: Navigator;
export declare const document: Document;
export declare const windowOpera: any;
export declare const screen: Screen;
export declare const userAgent: string;
export declare const intl: typeof Intl;
export declare const nativeBind: (this: Function, thisArg: any, ...argArray: any[]) => any;
export declare const nativeForEach: (callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void;
export declare const nativeIndexOf: (searchElement: any, fromIndex?: number | undefined) => number;
export declare const nativeIsArray: (arg: any) => arg is any[];
export declare const slice: (start?: number | undefined, end?: number | undefined) => any[];
export declare const breaker: {};
export declare const __NOOP: () => void;
export declare const __NOOPTIONS: {};
export declare function isFunction(f: any): boolean;
export declare function isString(obj: any): boolean;
export declare function includes(str: any, needle: any): boolean;
export declare function isUndefined(obj: any): boolean;
export declare function timestamp(): number;
export declare function each(obj: any, iterator: any, context?: any): void;
export declare function trim(str: string): string;
export declare function extend(obj: any, ...args: Array<any>): any;
export declare function bind(func: any, context: any): any;
export declare function truncate(obj: any, length: number): any;
export declare function stripEmptyProperties(obj: any): any;
export declare function HTTPBuildQuery(formdata: any, arg_separator?: any): string;
export declare const JSONEncode: (mixed_val: any) => string | undefined;
export declare const JSONDecode: (source: any) => any;
export declare function utf8Encode(string: string): string;
export declare function base64Encode(data: any): any;