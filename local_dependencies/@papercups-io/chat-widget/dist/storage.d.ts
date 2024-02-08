declare type StorageType = 'local' | 'session' | 'cookie' | 'memory' | 'none' | null;
export default function store(w: any, options?: {
    defaultType?: StorageType;
    openStateType?: StorageType;
}): {
    getCustomerId: () => any;
    setCustomerId: (id: string) => void;
    removeCustomerId: () => any;
    getOpenState: () => any;
    setOpenState: (state: string | boolean) => void;
    clearOpenState: () => any;
    getPopupSeen: () => any;
    setPopupSeen: (state: string | boolean) => void;
    clearPopupSeen: () => any;
};
export {};
