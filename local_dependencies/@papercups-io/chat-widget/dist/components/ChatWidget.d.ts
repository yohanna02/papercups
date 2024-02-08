/** @jsx jsx */
import React, { CSSProperties } from 'react';
import { SharedProps } from './ChatWidgetContainer';
declare type ToggleButtonOptions = {
    isOpen: boolean;
    isDisabled: boolean;
    onToggleOpen: () => void;
};
declare type StyleOverrides = {
    chatContainer?: CSSProperties;
    toggleContainer?: CSSProperties;
    toggleButton?: CSSProperties;
};
declare type PositionConfig = {
    side: 'left' | 'right';
    offset: number;
};
declare type Props = SharedProps & {
    defaultIsOpen?: boolean;
    isOpenByDefault?: boolean;
    persistOpenState?: boolean;
    hideToggleButton?: boolean;
    iconVariant?: 'outlined' | 'filled';
    position?: 'left' | 'right' | PositionConfig;
    renderToggleButton?: (options: ToggleButtonOptions) => React.ReactElement;
    styles?: StyleOverrides;
};
declare const ChatWidget: (props: Props) => JSX.Element;
export default ChatWidget;
