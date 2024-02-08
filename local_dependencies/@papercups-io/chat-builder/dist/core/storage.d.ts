export default function store(w: any): {
    getCustomerId: () => any;
    setCustomerId: (id: string) => void;
    removeCustomerId: () => void;
};
