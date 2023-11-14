import { Storage } from "../services/storage";

export type RootState = {
    [key in string]: number;
};

const cartStorage = new Storage("cart");

export const getItemsFromCart = (): RootState => {
    return cartStorage.getItem() || {};
};

export const addItemToCart = (id: string) => {
    const state = cartStorage.getItem() || {};

    if (state[id]) {
        state[id] += 1;
    } else {
        state[id] = 1;
    }

    cartStorage.setItem(state);
};
