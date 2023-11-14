import {
    transformProductDataByState,
    useCartContext,
} from "../../context/cartContext";
import { ProductInCart } from "../ProductInCart";
import styles from "./CartModal.module.scss";

export const CartModal = () => {
    const { state } = useCartContext();

    const products = state ? transformProductDataByState(state) : [];

    return (
        <div className={styles.root}>
            <ul>
                {products.map((product) => (
                    <li className={styles.item} key={product.id}>
                        <ProductInCart {...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
