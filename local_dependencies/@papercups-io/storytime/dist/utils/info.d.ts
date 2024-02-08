declare const info: {
    campaignParams: () => any;
    searchEngine: (referrer: any) => "google" | "bing" | "yahoo" | "duckduckgo" | null;
    searchInfo: (referrer: any) => any;
    /**
     * This function detects which browser is running this script.
     * The order of the checks are important since many user agents
     * include key words used in later checks.
     */
    browser: (user_agent: any, vendor: any, opera: any) => "" | "BlackBerry" | "Opera Mini" | "Opera" | "Internet Explorer Mobile" | "Samsung Internet" | "Microsoft Edge" | "Facebook Mobile" | "Chrome" | "Chrome iOS" | "UC Browser" | "Firefox iOS" | "Mobile Safari" | "Safari" | "Android Mobile" | "Konqueror" | "Firefox" | "Internet Explorer" | "Mozilla";
    /**
     * This function detects which browser version is running this script,
     * parsing major and minor version (e.g., 42.1). User agent strings from:
     * http://www.useragentstring.com/pages/useragentstring.php
     */
    browserVersion: (userAgent: any, vendor: any, opera: any) => number | null;
    os: () => "" | "Windows Phone" | "Windows" | "iOS" | "Android" | "BlackBerry" | "Mac OS X" | "Linux" | "Chrome OS";
    device: (user_agent: any) => "" | "Windows Phone" | "Android" | "BlackBerry" | "iPad" | "iPod Touch" | "iPhone";
    referringDomain: (referrer: string) => string;
    timezone: (intl: any) => any;
    properties: () => any;
    people_properties: () => any;
};
export declare function getUserInfo(): any;
export default info;
