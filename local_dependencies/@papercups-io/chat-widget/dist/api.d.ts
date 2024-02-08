export declare type User = {
    id: number;
    email: string;
    display_name?: string;
    full_name?: string;
    profile_photo_url?: string;
};
export declare type Message = {
    id?: string;
    body: string;
    sent_at?: string;
    seen_at?: string;
    created_at?: string;
    customer_id?: string;
    user_id?: number;
    user?: User;
    type?: 'bot' | 'agent' | 'customer';
};
export declare type CustomerMetadata = {
    name?: string;
    email?: string;
    external_id?: string;
    metadata?: {
        [key: string]: any;
    };
};
export declare type Account = {
    company_name?: string;
    subscription_plan?: string;
    is_outside_working_hours?: boolean;
};
export declare type WidgetSettings = {
    id?: string;
    subtitle?: string;
    title?: string;
    base_url?: string;
    color?: string;
    greeting?: string;
    away_message?: string;
    new_message_placeholder?: string;
    email_input_placeholder?: string;
    new_messages_notification_text?: string;
    is_branding_hidden?: boolean;
    show_agent_availability?: boolean;
    agent_available_text?: string;
    agent_unavailable_text?: string;
    require_email_upfront?: boolean;
    is_open_by_default?: boolean;
    custom_icon_url?: string;
    iframe_url_override?: string;
    icon_variant?: 'outlined' | 'filled';
    account?: Account;
};
export declare const fetchWidgetSettings: (query: {
    account_id: string;
    inbox_id?: string;
}, baseUrl?: string) => Promise<WidgetSettings>;
export declare const updateWidgetSettingsMetadata: (params: {
    account_id: string;
    inbox_id?: string;
    metadata: any;
}, baseUrl?: string) => Promise<WidgetSettings>;
