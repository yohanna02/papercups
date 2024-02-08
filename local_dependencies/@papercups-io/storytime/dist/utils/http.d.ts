export declare const sendBeacon: (url: string, data?: string | ArrayBuffer | ArrayBufferView | Blob | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined) => boolean;
export declare function getQueryParam(url: string, param: string): string;
export declare function request(url: string, data: any, options: any, callback?: (data: any) => void): void;
export declare function fetch(url: string, data: any, options: any, callback?: (data: any) => void): void;
