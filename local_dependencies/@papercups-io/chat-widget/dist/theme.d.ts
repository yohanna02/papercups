declare type ThemeSettings = {
    primary?: string;
};
export declare const getThemeConfig: (settings: ThemeSettings) => {
    useBodyStyles: boolean;
    space: number[];
    fonts: {
        body: string;
        heading: string;
        monospace: string;
    };
    fontSizes: number[];
    fontWeights: {
        body: number;
        heading: number;
        bold: number;
    };
    lineHeights: {
        body: number;
        heading: number;
    };
    colors: {
        text: string;
        background: string;
        primary: string;
        secondary: string;
        muted: string;
        gray: string;
        input: string;
        offset: string;
    };
    text: {
        default: {
            color: string;
            fontSize: number;
        };
        caps: {
            textTransform: string;
            letterSpacing: string;
        };
        heading: {
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
    };
    buttons: {
        primary: {
            cursor: string;
            outline: number;
            boxShadow: string;
            transition: string;
            '&:hover': {
                background: string;
                borderColor: string;
                boxShadow: string;
            };
            '&:active': {
                background: string;
                borderColor: string;
            };
        };
    };
    styles: {
        root: {
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h1: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h2: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h3: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h4: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h5: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        h6: {
            color: string;
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
            fontSize: number;
        };
        p: {
            color: string;
            fontFamily: string;
            fontWeight: string;
            lineHeight: string;
        };
        a: {
            color: string;
        };
        pre: {
            fontFamily: string;
            overflowX: string;
            code: {
                color: string;
            };
        };
        code: {
            fontFamily: string;
            fontSize: string;
        };
        table: {
            width: string;
            borderCollapse: string;
            borderSpacing: number;
        };
        th: {
            textAlign: string;
            borderBottomStyle: string;
        };
        td: {
            textAlign: string;
            borderBottomStyle: string;
        };
        img: {
            maxWidth: string;
        };
        textarea: {
            transparent: {
                border: string;
                boxShadow: string;
                resize: string;
                outline: number;
                '&:hover': {
                    border: string;
                    boxShadow: string;
                    resize: string;
                    outline: number;
                };
                '&:active': {
                    border: string;
                    boxShadow: string;
                    resize: string;
                    outline: number;
                };
                '&:focus': {
                    border: string;
                    boxShadow: string;
                    resize: string;
                    outline: number;
                };
            };
        };
    };
};
export default getThemeConfig;
