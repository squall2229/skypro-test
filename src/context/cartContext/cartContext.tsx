import {
    FC,
    PropsWithChildren,
    createContext,
    useEffect,
    useState,
} from "react";
import { RootState, getItemsFromCart } from "../../actions/addItemToCart";
import productsData from "../../data/products.json";
import { ProductProps } from "../../components/ProductCard/ProductCard.types";

export type CartContextProps = {
    state: RootState | null;
    getItems: () => ProductProps[];
    addCount: (id: string) => void;
    removeCount: (id: string) => void;
    removeItem: (id: string) => void;
    clearItems: VoidFunction;
};

export const CartContext = createContext<CartContextProps>({
    state: {},
    getItems: () => [],
    addCount: () => {},
    removeCount: () => {},
    removeItem: () => {},
    clearItems: () => {},
});

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<RootState>(() => getItemsFromCart());

    const getItems = () => {
        return Object.keys(state).map((key) => {
            const item = productsData.find((i) => i.id === key);

            if (item) {
                return {
                    ...item,
                    count: state[key],
                };
            }
        });
    };

    const addCount = (id: string) => {
        setState((prevState) => ({
            ...prevState,
            [prevState[id]]: prevState[id] ? (prevState[id] = +1) : 1,
        }));
    };

    const removeCount = (id: string) => {
        setState((prevState) => ({
            ...prevState,
            [prevState[id]]: prevState[id] - 1,
        }));
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

    useEffect(() => {
        setState(state);
    }, [state]);

    return (
        <CartContext.Provider
            value={{
                state,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                getItems,
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
