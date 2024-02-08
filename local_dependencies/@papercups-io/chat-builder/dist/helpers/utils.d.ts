import { Message } from './types';
export declare function noop(): void;
export declare function now(): Date;
export declare function sleep(ms: number): Promise<unknown>;
export declare function shorten(str: string, max: number, separator?: string): string;
export declare function shouldActivateGameMode(message?: string): boolean;
export declare function setupPostMessageHandlers(w: any, handler: (msg: any) => void): () => any;
export declare const setupCustomEventHandlers: (w: any, events: Array<string>, handlers: (e: any) => void) => typeof noop;
export declare const isCustomerMessage: (message: Message, customerId?: string | null | undefined) => boolean;
export declare const areDatesEqual: (x?: string | undefined, y?: string | undefined) => boolean;
export declare const isValidUuid: (id: any) => boolean;
