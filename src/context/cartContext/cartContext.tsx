import { FC, PropsWithChildren, createContext, useState } from "react";
import { RootState } from "../../actions/addItemToCart";

export type CartContextProps = {
    state: RootState | null;
    addCount: (id: string) => void;
    removeCount: (id: string) => void;
    removeItem: (id: string) => void;
    clearItems: VoidFunction;
};

export const CartContext = createContext<CartContextProps>({
    state: {},
    addCount: () => {},
    removeCount: () => {},
    removeItem: () => {},
    clearItems: () => {},
});

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<RootState>({});

    const addCount = (id: string) => {
        setState((prevState) => {
            const newState = { ...prevState };

            if (newState[id]) {
                return {
                    ...newState,
                    [id]: prevState[id] + 1,
                };
            }

            return {
                ...newState,
                [id]: 1,
            };
        });
    };

    const removeCount = (id: string) => {
        setState((prevState) => {
            const newState = { ...prevState };

            if (newState[id]) {
                return {
                    ...newState,
                    [id]: prevState[id] - 1,
                };
            }

            return newState;
        });
    };

    const removeItem = (id: string) => {
        setState((prevState) => {
            const newState = { ...prevState };

            delete newState[id];

            return newState;
        });
    };

    const clearItems = () => {
        setState({});
    };

    return (
        <CartContext.Provider
            value={{
                state,
                addCount,
                removeCount,
                removeItem,
                clearItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
