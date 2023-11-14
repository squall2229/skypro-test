import { ProductInCart } from "../ProductInCart";
import { CartListProps } from "./CartList.types";
import styles from "./CartList.module.scss";

export const CartList = ({ products }: CartListProps) => {
    return (
        <ul>
            {products.map((product) => (
                <li className={styles.item} key={product.id}>
                    <ProductInCart {...product} withInput />
                </li>
            ))}
        </ul>
    );
};
