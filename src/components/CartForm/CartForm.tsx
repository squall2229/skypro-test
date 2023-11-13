import { useCartContext } from "../../context/cartContext";
import { CartList } from "../CartList";

export const CartForm = () => {
    const { getItems } = useCartContext();

    const products = getItems();

    return (
        <div>
            <CartList products={products} />
        </div>
    );
};
