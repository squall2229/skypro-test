import { useCartContext } from "../../context/cartContext";
import { CartList } from "../CartList";
import styles from "./CartForm.module.scss";
import { transformProductDataByState } from "../../context/cartContext";

export const CartForm = () => {
    const { state } = useCartContext();

    const products = state ? transformProductDataByState(state) : [];

    return (
        <div className={styles.root}>
            <CartList products={products} />
        </div>
    );
};
