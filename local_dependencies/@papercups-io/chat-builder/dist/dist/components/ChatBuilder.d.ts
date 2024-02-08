import React from 'react';
import { Presence } from 'phoenix';
import { Papercups } from '@papercups-io/browser';
import { CustomerMetadata, Message, WidgetConfig, WidgetSettings } from '../helpers/types';
import Logger from '../helpers/logger';
export declare type Config = {
    accountId: string;
    customerId?: string;
    primaryColor?: string;
    title?: string;
    subtitle?: string;
    baseUrl?: string;
    greeting?: string;
    awayMessage?: string;
    newMessagePlaceholder?: string;
    emailInputPlaceholder?: string;
    newMessagesNotificationText?: string;
    shouldRequireEmail?: boolean;
    isMobile?: boolean;
    customer?: CustomerMetadata;
    companyName?: string;
    agentAvailableText?: string;
    agentUnavailableText?: string;
    showAgentAvailability?: boolean;
    isCloseable?: boolean;
};
export interface Options {
    config: Config;
    state: State;
}
export declare type OnSendMessage = (message: Partial<Message>, email?: string) => Promise<any>;
export declare type ScrollToRef = (el: any) => void;
export declare type HeaderProps = Options & {
    onClose: () => void;
};
export declare type BodyProps = Options & {
    scrollToRef: ScrollToRef;
};
export declare type FooterProps = Options & {
    onSendMessage: OnSendMessage;
};
export declare type ToggleButtonProps = Options & {
    onToggleOpen: () => void;
};
export declare type NotificationsProps = Options & {
    unread: Array<Message>;
    onToggleOpen: () => void;
};
export declare type ChildrenProps = Options & {
    onClose: () => void;
    onSendMessage: OnSendMessage;
    onToggleOpen: () => void;
    scrollToRef: ScrollToRef;
};
declare type Props = {
    config: Config;
    debug?: boolean;
    isOpenByDefault?: boolean;
    scrollIntoViewOptions?: boolean | ScrollIntoViewOptions;
    styles?: {
        header?: Record<string, any>;
        body?: Record<string, any>;
        footer?: Record<string, any>;
    };
    children?: (options: ChildrenProps) => React.ReactElement;
    header?: (options: HeaderProps) => React.ReactElement;
    body?: (options: BodyProps) => React.ReactElement;
    footer?: (options: FooterProps) => React.ReactElement;
    toggle?: (options: ToggleButtonProps) => React.ReactElement;
    notifications?: (options: NotificationsProps) => React.ReactElement;
    onChatLoaded?: (papercups: Papercups) => void;
    onChatOpened?: () => void;
    onChatClosed?: () => void;
    onMessageSent?: (message: Message) => void;
    onMessageReceived?: (message: Message) => void;
};
export declare type State = {
    config: WidgetConfig;
    messages: Array<Message>;
    customerId?: string | null;
    conversationId: string | null;
    availableAgents: Array<any>;
    isLoaded: boolean;
    isSending: boolean;
    isOpen: boolean;
    shouldDisplayNotifications: boolean;
    shouldDisplayBranding: boolean;
};
declare class ChatBuilder extends React.Component<Props, State> {
    scrollToEl: any;
    logger: Logger;
    subscriptions: Array<() => void>;
    papercups: Papercups;
    EVENTS: string[];
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    onWidgetSettingsLoaded: (settings: WidgetSettings) => void;
    customEventHandlers: (event: any) => void | null;
    setOpenState: (isOpen: boolean) => void;
    handleToggleOpen: () => void;
    handleChatLoaded: () => void;
    handleNewMessageCallbacks: (message: Message) => void;
    onSetCustomerId: (customerId: string) => void;
    onSetConversationId: (conversationId: string) => void;
    onConversationCreated: (customerId: string, data: any) => void;
    onMessagesUpdated: (messages: Array<Message>) => void;
    onPresenceSync: (presence: Presence) => void;
    scrollIntoView: () => void;
    handleUnseenMessages: (payload: any) => void;
    handleMessagesSeen: () => void;
    handleVisibilityChange: (e?: any) => void;
    handlePapercupsPlan: (payload?: any) => void;
    handleToggleDisplay: (payload?: any) => void;
    handleNewMessage: (message: Message) => void;
    shouldMarkAsSeen: (message: Message) => boolean;
    markMessagesAsSeen: () => void;
    handleSendMessage: (message: Partial<Message>, email?: string | undefined) => Promise<void>;
    renderUnreadMessages(): JSX.Element | null;
    render(): JSX.Element;
}
export default ChatBuilder;
