export declare const getBrowserVisibilityInfo: (document: any) => {
    hidden: string;
    event: string;
    state: string;
} | {
    hidden: null;
    event: null;
    state: null;
};
export declare const isWindowHidden: (document: any) => boolean;
export declare const addVisibilityEventListener: (document: any, handler: (e: any) => void) => () => any;
