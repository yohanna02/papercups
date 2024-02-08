import { CSSProperties } from 'react';
export declare const ToggleIconFilled: () => JSX.Element;
export declare const WidgetToggle: ({ isOpen, isDisabled, customIconUrl, iconVariant, style, toggle, }: {
    isOpen?: boolean | undefined;
    isDisabled?: boolean | undefined;
    customIconUrl?: string | undefined;
    iconVariant?: "outlined" | "filled" | undefined;
    style: CSSProperties;
    toggle: () => void;
}) => JSX.Element;
export default WidgetToggle;
