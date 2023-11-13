type UnknowData =
    | Record<string, unknown>
    | Record<string, unknown>[]
    | string
    | string[];

export class Storage {
    #storage = window.localStorage;
    key: string;

    constructor(key: string) {
        this.key = key;
    }

    setItem(value: UnknowData) {
        this.#storage.setItem(this.key, JSON.stringify(value));
    }

    getItem() {
        const value = this.#storage.getItem(this.key);
        return value ? JSON.parse(value) : null;
    }
}
