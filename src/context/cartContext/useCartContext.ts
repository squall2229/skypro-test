import { useContext } from "react";
import { CartContext } from "./cartContext";

export const useCartContext = () => {
    const data = useContext(CartContext);

    return data;
};
