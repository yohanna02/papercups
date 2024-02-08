import { Socket, Channel } from 'phoenix';
import { eventWithTime } from 'rrweb/typings/types';
import Logger from './utils/logger';
declare global {
    interface Window {
        Storytime: any;
    }
}
export declare type CustomerMetadata = {
    name?: string;
    email?: string;
    external_id?: string;
    metadata?: {
        [key: string]: any;
    };
};
export declare const getWebsocketUrl: (baseUrl?: string) => string;
export declare const createNewCustomer: (accountId: string, metadata?: CustomerMetadata, baseUrl?: string) => Promise<any>;
export declare const updateCustomerMetadata: (customerId: string, metadata?: CustomerMetadata, baseUrl?: string) => Promise<any>;
export declare const findCustomerByExternalId: (externalId: string, accountId: string, baseUrl?: string) => Promise<any>;
declare type Config = {
    accountId: string;
    customerId?: string;
    blocklist?: Array<string>;
    baseUrl?: string;
    customer?: CustomerMetadata;
    debug?: boolean;
    publicKey?: string;
};
declare class Storytime {
    accountId: string;
    customer: CustomerMetadata;
    customerId: string | null;
    publicKey?: string;
    blocklist: Array<string>;
    baseUrl: string;
    logger: Logger;
    version: string;
    socket: Socket;
    channel: Channel;
    sessionId: string | null;
    stop?: () => void;
    unsubscribe?: () => void;
    constructor(config: Config);
    static init(config: Config): Storytime;
    listen(): Promise<Storytime>;
    finish(): void;
    handleVisibilityChange: (e?: any) => void;
    cacheCustomerId: (customerId: string) => void;
    formatCustomerMetadata: (metadata: any) => {};
    findOrCreateCustomerId: () => Promise<string>;
    checkForExistingCustomerId: () => Promise<string | null>;
    createBrowserSession: (accountId: string, customerId: string) => Promise<any>;
    isValidSessionId: (sessionId?: string | null | undefined) => Promise<any>;
    setBrowserSessionCustomer: (sessionId: string, customerId: string) => Promise<any>;
    restartBrowserSession: (sessionId: string) => void;
    finishBrowserSession: (sessionId: string) => void;
    captureReplayEvent(event: eventWithTime): void;
    startRecordingSession(): void;
    stopRecordingSession(): void;
    onConnectionSuccess(sessionId: string): void;
    onConnectionError(err: any): void;
    shouldEmitEvent(pathName: string): boolean;
    getSessionId(accountId: string, customerId: string): Promise<string>;
    getChannelName(sessionId: string): string;
}
export default Storytime;
