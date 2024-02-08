import { Channel, Socket } from 'phoenix';
import { CustomerMetadata, Message, WidgetSettings } from './types';
import Logger from './logger';
declare type Config = {
    accountId: string;
    customerId?: string | null;
    baseUrl?: string;
    greeting?: string;
    customer?: CustomerMetadata;
    debug?: boolean;
    onSetCustomerId?: (customerId: string | null) => void;
    onSetConversationId?: (conversationId: string) => void;
    onSetWidgetSettings?: (settings: WidgetSettings) => void;
    onPresenceSync?: (data: any) => void;
    onConversationCreated?: (customerId: string, data: any) => void;
    onMessageCreated: (data: any) => void;
    onMessagesUpdated: (messages: Array<Message>) => void;
};
export declare class Papercups {
    socket: Socket;
    channel?: Channel;
    logger: Logger;
    storage: any;
    config: Config;
    customerId: string | null;
    conversationId: string | null;
    messages: Array<Message>;
    settings: WidgetSettings;
    constructor(config: Config);
    static init: (config: Config) => Papercups;
    load: () => Promise<void>;
    connect: () => void;
    disconnect: () => void;
    setWidgetSettings: (settings: WidgetSettings) => this;
    setCustomerId: (customerId: string | null) => this;
    setConversationId: (conversationId: string) => this;
    setMessages: (messages: Array<Message>) => this;
    listenForAgentAvailability: () => this;
    listenForNewConversations: (customerId: string) => this;
    joinConversationChannel: (conversationId: string, fallbackCustomerId?: string | undefined) => this;
    createNewConversation: (customerId: string) => Promise<any>;
    initializeNewConversation: (existingCustomerId?: string | null | undefined, email?: string | undefined) => Promise<this>;
    updateCustomerMetadata: (customerId: string, metadata: CustomerMetadata) => Promise<any>;
    createNewCustomer: (customer: CustomerMetadata) => Promise<any>;
    createOrUpdateCustomer: (existingCustomerId?: string | null | undefined, email?: string | undefined) => Promise<string>;
    fetchWidgetSettings: () => Promise<WidgetSettings>;
    updateWidgetSettingsMetadata: (metadata: any) => Promise<void | WidgetSettings>;
    findCustomerByExternalId: (metadata: CustomerMetadata) => Promise<string | null>;
    checkForExistingCustomer: (metadata: CustomerMetadata, defaultCustomerId?: string | null) => Promise<string | null>;
    updateExistingCustomer: (customerId: string, metadata?: {
        name?: string | undefined;
        email?: string | undefined;
        external_id?: string | undefined;
        metadata?: {
            [key: string]: any;
        } | undefined;
        host?: string | undefined;
        pathname?: string | undefined;
        current_url?: string | undefined;
        browser?: string | undefined;
        os?: string | undefined;
        ip?: string | undefined;
        time_zone?: string | undefined;
    } | null | undefined) => Promise<void>;
    fetchLatestCustomerConversation: (customerId: string) => Promise<any>;
    getCachedCustomerId: () => any;
    cacheCustomerId: (customerId: string | null) => void;
    markMessagesAsSeen: () => void;
    sendNewMessage: (message: Partial<Message>, email?: string | undefined) => Promise<void>;
    handleMessageCreated: (message: Message) => void;
    isValidCustomer: (customerId: string) => Promise<any>;
    isValidCustomerId: (customerId?: string | null | undefined) => Promise<any>;
    formatCustomerMetadata: () => {};
    getDefaultGreeting: () => Array<Message>;
    /**
     * TODO: CLEAN THIS SHIT UP BELOW!
     */
    notify: (type: 'slack' | 'email' | 'chat' | 'something_else_i_havent_thought_of_yet', message: string, options?: {}) => void;
    fetchLatestConversation: (fallbackCustomerId?: string | null) => Promise<any>;
}
export {};
