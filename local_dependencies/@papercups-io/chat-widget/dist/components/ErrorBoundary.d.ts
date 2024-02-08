import React from 'react';
declare type State = {
    error: any;
};
declare type Props = {};
declare class ErrorBoundary extends React.Component<Props, State> {
    state: {
        error: null;
    };
    static getDerivedStateFromError(error: any): {
        error: any;
    };
    componentDidCatch(error: any, info: any): void;
    render(): {} | null | undefined;
}
export default ErrorBoundary;
